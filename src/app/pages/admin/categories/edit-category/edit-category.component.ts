import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
import { CategoryModel } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
// import 'rxjs/add/operator/map'; // you might need to import this, or not 
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit {

 
  addCategoryForm: FormGroup;
  param: any;  
  category: CategoryModel = new CategoryModel();
  id2: string;
  nameCheck: string = "okk";
  
  constructor(private actRoute: ActivatedRoute ,private categorySer: CategoryService,
    private router: Router,
    private fb: FormBuilder,private db: AngularFireDatabase,) {
     
      //this.createForm();

      const id = this.actRoute.snapshot.queryParamMap.get('categoryId');  // Getting current component's id or information using ActivatedRoute service
       this.id2 = id;
       // alert(this.id2);
       if( id !== null){
       this.categorySer.GetCategory(id).valueChanges().subscribe(data => {
         

          if(this.nameCheck == "okk"){
            console.log(data);
            this.param = data;
          // this.addCategoryForm.setValue(data); // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive for
          this.nameCheck = data.catName;
        } 
        })
      }
      if(this.param)
      {
        (<HTMLInputElement>document.getElementById('brand')).value = this.param.brand;
        (<HTMLInputElement>document.getElementById('parent')).value = this.param.parent;
      }
 }

  ngOnInit() {
    
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
      if(this.param)
      {
        (<HTMLInputElement>document.getElementById('brand')).value = this.param.brand;
        (<HTMLInputElement>document.getElementById('parent')).value = this.param.parent;
      }

    });
  }
  parents : any;
  brands : any;
  

  updateForm(){
    this.param = {
      'catName' : (<HTMLInputElement>document.getElementById('catName')).value,
      'brand' : (<HTMLInputElement>document.getElementById('brand')).value,
      'parent' : (<HTMLInputElement>document.getElementById('parent')).value,
      'path' : (<HTMLInputElement>document.getElementById('path')).value,
    };
    console.log(this.param);
    this.categorySer.updateCategory(this.id2, this.param);
    this.router.navigate(['admin/categories']);
         
       
    }

}
