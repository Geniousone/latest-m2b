import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ProductModel } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';
import { CategoryService } from '../../../../services/category.service';
import { map } from 'rxjs/operators';
import { SupplierService } from '../../../../services/supplier.service';
import { AuthService } from '../../../../authentication/core/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  tab : any;

  checkChild = "email";
  categories: any;
  addProductForm: FormGroup;
  users: any;
  user: any;
  product: ProductModel = new ProductModel();
  supplierId: string;
  isSupplierProduct: boolean;
  userEmail: string;
  ownEmail: any;
  status = [
    { name: "Enable", value: "Enable" },
    { name: "Disable", value: "Disable" }
  ];
  brand :any;
  brand_change(){
    this.brand = (<HTMLInputElement>document.getElementById('brand')).value;
  }
  parent : any;
  change_cat(){
    this.parent = (<HTMLInputElement>document.getElementById('parent')).value;
  }
  get_skuAttribute(i)
  {
    var att = new Object();


    for(let ii = 0;ii < this.attributes.length ; ii++)
    {
      // alert('sku_attr'+i+'_'+ii);
      if((<HTMLInputElement>document.getElementById('sku_attr'+i+'_'+ii)).value)
      {
      let name = this.attributes[ii].name;
        att[name]  = (<HTMLInputElement>document.getElementById('sku_attr'+i+'_'+ii)).value
      }
    }
    console.log(att);
    return att;

    

  }

  sku_change(i)
  {
    this.get_skuAttribute(i); 
    console.log(this.sku[i]);
    this.sku[i].SKU_Name = (<HTMLInputElement>document.getElementById('SKU_Name'+i)).value;
    this.sku[i].SKU_Price = (<HTMLInputElement>document.getElementById('SKU_Price'+i)).value;
    this.sku[i].SKU_Quantity = (<HTMLInputElement>document.getElementById('SKU_Quantity'+i)).value;
    this.sku[i].SKU_Image = (<HTMLInputElement>document.getElementById('SKU_Image'+i)).value;
    this.sku[i].attributes = this.get_skuAttribute(i);
    console.log(this.sku[i]);

  }
  constructor(
    private actroute: ActivatedRoute,
    private productSer: ProductService,
    private router: Router,
    private db: AngularFireDatabase,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private authService: AuthService,
    private supplierService: SupplierService) {
    this.brand = 0;
    this.parent = 0;
  this.attributes = [];
  this.sku = [];
  this.tab = 'tab-1';
  this.ngOnInit();
  let sk = {
  'SKU_Name' : '',
  'SKU_Price' : '',
  'SKU_Quantity' : '',
  'attributes' : [],
  'SKU_Image' : '',
  };
  this.sku.push(sk);


    this.createForm();
  }

  createForm() {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      product_image_url: ['', Validators.required],
      status: ['', Validators.required],
      color: ['', Validators.required],
      catId: [0, Validators.required],
      userEmail: ['', Validators.required],
      col_name1: ['', Validators.required],
      col_name2: ['', Validators.required],
      productSKU: this.fb.array([
        this.addProductSKU()
      ]),
    });
  }
  addProductSKU(): FormGroup {
    return this.fb.group({
      SKU_Name: ["", Validators.required],
      SKU_Price: [0, Validators.required],
      SKU_Quantity: [0, Validators.required],
      SKU_Cost: [0, Validators.required]
    })
  }
  //categories : any;
  brands : any;
  ngOnInit() {
    this.tab = 'tab-1';
       let list = this.db.list('/categories');
    list.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(categories => {
      this.categories = categories;
      console.log('categories');
      console.log(this.categories);
      

    });
    list = this.db.list('/brands');
    list.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(brands => {
      this.brands = brands;
      console.log('brands');
      console.log(this.brands);

    });
    this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
    this.getUserOption();
    this.getCategoriesList();
    this.getUsersList();
  }
  removeCat(index) {
    this.sku[index] = '';
    delete this.sku[index];
  }
  addSKU() {

    let sk = {
  'SKU_Name' : '',
  'SKU_Price' : '',
  'SKU_Quantity' : '',
  'attributes' : [],
  'SKU_Image' : '',
  };
  this.sku.push(sk);

  }
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  getCategoriesList() {
    // Use snapshotChanges().map() to store the key
    this.categoryService.getCategoriesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(categories => {
      this.categories = categories;
    });
  }
  getUsersList() {
    // Use snapshotChanges().map() to store the key
    this.supplierService.getUsersByOption("option", "Supplier").snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(users => {
      this.users = users;
    });
  }
  getUserOption() {
    this.supplierService.getUsersByOption(this.checkChild, this.ownEmail).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(users => {
      users.forEach(user => {
        this.user = user;
      })
      if (this.user.option == 'Supplier') {
        this.isSupplierProduct = false;
      } else {
        this.isSupplierProduct = true;
      }
      console.log(this.isSupplierProduct);
    });

  }
   attributes : any;
   del_attr(i)
   {
     this.attributes[i] = '';
   }
   dval(i,vi)
   {
    let val = this.attributes[i].values;   
    delete val[vi];

    this.attributes[i].values = val;
  }
  add_attr(){
    let n = {
    'name': (<HTMLInputElement>document.getElementById('attr_name')).value,
    'values' : [],
    'cval' :'',
    }; 
    this.attributes.push(n);
    (<HTMLInputElement>document.getElementById('attr_name')).value = '';
    console.log(this.attributes);
  }
  ch_an(i)
  {
    let name = (<HTMLInputElement>document.getElementById('att__name'+i)).value;
    console.log(name);
    this.attributes[i].name = name;
   //att__name' 
  }
  add_val(i)
  {
    let val = (<HTMLInputElement>document.getElementById('att__val'+i)).value;
    console.log(this.attributes[i].values);
    (<HTMLInputElement>document.getElementById('att__val'+i)).value = '';
    this.attributes[i].values.push(val);
  }
  sku : any;
  value_change(i, ai)
  {
    console.log('att__val' + i+'_'+ai);
    console.log((<HTMLInputElement>document.getElementById('att__val' + i+'_'+ai)).value);
    console.log(this.attributes[i].values[ai]);
    this.attributes[i].values[ai] = (<HTMLInputElement>document.getElementById('att__val' + i+'_'+ai)).value;
    console.log(this.attributes[i].values[ai]);
  }
  img_change(i)
  {
    let mid = 'File'+i;
    let did = 'SKU_Image'+i;
    let path = this.productSer.uploadImg(mid, 'products',did);
  }
  tryAddProduct() {
    let product = {
    "cat_id" : (<HTMLInputElement>document.getElementById('cat_id')).value,
    "product_name" : (<HTMLInputElement>document.getElementById('product_name')).value,
    "main_sku" : (<HTMLInputElement>document.getElementById('main_sku')).value,
    "attributes" : this.attributes,
    "productSKU" : this.sku
  };
    this.productSer.createProduct(product);
    this.router.navigate(['/admin/categories/products']);
    console.log(" cat iD " + this.product.cat_id);
    console.log(" user Email " + this.product.supplierEmail);
  }

}

