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
      console.log((<HTMLInputElement>document.getElementById('sku_attr'+i+'_'+ii)).value);
      if((<HTMLInputElement>document.getElementById('sku_attr'+i+'_'+ii)).value != '0')
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
    console.log(this.sku[i]);
    let img = 'IMG'+i;
    if(localStorage.getItem(img))
    {
      this.sku[i].SKU_Image = localStorage.getItem(img);
      localStorage.removeItem(img);
    }
    console.log(this.sku[i]);
    // this.get_skuAttribute(i); 
    /*console.log(this.sku[i]);
    console.log((<HTMLInputElement>document.getElementById('SKU_Name'+i)).value);
    this.sku[i].SKU_Name = (<HTMLInputElement>document.getElementById('SKU_Name'+i)).value;
    this.sku[i].SKU_Price = (<HTMLInputElement>document.getElementById('SKU_Price'+i)).value;
    this.sku[i].SKU_Quantity = (<HTMLInputElement>document.getElementById('SKU_Quantity'+i)).value;
    
    // this.sku[i].attributes = this.get_skuAttribute(i);
    console.log(this.sku[i]);*/

  }
  id2 : any;
  edit : any;
  loadedit(data)
  {
    console.log("data");
      this.attributes = data.attributes;
        console.log(data);
        (<HTMLInputElement>document.getElementById('brand')).value = data.brand;
        (<HTMLInputElement>document.getElementById('parent')).value = data.parent;
        (<HTMLInputElement>document.getElementById('product_name')).value = data.product_name;
        (<HTMLInputElement>document.getElementById('main_sku')).value = data.main_sku;
        (<HTMLInputElement>document.getElementById('cat_id')).value = data.cat_id;
        
        this.sku = data.productSKU;
        // alert(this.sku.length);
    for(let ii = 0;ii < this.sku.length;ii++)
    {
       // this.load_attr(ii);

    }

  }
  load_attr(i)
  {

    console.log("attributes setting");
    // let name = 'Color';
    // console.log(this.sku[i].attributes[name]);
    
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
    /*edit load--*/
    const id = this.actroute.snapshot.queryParamMap.get('productId');  // Getting current component's id or information using ActivatedRoute service
    this.id2 = id;
    if (id !== null) {
      this.productSer.GetProduct(id).valueChanges().subscribe(data => {
        
        this.edit = data;
        this.loadedit(data);
        
      })
    }
    /*edit load--*/
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
  'productSKU' : [],
  'SKU_Image' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEX///+/v7+8vLzKysr8/Pzg4ODFxcXb29vT09Pj4+P4+PjBwcH6+vry8vLY2NjIyMjs7Ozo6Oia8u11AAAEdUlEQVR4nO2d65bqIAxGp/Smrb34/i971KqlEC7FGuJZ3/7dKewJBgK4/PsDAAAAAAAAAAAAAAAA4KUam5+i3m94UsUPoVoYwlA6MIShfGAIQ/nAEIbyOcBQSeNww9NZGOXBhuq8+w1fxugfDG1gmB0YBoFhdmAYBIbZgWEQGGYHhkFgmB0YBoFhdmAYBIbZyWB4qVI6mgyv4WUeH7u007lL7vFeWA3n8rUFrZqWK5KchnWvPapOTGFkNDQPOJrhk45Hw2d4Ns+oVPlRz2NhMxyawkTtv2OWAJvhSBwzfjBO2+g/5TLs7BDeSF4eDP0Y+yiX4UydFKtT4pRxa3SKTcVchtQgLYrobhq0Kj7+XIb0aX+fZtipHfH/ScPlZZG5Jq9hk2RYP96lTnFPcxnWpGF52d2eNrPGPc5lOJC5NDrl65Sv1fs16nEuw8v20sdCP+9uTh8NZVSuYVvTnKlBmjAdaqu/uH8Qm2FVWuNUJYSwOu3tLV9tcelNw5SF9yZjRaVixvpwbrZRTKnyuyKysRXOGn/QBqpK25QzptVm9598eyfqXDaPnah+GlNmwr/aGOcqYl3DvJtYzXU7jvU1bbVmVdExE+pP7Qjb6TiiOBFmOPuyD7XyC+djWYadGt2KxE5PzMpWluHtXc6KQZ/rNYK5RpThfWXnrGzp6iRcQ0ky7KbHK+iBup3rtQZD6wZJhq+9HDIsri89BBsUZPguIal0Y871K6ECRY6hXkFaimQeXQjVUHIMNwWkuVax5/q1xcC6Rozh0G+7vYmidaqzCaJ/whBjaEZJr608Y7QIHvBIMbR3/dfB55jr3/hrKCGGxMHN+vmi53rtSW+uEWLYUj1/dsY1169tetc1MgwHaw9HU3TN9Svec0huw4os6CZHcO7dcc/163O+XMNteC0JRfdk0Aby6BNfDcW9i1EquzedI4R36vAYLfy5htnwtnBRvaHo/SZxjN8Nz7UO5ltf97WnMgbqHCfhRbmHKa/hdXl2qxjzQQsaunMNr+FzUlD62W8bORD9TM4gshpe3xVg+Z7BonJlmN55mMhpWGkV4GughtacsbgvLnAa6hXga6B666I9OGsoRsPtMbCa7l2q6OVaAs6uMxpejXDdd+SPSTMP+vyGdri6+bAQui8u8BmaIbwxUdcXkg0dNRTjOf6BNiSOGirrXYxjcXQ+632ag6EPE7kMiU/h4dA1FJfhgUnTzZTRkCOEt8apYcpj+P1E6u4+j+H3E+kCdUmKxZAjkS4QrbMY8nwKC7qGYjFkSaQL9rqGw5AthORhIoMhUyJ9ksPwsDI+Brv97xtWY8mJNUwZYtixYu0qyjhd+yYwDALD7MAwCAyzA8MgMMwODIPAMDtHGxZ1JYvjDRvWajCC7SYRfhsBhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvJJM/wpEgyv9U+R8iNaAAAAAAAAAAAAAAAAAP4r/gEYCYE2Xwz6DQAAAABJRU5ErkJggg==',
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
  'productSKU' : [],
  'SKU_Image' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEX///+/v7+8vLzKysr8/Pzg4ODFxcXb29vT09Pj4+P4+PjBwcH6+vry8vLY2NjIyMjs7Ozo6Oia8u11AAAEdUlEQVR4nO2d65bqIAxGp/Smrb34/i971KqlEC7FGuJZ3/7dKewJBgK4/PsDAAAAAAAAAAAAAAAA4KUam5+i3m94UsUPoVoYwlA6MIShfGAIQ/nAEIbyOcBQSeNww9NZGOXBhuq8+w1fxugfDG1gmB0YBoFhdmAYBIbZgWEQGGYHhkFgmB0YBoFhdmAYBIbZyWB4qVI6mgyv4WUeH7u007lL7vFeWA3n8rUFrZqWK5KchnWvPapOTGFkNDQPOJrhk45Hw2d4Ns+oVPlRz2NhMxyawkTtv2OWAJvhSBwzfjBO2+g/5TLs7BDeSF4eDP0Y+yiX4UydFKtT4pRxa3SKTcVchtQgLYrobhq0Kj7+XIb0aX+fZtipHfH/ScPlZZG5Jq9hk2RYP96lTnFPcxnWpGF52d2eNrPGPc5lOJC5NDrl65Sv1fs16nEuw8v20sdCP+9uTh8NZVSuYVvTnKlBmjAdaqu/uH8Qm2FVWuNUJYSwOu3tLV9tcelNw5SF9yZjRaVixvpwbrZRTKnyuyKysRXOGn/QBqpK25QzptVm9598eyfqXDaPnah+GlNmwr/aGOcqYl3DvJtYzXU7jvU1bbVmVdExE+pP7Qjb6TiiOBFmOPuyD7XyC+djWYadGt2KxE5PzMpWluHtXc6KQZ/rNYK5RpThfWXnrGzp6iRcQ0ky7KbHK+iBup3rtQZD6wZJhq+9HDIsri89BBsUZPguIal0Y871K6ECRY6hXkFaimQeXQjVUHIMNwWkuVax5/q1xcC6Rozh0G+7vYmidaqzCaJ/whBjaEZJr608Y7QIHvBIMbR3/dfB55jr3/hrKCGGxMHN+vmi53rtSW+uEWLYUj1/dsY1169tetc1MgwHaw9HU3TN9Svec0huw4os6CZHcO7dcc/163O+XMNteC0JRfdk0Aby6BNfDcW9i1EquzedI4R36vAYLfy5htnwtnBRvaHo/SZxjN8Nz7UO5ltf97WnMgbqHCfhRbmHKa/hdXl2qxjzQQsaunMNr+FzUlD62W8bORD9TM4gshpe3xVg+Z7BonJlmN55mMhpWGkV4GughtacsbgvLnAa6hXga6B666I9OGsoRsPtMbCa7l2q6OVaAs6uMxpejXDdd+SPSTMP+vyGdri6+bAQui8u8BmaIbwxUdcXkg0dNRTjOf6BNiSOGirrXYxjcXQ+632ag6EPE7kMiU/h4dA1FJfhgUnTzZTRkCOEt8apYcpj+P1E6u4+j+H3E+kCdUmKxZAjkS4QrbMY8nwKC7qGYjFkSaQL9rqGw5AthORhIoMhUyJ9ksPwsDI+Brv97xtWY8mJNUwZYtixYu0qyjhd+yYwDALD7MAwCAyzA8MgMMwODIPAMDtHGxZ1JYvjDRvWajCC7SYRfhsBhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvJJM/wpEgyv9U+R8iNaAAAAAAAAAAAAAAAAAP4r/gEYCYE2Xwz6DQAAAABJRU5ErkJggg==',
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
  imageError : any;
  fileChangeEvent(fileInput: any,i) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            console.log("Here"+fileInput.target.files[0].size);
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;

            


            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const img_height = rs.currentTarget['height'];
                    const img_width = rs.currentTarget['width'];

                    console.log(img_height, img_width);


                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                            max_height +
                            '*' +
                            max_width +
                            'px';
                        return false;
                    } else {
                        const imgBase64Path = e.target.result;
                        this.sku[i].SKU_Image = imgBase64Path;
                        let img = 'IMG'+i;
                        // (<HTMLInputElement>document.getElementById(img)).src = imgBase64Path;
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };

            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
  img_change(i)
  {
    let mid = 'File'+i;
    let did = 'SKU_Image'+i;
    let img = 'IMG'+i;
    let path = this.productSer.uploadImg(mid, 'products',did,img);
  }
  tryAddProduct() {
    if(this.edit)
    {
      for(let ii = 0;ii <=this.sku.length;ii++)
    {
       this.sku_change(ii);

    }
  }
    let product = {
    "brand" : (<HTMLInputElement>document.getElementById('brand')).value,
    "parent" : (<HTMLInputElement>document.getElementById('parent')).value,
    "cat_id" : (<HTMLInputElement>document.getElementById('cat_id')).value,
    "product_name" : (<HTMLInputElement>document.getElementById('product_name')).value,
    "main_sku" : (<HTMLInputElement>document.getElementById('main_sku')).value,
    "attributes" : this.attributes,
    "productSKU" : this.sku
  };

    if(this.edit)
    {
      if(!product['brand'])
      {
        delete product['brand'];
      }
      console.log(product);
      // return 0;
      let r = this.productSer.updateProduct(this.id2, product , ' ');
      console.log(r);
      // alert(r);
    }
    else
    {
      this.productSer.createProduct(product);
    }
    this.router.navigate(['/admin/categories/products']);
    console.log(" cat iD " + this.product.cat_id);
    console.log(" user Email " + this.product.supplierEmail);
  }

}

