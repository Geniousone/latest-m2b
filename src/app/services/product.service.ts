import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { ProductModel } from '../models/product.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { environment } from '../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs';
@Injectable()

export class ProductService {
  public dbPath = '/products';

  productsRef: AngularFireList<ProductModel> = null;
  productRef: AngularFireObject<ProductModel> = null;
  prodRef: AngularFireList<ProductModel> = null;
  folder: "undefined";

  selectProduct = new BehaviorSubject<any>([]);
  storageRef = firebase.storage().ref();
  metadata = {
    contentType: 'image/jpeg',
  };
  nameFile: string;
  productsByoption: AngularFireList<ProductModel>;

  constructor(
    private afs: AngularFirestore,
    private db: AngularFireDatabase
  ) {

    this.productsRef = db.list(this.dbPath);
  }
  selectProducts = this.selectProduct.asObservable();
  changeData(message: any) {
    this.selectProduct.next(message);
  }
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  uploadImg(id,folder = '', did = '',img = ''){

    let rurl = '';
    alert(id);
    alert((<HTMLInputElement>document.getElementById(id)));


    for (let selectedFile of [(<HTMLInputElement>document.getElementById(id)).files[0]]) {
      console.log("comming");
      this.nameFile = `${this.makeid()}${selectedFile.name}`
      let path = `/${folder}/${this.nameFile}`;
      let iRef = this.storageRef.child(path);
      iRef.put(selectedFile, this.metadata).then((snapshot) => {
        // alert(this.nameFile);
        // product.product_image_url g1= this.nameFile;
        this.storageRef.child(path).getDownloadURL().then((url) => {
          //Set Image URL
          // alert(url);
          if(did)
            {
              //did
              (<HTMLInputElement>document.getElementById(did)).value = url;
              localStorage.setItem(img,url);
              (<HTMLInputElement>document.getElementById(img)).src = url;
              // alert(url);
          }
          rurl = url;

          // return this.productsRef.push(product);
        }).catch((error) => {
          console.log(error);
        })
          ;
      });
    }
    return rurl;
  }


  createProduct(product) {

    return this.productsRef.push(product);
  }




  getProductsList(): AngularFireList<ProductModel> {
    return this.productsRef;
  }

  getProductbycat(option: string, value: string): AngularFireList<ProductModel> {

    console.log(option, value);
    this.productsByoption = this.db.list(this.dbPath, ref => ref.orderByChild(option).equalTo(value));
    return this.productsByoption;
  }


  GetProduct(id: string) {
    const itemPath = `${this.dbPath}/${id}`;
    this.productRef = this.db.object(itemPath);
    return this.productRef;
  }
  updateProduct(key: string, value: any, oldName: string) {
  return this.productsRef.update(key,value);
}

  deleteProduct(key: string): void {

    this.GetProduct(key).valueChanges().subscribe(data => {

      if (data.path) {
        this.storageRef.child(`${this.folder}/${data.product_image_url}`).delete().catch(error => this.handleError(error)).then(d => {
          this.productsRef.remove(key).catch(error => this.handleError(error));
        })
      } else {
        this.productsRef.remove(key).catch(error => this.handleError(error));
      }

    })

  }
  private handleError(error) {
    console.log(error);
  }


}
