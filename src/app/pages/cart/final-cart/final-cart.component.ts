import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderListModel, SupplierOrderInfo } from '../../../models/order-list.model';
import { OrderListService } from '../../../services/order-list.service';

import { SupplierOrderListModel } from '../../../models/supplier-order-list.model';
import { SupplierOrderListService } from '../../../services/supplier-order-list-service.service';
import { SupplierService } from '../../../services/supplier.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';

import { Http, URLSearchParams } from '@angular/http';
import { EmailService } from '../../../services/email.service';
import { Subscription } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

declare var SqPaymentForm: any;

// this.customer_sub = this.consumer_service.getCustomers().subscribe((result) => {
//       this.customerData = result

@Component({
  selector: 'app-final-cart',
  templateUrl: './final-cart.component.html',
  styleUrls: ['./final-cart.component.css']
})
export class FinalCartComponent implements OnInit, OnDestroy, AfterViewInit{
  private get_Token: Subscription;
  appUrl: string = environment.appUrl;
  checkChild = 'email';
  ownEmail: string;
  pmethod: string;
  thank: any;
  cerror: any;
  paymentForm: any;
  formLoaded =  false;
  pchange() {
    if (this.pmethod === 'credit') {
      // alert(this.credit);
      if (this.credit < this.tot) {
        // this.cerror = 'Your have insufecient balence!';

      }
    }
    this.ngOnInit();

  }
  show_accor(i) {
    if (this.acord[i]) {
      this.acord[i] = 0;
    } else {
      this.acord[i] = 1;
    }
  }
  acord  = new Array();
  isAddedCheck = 'isAdded';
  selectProduct: any;
  supplierOrder = new Array();
  totalQtPrice: number;
  totalSelectPrice = 0;
  deliveryAddress = '';
  supplierDetail = new SupplierOrderInfo();
  productobj = new OrderListModel();
  supplierProductobj = new SupplierOrderListModel();

  supplierProdstruct = { productName: '', productPrice: 0, quantity: 0, supplierId: '', addOn: 0 };
  removecartitem(ci) {
    const tutorialsRef = this.db.list('cart');
    const amount = (this.cart[ci].qty * this.cart[ci].sku.SKU_Price);
    this.tot = this.tot - amount;
    const r = tutorialsRef.remove(this.cart[ci].key);
    this.calculateTotal();
  }
  address = {
    'fname' : '',
    'lname' : '',
    'email' : '',
    'phone' : '',
    'address' : '',
    'town' : '',
    'state' : '',
    'postcode' : '',
    'country' : 'United States',

  };
  address_error = {
    'fname' : '1',
    'lname' : '1',
    'email' : '1',
    'phone' : '1',
    'address' : '1',
    'town' : '1',
    'state' : '1',
    'postcode' : '1',
    'country' : '1',

  };
  saddress = {
    'fname' : '',
    'lname' : '',
    'email' : '',
    'phone' : '',
    'address' : '',
    'town' : '',
    'state' : '',
    'postcode' : '',
    'country' : 'United States',

  };
  saddress_error = {
    'fname' : '1',
    'lname' : '1',
    'email' : '1',
    'phone' : '1',
    'address' : '1',
    'town' : '1',
    'state' : '1',
    'postcode' : '1',
    'country' : '1',

  };
  cart: any;
  userId: any;
  sameship: any;
  save_next: any;
  shipping_methods: any;
  smethod: any;
  apiData: any
  constructor(
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private productService: ProductService,
    private router: Router,
    private orderListService: OrderListService,
    // private http: Http,
    private sendEmailService: EmailService,
    private supplierOrderListService: SupplierOrderListService,
    private supplierSer: SupplierService,
    private db: AngularFireDatabase,
    private email_service: EmailService
  ) {
    this.pmethod = 'ccard';
    this.acord['acc1'] = 1;
    this.acord['acc2'] = 1;
    this.acord['acc3'] = 1;
    this.acord['acc4'] = 1;
    this.sameship = true;
    this.samount = 0;
    this.thank = 0;
    this.save_next = false;
    this.userId = localStorage.getItem('login');
    let list = this.db.list('/cart');
    list.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(cart => {
      this.cart = cart;
      this.calculateTotal();

    });
    list = this.db.list('/shipping_methods');

    list.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(shipping_methods => {
      this.shipping_methods = shipping_methods;
      this.smethod = 0;
    this.shipping();
    });

    this.getUserByOption();

  }
  card_error : any;
  checkout() {
        if (this.pmethod == 'ccard' || this.remaing_pay) {
        if((<HTMLInputElement>document.getElementById('card-nonce')).value)
        {

          let r = this.getdata();
      r.subscribe(data => {
        if(data['payment'])
        {

          let su_data = data;
          /*-----vard checkout----*/
          let remain = 0;

    if (this.tot <= 0) {
      return 0;
     }
    if (this.sameship) {
      this.saddress = this.address;
     }
    //apply validation
    let error = 0;
    
    for (const key in this.address) {
    const value = this.address[key];
    if (!value) {
      error = 1;
      this.address_error[key] = 0;
    }
}

    //apply validation
    if (!error) {
    const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const t  = dd + '/' + mm + '/' + yyyy;

    const lcart = [];
    this.cart.forEach((currentValue, index) => {
        if (currentValue.uid == this.userId) {
          lcart.push(currentValue);
        }
        });


    const order = {
      'date': t,
      'uid': this.userId,
      'tot': this.tot,
      'credit_pay': this.credit_pay,
      'cart': lcart,
      'address': this.address,
      'saddress': this.saddress,
      'status': 'Pending',
      'su_data': su_data,
    };
    if (this.save_next) {
      console.log(this.user);
      this.user.future = {
        'address': this.address,
        'saddress': this.saddress,
        'save_next': this.save_next,
        'sameship': this.sameship,
      };


           const r = this.db.list('/users').update(this.userId, this.user);
           console.log(r);
     }
     if (this.remaing_pay) {
      this.user.credit = 0;
      const r = this.db.list('/users').update(this.userId, this.user);
           console.log('credit update');
           console.log(r);
     }
    if (this.smethod) {
      // alert(this.smethod);
      order['shipping'] = this.shipping_methods[this.smethod];
    }
    if (this.pmethod) {
      order['pmethod'] = this.pmethod;
    }


    console.log(order);
    const r = this.db.list('/orderLists').push(order);
    if (r) {
      this.cart.forEach((currentValue, index) => {
        if (currentValue.uid == this.userId) {
          const tutorialsRef = this.db.list('cart');
    const r = tutorialsRef.remove(currentValue.key);
          lcart.push(currentValue);

        }
        });
      this.thank = 1;
      return 0;

    }
    }
          /*-----vard checkout----*/
        }
        console.log(data , "hello world");
    });
    }
    else{
      alert("Please validarte card information");
    }
      }
      else
      {
    let remain = 0;

    if (this.tot <= 0) {
      return 0;
     }
    if (this.sameship) {
      this.saddress = this.address;
     }
    //apply validation
    let error = 0;
    if (this.pmethod == 'credit') {
      // alert(this.credit);
      if (this.credit < this.tot) {
        this.cerror = 'Your have insufecient balence!';
        return 0;

      } 
      else 
      {
        remain = this.credit - this.tot;
      }
    }
    for (const key in this.address) {
    const value = this.address[key];
    if (!value) {
      error = 1;
      this.address_error[key] = 0;
    }
}

    //apply validation
    if (!error) {
    const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const t  = dd + '/' + mm + '/' + yyyy;

    const lcart = [];
    this.cart.forEach((currentValue, index) => {
        if (currentValue.uid == this.userId) {
          lcart.push(currentValue);
        }
        });


    const order = {
      'date': t,
      'uid': this.userId,
      'tot': this.tot,
      'cart': lcart,
      'address': this.address,
      'saddress': this.saddress,
      'status': 'Pending',
    };
    if (this.save_next) {
      console.log(this.user);
      this.user.future = {
        'address': this.address,
        'saddress': this.saddress,
        'save_next': this.save_next,
        'sameship': this.sameship,
      };


           const r = this.db.list('/users').update(this.userId, this.user);
           console.log(r);
     }
     if (remain) {
      this.user.credit = remain;
      const r = this.db.list('/users').update(this.userId, this.user);
           console.log('credit update');
           console.log(r);
     }
    if (this.smethod) {
      order['shipping'] = this.shipping_methods[this.smethod];
    }
    if (this.pmethod) {
      order['pmethod'] = this.pmethod;
    }


    console.log(order);
    const r = this.db.list('/orderLists').push(order);
    if (r) {
      this.cart.forEach((currentValue, index) => {
        if (currentValue.uid == this.userId) {
          const tutorialsRef = this.db.list('cart');
    const r = tutorialsRef.remove(currentValue.key);
          lcart.push(currentValue);

        }
        });
      this.thank = 1;
      return 0;

    }
    }
  }//not card
  }//checkout function end
  stot: any;
  tot: any;
  calculateTotal() {
    this.tot = 0;
    this.stot = 0;
    if (this.cart) {
      this.cart.forEach((currentValue, index) => {
          if (currentValue.uid == this.userId) {
            console.log(currentValue.sku.SKU_Price + 'x' + currentValue.qty);
            console.log((currentValue.sku.SKU_Price * currentValue.qty));
            this.tot = this.tot + (currentValue.sku.SKU_Price * currentValue.qty);
            console.log('I m here' + this.tot);
            this.stot = this.tot;
            this.tot = Number(this.tot) + Number(this.samount);
          }
          });
      }
      this.tot = this.tot + this.samount;
  }
  updateqty(i, type) {
    if (type == 'd') {
    if (this.cart[i].sku['SKU_Quantity'] && this.cart[i].qty) {
      if (this.cart[i].qty >= this.cart[i].sku['SKU_Quantity']) {
        this.cart[i].qty = this.cart[i].sku['SKU_Quantity'];
        this.toastrService.info(' Sorry stock not avalible!');
      }
    }
    return 0;
  }
    if (type == 'm') {
      this.cart[i].qty = this.cart[i].qty - 1;

    } else {
      this.cart[i].qty = this.cart[i].qty + 1;
    }

    if (this.cart[i].qty < 0) {
      this.cart[i].qty = 0;
    }
    this.calculateTotal();
  }
  orderList: any;
  su_token: any;
  getdata() {
    let amount = this.tot;
    if(this.remaing_pay)
    {
      amount = this.remaing_pay;
    }
        return this.http.get('https://m2b.foxaf.com/su.php?token='+(<HTMLInputElement>document.getElementById('card-nonce')).value+'&amount='+amount);
    }
    ngOnInit() {
        this.credit_pay = 0;
        this.card_error = '';
        this.orderList = JSON.parse(localStorage.getItem('orderData'));
        this.calculateTotal();
        // Set the application ID
        const applicationId = 'sandbox-sq0idb-I4axMUtAU2B3qNMtF5-6Sg';

        // Set the location ID
        const locationId = 'LAJTDYN6XHE7M';
        this.paymentForm = new SqPaymentForm({
            autoBuild: false,
            // Initialize the payment form elements
            applicationId: applicationId,
            locationId: locationId,
            inputClass: 'sq-input',

            // Customize the CSS for SqPaymentForm iframe elements
            inputStyles: [{
                fontSize: '.9em'
            }],



            // Initialize the credit card placeholders
            cardNumber: {
                elementId: 'sq-card-number',
                placeholder: '???????????? ???????????? ???????????? ????????????'
            },
            cvv: {
                elementId: 'sq-cvv',
                placeholder: 'CVV'
            },
            expirationDate: {
                elementId: 'sq-expiration-date',
                placeholder: 'MM/YY'
            },
            postalCode: {
                elementId: 'sq-postal-code'
            },

            // SqPaymentForm callback functions
            callbacks: {

                /*
                 * callback function: methodsSupported
                 * Triggered when: the page is loaded.
                 */
                methodsSupported: function (methods: any) {

                    const applePayBtn = document.getElementById('sq-apple-pay'); 
                    const applePayLabel = document.getElementById('sq-apple-pay-label');
                    const masterpassBtn = document.getElementById('sq-masterpass');
                    const masterpassLabel = document.getElementById('sq-masterpass-label');

                    // Only show the button if Apple Pay for Web is enabled
                    // Otherwise, display the wallet not enabled message.
                    if (methods.applePay === true) {
                        // @ts-ignore
                        applePayBtn.style.display = 'inline-block';
                        // @ts-ignore
                        applePayLabel.style.display = 'none' ;
                    }
                    // Only show the button if Masterpass is enabled
                    // Otherwise, display the wallet not enabled message.
                    if (methods.masterpass === true) {
                        // @ts-ignore
                        masterpassBtn.style.display = 'inline-block';
                        // @ts-ignore
                        masterpassLabel.style.display = 'none';
                    }
                },

                /*
                 * callback function: createPaymentRequest
                 * Triggered when: a digital wallet payment button is clicked.
                 */
                createPaymentRequest: function () {
                    // The payment request below is provided as
                    // guidance. You should add code to create the object
                    // programmatically.
                    return {
                        requestShippingAddress: true,
                        currencyCode: 'USD',
                        countryCode: 'US',
                        total: {
                            label: 'Hakuna',
                            amount: this.tot,
                            pending: false,
                        },
                        lineItems: [
                            {
                                label: 'Subtotal',
                                amount: '{{REPLACE_ME}}',
                                pending: false,
                            },
                            {
                                label: 'Shipping',
                                amount: '{{REPLACE_ME}}',
                                pending: true,
                            },
                            {
                                label: 'Tax',
                                amount: '{{REPLACE_ME}}',
                                pending: false,
                            }
                        ]
                    };
                },

                /*
                 * callback function: cardNonceResponseReceived
                 * Triggered when: SqPaymentForm completes a card nonce request
                 */
                cardNonceResponseReceived: function (errors: any, nonce: any, cardData: any)  {
                    if (errors) {
                        // Log errors from nonce generation to the Javascript console
                        console.log('Encountered errors:');
                        let errors1 = [];
                        let error_str = ''; 
                        errors.forEach(function(error: any) {
                            // errors1.push(error.message);
                            error_str = error_str +'<li>'+error.message+'</li>';
                        });
                        console.log(error_str);
                        // this.card_error = error_str;
                        (<HTMLInputElement>document.getElementById('card_error')).innerHTML = error_str;
                        //

                        return;
                    }
                    else
                    {
                      (<HTMLInputElement>document.getElementById('card-nonce')).value = nonce;
                      (<HTMLInputElement>document.getElementById('card_form')).style.display = 'none';
                      (<HTMLInputElement>document.getElementById('su_success')).style.display = 'block';
                      // this.su_token = nonce;
                    }


                    // alert('Nonce received: ' + nonce); /* FOR TESTING ONLY */
                    
                    // Assign the nonce value to the hidden form field
                    // document.getElementById('card-nonce').value = nonce;
                    //needs to be extracted from the
                    // this.su_token = nonce;
                     //casting so .value will work
                    //get this value from the database when the user is logged in
                    // (<HTMLInputElement>document.getElementById('sq-id')).value = 'CBASEC8F-Phq5_pV7UNi64_kX_4gAQ';

                    // POST the nonce form to the payment processing page
                    

                },

                /*
                 * callback function: unsupportedBrowserDetected
                 * Triggered when: the page loads and an unsupported browser is detected
                 */
                unsupportedBrowserDetected: function() {
                    /* PROVIDE FEEDBACK TO SITE VISITORS */
                },

                /*
                 * callback function: inputEventReceived
                 * Triggered when: visitors interact with SqPaymentForm iframe elements.
                 */
                inputEventReceived: function(inputEvent: any) {
                    switch (inputEvent.eventType) {
                        case 'focusClassAdded':
                            /* HANDLE AS DESIRED */
                            break;
                        case 'focusClassRemoved':
                            /* HANDLE AS DESIRED */
                            break;
                        case 'errorClassAdded':
                            /* HANDLE AS DESIRED */
                            break;
                        case 'errorClassRemoved':
                            /* HANDLE AS DESIRED */
                            break;
                        case 'cardBrandChanged':
                            /* HANDLE AS DESIRED */
                            break;
                        case 'postalCodeChanged':
                            /* HANDLE AS DESIRED */
                            break;
                    }
                },

                /*
                 * callback function: paymentFormLoaded
                 * Triggered when: SqPaymentForm is fully loaded
                 */
                paymentFormLoaded: function() {

                }
            }
        });
        this.paymentForm.build();
    }
    requestCardNonce(event: any) {

        // Don't submit the form until SqPaymentForm returns with a nonce
        event.preventDefault();

        // Request a nonce from the SqPaymentForm object
        this.paymentForm.requestCardNonce();
    }
    ngAfterViewInit(){}
    loadPaymentForm() {
        if (!this.formLoaded) {
            this.paymentForm.build();
            this.formLoaded = true;
        }
    }
  samount: any;
  shipping() {
    // alert(this.smethod);
    this.samount = this.shipping_methods[this.smethod].price;
    // alert(this.samount);
    this.calculateTotal();
  }
  credit_pay: any;
  remaing_pay: any;
  applyCredit(){

    //alert(this.ucredit);
    if(this.ucredit < this.tot)
    {
      this.credit_pay  = this.ucredit;
      this.remaing_pay  = this.tot - this.credit_pay;
      this.pmethod = 'ccard';
      this.ngOnInit();
    }
    else
    {
      this.credit_pay  = this.tot;
      this.remaing_pay  = this.tot - this.credit_pay;
    }
  }
  ngOnDestroy() {

  }
  credit: any;
  ucredit: any;
  user: any;
  getUserByOption() {
    this.ownEmail = JSON.parse(localStorage.getItem('user'));
    if (this.ownEmail['email']) {
      this.supplierSer.getUsersByOption('email', this.ownEmail['email']).snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe(users => {
        this.user = users[0];

        if (users[0]['future']) {
          this.address = users[0]['future']['address'];
          this.saddress = users[0]['future']['saddress'];
          this.save_next = users[0]['future']['save_next'];
          this.sameship = users[0]['future']['sameship'];
        }
        this.address.email = users[0].email.toString();
        this.address['phone'] = users[0].phoneNo.toString();
        this.ucredit = parseInt(users[0].credit.toString());
        this.credit = users[0].credit.toString();

      });
    }

  }
}