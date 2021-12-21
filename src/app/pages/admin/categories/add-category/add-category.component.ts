import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';
import { CategoryModel } from '../../../../models/category.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
// import 'rxjs/add/operator/map'; // you might need to import this, or not 
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  param : any;
  addCategoryForm: FormGroup;
  category: CategoryModel = new CategoryModel();

  constructor(private actroute: ActivatedRoute, private categorySer: CategoryService,
    private router: Router,
    private fb: FormBuilder,private db: AngularFireDatabase,) {
    let list = this.db.list('/categories');
    
    this.createForm(); 
  }
  getCategoriesList() {
    console.log("OK I m here");
   let list = this.db.list('/categories');
    list.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(categories => {
      this.parents = categories;
      console.log('categories');
      console.log(this.parents);

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
  }
  parents: any;
  brands: any;
  createForm() {
    this.addCategoryForm = this.fb.group({
      catName: ['', Validators.required],
      status: ['', Validators.required],
      catIcon: ['', Validators.required],
      userId: ['', Validators.required],

    });
  }

  ngOnInit() {
    this.param = {
      'catName' : '',
      'brand' : '',
      'parent' : '',
      'path' : '',
    };
    this.getCategoriesList();

  }

  tryAddCategory() { 
    
    this.param = {
      'catName' : (<HTMLInputElement>document.getElementById('catName')).value,
      'brand' : (<HTMLInputElement>document.getElementById('brand')).value,
      'parent' : (<HTMLInputElement>document.getElementById('parent')).value,
      'path' : (<HTMLInputElement>document.getElementById('path')).value,
    };
    console.log(this.param);
    //return 0;
    this.categorySer.createCategory(this.param);
    this.router.navigate(['admin/categories']);
  }




}
