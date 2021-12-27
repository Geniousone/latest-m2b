(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<!-- <send-email></send-email> -->\r\n<!-- <script src=\"https://www.gstatic.com/firebasejs/5.5.7/firebase.js\"></script>\r\n  -->\r\n \r\n<!--  -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _authentication_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/auth/auth.component */ "./src/app/authentication/auth/auth.component.ts");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "./src/app/pages/notfound/notfound.component.ts");
/* harmony import */ var _common_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/layout/header/header.component */ "./src/app/common/layout/header/header.component.ts");
/* harmony import */ var _pages_options_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/options/options.component */ "./src/app/pages/options/options.component.ts");
/* harmony import */ var _common_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/layout/footer/footer.component */ "./src/app/common/layout/footer/footer.component.ts");
/* harmony import */ var _pages_cart_basic_cart_basic_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/cart/basic-cart/basic-cart.component */ "./src/app/pages/cart/basic-cart/basic-cart.component.ts");
/* harmony import */ var _pages_cart_final_cart_final_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/cart/final-cart/final-cart.component */ "./src/app/pages/cart/final-cart/final-cart.component.ts");
/* harmony import */ var _pages_cart_cart_checkout_cart_checkout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/cart/cart-checkout/cart-checkout.component */ "./src/app/pages/cart/cart-checkout/cart-checkout.component.ts");
/* harmony import */ var _common_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/maintenance/maintenance.component */ "./src/app/common/maintenance/maintenance.component.ts");
/* harmony import */ var _pages_mym2b_basic_mym2b_basic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/mym2b-basic/mym2b-basic.component */ "./src/app/pages/mym2b-basic/mym2b-basic.component.ts");
/* harmony import */ var _pages_m2b_credit_m2b_credit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/m2b-credit/m2b-credit.component */ "./src/app/pages/m2b-credit/m2b-credit.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _pages_supplier_supplier_cashout_supplier_cashout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/supplier/supplier-cashout/supplier-cashout.component */ "./src/app/pages/supplier/supplier-cashout/supplier-cashout.component.ts");
/* harmony import */ var _pages_supplier_supplier_cash_history_supplier_cash_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/supplier/supplier-cash-history/supplier-cash-history.component */ "./src/app/pages/supplier/supplier-cash-history/supplier-cash-history.component.ts");
/* harmony import */ var _pages_supplier_supplier_under_construction_supplier_under_construction_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/supplier/supplier-under-construction/supplier-under-construction.component */ "./src/app/pages/supplier/supplier-under-construction/supplier-under-construction.component.ts");
/* harmony import */ var _pages_courier_courier_map_courier_map_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/courier/courier-map/courier-map.component */ "./src/app/pages/courier/courier-map/courier-map.component.ts");
/* harmony import */ var _pages_courier_courier_order_list_courier_order_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/courier/courier-order-list/courier-order-list.component */ "./src/app/pages/courier/courier-order-list/courier-order-list.component.ts");
/* harmony import */ var _pages_courier_courier_cash_out_courier_cash_out_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/courier/courier-cash-out/courier-cash-out.component */ "./src/app/pages/courier/courier-cash-out/courier-cash-out.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _authentication_logged_in_as_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./authentication/logged-in-as.service */ "./src/app/authentication/logged-in-as.service.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var _authentication_core_user_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./authentication/core/user.service */ "./src/app/authentication/core/user.service.ts");
/* harmony import */ var _authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./authentication/core/auth.guard */ "./src/app/authentication/core/auth.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _pages_admin_products_products_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/admin/products/products.component */ "./src/app/pages/admin/products/products.component.ts");
/* harmony import */ var _pages_admin_categories_categories_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/admin/categories/categories.component */ "./src/app/pages/admin/categories/categories.component.ts");
/* harmony import */ var _common_layout_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./common/layout/side-nav/side-nav.component */ "./src/app/common/layout/side-nav/side-nav.component.ts");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/admin/admin.component */ "./src/app/pages/admin/admin.component.ts");
/* harmony import */ var _pages_admin_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/admin/suppliers/suppliers.component */ "./src/app/pages/admin/suppliers/suppliers.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _pages_admin_products_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/admin/products/edit-product/edit-product.component */ "./src/app/pages/admin/products/edit-product/edit-product.component.ts");
/* harmony import */ var _pages_admin_categories_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/admin/categories/add-category/add-category.component */ "./src/app/pages/admin/categories/add-category/add-category.component.ts");
/* harmony import */ var _pages_admin_categories_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/admin/categories/edit-category/edit-category.component */ "./src/app/pages/admin/categories/edit-category/edit-category.component.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _pages_admin_products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/admin/products/add-product/add-product.component */ "./src/app/pages/admin/products/add-product/add-product.component.ts");
/* harmony import */ var _pages_admin_common_admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/admin/common/admin-footer/admin-footer.component */ "./src/app/pages/admin/common/admin-footer/admin-footer.component.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _pages_admin_suppliers_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/admin/suppliers/edit-user/edit-user.component */ "./src/app/pages/admin/suppliers/edit-user/edit-user.component.ts");
/* harmony import */ var _pages_home_category_tab_category_tab_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/home/category-tab/category-tab.component */ "./src/app/pages/home/category-tab/category-tab.component.ts");
/* harmony import */ var _pages_admin_products_cat_products_cat_products_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/admin/products/cat-products/cat-products.component */ "./src/app/pages/admin/products/cat-products/cat-products.component.ts");
/* harmony import */ var _pages_admin_businesses_businesses_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/admin/businesses/businesses.component */ "./src/app/pages/admin/businesses/businesses.component.ts");
/* harmony import */ var _pages_admin_businesses_edit_business_user_edit_business_user_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/admin/businesses/edit-business-user/edit-business-user.component */ "./src/app/pages/admin/businesses/edit-business-user/edit-business-user.component.ts");
/* harmony import */ var _pages_admin_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pages/admin/order-list/order-list.component */ "./src/app/pages/admin/order-list/order-list.component.ts");
/* harmony import */ var _services_order_list_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./services/order-list.service */ "./src/app/services/order-list.service.ts");
/* harmony import */ var _my_order_list_my_order_list_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./my-order-list/my-order-list.component */ "./src/app/my-order-list/my-order-list.component.ts");
/* harmony import */ var _services_chat_message_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./services/chat-message.service */ "./src/app/services/chat-message.service.ts");
/* harmony import */ var _pages_admin_chat_chat_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pages/admin/chat/chat.component */ "./src/app/pages/admin/chat/chat.component.ts");
/* harmony import */ var _pages_admin_chat_messages_messages_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/admin/chat/messages/messages.component */ "./src/app/pages/admin/chat/messages/messages.component.ts");
/* harmony import */ var _pages_supplier_supplier_home_supplier_home_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pages/supplier/supplier-home/supplier-home.component */ "./src/app/pages/supplier/supplier-home/supplier-home.component.ts");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _pages_home_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./pages/home/product-detail/product-detail.component */ "./src/app/pages/home/product-detail/product-detail.component.ts");
/* harmony import */ var _pages_admin_supplier_request_supplier_request_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./pages/admin/supplier-request/supplier-request.component */ "./src/app/pages/admin/supplier-request/supplier-request.component.ts");
/* harmony import */ var _pages_admin_setting_setting_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./pages/admin/setting/setting.component */ "./src/app/pages/admin/setting/setting.component.ts");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./pages/chat/chat.component */ "./src/app/pages/chat/chat.component.ts");
/* harmony import */ var _pages_chat_messages_messages_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./pages/chat/messages/messages.component */ "./src/app/pages/chat/messages/messages.component.ts");
/* harmony import */ var _my_order_list_return_request_return_request_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./my-order-list/return-request/return-request.component */ "./src/app/my-order-list/return-request/return-request.component.ts");
/* harmony import */ var _services_return_request_service__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./services/return-request.service */ "./src/app/services/return-request.service.ts");
/* harmony import */ var _pages_admin_return_request_for_supplier_return_request_for_supplier_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./pages/admin/return-request-for-supplier/return-request-for-supplier.component */ "./src/app/pages/admin/return-request-for-supplier/return-request-for-supplier.component.ts");
/* harmony import */ var _pages_admin_item_sold_item_sold_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./pages/admin/item-sold/item-sold.component */ "./src/app/pages/admin/item-sold/item-sold.component.ts");
/* harmony import */ var _pages_supplier_supplier_cashout_final_supplier_cashout_final_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./pages/supplier/supplier-cashout-final/supplier-cashout-final.component */ "./src/app/pages/supplier/supplier-cashout-final/supplier-cashout-final.component.ts");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _services_cashout_request_service__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./services/cashout-request.service */ "./src/app/services/cashout-request.service.ts");
/* harmony import */ var _pages_admin_cashout_request_cashout_request_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./pages/admin/cashout-request/cashout-request.component */ "./src/app/pages/admin/cashout-request/cashout-request.component.ts");
/* harmony import */ var _services_manage_user_service__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./services/manage-user.service */ "./src/app/services/manage-user.service.ts");
/* harmony import */ var _common_orders_orders_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./common/orders/orders.component */ "./src/app/common/orders/orders.component.ts");
/* harmony import */ var _pages_mym2b_mym2b_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./pages/mym2b/mym2b.component */ "./src/app/pages/mym2b/mym2b.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































































// import { HttpClient } from 'selenium-webdriver/http';





// import { PaymentService } from './services/payment.service';















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _authentication_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
                _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"],
                _common_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _pages_options_options_component__WEBPACK_IMPORTED_MODULE_10__["OptionsComponent"],
                _common_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _pages_cart_basic_cart_basic_cart_component__WEBPACK_IMPORTED_MODULE_12__["BasicCartComponent"],
                _pages_cart_final_cart_final_cart_component__WEBPACK_IMPORTED_MODULE_13__["FinalCartComponent"],
                _pages_cart_cart_checkout_cart_checkout_component__WEBPACK_IMPORTED_MODULE_14__["CartCheckoutComponent"],
                _common_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_15__["MaintenanceComponent"],
                _pages_mym2b_basic_mym2b_basic_component__WEBPACK_IMPORTED_MODULE_16__["Mym2bBasicComponent"],
                _pages_m2b_credit_m2b_credit_component__WEBPACK_IMPORTED_MODULE_17__["M2bCreditComponent"],
                _pages_supplier_supplier_cashout_supplier_cashout_component__WEBPACK_IMPORTED_MODULE_20__["SupplierCashoutComponent"],
                _pages_supplier_supplier_cash_history_supplier_cash_history_component__WEBPACK_IMPORTED_MODULE_21__["SupplierCashHistoryComponent"],
                _pages_supplier_supplier_under_construction_supplier_under_construction_component__WEBPACK_IMPORTED_MODULE_22__["SupplierUnderConstructionComponent"],
                _pages_courier_courier_map_courier_map_component__WEBPACK_IMPORTED_MODULE_23__["CourierMapComponent"],
                _pages_courier_courier_order_list_courier_order_list_component__WEBPACK_IMPORTED_MODULE_24__["CourierOrderListComponent"],
                _pages_courier_courier_cash_out_courier_cash_out_component__WEBPACK_IMPORTED_MODULE_25__["CourierCashOutComponent"],
                _pages_admin_products_products_component__WEBPACK_IMPORTED_MODULE_37__["ProductsComponent"],
                _pages_admin_categories_categories_component__WEBPACK_IMPORTED_MODULE_38__["CategoriesComponent"],
                _common_layout_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_39__["SideNavComponent"],
                _pages_admin_common_admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_48__["AdminFooterComponent"],
                _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_40__["AdminComponent"],
                _pages_admin_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_41__["SuppliersComponent"],
                _pages_admin_products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_47__["AddProductComponent"],
                _pages_admin_products_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_43__["EditProductComponent"],
                _pages_admin_categories_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_44__["AddCategoryComponent"],
                _pages_admin_categories_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_45__["EditCategoryComponent"],
                _pages_admin_suppliers_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_50__["EditUserComponent"],
                _pages_home_category_tab_category_tab_component__WEBPACK_IMPORTED_MODULE_51__["CategoryTabComponent"],
                _pages_admin_products_cat_products_cat_products_component__WEBPACK_IMPORTED_MODULE_52__["CatProductsComponent"],
                _pages_admin_businesses_businesses_component__WEBPACK_IMPORTED_MODULE_53__["BusinessesComponent"],
                _pages_admin_businesses_edit_business_user_edit_business_user_component__WEBPACK_IMPORTED_MODULE_54__["EditBusinessUserComponent"],
                _pages_admin_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_55__["OrderListComponent"],
                _my_order_list_my_order_list_component__WEBPACK_IMPORTED_MODULE_57__["MyOrderListComponent"],
                _pages_admin_chat_messages_messages_component__WEBPACK_IMPORTED_MODULE_60__["adminMessagesComponent"],
                _pages_admin_chat_chat_component__WEBPACK_IMPORTED_MODULE_59__["adminChatComponent"],
                _pages_chat_messages_messages_component__WEBPACK_IMPORTED_MODULE_70__["MessagesComponent"],
                _pages_supplier_supplier_home_supplier_home_component__WEBPACK_IMPORTED_MODULE_61__["SupplierHomeComponent"],
                _pages_home_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_65__["ProductDetailComponent"],
                _pages_admin_supplier_request_supplier_request_component__WEBPACK_IMPORTED_MODULE_66__["SupplierRequestComponent"],
                _pages_admin_setting_setting_component__WEBPACK_IMPORTED_MODULE_67__["SettingComponent"],
                _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_69__["ChatComponent"],
                _my_order_list_return_request_return_request_component__WEBPACK_IMPORTED_MODULE_71__["ReturnRequestComponent"],
                _pages_admin_return_request_for_supplier_return_request_for_supplier_component__WEBPACK_IMPORTED_MODULE_73__["ReturnRequestForSupplierComponent"],
                _pages_admin_item_sold_item_sold_component__WEBPACK_IMPORTED_MODULE_74__["ItemSoldComponent"],
                _pages_supplier_supplier_cashout_final_supplier_cashout_final_component__WEBPACK_IMPORTED_MODULE_75__["SupplierCashoutFinalComponent"],
                _pages_admin_cashout_request_cashout_request_component__WEBPACK_IMPORTED_MODULE_78__["CashoutRequestComponent"],
                _common_orders_orders_component__WEBPACK_IMPORTED_MODULE_80__["OrdersComponent"],
                _pages_mym2b_mym2b_component__WEBPACK_IMPORTED_MODULE_81__["Mym2bComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_82__["PaymentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_28__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_31__["environment"].firebase),
                // AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_29__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_30__["AngularFireAuthModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_63__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_64__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"],
                // RouterModule.forRoot(rootRouterConfig , { useHash: false }),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_36__["AngularFirestoreModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: false,
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBnQxUfgRItlly97RI2O2EmdTsUtwDhrD4'
                }),
            ],
            providers: [_authentication_logged_in_as_service__WEBPACK_IMPORTED_MODULE_27__["LoggedInAsService"],
                _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_32__["AuthService"],
                _authentication_core_user_service__WEBPACK_IMPORTED_MODULE_33__["UserService"],
                _authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"],
                _services_return_request_service__WEBPACK_IMPORTED_MODULE_72__["ReturnRequestService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_42__["ProductService"],
                _services_setting_service__WEBPACK_IMPORTED_MODULE_68__["SettingService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_46__["CategoryService"],
                _services_supplier_service__WEBPACK_IMPORTED_MODULE_49__["SupplierService"],
                _services_order_list_service__WEBPACK_IMPORTED_MODULE_56__["OrderListService"],
                _services_chat_message_service__WEBPACK_IMPORTED_MODULE_58__["ChatMessageService"],
                _services_manage_user_service__WEBPACK_IMPORTED_MODULE_79__["ManageUserService"],
                _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_62__["SupplierOrderListService"],
                _services_email_service__WEBPACK_IMPORTED_MODULE_76__["EmailService"],
                _services_cashout_request_service__WEBPACK_IMPORTED_MODULE_77__["CashoutRequestService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes, AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _pages_courier_courier_cash_out_courier_cash_out_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/courier/courier-cash-out/courier-cash-out.component */ "./src/app/pages/courier/courier-cash-out/courier-cash-out.component.ts");
/* harmony import */ var _pages_courier_courier_map_courier_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/courier/courier-map/courier-map.component */ "./src/app/pages/courier/courier-map/courier-map.component.ts");
/* harmony import */ var _pages_courier_courier_order_list_courier_order_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/courier/courier-order-list/courier-order-list.component */ "./src/app/pages/courier/courier-order-list/courier-order-list.component.ts");
/* harmony import */ var _pages_supplier_supplier_cashout_supplier_cashout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/supplier/supplier-cashout/supplier-cashout.component */ "./src/app/pages/supplier/supplier-cashout/supplier-cashout.component.ts");
/* harmony import */ var _pages_supplier_supplier_cash_history_supplier_cash_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/supplier/supplier-cash-history/supplier-cash-history.component */ "./src/app/pages/supplier/supplier-cash-history/supplier-cash-history.component.ts");
/* harmony import */ var _pages_supplier_supplier_under_construction_supplier_under_construction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/supplier/supplier-under-construction/supplier-under-construction.component */ "./src/app/pages/supplier/supplier-under-construction/supplier-under-construction.component.ts");
/* harmony import */ var _pages_m2b_credit_m2b_credit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/m2b-credit/m2b-credit.component */ "./src/app/pages/m2b-credit/m2b-credit.component.ts");
/* harmony import */ var _pages_mym2b_basic_mym2b_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/mym2b-basic/mym2b-basic.component */ "./src/app/pages/mym2b-basic/mym2b-basic.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _authentication_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentication/auth/auth.component */ "./src/app/authentication/auth/auth.component.ts");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "./src/app/pages/notfound/notfound.component.ts");
/* harmony import */ var _pages_options_options_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/options/options.component */ "./src/app/pages/options/options.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_cart_basic_cart_basic_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/cart/basic-cart/basic-cart.component */ "./src/app/pages/cart/basic-cart/basic-cart.component.ts");
/* harmony import */ var _pages_cart_final_cart_final_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/cart/final-cart/final-cart.component */ "./src/app/pages/cart/final-cart/final-cart.component.ts");
/* harmony import */ var _pages_cart_cart_checkout_cart_checkout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/cart/cart-checkout/cart-checkout.component */ "./src/app/pages/cart/cart-checkout/cart-checkout.component.ts");
/* harmony import */ var _common_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/maintenance/maintenance.component */ "./src/app/common/maintenance/maintenance.component.ts");
/* harmony import */ var _authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./authentication/core/auth.guard */ "./src/app/authentication/core/auth.guard.ts");
/* harmony import */ var _pages_admin_categories_categories_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/admin/categories/categories.component */ "./src/app/pages/admin/categories/categories.component.ts");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/admin/admin.component */ "./src/app/pages/admin/admin.component.ts");
/* harmony import */ var _pages_admin_products_products_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/admin/products/products.component */ "./src/app/pages/admin/products/products.component.ts");
/* harmony import */ var _pages_admin_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/admin/suppliers/suppliers.component */ "./src/app/pages/admin/suppliers/suppliers.component.ts");
/* harmony import */ var _pages_admin_products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/admin/products/add-product/add-product.component */ "./src/app/pages/admin/products/add-product/add-product.component.ts");
/* harmony import */ var _pages_admin_products_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/admin/products/edit-product/edit-product.component */ "./src/app/pages/admin/products/edit-product/edit-product.component.ts");
/* harmony import */ var _pages_admin_categories_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/admin/categories/add-category/add-category.component */ "./src/app/pages/admin/categories/add-category/add-category.component.ts");
/* harmony import */ var _pages_admin_categories_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/admin/categories/edit-category/edit-category.component */ "./src/app/pages/admin/categories/edit-category/edit-category.component.ts");
/* harmony import */ var _pages_admin_suppliers_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/admin/suppliers/edit-user/edit-user.component */ "./src/app/pages/admin/suppliers/edit-user/edit-user.component.ts");
/* harmony import */ var _pages_home_category_tab_category_tab_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/home/category-tab/category-tab.component */ "./src/app/pages/home/category-tab/category-tab.component.ts");
/* harmony import */ var _pages_admin_products_cat_products_cat_products_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/admin/products/cat-products/cat-products.component */ "./src/app/pages/admin/products/cat-products/cat-products.component.ts");
/* harmony import */ var _pages_admin_businesses_edit_business_user_edit_business_user_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/admin/businesses/edit-business-user/edit-business-user.component */ "./src/app/pages/admin/businesses/edit-business-user/edit-business-user.component.ts");
/* harmony import */ var _pages_admin_businesses_businesses_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/admin/businesses/businesses.component */ "./src/app/pages/admin/businesses/businesses.component.ts");
/* harmony import */ var _pages_admin_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/admin/order-list/order-list.component */ "./src/app/pages/admin/order-list/order-list.component.ts");
/* harmony import */ var _my_order_list_my_order_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./my-order-list/my-order-list.component */ "./src/app/my-order-list/my-order-list.component.ts");
/* harmony import */ var _pages_admin_chat_chat_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/admin/chat/chat.component */ "./src/app/pages/admin/chat/chat.component.ts");
/* harmony import */ var _pages_admin_chat_messages_messages_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/admin/chat/messages/messages.component */ "./src/app/pages/admin/chat/messages/messages.component.ts");
/* harmony import */ var _pages_supplier_supplier_home_supplier_home_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/supplier/supplier-home/supplier-home.component */ "./src/app/pages/supplier/supplier-home/supplier-home.component.ts");
/* harmony import */ var _authentication_core_user_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./authentication/core/user.service */ "./src/app/authentication/core/user.service.ts");
/* harmony import */ var _pages_home_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/home/product-detail/product-detail.component */ "./src/app/pages/home/product-detail/product-detail.component.ts");
/* harmony import */ var _pages_admin_supplier_request_supplier_request_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/admin/supplier-request/supplier-request.component */ "./src/app/pages/admin/supplier-request/supplier-request.component.ts");
/* harmony import */ var _pages_admin_setting_setting_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/admin/setting/setting.component */ "./src/app/pages/admin/setting/setting.component.ts");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/chat/chat.component */ "./src/app/pages/chat/chat.component.ts");
/* harmony import */ var _pages_chat_messages_messages_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/chat/messages/messages.component */ "./src/app/pages/chat/messages/messages.component.ts");
/* harmony import */ var _my_order_list_return_request_return_request_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./my-order-list/return-request/return-request.component */ "./src/app/my-order-list/return-request/return-request.component.ts");
/* harmony import */ var _pages_admin_return_request_for_supplier_return_request_for_supplier_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/admin/return-request-for-supplier/return-request-for-supplier.component */ "./src/app/pages/admin/return-request-for-supplier/return-request-for-supplier.component.ts");
/* harmony import */ var _pages_admin_item_sold_item_sold_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/admin/item-sold/item-sold.component */ "./src/app/pages/admin/item-sold/item-sold.component.ts");
/* harmony import */ var _pages_supplier_supplier_cashout_final_supplier_cashout_final_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/supplier/supplier-cashout-final/supplier-cashout-final.component */ "./src/app/pages/supplier/supplier-cashout-final/supplier-cashout-final.component.ts");
/* harmony import */ var _pages_admin_cashout_request_cashout_request_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/admin/cashout-request/cashout-request.component */ "./src/app/pages/admin/cashout-request/cashout-request.component.ts");








































// import { Role } from './models/user.model';









var routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        children: [
            {
                path: '',
                component: _authentication_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
                pathMatch: 'full',
                canActivate: [_authentication_core_user_service__WEBPACK_IMPORTED_MODULE_38__["UserService"]]
            },
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                        // pathMatch: 'full',
                        canActivate: [_authentication_core_user_service__WEBPACK_IMPORTED_MODULE_38__["UserService"]]
                    },
                ]
            },
            { path: 'register', component: _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], canActivate: [_authentication_core_user_service__WEBPACK_IMPORTED_MODULE_38__["UserService"]] },
            { path: 'options', component: _pages_options_options_component__WEBPACK_IMPORTED_MODULE_13__["OptionsComponent"], canActivate: [_authentication_core_user_service__WEBPACK_IMPORTED_MODULE_38__["UserService"]] },
        ]
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        children: [
            {
                path: '',
                redirectTo: 'HomeComponent',
                pathMatch: 'full'
            },
            {
                path: 'products',
                children: [
                    {
                        path: '',
                        component: _pages_home_category_tab_category_tab_component__WEBPACK_IMPORTED_MODULE_29__["CategoryTabComponent"],
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: 'buyback',
                children: [
                    {
                        path: '',
                        component: _pages_home_category_tab_category_tab_component__WEBPACK_IMPORTED_MODULE_29__["CategoryTabComponent"],
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    },
    {
        path: 'product-detail',
        component: _pages_home_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_39__["ProductDetailComponent"],
        pathMatch: 'full'
    },
    {
        path: 'basic-cart',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        // component: BasicCartComponent ,
        children: [
            {
                path: '',
                component: _pages_cart_basic_cart_basic_cart_component__WEBPACK_IMPORTED_MODULE_15__["BasicCartComponent"],
                // redirectTo: 'BasicCartComponent',
                pathMatch: 'full'
            },
            {
                path: 'final-cart',
                children: [
                    {
                        path: '',
                        component: _pages_cart_final_cart_final_cart_component__WEBPACK_IMPORTED_MODULE_16__["FinalCartComponent"],
                        pathMatch: 'full'
                    },
                    {
                        path: 'checkout-cart', component: _pages_cart_cart_checkout_cart_checkout_component__WEBPACK_IMPORTED_MODULE_17__["CartCheckoutComponent"],
                    }
                ]
            }
        ]
    },
    {
        path: 'mym2bBasic',
        component: _pages_mym2b_basic_mym2b_basic_component__WEBPACK_IMPORTED_MODULE_7__["Mym2bBasicComponent"],
        pathMatch: 'full',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'myOrderList',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _my_order_list_my_order_list_component__WEBPACK_IMPORTED_MODULE_34__["MyOrderListComponent"],
                pathMatch: 'full'
            },
            {
                path: 'returnRequest', component: _my_order_list_return_request_return_request_component__WEBPACK_IMPORTED_MODULE_44__["ReturnRequestComponent"]
            }
        ]
    },
    {
        path: 'chat',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_42__["ChatComponent"],
                pathMatch: 'full'
            },
            {
                path: 'messages', component: _pages_chat_messages_messages_component__WEBPACK_IMPORTED_MODULE_43__["MessagesComponent"]
            }
        ]
    },
    {
        path: 'mym2bCredit',
        component: _pages_m2b_credit_m2b_credit_component__WEBPACK_IMPORTED_MODULE_6__["M2bCreditComponent"],
        pathMatch: 'full',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'supplierHome',
        component: _pages_supplier_supplier_home_supplier_home_component__WEBPACK_IMPORTED_MODULE_37__["SupplierHomeComponent"],
        pathMatch: 'full',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'supplierUnderConstruction',
        component: _pages_supplier_supplier_under_construction_supplier_under_construction_component__WEBPACK_IMPORTED_MODULE_5__["SupplierUnderConstructionComponent"],
        pathMatch: 'full',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'supplierCashHistory',
        component: _pages_supplier_supplier_cash_history_supplier_cash_history_component__WEBPACK_IMPORTED_MODULE_4__["SupplierCashHistoryComponent"],
        pathMatch: 'full',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'supplierCashoutFinal',
        component: _pages_supplier_supplier_cashout_final_supplier_cashout_final_component__WEBPACK_IMPORTED_MODULE_47__["SupplierCashoutFinalComponent"],
        pathMatch: 'full',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'supplierCashout',
        component: _pages_supplier_supplier_cashout_supplier_cashout_component__WEBPACK_IMPORTED_MODULE_3__["SupplierCashoutComponent"],
        pathMatch: 'full',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'courier-map',
        component: _pages_courier_courier_map_courier_map_component__WEBPACK_IMPORTED_MODULE_1__["CourierMapComponent"],
        pathMatch: 'full',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'courier-order-list',
        component: _pages_courier_courier_order_list_courier_order_list_component__WEBPACK_IMPORTED_MODULE_2__["CourierOrderListComponent"],
        pathMatch: 'full',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'courier-cashout',
        component: _pages_courier_courier_cash_out_courier_cash_out_component__WEBPACK_IMPORTED_MODULE_0__["CourierCashOutComponent"],
        pathMatch: 'full',
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: 'admin',
        component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"],
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        children: [
            {
                path: '',
                redirectTo: 'AdminComponent',
                pathMatch: 'full'
            },
            {
                path: 'order-list',
                component: _pages_admin_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_33__["OrderListComponent"],
                pathMatch: 'full'
            },
            {
                path: 'settings',
                component: _pages_admin_setting_setting_component__WEBPACK_IMPORTED_MODULE_41__["SettingComponent"],
                pathMatch: 'full'
            },
            {
                path: 'suppliers-request',
                component: _pages_admin_supplier_request_supplier_request_component__WEBPACK_IMPORTED_MODULE_40__["SupplierRequestComponent"],
                pathMatch: 'full'
            },
            {
                path: 'suppliers-cashout-request',
                component: _pages_admin_cashout_request_cashout_request_component__WEBPACK_IMPORTED_MODULE_48__["CashoutRequestComponent"],
                pathMatch: 'full'
            },
            {
                path: 'suppliers-return-request',
                component: _pages_admin_return_request_for_supplier_return_request_for_supplier_component__WEBPACK_IMPORTED_MODULE_45__["ReturnRequestForSupplierComponent"],
                pathMatch: 'full'
            },
            {
                path: 'items-sold', component: _pages_admin_item_sold_item_sold_component__WEBPACK_IMPORTED_MODULE_46__["ItemSoldComponent"]
            },
            {
                path: 'chat',
                children: [
                    {
                        path: '',
                        component: _pages_admin_chat_chat_component__WEBPACK_IMPORTED_MODULE_35__["adminChatComponent"],
                        pathMatch: 'full'
                    },
                    {
                        path: 'messages', component: _pages_admin_chat_messages_messages_component__WEBPACK_IMPORTED_MODULE_36__["adminMessagesComponent"]
                    }
                ]
            },
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        component: _pages_admin_categories_categories_component__WEBPACK_IMPORTED_MODULE_20__["CategoriesComponent"],
                        pathMatch: 'full'
                    },
                    {
                        path: 'edit-category', component: _pages_admin_categories_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_27__["EditCategoryComponent"]
                    },
                    {
                        path: 'add-category', component: _pages_admin_categories_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_26__["AddCategoryComponent"]
                    },
                    {
                        path: 'products',
                        children: [
                            {
                                path: '',
                                component: _pages_admin_products_products_component__WEBPACK_IMPORTED_MODULE_22__["ProductsComponent"],
                                pathMatch: 'full'
                            },
                            {
                                path: 'edit-product', component: _pages_admin_products_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_25__["EditProductComponent"]
                            },
                            {
                                path: 'add-product', component: _pages_admin_products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_24__["AddProductComponent"]
                            },
                            {
                                path: 'cat-product', component: _pages_admin_products_cat_products_cat_products_component__WEBPACK_IMPORTED_MODULE_30__["CatProductsComponent"]
                            }
                        ]
                    },
                    {
                        path: 'suppliers',
                        children: [
                            {
                                path: '',
                                component: _pages_admin_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_23__["SuppliersComponent"],
                                pathMatch: 'full'
                            },
                            {
                                path: 'edit-supplier', component: _pages_admin_suppliers_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_28__["EditUserComponent"]
                            }
                        ]
                    },
                    {
                        path: 'businesses',
                        children: [
                            {
                                path: '',
                                component: _pages_admin_businesses_businesses_component__WEBPACK_IMPORTED_MODULE_32__["BusinessesComponent"],
                                pathMatch: 'full'
                            },
                            {
                                path: 'edit-businesses', component: _pages_admin_businesses_edit_business_user_edit_business_user_component__WEBPACK_IMPORTED_MODULE_31__["EditBusinessUserComponent"]
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        path: 'maintenance',
        component: _common_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_18__["MaintenanceComponent"],
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    },
    {
        path: '**',
        component: _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"],
        canActivate: [_authentication_core_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    }
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/authentication/auth/auth.component.css":
/*!********************************************************!*\
  !*** ./src/app/authentication/auth/auth.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/auth/auth.component.html":
/*!*********************************************************!*\
  !*** ./src/app/authentication/auth/auth.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"auth_wrapper\">\r\n  <div class=\"container\">\r\n  <form class=\"form-signin auth_box\">\r\n    <a class=\"brand text-center\">\r\n      <img src=\"../../../assets/img/Logo-splash.png\" alt=\"\" />\r\n      <h2 class=\"form-signin-heading\">Connecting Manufacturer to business</h2>\r\n    </a>\r\n\r\n    <div class=\"borderbtn\">\r\n      <button class=\"btn btn-lg btn-outline-light btn-block\" [routerLink]=\"['./login']\">Sign in</button>\r\n    </div>\r\n    <div class=\"borderbtn\">\r\n      <button class=\"btn btn-lg btn-outline-light btn-block\" [routerLink]=\"['./register']\">Sign up</button>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/authentication/auth/auth.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/authentication/auth/auth.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/authentication/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/authentication/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/authentication/core/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/authentication/core/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/user.service */ "./src/app/authentication/core/user.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/authentication/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(afAuth, userService, router, auth) {
        this.afAuth = afAuth;
        this.userService = userService;
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            localStorage.clear();
            this.router.navigate(['/auth']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authentication/core/auth.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/authentication/core/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import firebase from '@firebase/app';
// import { FirebaseUserModel } from '../core/user.model';


var AuthService = /** @class */ (function () {
    function AuthService(toastrService, afAuth, db) {
        this.toastrService = toastrService;
        this.afAuth = afAuth;
        this.db = db;
        this.dbPath = '/users';
        this.usersRef = null;
        this.AdminCheck = false;
        this.usersRef = db.list(this.dbPath);
    }
    AuthService.prototype.resetPassword = function (email) {
        var auth = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]();
        return auth.sendPasswordResetEmail(email)
            .then(function () { return console.log("email sent"); })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.doRegister = function (value, user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                //check for Business and Supplier and send email varification mail to user
                if (user.option == 'Courier' || user.option == 'Admin') {
                    _this.createCustomer(user);
                    resolve(res);
                }
                else {
                    var user1 = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
                    user1.sendEmailVerification().then(function (success) {
                        _this.toastrService.info('Verification Email is Send!');
                        _this.toastrService.info('Please verify your email to complete Registeration!');
                        _this.createCustomer(user);
                        resolve(res);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.createCustomer = function (user) {
        this.usersRef.push(user);
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('user');
        // Check whether the token is expired and return
        // true or false
        return token !== null && token !== undefined && token !== '';
    };
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.setAdminCheck = function () {
        this.AdminCheck = true;
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        this.AdminCheck = false;
        return new Promise(function (resolve, reject) {
            if (firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/authentication/core/user.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/authentication/core/user.service.ts ***!
  \*****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/authentication/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import firebase from '@firebase/app';
var UserService = /** @class */ (function () {
    function UserService(db, afAuth, auth, router) {
        this.db = db;
        this.afAuth = afAuth;
        this.auth = auth;
        this.router = router;
    }
    UserService.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['/home/products']);
            return false;
        }
        return true;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/authentication/logged-in-as.service.ts":
/*!********************************************************!*\
  !*** ./src/app/authentication/logged-in-as.service.ts ***!
  \********************************************************/
/*! exports provided: LoggedInAsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInAsService", function() { return LoggedInAsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoggedInAsService = /** @class */ (function () {
    function LoggedInAsService(_firebaseAuth, router) {
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentValue = this.userLoggedIn.asObservable();
    }
    LoggedInAsService.prototype.setValue = function (user) {
        this.option = user;
        this.userLoggedIn.next(user);
    };
    LoggedInAsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoggedInAsService);
    return LoggedInAsService;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <form class=\"form-signin middlebox\" [formGroup]=\"loginForm\" *ngIf=\"!isForgetPage\">\r\n    <div class=\"login_logo\">\r\n      <img src=\"../../../assets/img/Logo-splash.png\" alt=\"\" />\r\n        <h4>Connecting Manufacturer to business</h4>\r\n    </div>\r\n\r\n    <div class=\"sign_in\">\r\n      <h5>Please sign in</h5>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n      <input type=\"email\" id=\"inputEmail\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email address\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\r\n      <a class=\" forgot_btn\" style=\"margin:0;\" (click)=\"forgetPageSetup()\">Forgot password?</a>\r\n      <label class=\"error errorbox\">{{errorMessage}}</label>\r\n    </div>\r\n\r\n    <div class=\"checkbox \">\r\n      <label class=\" remember_me\">\r\n        <input type=\"checkbox\" class=\"\">\r\n        <span class=\"custom-control-indicator\"></span>\r\n        <span class=\"custom-control-description text\">\r\n          Remember me\r\n        </span>\r\n      </label>\r\n    </div>\r\n    <div class=\"borderbtn\">\r\n      <button class=\"btn btn-lg btn-outline-light btn-block\" type=\"submit\" (click)=\"tryLogin(loginForm.value)\">Sign\r\n        in</button>\r\n    </div>\r\n    <div class=\"mt-4 text\">\r\n      <p>\r\n        Don't have an account yet ? <a  [routerLink]=\"['/auth/register']\" [queryParams]=\"{ option: 'Business' }\" class=\"text-dark darkBtn\">Sign Up</a>\r\n      </p>\r\n       \r\n    </div>\r\n    </div>\r\n    \r\n    \r\n  </form>\r\n\r\n\r\n  <form class=\"form-signin\" [formGroup]=\"resetForm\" *ngIf=\"isForgetPage\">\r\n    <a class=\"brand text-center\">\r\n      <img src=\"../../../assets/img/Logo-splash.png\" alt=\"\" />\r\n      <h2 class=\"form-signin-heading text\"><i>Connecting Manufacturer to business</i></h2>\r\n    </a>\r\n    <h2 class=\"form-signin-heading text\">Please Enter Email Address</h2>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputEmail\" class=\"sr-only\">Email Address</label>\r\n      <input type=\"email\" id=\"inputEmail\" formControlName=\"email\" class=\"form-control\"\r\n        placeholder=\"Please Enter Email Address\">\r\n      <span class=\"mt-4 text\">Go Back to</span>\r\n      <a (click)=\"forgetPageSetup()\" class=\"text-dark darkBtn\">Sign In</a>\r\n      <span class=\"mt-4 text\" style=\"margin: 1%;\"> Or </span>\r\n      <a [routerLink]=\"['/auth/options']\" class=\"text-dark darkBtn\">Sign Up</a>\r\n    </div>\r\n\r\n    <div class=\"borderbtn\">\r\n      <button class=\"btn btn-lg btn-outline-light btn-block\" type=\"submit\"\r\n        (click)=\"resetPassword(resetForm.value)\">Reset Password</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _logged_in_as_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logged-in-as.service */ "./src/app/authentication/logged-in-as.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import firebase from '@firebase/app';

// import { map } from 'rxjs/add/operator/map';



var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastrService, authService, router, fb, supplierService, activeUserService) {
        this.toastrService = toastrService;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.supplierService = supplierService;
        this.activeUserService = activeUserService;
        this.errorMessage = '';
        this.checkChild = "email";
        this.isForgetPage = false;
        this.createForm();
        this.getAllUser();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.resetForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginComponent.prototype.checkOption = function (option) {
        this.activeUserService.setValue(option);
        if (option == 'Admin') {
            this.authService.setAdminCheck();
            this.router.navigate(['/admin']);
        }
        else if (option == 'Courier') {
            this.router.navigate(['/courier-map']);
        }
        else if (option == 'Supplier') {
            this.router.navigate(['/supplierHome']);
        }
        else if (option == 'Business') {
            this.router.navigate(['/home/products']);
        }
    };
    LoginComponent.prototype.GetOption = function (data) {
        if (data == 'Admin') {
            return _models_user_model__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin;
        }
        else if (data == 'Courier') {
            return _models_user_model__WEBPACK_IMPORTED_MODULE_9__["Role"].Courier;
        }
        else if (data == 'Supplier') {
            return _models_user_model__WEBPACK_IMPORTED_MODULE_9__["Role"].Supplier;
        }
        else if (data == 'Business') {
            return _models_user_model__WEBPACK_IMPORTED_MODULE_9__["Role"].Business;
        }
        else {
            return '0';
        }
    };
    LoginComponent.prototype.forgetPageSetup = function () {
        this.isForgetPage = !this.isForgetPage;
    };
    LoginComponent.prototype.resetPassword = function (value) {
        var _this = this;
        this.allUser.forEach(function (user) {
            if (user.email === value.email) {
                _this.isEmailFind = true;
            }
        });
        if (this.isEmailFind) {
            this.authService.resetPassword(value.email)
                .then(function () {
                _this.toastrService.success('Sent Password Reset Email! Check Your Email!');
                _this.isForgetPage = false;
            })
                .catch(function (error) { return _this.toastrService.error(error); });
        }
        else {
            this.toastrService.error("Your Email is Not found! Plaese Singn Up First!");
        }
    };
    LoginComponent.prototype.getAllUser = function () {
        var _this = this;
        this.supplierService.getUsersList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            _this.allUser = users;
        });
    };
    LoginComponent.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            _this.supplierService.getUsersByOption(_this.checkChild, value.email.toLowerCase()).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            })).subscribe(function (users) {
                console.log("Login user here");
                localStorage.setItem("login", users[0].key);
                console.log(localStorage.getItem('login'));
                _this.users = users;
                _this.activeUserService.setValue(_this.users[0].option);
                _this.ress = _this.GetOption(_this.users[0].option);
                localStorage.setItem("op", _this.ress);
                // alert(users[0].option);
                _this.checkOption(_this.users[0].option);
                //check for Business and Supplier and check email varification if not then send email varification mail to user
                if (_this.ress == _models_user_model__WEBPACK_IMPORTED_MODULE_9__["Role"].Courier || _this.ress == _models_user_model__WEBPACK_IMPORTED_MODULE_9__["Role"].Admin) {
                    localStorage.setItem("user", JSON.stringify(res));
                }
                else {
                    if (_this.ress == _models_user_model__WEBPACK_IMPORTED_MODULE_9__["Role"].Supplier) {
                        if (res.emailVerified === true && _this.users[0].requestApprove == "1") {
                            localStorage.setItem("user", JSON.stringify(res));
                        }
                        else if (_this.users[0].requestApprove == "0") {
                            _this.toastrService.info('Your Request is Not Approved By Admin!');
                        }
                        else {
                            res.sendEmailVerification().then(function (success) {
                                _this.toastrService.info('Please verify your email first and Try Again!');
                                _this.authService.doLogout();
                            }).catch(function (err) {
                                _this.toastrService.error("Check Your Email and Please verify your email first then Try Again! ");
                                _this.toastrService.error(err);
                            });
                        }
                    }
                    else {
                        if (res.emailVerified === true) {
                            localStorage.setItem("user", JSON.stringify(res));
                        }
                        else {
                            res.sendEmailVerification().then(function (success) {
                                _this.toastrService.info('Please verify your email first and Try Again!');
                                _this.authService.doLogout();
                            }).catch(function (err) {
                                _this.toastrService.error("Check Your Email and Please verify your email first then Try Again! ");
                                _this.toastrService.error(err);
                            });
                        }
                    }
                }
            });
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_6__["SupplierService"],
            _logged_in_as_service__WEBPACK_IMPORTED_MODULE_4__["LoggedInAsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <form class=\"form-signin middlebox\" [formGroup]=\"registerForm\" id=\"register_page\">\r\n        <div class=\"login_logo\">\r\n            <img src=\"../../../assets/img/Logo-splash.png\" alt=\"\" />\r\n            <h4>Connecting Manufacturer to business</h4>\r\n        </div>\r\n\r\n        <div class=\"sign_in\">\r\n        <h5>Please sign up</h5>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 form_register\">\r\n                <div class=\"form-group text\">\r\n                    <label for=\"inputName \">{{option+\" \"+\"Name\"}}</label>\r\n                    <input type=\"text\" id=\"inputName\" class=\"form-control\" formControlName=\"name\" placeholder=\"example store inc\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 form_register\">\r\n                <div class=\"form-group text\">\r\n                    <label for=\"phoneno\">Phone Number</label>\r\n                    <input type=\"number\" id=\"phoneno\" class=\"form-control\" formControlName=\"phoneNo\" placeholder=\"(917)-123-4567\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 form_register\">\r\n                <div class=\"form-group text\">\r\n                    <label for=\"inputEmail\">Email address</label>\r\n                    <input type=\"email\" id=\"inputEmail\" formControlName=\"email\" class=\"form-control\" placeholder=\"Example@exmaple.com\" required>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 form_register\">\r\n                <div class=\"form-group text\">\r\n                    <label for=\"inputPassword\">Password</label>\r\n                    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" placeholder=\"*******\" required>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 form_register\">\r\n                <div class=\"form-group text\">\r\n                    <label for=\"inputConfirmPassword\">Confirm Password</label>\r\n                    <input type=\"password\" id=\"inputConfirmPassword\" class=\"form-control\" formControlName=\"cnfrmPwd\" placeholder=\"*******\">\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 form_register\">\r\n                <div class=\"form-group text\" *ngIf=\"option === 'Supplier' || option === 'Business'\">\r\n                    <label for=\"Address\">Address</label>\r\n                    <textarea type=\"text\" id=\"Address\" class=\"form-control\" formControlName=\"address\" placeholder=\"Address\"></textarea>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n\r\n        \r\n        \r\n        <div class=\"checkbox \">\r\n            <label class=\"remember_me\">\r\n        <input type=\"checkbox\" class=\"custom-control-input\">\r\n        <span class=\"custom-control-indicator\"></span>\r\n        <span class=\"custom-control-description text\">\r\n          I Agree the\r\n          <a href=\"#\" class=\"text-dark darkBtn\" style=\"font-weight: bold;\">terms and conditions.</a>\r\n        </span>\r\n      </label>\r\n        </div>\r\n\r\n        <div class=\"borderbtn\">\r\n            <button style=\"margin-bottom: 0;\" class=\"btn btn-lg btn-outline-light btn-block\" (click)=\"tryRegister(registerForm.value)\" *ngIf=\"show\">Sign\r\n        up</button>\r\n        </div>\r\n\r\n        <button  class=\"btn btn-lg btn-outline-light btn-block\" (click)=courierFooter() *ngIf=\"!show\">Next</button>\r\n\r\n        <label class=\"error\">{{errorMessage}}</label>\r\n        <label class=\"success\">{{successMessage}}</label>\r\n\r\n        <div class=\"text remember_me\">\r\n            <span>\r\n        Already have an account ?\r\n      </span>\r\n            <a style=\"font-weight: bold;\" [routerLink]=\"['/auth/login']\" class=\"text-dark darkBtn\">Sign In</a>\r\n        </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/authentication/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _logged_in_as_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logged-in-as.service */ "./src/app/authentication/logged-in-as.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _models_chat_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/chat-message.model */ "./src/app/models/chat-message.model.ts");
/* harmony import */ var _services_chat_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/chat-message.service */ "./src/app/services/chat-message.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { AngularFire, AuthProviders, AuthMethods } from '../../../../node_modules/angularfire2';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
// import { FirebaseUserModel } from '../core/user.model';




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(toastrService, actroute, activeUserService, authService, chatMessageSer, router, fb) {
        this.toastrService = toastrService;
        this.actroute = actroute;
        this.activeUserService = activeUserService;
        this.authService = authService;
        this.chatMessageSer = chatMessageSer;
        this.router = router;
        this.fb = fb;
        this.option = '';
        this.show = true;
        this.errorMessage = '';
        this.successMessage = '';
        this.messageObj = new _models_chat_message_model__WEBPACK_IMPORTED_MODULE_6__["ChatMessageModel"]();
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"]();
        this.msgStruct = [{
                message: 'Welcome to M2B',
                timeSent: '',
                senderId: '',
                senderEmail: ''
            }];
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phoneNo: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cnfrmPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.localStorageData = JSON.parse(localStorage.getItem("user"));
        this.option = 'Business';
        this.option = this.option ? this.option : '';
        console.log(this.option);
    };
    RegisterComponent.prototype.courierFooter = function () {
        if (this.option == 'Admin') {
            this.router.navigate(['/admin']);
        }
        else if (this.option == 'Courier') {
            this.router.navigate(['/courier-map']);
        }
        else if (this.option == 'Supplier') {
            this.router.navigate(['/supplierHome']);
        }
        else if (this.option == 'Business') {
            this.router.navigate(['/home/products']);
        }
    };
    RegisterComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    RegisterComponent.prototype.tryRegister = function (value) {
        var _this = this;
        console.log(value.password + "  " + value.cnfrmPwd);
        this.msgStruct = [{
                message: 'Welcome to M2B', timeSent: Date.now().toString(), senderId: '', senderEmail: 'Admin@M2B.com'
            }];
        this.messageObj.messages = this.msgStruct;
        this.user.name = value.name;
        this.user.phoneNo = value.phoneNo;
        this.user.email = value.email.toLowerCase(); //crossCheck
        this.user.option = this.option;
        this.user.userId = this.makeid();
        if (this.option === "Supplier" || this.option === "Business") {
            this.user.address = value.address;
        }
        else {
            this.user.address = "";
        }
        this.user.uid = "";
        this.user.credit = 0;
        this.user.requestApprove = this.option === "Supplier" ? "0" : "1";
        this.user.addOn = Date.now();
        if (value.password == value.cnfrmPwd) {
            this.authService.doRegister(value, this.user)
                .then(function (res) {
                if (_this.option === "Supplier") {
                    _this.messageObj.lastAddedMsgDate = Date.now().toString();
                    _this.messageObj.userName = value.name;
                    _this.messageObj.userEmail = value.email.toLowerCase();
                    _this.messageObj.supplierUnread = 1;
                    _this.messageObj.userUnread = 0;
                    _this.messageObj.userId = "";
                    _this.messageObj.chatID = _this.makeid();
                    _this.messageObj.addOn = Date.now();
                    _this.chatMessageSer.createchatMessage(_this.messageObj);
                }
                _this.courierFooter();
                console.log(res);
                _this.errorMessage = "";
                _this.successMessage = "Your account has been created";
                _this.show = false;
            }, function (err) {
                console.log(err);
                _this.errorMessage = err.message;
                _this.successMessage = "";
            });
        }
        else {
            this.errorMessage = "password Not Match";
            this.successMessage = "";
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/authentication/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/authentication/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _logged_in_as_service__WEBPACK_IMPORTED_MODULE_2__["LoggedInAsService"], _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_chat_message_service__WEBPACK_IMPORTED_MODULE_7__["ChatMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/common/layout/footer/footer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/common/layout/footer/footer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    /* just for demo */\r\n    background-color: #F8F8F8;\r\n    border-top: 1px solid #E7E7E7;\r\n    text-align: center;\r\n    padding: 20px;\r\n    /* just for demo */\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    height: 80px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgLyoganVzdCBmb3IgZGVtbyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTdFN0U3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIC8qIGp1c3QgZm9yIGRlbW8gKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/layout/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/common/layout/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"bottom_bar\">\r\n  <ul>\r\n    <li>\r\n      <a href=\"#/\">\r\n        <i class=\"fa fa-home\"></i>\r\n        <b>Home</b>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#/mym2bBasic\">\r\n        <i class=\"fa fa-line-chart\"></i>\r\n        <b>My M2b</b>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#/chat\">\r\n        <i class=\"fa fa-envelope\"></i>\r\n        <b>Messages</b>\r\n        <span *ngIf=\"ctot > 0\">{{ctot}}</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#/myOrderList\">\r\n        <i class=\"fa fa-truck\"></i>\r\n        <b>Order</b>\r\n         <span id=\"order_number\" *ngIf=\"ocount > 0\">{{ocount}}</span>\r\n      </a>\r\n    </li>\r\n     <li>\r\n      <a href=\"#/mym2bCredit\">\r\n        <i class=\"fa fa-money\"></i>\r\n        <b>Buy Back</b>\r\n         <span>1</span>\r\n      </a>\r\n    </li> \r\n  </ul>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/common/layout/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _authentication_logged_in_as_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/logged-in-as.service */ "./src/app/authentication/logged-in-as.service.ts");
/* harmony import */ var _services_order_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/order-list.service */ "./src/app/services/order-list.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ToastrService } from 'ngx-toastr';






var FooterComponent = /** @class */ (function () {
    function FooterComponent(supplierService, activeUserService, orderListService, authService, db, supplierOrderListService) {
        var _this = this;
        this.supplierService = supplierService;
        this.activeUserService = activeUserService;
        this.orderListService = orderListService;
        this.authService = authService;
        this.db = db;
        this.supplierOrderListService = supplierOrderListService;
        this.checkChild = "email";
        this.isOrderAdded = false;
        this.LocalStorageData = JSON.parse(localStorage.getItem("user"));
        this.checkUserOption();
        this.tot = 0;
        this.getOrderList();
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.getChatList();
        var list = this.db.list('/cart');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (cart) {
            _this.cart = cart;
            console.log('footer cart');
            var t = 0;
            var luid = localStorage.getItem('login');
            _this.cart.forEach(function (currentValue, index) {
                if (currentValue.uid == luid) {
                    t = t + (currentValue.sku.SKU_Price * currentValue.qty);
                }
            });
            //sku
            _this.tot = t;
        });
    }
    FooterComponent.prototype.getOrderList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.orderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (orderList) {
            var or = [];
            var luid = localStorage.getItem('login');
            _this.ocount = 0;
            orderList.forEach(function (currentValue, index) {
                if (currentValue['uid'] == luid && currentValue['status'] == 'Pending') {
                    _this.ocount++;
                    or.push(currentValue);
                }
            });
        });
    };
    FooterComponent.prototype.getChatList = function () {
        var _this = this;
        var count = 0;
        this.supplierOrderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (supplierOrderList) {
            if (count > 0) {
                _this.myChatList = [];
            }
            count++;
            _this.ctot = 0;
            for (var _i = 0; _i < supplierOrderList.length; _i++) {
                var num = supplierOrderList[_i];
                if (num['userUnread'] > 0 && num['userEmail'] == _this.ownEmail) {
                    _this.ctot = _this.ctot + 1;
                }
            }
        });
    };
    FooterComponent.prototype.ngOnInit = function () {
        // this.checkOrder();
    };
    FooterComponent.prototype.checkUserOption = function () {
        var _this = this;
        this.supplierService.getUsersByOption(this.checkChild, this.LocalStorageData.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            if (users[0] && users[0].option)
                _this.currentActiveUser = users[0].option;
        });
    };
    FooterComponent.prototype.checkOrder = function () {
        // Use snapshotChanges().map() to store the key
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/common/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_service__WEBPACK_IMPORTED_MODULE_5__["SupplierService"], _authentication_logged_in_as_service__WEBPACK_IMPORTED_MODULE_1__["LoggedInAsService"], _services_order_list_service__WEBPACK_IMPORTED_MODULE_2__["OrderListService"], _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"], _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_6__["SupplierOrderListService"]])
    ], FooterComponent);
    return FooterComponent;
}()); //class end



/***/ }),

/***/ "./src/app/common/layout/header/header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/common/layout/header/header.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-header .navbar-nav .nav-link {\r\n    color: white !important;\r\n}\r\n\r\n.app-header {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 60px;\r\n    z-index: 2;\r\n}\r\n\r\n.fontbtn {\r\n    font-size: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztDQUNkOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWhlYWRlciAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmZvbnRidG4ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/common/layout/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/app/common/layout/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m2b_wrap\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4 logoout\">\r\n        <a  *ngIf=\"!isOrder\" (click)=\"logout()\" previousLink=\"/home/products\" ><svg viewBox=\"0 0 24 24\"><path d=\"M5 3h6a3 3 0 0 1 3 3v4h-1V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4h1v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm3 9h11.25L16 8.75l.664-.75l4.5 4.5l-4.5 4.5l-.664-.75L19.25 13H8v-1z\" fill=\"#fff\"/></svg></a>\r\n      </div>\r\n      <div class=\"col-sm-4 logobox\">\r\n        <a href=\"#\"><img src=\"assets/assets1/images/Logo-splash.png\" alt=\"\"></a>\r\n      </div>\r\n      <div class=\"col-sm-4 cart\">\r\n        <div  (click)=\"show_cart = 0\" class=\"cart_box\">\r\n          <a style=\"display: inline-block;\">\r\n            <svg class=\"jss314\" focusable=\"false\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" role=\"presentation\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"></path><path d=\"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></svg>\r\n          </a>\r\n          <div class=\"cart_items\"><span>{{tot}}</span></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- cart sidebar -->\r\n\r\n<div class=\"overlay_cart\" style=\"display: block;\" *ngIf=\"show_cart\">\r\n</div>\r\n\r\n<div class=\"sidebar_cart\" id=\"cartform\" style=\"display: block;\" *ngIf=\"show_cart\">\r\n  <div class=\"inner_content_cart\">\r\n    <h4>You have {{tot}} items in your cart  <i (click)=\"show_cart = 0\" class=\"fa fa-close\"></i></h4>\r\n    <p>Recently added item(s)</p>\r\n  </div>\r\n  <div class=\"cart_subtotal\">\r\n      \r\n          <div class=\"product_infobox \"  >\r\n            <ng-container  *ngFor=\"let item of cart;let ci = index;\">\r\n            <div class=\"row product_infobox\" *ngIf=\"item.uid == userId\">\r\n              \r\n              <div class=\"col-sm-12 product_price\">\r\n                 <img src=\"{{ item.product.path }}\" alt=\"\">\r\n                <b>{{item.product.product_name}} </b>\r\n                <p>{{item.astr}}</p>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-5 qtybox\">\r\n                    <div class=\"quantity_box_pos\">\r\n                        <input type=\"button\" value=\"-\" class=\"qty-minus_pos minus_plus_pos\" (click)=\"updateqty(ci,'m')\">\r\n                        <input type=\"number\" class=\"value_box_pos\" [(ngModel)]=\"item.qty\" (keyup)=\"updateqty(ci,'d')\" value=\"{{item.qty}}\">\r\n                        <input type=\"button\" value=\"+\" class=\"qty-plus_pos minus_plus_pos\" (click)=\"updateqty(ci,'p')\">\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-sm-7 close_product\">\r\n                    <b>${{item.sku.SKU_Price*item.qty | number : '1.2-2'}}x{{cart[ci].qty}} <a (click)=\"removecartitem(ci)\"><i class=\"fa fa-close\"></i></a></b>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            </ng-container>\r\n          </div>\r\n        \r\n  \r\n  <div class=\"carts_btns\">\r\n    <div class=\"cart_total\">\r\n    <b>CART SUBTOTAL: <span>$933.17</span></b>\r\n  </div>\r\n    <a href=\"#\" class=\"view_cart_btn\">View Cart</a>\r\n    <a href=\"#\" class=\"checkout_btn\">Checkout</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/layout/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/layout/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authService, location, db) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.location = location;
        this.db = db;
        this.show = false;
        this.cartCheck = false;
        this.adminShow = false;
        this.isOrder = false;
        this.menuvisible = true;
        this.menuvisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.message = false;
        this.userId = localStorage.getItem('login');
        this.tot = 0;
        var list = this.db.list('/cart');
        var t = 0;
        var cart_local = [];
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (cart) {
            var luid = localStorage.getItem('login');
            _this.tot = 0;
            cart.forEach(function (currentValue, index) {
                if (currentValue['uid'] && currentValue['uid'] == luid) {
                    cart_local.push(currentValue);
                    _this.tot = _this.tot + 1;
                }
            });
        });
        this.cart = cart_local;
        console.log("count=" + this.tot);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.router.url.includes('home/products')) {
            this.show = true;
        }
    };
    HeaderComponent.prototype.cart_fun = function () {
        if (this.currentAction == "Cart") {
            this.router.navigateByUrl(this.currentLink);
        }
    };
    HeaderComponent.prototype.logout = function () {
        console.log(this.previousAction);
        localStorage.clear();
        this.router.navigate(['auth']);
        return false;
        /*
         if (this.previousAction == "Log Out") {
          localStorage.clear();
          this.authService.doLogout()
          this.router.navigate(['/auth/login'])
            .then((res) => {
              this.router.navigate(['/auth/login'])
    
    
            }, (error) => {
              console.log("Logout error", error);
            });
        } else {
          console.log(this.previousLink);
          this.router.navigateByUrl(this.previousLink)
        }*/
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.message = !this.message;
        this.menuvisibleChange.emit(this.message);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "currentAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "currentLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "previousAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "previousLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "menuvisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "menuvisibleChange", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/common/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/common/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/common/layout/side-nav/side-nav.component.css":
/*!***************************************************************!*\
  !*** ./src/app/common/layout/side-nav/side-nav.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sYXlvdXQvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/common/layout/side-nav/side-nav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/common/layout/side-nav/side-nav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"app left-sidebar-fixed \">\r\n\r\n\r\n    <!--left sidebar start-->\r\n    <div class=\"left-sidebar\">\r\n        <nav class=\"sidebar-menu\">\r\n\r\n            <ul id=\"nav-accordion\">\r\n                <li>\r\n                    <a>\r\n                        <i class=\"fa fa-dashboard\"></i>\r\n                        <span>Dashboard</span>\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"isSupplierProduct\">\r\n                    <a [routerLink]=\"['categories']\">\r\n                        <i class=\"fa fa-th\"></i>\r\n                        <span>Categories</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['categories/products']\">\r\n                        <i class=\"fa fa-sitemap\"></i>\r\n                        <span>Products</span>\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"isSupplierProduct\">\r\n                    <a [routerLink]=\"['categories/suppliers']\">\r\n                        <i class=\"fa fa-users\"></i>\r\n                        <span>Suppliers</span>\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"isSupplierProduct\">\r\n                    <a [routerLink]=\"['categories/businesses']\">\r\n                        <i class=\"fa fa-users\"></i>\r\n                        <span>Businesses</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['order-list']\">\r\n                        <i class=\"fa fa-list-alt\"></i>\r\n                        <span *ngIf=\"isSupplierProduct\">Order List</span>\r\n                        <span *ngIf=\"!isSupplierProduct\">Revenue</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['chat']\">\r\n                        <i class=\"fa fa-comments\"></i>\r\n                        <span>Chats</span>\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"isSupplierProduct\">\r\n                    <a [routerLink]=\"['suppliers-request']\">\r\n                        <i class=\"fa fa-user-plus\"></i>\r\n                        <span>Suppliers Request</span>\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"isSupplierProduct\">\r\n                    <a [routerLink]=\"['suppliers-cashout-request']\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        <span>Cashout Requests</span>\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"isSupplierProduct\">\r\n                    <a [routerLink]=\"['settings']\">\r\n                        <i class=\"fa fa-cog\"></i>\r\n                        <span>Settings</span>\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"!isSupplierProduct\">\r\n                    <a [routerLink]=\"['suppliers-return-request']\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        <span>Return Requests</span>\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"!isSupplierProduct\">\r\n                    <a [routerLink]=\"['items-sold']\">\r\n                        <i class=\"fa fa-shopping-cart\"></i>\r\n                        <span>Items Sold</span>\r\n                    </a>\r\n                </li>\r\n\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n    <!--left sidebar end-->\r\n</div>"

/***/ }),

/***/ "./src/app/common/layout/side-nav/side-nav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/layout/side-nav/side-nav.component.ts ***!
  \**************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(supplierService, authService) {
        this.supplierService = supplierService;
        this.authService = authService;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        this.localStorageData = JSON.parse(localStorage.getItem("user"));
        this.getUserOption();
        console.log(this.localStorageData);
        console.log(this.option);
    };
    SideNavComponent.prototype.getUserOption = function () {
        var _this = this;
        this.supplierService.getUsersByOption("email", this.localStorageData.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            _this.option = users[0].option;
            if (_this.option == 'Supplier') {
                _this.isSupplierProduct = false;
            }
            else {
                _this.isSupplierProduct = true;
            }
        });
    };
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/common/layout/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.css */ "./src/app/common/layout/side-nav/side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_service__WEBPACK_IMPORTED_MODULE_1__["SupplierService"], _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/common/maintenance/maintenance.component.css":
/*!**************************************************************!*\
  !*** ./src/app/common/maintenance/maintenance.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9tYWludGVuYW5jZS9tYWludGVuYW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/maintenance/maintenance.component.html":
/*!***************************************************************!*\
  !*** ./src/app/common/maintenance/maintenance.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"error-template\">\r\n\r\n                <h2>\r\n                    Temporarily down for maintenance</h2>\r\n                <h1>\r\n                    We’ll be back soon!</h1>\r\n                <div>\r\n                    <p>\r\n                        Sorry for the inconvenience but we’re performing some maintenance at the moment. we’ll be back online shortly!</p>\r\n                    <p>\r\n                        — The Team M2B </p>\r\n                </div>\r\n                <div class=\"error-actions\">\r\n                    <a routerLink=\"/auth\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-home\">\r\n            </span>Take Me Home </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <svg class=\"svg-box\" width=\"380px\" height=\"500px\" viewbox=\"0 0 837 1045\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\r\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\r\n          <path d=\"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z\"\r\n            id=\"Polygon-1\" stroke=\"#3bafda\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n          <path d=\"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z\"\r\n            id=\"Polygon-2\" stroke=\"#7266ba\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n          <path d=\"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z\"\r\n            id=\"Polygon-3\" stroke=\"#f76397\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n          <path d=\"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z\"\r\n            id=\"Polygon-4\" stroke=\"#00b19d\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n          <path d=\"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z\"\r\n            id=\"Polygon-5\" stroke=\"#ffaa00\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        </g>\r\n      </svg>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/maintenance/maintenance.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/maintenance/maintenance.component.ts ***!
  \*************************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent() {
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
    };
    MaintenanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintenance',
            template: __webpack_require__(/*! ./maintenance.component.html */ "./src/app/common/maintenance/maintenance.component.html"),
            styles: [__webpack_require__(/*! ./maintenance.component.css */ "./src/app/common/maintenance/maintenance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/common/orders/orders.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/orders/orders.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/orders/orders.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/orders/orders.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  orders works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/common/orders/orders.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/orders/orders.component.ts ***!
  \***************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/common/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/common/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/models/cashout-request.model - Copy.ts":
/*!********************************************************!*\
  !*** ./src/app/models/cashout-request.model - Copy.ts ***!
  \********************************************************/
/*! exports provided: CashoutRequestModel, SKU, OrderDetail, ProductDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutRequestModel", function() { return CashoutRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKU", function() { return SKU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetail", function() { return OrderDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetail", function() { return ProductDetail; });
var CashoutRequestModel = /** @class */ (function () {
    function CashoutRequestModel() {
        this.totalPrice = 0;
        this.requestApprove = "";
        this.orderDetail = new Array();
        this.supplierEmail = "";
        this.userRequestID = "";
        this.addOn = 0;
    }
    return CashoutRequestModel;
}());

var SKU = /** @class */ (function () {
    function SKU() {
        this.SKU_Name = "";
        this.SKU_Price = 0;
        this.SKU_Quantity = 0;
    }
    return SKU;
}());

var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
        this.productDetail = new Array();
    }
    return OrderDetail;
}());

var ProductDetail = /** @class */ (function () {
    function ProductDetail() {
        this.productName = "";
        this.productSKU = new Array();
        this.col1Title = "";
        this.col2Title = "";
        this.supplierEmail = "";
    }
    return ProductDetail;
}());



/***/ }),

/***/ "./src/app/models/category.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/category.model.ts ***!
  \******************************************/
/*! exports provided: CategoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModel", function() { return CategoryModel; });
var CategoryModel = /** @class */ (function () {
    function CategoryModel() {
        this.catName = "";
        this.status = "";
        this.addOn = 0;
        this.userId = "";
        this.catIcon = "";
    }
    return CategoryModel;
}());



/***/ }),

/***/ "./src/app/models/chat-message.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/chat-message.model.ts ***!
  \**********************************************/
/*! exports provided: MessageModel, ChatMessageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModel", function() { return MessageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageModel", function() { return ChatMessageModel; });
var MessageModel = /** @class */ (function () {
    function MessageModel() {
        this.message = "";
        this.timeSent = "";
        this.senderId = "";
        this.senderEmail = "";
    }
    return MessageModel;
}());

var ChatMessageModel = /** @class */ (function () {
    function ChatMessageModel() {
        this.messages = new Array();
        this.userName = "";
        this.chatID = "";
        this.userId = "";
        this.lastAddedMsgDate = "";
        this.supplierUnread = 0;
        this.userUnread = 0;
        this.addOn = 0;
    }
    return ChatMessageModel;
}());



/***/ }),

/***/ "./src/app/models/order-list.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/order-list.model.ts ***!
  \********************************************/
/*! exports provided: SKU, ProductDetail, OrderListModel, SupplierOrderInfo, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKU", function() { return SKU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetail", function() { return ProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListModel", function() { return OrderListModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierOrderInfo", function() { return SupplierOrderInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var SKU = /** @class */ (function () {
    function SKU() {
        this.SKU_Name = "";
        this.SKU_Price = 0;
        this.SKU_Quantity = 0;
    }
    return SKU;
}());

var ProductDetail = /** @class */ (function () {
    function ProductDetail() {
        this.productName = "";
        this.productPrice = 0;
        this.productSKUList = new Array();
        this.col1Title = "";
        this.col2Title = "";
        this.supplierEmail = "";
    }
    return ProductDetail;
}());

var OrderListModel = /** @class */ (function () {
    function OrderListModel() {
        this.trackingNoList = [];
        this.id = "";
        this.totalPrice = 0;
        this.userEmail = '';
        this.deliverAddress = '';
        this.status = 'Pending';
        this.productDetail = new Array();
        this.addOn = 0;
    }
    return OrderListModel;
}());

var SupplierOrderInfo = /** @class */ (function () {
    function SupplierOrderInfo() {
        this.totalProductName = new Array();
        this.supplierOrderId = '';
    }
    return SupplierOrderInfo;
}());

var Product = /** @class */ (function () {
    function Product() {
        this.productName = "";
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/models/product.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/*! exports provided: ProductModel, SKU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModel", function() { return ProductModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKU", function() { return SKU; });
var ProductModel = /** @class */ (function () {
    function ProductModel() {
        this.product_name = "";
        this.product_image_url = "";
        this.col_name1 = "";
        this.col_name2 = "";
        this.color = "";
        this.status = "";
        this.path = "";
        this.supplierEmail = "";
        this.cat_id = 0;
        this.productSKU = new Array();
        this.addOn = 0;
    }
    return ProductModel;
}());

var SKU = /** @class */ (function () {
    function SKU() {
        this.SKU_Name = "";
        this.SKU_Price = 0;
        this.SKU_Quantity = 0;
        this.SKU_sold_qty = 0;
        this.SKU_Cost = 0;
    }
    return SKU;
}());



/***/ }),

/***/ "./src/app/models/return-request.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/return-request.model.ts ***!
  \************************************************/
/*! exports provided: ReturnRequestModel, SKU, ProductDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnRequestModel", function() { return ReturnRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKU", function() { return SKU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetail", function() { return ProductDetail; });
var ReturnRequestModel = /** @class */ (function () {
    function ReturnRequestModel() {
        this.totalPrice = 0;
        this.id = '';
        this.userEmail = '';
        this.requestApprove = "";
        this.deliverAddress = "";
        this.productDetail = new Array();
        this.supplierEmail = "";
        this.userOrderID = "";
        this.addOn = 0;
    }
    return ReturnRequestModel;
}());

var SKU = /** @class */ (function () {
    function SKU() {
        this.SKU_Name = "";
        this.SKU_Price = 0;
        this.SKU_Quantity = 0;
    }
    return SKU;
}());

var ProductDetail = /** @class */ (function () {
    function ProductDetail() {
        this.productName = "";
        this.productPrice = 0;
        this.productSKUList = new Array();
        this.col1Title = "";
        this.col2Title = "";
        this.supplierEmail = "";
    }
    return ProductDetail;
}());



/***/ }),

/***/ "./src/app/models/setting.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/setting.model.ts ***!
  \*****************************************/
/*! exports provided: SettingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModel", function() { return SettingModel; });
var SettingModel = /** @class */ (function () {
    function SettingModel() {
        this.deduction = 0;
    }
    return SettingModel;
}());



/***/ }),

/***/ "./src/app/models/supplier-order-list.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/supplier-order-list.model.ts ***!
  \*****************************************************/
/*! exports provided: SupplierOrderListModel, SKU, MessageModel, ProductDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierOrderListModel", function() { return SupplierOrderListModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKU", function() { return SKU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModel", function() { return MessageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetail", function() { return ProductDetail; });
var SupplierOrderListModel = /** @class */ (function () {
    function SupplierOrderListModel() {
        this.totalPrice = 0;
        this.orderID = '';
        this.userEmail = '';
        this.requested = "";
        this.userPhone = 0;
        this.messages = new Array();
        this.userName = "";
        this.productDetail = new Array();
        this.supplierEmail = "";
        this.trackingNo = "";
        this.courierInfo = "";
        this.timeEst = "";
        this.deliverAddress = "";
        this.userOrderID = "";
        this.lastAddedMsgDate = "";
        this.supplierUnread = 0;
        this.userUnread = 0;
        this.addOn = 0;
    }
    return SupplierOrderListModel;
}());

var SKU = /** @class */ (function () {
    function SKU() {
        this.SKU_Name = "";
        this.SKU_Price = 0;
        this.SKU_Quantity = 0;
    }
    return SKU;
}());

var MessageModel = /** @class */ (function () {
    function MessageModel() {
        this.message = "";
        this.timeSent = "";
        this.senderId = "";
        this.senderEmail = "";
    }
    return MessageModel;
}());

var ProductDetail = /** @class */ (function () {
    function ProductDetail() {
        this.productName = "";
        this.productPrice = 0;
        this.productSKUList = new Array();
        this.col1Title = "";
        this.col2Title = "";
        this.supplierEmail = "";
    }
    return ProductDetail;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: UserModel, Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.userId = "";
        this.name = "";
        this.phoneNo = 0;
        this.email = "";
        this.option = "";
        this.address = "";
        this.requestApprove = "";
        this.uid = "";
        this.credit = 0;
        this.addOn = 0;
    }
    return UserModel;
}());

var Role;
(function (Role) {
    Role["Business"] = "0401";
    Role["Admin"] = "0101";
    Role["Courier"] = "0201";
    Role["Supplier"] = "0301";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/my-order-list/my-order-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/my-order-list/my-order-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVyLWxpc3QvbXktb3JkZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/my-order-list/my-order-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/my-order-list/my-order-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header previousAction=\"M2B\" previousLink=\"/mym2bBasic\"></app-header>\r\n<!-- myOrderList -->\r\n<section id=\"buy_back\">\r\n    <div class=\"container \">\r\n        <div class=\"my_m2b_head\">\r\n          <h2>My Orders</h2>\r\n          <H3 *ngIf=\"error\">No found</H3>\r\n        </div>\r\n        <div class=\"\">\r\n            <div class=\"bd-example\">\r\n                    <div id=\"accordion\">\r\n                        \r\n                        \r\n                        <div class=\"zigzag_Bg\" *ngFor=\"let order of myOrdersInfo; let i = index;\">\r\n                            <div class=\"orders_listing onclick \" role=\"tab\" id=\"headingOne\" (click)=\"(clicked === order)? clicked = '':clicked = order\">\r\n                                <div class=\"row \">\r\n                                <div class=\"col-sm-6 order_no\">\r\n                                  <b>Order No {{i+1}}</b>\r\n                                  <p class=\"date-order\">{{order.date}} </p>\r\n                                    \r\n                                </div>\r\n                                <div class=\"col-sm-6 shipped_down\">\r\n                                    \r\n                                    <b class=\"status\" [ngStyle]=\"{'color': order.status === 'Shipped' ? 'green' : 'red' }\">{{order.status}} <i class=\"fa fa-angle-down icon-s\" [class.animat]=\"clicked === order\"></i></b>\r\n                                </div>\r\n                                </div>\r\n\r\n                                \r\n                            </div>\r\n\r\n                            <div id=\"collapseOne\" class=\"collapse shipped_box dropdown_box\" [class.show]=\"clicked === order\" role=\"tabpanel\" aria-labelledby=\"headingOne\" aria-expanded=\"false\">\r\n\r\n                                <div class=\"contact_seller\">\r\n\r\n                                    <!-- <select class=\"btn btn-outline-secondary btn-sm dropdown-toggle form-control addBtn btn-top\"  (change)=\"onContact($event.target.value)\">\r\n                                    <option value=\"0\">\r\n                                      Contact Seller\r\n                                    </option>\r\n                                    <option *ngFor=\"let subOrder of order.supplierOrderInfo ; let i = index;\"\r\n                                      [value]=\"subOrder.supplierOrderId\">\r\n                                      Seller {{i+1}}\r\n                                    </option>\r\n                                  </select> -->\r\n                                </div>\r\n\r\n                                <div *ngIf=\"order.cart\">\r\n                                </div>\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"regular_lcd\">\r\n                                    </div>\r\n\r\n                                    <table class=\"table table-hover table_box product_table\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th scope=\"col\">Product Name</th>\r\n                                                <th scope=\"col\">Quantity</th>\r\n                                                <th scope=\"col\">Total</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let p of order.cart; let i = index;\">\r\n                                                <td scope=\"col\" class=\"pro_gap\"><img width=\"40\" height=\"40\" class=\"pro_img\" src=\"{{p.product.path}}\" />{{p.product.product_name}}\r\n                                                    \r\n                                                    <div class=\"order_attributes\">\r\n                                                        <ng-container  *ngFor=\"let attr of p.attributes;let i = index;\">\r\n                                                        <a *ngIf=\"attr.chosen\">{{attr.chosen}}</a>\r\n                                                    </ng-container>\r\n\r\n                                                    </div>\r\n                                                    \r\n                                                    <span>{{p.sku.SKU_Name}}</span>\r\n\r\n                                                </td>\r\n                                                <td scope=\"col\">${{p.sku.SKU_Price | number : '1.2-2'}}x{{p.qty}}</td>\r\n                                                <td scope=\"col\">${{p.qty*p.sku.SKU_Price | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                 \r\n\r\n                                    \r\n                                    <div>\r\n\r\n                                        <div class=\"delivery_details\">\r\n        <h4>Delivery Detail</h4>\r\n        <p><b>Tracking Number:</b> <span>8927766094</span></p>\r\n        <p *ngIf=\"order.shipping\"><b>Courier :</b> <span>{{order.shipping.name}}</span></p>\r\n        <p *ngIf=\"order.pmethod\"><b>Payment method :</b> <span>{{pmethod(order.pmethod)}}</span></p>\r\n        <p><b>Time Est :</b> <span>4</span></p>\r\n        <p *ngIf=\"order.saddress.fname\"><b>Name:</b> <span>{{order.saddress.fname}} {{ order.saddress.lname }}</span></p>\r\n        <p *ngIf=\"order.saddress.email\"><b>Email:</b> <span>{{order.saddress.email}}</span></p>\r\n        <p *ngIf=\"order.saddress.phone\"><b>Phone:</b> <span>{{order.saddress.phone}}</span></p>\r\n        <p *ngIf=\"order.saddress.town\"><b>Town:</b> <span>{{order.saddress.town}}</span></p>\r\n        <p *ngIf=\"order.saddress.state\"><b>State:</b> <span>{{order.saddress.state}}</span></p>\r\n        <p *ngIf=\"order.saddress.postcode\"><b>Postal Code:</b> <span>{{order.saddress.postcode}}</span></p>\r\n        <p *ngIf=\"order.saddress.country\"><b>Country:</b> <span>{{order.saddress.country}}</span></p>\r\n        <p *ngIf=\"order.saddress.address\"><b>Deliver Address:</b> <span>{{order.saddress.address}}</span></p>\r\n        <p *ngIf=\"order.credit_pay\"><b>Credit Pay:</b> <span>${{order.credit_pay | number : '1.2-2'}}</span></p>\r\n        \r\n      </div>\r\n                                        \r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6 total_price\">\r\n                                            <h6 style=\"color: #232323;\">Total Price: ${{order.tot | number : '1.2-2'}} </h6>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6 open_return\">\r\n                                        <a style=\"border:none;\" class=\"btn btn-outline-secondary addBtn\" href=\"#/myOrderList/returnRequest?userId={{order.\r\n                                        key}}\">\r\n                                          Open Return Request</a>\r\n                                          </div>\r\n                                    </div>\r\n\r\n                                    \r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n        \r\n\r\n        <!-- .// Accordion -->\r\n        <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/my-order-list/my-order-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/my-order-list/my-order-list.component.ts ***!
  \**********************************************************/
/*! exports provided: MyOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderListComponent", function() { return MyOrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_order_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/order-list.service */ "./src/app/services/order-list.service.ts");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyOrderListComponent = /** @class */ (function () {
    function MyOrderListComponent(router, supplierOrderListService, orderListService) {
        this.router = router;
        this.supplierOrderListService = supplierOrderListService;
        this.orderListService = orderListService;
        this.myOrdersInfo = [];
        this.error = false;
        this.subOrder = [];
        this.count = 0;
        this.urls = [
            { name: 'DHL', head: 'http://www.dhl.com.pk/en/express/tracking.html?AWB=', tail: '&brand=DHL' },
            { name: 'UPS', head: 'https://www.ups.com/track?loc=en_US&requester=ST/', tail: '' },
            { name: 'USPS', head: 'https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=4&text28777=&tLabels=', tail: '%2C' }
        ];
        this.uid = localStorage.getItem('login');
    }
    MyOrderListComponent.prototype.pmethod = function (id) {
        if (id == 'ccard') {
            return 'Credit card';
        }
        else if (id == 'credit') {
            return 'M2b Credit';
        }
    };
    MyOrderListComponent.prototype.ngOnInit = function () {
        this.localStorageData = JSON.parse(localStorage.getItem("user"));
        this.getOrderList();
    };
    MyOrderListComponent.prototype.setUrl = function (trackNo, cInfo) {
        var url = this.urls[cInfo - 1].head + trackNo + this.urls[cInfo - 1].tail;
        window.open(url);
    };
    MyOrderListComponent.prototype.onContact = function (id) {
        this.router.navigateByUrl('/chat/messages?userId=' + id);
    };
    MyOrderListComponent.prototype.getOrderList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.orderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (orderList) {
            var or = [];
            orderList.forEach(function (currentValue, index) {
                if (currentValue['uid'] == _this.uid) {
                    or.push(currentValue);
                }
            });
            or.reverse();
            _this.myOrdersInfo = or;
            console.log("myOrdersInfo");
            console.log(_this.myOrdersInfo);
        });
    };
    MyOrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-order-list',
            template: __webpack_require__(/*! ./my-order-list.component.html */ "./src/app/my-order-list/my-order-list.component.html"),
            styles: [__webpack_require__(/*! ./my-order-list.component.css */ "./src/app/my-order-list/my-order-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_3__["SupplierOrderListService"], _services_order_list_service__WEBPACK_IMPORTED_MODULE_2__["OrderListService"]])
    ], MyOrderListComponent);
    return MyOrderListComponent;
}());



/***/ }),

/***/ "./src/app/my-order-list/return-request/return-request.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/my-order-list/return-request/return-request.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVyLWxpc3QvcmV0dXJuLXJlcXVlc3QvcmV0dXJuLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/my-order-list/return-request/return-request.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/my-order-list/return-request/return-request.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div id=\"buy_back\">\r\n    <div class=\"container\">\r\n    <div class=\"my_m2b_head\">\r\n      <h2>Return Request</h2>\r\n    </div>\r\n    <div class=\"shipped_box\" id>\r\n        <div class=\"regular_lcd\">\r\n       <h5>Regular Replacement LCD's</h5>\r\n    </div>\r\n    <table class=\"table_box product_table\">\r\n        <thead>\r\n            <tr>\r\n                <th class=\" title-text\" scope=\"col\">Product</th>\r\n                <th class=\" title-text\">Quantity</th>\r\n                <th class=\" title-text\">Details</th>\r\n                <th class=\" title-text\">Total</th>\r\n                <!-- <td class=\" title-text\">Action</td> -->\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <ng-container *ngIf=\"orderList.cart\">\r\n            <ng-container *ngFor=\"let p of orderList.cart; let x = index\"> \r\n            <tr *ngIf=\"p.qty\" >\r\n                <td scope=\"col\" class=\"pro_gap\"><img width=\"40\" height=\"40\" class=\"pro_img \" src=\"{{p.product.path}}\" />Here{{p.product.product_name}}\r\n                                <br>\r\n                                <div class=\"order_attributes\">\r\n                                    <ng-container  *ngFor=\"let attr of p.attributes;let i = index;\">\r\n                                    <a *ngIf=\"attr.chosen\">{{attr.chosen}}</a>\r\n                                </ng-container>\r\n\r\n                                </div>\r\n                               \r\n                                <span>{{p.sku.SKU_Name}}</span>\r\n\r\n                            </td>\r\n                            <td>\r\n\r\n                                {{p.qty}} x {{p.sku.SKU_Price}}\r\n                            </td>\r\n                            <td id=\"qty_valuebox\">\r\n                                <input  type=\"button\" value=\"-\"  (click)=\"updateqty(x,'m')\"/>\r\n                                <input type=\"text\" value=\"{{p.rqty}}\" name=\"\"/>\r\n                                <input type=\"button\" value=\"+\" (click)=\"updateqty(x,'p')\" />\r\n                              </td>\r\n                <td>${{p.qty * p.sku.SKU_Price | number : '1.2-2'}}</td>\r\n            </tr>\r\n        </ng-container>\r\n        </ng-container>\r\n\r\n        </tbody>\r\n        </table>\r\n        </div>\r\n\r\n    <div class=\"send_request\">\r\n\r\n            <button type=\"button\"  (click)=\"sendRequest()\"> Send Request </button>\r\n\r\n        </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/my-order-list/return-request/return-request.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/my-order-list/return-request/return-request.component.ts ***!
  \**************************************************************************/
/*! exports provided: ReturnRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnRequestComponent", function() { return ReturnRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_order_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/order-list.service */ "./src/app/services/order-list.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _models_return_request_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/return-request.model */ "./src/app/models/return-request.model.ts");
/* harmony import */ var _services_return_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/return-request.service */ "./src/app/services/return-request.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReturnRequestComponent = /** @class */ (function () {
    function ReturnRequestComponent(actRoute, toastrService, returnRequestService, router, orderListService, db) {
        this.actRoute = actRoute;
        this.toastrService = toastrService;
        this.returnRequestService = returnRequestService;
        this.router = router;
        this.orderListService = orderListService;
        this.db = db;
        this.productobj = new _models_return_request_model__WEBPACK_IMPORTED_MODULE_5__["ReturnRequestModel"]();
        this.myOrdersInfo = [];
        this.id = this.actRoute.snapshot.queryParamMap.get('userId');
        this.user = JSON.parse(localStorage.getItem("user"));
    }
    ReturnRequestComponent.prototype.ngOnInit = function () {
        this.getOrderList();
    };
    ReturnRequestComponent.prototype.updateqty = function (i, type) {
        console.log(type);
        console.log((this.orderList.cart[i].rqty >= 1));
        console.log(this.orderList.cart[i].rqty);
        if (type == 'p' && this.orderList.cart[i].rqty < this.orderList.cart[i].qty) {
            this.orderList.cart[i].rqty = this.orderList.cart[i].rqty + 1;
        }
        else if (this.orderList.cart[i].rqty >= 1 && type == 'm') {
            this.orderList.cart[i].rqty = this.orderList.cart[i].rqty - 1;
        }
    };
    ReturnRequestComponent.prototype.getOrderList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        var list = this.db.list('/orderLists');
        var t = 0;
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (orderLists) {
            var luid = localStorage.getItem('login');
            orderLists.forEach(function (currentValue, index) {
                if (currentValue['key'] && currentValue['key'] == _this.id) {
                    currentValue['cart'].forEach(function (currentValue1, index1) {
                        currentValue['cart'][index1]['rqty'] = 0;
                    });
                    _this.orderList = currentValue;
                }
            });
        });
    };
    ReturnRequestComponent.prototype.removeProduct = function (index) {
        this.orderList[0].productDetail.splice(index, 1);
    };
    ReturnRequestComponent.prototype.remove = function (x) {
        this.orderList.cart[x].qty = 0;
    };
    ReturnRequestComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    ReturnRequestComponent.prototype.sendRequest = function () {
        var r = this.db.list('/returnRequest').push(this.orderList);
        if (r) {
            this.toastrService.success("Your Request is Send!");
            this.router.navigateByUrl('/myOrderList');
        }
    };
    ReturnRequestComponent.prototype.sendData = function (prod, email, total) {
        this.productobj.requestApprove = "0";
        this.productobj.totalPrice = total;
        this.productobj.productDetail = prod;
        this.productobj.supplierEmail = email;
        this.productobj.addOn = Date.now();
        this.productobj.userEmail = this.user.email; //
        this.productobj.userOrderID = this.makeid();
        this.returnRequestService.createReturnRequest(this.productobj);
    };
    ReturnRequestComponent.prototype.createOrderForSuplliers = function () {
        var _this = this;
        var prod;
        var sameProd = [];
        var uniqueEmailValues;
        var unique = {};
        var supplierTotal = 0;
        var prodTotal = 0;
        prod = this.orderList[0].productDetail;
        prod.forEach(function (i) {
            if (!unique[i.supplierEmail]) {
                unique[i.supplierEmail] = true;
            }
        });
        uniqueEmailValues = Object.keys(unique);
        console.log(uniqueEmailValues);
        uniqueEmailValues.forEach(function (email) {
            prod.forEach(function (x) {
                if (x.supplierEmail == email) {
                    sameProd.push(x);
                    x.productSKU.forEach(function (el) {
                        prodTotal = el.quantity * el.SKU_Price;
                        supplierTotal = supplierTotal + prodTotal;
                    });
                }
            });
            console.log(sameProd);
            console.log(email);
            _this.sendData(sameProd, email, supplierTotal);
            prodTotal = 0;
            sameProd = [];
            supplierTotal = 0;
        });
    };
    ReturnRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-return-request',
            template: __webpack_require__(/*! ./return-request.component.html */ "./src/app/my-order-list/return-request/return-request.component.html"),
            styles: [__webpack_require__(/*! ./return-request.component.css */ "./src/app/my-order-list/return-request/return-request.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_return_request_service__WEBPACK_IMPORTED_MODULE_6__["ReturnRequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_order_list_service__WEBPACK_IMPORTED_MODULE_3__["OrderListService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]])
    ], ReturnRequestComponent);
    return ReturnRequestComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/admin/admin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div id=\"admin_topbar\" class=\" app header-fixed left-sidebar-fixed right-sidebar-fixed right-sidebar-overlay  right-sidebar-hidden\" [ngClass]=\"{'left-sidebar-hidden': message,'mobile-leftside-show': message }\" style=\"background: #df7d34 ;\">\r\n    <app-header previousAction=\"Log Out\" previousLink=\"/auth/login\" (menuvisibleChange)=\"receiveMessage($event)\" *ngIf=\"localStorageData === '0101' \"></app-header>\r\n\r\n    <app-header previousAction=\"Home\" previousLink=\"/supplierHome\" (menuvisibleChange)=\"receiveMessage($event)\" *ngIf=\"localStorageData === '0301' \"></app-header>\r\n\r\n    <div class=\"app-body\" style=\"background: rgb(255, 255, 255)\">\r\n        <div class=\"main_adminwrap\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-2 sidebar_box\">\r\n                    <app-side-nav></app-side-nav>\r\n                </div>\r\n                <div class=\"col-sm-10 categories_box\">\r\n                    <div class=\"main-content\">\r\n                        <router-outlet></router-outlet>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        \r\n    </div>\r\n    <app-admin-footer>\r\n    </app-admin-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(router) {
        this.router = router;
        this.localStorageData = localStorage.getItem("op");
    }
    AdminComponent.prototype.ngOnInit = function () {
        if (this.localStorageData === _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Role"].Business) {
            this.router.navigate(['/home/products']);
        }
        else if (this.localStorageData === _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Role"].Courier) {
            this.router.navigate(['/courier-map']);
        }
    };
    AdminComponent.prototype.receiveMessage = function ($event) {
        this.message = $event;
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/pages/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/pages/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/businesses/businesses.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/businesses/businesses.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2J1c2luZXNzZXMvYnVzaW5lc3Nlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/businesses/businesses.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/businesses/businesses.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n<div class=\"my_m2b_head\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 category_list\">\r\n                <h2>Business</h2>\r\n            </div>\r\n            <div class=\"col-sm-4 addbtn_right\">\r\n                <a class=\"addBtn\" [routerLink]=\"['/auth/options']\" [queryParams]=\"{option:'Business'}\"  ><i class=\"fa fa-plus\"></i> Add</a>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n\r\n    <table class=\"table table-hover table_box\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Business ID</th>\r\n                    <th scope=\"col\">Business Name</th>\r\n                    <th scope=\"col\">Business Email</th>\r\n                    <th scope=\"col\">Business Phone No</th>\r\n                    <th scope=\"col\">Option</th>\r\n                    <th scope=\"col\">Business Status</th>\r\n                    <th scope=\"col\">Action\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let user of users; let i = index;\">\r\n                    <td scope=\"row\">{{i+1}}</td>\r\n                    <td>{{user.name}}</td>\r\n                    <td>{{user.email}}</td>\r\n                    <td>{{user.phoneNo}}</td>\r\n                    <td>{{user.option}}</td>\r\n                    <td align=\"center\"><input style=\"width:20px;height:auto;\" type=\"checkbox\"></td>\r\n                    <td>\r\n                        <a class=\"edit_btn \" [routerLink]=\"['edit-businesses']\" [queryParams]=\"{ userId: user.key }\"><i class=\"fa fa-pencil\"></i> </a>\r\n                        <a class=\"delbtn \" (click)='deleteOneUser(user.key, user.email)'><i\r\n                class=\"fa fa-trash-o\"></i> </a>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/businesses/businesses.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/businesses/businesses.component.ts ***!
  \****************************************************************/
/*! exports provided: BusinessesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessesComponent", function() { return BusinessesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _services_manage_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/manage-user.service */ "./src/app/services/manage-user.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusinessesComponent = /** @class */ (function () {
    function BusinessesComponent(supplierService, db, manageUserService) {
        this.supplierService = supplierService;
        this.db = db;
        this.manageUserService = manageUserService;
        this.checkChild = "option";
        this.checkValue = "Business";
    }
    BusinessesComponent.prototype.ngOnInit = function () {
        this.getUsersList();
    };
    BusinessesComponent.prototype.getUsersList = function () {
        var _this = this;
        this.supplierService.getUsersByOption(this.checkChild, this.checkValue).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            _this.users = users;
        });
    };
    BusinessesComponent.prototype.deleteOneUser = function (key, email) {
        this.supplierService.deleteUser(key);
    };
    BusinessesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-businesses',
            template: __webpack_require__(/*! ./businesses.component.html */ "./src/app/pages/admin/businesses/businesses.component.html"),
            styles: [__webpack_require__(/*! ./businesses.component.css */ "./src/app/pages/admin/businesses/businesses.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_service__WEBPACK_IMPORTED_MODULE_1__["SupplierService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _services_manage_user_service__WEBPACK_IMPORTED_MODULE_4__["ManageUserService"]])
    ], BusinessesComponent);
    return BusinessesComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/businesses/edit-business-user/edit-business-user.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/admin/businesses/edit-business-user/edit-business-user.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borderbtn{\r\n    padding:1px;\r\n    border:1px solid white;\r\n    border-radius: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYnVzaW5lc3Nlcy9lZGl0LWJ1c2luZXNzLXVzZXIvZWRpdC1idXNpbmVzcy11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2J1c2luZXNzZXMvZWRpdC1idXNpbmVzcy11c2VyL2VkaXQtYnVzaW5lc3MtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlcmJ0bntcclxuICAgIHBhZGRpbmc6MXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/admin/businesses/edit-business-user/edit-business-user.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/admin/businesses/edit-business-user/edit-business-user.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n    <form class=\"form-signin\" [formGroup]=\"addBusinessUserForm\">\r\n\r\n        <h2 class=\"form-signin-heading\">Edit User Profile</h2>\r\n        <div class=\"form-group\">\r\n            <label for=\"proName\">Business User Name</label>\r\n            <input type=\"text\" id=\"proName\" class=\"form-control\" formControlName=\"name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Business User Email</label>\r\n            <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"phoneNo\">Business User Phone Number</label>\r\n\r\n            <input type=\"text\" id=\"phoneNo\" formControlName=\"phoneNo\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>User Option</label>\r\n            <select class=\"btn btn-secondary dropdown-toggle form-control\" style=\"background-color: #F78C3C\" formControlName=\"option\">\r\n        <option *ngFor=\"let item of option\" [value]=\"item.value\">{{item.name}}</option>\r\n      </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"credit\">User Credit</label>\r\n            <input type=\"text\" id=\"credit\" class=\"form-control\" formControlName=\"credit\">\r\n        </div>\r\n\r\n        <div class=\"borderbtn\">\r\n            <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"updateForm(addBusinessUserForm.value)\" [routerLink]=\"['../../suppliers']\"> Update </button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/businesses/edit-business-user/edit-business-user.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/admin/businesses/edit-business-user/edit-business-user.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditBusinessUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBusinessUserComponent", function() { return EditBusinessUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditBusinessUserComponent = /** @class */ (function () {
    function EditBusinessUserComponent(actRoute, supplierSer, router, fb) {
        var _this = this;
        this.actRoute = actRoute;
        this.supplierSer = supplierSer;
        this.router = router;
        this.fb = fb;
        this.option = [
            { name: 'Admin', value: 'Admin' },
            { name: 'Supplier', value: 'Supplier' },
            { name: 'Business', value: 'Business' },
            { name: 'Courier', value: 'Courier' }
        ];
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
        this.nameCheck = "okk";
        this.createForm();
        var id = this.actRoute.snapshot.queryParamMap.get('userId'); // Getting current component's id or information using ActivatedRoute service
        this.id2 = id;
        if (id !== null) {
            this.supplierSer.GetUser(id).valueChanges().subscribe(function (data) {
                if (_this.nameCheck == "okk") {
                    _this.addBusinessUserForm.setValue(data); // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive for
                    _this.nameCheck = data.name;
                }
            });
        }
    }
    EditBusinessUserComponent.prototype.createForm = function () {
        this.addBusinessUserForm = this.fb.group({
            key: [''],
            userId: [''],
            name: [''],
            phoneNo: [0],
            email: [''],
            option: [''],
            address: [''],
            requestApprove: [''],
            credit: [0],
            addOn: [0],
            uid: ['']
        });
    };
    EditBusinessUserComponent.prototype.ngOnInit = function () {
    };
    EditBusinessUserComponent.prototype.updateForm = function (value) {
        this.user = value;
        this.user.addOn = Date.now();
        this.supplierSer.updateUser(this.id2, this.user);
    };
    EditBusinessUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-business-user',
            template: __webpack_require__(/*! ./edit-business-user.component.html */ "./src/app/pages/admin/businesses/edit-business-user/edit-business-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-business-user.component.css */ "./src/app/pages/admin/businesses/edit-business-user/edit-business-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditBusinessUserComponent);
    return EditBusinessUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/cashout-request/cashout-request.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/cashout-request/cashout-request.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2Nhc2hvdXQtcmVxdWVzdC9jYXNob3V0LXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/cashout-request/cashout-request.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/cashout-request/cashout-request.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n\r\n    <div class=\"my_m2b_head\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 category_list\">\r\n                <h2>Cashout Requests</h2>\r\n            </div>\r\n            <div class=\"col-sm-4 addbtn_right\">\r\n                <a class=\"addBtn\" [routerLink]=\"['/auth/options']\" [queryParams]=\"{option:'Business'}\"  ><i class=\"fa fa-plus\"></i> Add</a>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n    \r\n    <table class=\"table table-hover table_box\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Requests No.</th>\r\n                    <th scope=\"col\"></th>\r\n                    <th scope=\"col\">Total Price</th>\r\n                    <th>Supplier Detail</th>\r\n                    <th>Requests</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n\r\n                <tr *ngFor=\"let order of requests; let i = index;\">\r\n                    <td scope=\"row\">{{i+1}}</td>\r\n                    <td>\r\n                        <div *ngFor=\"let item of order.orderDetail; let i = index;\" class=\"order-item\">\r\n                            <h6 style=\"text-align: center; font-weight: bold;\">Order {{i+1}}</h6>\r\n                            <div *ngFor=\"let prod of item\">\r\n                                <h6 style=\"margin-left:0.3rem\">{{prod.productName}}</h6>\r\n                                <table class=\"table table-hover\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th scope=\"col\">SKU Name</th>\r\n                                            <th scope=\"col\">Price</th>\r\n                                            <th scope=\"col\">Quantity</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let product of prod.productSKU; let i = index;\">\r\n                                            <td scope=\"col\" class=\"SKU-td\">{{product.SKU_Name}}</td>\r\n                                            <td scope=\"col\" class=\"SKU-td\">$ {{product.SKU_Price}}</td>\r\n                                            <td scope=\"col\" class=\"SKU-td\">{{product.quantity}}</td>\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </td>\r\n                    <td style=\"padding: 2.5rem;\">$ {{order.totalPrice}}\r\n\r\n                    </td>\r\n                    <td>\r\n                        <ul style=\"list-style: none; padding-left: 0px;\">\r\n                            <li><strong>Name:</strong> {{user[i]?.name}}</li>\r\n                            <li><strong>Email:</strong> {{user[i]?.email}}</li>\r\n                            <li><strong>Contact No:</strong> {{user[i]?.phoneNo}}</li>\r\n                        </ul>\r\n                    </td>\r\n                    <td>\r\n                        <div *ngIf=\"order.requestApprove == '0'\">\r\n                            <a class=\"approved_btn\" (click)=\"approveRequest(order.key)\"> Approve</a>\r\n                        </div>\r\n\r\n                    </td>\r\n                </tr>\r\n\r\n\r\n            </tbody>\r\n        </table>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/cashout-request/cashout-request.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/cashout-request/cashout-request.component.ts ***!
  \**************************************************************************/
/*! exports provided: CashoutRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutRequestComponent", function() { return CashoutRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _models_return_request_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/return-request.model */ "./src/app/models/return-request.model.ts");
/* harmony import */ var _services_cashout_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cashout-request.service */ "./src/app/services/cashout-request.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CashoutRequestComponent = /** @class */ (function () {
    function CashoutRequestComponent(supplierService, cashoutRequestService) {
        this.supplierService = supplierService;
        this.cashoutRequestService = cashoutRequestService;
        this.userData = new _models_return_request_model__WEBPACK_IMPORTED_MODULE_3__["ReturnRequestModel"]();
        this.requests = [];
        this.emails = [];
        this.user = [];
    }
    CashoutRequestComponent.prototype.ngOnInit = function () {
        this.getUsersList();
    };
    CashoutRequestComponent.prototype.getUsersList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.requests = [];
        this.cashoutRequestService.getCashoutRequests().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (requests) {
            _this.requests = requests;
            console.log(_this.requests);
            requests.forEach(function (request) {
                _this.getUserOption(request.supplierEmail);
            });
        });
    };
    CashoutRequestComponent.prototype.getUserOption = function (email) {
        var _this = this;
        this.supplierService.getUsersByOption("email", email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.user.push(user);
            });
        });
        console.log(this.user);
    };
    CashoutRequestComponent.prototype.approveRequest = function (key) {
        this.userData = this.requests.find(function (x) { return x.key == key; });
        console.log(this.userData);
        this.userData.requestApprove = "1";
        console.log(this.userData);
        this.cashoutRequestService.updateCashoutRequest(key, this.userData);
    };
    CashoutRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cashout-request',
            template: __webpack_require__(/*! ./cashout-request.component.html */ "./src/app/pages/admin/cashout-request/cashout-request.component.html"),
            styles: [__webpack_require__(/*! ./cashout-request.component.css */ "./src/app/pages/admin/cashout-request/cashout-request.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"],
            _services_cashout_request_service__WEBPACK_IMPORTED_MODULE_4__["CashoutRequestService"]])
    ], CashoutRequestComponent);
    return CashoutRequestComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/categories/add-category/add-category.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/admin/categories/add-category/add-category.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borderbtn {\r\n    padding: 1px;\r\n    border: 3px solid #fff;\r\n    border-radius: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vY2F0ZWdvcmllcy9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2NhdGVnb3JpZXMvYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlcmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/categories/add-category/add-category.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin/categories/add-category/add-category.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <form class=\"form-signin\" >\r\n \r\n        <h2 class=\"form-signin-heading\">Add Category</h2>\r\n        <div class=\"form-group\">\r\n            <label for=\"catName\">Category Name</label>\r\n            <input type=\"text\" id=\"catName\" class=\"form-control\" [(ngModel)]=\"param.catName\" placeholder=\"Enter Name\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"catIcon\">Select Brand</label>\r\n            <select  class=\"form-control\" id=\"brand\">\r\n                <option *ngFor=\"let item of brands; let i = index\" value=\"{{item.key}}\">{{item.name}}</option> \r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\" name=\"parent\">\r\n            <label for=\"uId\">Parent category</label> \r\n            <select  class=\"form-control\" id=\"parent\">\r\n                <option value=\"0\">Parent category</option>\r\n                <option *ngFor=\"let item of parents; let i = index\" value=\"{{item.key}}\">{{item.catName}}</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"catIcon\">Category Image(url)</label>\r\n\r\n            <input type=\"text\" class=\"form-control\" id=\"path\" placeholder=\"Category Image Url\" required>\r\n        </div>\r\n\r\n\r\n        <div class=\"borderbtn\">\r\n            <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"tryAddCategory( )\">Save</button>\r\n        </div>\r\n\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/categories/add-category/add-category.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/categories/add-category/add-category.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/category.model */ "./src/app/models/category.model.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import 'rxjs/add/operator/map'; // you might need to import this, or not 

var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(actroute, categorySer, router, fb, db) {
        this.actroute = actroute;
        this.categorySer = categorySer;
        this.router = router;
        this.fb = fb;
        this.db = db;
        this.category = new _models_category_model__WEBPACK_IMPORTED_MODULE_4__["CategoryModel"]();
        var list = this.db.list('/categories');
        this.createForm();
    }
    AddCategoryComponent.prototype.getCategoriesList = function () {
        var _this = this;
        console.log("OK I m here");
        var list = this.db.list('/categories');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (categories) {
            _this.parents = categories;
            console.log('categories');
            console.log(_this.parents);
        });
        list = this.db.list('/brands');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (brands) {
            _this.brands = brands;
            console.log('brands');
            console.log(_this.brands);
        });
    };
    AddCategoryComponent.prototype.createForm = function () {
        this.addCategoryForm = this.fb.group({
            catName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            catIcon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AddCategoryComponent.prototype.ngOnInit = function () {
        this.param = {
            'catName': '',
            'brand': '',
            'parent': '',
            'path': '',
        };
        this.getCategoriesList();
    };
    AddCategoryComponent.prototype.tryAddCategory = function () {
        this.param = {
            'catName': document.getElementById('catName').value,
            'brand': document.getElementById('brand').value,
            'parent': document.getElementById('parent').value,
            'path': document.getElementById('path').value,
        };
        console.log(this.param);
        //return 0;
        this.categorySer.createCategory(this.param);
        this.router.navigate(['admin/categories']);
    };
    AddCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./src/app/pages/admin/categories/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.css */ "./src/app/pages/admin/categories/add-category/add-category.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/categories/categories.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/categories/categories.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/categories/categories.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/categories/categories.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"\">\r\n    <div class=\"my_m2b_head\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 category_list\">\r\n                <h2>Categories List123</h2>\r\n            </div>\r\n            <div class=\"col-sm-4 addbtn_right\">\r\n                <a class=\"addBtn\" [routerLink]=\"['add-category']\" ><i class=\"fa fa-plus\"></i> Add</a>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    <table class=\"table table-hover table_box \">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">No.</th>\r\n\r\n                    <th scope=\"col\">Category Name</th>\r\n                    <th scope=\"col\">Category Icon</th>\r\n                    <th scope=\"col\">Category Status</th>\r\n                    <th scope=\"col\">Create Date</th>\r\n                    <th style=\"width:71px;\" scope=\"col\">Action\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let category of categories; let i = index;\">\r\n                    <td scope=\"row\">{{i+1}}</td>\r\n                    <td>{{category.catName}}</td>\r\n                    <td align=\"center\">\r\n                        <i class=\"fa fa-product-hunt\"></i>\r\n                    </td>\r\n                    <td>{{category.status}}</td>\r\n                    <td>{{category.addOn | date: 'dd/MM/yyyy'}}</td>\r\n                    <!-- <td> {{category.userId}}</td> -->\r\n\r\n                    <td>\r\n                        <a class=\"edit_btn\" title=\"Product list\" [routerLink]=\"['products/cat-product']\" [queryParams]=\"{ categoryId: category.key }\"><i class=\"fa fa-list-ol\"></i> </a>\r\n                        <a class=\"edit_btn\" title=\"Edit\" [routerLink]=\"['edit-category']\" [queryParams]=\"{ categoryId: category.key }\"><i class=\"fa fa-pencil\"></i> </a>\r\n                        <a class=\"delbtn\" title=\"Delete\" (click)='deleteCategoryOne(category.key)'><i\r\n                                class=\"fa fa-trash-o\"></i> </a></td>\r\n                </tr>\r\n\r\n\r\n            </tbody>\r\n        </table>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/categories/categories.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/categories/categories.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryService) {
        this.categoryService = categoryService;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategoriesList();
    };
    CategoriesComponent.prototype.getCategoriesList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.categoryService.getCategoriesList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (categories) {
            _this.categories = categories;
            console.log(_this.categories);
        });
    };
    CategoriesComponent.prototype.deleteCategoryOne = function (key) {
        this.categoryService.deleteCategory(key);
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/pages/admin/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/pages/admin/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/categories/edit-category/edit-category.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/admin/categories/edit-category/edit-category.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top:  60px;\r\n}\r\n.borderbtn{\r\n     padding:1px;\r\n    border:3px solid #fff;\r\n    border-radius: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vY2F0ZWdvcmllcy9lZGl0LWNhdGVnb3J5L2VkaXQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0tBQ0ssWUFBWTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9jYXRlZ29yaWVzL2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAgNjBweDtcclxufVxyXG4uYm9yZGVyYnRue1xyXG4gICAgIHBhZGRpbmc6MXB4O1xyXG4gICAgYm9yZGVyOjNweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/categories/edit-category/edit-category.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/admin/categories/edit-category/edit-category.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <form>\r\n \r\n        <h2 class=\"form-signin-heading\">Edit Category</h2>\r\n        <div class=\"form-group\">\r\n            <label for=\"catName\">Edit Name</label>\r\n            <input type=\"text\" id=\"catName\" class=\"form-control\" value=\"{{param.catName}}\" placeholder=\"Enter Name\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"catIcon\">Select Brand</label>\r\n            <select  class=\"form-control\" id=\"brand\">\r\n                <option *ngFor=\"let item of brands; let i = index\" value=\"{{item.key}}\">{{item.name}}</option> \r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\" name=\"parent\">\r\n            <label for=\"uId\">Parent category</label> \r\n            <select  class=\"form-control\" id=\"parent\">\r\n                <option value=\"0\">Parent category</option>\r\n                <option *ngFor=\"let item of parents; let i = index\" value=\"{{item.key}}\">{{item.catName}}</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"catIcon\">Category Image(url)</label>\r\n\r\n            <input type=\"text\" class=\"form-control\" id=\"path\" value=\"{{param.path}}\" placeholder=\"Category Image Url\" required>\r\n        </div>\r\n\r\n\r\n        <div class=\"borderbtn\">\r\n            <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"updateForm( )\">Save</button>\r\n        </div>\r\n\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/categories/edit-category/edit-category.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin/categories/edit-category/edit-category.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/category.model */ "./src/app/models/category.model.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import 'rxjs/add/operator/map'; // you might need to import this, or not 

var EditCategoryComponent = /** @class */ (function () {
    function EditCategoryComponent(actRoute, categorySer, router, fb, db) {
        //this.createForm();
        var _this = this;
        this.actRoute = actRoute;
        this.categorySer = categorySer;
        this.router = router;
        this.fb = fb;
        this.db = db;
        this.category = new _models_category_model__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"]();
        this.nameCheck = "okk";
        var id = this.actRoute.snapshot.queryParamMap.get('categoryId'); // Getting current component's id or information using ActivatedRoute service
        this.id2 = id;
        // alert(this.id2);
        if (id !== null) {
            this.categorySer.GetCategory(id).valueChanges().subscribe(function (data) {
                if (_this.nameCheck == "okk") {
                    console.log(data);
                    _this.param = data;
                    // this.addCategoryForm.setValue(data); // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive for
                    _this.nameCheck = data.catName;
                }
            });
        }
        if (this.param) {
            document.getElementById('brand').value = this.param.brand;
            document.getElementById('parent').value = this.param.parent;
        }
    }
    EditCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list = this.db.list('/categories');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (categories) {
            _this.parents = categories;
            console.log('categories');
            console.log(_this.parents);
        });
        list = this.db.list('/brands');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (brands) {
            _this.brands = brands;
            console.log('brands');
            console.log(_this.brands);
            if (_this.param) {
                document.getElementById('brand').value = _this.param.brand;
                document.getElementById('parent').value = _this.param.parent;
            }
        });
    };
    EditCategoryComponent.prototype.updateForm = function () {
        this.param = {
            'catName': document.getElementById('catName').value,
            'brand': document.getElementById('brand').value,
            'parent': document.getElementById('parent').value,
            'path': document.getElementById('path').value,
        };
        console.log(this.param);
        this.categorySer.updateCategory(this.id2, this.param);
        this.router.navigate(['admin/categories']);
    };
    EditCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-category',
            template: __webpack_require__(/*! ./edit-category.component.html */ "./src/app/pages/admin/categories/edit-category/edit-category.component.html"),
            styles: [__webpack_require__(/*! ./edit-category.component.css */ "./src/app/pages/admin/categories/edit-category/edit-category.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/chat/chat.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/admin/chat/chat.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/chat/chat.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/admin/chat/chat.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"buy_back\">\r\n    <div class=\"container \" >\r\n    <div class=\"my_m2b_head\">\r\n      <h2>Chat</h2>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"bd-example\">\r\n                <div id=\"accordion\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header123\" role=\"tab\" id=\"headingOne\">\r\n                            <div class=\"mb-0\">\r\n\r\n\r\n                                <div class=\"chat_list row\" *ngFor=\"let messages of myChatList let i=index\">\r\n                                    <div class=\"col-sm-6 order_no\">\r\n                                        <div class=\"chat_people\" [routerLink]=\"['./messages']\" [queryParams]=\"{ userId: messages.userOrderID }\" (click)=\"onClick(messages.key)\">\r\n                                        <div class=\"chat_img \" [ngClass]=\"{'chat_unread': messages.userUnread > 0}\">\r\n                                            <span class=\"badge badge-primary unread\" *ngIf=\"messages.userUnread > 0\">{{messages.userUnread}}</span>\r\n                                            <img src=\"https://ptetutorials.com/images/user-profile.png\" alt=\"mani\"> </div>\r\n                                            <h5>Supplier Email: {{messages.supplierEmail}}</h5>\r\n                                        <p *ngIf=\"last\">{{message.message}}\r\n                                                </p>\r\n                                    </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 shipped_down\">\r\n                                        <div class=\"chat_ib\">\r\n                                            \r\n                                            <div *ngFor=\"let message of messages.messages; let last = last\">\r\n                                                <b class=\"chat_date\" *ngIf=\"last\">{{message.timeSent | date: 'dd/MM/yyyy'}}</b>\r\n                                                \r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                                \r\n                                <ng-template #elseTemplate>\r\n                                    <div class=\"chat_list\" *ngFor=\"let messages of chatAdmin \">\r\n                                        <div class=\"chat_people\" [routerLink]=\"['./messages']\" [queryParams]=\"{ userId: messages.chatID }\" (click)=\"onClick(messages.chatID, 'admin')\">\r\n                                            <div class=\"chat_img\" [ngClass]=\"{'chat_unread': messages.userUnread > 0}\">\r\n                                                <span class=\"badge badge-primary unread\" *ngIf=\"messages.userUnread > 0\">{{messages.userUnread}}</span>\r\n                                                <img src=\"https://ptetutorials.com/images/user-profile.png\" alt=\"sunil\"> </div>\r\n                                            <div class=\"chat_ib\">\r\n                                                <h5>{{messages.userName}} </h5>\r\n                                                <div *ngFor=\"let message of messages.messages; let last = last\">\r\n                                                    <span class=\"chat_date\" *ngIf=\"last\">{{message.timeSent | date: 'dd/MM/yyyy'}}</span>\r\n                                                    <p *ngIf=\"last\">{{message.message}}\r\n                                                    </p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                                <h6 *ngIf=\"isFound\">Not Found!</h6>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/admin/chat/chat.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/admin/chat/chat.component.ts ***!
  \****************************************************/
/*! exports provided: adminChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminChatComponent", function() { return adminChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_chat_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/chat-message.service */ "./src/app/services/chat-message.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.model */ "./src/app/models/user.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var adminChatComponent = /** @class */ (function () {
    // nameCheck: string ;
    function adminChatComponent(supplierOrderListService, chatMessageSer, supplierSer) {
        this.supplierOrderListService = supplierOrderListService;
        this.chatMessageSer = chatMessageSer;
        this.supplierSer = supplierSer;
        this.userName = "okk";
        this.chatSelected = '';
        this.isFound = false;
        this.chatOption = [
            { name: "Select here", value: '' },
            { name: "Chat with admin", value: 'admin' },
            { name: "Chat with Customer", value: 'customer' }
        ];
        this.myChatList = [];
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.option = localStorage.getItem("op");
    }
    adminChatComponent.prototype.ngOnInit = function () {
        if (this.option == _models_user_model__WEBPACK_IMPORTED_MODULE_5__["Role"].Admin) {
            this.getChatAdmin();
        }
        else {
            this.getChatList();
            this.getChatSupplier();
        }
    };
    adminChatComponent.prototype.getUserName = function (id) {
        var _this = this;
        this.supplierSer.GetUser(id).valueChanges().subscribe(function (data) {
            if (_this.userName == "okk") {
                _this.userName = data.name;
            }
            return _this.userName;
        });
    };
    adminChatComponent.prototype.getChatList = function () {
        var _this = this;
        var count = 0;
        this.supplierOrderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (supplierOrderList) {
            if (count > 0) {
                _this.myChatList = [];
            }
            count++;
            console.log(supplierOrderList);
            supplierOrderList.sort(function (a, b) { return ((+b.lastAddedMsgDate ? +b.lastAddedMsgDate : 0) - (+a.lastAddedMsgDate ? +a.lastAddedMsgDate : 0)); });
            console.log(supplierOrderList);
            supplierOrderList.forEach(function (order) {
                if (_this.ownEmail == order.supplierEmail) {
                    _this.myChatList.push(order);
                }
            });
            console.log(_this.myChatList);
        });
    };
    adminChatComponent.prototype.onClick = function (key, name) {
        if (name == 'customer') {
            var index = this.myChatList.findIndex(function (x) { return x.key == key; });
            this.myChatList[index].supplierUnread = 0;
            this.supplierOrderListService.updateOrderList(this.myChatList[index].key, this.myChatList[index]);
        }
        else if (name == 'supplier') {
            var index = this.chatSupplier.findIndex(function (x) { return x.key == key; });
            this.chatSupplier[index].supplierUnread = 0;
            this.chatMessageSer.updatechatMessage(this.chatSupplier[index].key, this.chatSupplier[index]);
        }
        else if (name == 'admin') {
            var index = this.chatAdmin.findIndex(function (x) { return x.chatID == key; });
            this.chatAdmin[index].userUnread = 0;
            this.chatMessageSer.updatechatMessage(this.chatAdmin[index].key, this.chatAdmin[index]);
        }
    };
    adminChatComponent.prototype.getChatAdmin = function () {
        var _this = this;
        //   // Use snapshotChanges().map() to store the key
        this.chatMessageSer.getchatMessages().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (chats) {
            console.log(chats);
            chats.sort(function (a, b) { return ((+b.lastAddedMsgDate ? +b.lastAddedMsgDate : 0) - (+a.lastAddedMsgDate ? +a.lastAddedMsgDate : 0)); });
            console.log(chats);
            _this.chatAdmin = chats;
            console.log(_this.chatAdmin);
        });
    };
    adminChatComponent.prototype.getChatSupplier = function () {
        var _this = this;
        //   // Use snapshotChanges().map() to store the key
        this.chatMessageSer.getchatMessagesByOption("userEmail", this.ownEmail).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (chats) {
            console.log(chats);
            chats.sort(function (a, b) { return ((+b.lastAddedMsgDate ? +b.lastAddedMsgDate : 0) - (+a.lastAddedMsgDate ? +a.lastAddedMsgDate : 0)); });
            console.log(chats);
            _this.chatSupplier = chats;
            console.log(_this.chatSupplier);
        });
    };
    adminChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/pages/admin/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/pages/admin/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_4__["SupplierOrderListService"],
            _services_chat_message_service__WEBPACK_IMPORTED_MODULE_1__["ChatMessageService"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"]])
    ], adminChatComponent);
    return adminChatComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/chat/messages/messages.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/chat/messages/messages.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.btn {\r\n    padding: 10px;\r\n}\r\n\r\n.fa {\r\n    font-size: 20px;\r\n}\r\n\r\n.card::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 8px;\r\n    background: #ddd;\r\n}\r\n\r\n.balon1,\r\n.balon2 {\r\n    margin-top: 5px !important;\r\n    margin-bottom: 5px !important;\r\n}\r\n\r\n.balon1 a {\r\n    background: #42a5f5;\r\n    color: #fff !important;\r\n    border-radius: 20px 20px 3px 20px;\r\n    display: block;\r\n    max-width: 75%;\r\n    padding: 7px 13px 7px 13px;\r\n    float: right;\r\n}\r\n\r\n.timeStyle {\r\n    position: relative;\r\n    bottom: -0.8em;\r\n    display: block;\r\n    font-size: .750rem;\r\n    color: rgba(84, 110, 122, 1.0);\r\n}\r\n\r\n.balon2 a {\r\n    background: #f1f1f1;\r\n    color: #000 !important;\r\n    border-radius: 20px 20px 20px 3px;\r\n    display: block;\r\n    max-width: 75%;\r\n    padding: 7px 13px 7px 13px;\r\n    float: left;\r\n}\r\n\r\n.balon2:before {\r\n    content: attr(data-is);\r\n    position: absolute;\r\n    left: 13px;\r\n    bottom: -0.8em;\r\n    display: block;\r\n    font-size: .750rem;\r\n    color: rgba(84, 110, 122, 1.0);\r\n}\r\n\r\n.online {\r\n    color: green;\r\n    font-size: 65%;\r\n}\r\n\r\n.b1 {\r\n    position: absolute;\r\n    right: 0rem;\r\n}\r\n\r\n.balon1[_ngcontent-c1], .balon2[_ngcontent-c1] {\r\n    padding: 29px 19px 13px 17px !important;\r\n}\r\n\r\n.balon1[_ngcontent-c1] a[_ngcontent-c1] {\r\n    font-size: 13px;\r\n}\r\n\r\n.messages_info[_ngcontent-c1] p[_ngcontent-c1] {\r\n    font-size: 13px;\r\n    padding: 0 19px 0 !important;\r\n}\r\n\r\n.balon2[_ngcontent-c1] a[_ngcontent-c1] {\r\n    font-size: 13px;\r\n}\r\n\r\n.chatscroll{\r\n    overflow-y: auto;\r\n    height: 56vh;\r\n    padding: 0 0 23px 0 !important;\r\n}\r\n\r\n.main_scrollbar{\r\nbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 6px 10px 0 rgba(0, 0, 0, 0.01); overflow: hidden; height: 100vh;\r\n}\r\n\r\n@media(max-width: 767px){\r\n    .container{\r\n        width: auto;\r\n    }\r\n    .balon1[_ngcontent-c1][_ngcontent-c1], .balon2[_ngcontent-c1][_ngcontent-c1] {\r\n    padding: 16px 19px 0px 17px !important;\r\n}\r\n    .balon2[_ngcontent-c1] a[_ngcontent-c1],.balon1[_ngcontent-c1] a[_ngcontent-c1] {\r\n\r\n    max-width: auto;\r\n    float: none;\r\n}\r\n    .balon1[_ngcontent-c1][_ngcontent-c1] a[_ngcontent-c1][_ngcontent-c1] {\r\n    font-size: 11px;\r\n}\r\n    .chatscroll[_ngcontent-c1] {\r\n        height: 62vh;\r\n    }\r\n    .msger-inputarea textarea {\r\n        padding: 10px 92px 0 13px;\r\n        font-size: 15px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vY2hhdC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7O0FBRUQ7O0lBRUksMkJBQTJCO0lBQzNCLDhCQUE4QjtDQUNqQzs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsK0JBQStCO0NBQ2xDOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsWUFBWTtDQUNmOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsK0JBQStCO0NBQ2xDOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztBQUNEO0lBQ0ksd0NBQXdDO0NBQzNDOztBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtDQUNoQzs7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsK0JBQStCO0NBQ2xDOztBQUNEO0FBQ0EsOEVBQThFLENBQUMsaUJBQWlCLENBQUMsY0FBYztDQUM5Rzs7QUFJRDtJQUNJO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7SUFDQSx1Q0FBdUM7Q0FDMUM7SUFDRzs7SUFFQSxnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmO0lBQ0c7SUFDQSxnQkFBZ0I7Q0FDbkI7SUFDRztRQUNJLGFBQWE7S0FDaEI7SUFDRDtRQUNJLDBCQUEwQjtRQUMxQixnQkFBZ0I7S0FDbkI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2NoYXQvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5idG4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLmJhbG9uMSxcclxuLmJhbG9uMiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFsb24xIGEge1xyXG4gICAgYmFja2dyb3VuZDogIzQyYTVmNTtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggM3B4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgcGFkZGluZzogN3B4IDEzcHggN3B4IDEzcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi50aW1lU3R5bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAtMC44ZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjc1MHJlbTtcclxuICAgIGNvbG9yOiByZ2JhKDg0LCAxMTAsIDEyMiwgMS4wKTtcclxufVxyXG5cclxuLmJhbG9uMiBhIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDIwcHggM3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDc1JTtcclxuICAgIHBhZGRpbmc6IDdweCAxM3B4IDdweCAxM3B4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5iYWxvbjI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1pcyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG4gICAgYm90dG9tOiAtMC44ZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjc1MHJlbTtcclxuICAgIGNvbG9yOiByZ2JhKDg0LCAxMTAsIDEyMiwgMS4wKTtcclxufVxyXG5cclxuLm9ubGluZSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXNpemU6IDY1JTtcclxufVxyXG5cclxuLmIxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcmVtO1xyXG59XHJcbi5iYWxvbjFbX25nY29udGVudC1jMV0sIC5iYWxvbjJbX25nY29udGVudC1jMV0ge1xyXG4gICAgcGFkZGluZzogMjlweCAxOXB4IDEzcHggMTdweCAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWxvbjFbX25nY29udGVudC1jMV0gYVtfbmdjb250ZW50LWMxXSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLm1lc3NhZ2VzX2luZm9bX25nY29udGVudC1jMV0gcFtfbmdjb250ZW50LWMxXSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE5cHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWxvbjJbX25nY29udGVudC1jMV0gYVtfbmdjb250ZW50LWMxXSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmNoYXRzY3JvbGx7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA1NnZoO1xyXG4gICAgcGFkZGluZzogMCAwIDIzcHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWluX3Njcm9sbGJhcntcclxuYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEwKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wMSk7IG92ZXJmbG93OiBoaWRkZW47IGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC5iYWxvbjFbX25nY29udGVudC1jMV1bX25nY29udGVudC1jMV0sIC5iYWxvbjJbX25nY29udGVudC1jMV1bX25nY29udGVudC1jMV0ge1xyXG4gICAgcGFkZGluZzogMTZweCAxOXB4IDBweCAxN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgIC5iYWxvbjJbX25nY29udGVudC1jMV0gYVtfbmdjb250ZW50LWMxXSwuYmFsb24xW19uZ2NvbnRlbnQtYzFdIGFbX25nY29udGVudC1jMV0ge1xyXG5cclxuICAgIG1heC13aWR0aDogYXV0bztcclxuICAgIGZsb2F0OiBub25lO1xyXG59XHJcbiAgICAuYmFsb24xW19uZ2NvbnRlbnQtYzFdW19uZ2NvbnRlbnQtYzFdIGFbX25nY29udGVudC1jMV1bX25nY29udGVudC1jMV0ge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbiAgICAuY2hhdHNjcm9sbFtfbmdjb250ZW50LWMxXSB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MnZoO1xyXG4gICAgfVxyXG4gICAgLm1zZ2VyLWlucHV0YXJlYSB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA5MnB4IDAgMTNweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/admin/chat/messages/messages.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/chat/messages/messages.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header previousAction=\"Chats\" previousLink=\"/chat\"></app-header>\r\n<div class=\"container \" id=\"message__box\"> \r\n    <div class=\"\" style=\"margin-top: 0px  !important; \">\r\n        <div class=\"row m-0 p-0 position-relative\">\r\n            <div class=\"col-12 p-0 m-0 position-absolute\" style=\"right: 0px;\">\r\n                <div class=\"card border-0 rounded main_scrollbar\">\r\n\r\n                    <div class=\"msger-header\">\r\n\r\n                        <div class=\"msger-header-title\">\r\n                            <img src=\"../../../assets/img/admin.png\" />\r\n\r\n                        <b> Live Support Chat <br> </b>\r\n                        <span>online <i></i></span>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"card bg-sohbet border-0 m-0 p-0 chatscroll\" >\r\n                        <div id=\"sohbet\" class=\"card border-0 m-0 p-0 position-relative bg-transparent\" #scrollMe>\r\n\r\n                            <div *ngFor=\"let messages of chats;\">\r\n                                <div *ngFor=\"let message of messages.messages;\">\r\n                                    <div class=\"\" [ngClass]=\"message.senderEmail === ownEmail? 'balon1':'balon2'\">\r\n                                        <a>{{message.message}}</a>\r\n                                    </div><br>\r\n                                    <div class=\"messages_info\">\r\n                                        <p class=\" p-2 m-0 \" [ngClass]=\"message.senderEmail === ownEmail? 'b1':'position-relative'\">\r\n                                            {{timeagos(+message.timeSent)}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\" msger-inputarea\" >\r\n                            <form>\r\n                                 <textarea placeholder=\"Type a message...\" name=\"message\" class=\"textarea\" [(ngModel)]=\"message\" (keydown)=\"handleSubmit($event)\"></textarea>\r\n                            \r\n                            <button class=\"msger-send-btn\" (click)=\"send()\">Send</button>\r\n                            </form>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/admin/chat/messages/messages.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/chat/messages/messages.component.ts ***!
  \*****************************************************************/
/*! exports provided: adminMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminMessagesComponent", function() { return adminMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! javascript-time-ago */ "./node_modules/javascript-time-ago/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! javascript-time-ago/locale/en */ "./node_modules/javascript-time-ago/locale/en/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_chat_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/chat-message.service */ "./src/app/services/chat-message.service.ts");
/* harmony import */ var _models_chat_message_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../models/chat-message.model */ "./src/app/models/chat-message.model.ts");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var _models_supplier_order_list_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../models/supplier-order-list.model */ "./src/app/models/supplier-order-list.model.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../models/user.model */ "./src/app/models/user.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"].addLocale(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_5___default.a);
var adminMessagesComponent = /** @class */ (function () {
    function adminMessagesComponent(supplierOrderListService, fb, authService, chatMessageSer, actRoute, supplierSer) {
        this.supplierOrderListService = supplierOrderListService;
        this.fb = fb;
        this.authService = authService;
        this.chatMessageSer = chatMessageSer;
        this.actRoute = actRoute;
        this.supplierSer = supplierSer;
        this.message = "";
        this.messageObj = new _models_supplier_order_list_model__WEBPACK_IMPORTED_MODULE_11__["SupplierOrderListModel"]();
        this.messageObjAdmin = new _models_chat_message_model__WEBPACK_IMPORTED_MODULE_7__["ChatMessageModel"]();
        this.msgStruct = {
            message: '',
            timeSent: '',
            senderId: '',
            senderEmail: ''
        };
        this.myMessages = new Array();
        this.checkChild = "userOrderID";
        this.userData = {
            nameCheck: '',
            key: ''
        };
        this.timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"]('en-US');
        this.option = localStorage.getItem("op");
    }
    adminMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localStorageData = JSON.parse(localStorage.getItem("user"));
        this.ownEmail = this.localStorageData.email;
        this.actRoute.queryParams.subscribe(function (quer) {
            _this.id = quer.userId ? quer.userId : quer.orderId;
            if (_this.option == _models_user_model__WEBPACK_IMPORTED_MODULE_12__["Role"].Supplier) {
                _this.idName = quer.userId ? 'userId' : 'orderId';
            }
            else {
                _this.idName = 'userId';
            }
            console.log(_this.id);
            _this.getData();
        });
        this.getUserInfo();
        this.scrollToBottom();
    };
    adminMessagesComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    adminMessagesComponent.prototype.timeagos = function (time) {
        return this.timeAgo.format(time);
    };
    adminMessagesComponent.prototype.scrollToBottom = function () {
        try {
            this.msgContents.nativeElement.scrollTop = this.msgContents.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    adminMessagesComponent.prototype.send = function () {
        var _this = this;
        console.log(this.chats);
        if (this.message === "") {
            console.log("Empty Message!");
        }
        else {
            setTimeout(function () {
                _this.msgStruct = {
                    message: _this.message, timeSent: Date.now().toString(), senderId: _this.getUserInfo().key, senderEmail: _this.ownEmail
                };
                console.log(_this.msgStruct);
                console.log(_this.myMessages);
                console.log(_this.messageObj);
                if (_this.idName == 'orderId') {
                    _this.messageObj = _this.chats;
                    _this.messageObj[0].userUnread++;
                    _this.messageObj[0].supplierUnread = 0;
                    _this.messageObj[0].lastAddedMsgDate = Date.now().toString();
                    _this.messageObj[0].messages.push(_this.msgStruct);
                    _this.supplierOrderListService.updateOrderList(_this.myMessages[0], _this.messageObj[0]);
                    _this.messageObj = new _models_supplier_order_list_model__WEBPACK_IMPORTED_MODULE_11__["SupplierOrderListModel"]();
                }
                else {
                    _this.messageObjAdmin = _this.chats;
                    if (_this.option == _models_user_model__WEBPACK_IMPORTED_MODULE_12__["Role"].Supplier) {
                        _this.messageObjAdmin[0].userUnread++;
                        _this.messageObjAdmin[0].supplierUnread = 0;
                    }
                    else {
                        _this.messageObjAdmin[0].supplierUnread++;
                        _this.messageObjAdmin[0].userUnread = 0;
                    }
                    _this.messageObjAdmin[0].lastAddedMsgDate = Date.now().toString();
                    _this.messageObjAdmin[0].messages.push(_this.msgStruct);
                    _this.chatMessageSer.updatechatMessage(_this.myMessages[0], _this.messageObjAdmin[0]);
                    _this.messageObjAdmin = new _models_chat_message_model__WEBPACK_IMPORTED_MODULE_7__["ChatMessageModel"]();
                }
                console.log(_this.messageObj);
                console.log(_this.myMessages);
                _this.message = "";
            }, 500);
        }
    };
    adminMessagesComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.supplierSer.getUsersByOption("email", this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.userData.key = user.key;
                _this.userEmail = user.email;
                console.log(_this.userData.key);
                _this.userData.nameCheck = user.name;
                console.log(_this.userData.nameCheck);
            });
        });
        return this.userData;
    };
    adminMessagesComponent.prototype.getData = function () {
        var _this = this;
        if (this.idName == 'orderId') {
            this.supplierOrderListService.getOrderListsByOption("userOrderID", this.id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            })).subscribe(function (chat) {
                _this.chats = chat;
                chat.forEach(function (chats) {
                    _this.myMessages.push(chats.key);
                    _this.userName = chats.userName;
                });
            });
        }
        else {
            this.chatMessageSer.getchatMessagesByOption('chatID', this.id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            })).subscribe(function (chat) {
                _this.chats = chat;
                chat.forEach(function (chats) {
                    _this.myMessages.push(chats.key);
                });
            });
        }
        console.log(this.myMessages);
    };
    adminMessagesComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode === 13) {
            this.send();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], adminMessagesComponent.prototype, "msgContents", void 0);
    adminMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/pages/admin/chat/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/pages/admin/chat/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_10__["SupplierOrderListService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _services_chat_message_service__WEBPACK_IMPORTED_MODULE_6__["ChatMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_9__["SupplierService"]])
    ], adminMessagesComponent);
    return adminMessagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/common/admin-footer/admin-footer.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/common/admin-footer/admin-footer.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    /* just for demo */\r\n    background-color: #F8F8F8;\r\n    border-top: 1px solid #E7E7E7;\r\n    text-align:center;\r\n    padding:20px;\r\n   /* just for demo */\r\n \r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    height: 80px;\r\n    width: 100%;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vY29tbW9uL2FkbWluLWZvb3Rlci9hZG1pbi1mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixhQUFhO0dBQ2QsbUJBQW1COztJQUVsQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vY29tbW9uL2FkbWluLWZvb3Rlci9hZG1pbi1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICAvKiBqdXN0IGZvciBkZW1vICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFN0U3RTc7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgLyoganVzdCBmb3IgZGVtbyAqL1xyXG4gXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/common/admin-footer/admin-footer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/common/admin-footer/admin-footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <p>\r\n      ©M2b Dev team 2019\r\n  </p>\r\n  </footer>"

/***/ }),

/***/ "./src/app/pages/admin/common/admin-footer/admin-footer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/common/admin-footer/admin-footer.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFooterComponent", function() { return AdminFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminFooterComponent = /** @class */ (function () {
    function AdminFooterComponent() {
    }
    AdminFooterComponent.prototype.ngOnInit = function () {
    };
    AdminFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-footer',
            template: __webpack_require__(/*! ./admin-footer.component.html */ "./src/app/pages/admin/common/admin-footer/admin-footer.component.html"),
            styles: [__webpack_require__(/*! ./admin-footer.component.css */ "./src/app/pages/admin/common/admin-footer/admin-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminFooterComponent);
    return AdminFooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/item-sold/item-sold.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/item-sold/item-sold.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 7rem;\r\n}\r\n\r\n.addBtn {\r\n    position: absolute;\r\n    right: 2rem;\r\n}\r\n\r\n.cardStyle {\r\n    overflow: auto;\r\n    margin-bottom: 3.5rem !important;\r\n}\r\n\r\n.SKU-td {\r\n    padding: 0.3rem 1.4rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vaXRlbS1zb2xkL2l0ZW0tc29sZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9pdGVtLXNvbGQvaXRlbS1zb2xkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDdyZW07XHJcbn1cclxuXHJcbi5hZGRCdG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5jYXJkU3R5bGUge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLlNLVS10ZCB7XHJcbiAgICBwYWRkaW5nOiAwLjNyZW0gMS40cmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/item-sold/item-sold.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/item-sold/item-sold.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-shadow mb-4 col-12 cardStyle\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title text-center\">\r\n            Items Sold\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">No.</th>\r\n                    <th scope=\"col\">All Product</th>\r\n                    <th scope=\"col\">SKU & Quantity Sold</th>\r\n\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n\r\n                <tr *ngFor=\"let product of myProduct; let i = index;\">\r\n\r\n                    <th scope=\"row\">\r\n                        {{i+1}}\r\n                    </th>\r\n                    <td>\r\n                        {{product.product_name}}\r\n                    </td>\r\n                    <td>\r\n                        <table class=\"table table-hover\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th scope=\"col\">SKU Name</th>\r\n                                    <th scope=\"col\">Quantity Sold</th>\r\n                                    <th scope=\"col\">Amount</th>\r\n                                    <th scope=\"col\">Profit</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of product.productSKU; let i = index;\">\r\n                                    <td scope=\"col\" class=\"SKU-td\">{{item.SKU_Name}}</td>\r\n                                    <td scope=\"col\" class=\"SKU-td\">{{+item.SKU_sold_qty - +item.SKU_Quantity}}</td>\r\n                                    <td scope=\"col\" class=\"SKU-td\">{{item.total_price | number : '1.2-2'}}</td>\r\n                                    <td scope=\"col\" class=\"SKU-td\">{{item.total_profit | number : '1.2-2'}}</td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/item-sold/item-sold.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/item-sold/item-sold.component.ts ***!
  \**************************************************************/
/*! exports provided: ItemSoldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSoldComponent", function() { return ItemSoldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemSoldComponent = /** @class */ (function () {
    function ItemSoldComponent(productService) {
        this.productService = productService;
        this.myProduct = [];
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
    }
    ItemSoldComponent.prototype.ngOnInit = function () {
        this.getProductsList();
    };
    ItemSoldComponent.prototype.getProductsList = function () {
        var _this = this;
        var totalQty = 0;
        this.productService.getProductsList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (products) {
            _this.myProduct = [];
            products.forEach(function (product) {
                if (_this.ownEmail == product.supplierEmail) {
                    product.productSKU.forEach(function (SKU) {
                        totalQty = +SKU.SKU_sold_qty - +SKU.SKU_Quantity;
                        SKU['total_price'] = totalQty * SKU.SKU_Price;
                        SKU['total_profit'] = (totalQty * SKU.SKU_Price) - (totalQty * SKU.SKU_Cost);
                    });
                    _this.myProduct.push(product);
                }
            });
        });
    };
    ItemSoldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-sold',
            template: __webpack_require__(/*! ./item-sold.component.html */ "./src/app/pages/admin/item-sold/item-sold.component.html"),
            styles: [__webpack_require__(/*! ./item-sold.component.css */ "./src/app/pages/admin/item-sold/item-sold.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ItemSoldComponent);
    return ItemSoldComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/order-list/order-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/order-list/order-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/order-list/order-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/order-list/order-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"my_m2b_head\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 category_list\">\r\n                <h2>Orders List {{isSupplierProduct}}</h2>\r\n            </div>\r\n            \r\n        </div>\r\n        </div>\r\n    \r\n    <div class=\"card-body_\">\r\n        <table class=\"table table-hover table_box\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Order No.</th>\r\n                    <th scope=\"col\"></th>\r\n                    <th scope=\"col\">Total Price</th>\r\n                    <th scope=\"col\" *ngIf=\"!isSupplierProduct\">Businuss Detail</th>\r\n                    <th scope=\"col\" *ngIf=\"!isSupplierProduct\"> Tracking Information.</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <ng-container *ngIf=\"isSupplierProduct\">\r\n\r\n                    <tr *ngFor=\"let order of orderList; let i = index;\">\r\n                        <td scope=\"row\">{{i+1}}</td>\r\n                        <td>\r\n                            <div *ngFor=\"let item of order.cart\">\r\n                                <h5>{{item.product.product_name}}</h5>\r\n                                <table class=\"table table-hover\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th scope=\"col\">SKU Name</th>\r\n                                            <th scope=\"col\">Price</th>\r\n                                            <th scope=\"col\">Quantity</th>\r\n                                            <th scope=\"col\">Attribute</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr >\r\n                                            <td scope=\"col\">{{item.sku.SKU_Name}}</td>\r\n                                            <td scope=\"col\">$ {{item.sku.SKU_Price}}</td>\r\n                                            <td scope=\"col\">{{item.qty}}</td>\r\n                                            <td scope=\"col\">{{item.astr}}</td>\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </td>\r\n                        <td>$ {{order.tot | number : '1.2-2'}}\r\n                        </td>\r\n\r\n                    </tr>\r\n                </ng-container>\r\n                <!-- for supplier  -->\r\n                <ng-container *ngIf=\"!isSupplierProduct\">\r\n\r\n                    <tr *ngFor=\"let order of orderList; let i = index;\">\r\n                        <td scope=\"row\">{{i+1}}</td>\r\n                        <td>\r\n                            <div *ngFor=\"let item of order.cart\">\r\n                                <h5>{{item.product.product_name}}</h5>\r\n                                <table class=\"table table-hover\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th scope=\"col\">SKU Name</th>\r\n                                            <th scope=\"col\">Price</th>\r\n                                            <th scope=\"col\">Quantity</th>\r\n                                            <th scope=\"col\">Attribute</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr >\r\n                                            <td scope=\"col\">{{item.sku.SKU_Name}}</td>\r\n                                            <td scope=\"col\">$ {{item.sku.SKU_Price}}</td>\r\n                                            <td scope=\"col\">{{item.qty}}</td>\r\n                                            <td scope=\"col\">{{item.astr}}</td>\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </td>\r\n                        <td>$ {{order.tot | number : '1.2-2'}}\r\n                        </td>\r\n                        <td>\r\n                            <ul style=\"list-style: none; padding-left: 0px;\">\r\n                                <li><strong>Name:</strong> {{order.saddress.fname}} {{order.saddress.lname}}</li>\r\n                                <li><strong>Email:</strong> {{order.saddress.email}}</li>\r\n                                <li><strong>Contact No:</strong> {{order.saddress.phone}}</li>\r\n                                <li><strong>Delivery Address:</strong> {{order.saddress.address}}</li>\r\n                            </ul>\r\n                        </td>\r\n                        <td>\r\n                            <label for=\"trackingNo\" class=\"labelStyle\">Tracking Number</label>\r\n                            <input type=\"text\" id=\"trackingNo\" class=\"form-control\" placeholder=\"Enter Tracking Number\" [(ngModel)]=\"order.trackingNo\" (click)=\"onClick()\" [disabled]=\"isSave[i]\">\r\n                            <label for=\"Courier\" class=\"labelStyle\">Courier </label>\r\n                            <select class=\"btn btn-secondary dropdown-toggle form-control\" [(ngModel)]=\"order.courierInfo\" style=\"background-color: #F78C3C\" [disabled]=\"isSave[i]\">\r\n                <option *ngFor=\"let item of courierInfo\" [value]=\"item.value\">{{item.name}}</option>\r\n              </select>\r\n                            <label for=\"TimeEst\" class=\"labelStyle\">Time Est</label>\r\n                            <input type=\"text\" id=\"TimeEst\" class=\"form-control\" placeholder=\"Enter Estimated Time\" [(ngModel)]=\"order.timeEst\" (click)=\"onClick()\" [disabled]=\"isSave[i]\">\r\n                            <a class=\"btn btn-outline-secondary \" (click)=\"onEdit(i)\" *ngIf=\"isSave[i]\">\r\n                Edit</a>\r\n                            <a class=\"btn btn-outline-secondary \" (click)=\"onSave(i)\" *ngIf=\"!isSave[i]\">\r\n                Save</a>\r\n                        </td>\r\n\r\n                    </tr>\r\n                </ng-container>\r\n            </tbody>\r\n        </table>\r\n        <div *ngIf=\"!isSupplierProduct\"><span class=\"total\">My Total Credit : $\r\n        {{supplierTotalCredit | number : '1.2-2'}}</span>\r\n\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/pages/admin/order-list/order-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/order-list/order-list.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_order_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/order-list.service */ "./src/app/services/order-list.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var _models_order_list_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/order-list.model */ "./src/app/models/order-list.model.ts");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(settingService, orderListService, supplierService, authService, sendEmailService, supplierOrderListService) {
        this.settingService = settingService;
        this.orderListService = orderListService;
        this.supplierService = supplierService;
        this.authService = authService;
        this.sendEmailService = sendEmailService;
        this.supplierOrderListService = supplierOrderListService;
        this.appUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].appUrl;
        this.myProduct = new Array();
        this.checkChild = "email";
        this.courierInfo = [
            { name: 'DHL', value: 1 },
            { name: 'UPS', value: 2 },
            { name: 'USPS', value: 3 },
        ];
        this.myOrder = new _models_order_list_model__WEBPACK_IMPORTED_MODULE_5__["OrderListModel"]();
        this.count = 0;
        this.totalOrder = new Array();
        this.supplierOrderList = [];
        this.supplierTotalCredit = 0;
        this.supplierTag = { title: "", data: "", link: "" };
        this.isCheckout = false;
        this.isSave = [];
        this.userOrder = [];
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
    }
    OrderListComponent.prototype.ngOnInit = function () {
        this.getUserOption();
        this.supplierOrderList = [];
        this.getOrderList();
    };
    OrderListComponent.prototype.onClick = function () {
    };
    OrderListComponent.prototype.onEdit = function (index) {
        this.isSave[index] = false;
    };
    OrderListComponent.prototype.onSave = function (index) {
        var _this = this;
        var container = {
            productDetail: []
        };
        var trackingObj = [{
                trackingNo: '',
                courierInfo: '',
                timeEst: ''
            }];
        console.log(this.supplierOrderList[index]);
        console.log(this.supplierOrderList[index].trackingNo, this.supplierOrderList[index].courierInfo, this.supplierOrderList[index].timeEst);
        if ((this.supplierOrderList[index].trackingNo == '' || this.supplierOrderList[index].trackingNo == undefined) && (this.supplierOrderList[index].courierInfo == '' || this.supplierOrderList[index].courierInfo == undefined) && (this.supplierOrderList[index].timeEst == '' || this.supplierOrderList[index].timeEst == undefined)) {
            console.log("Values are empty!");
        }
        else {
            // console.log("Values are Not empty!");
            var ind = this.orderList.findIndex(function (x) { return x.id == _this.supplierOrderList[index].orderID; });
            this.orderList[ind].status = 'Shipped';
            trackingObj[0].trackingNo = this.supplierOrderList[index].trackingNo;
            trackingObj[0].courierInfo = this.supplierOrderList[index].courierInfo;
            trackingObj[0].timeEst = this.supplierOrderList[index].timeEst;
            this.orderList[ind].trackingNoList = trackingObj;
            this.orderListService.updateOrderList(this.orderList[ind].key, this.orderList[ind]);
            this.supplierOrderListService.updateOrderList(this.supplierOrderList[index].key, this.supplierOrderList[index]);
            this.isSave[index] = true;
            this.supplierTag.data = "Your Order is on it's way!";
            this.supplierTag.title = "Thank You!";
            this.supplierTag.link = " <p style=\"background-color: #ff8e32;border: 2px solid #ffffff;color:#ffffff;border-radius: .5rem;font-size: 14px;font-weight: 600;line-height:1;padding: 20px 13px;text-align:center;margin-left: 21%;margin-right: 20%;cursor: pointer;\"><a href=\"" + this.appUrl + "/#/myOrderList\" >Check Order Detail</a></p> ";
            container.productDetail = this.orderList;
            this.sendEmailService.sendEmail(this.supplierOrderList[index].userEmail, this.supplierTag, -2, this.supplierOrderList[index].trackingNo);
        }
    };
    OrderListComponent.prototype.getOrderList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.supplierOrderList = [];
        this.userOrder = [];
        this.isSave = [];
        this.orderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (orderList) {
            console.log(_this.isSupplierProduct);
            _this.orderList = orderList;
            console.log(_this.totalOrder);
            console.log(_this.orderList);
        });
        this.supplierOrderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (supplierOrderList) {
            _this.userOrder = [];
            _this.supplierTotalCredit = 0;
            _this.supplierOrderList = _this.supplierOrderList ? [] : _this.supplierOrderList;
            supplierOrderList.forEach(function (order) {
                if (_this.user.email == order.supplierEmail) {
                    _this.isSave.push(true);
                    _this.supplierOrderList.push(order);
                    _this.supplierTotalCredit = _this.supplierTotalCredit + order.totalPrice;
                    console.log(_this.supplierOrderList);
                    console.log(_this.userOrder);
                }
            });
            _this.user.credit = _this.supplierTotalCredit;
        });
    };
    OrderListComponent.prototype.getUserOption = function () {
        var _this = this;
        this.supplierService.getUsersByOption(this.checkChild, this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.user = user;
            });
            if (_this.user.option == 'Supplier') {
                _this.isSupplierProduct = false;
            }
            else {
                _this.isSupplierProduct = true;
            }
        });
    };
    OrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.component.html */ "./src/app/pages/admin/order-list/order-list.component.html"),
            styles: [__webpack_require__(/*! ./order-list.component.css */ "./src/app/pages/admin/order-list/order-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"],
            _services_order_list_service__WEBPACK_IMPORTED_MODULE_1__["OrderListService"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_email_service__WEBPACK_IMPORTED_MODULE_8__["EmailService"],
            _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_6__["SupplierOrderListService"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/products/add-product/add-product.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/products/add-product/add-product.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3Byb2R1Y3RzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/products/add-product/add-product.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/products/add-product/add-product.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add_product_page\">\r\n<ul class=\"tabs_\">\r\n   <li class=\"tab-link_\" [ngClass]=\"{'current_': tab === 'tab-1'}\" data-tab=\"tab-1\" (click)=\"tab = 'tab-1'\">General Information</li>\r\n   <li class=\"tab-link_\" data-tab=\"tab-2\" [ngClass]=\"{'current_': tab === 'tab-2'}\" (click)=\"tab = 'tab-2'\">Attribute</li>\r\n   <li class=\"tab-link_\" data-tab=\"tab-3\"[ngClass]=\"{'current_': tab === 'tab-3'}\"  (click)=\"tab = 'tab-3'\">Variation</li>\r\n</ul>\r\n<div id=\"tab-1\" class=\"tab-content_\" [ngClass]=\"{'current_': tab === 'tab-1'}\">\r\n   <div class=\"general-info\">\r\n      <h2 class=\"form-signin-heading\">Add Product</h2>\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-3 sidegapp_none\">\r\n              <div class=\"form-group\">\r\n                 <label for=\"proName\">Product SKU</label>\r\n                 <input type=\"text\" id=\"main_sku\" class=\"form-control\" placeholder=\"Enter SKU\">\r\n              </div>\r\n          </div>\r\n          <div class=\"col-sm-9 sidegapp_none\">\r\n              <div class=\"form-group\">\r\n                 <label for=\"proName\">Product Name</label>\r\n                 <input type=\"text\" id=\"product_name\" class=\"form-control\" placeholder=\"Enter Name\">\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-4 sidegapp_none\">\r\n              <div class=\"form-group\">\r\n                 <label for=\"catIcon\">Select Brand</label>\r\n                 <select  class=\"form-control\" id=\"brand\" (change)=\"brand_change()\" [(ngModel)]=\"brand\">\r\n                 <option value=\"0\">Select brand</option>\r\n                 <option *ngFor=\"let item of brands; let i = index\" value=\"{{item.key}}\">{{item.name}}</option>\r\n                 </select>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-sm-4 sidegapp_none\">\r\n              <div class=\"form-group\" name=\"parent\">\r\n                 <label for=\"uId\">select category</label> \r\n                 <select  class=\"form-control\" id=\"parent\" (change) =\"change_cat()\">\r\n                    <option value=\"0\">Parent category</option>\r\n                    <ng-container *ngFor=\"let item of categories; let i = index\">\r\n                       <option  *ngIf=\"item.parent == 0 && item.brand == brand\" value=\"{{item.key}}\">{{item.catName}}</option>\r\n                    </ng-container>\r\n                 </select>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-sm-4 sidegapp_none\">\r\n              <div class=\"form-group\" name=\"parent\">\r\n                 <label for=\"uId\">select Service type</label>\r\n                 <select  class=\"form-control\" id=\"cat_id\" (change) =\"change_cat()\">\r\n                    <option value=\"0\">Service type</option>\r\n                    <ng-container *ngFor=\"let item of categories; let i = index\">\r\n                       <option  *ngIf=\"item.parent == parent\" value=\"{{item.key}}\">{{item.catName}}</option>\r\n                    </ng-container>\r\n                 </select>\r\n              </div>\r\n          </div>\r\n          \r\n      </div>\r\n      \r\n      \r\n      \r\n      \r\n      \r\n   </div>\r\n</div>\r\n<div id=\"tab-2\" class=\"tab-content_ \"  [ngClass]=\"{'current_': tab === 'tab-2'}\">\r\n   <div class=\"add-attritube\">\r\n       <div class=\"form-group\">\r\n          <input id=\"attr_name\" class=\"form-control\" type=\"text\" name=\"\"/>\r\n          <button (click)=\"add_attr()\">Add attribute</button>\r\n          <div class=\"attrsesction\">\r\n              <ul>\r\n                <ng-container *ngFor=\"let item of attributes; let i = index\">\r\n                 <li *ngIf=\"item\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-1 titlebox\">\r\n                            <label>Title</label>\r\n                        </div>\r\n                        <div class=\"col-sm-2 sidegapp_none\">\r\n                            <input class=\"form-control\" type=\"text\" (keyup)=\"ch_an(i)\" [attr.id]=\"'att__name' + i\" value=\"{{item.name}}\" name=\"\">\r\n                        </div>\r\n                        \r\n                        <div class=\"col-sm-1 titlebox\">\r\n                            <label>Values </label> \r\n                        </div>\r\n                        <div class=\"col-sm-2 sidegapp_none\">\r\n                            <input class=\"form-control\" type=\"text\"  name=\"\"value=\"\"[attr.id]=\"'att__val' + i\">\r\n                              <ul class=\"nestedbox\">\r\n                                  <ng-container *ngFor=\"let val of item.values; let vi = index\">\r\n                                  <li *ngIf=\"val\">\r\n                                     <input class=\"form-control\" type=\"text\" [attr.id]=\"'att__val' + i+'_'+vi\" (keyup)=\"value_change(i, vi)\" value=\"{{val}}\" name=\"\"><button (click)=\"dval(i,vi)\">Delete</button>\r\n                                  </li>\r\n                                  </ng-container>\r\n                               </ul>  \r\n                        </div>\r\n                        <div class=\"col-sm-3 \">\r\n                            \r\n                        </div>\r\n                        <div class=\"col-sm-1 add_value_btn\">\r\n                            <button (click)=\"add_val(i)\">Add value</button>\r\n                        </div>\r\n                        <div class=\"col-sm-2 add_value_btn\">\r\n                            <button style=\"background: #ed2727;\" (click)=\"del_attr(i)\">Delete attribute {{i}}</button>\r\n                        </div>\r\n\r\n                        \r\n                    </div>\r\n\r\n                    \r\n                 </li>\r\n                 </ng-container>\r\n              </ul>\r\n           </div>\r\n       </div>\r\n\r\n   </div>\r\n</div>\r\n<div id=\"tab-3\" class=\"tab-content_\"  [ngClass]=\"{'current_': tab === 'tab-3'}\">\r\n    <div class=\"product-variation\">\r\n\r\n   \r\n   \r\n   <div class=\"add_cat\" *ngFor=\"let sku_item of sku; let skui=index \">\r\n    <div class=\"row\" *ngIf=\"sku_item\">\r\n                    <div>\r\n                        {{load_attr(skui)}}\r\n                        <img [src]=\"sku_item.SKU_Image\" class=\"sku_img\" *ngIf=\"sku_item.SKU_Image\"/>\r\n                        \r\n                        \r\n                    </div>\r\n            \r\n                    <div class=\"col-sm-2 sidegapp_none\">\r\n                        <div class=\"form-group\">\r\n                            <label [attr.for]=\"'SKU_Name'+skui\">SKU Name</label>\r\n                            <input type=\"text\" [id]=\"'SKU_Name'+skui\" [(ngModel)]=\"sku_item.SKU_Name\" (keyup)=\"sku_change(skui)\" class=\"form-control\" placeholder=\"Enter Product SKU Name\">\r\n                         </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 sidegapp_none\">\r\n                        <div class=\"form-group\">\r\n                            <label [attr.for]=\"'SKU_Price'+skui\">SKU Price</label>\r\n                            <input type=\"number\" [id]=\"'SKU_Price'+skui\" class=\"form-control\" (keyup)=\"sku_change(skui)\" [(ngModel)]=\"sku_item.SKU_Price\" placeholder=\"Enter Product SKU Price\">\r\n                         </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 sidegapp_none\">\r\n                        <div class=\"form-group\">\r\n                            <label [attr.for]=\"'SKU_Quantity'+skui\">SKU Quantity</label>\r\n                            <input type=\"number\"  (keyup)=\"sku_change(skui)\" [id]=\"'SKU_Quantity'+skui\" class=\"form-control\" [(ngModel)]=\"sku_item.SKU_Quantity\" placeholder=\"Enter Product SKU Quantity\">\r\n                         </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-sm-2 sidegapp_none\">\r\n                        <div class=\"form-group\">\r\n                            <label>SKU Image</label>\r\n                            <input type=\"text\" [(ngModel)]=\"sku_item.SKU_Image\" [id]=\"'SKU_Image'+skui\" (keyup)=\"sku_change(skui)\" name=\"\"/>\r\n                            <input style=\"padding: 5px 7px 0;\" type=\"file\"  (change)=\"fileChangeEvent($event,skui)\" class=\"form-control here\" placeholder=\"Enter Product Image Url\">\r\n                         </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3 sidegapp_none\">\r\n                        <div class=\"attr_selection\">\r\n                            <ul>\r\n                               <li *ngFor=\"let item of attributes; let ai = index\">\r\n                                  <select [(ngModel)]=\"sku_item.attributes[item.name]\" (change)=\"sku_change(skui)\" value=\"\" [attr.id]=\"'sku_attr'+skui+'_'+ai\">\r\n                                  <option value=\"0\">Select {{item.name}}</option>\r\n                                  <option *ngFor=\"let val of item.values; let vi = index\" value=\"{{val}}\">{{val}}</option>\r\n                                  </select>\r\n                               </li>\r\n                            </ul>\r\n                         </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-sm-1 sidegapp_none\" *ngIf=\"skui == 0\">\r\n                        <div class=\"form-group add_btn_middle\">\r\n                             <i class=\"fa fa-plus add_icon\" (click)=\"addSKU()\"></i>\r\n                         </div>\r\n                    </div>\r\n                    <div class=\"col-sm-1 sidegapp_none\" *ngIf=\"skui > 0\">\r\n                        <div class=\"form-group add_btn_middle\" (click)=\"removeCat(skui)\">\r\n                             <i class=\"fa fa-times add_icon\" ></i>\r\n                         </div>\r\n                    </div>\r\n                </div>\r\n\r\n               \r\n                \r\n              <div >\r\n         \r\n         \r\n          </div>\r\n          <div>\r\n      </div>\r\n   </div>\r\n   <div class=\"borderbtn\">\r\n      <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"tryAddProduct()\">Save</button>\r\n   </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/admin/products/add-product/add-product.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/products/add-product/add-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/product.model */ "./src/app/models/product.model.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(actroute, productSer, router, db, fb, categoryService, authService, supplierService) {
        var _this = this;
        this.actroute = actroute;
        this.productSer = productSer;
        this.router = router;
        this.db = db;
        this.fb = fb;
        this.categoryService = categoryService;
        this.authService = authService;
        this.supplierService = supplierService;
        this.checkChild = "email";
        this.product = new _models_product_model__WEBPACK_IMPORTED_MODULE_3__["ProductModel"]();
        this.status = [
            { name: "Enable", value: "Enable" },
            { name: "Disable", value: "Disable" }
        ];
        /*edit load--*/
        var id = this.actroute.snapshot.queryParamMap.get('productId'); // Getting current component's id or information using ActivatedRoute service
        this.id2 = id;
        if (id !== null) {
            this.productSer.GetProduct(id).valueChanges().subscribe(function (data) {
                _this.edit = data;
                _this.loadedit(data);
            });
        }
        /*edit load--*/
        this.brand = 0;
        this.parent = 0;
        this.attributes = [];
        this.sku = [];
        this.tab = 'tab-1';
        this.ngOnInit();
        var sk = {
            'SKU_Name': '',
            'SKU_Price': '',
            'SKU_Quantity': '',
            'attributes': [],
            'productSKU': [],
            'SKU_Image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEX///+/v7+8vLzKysr8/Pzg4ODFxcXb29vT09Pj4+P4+PjBwcH6+vry8vLY2NjIyMjs7Ozo6Oia8u11AAAEdUlEQVR4nO2d65bqIAxGp/Smrb34/i971KqlEC7FGuJZ3/7dKewJBgK4/PsDAAAAAAAAAAAAAAAA4KUam5+i3m94UsUPoVoYwlA6MIShfGAIQ/nAEIbyOcBQSeNww9NZGOXBhuq8+w1fxugfDG1gmB0YBoFhdmAYBIbZgWEQGGYHhkFgmB0YBoFhdmAYBIbZyWB4qVI6mgyv4WUeH7u007lL7vFeWA3n8rUFrZqWK5KchnWvPapOTGFkNDQPOJrhk45Hw2d4Ns+oVPlRz2NhMxyawkTtv2OWAJvhSBwzfjBO2+g/5TLs7BDeSF4eDP0Y+yiX4UydFKtT4pRxa3SKTcVchtQgLYrobhq0Kj7+XIb0aX+fZtipHfH/ScPlZZG5Jq9hk2RYP96lTnFPcxnWpGF52d2eNrPGPc5lOJC5NDrl65Sv1fs16nEuw8v20sdCP+9uTh8NZVSuYVvTnKlBmjAdaqu/uH8Qm2FVWuNUJYSwOu3tLV9tcelNw5SF9yZjRaVixvpwbrZRTKnyuyKysRXOGn/QBqpK25QzptVm9598eyfqXDaPnah+GlNmwr/aGOcqYl3DvJtYzXU7jvU1bbVmVdExE+pP7Qjb6TiiOBFmOPuyD7XyC+djWYadGt2KxE5PzMpWluHtXc6KQZ/rNYK5RpThfWXnrGzp6iRcQ0ky7KbHK+iBup3rtQZD6wZJhq+9HDIsri89BBsUZPguIal0Y871K6ECRY6hXkFaimQeXQjVUHIMNwWkuVax5/q1xcC6Rozh0G+7vYmidaqzCaJ/whBjaEZJr608Y7QIHvBIMbR3/dfB55jr3/hrKCGGxMHN+vmi53rtSW+uEWLYUj1/dsY1169tetc1MgwHaw9HU3TN9Svec0huw4os6CZHcO7dcc/163O+XMNteC0JRfdk0Aby6BNfDcW9i1EquzedI4R36vAYLfy5htnwtnBRvaHo/SZxjN8Nz7UO5ltf97WnMgbqHCfhRbmHKa/hdXl2qxjzQQsaunMNr+FzUlD62W8bORD9TM4gshpe3xVg+Z7BonJlmN55mMhpWGkV4GughtacsbgvLnAa6hXga6B666I9OGsoRsPtMbCa7l2q6OVaAs6uMxpejXDdd+SPSTMP+vyGdri6+bAQui8u8BmaIbwxUdcXkg0dNRTjOf6BNiSOGirrXYxjcXQ+632ag6EPE7kMiU/h4dA1FJfhgUnTzZTRkCOEt8apYcpj+P1E6u4+j+H3E+kCdUmKxZAjkS4QrbMY8nwKC7qGYjFkSaQL9rqGw5AthORhIoMhUyJ9ksPwsDI+Brv97xtWY8mJNUwZYtixYu0qyjhd+yYwDALD7MAwCAyzA8MgMMwODIPAMDtHGxZ1JYvjDRvWajCC7SYRfhsBhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvJJM/wpEgyv9U+R8iNaAAAAAAAAAAAAAAAAAP4r/gEYCYE2Xwz6DQAAAABJRU5ErkJggg==',
        };
        this.sku.push(sk);
        this.createForm();
    }
    AddProductComponent.prototype.brand_change = function () {
        this.brand = document.getElementById('brand').value;
    };
    AddProductComponent.prototype.change_cat = function () {
        this.parent = document.getElementById('parent').value;
    };
    AddProductComponent.prototype.get_skuAttribute = function (i) {
        var att = new Object();
        for (var ii = 0; ii < this.attributes.length; ii++) {
            // alert('sku_attr'+i+'_'+ii);
            console.log(document.getElementById('sku_attr' + i + '_' + ii).value);
            if (document.getElementById('sku_attr' + i + '_' + ii).value != '0') {
                var name_1 = this.attributes[ii].name;
                att[name_1] = document.getElementById('sku_attr' + i + '_' + ii).value;
            }
        }
        console.log(att);
        return att;
    };
    AddProductComponent.prototype.sku_change = function (i) {
        console.log(this.sku[i]);
        var img = 'IMG' + i;
        if (localStorage.getItem(img)) {
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
    };
    AddProductComponent.prototype.loadedit = function (data) {
        console.log("data");
        this.attributes = data.attributes;
        console.log(data);
        document.getElementById('brand').value = data.brand;
        document.getElementById('parent').value = data.parent;
        document.getElementById('product_name').value = data.product_name;
        document.getElementById('main_sku').value = data.main_sku;
        document.getElementById('cat_id').value = data.cat_id;
        this.sku = data.productSKU;
        // alert(this.sku.length);
        for (var ii = 0; ii < this.sku.length; ii++) {
            // this.load_attr(ii);
        }
    };
    AddProductComponent.prototype.load_attr = function (i) {
        console.log("attributes setting");
        // let name = 'Color';
        // console.log(this.sku[i].attributes[name]);
    };
    AddProductComponent.prototype.createForm = function () {
        this.addProductForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            product_image_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            catId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            col_name1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            col_name2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            productSKU: this.fb.array([
                this.addProductSKU()
            ]),
        });
    };
    AddProductComponent.prototype.addProductSKU = function () {
        return this.fb.group({
            SKU_Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SKU_Price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SKU_Quantity: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SKU_Cost: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tab = 'tab-1';
        var list = this.db.list('/categories');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (categories) {
            _this.categories = categories;
            console.log('categories');
            console.log(_this.categories);
        });
        list = this.db.list('/brands');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (brands) {
            _this.brands = brands;
            console.log('brands');
            console.log(_this.brands);
        });
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.getUserOption();
        this.getCategoriesList();
        this.getUsersList();
    };
    AddProductComponent.prototype.removeCat = function (index) {
        this.sku[index] = '';
        delete this.sku[index];
    };
    AddProductComponent.prototype.addSKU = function () {
        var sk = {
            'SKU_Name': '',
            'SKU_Price': '',
            'SKU_Quantity': '',
            'attributes': [],
            'productSKU': [],
            'SKU_Image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEX///+/v7+8vLzKysr8/Pzg4ODFxcXb29vT09Pj4+P4+PjBwcH6+vry8vLY2NjIyMjs7Ozo6Oia8u11AAAEdUlEQVR4nO2d65bqIAxGp/Smrb34/i971KqlEC7FGuJZ3/7dKewJBgK4/PsDAAAAAAAAAAAAAAAA4KUam5+i3m94UsUPoVoYwlA6MIShfGAIQ/nAEIbyOcBQSeNww9NZGOXBhuq8+w1fxugfDG1gmB0YBoFhdmAYBIbZgWEQGGYHhkFgmB0YBoFhdmAYBIbZyWB4qVI6mgyv4WUeH7u007lL7vFeWA3n8rUFrZqWK5KchnWvPapOTGFkNDQPOJrhk45Hw2d4Ns+oVPlRz2NhMxyawkTtv2OWAJvhSBwzfjBO2+g/5TLs7BDeSF4eDP0Y+yiX4UydFKtT4pRxa3SKTcVchtQgLYrobhq0Kj7+XIb0aX+fZtipHfH/ScPlZZG5Jq9hk2RYP96lTnFPcxnWpGF52d2eNrPGPc5lOJC5NDrl65Sv1fs16nEuw8v20sdCP+9uTh8NZVSuYVvTnKlBmjAdaqu/uH8Qm2FVWuNUJYSwOu3tLV9tcelNw5SF9yZjRaVixvpwbrZRTKnyuyKysRXOGn/QBqpK25QzptVm9598eyfqXDaPnah+GlNmwr/aGOcqYl3DvJtYzXU7jvU1bbVmVdExE+pP7Qjb6TiiOBFmOPuyD7XyC+djWYadGt2KxE5PzMpWluHtXc6KQZ/rNYK5RpThfWXnrGzp6iRcQ0ky7KbHK+iBup3rtQZD6wZJhq+9HDIsri89BBsUZPguIal0Y871K6ECRY6hXkFaimQeXQjVUHIMNwWkuVax5/q1xcC6Rozh0G+7vYmidaqzCaJ/whBjaEZJr608Y7QIHvBIMbR3/dfB55jr3/hrKCGGxMHN+vmi53rtSW+uEWLYUj1/dsY1169tetc1MgwHaw9HU3TN9Svec0huw4os6CZHcO7dcc/163O+XMNteC0JRfdk0Aby6BNfDcW9i1EquzedI4R36vAYLfy5htnwtnBRvaHo/SZxjN8Nz7UO5ltf97WnMgbqHCfhRbmHKa/hdXl2qxjzQQsaunMNr+FzUlD62W8bORD9TM4gshpe3xVg+Z7BonJlmN55mMhpWGkV4GughtacsbgvLnAa6hXga6B666I9OGsoRsPtMbCa7l2q6OVaAs6uMxpejXDdd+SPSTMP+vyGdri6+bAQui8u8BmaIbwxUdcXkg0dNRTjOf6BNiSOGirrXYxjcXQ+632ag6EPE7kMiU/h4dA1FJfhgUnTzZTRkCOEt8apYcpj+P1E6u4+j+H3E+kCdUmKxZAjkS4QrbMY8nwKC7qGYjFkSaQL9rqGw5AthORhIoMhUyJ9ksPwsDI+Brv97xtWY8mJNUwZYtixYu0qyjhd+yYwDALD7MAwCAyzA8MgMMwODIPAMDtHGxZ1JYvjDRvWajCC7SYRfhsBhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvJJM/wpEgyv9U+R8iNaAAAAAAAAAAAAAAAAAP4r/gEYCYE2Xwz6DQAAAABJRU5ErkJggg==',
        };
        this.sku.push(sk);
    };
    AddProductComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    AddProductComponent.prototype.getCategoriesList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.categoryService.getCategoriesList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    AddProductComponent.prototype.getUsersList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.supplierService.getUsersByOption("option", "Supplier").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            _this.users = users;
        });
    };
    AddProductComponent.prototype.getUserOption = function () {
        var _this = this;
        this.supplierService.getUsersByOption(this.checkChild, this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.user = user;
            });
            if (_this.user.option == 'Supplier') {
                _this.isSupplierProduct = false;
            }
            else {
                _this.isSupplierProduct = true;
            }
            console.log(_this.isSupplierProduct);
        });
    };
    AddProductComponent.prototype.del_attr = function (i) {
        this.attributes[i] = '';
    };
    AddProductComponent.prototype.dval = function (i, vi) {
        var val = this.attributes[i].values;
        delete val[vi];
        this.attributes[i].values = val;
    };
    AddProductComponent.prototype.add_attr = function () {
        var n = {
            'name': document.getElementById('attr_name').value,
            'values': [],
            'cval': '',
        };
        this.attributes.push(n);
        document.getElementById('attr_name').value = '';
        console.log(this.attributes);
    };
    AddProductComponent.prototype.ch_an = function (i) {
        var name = document.getElementById('att__name' + i).value;
        console.log(name);
        this.attributes[i].name = name;
        //att__name' 
    };
    AddProductComponent.prototype.add_val = function (i) {
        var val = document.getElementById('att__val' + i).value;
        console.log(this.attributes[i].values);
        document.getElementById('att__val' + i).value = '';
        this.attributes[i].values.push(val);
    };
    AddProductComponent.prototype.value_change = function (i, ai) {
        console.log('att__val' + i + '_' + ai);
        console.log(document.getElementById('att__val' + i + '_' + ai).value);
        console.log(this.attributes[i].values[ai]);
        this.attributes[i].values[ai] = document.getElementById('att__val' + i + '_' + ai).value;
        console.log(this.attributes[i].values[ai]);
    };
    AddProductComponent.prototype.fileChangeEvent = function (fileInput, i) {
        var _this = this;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            console.log("Here" + fileInput.target.files[0].size);
            var max_size = 20971520;
            var allowed_types = ['image/png', 'image/jpeg'];
            var max_height_1 = 15200;
            var max_width_1 = 25600;
            var reader = new FileReader();
            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function (rs) {
                    var img_height = rs.currentTarget['height'];
                    var img_width = rs.currentTarget['width'];
                    console.log(img_height, img_width);
                    if (img_height > max_height_1 && img_width > max_width_1) {
                        _this.imageError =
                            'Maximum dimentions allowed ' +
                                max_height_1 +
                                '*' +
                                max_width_1 +
                                'px';
                        return false;
                    }
                    else {
                        var imgBase64Path = e.target.result;
                        _this.sku[i].SKU_Image = imgBase64Path;
                        var img = 'IMG' + i;
                        // (<HTMLInputElement>document.getElementById(img)).src = imgBase64Path;
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    AddProductComponent.prototype.img_change = function (i) {
        var mid = 'File' + i;
        var did = 'SKU_Image' + i;
        var img = 'IMG' + i;
        var path = this.productSer.uploadImg(mid, 'products', did, img);
    };
    AddProductComponent.prototype.tryAddProduct = function () {
        if (this.edit) {
            for (var ii = 0; ii <= this.sku.length; ii++) {
                this.sku_change(ii);
            }
        }
        var product = {
            "brand": document.getElementById('brand').value,
            "parent": document.getElementById('parent').value,
            "cat_id": document.getElementById('cat_id').value,
            "product_name": document.getElementById('product_name').value,
            "main_sku": document.getElementById('main_sku').value,
            "attributes": this.attributes,
            "productSKU": this.sku
        };
        if (this.edit) {
            if (!product['brand']) {
                delete product['brand'];
            }
            console.log(product);
            // return 0;
            var r = this.productSer.updateProduct(this.id2, product, ' ');
            console.log(r);
            // alert(r);
        }
        else {
            this.productSer.createProduct(product);
        }
        this.router.navigate(['/admin/categories/products']);
        console.log(" cat iD " + this.product.cat_id);
        console.log(" user Email " + this.product.supplierEmail);
    };
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/pages/admin/products/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/pages/admin/products/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_7__["SupplierService"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/products/cat-products/cat-products.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/products/cat-products/cat-products.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 20%;\r\n    height: 15%;\r\n}\r\n\r\n.dot {\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #bbb;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vcHJvZHVjdHMvY2F0LXByb2R1Y3RzL2NhdC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9wcm9kdWN0cy9jYXQtcHJvZHVjdHMvY2F0LXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMTUlO1xyXG59XHJcblxyXG4uZG90IHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/admin/products/cat-products/cat-products.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/products/cat-products/cat-products.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-shadow mb-4 col-12 \">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title text-center\">\r\n            Products List\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">No.</th>\r\n                    <th scope=\"col\">Product Name</th>\r\n                    <th scope=\"col\">Product Image</th>\r\n                    <th scope=\"col\">Product Status</th>\r\n                    <th scope=\"col\">Product Price</th>\r\n                    <th scope=\"col\">Product Color</th>\r\n                    <th scope=\"col\">Product Quantity</th>\r\n                    <th scope=\"col\">Action</th>\r\n                    <th scope=\"col\">\r\n                        <a class=\"btn btn-outline-secondary \" [routerLink]=\"['../add-product']\" style=\"margin-left: 70%\"><i\r\n                class=\"fa fa-plus\"></i>\r\n              Add</a>\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let product of products  ; let i = index;\">\r\n                    <th scope=\"row\">{{i+1}}</th>\r\n                    <td>{{product.product_name}}</td>\r\n                    <td align=\"center\">\r\n                        <img src=\"{{product.product_image_url}}\" alt=\"None\">\r\n                    </td>\r\n                    <td>{{product.status}}</td>\r\n                    <td>{{product.price}}</td>\r\n                    <td><span class=\"dot\"></span> {{product.color}}</td>\r\n                    <td>{{product.quantity}}</td>\r\n                    <td>\r\n\r\n                        <a class=\"btn btn-outline-secondary\" [routerLink]=\"['../edit-product/']\" [queryParams]=\"{ productId: product.key }\"><i class=\"fa fa-pencil\"></i> Edit</a>\r\n                        <a class=\"btn btn-outline-danger\" (click)='deleteProductOne(product.key)'><i class=\"fa fa-trash-o\"></i>\r\n              Delete</a>\r\n                    </td>\r\n\r\n                </tr>\r\n                <tr [hidden]=\"!error\">\r\n                    <td>Not Found !!! </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/products/cat-products/cat-products.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/products/cat-products/cat-products.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CatProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatProductsComponent", function() { return CatProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatProductsComponent = /** @class */ (function () {
    function CatProductsComponent(actRoute, productService, db) {
        this.actRoute = actRoute;
        this.productService = productService;
        this.db = db;
        this.checkChild = "cat_id";
        this.prod = new Array();
        this.error = false;
    }
    CatProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (quer) {
            _this.id = quer.categoryId;
            _this.getData();
        });
    };
    CatProductsComponent.prototype.getData = function () {
        var _this = this;
        this.productService.getProductbycat(this.checkChild, this.id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (products) {
            _this.products = products;
            console.log(_this.products);
        });
    };
    CatProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cat-products',
            template: __webpack_require__(/*! ./cat-products.component.html */ "./src/app/pages/admin/products/cat-products/cat-products.component.html"),
            styles: [__webpack_require__(/*! ./cat-products.component.css */ "./src/app/pages/admin/products/cat-products/cat-products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], CatProductsComponent);
    return CatProductsComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/products/edit-product/edit-product.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/products/edit-product/edit-product.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top:  60px;\r\n}\r\n.borderbtn{\r\n    padding:1px;\r\n    border:1px solid white;\r\n    border-radius: 4px;\r\n}\r\n.add_cat{\r\n    border: 1px solid black;\r\n    border-radius: 7px;\r\n    padding: 4%;\r\n    margin-top: 2%;\r\n    margin-bottom: 5%;\r\n}\r\n.add_icon{\r\n    float: right;\r\n    margin: 2%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vcHJvZHVjdHMvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3Byb2R1Y3RzL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogIDYwcHg7XHJcbn1cclxuLmJvcmRlcmJ0bntcclxuICAgIHBhZGRpbmc6MXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYWRkX2NhdHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5hZGRfaWNvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMiU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/admin/products/edit-product/edit-product.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/products/edit-product/edit-product.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header previousAction=\"Back\" previousLink=\"/admin/categories/products\"></app-header>\r\n<div class=\"container\">\r\n    <form class=\"form-signin\" [formGroup]=\"addProductForm\">\r\n\r\n        <h2 class=\"form-signin-heading\">Edit Product</h2>\r\n        <div class=\"form-group\">\r\n            <label for=\"proName\">Product Name</label>\r\n            <input type=\"text\" id=\"proName\" class=\"form-control\" formControlName=\"product_name\" placeholder=\"Enter Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n\r\n            <label for=\"imageUrl\">Image </label>\r\n            <td align=\"center\">\r\n                <img class=\"form-control\" formControlName=\"path\" [src]=\"path\" alt=\"None\" ngDefaultControl>\r\n            </td>\r\n            <input class=\"form-control\" id=\"img\" name=\"file\" type=\"file\" (change)=\"onFileChange($event)\">\r\n            <input type=\"hidden\" name=\"fileHidden\" formControlName=\"product_image_url\" />\r\n            <!-- Validation Field -->\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"Status\">Status</label>\r\n            <select class=\"btn btn-secondary dropdown-toggle form-control\" style=\"background-color: #F78C3C\" formControlName=\"status\">\r\n        <option *ngFor=\"let item of status\" [value]=\"item.value\">{{item.name}}</option>\r\n      </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"color\">Product Color</label>\r\n\r\n            <input type=\"color\" id=\"color\" class=\"form-control\" formControlName=\"color\" placeholder=\"Enter Color\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group dropdown  mb-4\">\r\n            <label>Select Category </label>\r\n            <select class=\"btn btn-secondary dropdown-toggle form-control\" style=\"background-color: #F78C3C\" formControlName=\"cat_id\">\r\n        <option *ngFor=\"let category of categories\" [value]=\"category.key\">{{category.catName}}</option>\r\n      </select>\r\n        </div>\r\n\r\n        <div class=\"form-group dropdown  mb-4\" *ngIf=\"isSupplierProduct\">\r\n            <label for=\"userId\">Assign Supplier</label>\r\n            <select class=\"btn btn-secondary dropdown-toggle form-control\" style=\"background-color: #F78C3C\" formControlName=\"supplierEmail\">\r\n        <option *ngFor=\"let user of users\" [value]=\"user.email\">{{user.name}}</option>\r\n      </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"col_name1\">Title 1</label>\r\n            <input type=\"text\" id=\"col_name1\" class=\"form-control\" formControlName=\"col_name1\" placeholder=\"Enter Title 1\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"col_name2\">Title 2</label>\r\n            <input type=\"text\" id=\"col_name2\" class=\"form-control\" formControlName=\"col_name2\" placeholder=\"Enter Title 2\">\r\n        </div>\r\n\r\n        <i class=\"fa fa-plus add_icon\" (click)=\"addSKU()\"></i>\r\n        <div class=\"add_cat\" formArrayName=\"productSKU\" *ngFor=\"let item of addProductForm.get('productSKU')['controls']; let i=index \">\r\n            <i class=\"fa fa-times add_icon\" (click)=\"removeCat(i)\" *ngIf=\"addProductForm.get('productSKU').length > 1 \"></i>\r\n            <div [formGroupName]=\"i\">\r\n                <div class=\"form-group\">\r\n                    <label [attr.for]=\"'SKU_Name'+i\">Product SKU Name</label>\r\n                    <input type=\"text\" [id]=\"'SKU_Name'+i\" class=\"form-control\" formControlName=\"SKU_Name\" placeholder=\"Enter Product Category Name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label [attr.for]=\"'SKU_Price'+i\">Product SKU Price</label>\r\n                    <input type=\"number\" [id]=\"'SKU_Price'+i\" class=\"form-control\" formControlName=\"SKU_Price\" placeholder=\"Enter Product Category Price\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label [attr.for]=\"'SKU_Cost'+i\">Product SKU Cost</label>\r\n                    <input type=\"number\" [id]=\"'SKU_Cost'+i\" class=\"form-control\" formControlName=\"SKU_Cost\" placeholder=\"Enter Product SKU Cost\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label [attr.for]=\"'SKU_Quantity'+i\">Product SKU Quantity</label>\r\n                    <input type=\"text\" [id]=\"'SKU_Quantity'+i\" class=\"form-control\" formControlName=\"SKU_Quantity\" placeholder=\"Enter Product SKU Quantity\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"borderbtn\">\r\n            <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"updateForm(addProductForm.value)\" [routerLink]=\"['../../products']\"> Update </button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/products/edit-product/edit-product.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/products/edit-product/edit-product.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/product.model */ "./src/app/models/product.model.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(actRoute, productSer, router, supplierService, categoryService, fb) {
        var _this = this;
        this.actRoute = actRoute;
        this.productSer = productSer;
        this.router = router;
        this.supplierService = supplierService;
        this.categoryService = categoryService;
        this.fb = fb;
        this.product = new _models_product_model__WEBPACK_IMPORTED_MODULE_3__["ProductModel"]();
        this.nameCheck = "okk";
        this.checkChild = "email";
        this.path = "";
        this.imgName = "";
        this.status = [
            { name: "Enable", value: "Enable" },
            { name: "Disable", value: "Disable" }
        ];
        this.fileName = '';
        this.createForm();
        var id = this.actRoute.snapshot.queryParamMap.get('productId'); // Getting current component's id or information using ActivatedRoute service
        this.id2 = id;
        if (id !== null) {
            this.productSer.GetProduct(id).valueChanges().subscribe(function (data) {
                console.log("data");
                console.log(data);
                _this.path = data.path;
                _this.imgName = data.product_image_url;
                if (_this.nameCheck == "okk") {
                    _this.addProductForm.patchValue(data); // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive for
                    _this.addProductForm.setControl('productSKU', _this.setSKU(data.productSKU));
                    _this.nameCheck = data.product_name;
                }
            });
        }
    }
    EditProductComponent.prototype.onFileChange = function ($event) {
        var file = $event.target.files[0]; // <--- File Object for future use.
        this.addProductForm.controls['product_image_url'].setValue(file ? file.name : ''); // <-- Set Value for Validation
    };
    EditProductComponent.prototype.setSKU = function (productSKU) {
        var _this = this;
        var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        productSKU.forEach(function (data) {
            formArray.push(_this.fb.group({
                SKU_Name: data.SKU_Name,
                SKU_Price: data.SKU_Price,
                SKU_Quantity: data.SKU_Quantity,
                SKU_Cost: data.SKU_Cost
            }));
        });
        return formArray;
    };
    EditProductComponent.prototype.createForm = function () {
        this.addProductForm = this.fb.group({
            product_name: [''],
            product_image_url: [''],
            id: [''],
            status: [''],
            color: [''],
            cat_id: [0],
            supplierEmail: [""],
            col_name1: [''],
            col_name2: [''],
            productSKU: this.fb.array([
                this.addProductSKU()
            ]),
            path: [''],
            addOn: [0]
        });
    };
    EditProductComponent.prototype.addProductSKU = function () {
        return this.fb.group({
            SKU_Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SKU_Price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SKU_Quantity: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SKU_Cost: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    EditProductComponent.prototype.ngOnInit = function () {
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.getUserOption();
        this.getCategoriesList();
        this.getUsersList();
    };
    EditProductComponent.prototype.removeCat = function (index) {
        this.addProductForm.get('productSKU').removeAt(index);
    };
    EditProductComponent.prototype.addSKU = function () {
        this.addProductForm.get('productSKU').push(this.addProductSKU());
    };
    EditProductComponent.prototype.updateForm = function (value) {
        this.product.product_name = value.product_name;
        console.log(value.product_image_url == this.imgName);
        console.log(value.path);
        this.product.product_image_url = value.product_image_url;
        this.product.status = value.status;
        this.product.color = value.color;
        this.product.cat_id = value.cat_id; //Category id
        this.product.col_name1 = value.col_name1;
        this.product.col_name2 = value.col_name2;
        this.product.supplierEmail = value.supplierEmail;
        value.productSKU.forEach(function (SKU) {
            SKU['SKU_sold_qty'] = SKU.SKU_Quantity;
        });
        this.product.productSKU = value.productSKU;
        this.product.id = value.id;
        this.product.path = value.path;
        this.product.addOn = Date.now();
        console.log(this.product);
        this.productSer.updateProduct(this.id2, this.product, this.imgName);
    };
    EditProductComponent.prototype.getCategoriesList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.categoryService.getCategoriesList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    EditProductComponent.prototype.getUsersList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.supplierService.getUsersByOption("option", "Supplier").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            _this.users = users;
        });
    };
    EditProductComponent.prototype.getUserOption = function () {
        var _this = this;
        this.supplierService.getUsersByOption(this.checkChild, this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.user = user;
            });
            if (_this.user.option == 'Supplier') {
                _this.isSupplierProduct = false;
            }
            else {
                _this.isSupplierProduct = true;
            }
            console.log(_this.isSupplierProduct);
        });
    };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/pages/admin/products/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/pages/admin/products/edit-product/edit-product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_7__["SupplierService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/products/products.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/products/products.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/products/products.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/products/products.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"my_m2b_head\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 category_list\">\r\n                <h2>Products List</h2>\r\n            </div>\r\n            <div class=\"col-sm-4 addbtn_right\">\r\n                <a class=\"addBtn\" [routerLink]=\"['add-product']\" ><i class=\"fa fa-plus\"></i> Add</a>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n\r\n\r\n    \r\n    <table class=\"table table-hover table_box\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">No.</th>\r\n                    <th scope=\"col\">Product Name</th>\r\n                    <th scope=\"col\">Product Status</th>\r\n                    <th scope=\"col\">Product Color</th>\r\n                    <th scope=\"col\">Product Category</th>\r\n                    <th scope=\"col\" style=\" text-align: center;\">SKU Details</th>\r\n                    <th scope=\"col\">Action\r\n                        \r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <ng-container *ngIf=\"!isSupplierProduct\">\r\n                    <tr *ngFor=\"let product of myProduct; let i = index;\">\r\n                        <td scope=\"row\">{{i+1}}</td>\r\n                        <td>{{product.product_name}}</td>\r\n                        <td>{{product.status}}</td>\r\n                        <td><span class=\"dot\" [ngStyle]=\"{'background-color':product.color}\"></span> {{product.color}}</td>\r\n                        <td>{{categoriesName[i]}}</td>\r\n                        <td>\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\">Image</th>\r\n                                        <th scope=\"col\">SKU Name</th>\r\n                                        <th scope=\"col\">Price</th> \r\n                                        <th scope=\"col\">Quantity</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of product.productSKU; let i = index;\">\r\n                                        <td align=\"center\">\r\n                            <img [src]=\"item.SKU_Image\" alt=\"None\">\r\n                        </td>\r\n                                        <td scope=\"col\" class=\"SKU-td\">{{item.SKU_Name}}</td>\r\n                                        <td scope=\"col\" class=\"SKU-td\">$ {{item.SKU_Price}}</td>\r\n                                        <td scope=\"col\" class=\"SKU-td\">{{item.SKU_Quantity}}</td>\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </td>\r\n                        <td>\r\n\r\n                            <a class=\"edit_btn\" [routerLink]=\"['add-product/']\" [queryParams]=\"{ productId: product.key }\"><i class=\"fa fa-pencil\"></i> </a>\r\n                            <a class=\"delbtn\" (click)='deleteProductOne(product.key)'><i class=\"fa fa-trash-o\"></i>\r\n                </a>\r\n                        </td>\r\n                    </tr>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"isSupplierProduct\">\r\n                    <tr *ngFor=\"let product of products; let i = index;\">\r\n\r\n                        <td scope=\"row\">{{i+1}}</td> \r\n                        <td>{{product.product_name}}</td>\r\n                        \r\n                        <td>{{product.status}}</td>\r\n                        <td><span class=\"dot\" [ngStyle]=\"{'background-color':product.color}\"></span> {{product.color}}</td>\r\n                        <td>{{categoriesName[i]}}</td>\r\n                        <td>\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\">SKU Image</th>\r\n                                        <th scope=\"col\">SKU Name</th>\r\n                                        <th scope=\"col\">Price</th>\r\n                                        <th scope=\"col\">Quantity</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of product.productSKU; let i = index;\">\r\n                                        <td align=\"center\">\r\n                            <img [src]=\"item.SKU_Image\" alt=\"None\">\r\n                        </td>\r\n                                        <td scope=\"col\" class=\"SKU-td\">{{item.SKU_Name}}</td>\r\n                                        <td scope=\"col\" class=\"SKU-td\">$ {{item.SKU_Price}}</td>\r\n                                        <td scope=\"col\" class=\"SKU-td\">{{item.SKU_Quantity}}</td>\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </td>\r\n                        <td>\r\n\r\n                            <a class=\"edit_btn\" [routerLink]=\"['add-product/']\" [queryParams]=\"{ productId: product.key }\"><i class=\"fa fa-pencil\"></i> </a>\r\n                            <a class=\"delbtn\" (click)='deleteProductOne(product.key)'><i class=\"fa fa-trash-o\"></i>\r\n                </a>\r\n                        </td>\r\n                    </tr>\r\n                </ng-container>\r\n\r\n            </tbody>\r\n        </table>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/products/products.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/admin/products/products.component.ts ***!
  \************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(categoryService, productService, supplierService, authService) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.supplierService = supplierService;
        this.authService = authService;
        this.checkChild = "email";
        this.myProduct = new Array();
        this.categoriesName = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.getUserOption();
        this.getProductsList();
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.myProduct = [];
    };
    ProductsComponent.prototype.getProductsList = function () {
        var _this = this;
        this.categoriesName = [];
        // Use snapshotChanges().map() to store the key
        this.productService.getProductsList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (products) {
            _this.myProduct = [];
            products.forEach(function (product) {
                if (_this.user.email == product.supplierEmail) {
                    _this.myProduct.push(product);
                }
                else {
                    _this.products = products;
                }
            });
            _this.myProduct.forEach(function (ele) {
                _this.getCategoriesList(ele.cat_id);
            });
        });
    };
    ProductsComponent.prototype.getCategoriesList = function (id) {
        var _this = this;
        console.log(id);
        // Use snapshotChanges().map() to store the key
        this.categoryService.getCategoriesListByOption("key", id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (cat) {
            console.log(cat);
            _this.categoriesName.push(cat[0]['catName']);
        });
        console.log(this.categoriesName);
    };
    ProductsComponent.prototype.deleteProductOne = function (key) {
        this.productService.deleteProduct(key);
    };
    ProductsComponent.prototype.getUserOption = function () {
        var _this = this;
        this.myProduct = [];
        this.supplierService.getUsersByOption(this.checkChild, this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.user = user;
            });
            if (_this.user.option == 'Supplier') {
                _this.isSupplierProduct = false;
            }
            else {
                _this.isSupplierProduct = true;
            }
        });
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/pages/admin/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/pages/admin/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/return-request-for-supplier/return-request-for-supplier.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/admin/return-request-for-supplier/return-request-for-supplier.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner {\r\n    float: left;\r\n    padding: 5px !important;\r\n}\r\n\r\n.td {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.cardStyle {\r\n    overflow: auto;\r\n    margin-bottom: 3.5rem !important;\r\n}\r\n\r\n.addBtn {\r\n    position: absolute;\r\n    right: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vcmV0dXJuLXJlcXVlc3QtZm9yLXN1cHBsaWVyL3JldHVybi1yZXF1ZXN0LWZvci1zdXBwbGllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0NBQ3BDOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3JldHVybi1yZXF1ZXN0LWZvci1zdXBwbGllci9yZXR1cm4tcmVxdWVzdC1mb3Itc3VwcGxpZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkU3R5bGUge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFkZEJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMnJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/admin/return-request-for-supplier/return-request-for-supplier.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/admin/return-request-for-supplier/return-request-for-supplier.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-shadow mb-4 col-12 cardStyle\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title text-center\">\r\n            Return Requests\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Requests No.</th>\r\n                    <th scope=\"col\"></th>\r\n                    <th scope=\"col\">Total Price</th>\r\n                    <th>Businuss Detail</th>\r\n                    <th>Requests</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n\r\n                <tr *ngFor=\"let order of requests; let i = index;\">\r\n                    <th scope=\"row\">{{i+1}}</th>\r\n                    <td>\r\n                        <div *ngFor=\"let item of order.productDetail\">\r\n                            <h5>{{item.productName}}</h5>\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\">SKU Name</th>\r\n                                        <th scope=\"col\">Price</th>\r\n                                        <th scope=\"col\">Quantity</th>\r\n                                        <th scope=\"col\">{{item.col1Title}}</th>\r\n                                        <th scope=\"col\">{{item.col2Title}}</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let product of item.productSKU; let i = index;\">\r\n                                        <td scope=\"col\">{{product.SKU_Name}}</td>\r\n                                        <td scope=\"col\">$ {{product.SKU_Price}}</td>\r\n                                        <td scope=\"col\">{{product.quantity}}</td>\r\n                                        <td scope=\"col\">{{product.col1Value? product.col1Value : 'None' }}</td>\r\n                                        <td scope=\"col\">{{product.col2Value? product.col2Value : 'None' }}</td>\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n\r\n                    </td>\r\n                    <td style=\"padding: 2.5rem;\"><b>$ {{order.totalPrice}}</b>\r\n\r\n                    </td>\r\n                    <td>\r\n                        <ul style=\"list-style: none; padding-left: 0px;\">\r\n                            <li><strong>Name:</strong> {{user[i]?.name}}</li>\r\n                            <li><strong>Email:</strong> {{user[i]?.email}}</li>\r\n                            <li><strong>Contact No:</strong> {{user[i]?.phoneNo}}</li>\r\n                            <li><strong>Delivery Address:</strong> {{order.deliverAddress}}</li>\r\n                        </ul>\r\n                    </td>\r\n                    <td>\r\n                        <div *ngIf=\"order.requestApprove == '0'\">\r\n                            <a class=\"btn btn-outline-success\" (click)=\"approveRequest(order.key)\"> Approve</a>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/return-request-for-supplier/return-request-for-supplier.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/admin/return-request-for-supplier/return-request-for-supplier.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ReturnRequestForSupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnRequestForSupplierComponent", function() { return ReturnRequestForSupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _services_return_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/return-request.service */ "./src/app/services/return-request.service.ts");
/* harmony import */ var _models_return_request_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/return-request.model */ "./src/app/models/return-request.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReturnRequestForSupplierComponent = /** @class */ (function () {
    function ReturnRequestForSupplierComponent(supplierService, returnRequestService) {
        this.supplierService = supplierService;
        this.returnRequestService = returnRequestService;
        this.userData = new _models_return_request_model__WEBPACK_IMPORTED_MODULE_4__["ReturnRequestModel"]();
        this.requests = [];
        this.emails = [];
        this.user = [];
    }
    ReturnRequestForSupplierComponent.prototype.ngOnInit = function () {
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.getUsersList();
    };
    ReturnRequestForSupplierComponent.prototype.getUsersList = function () {
        // Use snapshotChanges().map() to store the key
        var _this = this;
        this.returnRequestService.getReturnRequestsByOption('supplierEmail', this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (requests) {
            _this.requests = requests;
            console.log(requests);
            requests.forEach(function (request) {
                _this.getUserOption(request.userEmail);
            });
        });
    };
    ReturnRequestForSupplierComponent.prototype.getUserOption = function (email) {
        var _this = this;
        this.supplierService.getUsersByOption("email", email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.user.push(user);
            });
        });
        console.log(this.user);
    };
    ReturnRequestForSupplierComponent.prototype.approveRequest = function (key) {
        var index = this.requests.findIndex(function (x) { return x.key == key; });
        this.userData = this.requests[index];
        console.log(this.userData);
        this.userData.requestApprove = "1";
        console.log(this.userData);
        this.returnRequestService.updateReturnRequest(key, this.userData);
        this.requests = [];
    };
    ReturnRequestForSupplierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-return-request-for-supplier',
            template: __webpack_require__(/*! ./return-request-for-supplier.component.html */ "./src/app/pages/admin/return-request-for-supplier/return-request-for-supplier.component.html"),
            styles: [__webpack_require__(/*! ./return-request-for-supplier.component.css */ "./src/app/pages/admin/return-request-for-supplier/return-request-for-supplier.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"],
            _services_return_request_service__WEBPACK_IMPORTED_MODULE_3__["ReturnRequestService"]])
    ], ReturnRequestForSupplierComponent);
    return ReturnRequestForSupplierComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/setting/setting.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/setting/setting.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/setting/setting.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/admin/setting/setting.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"seting_page\">\r\n    <div class=\"my_m2b_head\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 category_list\">\r\n                <h2>Settings</h2>\r\n            </div>\r\n        </div>\r\n   </div>\r\n\r\n   <div class=\"setting_form\">\r\n            <div class=\"form-group\">\r\n            <label for=\"deduction\">Enter Deduction (In Percentage)</label>\r\n            <input id=\"deduction\" class=\"form-control\" [(ngModel)]=\"settongData.deduction\" [value]=\"settongData.deduction \" type=\"number\" placeholder=\"Enter Deduction for Supplier in Percentage\">\r\n        </div>\r\n        <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"onSave()\">Save</button>\r\n    </div>   \r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/setting/setting.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/admin/setting/setting.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _models_setting_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/setting.model */ "./src/app/models/setting.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingComponent = /** @class */ (function () {
    function SettingComponent(toasterService, settingService) {
        this.toasterService = toasterService;
        this.settingService = settingService;
        this.deduct = new _models_setting_model__WEBPACK_IMPORTED_MODULE_2__["SettingModel"]();
        this.deduction = 0;
        this.settongData = {
            key: '',
            deduction: 0
        };
    }
    SettingComponent.prototype.ngOnInit = function () {
        this.getsetting();
    };
    SettingComponent.prototype.getsetting = function () {
        var _this = this;
        this.settingService.getSettingList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (settings) {
            settings.forEach(function (setting) {
                _this.settongData = setting;
            });
        });
    };
    SettingComponent.prototype.onSave = function () {
        this.settingService.updateSetting(this.settongData.key, this.settongData);
        this.toasterService.success('Setting Updated!');
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/pages/admin/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/pages/admin/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingService"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/supplier-request/supplier-request.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/supplier-request/supplier-request.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3N1cHBsaWVyLXJlcXVlc3Qvc3VwcGxpZXItcmVxdWVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/supplier-request/supplier-request.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/supplier-request/supplier-request.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n<div class=\"my_m2b_head\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 category_list\">\r\n                <h2>Supplier Request</h2>\r\n            </div>\r\n            \r\n        </div>\r\n        </div>\r\n    <table class=\"table table-hover table_box\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Supplier ID</th>\r\n                    <th scope=\"col\">Supplier Name</th>\r\n                    <th scope=\"col\">Supplier Email</th>\r\n                    <th scope=\"col\">Supplier Phone No</th>\r\n                    <th scope=\"col\">Option</th>\r\n                    <th scope=\"col\">Action\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let user of users; let i = index;\">\r\n                    <td scope=\"row\">{{i+1}}</td>\r\n                    <td>{{user.name}}</td>\r\n                    <td>{{user.email}}</td>\r\n                    <td>{{user.phoneNo}}</td>\r\n                    <td>{{user.option}}</td>\r\n                    <td>\r\n                        <a class=\"approved_btn\" (click)='approveRequest(user.key)'> Approve</a>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/supplier-request/supplier-request.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/supplier-request/supplier-request.component.ts ***!
  \****************************************************************************/
/*! exports provided: SupplierRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierRequestComponent", function() { return SupplierRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/user.model */ "./src/app/models/user.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupplierRequestComponent = /** @class */ (function () {
    function SupplierRequestComponent(supplierService) {
        this.supplierService = supplierService;
        this.users = [];
        this.userData = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
    }
    SupplierRequestComponent.prototype.ngOnInit = function () {
        this.getUsersList();
    };
    SupplierRequestComponent.prototype.getUsersList = function () {
        // Use snapshotChanges().map() to store the key
        var _this = this;
        this.supplierService.getUsersByOption('option', 'Supplier').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            console.log(users);
            users.forEach(function (user) {
                if (user.requestApprove == '0') {
                    _this.users.push(user);
                }
            });
        });
    };
    SupplierRequestComponent.prototype.approveRequest = function (key) {
        this.userData = this.users.find(function (x) { return x.key == key; });
        this.userData.requestApprove = "1";
        this.supplierService.updateUser(key, this.userData);
        this.users = [];
    };
    SupplierRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-request',
            template: __webpack_require__(/*! ./supplier-request.component.html */ "./src/app/pages/admin/supplier-request/supplier-request.component.html"),
            styles: [__webpack_require__(/*! ./supplier-request.component.css */ "./src/app/pages/admin/supplier-request/supplier-request.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"]])
    ], SupplierRequestComponent);
    return SupplierRequestComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/suppliers/edit-user/edit-user.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/suppliers/edit-user/edit-user.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borderbtn{\r\n    padding:1px;\r\n    border:1px solid white;\r\n    border-radius: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vc3VwcGxpZXJzL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vc3VwcGxpZXJzL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXJidG57XHJcbiAgICBwYWRkaW5nOjFweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/admin/suppliers/edit-user/edit-user.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/suppliers/edit-user/edit-user.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n    <form class=\"form-signin\" [formGroup]=\"addUserForm\">\r\n\r\n        <h2 class=\"form-signin-heading\">Edit User Profile</h2>\r\n        <div class=\"form-group\">\r\n            <label for=\"proName\">User Name</label>\r\n            <input type=\"text\" id=\"proName\" class=\"form-control\" formControlName=\"name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">User Email</label>\r\n            <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"phoneNo\">User Phone Number</label>\r\n\r\n            <input type=\"text\" id=\"phoneNo\" formControlName=\"phoneNo\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>User Option</label>\r\n            <select class=\"btn btn-secondary dropdown-toggle form-control\" style=\"background-color: #F78C3C\" formControlName=\"option\">\r\n        <option *ngFor=\"let item of option\" [value]=\"item.value\">{{item.name}}</option>\r\n      </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"credit\">User Credit</label>\r\n            <input type=\"text\" id=\"credit\" class=\"form-control\" formControlName=\"credit\">\r\n        </div>\r\n        <div class=\"borderbtn\">\r\n            <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"updateForm(addUserForm.value)\" [routerLink]=\"['../../suppliers']\"> Update </button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/suppliers/edit-user/edit-user.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/suppliers/edit-user/edit-user.component.ts ***!
  \************************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(actRoute, supplierSer, router, fb) {
        this.actRoute = actRoute;
        this.supplierSer = supplierSer;
        this.router = router;
        this.fb = fb;
        this.option = [
            { name: 'Admin', value: 'Admin' },
            { name: 'Supplier', value: 'Supplier' },
            { name: 'Business', value: 'Business' },
            { name: 'Courier', value: 'Courier' }
        ];
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
        this.nameCheck = "okk";
        this.createForm();
        var id = this.actRoute.snapshot.queryParamMap.get('userId'); // Getting current component's id or information using ActivatedRoute service
        this.id2 = id;
    }
    EditUserComponent.prototype.createForm = function () {
        this.addUserForm = this.fb.group({
            key: [''],
            userId: [''],
            name: [''],
            phoneNo: [0],
            email: [''],
            option: [''],
            address: [''],
            requestApprove: [''],
            credit: [0],
            addOn: [0],
            uid: ['']
        });
    };
    EditUserComponent.prototype.ngOnInit = function () {
        this.getUserInfo(this.id2);
    };
    EditUserComponent.prototype.getUserInfo = function (id) {
        var _this = this;
        if (id !== null) {
            this.supplierSer.GetUser(id).valueChanges().subscribe(function (data) {
                console.log(data);
                if (_this.nameCheck == "okk") {
                    _this.addUserForm.setValue(data); // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive for
                    _this.nameCheck = data.name;
                }
            });
        }
    };
    EditUserComponent.prototype.updateForm = function (value) {
        this.user = value;
        this.user.addOn = Date.now();
        console.log(this.user);
        this.supplierSer.updateUser(this.id2, this.user);
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/pages/admin/suppliers/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/pages/admin/suppliers/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/suppliers/suppliers.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/suppliers/suppliers.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3N1cHBsaWVycy9zdXBwbGllcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/suppliers/suppliers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/suppliers/suppliers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n<div class=\"my_m2b_head\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 category_list\">\r\n                <h2>Suppliers</h2>\r\n            </div>\r\n            <div class=\"col-sm-4 addbtn_right\">\r\n                <a class=\"addBtn\"[routerLink]=\"['/auth/options']\" [queryParams]=\"{option:'Business'}\" ><i class=\"fa fa-plus\"></i> Add</a>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n\r\n\r\n    <table class=\"table table-hover table_box\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Supplier ID</th>\r\n                    <th scope=\"col\">Supplier Name</th>\r\n                    <th scope=\"col\">Supplier Email</th>\r\n                    <th scope=\"col\">Supplier Phone No</th>\r\n                    <th scope=\"col\">Option</th>\r\n                    <th scope=\"col\">Supply Status</th>\r\n                    <th scope=\"col\">Action\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let user of users; let i = index;\">\r\n                    <td scope=\"row\">{{i+1}}</td>\r\n                    <td>{{user.name}}</td>\r\n                    <td>{{user.email}}</td>\r\n                    <td>{{user.phoneNo}}</td>\r\n                    <td>{{user.option}}</td>\r\n                    <td align=\"center\"><input style=\"width:20px;height:auto;\" type=\"checkbox\"></td>\r\n                    <td>\r\n                        <a  title=\"Edit\" class=\"edit_btn \" [routerLink]=\"['edit-supplier']\" [queryParams]=\"{ userId: user.key }\"><i class=\"fa fa-pencil\"></i> </a>\r\n                        <a title=\"Delete\" class=\"delbtn \" (click)='deleteOneUser(user.key)'><i class=\"fa fa-trash-o\"></i>\r\n              </a>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/suppliers/suppliers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/suppliers/suppliers.component.ts ***!
  \**************************************************************/
/*! exports provided: SuppliersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersComponent", function() { return SuppliersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuppliersComponent = /** @class */ (function () {
    function SuppliersComponent(supplierService) {
        this.supplierService = supplierService;
    }
    SuppliersComponent.prototype.ngOnInit = function () {
        this.getUsersList();
    };
    SuppliersComponent.prototype.getUsersList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.supplierService.getUsersList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            _this.users = users;
        });
    };
    // 
    SuppliersComponent.prototype.deleteOneUser = function (key) {
        this.supplierService.deleteUser(key);
    };
    SuppliersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suppliers',
            template: __webpack_require__(/*! ./suppliers.component.html */ "./src/app/pages/admin/suppliers/suppliers.component.html"),
            styles: [__webpack_require__(/*! ./suppliers.component.css */ "./src/app/pages/admin/suppliers/suppliers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_service__WEBPACK_IMPORTED_MODULE_1__["SupplierService"]])
    ], SuppliersComponent);
    return SuppliersComponent;
}());



/***/ }),

/***/ "./src/app/pages/cart/basic-cart/basic-cart.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/cart/basic-cart/basic-cart.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding-top: 60px;\r\n}\r\n\r\n.cart-table {\r\n    height: 550px;\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.card-title {\r\n    font-weight: bold !important;\r\n    color: #343a40 !important;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 !important;\r\n}\r\n\r\n.trash {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.table td {\r\n    padding: 0.2rem !important;\r\n}\r\n\r\n.table th {\r\n    padding: 0.2rem !important;\r\n    padding-bottom: 1rem !important;\r\n    padding-right: 0.2rem !important;\r\n    font-size: 12px !important;\r\n    line-height: 2 !important;\r\n    white-space: nowrap;\r\n}\r\n\r\n.form-control {\r\n    padding: .375rem !important;\r\n}\r\n\r\ninput[type=\"text\"]:disabled.title-text {\r\n    background-color: #fff !important;\r\n    font-weight: bold;\r\n    border: none;\r\n}\r\n\r\ninput[type=\"text\"].title-text {\r\n    color: #212529 !important;\r\n    font-weight: bold;\r\n    border: none;\r\n}\r\n\r\n.title-text {\r\n    font-size: 12px;\r\n    padding: 0 !important;\r\n}\r\n\r\n.addBtn {\r\n    position: absolute;\r\n    right: 2rem;\r\n    top: 1rem;\r\n}\r\n\r\n.trash-btn {\r\n    padding: .175rem .5rem !important;\r\n    margin-top: .3rem;\r\n}\r\n\r\n.out-of-stock {\r\n    font-size: .4rem;\r\n    padding-top: 0.7rem !important;\r\n    padding-bottom: 0.7rem !important;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.btn-sty {\r\n    color: #126efd;\r\n    cursor: pointer;\r\n}\r\n\r\n.addBtn {\r\n    margin-left: 1rem;\r\n}\r\n\r\nbody, html {\r\n    height:100%;\r\n}\r\n\r\nbody {\r\n    overflow:hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9iYXNpYy1jYXJ0L2Jhc2ljLWNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksNkJBQTZCO0lBQzdCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLDJCQUEyQjtDQUM5Qjs7QUFFRDtJQUNJLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtDQUNiOztBQUVEO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9iYXNpYy1jYXJ0L2Jhc2ljLWNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5jYXJ0LXRhYmxlIHtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMzNDNhNDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50cmFzaCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUgdGgge1xyXG4gICAgcGFkZGluZzogMC4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMC4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl06ZGlzYWJsZWQudGl0bGUtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0udGl0bGUtdGV4dCB7XHJcbiAgICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi50aXRsZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFkZEJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMnJlbTtcclxuICAgIHRvcDogMXJlbTtcclxufVxyXG5cclxuLnRyYXNoLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAuMTc1cmVtIC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAuM3JlbTtcclxufVxyXG5cclxuLm91dC1vZi1zdG9jayB7XHJcbiAgICBmb250LXNpemU6IC40cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDAuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tc3R5IHtcclxuICAgIGNvbG9yOiAjMTI2ZWZkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWRkQnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG5ib2R5LCBodG1sIHtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cart/basic-cart/basic-cart.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cart/basic-cart/basic-cart.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header previousLink=\"/home/products\" previousAction=\"Back\"></app-header>\r\n<div class=\"container\">\r\n    <div class=\"row cart-table\">\r\n\r\n        <div class=\"card card-shadow mb-4 col-12\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title text-center\">\r\n                    {{selectProduct.product_name}} \r\n                </div>\r\n                <div class=\"btn btn-outline-secondary addBtn\" (click)=\"resetData()\"> <i class=\"fa fa-refresh\"></i> </div>\r\n\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th scope=\"col\">Product Type</th>\r\n                            <th>Price</th>\r\n                            <td (click)=\"isDisable()\"><input type=\"text\" class=\"form-control title-text\" [(ngModel)]=\"OrderDetail.col1Title\" [value]=\"OrderDetail.col1Title\" placeholder=\"{{OrderDetail.col1Title}}\" [disabled]=\"isClicked\"></td>\r\n                            <td (click)=\"isDisable()\"><input type=\"text\" class=\"form-control title-text\" [(ngModel)]=\"OrderDetail.col2Title\" [value]=\"OrderDetail.col2Title\" placeholder=\"{{OrderDetail.col2Title}}\" [disabled]=\"isClicked\"></td>\r\n\r\n                            <th>Total</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let type of SKU; let i = index\">\r\n                            <th scope=\"row\">{{type.SKU_Name}}</th>\r\n                            <td>$ {{type.SKU_Price}}</td>\r\n                            <td *ngIf=\"type.SKU_Quantity > 0 \"><input type=\"number\" class=\"form-control\" [(ngModel)]=\"type.col1Value\" [value]=\"defualSelect\"></td>\r\n                            <td *ngIf=\"type.SKU_Quantity <= 0 \"><input type=\"text\" class=\"form-control out-of-stock\" [disabled]=\" true\" placeholder=\"Out of Stock\"></td>\r\n                            <td *ngIf=\"type.SKU_Quantity > 0 \"><input type=\"number\" class=\"form-control\" [(ngModel)]=\"type.col2Value\" [value]=\"defualSelect\"></td>\r\n                            <td *ngIf=\"type.SKU_Quantity <= 0 \"><input type=\"text\" class=\"form-control out-of-stock\" [disabled]=\" true\" placeholder=\"Out of Stock\"></td>\r\n                            <td *ngIf=\"type.SKU_Quantity > 0 \" style=\"  padding-left: .7rem !important;\" [ngStyle]=\"{'background-color':((type.col1Value? type.col1Value: 0) + (type.col2Value? type.col2Value: 0))  > type.SKU_Quantity ? '#ff000073' : '#fff' }\">\r\n                                <div>{{ (type.col1Value? type.col1Value: 0) + (type.col2Value? type.col2Value: 0)}}</div>\r\n                            </td>\r\n                            <td *ngIf=\"type.SKU_Quantity <= 0 \"><input type=\"text\" class=\"form-control out-of-stock\" [disabled]=\" true\" placeholder=\"Out of Stock\"></td>\r\n\r\n                            <td>\r\n                                <button type=\"button\" class=\"btn btn-outline-danger trash-btn\" (click)=\"removeSKU(i)\"> <i\r\n                    class=\"fa fa-trash-o trash\"></i></button>\r\n                            </td>\r\n                        </tr>\r\n\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-center \">\r\n            <h2>\r\n                <div class=\"btn-sty\" (click)=\"showToast('done')\">\r\n                    <i class=\"fa fa-shopping-cart mr-3\"></i><a>Done, Add To Cart</a>\r\n                </div>\r\n\r\n            </h2>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-center\">\r\n\r\n            <div class=\"btn-sty\" (click)=\"showToast('back')\">\r\n                <i class=\"fa fa-home mr-3 \"></i><a>Back, Shop more</a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/cart/basic-cart/basic-cart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/cart/basic-cart/basic-cart.component.ts ***!
  \***************************************************************/
/*! exports provided: BasicCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCartComponent", function() { return BasicCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BasicCartComponent = /** @class */ (function () {
    function BasicCartComponent(productService, actRoute, router, toastrService) {
        this.productService = productService;
        this.actRoute = actRoute;
        this.router = router;
        this.toastrService = toastrService;
        this.isClicked = true;
        this.defualSelect = 1;
        this.SKU = new Array();
        this.SKUFinal = [];
        this.OrderDetail = {
            id: '',
            productName: "",
            supplierEmail: "",
            productSKU: [],
            col1Title: "",
            col2Title: ""
        };
        this.previous = [];
        this.id = this.actRoute.snapshot.queryParamMap.get('productId');
        this.selectProduct = { name: "", product_name: "None" };
        if (localStorage.getItem('orderData') == "undefined" || localStorage.getItem('orderData') == "[]") {
            localStorage.removeItem('orderData');
            this.router.navigateByUrl('home/products');
        }
        else if (!localStorage.getItem('orderData')) {
            this.getData();
        }
        else {
            this.getData2();
        }
    }
    BasicCartComponent.prototype.ngOnInit = function () {
    };
    BasicCartComponent.prototype.ngOnDestroy = function () {
        if (this.productSub) {
            this.productSub.unsubscribe();
        }
    };
    BasicCartComponent.prototype.isDisable = function () {
        this.isClicked = false;
    };
    BasicCartComponent.prototype.getData2 = function () {
        var _this = this;
        var SKU2 = [];
        SKU2 = JSON.parse(localStorage.getItem('orderData'));
        var index = SKU2.findIndex(function (x) { return x.order_id == _this.id; });
        if (index == -1) {
            this.getData();
        }
        else {
            this.selectProduct = { name: "", product_name: SKU2[index].productName };
            this.SKU = SKU2[index].productSKU;
            this.OrderDetail.id = SKU2[index].id;
            this.OrderDetail.supplierEmail = SKU2[index].supplierEmail;
            this.OrderDetail.productName = SKU2[index].productName;
            this.OrderDetail.col1Title = SKU2[index].col1Title;
            this.OrderDetail.col2Title = SKU2[index].col2Title;
        }
    };
    BasicCartComponent.prototype.getData = function () {
        var _this = this;
        this.productSub = this.productService.getProductbycat("id", this.id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (productDetail) {
            console.log(productDetail);
            productDetail.forEach(function (product) {
                _this.selectProduct = product;
                _this.SKU = product.productSKU;
                _this.OrderDetail.id = product.id;
                _this.OrderDetail.supplierEmail = product.supplierEmail;
                _this.OrderDetail.productName = product.product_name;
                _this.OrderDetail.col1Title = product.col_name1;
                _this.OrderDetail.col2Title = product.col_name2;
            });
            if (productDetail.length < 1) {
                _this.toastrService.info('Select Product First!');
            }
        });
        this.SKU.forEach(function (data) {
            data['quantity'] = 0;
            data["col1Value"] = "";
            data["col2Value"] = "";
        });
    };
    BasicCartComponent.prototype.removeSKU = function (index) {
        this.SKU.splice(index, 1);
    };
    BasicCartComponent.prototype.createOrderCollection = function (act) {
        var _this = this;
        var order = [];
        this.OrderDetail.productSKU.forEach(function (SKU, index) {
            if (SKU.quantity !== 0 && SKU.quantity && SKU.quantity >= 1) {
                order.push(SKU);
            }
        });
        this.OrderDetail.productSKU = order;
        console.log(this.OrderDetail);
        this.OrderDetail["order_id"] = this.makeid();
        if (this.OrderDetail.productSKU.length > 0) {
            if (!localStorage.getItem('orderData')) {
                this.previous.push(this.OrderDetail);
                console.log(this.previous);
                localStorage.setItem('orderData', JSON.stringify(this.previous));
            }
            else {
                this.previous = JSON.parse(localStorage.getItem('orderData'));
                var index = this.previous.findIndex(function (x) { return x.order_id == _this.id; });
                if (index == -1 && this.id !== 'review') {
                    this.previous.push(this.OrderDetail);
                    localStorage.setItem('orderData', JSON.stringify(this.previous));
                }
                else {
                    this.previous[index] = this.OrderDetail;
                    localStorage.setItem('orderData', JSON.stringify(this.previous));
                }
            }
        }
        else {
            this.toastrService.info('Product quantity not added or wrong!');
        }
        if (act == 'done') {
            this.router.navigateByUrl('/basic-cart/final-cart?productId=' + this.id);
        }
        else {
            this.router.navigateByUrl('/home/products');
        }
    };
    BasicCartComponent.prototype.resetData = function () {
        this.getData2();
    };
    BasicCartComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    BasicCartComponent.prototype.showToast = function (act) {
        var _this = this;
        var checkQty = true;
        this.SKU.forEach(function (el) {
            el.quantity = (el.col1Value ? el.col1Value : 0) + (el.col2Value ? el.col2Value : 0);
            if (el.quantity > el.SKU_Quantity) {
                _this.toastrService.info(el.SKU_Name + " quantity is large, this is not available! Please Reduce the quantity!");
                checkQty = false;
            }
        });
        if (checkQty) {
            this.OrderDetail.productSKU = this.SKU;
            this.createOrderCollection(act);
        }
    };
    BasicCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-cart',
            template: __webpack_require__(/*! ./basic-cart.component.html */ "./src/app/pages/cart/basic-cart/basic-cart.component.html"),
            styles: [__webpack_require__(/*! ./basic-cart.component.css */ "./src/app/pages/cart/basic-cart/basic-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], BasicCartComponent);
    return BasicCartComponent;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart-checkout/cart-checkout.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/cart/cart-checkout/cart-checkout.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding-top: 60px;\r\n}\r\n\r\n.cart-table {\r\n    height: 500px;\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.left-button {\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n\r\n.prodTitle {\r\n    margin: 2%;\r\n    text-align: center;\r\n}\r\n\r\n.right-button {\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n.table td {\r\n    padding: 0.2rem !important;\r\n}\r\n\r\n.table th {\r\n    padding: 0.2rem !important;\r\n    padding-bottom: 1rem !important;\r\n    padding-right: 0.2rem !important;\r\n    font-size: 12px !important;\r\n    line-height: 2 !important;\r\n    white-space: nowrap;\r\n}\r\n\r\ninput[type=\"text\"]:disabled.title-text {\r\n    background-color: #fff !important;\r\n    font-weight: bold;\r\n    border: none;\r\n}\r\n\r\n.title-text {\r\n    padding: 0 !important;\r\n    font-weight: bold;\r\n    color: #53505f !important;\r\n}\r\n\r\n.table-style {\r\n    border-bottom: 1px solid #e5e9ec;\r\n    border-top: 1px solid #e5e9ec;\r\n}\r\n\r\n.card-body {\r\n    padding: 0.5rem !important;\r\n}\r\n\r\n.trash-btn {\r\n    padding: .15rem .4rem !important;\r\n    margin-top: .3rem;\r\n}\r\n\r\n.addBtn {\r\n    padding: .175rem .6rem;\r\n}\r\n\r\n.bld {\r\n    font-weight: bold;\r\n}\r\n\r\n.fs-s {\r\n    font-size: small;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LWNoZWNrb3V0L2NhcnQtY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksNkJBQTZCO0lBQzdCLGdDQUFnQztDQUNuQzs7QUFFRDtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSw0QkFBNEI7SUFDNUIsK0JBQStCO0NBQ2xDOztBQUVEO0lBQ0ksMkJBQTJCO0NBQzlCOztBQUVEO0lBQ0ksMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGlDQUFpQztJQUNqQyw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LWNoZWNrb3V0L2NhcnQtY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5jYXJ0LXRhYmxlIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ubGVmdC1idXR0b24ge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5wcm9kVGl0bGUge1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJpZ2h0LWJ1dHRvbiB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMiAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl06ZGlzYWJsZWQudGl0bGUtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzUzNTA1ZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtc3R5bGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU5ZWM7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTllYztcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRyYXNoLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAuMTVyZW0gLjRyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC4zcmVtO1xyXG59XHJcblxyXG4uYWRkQnRuIHtcclxuICAgIHBhZGRpbmc6IC4xNzVyZW0gLjZyZW07XHJcbn1cclxuXHJcbi5ibGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mcy1zIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cart/cart-checkout/cart-checkout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cart/cart-checkout/cart-checkout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header previousLink=\"/home/products?cOut={{id}}\" previousAction=\"Home\"></app-header>\r\n<div class=\"container\">\r\n    <div class=\"row text-center mt-3\">\r\n        <h3 class=\"col-12\">Thank You!</h3>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div *ngFor=\"let item of orderList; let i = index\" class=\"table-style\">\r\n                <h5 class=\"prodTitle\">{{item.productName}} </h5>\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <td class=\" title-text\" scope=\"col\">Product Type</td>\r\n                            <td class=\" title-text\">Price</td>\r\n\r\n                            <td><input type=\"text\" class=\"form-control title-text\" [value]=\"item['col1Title']\" disabled=\"true\"></td>\r\n                            <td><input type=\"text\" class=\"form-control title-text\" [value]=\"item['col2Title']\" disabled=\"true\"></td>\r\n                            <td class=\" title-text\">Total</td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n\r\n                        <tr *ngFor=\"let type of item['productSKU']; let x = index\">\r\n                            <th scope=\"row\">{{type.SKU_Name}}</th>\r\n                            <td>$ {{type.SKU_Price}}</td>\r\n                            <td>{{type.col1Value? type.col1Value : 'None' }}</td>\r\n                            <td>{{type.col2Value? type.col2Value : 'None'}}</td>\r\n                            <td style=\"text-align: center;\">{{type.quantity }}</td>\r\n\r\n                        </tr>\r\n\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-3\">\r\n        <div class=\"col-6\">\r\n            Referral Code\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <input type=\"number\" class=\"form-control\" disabled=\"true\" placeholder=\"M2BXXX-01\" />\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row mt-3\">\r\n        <div class=\"offset-6 col-6 text-right\">\r\n\r\n            <i class=\"fa fa-money-bill mr-3\"></i>Order Total : <a>$ {{totalSelectPrice}}</a>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-3\">\r\n        <div class=\"offset-6 col-6 text-right\">\r\n\r\n            <i class=\"fa fa-money-bill mr-3\"></i>Total Saved : <a>$ 0</a>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-12 text-center bld\">\r\n            Delivery Detail\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let user of users; let i = index;\">\r\n\r\n        <div class=\"row \">\r\n            <div class=\"col-6 text-right \">\r\n                <strong>Supply {{i+1}} :</strong>\r\n            </div>\r\n            <div class=\"col-6 text-left\">\r\n                {{user.name}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-6 text-right \">\r\n                <strong>Courier : </strong>\r\n            </div>\r\n            <div class=\"col-6 text-left fs-s\">\r\n                Padding for supplier review</div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-6 text-right \">\r\n                <strong>Contact :</strong>\r\n            </div>\r\n            <div class=\"col-6 text-left\">\r\n                {{user.phoneNo}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-6 text-right \">\r\n                <strong>Time Est :</strong>\r\n            </div>\r\n            <div class=\"col-6 text-left fs-s\">\r\n                Padding for supplier review\r\n            </div>\r\n        </div>\r\n        <hr />\r\n    </div>\r\n\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-12 text-center\">\r\n            <strong><a [routerLink]=\"['/myOrderList']\">Track Your Order</a></strong>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/cart/cart-checkout/cart-checkout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cart/cart-checkout/cart-checkout.component.ts ***!
  \*********************************************************************/
/*! exports provided: CartCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCheckoutComponent", function() { return CartCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartCheckoutComponent = /** @class */ (function () {
    function CartCheckoutComponent(supplierSer) {
        this.supplierSer = supplierSer;
        this.isAddedCheck = "isAdded";
        this.totalPrice = 0;
        this.selectedData = {};
        this.totalSelectedProduct = new Array();
        // i=0;
        this.totalSelectPrice = 0;
        this.users = [];
        this.orderList = JSON.parse(localStorage.getItem('orderData2'));
        this.calculateTotal();
        this.getSuplliersInfo();
    }
    CartCheckoutComponent.prototype.ngOnInit = function () {
        this.id = this.makeid();
    };
    CartCheckoutComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    CartCheckoutComponent.prototype.ontrackOrder = function () {
        localStorage.removeItem('orderData2');
    };
    CartCheckoutComponent.prototype.getSuplliersInfo = function () {
        var _this = this;
        var sameProd = [];
        var uniqueEmailValues;
        var unique = {};
        var prodTotal = 0;
        var supplierTotal = 0;
        var container = {
            productDetail: []
        };
        this.orderList.forEach(function (i) {
            if (!unique[i.supplierEmail]) {
                unique[i.supplierEmail] = true;
            }
        });
        uniqueEmailValues = Object.keys(unique);
        console.log(uniqueEmailValues);
        uniqueEmailValues.forEach(function (email) {
            _this.getCurrentUserInfo(email);
        });
    };
    CartCheckoutComponent.prototype.getCurrentUserInfo = function (email) {
        var _this = this;
        this.supplierSer.getUsersByOption("email", email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            _this.users.push(users[0]);
        });
    };
    CartCheckoutComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.totalSelectPrice = 0;
        this.orderList.forEach(function (el) {
            el.productSKU.forEach(function (item) {
                _this.totalSKUPrice = item.SKU_Price * +item.quantity;
                _this.totalSelectPrice = Math.round((_this.totalSelectPrice + _this.totalSKUPrice) * 100) / 100;
            });
        });
    };
    CartCheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-checkout',
            template: __webpack_require__(/*! ./cart-checkout.component.html */ "./src/app/pages/cart/cart-checkout/cart-checkout.component.html"),
            styles: [__webpack_require__(/*! ./cart-checkout.component.css */ "./src/app/pages/cart/cart-checkout/cart-checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"]])
    ], CartCheckoutComponent);
    return CartCheckoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/cart/final-cart/final-cart.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/cart/final-cart/final-cart.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvZmluYWwtY2FydC9maW5hbC1jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/cart/final-cart/final-cart.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cart/final-cart/final-cart.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<ng-container *ngIf=\"thank\">\r\n<!--Thank you page-->\r\n\r\n<!-- status -->\r\n<div  id=\"buy_back\">\r\n  <div class=\"container\" id=\"chat_box\">\r\n    <div class=\"my_m2b_head thankyou\">\r\n      <img src=\"assets/assets1/images/checkbox-icon.png\" alt=\"\">\r\n      <h2>Thank You!</h2>\r\n      <p>Please check your email for further instructions on <span>how to complete your account setup.</span></p>\r\n      <ul class=\"tabs\">\r\n      <li class=\"tab-link apple_bg current\" data-tab=\"tab-1\"><a href=\"/M2B\">\r\n      <b>Back to Home</b>\r\n      </a></li>\r\n      \r\n    </ul>\r\n    </div>\r\n    \r\n  </div> \r\n</div>  \r\n<!--Thank you page-->\r\n</ng-container>\r\n<ng-container *ngIf=\"!thank\">\r\n<div class=\"container\">\r\n    <!-- status -->\r\n<div class=\"status_wrap\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-4 status_boxes\">\r\n      <h3 class=\"save_bg\">Saved</h3>\r\n    </div>\r\n    <div class=\"col-sm-4 status_boxes\">\r\n      <h3 class=\"price_bg\">$ {{credit | number : '1.2-2'}}</h3>\r\n    </div>\r\n    <div class=\"col-sm-4 status_boxes\">\r\n      <h3 class=\"status_bg\">Status</h3>\r\n    </div>\r\n  </div>\r\n  </div> \r\n</div>\r\n\r\n<div class=\"shopping_box\">\r\n  <div class=\"container\">\r\n    <div class=\"row doted_bdr\">\r\n      <div class=\"col-sm-8 shop_head\">\r\n        <h4>Continue Shopping</h4>\r\n      </div>\r\n      <div class=\"col-sm-4 icons_boxes\">\r\n        <ul>\r\n          <li>\r\n            <i class=\"fa fa-certificate\"></i>\r\n            <b>2 Year <span>Warranty</span></b>\r\n          </li>\r\n          <li>\r\n            <i class=\"fa fa-globe\"></i>\r\n            <b>Global  <span>Delivery</span></b>\r\n          </li>\r\n          <li>\r\n            <i class=\"fa fa-lock\"></i>\r\n            <b>Secure  <span>Payment</span></b>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"express_checkout\">\r\n      <h4>Express Checkout <span>Please enter your details below to complete your purchase...</span></h4>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4 billing_address\">\r\n        <div class=\"inner_box border_none\">\r\n          \r\n        <h4 class=\"bill_box\"(click)=\"show_accor('acc1')\" ><span>1. </span> BILLING ADDRESS<i class=\"fa fa-angle-down\"></i></h4>\r\n        <div class=\"form_gapp\" *ngIf=\"acord.acc1 == 1\" style=\"display:block;\">\r\n\r\n          <div class=\"row\">\r\n          <div class=\"col-sm-6 sidegapp_box\">\r\n            <div class=\"form_address\">\r\n              <label>First Name</label>\r\n              <input type=\"text\" placeholder=\"\" required=\"required\" name=\"\" [ngStyle]=\"{'border-color':address_error.fname == 0 ? 'red' : 'b8b8b8' }\" [(ngModel)]=\"address.fname\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 sidegapp_box\">\r\n            <div class=\"form_address\">\r\n              <label>Last Name</label>\r\n              <input type=\"text\" placeholder=\"\" required=\"required\" name=\"\"  [ngStyle]=\"{'border-color':address_error.lname == 0 ? 'red' : 'b8b8b8' }\" [(ngModel)]=\"address.lname\"/>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 sidegapp_box\">\r\n            <div class=\"form_address\">\r\n              <label>Email Address</label>\r\n              <input type=\"text\" placeholder=\"\" required=\"required\"  [ngStyle]=\"{'border-color':address_error.email == 0 ? 'red' : 'b8b8b8' }\" name=\"\" [(ngModel)]=\"address.email\"/>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-sm-12 sidegapp_box\">\r\n            <div class=\"form_address\">\r\n              <label>Telephone</label>\r\n              <input type=\"text\" placeholder=\"\" required=\"required\" name=\"\"  [ngStyle]=\"{'border-color':address_error.phone == 0 ? 'red' : 'b8b8b8' }\" [(ngModel)]=\"address.phone\"/>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        \r\n\r\n      \r\n\r\n        <div class=\"billing_address_box\">\r\n          <div class=\"row\">\r\n          <div class=\"col-sm-12 ful_address\">\r\n            <div class=\"form_address\">\r\n              <label> Address</label>\r\n              <input type=\"text\" placeholder=\"\" required=\"required\" name=\"\" [ngStyle]=\"{'border-color':address_error.address == 0 ? 'red' : 'b8b8b8' }\" [(ngModel)]=\"address.address\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-12 ful_address\">\r\n            <div class=\"form_address\">\r\n              <label> Town</label>\r\n              <input type=\"text\" placeholder=\"\" required=\"required\" name=\"\"  [ngStyle]=\"{'border-color':address_error.town == 0 ? 'red' : 'b8b8b8' }\"  [(ngModel)]=\"address.town\"/>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 sidegapp_box\">\r\n            <div class=\"form_address\">\r\n              <label>State/Territory</label>\r\n              <input type=\"text\" placeholder=\"\" required=\"required\" name=\"\"  [ngStyle]=\"{'border-color':address_error.state == 0 ? 'red' : 'b8b8b8' }\"  [(ngModel)]=\"address.state\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 sidegapp_box\">\r\n            <div class=\"form_address\">\r\n              <label>Postcode</label>\r\n              <input type=\"text\" placeholder=\"\" required=\"required\" name=\"\"  [ngStyle]=\"{'border-color':address_error.postcode == 0 ? 'red' : 'b8b8b8' }\"  [(ngModel)]=\"address.postcode\"/>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 ful_address\">\r\n            <div class=\"form_address\">\r\n              <label> Country</label>\r\n              <select id=\"country\" name=\"country\"   [ngStyle]=\"{'border-color':address_error.country == 0 ? 'red' : 'b8b8b8' }\"    [(ngModel)]=\"address.country\">\r\n                                <option value=\"United States\">United States</option>\r\n                <option value=\"Afghanistan\">Afghanistan</option>\r\n                <option value=\"Åland Islands\">Åland Islands</option>\r\n                <option value=\"Albania\">Albania</option>\r\n                <option value=\"Algeria\">Algeria</option>\r\n                <option value=\"American Samoa\">American Samoa</option>\r\n                <option value=\"Andorra\">Andorra</option>\r\n                <option value=\"Angola\">Angola</option>\r\n                <option value=\"Anguilla\">Anguilla</option>\r\n                <option value=\"Antarctica\">Antarctica</option>\r\n                <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\r\n                <option value=\"Argentina\">Argentina</option>\r\n                <option value=\"Armenia\">Armenia</option>\r\n                <option value=\"Aruba\">Aruba</option>\r\n                <option value=\"Australia\">Australia</option>\r\n                <option value=\"Austria\">Austria</option>\r\n                <option value=\"Azerbaijan\">Azerbaijan</option>\r\n                <option value=\"Bahamas\">Bahamas</option>\r\n                <option value=\"Bahrain\">Bahrain</option>\r\n                <option value=\"Bangladesh\">Bangladesh</option>\r\n                <option value=\"Barbados\">Barbados</option>\r\n                <option value=\"Belarus\">Belarus</option>\r\n                <option value=\"Belgium\">Belgium</option>\r\n                <option value=\"Belize\">Belize</option>\r\n                <option value=\"Benin\">Benin</option>\r\n                <option value=\"Bermuda\">Bermuda</option>\r\n                <option value=\"Bhutan\">Bhutan</option>\r\n                <option value=\"Bolivia\">Bolivia</option>\r\n                <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\r\n                <option value=\"Botswana\">Botswana</option>\r\n                <option value=\"Bouvet Island\">Bouvet Island</option>\r\n                <option value=\"Brazil\">Brazil</option>\r\n                <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\r\n                <option value=\"Brunei Darussalam\">Brunei Darussalam</option>\r\n                <option value=\"Bulgaria\">Bulgaria</option>\r\n                <option value=\"Burkina Faso\">Burkina Faso</option>\r\n                <option value=\"Burundi\">Burundi</option>\r\n                <option value=\"Cambodia\">Cambodia</option>\r\n                <option value=\"Cameroon\">Cameroon</option>\r\n                <option value=\"Canada\">Canada</option>\r\n                <option value=\"Cape Verde\">Cape Verde</option>\r\n                <option value=\"Cayman Islands\">Cayman Islands</option>\r\n                <option value=\"Central African Republic\">Central African Republic</option>\r\n                <option value=\"Chad\">Chad</option>\r\n                <option value=\"Chile\">Chile</option>\r\n                <option value=\"China\">China</option>\r\n                <option value=\"Christmas Island\">Christmas Island</option>\r\n                <option value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\r\n                <option value=\"Colombia\">Colombia</option>\r\n                <option value=\"Comoros\">Comoros</option>\r\n                <option value=\"Congo\">Congo</option>\r\n                <option value=\"Congo, The Democratic Republic of The\">Congo, The Democratic Republic of The</option>\r\n                <option value=\"Cook Islands\">Cook Islands</option>\r\n                <option value=\"Costa Rica\">Costa Rica</option>\r\n                <option value=\"Cote D'ivoire\">Cote D'ivoire</option>\r\n                <option value=\"Croatia\">Croatia</option>\r\n                <option value=\"Cuba\">Cuba</option>\r\n                <option value=\"Cyprus\">Cyprus</option>\r\n                <option value=\"Czech Republic\">Czech Republic</option>\r\n                <option value=\"Denmark\">Denmark</option>\r\n                <option value=\"Djibouti\">Djibouti</option>\r\n                <option value=\"Dominica\">Dominica</option>\r\n                <option value=\"Dominican Republic\">Dominican Republic</option>\r\n                <option value=\"Ecuador\">Ecuador</option>\r\n                <option value=\"Egypt\">Egypt</option>\r\n                <option value=\"El Salvador\">El Salvador</option>\r\n                <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n                <option value=\"Eritrea\">Eritrea</option>\r\n                <option value=\"Estonia\">Estonia</option>\r\n                <option value=\"Ethiopia\">Ethiopia</option>\r\n                <option value=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\r\n                <option value=\"Faroe Islands\">Faroe Islands</option>\r\n                <option value=\"Fiji\">Fiji</option>\r\n                <option value=\"Finland\">Finland</option>\r\n                <option value=\"France\">France</option>\r\n                <option value=\"French Guiana\">French Guiana</option>\r\n                <option value=\"French Polynesia\">French Polynesia</option>\r\n                <option value=\"French Southern Territories\">French Southern Territories</option>\r\n                <option value=\"Gabon\">Gabon</option>\r\n                <option value=\"Gambia\">Gambia</option>\r\n                <option value=\"Georgia\">Georgia</option>\r\n                <option value=\"Germany\">Germany</option>\r\n                <option value=\"Ghana\">Ghana</option>\r\n                <option value=\"Gibraltar\">Gibraltar</option>\r\n                <option value=\"Greece\">Greece</option>\r\n                <option value=\"Greenland\">Greenland</option>\r\n                <option value=\"Grenada\">Grenada</option>\r\n                <option value=\"Guadeloupe\">Guadeloupe</option>\r\n                <option value=\"Guam\">Guam</option>\r\n                <option value=\"Guatemala\">Guatemala</option>\r\n                <option value=\"Guernsey\">Guernsey</option>\r\n                <option value=\"Guinea\">Guinea</option>\r\n                <option value=\"Guinea-bissau\">Guinea-bissau</option>\r\n                <option value=\"Guyana\">Guyana</option>\r\n                <option value=\"Haiti\">Haiti</option>\r\n                <option value=\"Heard Island and Mcdonald Islands\">Heard Island and Mcdonald Islands</option>\r\n                <option value=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\r\n                <option value=\"Honduras\">Honduras</option>\r\n                <option value=\"Hong Kong\">Hong Kong</option>\r\n                <option value=\"Hungary\">Hungary</option>\r\n                <option value=\"Iceland\">Iceland</option>\r\n                <option value=\"India\">India</option>\r\n                <option value=\"Indonesia\">Indonesia</option>\r\n                <option value=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\r\n                <option value=\"Iraq\">Iraq</option>\r\n                <option value=\"Ireland\">Ireland</option>\r\n                <option value=\"Isle of Man\">Isle of Man</option>\r\n                <option value=\"Israel\">Israel</option>\r\n                <option value=\"Italy\">Italy</option>\r\n                <option value=\"Jamaica\">Jamaica</option>\r\n                <option value=\"Japan\">Japan</option>\r\n                <option value=\"Jersey\">Jersey</option>\r\n                <option value=\"Jordan\">Jordan</option>\r\n                <option value=\"Kazakhstan\">Kazakhstan</option>\r\n                <option value=\"Kenya\">Kenya</option>\r\n                <option value=\"Kiribati\">Kiribati</option>\r\n                <option value=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic of</option>\r\n                <option value=\"Korea, Republic of\">Korea, Republic of</option>\r\n                <option value=\"Kuwait\">Kuwait</option>\r\n                <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n                <option value=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\r\n                <option value=\"Latvia\">Latvia</option>\r\n                <option value=\"Lebanon\">Lebanon</option>\r\n                <option value=\"Lesotho\">Lesotho</option>\r\n                <option value=\"Liberia\">Liberia</option>\r\n                <option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\r\n                <option value=\"Liechtenstein\">Liechtenstein</option>\r\n                <option value=\"Lithuania\">Lithuania</option>\r\n                <option value=\"Luxembourg\">Luxembourg</option>\r\n                <option value=\"Macao\">Macao</option>\r\n                <option value=\"Macedonia, The Former Yugoslav Republic of\">Macedonia, The Former Yugoslav Republic of</option>\r\n                <option value=\"Madagascar\">Madagascar</option>\r\n                <option value=\"Malawi\">Malawi</option>\r\n                <option value=\"Malaysia\">Malaysia</option>\r\n                <option value=\"Maldives\">Maldives</option>\r\n                <option value=\"Mali\">Mali</option>\r\n                <option value=\"Malta\">Malta</option>\r\n                <option value=\"Marshall Islands\">Marshall Islands</option>\r\n                <option value=\"Martinique\">Martinique</option>\r\n                <option value=\"Mauritania\">Mauritania</option>\r\n                <option value=\"Mauritius\">Mauritius</option>\r\n                <option value=\"Mayotte\">Mayotte</option>\r\n                <option value=\"Mexico\">Mexico</option>\r\n                <option value=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\r\n                <option value=\"Moldova, Republic of\">Moldova, Republic of</option>\r\n                <option value=\"Monaco\">Monaco</option>\r\n                <option value=\"Mongolia\">Mongolia</option>\r\n                <option value=\"Montenegro\">Montenegro</option>\r\n                <option value=\"Montserrat\">Montserrat</option>\r\n                <option value=\"Morocco\">Morocco</option>\r\n                <option value=\"Mozambique\">Mozambique</option>\r\n                <option value=\"Myanmar\">Myanmar</option>\r\n                <option value=\"Namibia\">Namibia</option>\r\n                <option value=\"Nauru\">Nauru</option>\r\n                <option value=\"Nepal\">Nepal</option>\r\n                <option value=\"Netherlands\">Netherlands</option>\r\n                <option value=\"Netherlands Antilles\">Netherlands Antilles</option>\r\n                <option value=\"New Caledonia\">New Caledonia</option>\r\n                <option value=\"New Zealand\">New Zealand</option>\r\n                <option value=\"Nicaragua\">Nicaragua</option>\r\n                <option value=\"Niger\">Niger</option>\r\n                <option value=\"Nigeria\">Nigeria</option>\r\n                <option value=\"Niue\">Niue</option>\r\n                <option value=\"Norfolk Island\">Norfolk Island</option>\r\n                <option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\r\n                <option value=\"Norway\">Norway</option>\r\n                <option value=\"Oman\">Oman</option>\r\n                <option value=\"Pakistan\">Pakistan</option>\r\n                <option value=\"Palau\">Palau</option>\r\n                <option value=\"Palestinian Territory, Occupied\">Palestinian Territory, Occupied</option>\r\n                <option value=\"Panama\">Panama</option>\r\n                <option value=\"Papua New Guinea\">Papua New Guinea</option>\r\n                <option value=\"Paraguay\">Paraguay</option>\r\n                <option value=\"Peru\">Peru</option>\r\n                <option value=\"Philippines\">Philippines</option>\r\n                <option value=\"Pitcairn\">Pitcairn</option>\r\n                <option value=\"Poland\">Poland</option>\r\n                <option value=\"Portugal\">Portugal</option>\r\n                <option value=\"Puerto Rico\">Puerto Rico</option>\r\n                <option value=\"Qatar\">Qatar</option>\r\n                <option value=\"Reunion\">Reunion</option>\r\n                <option value=\"Romania\">Romania</option>\r\n                <option value=\"Russian Federation\">Russian Federation</option>\r\n                <option value=\"Rwanda\">Rwanda</option>\r\n                <option value=\"Saint Helena\">Saint Helena</option>\r\n                <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\r\n                <option value=\"Saint Lucia\">Saint Lucia</option>\r\n                <option value=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\r\n                <option value=\"Saint Vincent and The Grenadines\">Saint Vincent and The Grenadines</option>\r\n                <option value=\"Samoa\">Samoa</option>\r\n                <option value=\"San Marino\">San Marino</option>\r\n                <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\r\n                <option value=\"Saudi Arabia\">Saudi Arabia</option>\r\n                <option value=\"Senegal\">Senegal</option>\r\n                <option value=\"Serbia\">Serbia</option>\r\n                <option value=\"Seychelles\">Seychelles</option>\r\n                <option value=\"Sierra Leone\">Sierra Leone</option>\r\n                <option value=\"Singapore\">Singapore</option>\r\n                <option value=\"Slovakia\">Slovakia</option>\r\n                <option value=\"Slovenia\">Slovenia</option>\r\n                <option value=\"Solomon Islands\">Solomon Islands</option>\r\n                <option value=\"Somalia\">Somalia</option>\r\n                <option value=\"South Africa\">South Africa</option>\r\n                <option value=\"South Georgia and The South Sandwich Islands\">South Georgia and The South Sandwich Islands</option>\r\n                <option value=\"Spain\">Spain</option>\r\n                <option value=\"Sri Lanka\">Sri Lanka</option>\r\n                <option value=\"Sudan\">Sudan</option>\r\n                <option value=\"Suriname\">Suriname</option>\r\n                <option value=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\r\n                <option value=\"Swaziland\">Swaziland</option>\r\n                <option value=\"Sweden\">Sweden</option>\r\n                <option value=\"Switzerland\">Switzerland</option>\r\n                <option value=\"Syrian Arab Republic\">Syrian Arab Republic</option>\r\n                <option value=\"Taiwan\">Taiwan</option>\r\n                <option value=\"Tajikistan\">Tajikistan</option>\r\n                <option value=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\r\n                <option value=\"Thailand\">Thailand</option>\r\n                <option value=\"Timor-leste\">Timor-leste</option>\r\n                <option value=\"Togo\">Togo</option>\r\n                <option value=\"Tokelau\">Tokelau</option>\r\n                <option value=\"Tonga\">Tonga</option>\r\n                <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\r\n                <option value=\"Tunisia\">Tunisia</option>\r\n                <option value=\"Turkey\">Turkey</option>\r\n                <option value=\"Turkmenistan\">Turkmenistan</option>\r\n                <option value=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\r\n                <option value=\"Tuvalu\">Tuvalu</option>\r\n                <option value=\"Uganda\">Uganda</option>\r\n                <option value=\"Ukraine\">Ukraine</option>\r\n                <option value=\"United Arab Emirates\">United Arab Emirates</option>\r\n                <option value=\"United Kingdom\">United Kingdom</option>\r\n\r\n                <option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\r\n                <option value=\"Uruguay\">Uruguay</option>\r\n                <option value=\"Uzbekistan\">Uzbekistan</option>\r\n                <option value=\"Vanuatu\">Vanuatu</option>\r\n                <option value=\"Venezuela\">Venezuela</option>\r\n                <option value=\"Viet Nam\">Viet Nam</option>\r\n                <option value=\"Virgin Islands, British\">Virgin Islands, British</option>\r\n                <option value=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\r\n                <option value=\"Wallis and Futuna\">Wallis and Futuna</option>\r\n                <option value=\"Western Sahara\">Western Sahara</option>\r\n                <option value=\"Yemen\">Yemen</option>\r\n                <option value=\"Zambia\">Zambia</option>\r\n                <option value=\"Zimbabwe\">Zimbabwe</option>\r\n            </select>\r\n            <label><input type=\"checkbox\" class=\"new_check\"  [(ngModel)]=\"save_next\" name=\"\"> Save for later use.</label>\r\n        </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n\r\n        <div class=\"filteroptions shippingbox\">\r\n         <label class=\"bui-checkbox \">\r\n             <input [(ngModel)]=\"sameship\" class=\"bui-checkbox__input js-bui-checkbox__input shippingbox\" type=\"checkbox\">\r\n             <div class=\"bui-checkbox__label filter_item css-checkbox\">\r\n                <span class=\"filter_label \r\n                   \">Shipping address is same as billing address</span>\r\n\r\n             </div>\r\n          </label>\r\n      </div>\r\n      <h4 class=\"bill_box\" *ngIf=\"!sameship\"> SHIPPING ADDRESS</h4>\r\n\r\n        <div class=\"shipping_address_box\" style=\"display: block;\" *ngIf=\"!sameship\">\r\n          <div class=\"row\">\r\n          <div class=\"col-sm-12 ful_address\">\r\n            <div class=\"form_address\">\r\n              <label> Address</label>\r\n              <input type=\"text\" placeholder=\"\" required=\"required\" name=\"\"   [ngStyle]=\"{'border-color':saddress_error.address == 0 ? 'red' : 'b8b8b8' }\"   [(ngModel)]=\"saddress.address\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-12 ful_address\">\r\n            <div class=\"form_address\">\r\n              <label> Town</label>\r\n              <input type=\"text\" placeholder=\"\" required=\"required\"  [ngStyle]=\"{'border-color':saddress_error.town == 0 ? 'red' : 'b8b8b8' }\"   name=\"\"[(ngModel)]=\"saddress.town\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 sidegapp_box\">\r\n            <div class=\"form_address\">\r\n              <label>State/Territory</label>\r\n              <input type=\"text\" placeholder=\"\"  [ngStyle]=\"{'border-color':saddress_error.state == 0 ? 'red' : 'b8b8b8' }\"   required=\"required\" name=\"\"[(ngModel)]=\"saddress.state\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 sidegapp_box\">\r\n            <div class=\"form_address\">\r\n              <label>Postcode</label>\r\n              <input type=\"text\" placeholder=\"\" required=\"required\" name=\"\"   [ngStyle]=\"{'border-color':saddress_error.postcode == 0 ? 'red' : 'b8b8b8' }\"   [(ngModel)]=\"saddress.postcode\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 ful_address\">\r\n            <div class=\"form_address\">\r\n              <label> Country</label>\r\n              <select id=\"country\" name=\"country\"   [ngStyle]=\"{'border-color':saddress_error.country == 0 ? 'red' : 'b8b8b8' }\" [(ngModel)]=\"saddress.country\">\r\n                                <option value=\"United States\">United States</option>\r\n                <option value=\"Afghanistan\">Afghanistan</option>\r\n                <option value=\"Åland Islands\">Åland Islands</option>\r\n                <option value=\"Albania\">Albania</option>\r\n                <option value=\"Algeria\">Algeria</option>\r\n                <option value=\"American Samoa\">American Samoa</option>\r\n                <option value=\"Andorra\">Andorra</option>\r\n                <option value=\"Angola\">Angola</option>\r\n                <option value=\"Anguilla\">Anguilla</option>\r\n                <option value=\"Antarctica\">Antarctica</option>\r\n                <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\r\n                <option value=\"Argentina\">Argentina</option>\r\n                <option value=\"Armenia\">Armenia</option>\r\n                <option value=\"Aruba\">Aruba</option>\r\n                <option value=\"Australia\">Australia</option>\r\n                <option value=\"Austria\">Austria</option>\r\n                <option value=\"Azerbaijan\">Azerbaijan</option>\r\n                <option value=\"Bahamas\">Bahamas</option>\r\n                <option value=\"Bahrain\">Bahrain</option>\r\n                <option value=\"Bangladesh\">Bangladesh</option>\r\n                <option value=\"Barbados\">Barbados</option>\r\n                <option value=\"Belarus\">Belarus</option>\r\n                <option value=\"Belgium\">Belgium</option>\r\n                <option value=\"Belize\">Belize</option>\r\n                <option value=\"Benin\">Benin</option>\r\n                <option value=\"Bermuda\">Bermuda</option>\r\n                <option value=\"Bhutan\">Bhutan</option>\r\n                <option value=\"Bolivia\">Bolivia</option>\r\n                <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\r\n                <option value=\"Botswana\">Botswana</option>\r\n                <option value=\"Bouvet Island\">Bouvet Island</option>\r\n                <option value=\"Brazil\">Brazil</option>\r\n                <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\r\n                <option value=\"Brunei Darussalam\">Brunei Darussalam</option>\r\n                <option value=\"Bulgaria\">Bulgaria</option>\r\n                <option value=\"Burkina Faso\">Burkina Faso</option>\r\n                <option value=\"Burundi\">Burundi</option>\r\n                <option value=\"Cambodia\">Cambodia</option>\r\n                <option value=\"Cameroon\">Cameroon</option>\r\n                <option value=\"Canada\">Canada</option>\r\n                <option value=\"Cape Verde\">Cape Verde</option>\r\n                <option value=\"Cayman Islands\">Cayman Islands</option>\r\n                <option value=\"Central African Republic\">Central African Republic</option>\r\n                <option value=\"Chad\">Chad</option>\r\n                <option value=\"Chile\">Chile</option>\r\n                <option value=\"China\">China</option>\r\n                <option value=\"Christmas Island\">Christmas Island</option>\r\n                <option value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\r\n                <option value=\"Colombia\">Colombia</option>\r\n                <option value=\"Comoros\">Comoros</option>\r\n                <option value=\"Congo\">Congo</option>\r\n                <option value=\"Congo, The Democratic Republic of The\">Congo, The Democratic Republic of The</option>\r\n                <option value=\"Cook Islands\">Cook Islands</option>\r\n                <option value=\"Costa Rica\">Costa Rica</option>\r\n                <option value=\"Cote D'ivoire\">Cote D'ivoire</option>\r\n                <option value=\"Croatia\">Croatia</option>\r\n                <option value=\"Cuba\">Cuba</option>\r\n                <option value=\"Cyprus\">Cyprus</option>\r\n                <option value=\"Czech Republic\">Czech Republic</option>\r\n                <option value=\"Denmark\">Denmark</option>\r\n                <option value=\"Djibouti\">Djibouti</option>\r\n                <option value=\"Dominica\">Dominica</option>\r\n                <option value=\"Dominican Republic\">Dominican Republic</option>\r\n                <option value=\"Ecuador\">Ecuador</option>\r\n                <option value=\"Egypt\">Egypt</option>\r\n                <option value=\"El Salvador\">El Salvador</option>\r\n                <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n                <option value=\"Eritrea\">Eritrea</option>\r\n                <option value=\"Estonia\">Estonia</option>\r\n                <option value=\"Ethiopia\">Ethiopia</option>\r\n                <option value=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\r\n                <option value=\"Faroe Islands\">Faroe Islands</option>\r\n                <option value=\"Fiji\">Fiji</option>\r\n                <option value=\"Finland\">Finland</option>\r\n                <option value=\"France\">France</option>\r\n                <option value=\"French Guiana\">French Guiana</option>\r\n                <option value=\"French Polynesia\">French Polynesia</option>\r\n                <option value=\"French Southern Territories\">French Southern Territories</option>\r\n                <option value=\"Gabon\">Gabon</option>\r\n                <option value=\"Gambia\">Gambia</option>\r\n                <option value=\"Georgia\">Georgia</option>\r\n                <option value=\"Germany\">Germany</option>\r\n                <option value=\"Ghana\">Ghana</option>\r\n                <option value=\"Gibraltar\">Gibraltar</option>\r\n                <option value=\"Greece\">Greece</option>\r\n                <option value=\"Greenland\">Greenland</option>\r\n                <option value=\"Grenada\">Grenada</option>\r\n                <option value=\"Guadeloupe\">Guadeloupe</option>\r\n                <option value=\"Guam\">Guam</option>\r\n                <option value=\"Guatemala\">Guatemala</option>\r\n                <option value=\"Guernsey\">Guernsey</option>\r\n                <option value=\"Guinea\">Guinea</option>\r\n                <option value=\"Guinea-bissau\">Guinea-bissau</option>\r\n                <option value=\"Guyana\">Guyana</option>\r\n                <option value=\"Haiti\">Haiti</option>\r\n                <option value=\"Heard Island and Mcdonald Islands\">Heard Island and Mcdonald Islands</option>\r\n                <option value=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\r\n                <option value=\"Honduras\">Honduras</option>\r\n                <option value=\"Hong Kong\">Hong Kong</option>\r\n                <option value=\"Hungary\">Hungary</option>\r\n                <option value=\"Iceland\">Iceland</option>\r\n                <option value=\"India\">India</option>\r\n                <option value=\"Indonesia\">Indonesia</option>\r\n                <option value=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\r\n                <option value=\"Iraq\">Iraq</option>\r\n                <option value=\"Ireland\">Ireland</option>\r\n                <option value=\"Isle of Man\">Isle of Man</option>\r\n                <option value=\"Israel\">Israel</option>\r\n                <option value=\"Italy\">Italy</option>\r\n                <option value=\"Jamaica\">Jamaica</option>\r\n                <option value=\"Japan\">Japan</option>\r\n                <option value=\"Jersey\">Jersey</option>\r\n                <option value=\"Jordan\">Jordan</option>\r\n                <option value=\"Kazakhstan\">Kazakhstan</option>\r\n                <option value=\"Kenya\">Kenya</option>\r\n                <option value=\"Kiribati\">Kiribati</option>\r\n                <option value=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic of</option>\r\n                <option value=\"Korea, Republic of\">Korea, Republic of</option>\r\n                <option value=\"Kuwait\">Kuwait</option>\r\n                <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n                <option value=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\r\n                <option value=\"Latvia\">Latvia</option>\r\n                <option value=\"Lebanon\">Lebanon</option>\r\n                <option value=\"Lesotho\">Lesotho</option>\r\n                <option value=\"Liberia\">Liberia</option>\r\n                <option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\r\n                <option value=\"Liechtenstein\">Liechtenstein</option>\r\n                <option value=\"Lithuania\">Lithuania</option>\r\n                <option value=\"Luxembourg\">Luxembourg</option>\r\n                <option value=\"Macao\">Macao</option>\r\n                <option value=\"Macedonia, The Former Yugoslav Republic of\">Macedonia, The Former Yugoslav Republic of</option>\r\n                <option value=\"Madagascar\">Madagascar</option>\r\n                <option value=\"Malawi\">Malawi</option>\r\n                <option value=\"Malaysia\">Malaysia</option>\r\n                <option value=\"Maldives\">Maldives</option>\r\n                <option value=\"Mali\">Mali</option>\r\n                <option value=\"Malta\">Malta</option>\r\n                <option value=\"Marshall Islands\">Marshall Islands</option>\r\n                <option value=\"Martinique\">Martinique</option>\r\n                <option value=\"Mauritania\">Mauritania</option>\r\n                <option value=\"Mauritius\">Mauritius</option>\r\n                <option value=\"Mayotte\">Mayotte</option>\r\n                <option value=\"Mexico\">Mexico</option>\r\n                <option value=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\r\n                <option value=\"Moldova, Republic of\">Moldova, Republic of</option>\r\n                <option value=\"Monaco\">Monaco</option>\r\n                <option value=\"Mongolia\">Mongolia</option>\r\n                <option value=\"Montenegro\">Montenegro</option>\r\n                <option value=\"Montserrat\">Montserrat</option>\r\n                <option value=\"Morocco\">Morocco</option>\r\n                <option value=\"Mozambique\">Mozambique</option>\r\n                <option value=\"Myanmar\">Myanmar</option>\r\n                <option value=\"Namibia\">Namibia</option>\r\n                <option value=\"Nauru\">Nauru</option>\r\n                <option value=\"Nepal\">Nepal</option>\r\n                <option value=\"Netherlands\">Netherlands</option>\r\n                <option value=\"Netherlands Antilles\">Netherlands Antilles</option>\r\n                <option value=\"New Caledonia\">New Caledonia</option>\r\n                <option value=\"New Zealand\">New Zealand</option>\r\n                <option value=\"Nicaragua\">Nicaragua</option>\r\n                <option value=\"Niger\">Niger</option>\r\n                <option value=\"Nigeria\">Nigeria</option>\r\n                <option value=\"Niue\">Niue</option>\r\n                <option value=\"Norfolk Island\">Norfolk Island</option>\r\n                <option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\r\n                <option value=\"Norway\">Norway</option>\r\n                <option value=\"Oman\">Oman</option>\r\n                <option value=\"Pakistan\">Pakistan</option>\r\n                <option value=\"Palau\">Palau</option>\r\n                <option value=\"Palestinian Territory, Occupied\">Palestinian Territory, Occupied</option>\r\n                <option value=\"Panama\">Panama</option>\r\n                <option value=\"Papua New Guinea\">Papua New Guinea</option>\r\n                <option value=\"Paraguay\">Paraguay</option>\r\n                <option value=\"Peru\">Peru</option>\r\n                <option value=\"Philippines\">Philippines</option>\r\n                <option value=\"Pitcairn\">Pitcairn</option>\r\n                <option value=\"Poland\">Poland</option>\r\n                <option value=\"Portugal\">Portugal</option>\r\n                <option value=\"Puerto Rico\">Puerto Rico</option>\r\n                <option value=\"Qatar\">Qatar</option>\r\n                <option value=\"Reunion\">Reunion</option>\r\n                <option value=\"Romania\">Romania</option>\r\n                <option value=\"Russian Federation\">Russian Federation</option>\r\n                <option value=\"Rwanda\">Rwanda</option>\r\n                <option value=\"Saint Helena\">Saint Helena</option>\r\n                <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\r\n                <option value=\"Saint Lucia\">Saint Lucia</option>\r\n                <option value=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\r\n                <option value=\"Saint Vincent and The Grenadines\">Saint Vincent and The Grenadines</option>\r\n                <option value=\"Samoa\">Samoa</option>\r\n                <option value=\"San Marino\">San Marino</option>\r\n                <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\r\n                <option value=\"Saudi Arabia\">Saudi Arabia</option>\r\n                <option value=\"Senegal\">Senegal</option>\r\n                <option value=\"Serbia\">Serbia</option>\r\n                <option value=\"Seychelles\">Seychelles</option>\r\n                <option value=\"Sierra Leone\">Sierra Leone</option>\r\n                <option value=\"Singapore\">Singapore</option>\r\n                <option value=\"Slovakia\">Slovakia</option>\r\n                <option value=\"Slovenia\">Slovenia</option>\r\n                <option value=\"Solomon Islands\">Solomon Islands</option>\r\n                <option value=\"Somalia\">Somalia</option>\r\n                <option value=\"South Africa\">South Africa</option>\r\n                <option value=\"South Georgia and The South Sandwich Islands\">South Georgia and The South Sandwich Islands</option>\r\n                <option value=\"Spain\">Spain</option>\r\n                <option value=\"Sri Lanka\">Sri Lanka</option>\r\n                <option value=\"Sudan\">Sudan</option>\r\n                <option value=\"Suriname\">Suriname</option>\r\n                <option value=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\r\n                <option value=\"Swaziland\">Swaziland</option>\r\n                <option value=\"Sweden\">Sweden</option>\r\n                <option value=\"Switzerland\">Switzerland</option>\r\n                <option value=\"Syrian Arab Republic\">Syrian Arab Republic</option>\r\n                <option value=\"Taiwan\">Taiwan</option>\r\n                <option value=\"Tajikistan\">Tajikistan</option>\r\n                <option value=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\r\n                <option value=\"Thailand\">Thailand</option>\r\n                <option value=\"Timor-leste\">Timor-leste</option>\r\n                <option value=\"Togo\">Togo</option>\r\n                <option value=\"Tokelau\">Tokelau</option>\r\n                <option value=\"Tonga\">Tonga</option>\r\n                <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\r\n                <option value=\"Tunisia\">Tunisia</option>\r\n                <option value=\"Turkey\">Turkey</option>\r\n                <option value=\"Turkmenistan\">Turkmenistan</option>\r\n                <option value=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\r\n                <option value=\"Tuvalu\">Tuvalu</option>\r\n                <option value=\"Uganda\">Uganda</option>\r\n                <option value=\"Ukraine\">Ukraine</option>\r\n                <option value=\"United Arab Emirates\">United Arab Emirates</option>\r\n                <option value=\"United Kingdom\">United Kingdom</option>\r\n\r\n                <option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\r\n                <option value=\"Uruguay\">Uruguay</option>\r\n                <option value=\"Uzbekistan\">Uzbekistan</option>\r\n                <option value=\"Vanuatu\">Vanuatu</option>\r\n                <option value=\"Venezuela\">Venezuela</option>\r\n                <option value=\"Viet Nam\">Viet Nam</option>\r\n                <option value=\"Virgin Islands, British\">Virgin Islands, British</option>\r\n                <option value=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\r\n                <option value=\"Wallis and Futuna\">Wallis and Futuna</option>\r\n                <option value=\"Western Sahara\">Western Sahara</option>\r\n                <option value=\"Yemen\">Yemen</option>\r\n                <option value=\"Zambia\">Zambia</option>\r\n                <option value=\"Zimbabwe\">Zimbabwe</option>\r\n            </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n\r\n        \r\n        \r\n      \r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4 billing_address\">\r\n        <div class=\"inner_box\">\r\n          <h4 class=\"shipping_box\" (click)=\"show_accor('acc2')\"><span>2.</span> SHIPPING METHOD <i class=\"fa fa-angle-down\"></i></h4>\r\n            <div class=\"ship_sidegapp\"  *ngIf=\"acord.acc2 == 1\" style=\"display:block;\">\r\n              <p>We've noticed that customers in your country have been asked by customer to pay improt or taxes when ordering from delivery and selecting express shipping</p>\r\n            <p>Please consider this when selecting your shipping options</p>\r\n            <div class=\"ship_address radio_box\" *ngFor=\"let item of shipping_methods;let i = index;\">\r\n\r\n              <label *ngIf=\"i != smethod\"><input type=\"radio\"(change)=\"shipping();\" name=\"smethod\" value=\"{{i}}\"  [(ngModel)]=\"smethod\"  /> {{item.name}} <span>${{item.price}}</span></label>\r\n              <label *ngIf=\"i ==  smethod\"><input type=\"radio\"(change)=\"shipping();\" name=\"smethod\" value=\"{{i}}\"  [(ngModel)]=\"smethod\" checked=\"checked\" /> {{item.name}} <span>${{item.price}} </span></label>\r\n            </div>\r\n            <div class=\"ship_address\">\r\n            <!-- <label><input type=\"checkbox\" name=\"\"> Ship to the same address</label> -->\r\n          </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"inner_box\">\r\n          <h4 class=\"payment_box\"  (click)=\"show_accor('acc3')\"><span>3.</span> PAYMENT METHOD <i class=\"fa fa-angle-down\"></i></h4>\r\n          <div   *ngIf=\"acord.acc3 == 1\" style=\"display:block;\">\r\n          <div class=\"ship_address radio_box\" id=\"radiobtn\">\r\n              <label><input type=\"radio\" [(ngModel)]=\"pmethod\" (change)=\"pchange()\" value=\"ccard\" name=\"pmethod\"> Credit Card <!-- <span><img src=\"images/mastercard.jpg\" alt=\"\"> <img src=\"images/visa.jpg\" alt=\"\"></span> --></label>\r\n              <label><input type=\"radio\" [(ngModel)]=\"pmethod\" (change)=\"pchange()\" value= \"credit\" name=\"pmethod\"> M2B Credit  <span  *ngIf =\"ucredit < tot\">({{credit | number : '1.2-2'}})</span><span *ngIf =\"ucredit > tot\">({{tot | number : '1.2-2'}})</span> <!-- <span><img src=\"images/mastercard.jpg\" alt=\"\"> <img src=\"images/visa.jpg\" alt=\"\"></span> --></label>\r\n            </div>\r\n          <div class=\"row credit_error\" *ngIf=\"pmethod == 'credit'\">\r\n            <span style=\"color:red;\">{{cerror}}</span>\r\n            <button *ngIf=\"credit > 0 && !credit_pay\" (click)=\"applyCredit();\">Apply Credit</button>\r\n          </div>\r\n          <div id=\"odiv\" *ngIf=\"pmethod == 'ccard'\" class=\"card_error_page\">\r\n          <form id=\"card_form\">\r\n            <ul id=\"card_error\">\r\n              {{card_error}}\r\n            </ul>\r\n            <label for=\"sq-card-number\">Card Number:</label>\r\n              <div id=\"sq-card-number\"></div>\r\n              <label for=\"sq-cvv\">CVV:</label>\r\n              <div id=\"sq-cvv\"></div>\r\n              <label for=\"sq-expiration-date\">Expiration Date:</label>\r\n              <div id=\"sq-expiration-date\"></div>\r\n              <label for=\"sq-postal-code\">Postal Code:</label>\r\n              <div id=\"sq-postal-code\"></div>\r\n\r\n\r\n              <button id=\"sq-creditcard\" class=\"btn-main button-credit-card\" *ngIf=\"!su_token\" (click)=\"this.requestCardNonce($event)\">Pay with card</button>\r\n              <button id=\"sq-creditcard\" class=\"btn-main button-credit-card\" *ngIf=\"su_token\">Validated</button>\r\n\r\n              <input type=\"hidden\" id=\"sq-id\" name=\"sq-id\">\r\n            \r\n              \r\n          </form>\r\n          <div id=\"su_success\" style=\"display:none;\">\r\n          <input type=\"hidden\" id=\"card-nonce\" [(ngModel)]=\"su_token\" (ngModelChange)=\"token_update()\" name=\"nonce\">\r\n          <button>Validated</button>\r\n        </div>\r\n        </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-sm-4 billing_address\"> \r\n        <div class=\"inner_box your_order\">\r\n          <h4 class=\"order_box\" (click)=\"show_accor('acc4')\"><span>4.</span> REVIEW YOUR ORDER <i class=\"fa fa-angle-down\"></i></h4>\r\n          <div  *ngIf=\"acord.acc4 == 1\" style=\"display:block;\">\r\n          <ng-container  *ngFor=\"let item of cart;let ci = index;\">  \r\n          <div class=\"product_infobox\"  *ngIf=\"item.uid == userId\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-2 product_img\">\r\n                <img src=\"{{ item.product.path }}\" alt=\"\">\r\n              </div>\r\n              <div class=\"col-sm-10 product_price\">\r\n                <b>{{item.product.product_name}} </b>\r\n                <p>{{item.astr}}</p>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-5 qtybox\">\r\n                    <div class=\"quantity_box_pos\">\r\n                        <input type=\"button\" value=\"-\" class=\"qty-minus_pos minus_plus_pos\" (click)=\"updateqty(ci,'m')\">\r\n                        <input type=\"number\" class=\"value_box_pos\" [(ngModel)]=\"item.qty\" (keyup)=\"updateqty(ci,'d')\" value=\"{{item.qty}}\">\r\n                        <input type=\"button\" value=\"+\" class=\"qty-plus_pos minus_plus_pos\" (click)=\"updateqty(ci,'p')\">\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-sm-7 close_product\">\r\n                    <b>${{item.sku.SKU_Price*item.qty | number : '1.2-2'}}x{{cart[ci].qty}} <a (click)=\"removecartitem(ci)\"><i class=\"fa fa-close\"></i></a></b>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n          <table class=\"table_box\">\r\n            <tbody>\r\n            <tr>\r\n              <td >Subtotal:</td>\r\n              <td>${{stot | number : '1.2-2'}}</td>\r\n            </tr>            \r\n            <tr *ngIf=\"samount\">\r\n              <td >Shipping Fee:</td>\r\n              <td>${{samount | number : '1.2-2'}}</td>\r\n            </tr>\r\n            \r\n            <tr>\r\n              <td >Grand Total:</td>\r\n              <td>${{tot | number : '1.2-2'}}</td>\r\n            </tr>\r\n            <tr *ngIf=\"credit_pay\">\r\n              <td >Credit Applied:</td>\r\n              <td>${{credit_pay | number : '1.2-2'}}</td>\r\n            </tr>\r\n            <tr *ngIf=\"credit_pay && (tot-credit_pay)\">\r\n              <td >Remaing to Pay:</td>\r\n              <td>${{remaing_pay | number : '1.2-2'}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"marque_text\">\r\n  <p>all trademarks are properties of their respective holders. M2BWholesale does not own or make claims to those trademarks use on this website</p>\r\n</div>\r\n\r\n<div class=\"subtotal\" id=\"carttotal\" (click)=\"checkout()\">\r\n  <h3><img src=\"assets/assets1/images/logo.png\" alt=\"\"> <a> Pay with M2B </a></h3>\r\n  <span *ngIf=\"tot\">${{tot | number : '1.2-2'}}</span>\r\n</div>\r\n</ng-container>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/cart/final-cart/final-cart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/cart/final-cart/final-cart.component.ts ***!
  \***************************************************************/
/*! exports provided: FinalCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalCartComponent", function() { return FinalCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _models_order_list_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/order-list.model */ "./src/app/models/order-list.model.ts");
/* harmony import */ var _services_order_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/order-list.service */ "./src/app/services/order-list.service.ts");
/* harmony import */ var _models_supplier_order_list_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/supplier-order-list.model */ "./src/app/models/supplier-order-list.model.ts");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// this.customer_sub = this.consumer_service.getCustomers().subscribe((result) => {
//       this.customerData = result
var FinalCartComponent = /** @class */ (function () {
    function FinalCartComponent(http, actRoute, toastrService, productService, router, orderListService, 
        // private http: Http,
        sendEmailService, supplierOrderListService, supplierSer, db, email_service) {
        var _this = this;
        this.http = http;
        this.actRoute = actRoute;
        this.toastrService = toastrService;
        this.productService = productService;
        this.router = router;
        this.orderListService = orderListService;
        this.sendEmailService = sendEmailService;
        this.supplierOrderListService = supplierOrderListService;
        this.supplierSer = supplierSer;
        this.db = db;
        this.email_service = email_service;
        this.appUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].appUrl;
        this.checkChild = 'email';
        this.formLoaded = false;
        this.acord = new Array();
        this.isAddedCheck = 'isAdded';
        this.supplierOrder = new Array();
        this.totalSelectPrice = 0;
        this.deliveryAddress = '';
        this.supplierDetail = new _models_order_list_model__WEBPACK_IMPORTED_MODULE_4__["SupplierOrderInfo"]();
        this.productobj = new _models_order_list_model__WEBPACK_IMPORTED_MODULE_4__["OrderListModel"]();
        this.supplierProductobj = new _models_supplier_order_list_model__WEBPACK_IMPORTED_MODULE_6__["SupplierOrderListModel"]();
        this.supplierProdstruct = { productName: '', productPrice: 0, quantity: 0, supplierId: '', addOn: 0 };
        this.address = {
            'fname': '',
            'lname': '',
            'email': '',
            'phone': '',
            'address': '',
            'town': '',
            'state': '',
            'postcode': '',
            'country': 'United States',
        };
        this.address_error = {
            'fname': '1',
            'lname': '1',
            'email': '1',
            'phone': '1',
            'address': '1',
            'town': '1',
            'state': '1',
            'postcode': '1',
            'country': '1',
        };
        this.saddress = {
            'fname': '',
            'lname': '',
            'email': '',
            'phone': '',
            'address': '',
            'town': '',
            'state': '',
            'postcode': '',
            'country': 'United States',
        };
        this.saddress_error = {
            'fname': '1',
            'lname': '1',
            'email': '1',
            'phone': '1',
            'address': '1',
            'town': '1',
            'state': '1',
            'postcode': '1',
            'country': '1',
        };
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
        var list = this.db.list('/cart');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (cart) {
            _this.cart = cart;
            _this.calculateTotal();
        });
        list = this.db.list('/shipping_methods');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (shipping_methods) {
            _this.shipping_methods = shipping_methods;
            _this.smethod = 0;
            _this.shipping();
        });
        this.getUserByOption();
    }
    FinalCartComponent.prototype.pchange = function () {
        if (this.pmethod === 'credit') {
            // alert(this.credit);
            if (this.credit < this.tot) {
                // this.cerror = 'Your have insufecient balence!';
            }
        }
        this.ngOnInit();
    };
    FinalCartComponent.prototype.show_accor = function (i) {
        if (this.acord[i]) {
            this.acord[i] = 0;
        }
        else {
            this.acord[i] = 1;
        }
    };
    FinalCartComponent.prototype.removecartitem = function (ci) {
        var tutorialsRef = this.db.list('cart');
        var amount = (this.cart[ci].qty * this.cart[ci].sku.SKU_Price);
        this.tot = this.tot - amount;
        var r = tutorialsRef.remove(this.cart[ci].key);
        this.calculateTotal();
    };
    FinalCartComponent.prototype.checkout = function () {
        var _this = this;
        if (this.pmethod == 'ccard' || this.remaing_pay) {
            if (document.getElementById('card-nonce').value) {
                var r = this.getdata();
                r.subscribe(function (data) {
                    if (data['payment']) {
                        var su_data = data;
                        /*-----vard checkout----*/
                        var remain = 0;
                        if (_this.tot <= 0) {
                            return 0;
                        }
                        if (_this.sameship) {
                            _this.saddress = _this.address;
                        }
                        //apply validation
                        var error = 0;
                        for (var key in _this.address) {
                            var value = _this.address[key];
                            if (!value) {
                                error = 1;
                                _this.address_error[key] = 0;
                            }
                        }
                        //apply validation
                        if (!error) {
                            var today = new Date();
                            var dd = String(today.getDate()).padStart(2, '0');
                            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                            var yyyy = today.getFullYear();
                            var t = dd + '/' + mm + '/' + yyyy;
                            var lcart_1 = [];
                            _this.cart.forEach(function (currentValue, index) {
                                if (currentValue.uid == _this.userId) {
                                    lcart_1.push(currentValue);
                                }
                            });
                            var order = {
                                'date': t,
                                'uid': _this.userId,
                                'tot': _this.tot,
                                'credit_pay': _this.credit_pay,
                                'cart': lcart_1,
                                'address': _this.address,
                                'saddress': _this.saddress,
                                'status': 'Pending',
                                'su_data': su_data,
                            };
                            if (_this.save_next) {
                                console.log(_this.user);
                                _this.user.future = {
                                    'address': _this.address,
                                    'saddress': _this.saddress,
                                    'save_next': _this.save_next,
                                    'sameship': _this.sameship,
                                };
                                var r_1 = _this.db.list('/users').update(_this.userId, _this.user);
                                console.log(r_1);
                            }
                            if (_this.remaing_pay) {
                                _this.user.credit = 0;
                                var r_2 = _this.db.list('/users').update(_this.userId, _this.user);
                                console.log('credit update');
                                console.log(r_2);
                            }
                            if (_this.smethod) {
                                // alert(this.smethod);
                                order['shipping'] = _this.shipping_methods[_this.smethod];
                            }
                            if (_this.pmethod) {
                                order['pmethod'] = _this.pmethod;
                            }
                            console.log(order);
                            var r_3 = _this.db.list('/orderLists').push(order);
                            if (r_3) {
                                _this.cart.forEach(function (currentValue, index) {
                                    if (currentValue.uid == _this.userId) {
                                        var tutorialsRef = _this.db.list('cart');
                                        var r_4 = tutorialsRef.remove(currentValue.key);
                                        lcart_1.push(currentValue);
                                    }
                                });
                                _this.thank = 1;
                                return 0;
                            }
                        }
                        /*-----vard checkout----*/
                    }
                    console.log(data, "hello world");
                });
            }
            else {
                alert("Please validarte card information");
            }
        }
        else {
            var remain = 0;
            if (this.tot <= 0) {
                return 0;
            }
            if (this.sameship) {
                this.saddress = this.address;
            }
            //apply validation
            var error = 0;
            if (this.pmethod == 'credit') {
                // alert(this.credit);
                if (this.credit < this.tot) {
                    this.cerror = 'Your have insufecient balence!';
                    return 0;
                }
                else {
                    remain = this.credit - this.tot;
                }
            }
            for (var key in this.address) {
                var value = this.address[key];
                if (!value) {
                    error = 1;
                    this.address_error[key] = 0;
                }
            }
            //apply validation
            if (!error) {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();
                var t = dd + '/' + mm + '/' + yyyy;
                var lcart_2 = [];
                this.cart.forEach(function (currentValue, index) {
                    if (currentValue.uid == _this.userId) {
                        lcart_2.push(currentValue);
                    }
                });
                var order = {
                    'date': t,
                    'uid': this.userId,
                    'tot': this.tot,
                    'cart': lcart_2,
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
                    var r_5 = this.db.list('/users').update(this.userId, this.user);
                    console.log(r_5);
                }
                if (remain) {
                    this.user.credit = remain;
                    var r_6 = this.db.list('/users').update(this.userId, this.user);
                    console.log('credit update');
                    console.log(r_6);
                }
                if (this.smethod) {
                    order['shipping'] = this.shipping_methods[this.smethod];
                }
                if (this.pmethod) {
                    order['pmethod'] = this.pmethod;
                }
                console.log(order);
                var r = this.db.list('/orderLists').push(order);
                if (r) {
                    this.cart.forEach(function (currentValue, index) {
                        if (currentValue.uid == _this.userId) {
                            var tutorialsRef = _this.db.list('cart');
                            var r_7 = tutorialsRef.remove(currentValue.key);
                            lcart_2.push(currentValue);
                        }
                    });
                    this.thank = 1;
                    return 0;
                }
            }
        } //not card
    }; //checkout function end
    FinalCartComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.tot = 0;
        this.stot = 0;
        if (this.cart) {
            this.cart.forEach(function (currentValue, index) {
                if (currentValue.uid == _this.userId) {
                    console.log(currentValue.sku.SKU_Price + 'x' + currentValue.qty);
                    console.log((currentValue.sku.SKU_Price * currentValue.qty));
                    _this.tot = _this.tot + (currentValue.sku.SKU_Price * currentValue.qty);
                    console.log('I m here' + _this.tot);
                    _this.stot = _this.tot;
                    _this.tot = Number(_this.tot) + Number(_this.samount);
                }
            });
        }
        this.tot = this.tot + this.samount;
    };
    FinalCartComponent.prototype.updateqty = function (i, type) {
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
        }
        else {
            this.cart[i].qty = this.cart[i].qty + 1;
        }
        if (this.cart[i].qty < 0) {
            this.cart[i].qty = 0;
        }
        this.calculateTotal();
    };
    FinalCartComponent.prototype.getdata = function () {
        var amount = this.tot;
        if (this.remaing_pay) {
            amount = this.remaing_pay;
        }
        return this.http.get('https://m2b.foxaf.com/su.php?token=' + document.getElementById('card-nonce').value + '&amount=' + amount);
    };
    FinalCartComponent.prototype.ngOnInit = function () {
        this.credit_pay = 0;
        this.card_error = '';
        this.orderList = JSON.parse(localStorage.getItem('orderData'));
        this.calculateTotal();
        // Set the application ID
        var applicationId = 'sandbox-sq0idb-I4axMUtAU2B3qNMtF5-6Sg';
        // Set the location ID
        var locationId = 'LAJTDYN6XHE7M';
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
                placeholder: '•••• •••• •••• ••••'
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
                methodsSupported: function (methods) {
                    var applePayBtn = document.getElementById('sq-apple-pay');
                    var applePayLabel = document.getElementById('sq-apple-pay-label');
                    var masterpassBtn = document.getElementById('sq-masterpass');
                    var masterpassLabel = document.getElementById('sq-masterpass-label');
                    // Only show the button if Apple Pay for Web is enabled
                    // Otherwise, display the wallet not enabled message.
                    if (methods.applePay === true) {
                        // @ts-ignore
                        applePayBtn.style.display = 'inline-block';
                        // @ts-ignore
                        applePayLabel.style.display = 'none';
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
                cardNonceResponseReceived: function (errors, nonce, cardData) {
                    if (errors) {
                        // Log errors from nonce generation to the Javascript console
                        console.log('Encountered errors:');
                        var errors1 = [];
                        var error_str_1 = '';
                        errors.forEach(function (error) {
                            // errors1.push(error.message);
                            error_str_1 = error_str_1 + '<li>' + error.message + '</li>';
                        });
                        console.log(error_str_1);
                        // this.card_error = error_str;
                        document.getElementById('card_error').innerHTML = error_str_1;
                        //
                        return;
                    }
                    else {
                        document.getElementById('card-nonce').value = nonce;
                        document.getElementById('card_form').style.display = 'none';
                        document.getElementById('su_success').style.display = 'block';
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
                unsupportedBrowserDetected: function () {
                    /* PROVIDE FEEDBACK TO SITE VISITORS */
                },
                /*
                 * callback function: inputEventReceived
                 * Triggered when: visitors interact with SqPaymentForm iframe elements.
                 */
                inputEventReceived: function (inputEvent) {
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
                paymentFormLoaded: function () {
                }
            }
        });
        this.paymentForm.build();
    };
    FinalCartComponent.prototype.requestCardNonce = function (event) {
        // Don't submit the form until SqPaymentForm returns with a nonce
        event.preventDefault();
        // Request a nonce from the SqPaymentForm object
        this.paymentForm.requestCardNonce();
    };
    FinalCartComponent.prototype.ngAfterViewInit = function () { };
    FinalCartComponent.prototype.loadPaymentForm = function () {
        if (!this.formLoaded) {
            this.paymentForm.build();
            this.formLoaded = true;
        }
    };
    FinalCartComponent.prototype.shipping = function () {
        // alert(this.smethod);
        this.samount = this.shipping_methods[this.smethod].price;
        // alert(this.samount);
        this.calculateTotal();
    };
    FinalCartComponent.prototype.applyCredit = function () {
        //alert(this.ucredit);
        if (this.ucredit < this.tot) {
            this.credit_pay = this.ucredit;
            this.remaing_pay = this.tot - this.credit_pay;
            this.pmethod = 'ccard';
            this.ngOnInit();
        }
        else {
            this.credit_pay = this.tot;
            this.remaing_pay = this.tot - this.credit_pay;
        }
    };
    FinalCartComponent.prototype.ngOnDestroy = function () {
    };
    FinalCartComponent.prototype.getUserByOption = function () {
        var _this = this;
        this.ownEmail = JSON.parse(localStorage.getItem('user'));
        if (this.ownEmail['email']) {
            this.supplierSer.getUsersByOption('email', this.ownEmail['email']).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            })).subscribe(function (users) {
                _this.user = users[0];
                if (users[0]['future']) {
                    _this.address = users[0]['future']['address'];
                    _this.saddress = users[0]['future']['saddress'];
                    _this.save_next = users[0]['future']['save_next'];
                    _this.sameship = users[0]['future']['sameship'];
                }
                _this.address.email = users[0].email.toString();
                _this.address['phone'] = users[0].phoneNo.toString();
                _this.ucredit = parseInt(users[0].credit.toString());
                _this.credit = users[0].credit.toString();
            });
        }
    };
    FinalCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-final-cart',
            template: __webpack_require__(/*! ./final-cart.component.html */ "./src/app/pages/cart/final-cart/final-cart.component.html"),
            styles: [__webpack_require__(/*! ./final-cart.component.css */ "./src/app/pages/cart/final-cart/final-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_order_list_service__WEBPACK_IMPORTED_MODULE_5__["OrderListService"],
            _services_email_service__WEBPACK_IMPORTED_MODULE_11__["EmailService"],
            _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_7__["SupplierOrderListService"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_8__["SupplierService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabase"],
            _services_email_service__WEBPACK_IMPORTED_MODULE_11__["EmailService"]])
    ], FinalCartComponent);
    return FinalCartComponent;
}());



/***/ }),

/***/ "./src/app/pages/chat/chat.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/chat/chat.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/chat/chat.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/chat/chat.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header currentAction=\"V:02B\" currentLink=\"/home\" previousAction=\"Home\" previousLink=\"/home/products\"></app-header>\r\n<div id=\"buy_back\">\r\n    <div class=\"container \" id=\"chat_box\">\r\n        <div class=\"my_m2b_head\">\r\n      <h2>Chat</h2>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"bd-example\">\r\n                <div id=\"accordion\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n                            <div class=\"mb-0\">\r\n                                <div class=\"chat_list row\" *ngFor=\"let messages of myChatList let i=index\">\r\n                                    <div class=\"col-sm-6 order_no\">\r\n                                        <div class=\"chat_people\" [routerLink]=\"['./messages']\" [queryParams]=\"{ userId: messages.userOrderID }\" (click)=\"onClick(messages.key)\">\r\n                                        <div class=\"chat_img \" [ngClass]=\"{'chat_unread': messages.userUnread > 0}\">\r\n                                            <span class=\"badge badge-primary unread\" *ngIf=\"messages.userUnread > 0\">{{messages.userUnread}}</span>\r\n                                            <img src=\"https://ptetutorials.com/images/user-profile.png\" alt=\"mani\"> </div>\r\n                                            <h5>Supplier Email: {{messages.supplierEmail}}</h5>\r\n                                        <p *ngIf=\"last\">{{message.message}}\r\n                                                </p>\r\n                                    </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6 shipped_down\">\r\n                                        <div class=\"chat_ib\">\r\n                                            \r\n                                            <div *ngFor=\"let message of messages.messages; let last = last\">\r\n                                                <b class=\"chat_date\" *ngIf=\"last\">{{message.timeSent | date: 'dd/MM/yyyy'}}</b>\r\n                                                \r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/chat/chat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = /** @class */ (function () {
    function ChatComponent(supplierOrderListService, supplierService) {
        this.supplierOrderListService = supplierOrderListService;
        this.supplierService = supplierService;
        this.userName = "okk";
        this.checkChild = "email";
        this.myChatList = [];
        this.supplier = [];
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.getChatList();
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.getChatList = function () {
        var _this = this;
        var count = 0;
        this.supplierOrderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (supplierOrderList) {
            if (count > 0) {
                _this.myChatList = [];
            }
            count++;
            supplierOrderList.sort(function (a, b) { return (+b.lastAddedMsgDate - +a.lastAddedMsgDate); });
            supplierOrderList.forEach(function (order) {
                if (_this.ownEmail == order.userEmail) {
                    _this.myChatList.push(order);
                }
            });
            console.log(_this.myChatList);
        });
    };
    ChatComponent.prototype.onClick = function (key) {
        var index = this.myChatList.findIndex(function (x) { return x.key == key; });
        this.myChatList[index].userUnread = 0;
        this.supplierOrderListService.updateOrderList(this.myChatList[index].key, this.myChatList[index]);
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/pages/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/pages/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_2__["SupplierOrderListService"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_1__["SupplierService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/pages/chat/messages/messages.component.css":
/*!************************************************************!*\
  !*** ./src/app/pages/chat/messages/messages.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.btn {\r\n    padding: 10px;\r\n}\r\n\r\n.fa {\r\n    font-size: 20px;\r\n}\r\n\r\n.card::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 8px;\r\n    background: #ddd;\r\n}\r\n\r\n.balon1,\r\n.balon2 {\r\n    margin-top: 5px !important;\r\n    margin-bottom: 5px !important;\r\n}\r\n\r\n.balon1 a {\r\n    background: #42a5f5;\r\n    color: #fff !important;\r\n    border-radius: 20px 20px 3px 20px;\r\n    display: block;\r\n    max-width: 75%;\r\n    padding: 7px 13px 7px 13px;\r\n    float: right;\r\n}\r\n\r\n.timeStyle {\r\n    position: relative;\r\n    bottom: -0.8em;\r\n    display: block;\r\n    font-size: .750rem;\r\n    color: rgba(84, 110, 122, 1.0);\r\n}\r\n\r\n.balon2 a {\r\n    background: #f1f1f1;\r\n    color: #000 !important;\r\n    border-radius: 20px 20px 20px 3px;\r\n    display: block;\r\n    max-width: 75%;\r\n    padding: 7px 13px 7px 13px;\r\n    float: left;\r\n}\r\n\r\n.balon2:before {\r\n    content: attr(data-is);\r\n    position: absolute;\r\n    left: 13px;\r\n    bottom: -0.8em;\r\n    display: block;\r\n    font-size: .750rem;\r\n    color: rgba(84, 110, 122, 1.0);\r\n}\r\n\r\n.online {\r\n    color: green;\r\n    font-size: 65%;\r\n}\r\n\r\n.b1 {\r\n    position: absolute;\r\n    right: 0rem;\r\n}\r\n\r\n.balon1[_ngcontent-c1], .balon2[_ngcontent-c1] {\r\n    padding: 29px 19px 13px 17px !important;\r\n}\r\n\r\n.balon1[_ngcontent-c1] a[_ngcontent-c1] {\r\n    font-size: 13px;\r\n}\r\n\r\n.messages_info[_ngcontent-c1] p[_ngcontent-c1] {\r\n    font-size: 13px;\r\n    padding: 0 19px 0 !important;\r\n}\r\n\r\n.balon2[_ngcontent-c1] a[_ngcontent-c1] {\r\n    font-size: 13px;\r\n}\r\n\r\n.chatscroll{\r\n    overflow-y: auto;\r\n    height: 56vh;\r\n    padding: 0 0 23px 0 !important;\r\n}\r\n\r\n.main_scrollbar{\r\nbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 6px 10px 0 rgba(0, 0, 0, 0.01); overflow: hidden; height: 100vh;\r\n}\r\n\r\n@media(max-width: 767px){\r\n    .container{\r\n        width: auto;\r\n    }\r\n    .balon1[_ngcontent-c1][_ngcontent-c1], .balon2[_ngcontent-c1][_ngcontent-c1] {\r\n    padding: 16px 19px 0px 17px !important;\r\n}\r\n    .balon2[_ngcontent-c1] a[_ngcontent-c1],.balon1[_ngcontent-c1] a[_ngcontent-c1] {\r\n\r\n    max-width: auto;\r\n    float: none;\r\n}\r\n    .balon1[_ngcontent-c1][_ngcontent-c1] a[_ngcontent-c1][_ngcontent-c1] {\r\n    font-size: 11px;\r\n}\r\n    .chatscroll[_ngcontent-c1] {\r\n        height: 62vh;\r\n    }\r\n    .msger-inputarea textarea {\r\n        padding: 10px 92px 0 13px;\r\n        font-size: 15px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7O0FBRUQ7O0lBRUksMkJBQTJCO0lBQzNCLDhCQUE4QjtDQUNqQzs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsK0JBQStCO0NBQ2xDOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsWUFBWTtDQUNmOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsK0JBQStCO0NBQ2xDOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztBQUNEO0lBQ0ksd0NBQXdDO0NBQzNDOztBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtDQUNoQzs7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsK0JBQStCO0NBQ2xDOztBQUNEO0FBQ0EsOEVBQThFLENBQUMsaUJBQWlCLENBQUMsY0FBYztDQUM5Rzs7QUFJRDtJQUNJO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7SUFDQSx1Q0FBdUM7Q0FDMUM7SUFDRzs7SUFFQSxnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmO0lBQ0c7SUFDQSxnQkFBZ0I7Q0FDbkI7SUFDRztRQUNJLGFBQWE7S0FDaEI7SUFDRDtRQUNJLDBCQUEwQjtRQUMxQixnQkFBZ0I7S0FDbkI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5idG4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLmJhbG9uMSxcclxuLmJhbG9uMiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFsb24xIGEge1xyXG4gICAgYmFja2dyb3VuZDogIzQyYTVmNTtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggM3B4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgcGFkZGluZzogN3B4IDEzcHggN3B4IDEzcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi50aW1lU3R5bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAtMC44ZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjc1MHJlbTtcclxuICAgIGNvbG9yOiByZ2JhKDg0LCAxMTAsIDEyMiwgMS4wKTtcclxufVxyXG5cclxuLmJhbG9uMiBhIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDIwcHggM3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDc1JTtcclxuICAgIHBhZGRpbmc6IDdweCAxM3B4IDdweCAxM3B4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5iYWxvbjI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1pcyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG4gICAgYm90dG9tOiAtMC44ZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjc1MHJlbTtcclxuICAgIGNvbG9yOiByZ2JhKDg0LCAxMTAsIDEyMiwgMS4wKTtcclxufVxyXG5cclxuLm9ubGluZSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXNpemU6IDY1JTtcclxufVxyXG5cclxuLmIxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcmVtO1xyXG59XHJcbi5iYWxvbjFbX25nY29udGVudC1jMV0sIC5iYWxvbjJbX25nY29udGVudC1jMV0ge1xyXG4gICAgcGFkZGluZzogMjlweCAxOXB4IDEzcHggMTdweCAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWxvbjFbX25nY29udGVudC1jMV0gYVtfbmdjb250ZW50LWMxXSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLm1lc3NhZ2VzX2luZm9bX25nY29udGVudC1jMV0gcFtfbmdjb250ZW50LWMxXSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE5cHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWxvbjJbX25nY29udGVudC1jMV0gYVtfbmdjb250ZW50LWMxXSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmNoYXRzY3JvbGx7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA1NnZoO1xyXG4gICAgcGFkZGluZzogMCAwIDIzcHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWluX3Njcm9sbGJhcntcclxuYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEwKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wMSk7IG92ZXJmbG93OiBoaWRkZW47IGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC5iYWxvbjFbX25nY29udGVudC1jMV1bX25nY29udGVudC1jMV0sIC5iYWxvbjJbX25nY29udGVudC1jMV1bX25nY29udGVudC1jMV0ge1xyXG4gICAgcGFkZGluZzogMTZweCAxOXB4IDBweCAxN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgIC5iYWxvbjJbX25nY29udGVudC1jMV0gYVtfbmdjb250ZW50LWMxXSwuYmFsb24xW19uZ2NvbnRlbnQtYzFdIGFbX25nY29udGVudC1jMV0ge1xyXG5cclxuICAgIG1heC13aWR0aDogYXV0bztcclxuICAgIGZsb2F0OiBub25lO1xyXG59XHJcbiAgICAuYmFsb24xW19uZ2NvbnRlbnQtYzFdW19uZ2NvbnRlbnQtYzFdIGFbX25nY29udGVudC1jMV1bX25nY29udGVudC1jMV0ge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbiAgICAuY2hhdHNjcm9sbFtfbmdjb250ZW50LWMxXSB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MnZoO1xyXG4gICAgfVxyXG4gICAgLm1zZ2VyLWlucHV0YXJlYSB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA5MnB4IDAgMTNweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/chat/messages/messages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/chat/messages/messages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header previousAction=\"Chats\" previousLink=\"/chat\"></app-header>\r\n<div class=\"container \" id=\"message__box\"> \r\n    <div class=\"\" style=\"margin-top: 0px  !important; \">\r\n        <div class=\"row m-0 p-0 position-relative\">\r\n            <div class=\"col-12 p-0 m-0 position-absolute\" style=\"right: 0px;\">\r\n                <div class=\"card border-0 rounded main_scrollbar\">\r\n\r\n                    <div class=\"msger-header\">\r\n\r\n                        <div class=\"msger-header-title\">\r\n                            <img src=\"../../../assets/img/admin.png\" />\r\n\r\n                        <b> Live Support Chat <br> </b>\r\n                        <span>online <i></i></span>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"card bg-sohbet border-0 m-0 p-0 chatscroll\" >\r\n                        <div id=\"sohbet\" class=\"card border-0 m-0 p-0 position-relative bg-transparent\" #scrollMe>\r\n\r\n                            <div *ngFor=\"let messages of chats;\">\r\n                                <div *ngFor=\"let message of messages.messages;\">\r\n                                    <div class=\"\" [ngClass]=\"message.senderEmail === ownEmail? 'balon1':'balon2'\">\r\n                                        <a>{{message.message}}</a>\r\n                                    </div><br>\r\n                                    <div class=\"messages_info\">\r\n                                        <p class=\" p-2 m-0 \" [ngClass]=\"message.senderEmail === ownEmail? 'b1':'position-relative'\">\r\n                                            {{timeagos(+message.timeSent)}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\" msger-inputarea\" >\r\n                            <form>\r\n                                 <textarea placeholder=\"Type a message...\" name=\"message\" class=\"textarea\" [(ngModel)]=\"message\" (keydown)=\"handleSubmit($event)\"></textarea>\r\n                            \r\n                            <button class=\"msger-send-btn\" (click)=\"send()\">Send</button>\r\n                            </form>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/chat/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/chat/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! javascript-time-ago */ "./node_modules/javascript-time-ago/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! javascript-time-ago/locale/en */ "./node_modules/javascript-time-ago/locale/en/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_supplier_order_list_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/supplier-order-list.model */ "./src/app/models/supplier-order-list.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








javascript_time_ago__WEBPACK_IMPORTED_MODULE_1__["default"].addLocale(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_2___default.a);
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(supplierOrderListService, actRoute, supplierSer) {
        this.supplierOrderListService = supplierOrderListService;
        this.actRoute = actRoute;
        this.supplierSer = supplierSer;
        this.message = "";
        this.messageObj = new _models_supplier_order_list_model__WEBPACK_IMPORTED_MODULE_7__["SupplierOrderListModel"]();
        this.msgStruct = {
            message: '',
            timeSent: '',
            senderId: '',
            senderEmail: ''
        };
        this.myMessages = new Array();
        this.checkChild = "userOrderID";
        this.userData = {
            nameCheck: '',
            key: ''
        };
        this.timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_1__["default"]('en-US');
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localStorageData = JSON.parse(localStorage.getItem("user"));
        this.ownEmail = this.localStorageData.email;
        this.actRoute.queryParams.subscribe(function (quer) {
            _this.id = quer.userId;
            console.log(_this.id);
            _this.getData();
        });
        this.getUserInfo();
        this.scrollToBottom();
    };
    MessagesComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    MessagesComponent.prototype.send = function () {
        var _this = this;
        this.messageObj = this.chats;
        console.log(this.chats);
        if (this.message === "") {
            console.log("Empty Message!");
        }
        else {
            setTimeout(function () {
                _this.msgStruct = {
                    message: _this.message, timeSent: Date.now().toString(), senderId: _this.getUserInfo().key, senderEmail: _this.ownEmail
                };
                console.log(_this.msgStruct);
                console.log(_this.myMessages);
                console.log(_this.messageObj);
                _this.messageObj[0].messages.push(_this.msgStruct);
                _this.messageObj[0].supplierUnread++;
                _this.messageObj[0].userUnread = 0;
                _this.messageObj[0].lastAddedMsgDate = Date.now().toString();
                console.log(_this.messageObj);
                console.log(_this.myMessages);
                _this.supplierOrderListService.updateOrderList(_this.myMessages[0], _this.messageObj[0]);
                _this.messageObj = new _models_supplier_order_list_model__WEBPACK_IMPORTED_MODULE_7__["SupplierOrderListModel"]();
                _this.message = "";
            }, 500);
        }
    };
    MessagesComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.supplierSer.getUsersByOption("email", this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.userData.key = user.key;
                _this.userEmail = user.email;
                console.log(_this.userData.key);
                _this.userData.nameCheck = user.name;
                console.log(_this.userData.nameCheck);
            });
        });
        return this.userData;
    };
    MessagesComponent.prototype.timeagos = function (time) {
        return this.timeAgo.format(time);
    };
    MessagesComponent.prototype.scrollToBottom = function () {
        try {
            this.msgContents.nativeElement.scrollTop = this.msgContents.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    MessagesComponent.prototype.getData = function () {
        var _this = this;
        this.supplierOrderListService.getOrderListsByOption(this.checkChild, this.id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (chat) {
            _this.chats = chat;
            console.log(_this.chats);
            chat.forEach(function (item) {
                _this.myMessages.push(item.key);
            });
            console.log(_this.myMessages);
        });
    };
    MessagesComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode === 13) {
            this.send();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessagesComponent.prototype, "msgContents", void 0);
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/pages/chat/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/pages/chat/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_4__["SupplierOrderListService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_supplier_service__WEBPACK_IMPORTED_MODULE_5__["SupplierService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/courier/courier-cash-out/courier-cash-out.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/courier/courier-cash-out/courier-cash-out.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top: 60px;\r\n\r\n }\r\n\r\n .heading{\r\n    text-align: center;\r\n }\r\n\r\n .myCard{\r\n    padding-bottom: 60px;\r\n}\r\n\r\n .card-body{\r\n    max-height: 450px; \r\n    overflow: scroll;\r\n}\r\n\r\n .styling{\r\n    font-size:0.8em;\r\n}\r\n\r\n .amount{\r\n    font-size:0.8em;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cmllci9jb3VyaWVyLWNhc2gtb3V0L2NvdXJpZXItY2FzaC1vdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjs7RUFFcEI7O0NBRUQ7SUFDRyxtQkFBbUI7RUFDckI7O0NBQ0Y7SUFDSSxxQkFBcUI7Q0FDeEI7O0NBR0Q7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztDQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztDQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3VyaWVyL2NvdXJpZXItY2FzaC1vdXQvY291cmllci1jYXNoLW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG5cclxuIH1cclxuXHJcbiAuaGVhZGluZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuLm15Q2FyZHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG5cclxuLmNhcmQtYm9keXtcclxuICAgIG1heC1oZWlnaHQ6IDQ1MHB4OyBcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5zdHlsaW5ne1xyXG4gICAgZm9udC1zaXplOjAuOGVtO1xyXG59XHJcblxyXG4uYW1vdW50e1xyXG4gICAgZm9udC1zaXplOjAuOGVtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/courier/courier-cash-out/courier-cash-out.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/courier/courier-cash-out/courier-cash-out.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header currentAction=\"Maintenance\" currentLink=\"/maintenance\" previousAction=\"Order List\" previousLink=\"/courier-order-list\"></app-header>\r\n<div class=\"container\">\r\n\r\n    <div class=\"heading row\">\r\n        <div class=\"col-12\">\r\n            <p class=\"p-0 m-0\">Your Balance</p>\r\n            <h3 class=\"pb-3\">$7500</h3>\r\n            <button class=\"btn btn-info btn-lg\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i> Cash Out</button>\r\n            <p>PAYMENT SCHEDULED: 10/1</p>\r\n        </div>\r\n    </div>\r\n    <p class=\"p-0 m-0\">Posted</p>\r\n    <div class=\" col-12 mb-5\">\r\n        <div class=\"card card-shadow mb-4\">\r\n            <div class=\"card-body\">\r\n                <ul class=\"list-group\">\r\n                    <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n                        <div class=\"row p-0 m-0\">\r\n                            <div class=\"col-12 p-0\">\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\"><strong>$10.00</strong></p><br>\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\">$210.16</p>\r\n                                <p class=\"styling pb-3 pl-3 m-0\">Sep 29, 8:47 PM</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n                        <div class=\"row p-0 m-0\">\r\n                            <div class=\"col-12 p-0\">\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\"><strong>$10.00</strong></p><br>\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\">$210.16</p>\r\n                                <p class=\"styling pb-3 pl-3 m-0\">Sep 29, 8:47 PM</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n                        <div class=\"row p-0 m-0\">\r\n                            <div class=\"col-12 p-0\">\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\"><strong>$10.00</strong></p><br>\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\">$210.16</p>\r\n                                <p class=\"styling pb-3 pl-3 m-0\">Sep 29, 8:47 PM</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n                        <div class=\"row p-0 m-0\">\r\n                            <div class=\"col-12 p-0\">\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\"><strong>$10.00</strong></p><br>\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\">$210.16</p>\r\n                                <p class=\"styling pb-3 pl-3 m-0\">Sep 29, 8:47 PM</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n                        <div class=\"row p-0 m-0\">\r\n                            <div class=\"col-12 p-0\">\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\"><strong>$10.00</strong></p><br>\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\">$210.16</p>\r\n                                <p class=\"styling pb-3 pl-3 m-0\">Sep 29, 8:47 PM</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n                        <div class=\"row p-0 m-0\">\r\n                            <div class=\"col-12 p-0\">\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\"><strong>$10.00</strong></p><br>\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\">$210.16</p>\r\n                                <p class=\"styling pb-3 pl-3 m-0\">Sep 29, 8:47 PM</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n                        <div class=\"row p-0 m-0\">\r\n                            <div class=\"col-12 p-0\">\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\"><strong>$10.00</strong></p><br>\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\">$210.16</p>\r\n                                <p class=\"styling pb-3 pl-3 m-0\">Sep 29, 8:47 PM</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n                        <div class=\"row p-0 m-0\">\r\n                            <div class=\"col-12 p-0\">\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\"><strong>$10.00</strong></p><br>\r\n                                <p class=\"amount m-0 pr-3\" style=\"float:right;\">$210.16</p>\r\n                                <p class=\"styling pb-3 pl-3 m-0\">Sep 29, 8:47 PM</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/courier/courier-cash-out/courier-cash-out.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/courier/courier-cash-out/courier-cash-out.component.ts ***!
  \******************************************************************************/
/*! exports provided: CourierCashOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierCashOutComponent", function() { return CourierCashOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourierCashOutComponent = /** @class */ (function () {
    function CourierCashOutComponent() {
    }
    CourierCashOutComponent.prototype.ngOnInit = function () {
    };
    CourierCashOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courier-cash-out',
            template: __webpack_require__(/*! ./courier-cash-out.component.html */ "./src/app/pages/courier/courier-cash-out/courier-cash-out.component.html"),
            styles: [__webpack_require__(/*! ./courier-cash-out.component.css */ "./src/app/pages/courier/courier-cash-out/courier-cash-out.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourierCashOutComponent);
    return CourierCashOutComponent;
}());



/***/ }),

/***/ "./src/app/pages/courier/courier-map/courier-map.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/courier/courier-map/courier-map.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top: 60px;\r\n    text-align: center;\r\n    \r\n }\r\n agm-map {\r\n    height: 650px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cmllci9jb3VyaWVyLW1hcC9jb3VyaWVyLW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjs7RUFFckI7Q0FDRDtJQUNHLGNBQWM7R0FDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXJpZXIvY291cmllci1tYXAvY291cmllci1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gfVxyXG4gYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/courier/courier-map/courier-map.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/courier/courier-map/courier-map.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <app-header currentAction=\"Order List\" currentLink = \"/courier-order-list\" previousAction=\"Log Out\" previousLink=\"/auth/login\"></app-header>\r\n  <div class=\"container\">\r\n    \r\n\r\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n        </agm-map>\r\n\r\n    </div>\r\n  <app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/courier/courier-map/courier-map.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/courier/courier-map/courier-map.component.ts ***!
  \********************************************************************/
/*! exports provided: CourierMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierMapComponent", function() { return CourierMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourierMapComponent = /** @class */ (function () {
    function CourierMapComponent() {
        this.zoom = 5;
        this.lat = 40.7128;
        this.lng = 74.0060;
    }
    CourierMapComponent.prototype.ngOnInit = function () {
    };
    CourierMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courier-map',
            template: __webpack_require__(/*! ./courier-map.component.html */ "./src/app/pages/courier/courier-map/courier-map.component.html"),
            styles: [__webpack_require__(/*! ./courier-map.component.css */ "./src/app/pages/courier/courier-map/courier-map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourierMapComponent);
    return CourierMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/courier/courier-order-list/courier-order-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/courier/courier-order-list/courier-order-list.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top: 60px;\r\n    text-align: center;\r\n }\r\n.myCard{\r\n    padding-bottom: 60px;\r\n}\r\n.card-body{\r\n    max-height: 650px; \r\n    overflow: scroll;\r\n}\r\n.styling{\r\n    font-size:0.8em;\r\n}\r\n.satisfied{\r\n    font-size:0.8em;\r\n    color:green;\r\n}\r\n.returns{\r\n    font-size:0.8em;\r\n    color:red;    \r\n}\r\nagm-map {\r\n    height: 100px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cmllci9jb3VyaWVyLW9yZGVyLWxpc3QvY291cmllci1vcmRlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7SUFDSSxxQkFBcUI7Q0FDeEI7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksY0FBYztHQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY291cmllci9jb3VyaWVyLW9yZGVyLWxpc3QvY291cmllci1vcmRlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbi5teUNhcmR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NTBweDsgXHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4uc3R5bGluZ3tcclxuICAgIGZvbnQtc2l6ZTowLjhlbTtcclxufVxyXG5cclxuLnNhdGlzZmllZHtcclxuICAgIGZvbnQtc2l6ZTowLjhlbTtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG59XHJcblxyXG4ucmV0dXJuc3tcclxuICAgIGZvbnQtc2l6ZTowLjhlbTtcclxuICAgIGNvbG9yOnJlZDsgICAgXHJcbn1cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/courier/courier-order-list/courier-order-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/courier/courier-order-list/courier-order-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header currentAction=\"Cash Out\" currentLink=\"/courier-cashout\" previousAction=\"Map\" previousLink=\"/courier-map\"></app-header>\r\n<div class=\"container\">\r\n  <p class=\"p-0 m-0\">Order Lists</p>\r\n  <div class=\" col-12 mb-5\">\r\n    <div class=\"card card-shadow mb-4\">\r\n      <div class=\"card-body\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n            <div class=\"row p-0 m-0\">\r\n              <div class=\"col-4 m-1 p-0\">\r\n                  <img src=\"../../../../assets/img/map.png\" alt=\"\" style=\"max-width: 100%\"/>\r\n              </div>\r\n              <div class=\"col-6 p-0\">\r\n                <p class=\"p-0 pt-3 m-0 header\">ABC Repair Shop</p>\r\n                <p class=\"p-0 m-0 styling\">123 6th Ave NY NY</p>\r\n                <p class=\"p-0 m-0 styling\">Jason-971-123-4567 </p>\r\n                <p class=\"p-0 m-0 satisfied\">Satisfied</p>\r\n              </div>\r\n              <div class=\"col-1 p-0 icon\"><i class=\"fa fa-phone fa-3x pt-4\" aria-hidden=\"true\"></i></div>\r\n            </div>\r\n          </li>\r\n          <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n              <div class=\"row p-0 m-0\">\r\n                <div class=\"col-4  m-1 p-0\" >\r\n                    <img src=\"../../../../assets/img/map.png\" alt=\"\" style=\"max-width: 100%\"/>\r\n                </div>\r\n                <div class=\"col-6 p-0\">\r\n                  <p class=\"p-0 pt-3 m-0 header\">ABC Repair Shop</p>\r\n                  <p class=\"p-0 m-0 styling\">123 6th Ave NY NY</p>\r\n                  <p class=\"p-0 m-0 styling\">Jason-971-123-4567 </p>\r\n                  <p class=\"p-0 m-0 satisfied\">Satisfied</p>\r\n                </div>\r\n                <div class=\"col-1 p-0 icon\"><i class=\"fa fa-phone fa-3x pt-4\" aria-hidden=\"true\"></i></div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n                <div class=\"row p-0 m-0\">\r\n                  <div class=\"col-4 m-1 p-0\">\r\n                      <img src=\"../../../../assets/img/map.png\" alt=\"\" style=\"max-width: 100%\"/>\r\n                  </div>\r\n                  <div class=\"col-6 p-0\">\r\n                    <p class=\"p-0 pt-3 m-0 header\">ABC Repair Shop</p>\r\n                    <p class=\"p-0 m-0 styling\">123 6th Ave NY NY</p>\r\n                    <p class=\"p-0 m-0 styling\">Jason-971-123-4567 </p>\r\n                    <p class=\"p-0 m-0 satisfied\">Satisfied</p>\r\n                  </div>\r\n                  <div class=\"col-1 p-0 icon\"><i class=\"fa fa-phone fa-3x pt-4\" aria-hidden=\"true\"></i></div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n                  <div class=\"row p-0 m-0\">\r\n                    <div class=\"col-4 m-1 p-0\">\r\n                        <img src=\"../../../../assets/img/map.png\" alt=\"\" style=\"max-width: 100%\"/>\r\n                    </div>\r\n                    <div class=\"col-6 p-0\">\r\n                      <p class=\"p-0 pt-3 m-0 header\">ABC Repair Shop</p>\r\n                      <p class=\"p-0 m-0 styling\">123 6th Ave NY NY</p>\r\n                      <p class=\"p-0 m-0 styling\">Jason-971-123-4567 </p>\r\n                      <p class=\"p-0 m-0 satisfied\">Satisfied</p>\r\n                    </div>\r\n                    <div class=\"col-1 p-0 icon\"><i class=\"fa fa-phone fa-3x pt-4\" aria-hidden=\"true\"></i></div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item justify-content-between p-0 m-0\">\r\n                    <div class=\"row p-0 m-0\">\r\n                      <div class=\"col-4 m-1 p-0\">\r\n                          <img src=\"../../../../assets/img/map.png\" alt=\"\" style=\"max-width: 100%\"/>\r\n                      </div>\r\n                      <div class=\"col-6 p-0\">\r\n                        <p class=\"p-0 pt-3 m-0 header\">ABC Repair Shop</p>\r\n                        <p class=\"p-0 m-0 styling\">123 6th Ave NY NY</p>\r\n                        <p class=\"p-0 m-0 styling\">Jason-971-123-4567 </p>\r\n                        <p class=\"p-0 m-0 satisfied\">Satisfied</p>\r\n                      </div>\r\n                      <div class=\"col-1 p-0 icon\"><i class=\"fa fa-phone fa-3x pt-4\" aria-hidden=\"true\"></i></div>\r\n                    </div>\r\n                  </li>\r\n\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/courier/courier-order-list/courier-order-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/courier/courier-order-list/courier-order-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CourierOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierOrderListComponent", function() { return CourierOrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourierOrderListComponent = /** @class */ (function () {
    function CourierOrderListComponent() {
        this.zoom = 8;
        this.lat = 30.3753;
        this.lng = 69.3451;
    }
    CourierOrderListComponent.prototype.ngOnInit = function () {
    };
    CourierOrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courier-order-list',
            template: __webpack_require__(/*! ./courier-order-list.component.html */ "./src/app/pages/courier/courier-order-list/courier-order-list.component.html"),
            styles: [__webpack_require__(/*! ./courier-order-list.component.css */ "./src/app/pages/courier/courier-order-list/courier-order-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourierOrderListComponent);
    return CourierOrderListComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/category-tab/category-tab.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/home/category-tab/category-tab.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productInfoIcon {\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n\r\n/*\r\n.scrollable {\r\n    overflow: scroll;\r\n}\r\n*/\r\n\r\n@media screen and (max-width: 552px) {\r\n    .smallscreen {\r\n        width: 130px;\r\n        font-size: 10px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n    .smallscreen {\r\n        width: 100px !important;\r\n    }\r\n    .mblescreen a,\r\n    p {\r\n        font-size: 10px;\r\n    }\r\n}\r\n\r\n.card-padding-ashlar {\r\n    padding: 0.5rem;\r\n}\r\n\r\n.nav-tabs {\r\n    border: none !important;\r\n}\r\n\r\n.bgColor {\r\n    background-color: #FED001;\r\n    color: white;\r\n}\r\n\r\n.beautifyService {\r\n    background-color: white !important;\r\n}\r\n\r\n.beautifyService img {\r\n    min-height: 130px;\r\n    max-height: 130px;\r\n}\r\n\r\n.beautifyService h5 {\r\n    text-align: center;\r\n    font-size: 12px;\r\n}\r\n\r\n.beautifyService .card {\r\n    border: none;\r\n}\r\n\r\n.custom-height {\r\n    height: 160px;\r\n}\r\n\r\n.icon {\r\n    font-size: 30px;\r\n    color: #8b39ef;\r\n}\r\n\r\n.mblescreen p {\r\n    font-size: 12px;\r\n}\r\n\r\n.mblescreen div {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n.active {\r\n    -webkit-transform: scale(0.95);\r\n            transform: scale(0.95);\r\n    border-style: ridge;\r\n    border-width: 5px;\r\n}\r\n\r\n.p2 {\r\n    padding-top: .5rem!important;\r\n    padding: 0px;\r\n    float: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jYXRlZ29yeS10YWIvY2F0ZWdvcnktdGFiLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztDQUNkOztBQUVEOzs7O0VBSUU7O0FBRUY7SUFDSTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7S0FDbkI7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksd0JBQXdCO0tBQzNCO0lBQ0Q7O1FBRUksZ0JBQWdCO0tBQ25CO0NBQ0o7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1DQUFtQztDQUN0Qzs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY2F0ZWdvcnktdGFiL2NhdGVnb3J5LXRhYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RJbmZvSWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKlxyXG4uc2Nyb2xsYWJsZSB7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbiovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTJweCkge1xyXG4gICAgLnNtYWxsc2NyZWVuIHtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gICAgLnNtYWxsc2NyZWVuIHtcclxuICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYmxlc2NyZWVuIGEsXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLXBhZGRpbmctYXNobGFyIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLm5hdi10YWJzIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmdDb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVEMDAxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmVhdXRpZnlTZXJ2aWNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZWF1dGlmeVNlcnZpY2UgaW1nIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTMwcHg7XHJcbn1cclxuXHJcbi5iZWF1dGlmeVNlcnZpY2UgaDUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYmVhdXRpZnlTZXJ2aWNlIC5jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmN1c3RvbS1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICM4YjM5ZWY7XHJcbn1cclxuXHJcbi5tYmxlc2NyZWVuIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubWJsZXNjcmVlbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiByaWRnZTtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG59XHJcblxyXG4ucDIge1xyXG4gICAgcGFkZGluZy10b3A6IC41cmVtIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGZsb2F0OiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/category-tab/category-tab.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/home/category-tab/category-tab.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\">\r\n    <div class=\"row grid-view\">\r\n\r\n        <div class=\"col-6 col-sm-3 beautifyService \" [routerLink]=\"['/basic-cart']\" [queryParams]=\"{ productId: product.id }\" *ngFor=\"let product of products; let i = index\" [hidden]=\"error\">\r\n\r\n            <div class=\"card-deck p-0 m-1 custom-height\">\r\n                <div class=\"card p-0\">\r\n                    <img class=\"card-img-top img-fluid\" src=\"{{product.path}}\" alt=\"Card image cap\">\r\n                    <div class=\"card-body p2\">\r\n                        <h5 class=\"card-title m-0\">{{product.product_name}}</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<div [hidden]=\"!error\">Not Found !!!</div>"

/***/ }),

/***/ "./src/app/pages/home/category-tab/category-tab.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/home/category-tab/category-tab.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTabComponent", function() { return CategoryTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryTabComponent = /** @class */ (function () {
    function CategoryTabComponent(actRoute, categoryService, productService, router) {
        this.actRoute = actRoute;
        this.categoryService = categoryService;
        this.productService = productService;
        this.router = router;
        this.id = "";
        this.checkChild = "cat_id";
        this.error = false;
        this.currentProduct = new Array();
        this.cat = "";
        console.log(this.actRoute.snapshot.queryParamMap.get('cOut'));
        this.coutId = this.actRoute.snapshot.queryParamMap.get('cOut');
        this.getAllData();
        // this.getData();
        if (this.coutId) {
            localStorage.removeItem('orderData2');
        }
    }
    CategoryTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (quer) {
            console.log(quer.categoryId === '');
            if (Object.keys(quer).length === 0 && quer.constructor === Object) {
                _this.cat = '';
                _this.router.navigateByUrl('/home/products?categoryId=' + _this.id);
            }
            else if (quer.categoryId == undefined || quer.categoryId === '') {
                _this.cat = '';
                _this.router.navigateByUrl('/home/products?categoryId=' + _this.id);
            }
            else {
                _this.cat = '123';
                _this.id = quer.categoryId;
                _this.getData();
            }
        });
    };
    CategoryTabComponent.prototype.getAllData = function () {
        var _this = this;
        this.categoryService.getCategoriesList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (categories) {
            _this.id = categories[0].key;
            if (_this.cat == '') {
                _this.router.navigateByUrl('/home/products?categoryId=' + _this.id);
            }
            console.log(categories);
            console.log(_this.id);
            _this.getData();
        });
    };
    CategoryTabComponent.prototype.getData = function () {
        var _this = this;
        this.productService.getProductbycat(this.checkChild, this.id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (products) {
            _this.products = products;
            console.log(_this.products);
        });
    };
    CategoryTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-tab',
            template: __webpack_require__(/*! ./category-tab.component.html */ "./src/app/pages/home/category-tab/category-tab.component.html"),
            styles: [__webpack_require__(/*! ./category-tab.component.css */ "./src/app/pages/home/category-tab/category-tab.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CategoryTabComponent);
    return CategoryTabComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\r\n<body scroll=\"no\" >-->\r\n<app-header *ngIf=\"isOrder\" currentAction=\"Cart\" currentLink=\"/basic-cart/final-cart?productId=review\" previousAction=\"Log Out\" previousLink=\"/home/products\">\r\n    \r\n</app-header>\r\n<app-header *ngIf=\"!isOrder\" previousAction=\"Log Out \" previousLink=\"/home/products\"> Not here </app-header>\r\n<div class=\"\" >\r\n  <div class=\"open_img\" *ngIf=\"varImg\">\r\n    <button (click)=\"varImg = 0;\">Close</button>\r\n    <img src=\"{{varImg}}\"/></div>\r\n\r\n\r\n    <!-- status -->\r\n<div class=\"status_wrap\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-4 status_boxes\">\r\n      <h3 class=\"save_bg\">Saved</h3>\r\n    </div>\r\n    <div class=\"col-sm-4 status_boxes\">\r\n      <h3 class=\"price_bg\" *ngIf=\"credit\">$ {{credit | number : '1.2-2'}}</h3>\r\n      <h3 class=\"price_bg\" *ngIf=\"!credit\">$ 0.00</h3>\r\n    </div>\r\n    <div class=\"col-sm-4 status_boxes\">\r\n      <h3 class=\"status_bg\">Status</h3>\r\n    </div>\r\n  </div>\r\n  </div> \r\n</div>\r\n<!-- brand --> \r\n\r\n<div class=\"brand_wrap\">\r\n  <div class=\"container\">\r\n    <ul class=\"tabs\">\r\n      <ng-container  *ngFor=\"let category of brands;let i = index;\">\r\n      <li class=\"tab-link apple_bg\" [ngStyle]=\"{'background-color':category.bgcolor}\"  (click)=\"selectedBrand = category.key;selectedCat = 0;selectedScat = 0; \" data-tab=\"tab-1\">\r\n      <b>{{category.name}}</b>\r\n      <i class=\"fa {{category.icon}} icon\"></i>\r\n      </li>\r\n      </ng-container>\r\n    </ul>\r\n    <div id=\"tab-1\" class=\"tab-content \" style=\"display:block;\" *ngIf=\"selectedBrand != 0\">\r\n      <div class=\"brand_list\" >\r\n        <ul>\r\n          <ng-container  *ngFor=\"let category of categories;let i = index;\">\r\n          <li *ngIf=\"category.brand == selectedBrand && category.parent == 0\" (click)=\"selectedCat = category.key;selectedScat = 0;\">{{category.catName}}</li>\r\n        </ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <ng-container  *ngIf=\"selectedCat\">\r\n    <div class=\"model_category 123\" style=\"display: block;\">\r\n  <div class=\"container\">\r\n    <div class=\"thumbnail_img\">\r\n      <ul>\r\n        <ng-container  *ngFor=\"let product of categories;let i = index;\">\r\n        <li *ngIf=\"product.parent == selectedCat\" [ngClass]=\"{'active_scat': product.key == selectedScat}\" (click)=\"select_scat(product.key)\">\r\n          <a>\r\n            <img src=\"{{product.path}}\" alt=\"\">\r\n            <b>{{product.catName}}</b>\r\n          </a>\r\n        </li>\r\n      </ng-container>\r\n        \r\n       \r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ng-container>\r\n<!--variation part-->\r\n<!--nrew design-->\r\n<div class=\"model_wrap\" id=\"new_design\"  style=\"display:block;\" *ngIf=\"selectedScat\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <ng-container *ngFor=\"let product of products; let pi = index\">\r\n      <div class=\"col-sm-3 product_thumbox\"  *ngIf = \" product.cat_id == selectedScat \">\r\n        <div class=\"addto_cart_box\">\r\n          <h4>{{product.product_name}} </h4>\r\n          <b style=\"display: none;\">{{ cart_tot(product.key,pi) }}</b>\r\n          <span class=\"carttop\" *ngIf=\"product.cat_count\">{{product.cat_count}}</span>\r\n          <img src=\"{{ product.path }}\" alt=\"\">\r\n          <div class=\"info_box\" id=\"selected_variation\">\r\n            <ng-container *ngIf=\"product.attributes\">\r\n            <ng-container *ngFor=\"let attr of product.attributes; let ai = index\">\r\n              <ng-container *ngIf=\"product.attr_index == ai\" >\r\n              <ng-container *ngIf=\"ai\"  (click)=\"product.attr_index = product.attr_index -1\">\r\n                <i (click)=\"product.attr_index = product.attr_index -1\" class=\"fa fa-backward\"></i>\r\n              </ng-container>\r\n\r\n                <ng-container *ngFor=\"let value of attr.values; let i = index\"><!--for attribute-->\r\n                  <ng-container *ngIf=\"value && checkstock(attr,pi,value,ai) > 0\">\r\n\r\n                    <a [ngClass]=\"{'active' : value == attr.chosen}\"  (click)=\"selectattr1(attr,pi,value)\">{{value}}</a>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"value && checkstock(attr,pi,value,ai) == 0\" Class=\"gray\">\r\n                    <a [ngClass]=\"{'active' : value == attr.chosen}\" style=\"background-color:gray;color:#fff;\"  >{{value }}</a>\r\n                  </ng-container>\r\n                  <!-- <button (click)=\"checkstock(attr,pi,value,ai,1)\">Checking</button> -->\r\n              </ng-container>\r\n              </ng-container>\r\n          </ng-container>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"product.selectedAttr\" >\r\n            <ng-container *ngFor=\"let value of product.selectedAttr.values; let i = index\"><!--for attribute-->\r\n            <ng-container *ngIf=\"value != ''\" >\r\n              <a  (click)=\"selectattr(pi,product,product.selectedAttr.name, value)\">{{value }}</a>\r\n            </ng-container>\r\n          </ng-container>\r\n          </ng-container>\r\n          </div>\r\n          <ng-container *ngIf=\"!product.sku && !product.qty\" >\r\n          <b>${{product.min}}</b>\r\n            </ng-container>\r\n            <b *ngIf=\"product.price && product.qty\">${{product.qty * product.price | number : '1.2-2'}} </b>\r\n\r\n          <ng-container *ngIf=\"product.sku\" >\r\n            <div class=\"quantity_box_pos\">\r\n              <input class=\"qty-minus_pos minus_plus_pos\"  *ngIf=\"product.sku\" type=\"button\" value=\"-\"  (click)=\"product.qty = product.qty - 1;qtychange(pi);\">\r\n              <input type=\"number\"  class=\"value_box_pos\" [(ngModel)]=\"product.qty\" value=\"{{product.qty}}\" (change)=\"qtychange(pi)\" name=\"\"/>\r\n              <input type=\"button\"  value=\"+\"  class=\"qty-plus_pos minus_plus_pos\" *ngIf=\"product.sku\" (click)=\"product.qty = product.qty + 1;qtychange(pi);\" />\r\n            </div>\r\n          </ng-container>\r\n\r\n           \r\n              <ng-container *ngIf=\"product.sku\" >\r\n              <button type=\"button\"(click) =\"addcart(pi)\">Add to Cart </button>\r\n            </ng-container>\r\n          \r\n            \r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--nrew design-->\r\n</div>\r\n<app-footer></app-footer>\r\n<!-- sub total -->\r\n<div class=\"subtotal\" id=\"to_scroll\" (click)=\"checkout()\" >\r\n  <div _ngcontent-c2=\"\" class=\" viewcart_total\">\r\n      <a _ngcontent-c2=\"\" href=\"#/basic-cart/final-cart\" style=\"display: inline-block;\">View cart \r\n        <svg _ngcontent-c2=\"\" aria-hidden=\"true\" class=\"jss314\" focusable=\"false\" role=\"presentation\" viewBox=\"0 0 24 24\"><path _ngcontent-c2=\"\" d=\"M0 0h24v24H0V0z\" fill=\"none\"></path><path _ngcontent-c2=\"\" d=\"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></svg>  <span _ngcontent-c2=\"\">{{cart_count}}</span>\r\n      </a>\r\n    </div>\r\n\r\n  \r\n  <div class=\"right fot_bootn cart-subtotal\">\r\n  <h3><img src=\"images/logo.png\" alt=\"\"> <a >Cart Subtotal: <span>${{tot | number : '1.2-2'}} </span></a></h3>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_logged_in_as_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication/logged-in-as.service */ "./src/app/authentication/logged-in-as.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomeComponent = /** @class */ (function () {
    function HomeComponent(supplierService, authService, categoryService, loginUser, router, db, toastrService) {
        var _this = this;
        this.supplierService = supplierService;
        this.authService = authService;
        this.categoryService = categoryService;
        this.loginUser = loginUser;
        this.router = router;
        this.db = db;
        this.toastrService = toastrService;
        this.tabClick = false;
        this.SKU = new Array();
        this.OrderDetail = {
            id: '',
            productName: "",
            supplierEmail: "",
            productSKU: [],
            col1Title: "",
            col2Title: ""
        };
        this.selectedScat = 0;
        this.selectedBrand = 0;
        this.isOrder = false;
        this.varImg = 0;
        this.selectedCat = 0;
        var list = this.db.list('/categories');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (categories) {
            _this.categories = categories;
            console.log('categories');
            console.log(_this.categories);
        });
        list = this.db.list('/cart');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (cart) {
            _this.cart = cart;
            console.log('cart');
            console.log(_this.cart);
        });
        //brands
        list = this.db.list('/brands');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (brands) {
            _this.brands = brands;
            console.log('brands');
            console.log(_this.brands);
        });
        this.cart = [];
        list = this.db.list('/products');
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (products) {
            _this.products = products;
            _this.oproducts = products;
            console.log('this.products');
            _this.products.forEach(function (currentValue, index) {
                currentValue['attr_index'] = 0;
                currentValue['qty'] = 0;
                currentValue['price'] = 0;
                currentValue['min'] = _this.set_low(index);
                currentValue['path'] = _this.set_img(index);
                currentValue['selectedAttr'] = 0;
                _this.products[index]['cat_count'] = _this.cart_tot(currentValue['key']);
                _this.products[index] = currentValue;
                _this.oproducts[index] = currentValue;
            });
        });
        this.LSRole = localStorage.getItem("op");
        this.carttot();
        this.isOrder = localStorage.getItem("orderData") ? true : false;
    }
    HomeComponent.prototype.cart_tot = function (p, index) {
        // console.log(); 
        var _this = this;
        if (index === void 0) { index = -1; }
        var tot = 0;
        this.cart.forEach(function (currentValue, index) {
            if (currentValue['pid'] && currentValue['pid'] == p && currentValue['uid'] && currentValue['uid'] == _this.userId) {
                console.log(p);
                tot = tot + currentValue['qty'];
                // tot = tot+  1;
            }
        });
        if (index != -1) {
            this.products[index]['cat_count'] = tot;
            return this.products[index]['cat_count'];
            // alert(this.products[index]['cat_count']);
        }
        return tot;
    };
    HomeComponent.prototype.qtychange = function (p) {
        var qty = p['qty'];
        if (this.products[p].qty < 0) {
            this.products[p].qty = 0;
        }
        if (this.products[p].sku['SKU_Quantity'] && this.products[p].qty) {
            if (this.products[p].qty >= this.products[p].sku['SKU_Quantity']) {
                this.products[p].qty = this.products[p].sku['SKU_Quantity'];
                this.toastrService.info(' Sorry stock not avalible!');
            }
        }
        console.log(this.products[p].sku['SKU_Quantity']);
        console.log(this.products[p].qty);
    };
    HomeComponent.prototype.select_scat = function (key) {
        this.selectedScat = key;
        // alsert(key);
    };
    HomeComponent.prototype.getcolor = function (ci) {
        var c = this.color[this.ccurcolor];
        this.ccurcolor++;
        if (this.ccurcolor == 2) {
            this.ccurcolor = 0;
        }
        return c;
    };
    HomeComponent.prototype.scroll = function (el) {
        // window.scrollTo(el.yPosition);
    };
    HomeComponent.prototype.checkout = function () {
        if (this.tot)
            this.router.navigate(['basic-cart/final-cart']);
    };
    HomeComponent.prototype.removecartitem = function (ci) {
        var tutorialsRef = this.db.list('cart');
        var amount = (this.cart[ci].qty * this.cart[ci].sku.SKU_Price);
        this.tot = this.tot - amount;
        var r = tutorialsRef.remove(this.cart[ci].key);
        this.carttot();
    };
    HomeComponent.prototype.carttot = function () {
        var _this = this;
        console.log("carttot");
        this.tot = 0;
        this.cart_count = 0;
        var list = this.db.list('/cart');
        var t = 0;
        list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (cart) {
            var luid = localStorage.getItem('login');
            _this.tot = 0;
            _this.cart_count = 0;
            cart.forEach(function (currentValue, index) {
                if (currentValue['uid'] && currentValue['uid'] == luid) {
                    if (currentValue['sku'] && currentValue['qty'])
                        _this.tot = _this.tot + (currentValue['sku'].SKU_Price * currentValue['qty']);
                    _this.cart_count = _this.cart_count + 1;
                }
            });
        });
    };
    HomeComponent.prototype.checkstock = function (attr, pi, sval, index, test) {
        if (test === void 0) { test = 0; }
        // console.log(index);
        if (index) {
            var sku = this.checkquantity(pi, attr['name'], sval);
            if (sku) {
                return sku['SKU_Quantity'];
            }
            else {
                return 0;
            }
        }
        else {
            return true;
        }
    };
    HomeComponent.prototype.deselectvar = function (i, pi) {
        var _this = this;
        this.products[pi].attributes.forEach(function (currentValue, index) {
            if (index > i) {
                _this.products[pi].attributes[index]['chosen'] = '';
                console.log(currentValue);
            }
        });
    };
    HomeComponent.prototype.selectattr1 = function (attr, pi, sval) {
        var _this = this;
        // return 0;
        var des = 0;
        this.products[pi].attributes.forEach(function (currentValue, index) {
            if (currentValue['name'] == attr.name) {
                if (!_this.products[pi].attributes[index]['chosen'])
                    _this.products[pi].attributes[index]['chosen'] = sval;
                else {
                    des = 1;
                    _this.deselectvar(index, pi);
                    _this.products[pi].sku = null;
                    _this.products[pi].qty = 0;
                    delete _this.products[pi].attributes[index]['chosen'];
                    // return 0;
                }
            }
        });
        if (!des) {
            var tr = this.products[pi].attr_index + 1;
            var tot = this.products[pi].attributes.length - 1;
            if (tr > tot) {
                this.products[pi].attr_index = 0;
                // this.products[pi].attributes = this.oproducts[pi].attributes;
            }
            else {
                this.products[pi].attr_index = this.products[pi].attr_index + 1;
            }
            console.log("next index" + this.products[pi].attr_index);
            var next = this.products[pi].attributes[this.products[pi].attr_index];
            if (next && this.products[pi].attr_index != 0) {
                // console.log("comming here"); 
                this.hide_next(pi);
            }
        }
        this.checkvariation(pi);
        //ai = current attribute index
    };
    HomeComponent.prototype.set_low = function (n) {
        var min = 0;
        if (this.products[n]['productSKU']) {
            this.products[n]['productSKU'].forEach(function (currentValue, index) {
                if (index == 0) {
                    min = currentValue['SKU_Price'];
                }
                if (currentValue['SKU_Price'] && currentValue['SKU_Price'] <= min && currentValue['SKU_Quantity']) {
                    min = currentValue['SKU_Price'];
                }
            });
        }
        return min;
    };
    HomeComponent.prototype.set_img = function (n) {
        var min = '';
        if (this.products[n]['productSKU']) {
            this.products[n]['productSKU'].forEach(function (currentValue, index) {
                if (index == 0) {
                    min = currentValue['SKU_Image'];
                }
                if (currentValue['SKU_Price'] && min <= currentValue['SKU_Price'] && currentValue['SKU_Quantity']) {
                    min = currentValue['SKU_Image'];
                }
            });
        }
        return min;
    };
    HomeComponent.prototype.hide_next = function (pi) {
        var _this = this;
        var mlocal = [];
        var next = this.products[pi].attributes[this.products[pi].attr_index];
        this.products[pi].attributes.forEach(function (currentValue, index) {
            if (currentValue['chosen'] && index < _this.products[pi].attr_index) {
                mlocal[currentValue['name']] = currentValue['chosen'];
            }
        });
        //next hide
        next.values.forEach(function (currentValue, index) {
            var temvar = mlocal;
            // console.log(currentValue);
            if (currentValue.val) {
                temvar[next.name] = currentValue.val;
            }
            else {
                temvar[next.name] = currentValue;
            }
            if (_this.exist_variation(temvar, pi)) {
            }
            else {
                console.log("|Del");
                _this.products[pi].attributes[_this.products[pi].attr_index].values[index] = '';
                // delete this.products[pi].attributes[this.products[pi].attr_index].values[index];
            }
        });
        //next hide
    };
    HomeComponent.prototype.selectattr = function (pi, product, attr, val) {
        product.attributes.forEach(function (currentValue, index) {
            if (currentValue['name'] == attr) {
                product.attributes[index]['chosen'] = val;
            }
        });
        product.selectedAttr = 0;
        this.products[pi] = product;
        this.checkvariation(pi);
    };
    HomeComponent.prototype.skutoattr = function (sku) {
        var ar = [];
        Object.keys(sku.attributes).forEach(function (key) {
            var _temp = {};
            _temp[key] = sku.attributes[key];
            ar.push(_temp);
        });
        return ar;
    };
    HomeComponent.prototype.exist_variation = function (mlocal, pi) {
        var _this = this;
        var exist = 0;
        this.products[pi].productSKU.forEach(function (currentValue, index) {
            var msku = [];
            if (currentValue.attributes) {
                msku = _this.skutoattr(currentValue);
                console.log('start');
                console.log(msku);
                console.log(mlocal);
                if (_this.comparaattr(msku, mlocal)) {
                    exist = 1;
                    // this.products[pi].sku = currentValue; 
                }
            }
        });
        return exist;
    };
    HomeComponent.prototype.updateqty = function (index, key, qty) {
        console.log("cart item");
        this.cart[index].qty = qty;
        var str = '';
        this.cart[index].attributes.forEach(function (currentValue, index) {
            if (currentValue['chosen']) {
                if (index == 0) {
                    str = str + currentValue['chosen'];
                }
                else {
                    str = str + ' - ' + currentValue['chosen'];
                }
                // mlocal[currentValue['name']] = currentValue['chosen'];
            }
        });
        str = str + ':' + qty;
        this.cart[index]['astr'] = str;
        console.log(this.cart[index]);
        var r = this.db.list('/cart').update(key, this.cart[index]);
    };
    HomeComponent.prototype.checkcart = function (val) {
        var _this = this;
        var find = 0;
        var cqty = this.products[val].qty;
        console.log("checkcart");
        this.cart.forEach(function (currentValue, index) {
            if (currentValue.sku.SKU_Name == _this.products[val].sku.SKU_Name && currentValue.uid == _this.userId && currentValue.pid == _this.products[val].key) {
                find = 1;
                console.log(currentValue.pid + ' == ' + _this.products[val].key);
                console.log(currentValue.sku.SKU_Name + ' == ' + _this.products[val].sku.SKU_Name);
                console.log(currentValue.sku);
                console.log(_this.products[val].sku);
                cqty = cqty + currentValue.qty;
                _this.updateqty(index, currentValue.key, cqty);
            }
        });
        return find;
    };
    HomeComponent.prototype.checkvariation = function (pi) {
        var _this = this;
        this.products[pi].sku = null;
        var mlocal = [];
        this.products[pi].attributes.forEach(function (currentValue, index) {
            if (currentValue['chosen']) {
                mlocal[currentValue['name']] = currentValue['chosen'];
            }
        });
        console.log(mlocal);
        console.log(this.products[pi].productSKU);
        if (this.products[pi].productSKU) {
            this.products[pi].productSKU.forEach(function (currentValue, index) {
                var msku = [];
                console.log("482");
                console.log(currentValue);
                if (currentValue.attributes) {
                    msku = _this.skutoattr(currentValue);
                    console.log('start');
                    console.log(_this.comparaattr(msku, mlocal));
                    if (_this.comparaattr(currentValue.attributes, mlocal, 1)) {
                        console.log("Match here");
                        _this.products[pi].price = currentValue.SKU_Price;
                        _this.products[pi].path = currentValue.SKU_Image;
                        console.log(_this.products[pi].path);
                        _this.products[pi].qty = 1;
                        _this.products[pi].sku = currentValue;
                    }
                }
            });
        }
        //create from local
    };
    HomeComponent.prototype.checkquantity = function (pi, name, val) {
        var _this = this;
        var sku = null;
        var mlocal = [];
        mlocal[name] = val;
        this.products[pi].attributes.forEach(function (currentValue, index) {
            if (currentValue['chosen']) {
                mlocal[currentValue['name']] = currentValue['chosen'];
            }
        });
        // console.log(this.products[pi].productSKU);
        if (this.products[pi].productSKU) {
            this.products[pi].productSKU.forEach(function (currentValue, index) {
                var msku = [];
                if (currentValue.attributes) {
                    msku = _this.skutoattr(currentValue);
                    if (_this.comparaattr(msku, mlocal)) {
                        // this.products[pi].price = currentValue.SKU_Price; 
                        // this.products[pi].qty = 1;
                        sku = currentValue;
                    }
                }
            });
            return sku;
        }
        //create from local
    };
    HomeComponent.prototype.getlength = function (arr) {
        var i = 0;
        for (var obj in arr) {
            i++;
        }
        return i;
    };
    HomeComponent.prototype.addcart = function (p) {
        var _this = this;
        var str = '';
        this.products[p].attributes.forEach(function (currentValue, index) {
            if (currentValue['chosen']) {
                if (index == 0) {
                    str = str + currentValue['chosen'];
                }
                else {
                    str = str + ' - ' + currentValue['chosen'];
                }
                // mlocal[currentValue['name']] = currentValue['chosen'];
            }
        });
        str = str + ':' + this.products[p].qty;
        // console.log(str);
        // return 0;
        var find = this.checkcart(p);
        // console.log(find);
        // return false;
        if (!find) {
            var item = {
                'pid': this.products[p].key,
                'product': this.products[p],
                'qty': this.products[p].qty,
                'attributes': this.products[p].attributes,
                'sku': this.products[p].sku,
                'uid': this.userId,
                'astr': str,
            };
            // this.cart.push(item);
            var r = this.db.list('/cart').push(item);
            console.log("firebase response");
            console.log(r);
            this.products[p].price = 0;
            this.products[p].qty = 0;
            var list = this.db.list('/products');
            list.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            })).subscribe(function (products) {
                _this.products = products;
                _this.oproducts = products;
                console.log('this.products');
                _this.products.forEach(function (currentValue, index) {
                    currentValue['attr_index'] = 0;
                    currentValue['qty'] = 0;
                    currentValue['selectedAttr'] = 0;
                    _this.products[index] = currentValue;
                    _this.oproducts[index] = currentValue;
                    currentValue['min'] = _this.set_low(index);
                    currentValue['path'] = _this.set_img(index);
                });
            });
            this.products[p] = this.oproducts[p];
            this.products[p].qty = 0;
            delete this.products[p].sku;
            this.carttot();
            this.products[p].attributes.forEach(function (currentValue, index) {
                if (currentValue['chosen']) {
                    _this.products[p].attributes[index]['chosen'] = '';
                    // mlocal[currentValue['name']] = currentValue['chosen'];
                }
            });
        }
        else {
            this.products[p].sku = null;
            this.products[p].attributes.forEach(function (currentValue, index) {
                if (currentValue['chosen']) {
                    delete _this.products[p].attributes[index]['chosen'];
                    // mlocal[currentValue['name']] = currentValue['chosen'];
                }
            });
        }
        this.cart_tot(this.products[p].key);
    };
    HomeComponent.prototype.objtokey = function (obj) {
        for (var obj1 in obj) {
            return obj1;
        }
    };
    HomeComponent.prototype.objtoval = function (obj) {
        return obj;
    };
    HomeComponent.prototype.comparaattr = function (arr1, arr2, type) {
        if (type === void 0) { type = 0; }
        if (this.getlength(arr1) != this.getlength(arr2)) {
            return false;
        }
        var r = true;
        for (var obj1 in arr1) {
            //inner loop
            for (var obj2 in arr2) {
                var key = this.objtokey(arr1[obj1]);
                var val = this.objtoval(arr1[obj1]);
                if (val.val)
                    val = val.val;
                if (type) {
                    console.log(obj1 + " == " + obj2);
                    console.log(val + " == " + arr2[obj2]);
                }
                if (obj1 == obj2 && val != arr2[obj2] && r) {
                    r = false;
                }
            }
        }
        return r;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.userId = localStorage.getItem('login');
        // alert(this.userId);
        if (this.LSRole === _models_user_model__WEBPACK_IMPORTED_MODULE_6__["Role"].Supplier) {
            this.router.navigate(['/supplierHome']);
        }
        else if (this.LSRole === _models_user_model__WEBPACK_IMPORTED_MODULE_6__["Role"].Courier) {
            this.router.navigate(['/courier-map']);
        }
        else if (this.LSRole === _models_user_model__WEBPACK_IMPORTED_MODULE_6__["Role"].Admin) {
            this.router.navigate(['/admin']);
        }
        console.log(this.loginUser.option);
        this.localStorageData = JSON.parse(localStorage.getItem("user"));
        this.getCategoriesList();
        this.getUserByOption();
    };
    HomeComponent.prototype.getCategoriesList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        this.categoryService.getCategoriesList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    HomeComponent.prototype.getUserByOption = function () {
        var _this = this;
        this.supplierService.getUsersByOption('email', this.localStorageData.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            if (users[0] && users[0].credit)
                _this.credit = users[0].credit;
            if (!_this.credit) {
                _this.credit = '0.00';
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_supplier_service__WEBPACK_IMPORTED_MODULE_7__["SupplierService"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _authentication_logged_in_as_service__WEBPACK_IMPORTED_MODULE_4__["LoggedInAsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/product-detail/product-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/home/product-detail/product-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.prodImg{\r\n    width: 15rem;\r\n    margin-top: 1.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByb2RJbWd7XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/product-detail/product-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/home/product-detail/product-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header previousLink=\"/home/products\" previousAction=\"Back\">\r\n</app-header>\r\n<div class=\"container\">\r\n    <div class=\"card card-shadow mb-4 col-12\">\r\n        <div class=\"card-header\">\r\n            <div class=\"card-title text-center\">\r\n                <span style=\"font-size:1.5rem; margin-bottom: 1rem;\">Product Detail</span>\r\n                <br>\r\n                <img src=\"{{product.path}}\" alt=\"None\" class=\"prodImg\">\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <table class=\"table table-hover\">\r\n\r\n                <tbody>\r\n                    <tr>\r\n                        <th>Name: </th>\r\n                        <td>{{product.product_name}}</td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <th>Color: </th>\r\n                        <td>{{product.color}}</td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/home/product-detail/product-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/home/product-detail/product-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(actRoute, productService) {
        this.actRoute = actRoute;
        this.productService = productService;
        this.id = this.actRoute.snapshot.queryParamMap.get('productId');
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ProductDetailComponent.prototype.getData = function () {
        var _this = this;
        this.productService.getProductbycat("key", this.id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (products) {
            products.forEach(function (product) {
                _this.product = product;
            });
        });
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/pages/home/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/pages/home/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/m2b-credit/m2b-credit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/m2b-credit/m2b-credit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .container {\r\n     padding-top: 60px;\r\n }\r\n \r\n @media screen and (max-width: 400px) {\r\n     #paypal-checkout-btn {\r\n         width: 100%;\r\n     }\r\n }\r\n \r\n /* Media query for desktop viewport */\r\n \r\n @media screen and (min-width: 400px) {\r\n     #paypal-checkout-btn {\r\n         width: 250px;\r\n         display: inline-block;\r\n     }\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbTJiLWNyZWRpdC9tMmItY3JlZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7S0FDSSxrQkFBa0I7RUFDckI7O0NBRUQ7S0FDSTtTQUNJLFlBQVk7TUFDZjtFQUNKOztDQUNELHNDQUFzQzs7Q0FFdEM7S0FDSTtTQUNJLGFBQWE7U0FDYixzQkFBc0I7TUFDekI7RUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL20yYi1jcmVkaXQvbTJiLWNyZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5jb250YWluZXIge1xyXG4gICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gfVxyXG4gXHJcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICNwYXlwYWwtY2hlY2tvdXQtYnRuIHtcclxuICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgfVxyXG4gfVxyXG4gLyogTWVkaWEgcXVlcnkgZm9yIGRlc2t0b3Agdmlld3BvcnQgKi9cclxuIFxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcclxuICAgICAjcGF5cGFsLWNoZWNrb3V0LWJ0biB7XHJcbiAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIH1cclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/m2b-credit/m2b-credit.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/m2b-credit/m2b-credit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header previousAction=\"M2B\" previousLink=\"/mym2bBasic\">\r\n</app-header>\r\n<div  id=\"buy_back\">\r\n  <div class=\"container\">\r\n    <div class=\"my_m2b_head\">\r\n      <h2>Buy Back</h2>\r\n    </div>\r\n    <ul class=\"tabs\">\r\n      <li class=\"tab-link apple_bg current\" data-tab=\"tab-1\">\r\n      <b>APPLE</b>\r\n      </li>\r\n      <li class=\"tab-link samsung_bg\" data-tab=\"tab-2\">\r\n        <b>SAMSUNG</b>\r\n      </li>\r\n      <li class=\"tab-link lg_bg\" data-tab=\"tab-3\">\r\n        <b>IPAD</b>\r\n      </li>\r\n      \r\n    </ul>\r\n    <div id=\"tab-1\" class=\"tab-content current\">\r\n      <table class=\"table_box\">\r\n    <tr>\r\n      <th>Model</th>\r\n      <th>ABC Price</th>\r\n      <th>Bad OEM Lcd</th>\r\n      <th class=\"working_lcd\">Working Copy lCD</th>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 12 Pro Max</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 12/12 Pro </b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 12 Mini</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td>  <b>Iphone 11 Pro Max</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 11/11 Pro Max</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 11</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone XS Max</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone X/XS</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone XR</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 8 Plus</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    \r\n  </table>\r\n    </div>\r\n    <div id=\"tab-2\" class=\"tab-content\">\r\n      <table class=\"table_box\">\r\n    <tr>\r\n      <th>Model</th>\r\n      <th>ABC Price</th>\r\n      <th>Bad OEM Lcd</th>\r\n      <th class=\"working_lcd\">Working Copy lCD</th>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Galaxy S3</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Galaxy S4</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Galaxy S5</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td>  <b>Galaxy S6</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Galaxy S7</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Galaxy S8</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Galaxy S9</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Galaxy S11</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Galaxy S12</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Galaxy S13</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    \r\n  </table>\r\n    </div>\r\n    <div id=\"tab-3\" class=\"tab-content\">\r\n      <table class=\"table_box\">\r\n    <tr>\r\n      <th>Model</th>\r\n      <th>ABC Price</th>\r\n      <th>Bad OEM Lcd</th>\r\n      <th class=\"working_lcd\">Working Copy lCD</th>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 12 Pro Max</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 12/12 Pro </b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 12 Mini</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td>  <b>Iphone 11 Pro Max</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 11/11 Pro Max</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 11</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone XS Max</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone X/XS</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone XR</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    <tr>\r\n      <td><b>Iphone 8 Plus</b></td>\r\n      <td>140</td>\r\n      <td>15</td>\r\n      <td>15</td>\r\n    </tr>\r\n    \r\n  </table>\r\n    </div>\r\n  </div> \r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/m2b-credit/m2b-credit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/m2b-credit/m2b-credit.component.ts ***!
  \**********************************************************/
/*! exports provided: M2bCreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M2bCreditComponent", function() { return M2bCreditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var M2bCreditComponent = /** @class */ (function () {
    function M2bCreditComponent(actRoute, router, toastrService, http, supplierSer) {
        var _this = this;
        this.actRoute = actRoute;
        this.router = router;
        this.toastrService = toastrService;
        this.http = http;
        this.supplierSer = supplierSer;
        this.checkChild = "email";
        this.addScript = false;
        this.paypalLoad = true;
        this.finalAmount = 1;
        this.showToast = function () {
            if (_this.users.credit == 0 || _this.users.credit < 0) {
                _this.toastrService.error("Not credit in M2B Account");
            }
            else {
                _this.toastrService.info('Place Your Order');
                _this.id ? _this.router.navigateByUrl('basic-cart/final-cart?productId=' + _this.id) : _this.router.navigateByUrl('home/products');
            }
        };
        this.id = this.actRoute.snapshot.queryParamMap.get('productId');
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.getUsersList();
        this.finalAmount = this.supplierSer.needCredit;
    }
    M2bCreditComponent.prototype.ngAfterViewChecked = function () {
    };
    M2bCreditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Multiple button for paypal payment
        paypal.Button.render({
            // Set your environment
            env: 'production',
            // Specify the style of the button
            style: {
                layout: 'vertical',
                size: 'medium',
                shape: 'rect',
                color: 'gold' // gold | blue | silver | black
            },
            // Specify allowed and disallowed funding sources
            //
            // Options:
            // - paypal.FUNDING.CARD
            // - paypal.FUNDING.CREDIT
            // - paypal.FUNDING.ELV
            funding: {
                allowed: [paypal.FUNDING.CARD, paypal.FUNDING.CREDIT],
                disallowed: []
            },
            client: {
                sandbox: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].paypalSandboxKey,
                production: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].paypalProductionKey
            },
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: { total: _this.finalAmount, currency: 'USD' }
                            }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function () {
                    _this.addCredit();
                });
            }
        }, '#paypal-button-container');
    };
    M2bCreditComponent.prototype.getUsersList = function () {
        var _this = this;
        this.supplierSer.getUsersByOption(this.checkChild, this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.users = user;
                console.log(_this.users);
            });
        });
    };
    M2bCreditComponent.prototype.addCredit = function () {
        this.users.credit = parseInt(this.users.credit) + this.finalAmount;
        this.supplierSer.updateUser(this.users.key, this.users);
        this.finalAmount = 0;
        this.supplierSer.needCredit = 0;
        console.log('Payment Complete!');
        this.router.navigateByUrl('basic-cart/final-cart?productId=review');
        this.toastrService.success('Purchased M2B Credit Successfully!');
    };
    M2bCreditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-m2b-credit',
            template: __webpack_require__(/*! ./m2b-credit.component.html */ "./src/app/pages/m2b-credit/m2b-credit.component.html"),
            styles: [__webpack_require__(/*! ./m2b-credit.component.css */ "./src/app/pages/m2b-credit/m2b-credit.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_1__["SupplierService"]])
    ], M2bCreditComponent);
    return M2bCreditComponent;
}());



/***/ }),

/***/ "./src/app/pages/mym2b-basic/mym2b-basic.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/mym2b-basic/mym2b-basic.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top:  60px;\r\n}\r\nbody, html {\r\n    height:100%;\r\n}\r\nbody {\r\n    overflow:hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXltMmItYmFzaWMvbXltMmItYmFzaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teW0yYi1iYXNpYy9teW0yYi1iYXNpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAgNjBweDtcclxufVxyXG5ib2R5LCBodG1sIHtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/mym2b-basic/mym2b-basic.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/mym2b-basic/mym2b-basic.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header currentAction=\"Credit\" currentLink=\"/mym2bCredit\" previousAction=\"Home\" previousLink=\"/home/products\">\r\n</app-header>\r\n<div class=\"status_wrap\" id=\"m2b_wrap\" style=\"background:#fff;\">\r\n  <div class=\"container\">\r\n    <div class=\"my_m2b_head\">\r\n      <h2>My M2B</h2>\r\n    </div>\r\n    <div class=\"my_m2b\">\r\n      <ul>\r\n        <li class=\"purchase_bg\">\r\n          <h3>{{purchases}}</h3>\r\n          <h5>Purchases</h5>\r\n          <i class=\"fa fa-shopping-cart\"></i>\r\n        </li>\r\n        <li class=\"account_bg\">\r\n          <h3>Account Balance</h3>\r\n          <h5>$ {{credit | number : '1.2-2'}}</h5>\r\n          <i class=\"fa fa-calendar\"></i>\r\n        </li>\r\n      </ul>\r\n\r\n    <div class=\"my_m2b_head\">\r\n      <h2>My Orders</h2>\r\n    </div>\r\n        <div class=\"zigzag_Bg\" *ngFor=\"let order of myOrdersInfo; let i = index;\">\r\n                            <div class=\"orders_listing onclick \" role=\"tab\" id=\"headingOne\" (click)=\"(clicked === order)? clicked = '':clicked = order\">\r\n                                <div class=\"row \">\r\n                                <div class=\"col-sm-6 order_no\">\r\n                                  <b>Order No {{i+1}}</b>\r\n                                  <p class=\"date-order\">{{order.date}} </p>\r\n                                    \r\n                                </div>\r\n                                <div class=\"col-sm-6 shipped_down\">\r\n                                    \r\n                                    <b class=\"status\" [ngStyle]=\"{'color': order.status === 'Shipped' ? 'green' : 'red' }\">{{order.status}} <i class=\"fa fa-angle-down icon-s\" [class.animat]=\"clicked === order\"></i></b>\r\n                                </div>\r\n                                </div>\r\n\r\n                                \r\n                            </div>\r\n\r\n                            <div id=\"collapseOne\" class=\"collapse shipped_box dropdown_box\" [class.show]=\"clicked === order\" role=\"tabpanel\" aria-labelledby=\"headingOne\" aria-expanded=\"false\">\r\n\r\n                                <div class=\"contact_seller\">\r\n\r\n                                    <!-- <select class=\"btn btn-outline-secondary btn-sm dropdown-toggle form-control addBtn btn-top\"  (change)=\"onContact($event.target.value)\">\r\n                                    <option value=\"0\">\r\n                                      Contact Seller\r\n                                    </option>\r\n                                    <option *ngFor=\"let subOrder of order.supplierOrderInfo ; let i = index;\"\r\n                                      [value]=\"subOrder.supplierOrderId\">\r\n                                      Seller {{i+1}}\r\n                                    </option>\r\n                                  </select> -->\r\n                                </div>\r\n\r\n                                <div *ngIf=\"order.cart\">\r\n                                </div>\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"regular_lcd\">\r\n                                    </div>\r\n\r\n                                    <table class=\"table table-hover table_box product_table\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th scope=\"col\">Product Name</th>\r\n                                                <th scope=\"col\">Quantity</th>\r\n                                                <th scope=\"col\">Total</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let p of order.cart; let i = index;\">\r\n                                                <td scope=\"col\" class=\"pro_gap\"><img width=\"40\" height=\"40\" class=\"pro_img\" src=\"{{p.product.path}}\" />{{p.product.product_name}}\r\n                                                    \r\n                                                    <div class=\"order_attributes\">\r\n                                                        <ng-container  *ngFor=\"let attr of p.attributes;let i = index;\">\r\n                                                        <a *ngIf=\"attr.chosen\">{{attr.chosen}}</a>\r\n                                                    </ng-container>\r\n\r\n                                                    </div>\r\n                                                    \r\n                                                    <span>{{p.sku.SKU_Name}}</span>\r\n\r\n                                                </td>\r\n                                                <td scope=\"col\">${{p.sku.SKU_Price | number : '1.2-2'}}x{{p.qty}}</td>\r\n                                                <td scope=\"col\">${{p.qty*p.sku.SKU_Price | number : '1.2-2'}}</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                 <!--ye htnml ha -->\r\n\r\n                                    \r\n                                    <div>\r\n\r\n                                        <div class=\"delivery_details\">\r\n        <h4>Delivery Detail</h4>\r\n        <p><b>Tracking Number:</b> <span>8927766094</span></p>\r\n        <p *ngIf=\"order.shipping\"><b>Courier :</b> <span>{{order.shipping.name}}</span></p>\r\n        <p *ngIf=\"order.pmethod\"><b>Payment method :</b> <span>{{pmethod(order.pmethod)}}</span></p>\r\n        <p><b>Time Est :</b> <span>4</span></p>\r\n        <p *ngIf=\"order.saddress.fname\"><b>Name:</b> <span>{{order.saddress.fname}} {{ order.saddress.lname }}</span></p>\r\n        <p *ngIf=\"order.saddress.email\"><b>Email:</b> <span>{{order.saddress.email}}</span></p>\r\n        <p *ngIf=\"order.saddress.phone\"><b>Phone:</b> <span>{{order.saddress.phone}}</span></p>\r\n        <p *ngIf=\"order.saddress.town\"><b>Town:</b> <span>{{order.saddress.town}}</span></p>\r\n        <p *ngIf=\"order.saddress.state\"><b>State:</b> <span>{{order.saddress.state}}</span></p>\r\n        <p *ngIf=\"order.saddress.postcode\"><b>Postal Code:</b> <span>{{order.saddress.postcode}}</span></p>\r\n        <p *ngIf=\"order.saddress.country\"><b>Country:</b> <span>{{order.saddress.country}}</span></p>\r\n        <p *ngIf=\"order.saddress.address\"><b>Deliver Address:</b> <span>{{order.saddress.address}}</span></p>\r\n        \r\n      </div>\r\n                                        \r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6 total_price\">\r\n                                            <h6 style=\"color: #232323;\">Total Price: ${{order.tot | number : '1.2-2'}} </h6>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6 open_return\">\r\n                                        <a style=\"border:none;\" class=\"btn btn-outline-secondary addBtn\" href=\"#/myOrderList/returnRequest?userId={{order.\r\n                                        key}}\">\r\n                                          Open Return Request</a>\r\n                                          </div>\r\n                                    </div>\r\n\r\n                                    \r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n  </div> \r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/mym2b-basic/mym2b-basic.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/mym2b-basic/mym2b-basic.component.ts ***!
  \************************************************************/
/*! exports provided: Mym2bBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mym2bBasicComponent", function() { return Mym2bBasicComponent; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_order_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/order-list.service */ "./src/app/services/order-list.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Mym2bBasicComponent = /** @class */ (function () {
    function Mym2bBasicComponent(toastrService, orderListService, supplierSer, fb, actRoute) {
        this.toastrService = toastrService;
        this.orderListService = orderListService;
        this.supplierSer = supplierSer;
        this.fb = fb;
        this.actRoute = actRoute;
        this.checkChild = "email";
        this.purchases = 0;
        this.buy_back = 0;
        this.buy_back = this.actRoute.snapshot.queryParamMap.get('buy_back');
        console.log(this.buy_back);
        this.supplierSer.needCredit = 0;
    }
    Mym2bBasicComponent.prototype.ngOnInit = function () {
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.localStorageData = JSON.parse(localStorage.getItem("user"));
        this.uid = localStorage.getItem('login');
        this.getUsersList();
        this.getOrderList();
    };
    Mym2bBasicComponent.prototype.getUsersList = function () {
        var _this = this;
        this.supplierSer.getUsersByOption(this.checkChild, this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.users = user;
                _this.credit = _this.users.credit;
            });
        });
    };
    Mym2bBasicComponent.prototype.pmethod = function (id) {
        if (id == 'ccard') {
            return 'Credit card';
        }
        else if (id == 'credit') {
            return 'M2b Credit';
        }
    };
    Mym2bBasicComponent.prototype.getOrderList = function () {
        var _this = this;
        // Use snapshotChanges().map() to store the key
        // alert(this.uid);
        this.purchases = 0;
        this.orderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (orderList) {
            var or = [];
            orderList.forEach(function (currentValue, index) {
                if (currentValue['uid'] == _this.uid) {
                    _this.purchases++;
                    or.push(currentValue);
                }
            });
            or.reverse();
            _this.myOrdersInfo = or;
            console.log("myOrdersInfo");
            console.log(or);
        });
    };
    Mym2bBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mym2b-basic',
            template: __webpack_require__(/*! ./mym2b-basic.component.html */ "./src/app/pages/mym2b-basic/mym2b-basic.component.html"),
            styles: [__webpack_require__(/*! ./mym2b-basic.component.css */ "./src/app/pages/mym2b-basic/mym2b-basic.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"], _services_order_list_service__WEBPACK_IMPORTED_MODULE_6__["OrderListService"], _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], Mym2bBasicComponent);
    return Mym2bBasicComponent;
}());



/***/ }),

/***/ "./src/app/pages/mym2b/mym2b.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/mym2b/mym2b.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215bTJiL215bTJiLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/mym2b/mym2b.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/mym2b/mym2b.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mym2b works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/mym2b/mym2b.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/mym2b/mym2b.component.ts ***!
  \************************************************/
/*! exports provided: Mym2bComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mym2bComponent", function() { return Mym2bComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Mym2bComponent = /** @class */ (function () {
    function Mym2bComponent() {
    }
    Mym2bComponent.prototype.ngOnInit = function () {
    };
    Mym2bComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mym2b',
            template: __webpack_require__(/*! ./mym2b.component.html */ "./src/app/pages/mym2b/mym2b.component.html"),
            styles: [__webpack_require__(/*! ./mym2b.component.css */ "./src/app/pages/mym2b/mym2b.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Mym2bComponent);
    return Mym2bComponent;
}());



/***/ }),

/***/ "./src/app/pages/notfound/notfound.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/notfound/notfound.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/notfound/notfound.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/notfound/notfound.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <div class=\"error-wrap\">\r\n                  <h1>404</h1>\r\n                  <h4>Page Not Found</h4>\r\n                  <p>The page you are looking for doesn't exit.</p>\r\n                  <a [routerLink]=\"['/auth']\" class=\"btn btn-pill btn-primary\">Go Home Page</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"error-img\">\r\n      <img src=\"../../../assets/img/error.svg\" alt=\"\"/>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/notfound/notfound.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/notfound/notfound.component.ts ***!
  \******************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/pages/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/pages/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/options/options.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/options/options.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/options/options.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/options/options.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n    <div class=\"options_form\">\r\n        <form class=\"form-signin middlebox\">\r\n        <div class=\"login_logo\">\r\n            <img src=\"../../../assets/img/Logo-splash.png\" alt=\"\" />\r\n            <h4>Connecting Manufacturer to business</h4>\r\n        </div>\r\n\r\n        <div class=\"sign_in\">\r\n            <h5>I am a:</h5>\r\n        <div class=\"borderbtn\">\r\n            <button class=\"btn btn-lg btn-outline-light btn-block \" [routerLink]=\"['../register']\" [queryParams]=\"{option:'Business'}\">Business</button>\r\n        </div>\r\n        <div class=\"borderbtn\">\r\n            <button class=\"btn btn-lg btn-outline-light btn-block \" [routerLink]=\"['../register']\" [queryParams]=\"{option:'Courier'}\">Courier</button>\r\n        </div>\r\n        <div class=\"borderbtn\">\r\n            <button class=\"btn btn-lg btn-outline-light btn-block \" [routerLink]=\"['../register']\" [queryParams]=\"{option:'Supplier'}\">Supplier</button>\r\n        </div>\r\n        </div>\r\n        \r\n      \r\n    </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/options/options.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/options/options.component.ts ***!
  \****************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OptionsComponent = /** @class */ (function () {
    function OptionsComponent() {
    }
    OptionsComponent.prototype.ngOnInit = function () {
    };
    OptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-options',
            template: __webpack_require__(/*! ./options.component.html */ "./src/app/pages/options/options.component.html"),
            styles: [__webpack_require__(/*! ./options.component.css */ "./src/app/pages/options/options.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/supplier/supplier-cash-history/supplier-cash-history.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-cash-history/supplier-cash-history.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top: 60px;\r\n    text-align: center;\r\n }\r\n.myCard{\r\n    padding-bottom: 60px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcGxpZXIvc3VwcGxpZXItY2FzaC1oaXN0b3J5L3N1cHBsaWVyLWNhc2gtaGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNGO0lBQ0kscUJBQXFCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VwcGxpZXIvc3VwcGxpZXItY2FzaC1oaXN0b3J5L3N1cHBsaWVyLWNhc2gtaGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4ubXlDYXJke1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/supplier/supplier-cash-history/supplier-cash-history.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-cash-history/supplier-cash-history.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header currentAction=\"Maintainence\" currentLink=\"/maintenance\" previousAction=\"Cashout\" previousLink=\"/supplierCashout\"></app-header>\r\n<div class=\"container\">\r\n    <div class=\"row mt-3\">\r\n        <div class=\"col-12\">\r\n            <h3>{{thisMonth}}</h3>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-5 mb-5\">\r\n        <div class=\"col-12\">\r\n            <h3>$ {{credit | number : '1.2-2'}}</h3>\r\n            <p>{{percentageOfLastMonth}}% of last month</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"myCard col-md-12 mb-3\">\r\n        <div class=\"row grid-view\">\r\n            <div class=\"col-6\">\r\n                <p>Revenue</p>\r\n                <h3><strong>$ {{totalRevenue | number : '1.2-2'}}</strong></h3>\r\n            </div>\r\n            <div class=\"clearfix hidden-sm-up\"></div>\r\n            <div class=\"col-6\">\r\n                <p>Profit</p>\r\n                <h3><strong>$ {{totalSKUprofit | number : '1.2-2'}}</strong></h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row grid-view\">\r\n            <div class=\"col-6\">\r\n                <p>Orders</p>\r\n                <h3><strong>{{allSKUtotalQty}}</strong></h3>\r\n            </div>\r\n            <div class=\"clearfix hidden-sm-up\"></div>\r\n            <div class=\"col-6\">\r\n                <p>Returned</p>\r\n                <h3><strong>{{requestedOrdersQty}}</strong></h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row grid-view\">\r\n            <div class=\"col-6\">\r\n                <p>Last Month Profit</p>\r\n                <h3><strong>$ {{lastMonthTotalSKUprofit | number : '1.2-2'}}</strong></h3>\r\n            </div>\r\n            <div class=\"clearfix hidden-sm-up\"></div>\r\n            <div class=\"col-6\">\r\n                <p>Last Month Orders</p>\r\n                <h3><strong>$ {{allLastMonthQty1}}</strong></h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/supplier/supplier-cash-history/supplier-cash-history.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-cash-history/supplier-cash-history.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SupplierCashHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierCashHistoryComponent", function() { return SupplierCashHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _services_return_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/return-request.service */ "./src/app/services/return-request.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SupplierCashHistoryComponent = /** @class */ (function () {
    function SupplierCashHistoryComponent(returnRequestService, supplierOrderListService, supplierService, productService) {
        this.returnRequestService = returnRequestService;
        this.supplierOrderListService = supplierOrderListService;
        this.supplierService = supplierService;
        this.productService = productService;
        this.supplierOrderList = new Array();
        this.checkChild = "email";
        this.count = 0;
        this.credit = 0;
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.now = new Date();
        this.thisMonth = '';
        this.requestedOrdersQty = 0;
        this.allSKUtotalQty = 0;
        this.totalSKUprofit = 0;
        this.totalRevenue = 0;
        this.allLastMonthQty = 0;
        this.allLastMonthQty1 = 0;
        this.date = 0;
        this.month = 0;
        this.year = 0;
        this.totalpercentage = 0;
        this.lastMonthTotalSKUprofit = 0;
        this.products = [];
        this.prodSKUTotalqty = 0;
        this.percentageOfLastMonth = 0;
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.thisMonth = this.months[this.now.getMonth()];
        this.today = new Date();
        this.date = this.today.getDate();
        this.month = this.today.getMonth();
        this.year = this.today.getFullYear();
        this.lastMonthDate = new Date(this.year, this.month - 1, this.date);
        console.log(this.lastMonthDate);
        this.firstDayLastMonth = new Date(this.lastMonthDate.getFullYear(), this.lastMonthDate.getMonth(), 1);
        this.lastDayLastMonth = new Date(this.lastMonthDate.getFullYear(), this.lastMonthDate.getMonth() + 1, 0);
        console.log('firstDay:', this.firstDayLastMonth, 'lastDay', this.lastDayLastMonth);
        this.getProductsListProfit();
        this.getUserOption();
        this.getOrderListQty();
        this.getReturnRequestQty();
    }
    SupplierCashHistoryComponent.prototype.ngOnInit = function () {
        this.getOrderListQty();
    };
    SupplierCashHistoryComponent.prototype.getOrderListQty = function () {
        var _this = this;
        this.supplierOrderList = [];
        var totalQty = 0;
        this.allSKUtotalQty = 0;
        this.requestedOrdersQty = 0;
        var L_C_price = 0;
        var total_profit = 0;
        var orderDate;
        this.supplierOrderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (supplierOrderList) {
            _this.allSKUtotalQty = 0;
            _this.allLastMonthQty = 0;
            _this.allLastMonthQty1 = 0;
            _this.totalSKUprofit = 0;
            _this.lastMonthTotalSKUprofit = 0;
            supplierOrderList.forEach(function (order) {
                if (order.supplierEmail == _this.ownEmail) {
                    var ans = 0;
                    ans = _this.calculateProfit(order);
                    console.log("ans: ", ans);
                    _this.totalSKUprofit += ans;
                    _this.allSKUtotalQty++;
                    orderDate = new Date(order.addOn);
                    console.log('firstDay:', _this.firstDayLastMonth, 'lastDay', _this.lastDayLastMonth, 'orderDate', _this.lastMonthDate);
                    console.log(_this.lastDayLastMonth >= _this.lastMonthDate && _this.lastMonthDate >= _this.firstDayLastMonth);
                    if (_this.lastDayLastMonth >= orderDate && orderDate >= _this.firstDayLastMonth) {
                        // ----
                        _this.allLastMonthQty1++;
                        var ans_1 = 0;
                        ans_1 = _this.calculateProfit(order);
                        console.log("ans: ", ans_1);
                        _this.lastMonthTotalSKUprofit += ans_1;
                        // ---------
                        order.productDetail.forEach(function (prod) {
                            prod['productSKU'].forEach(function (SKU) {
                                _this.allLastMonthQty += (+SKU.quantity ? +SKU.quantity : 0);
                            });
                        });
                    }
                }
            });
            _this.percentageOfLastMonth = Math.round((_this.allLastMonthQty / _this.prodSKUTotalqty) * 100);
        });
    };
    SupplierCashHistoryComponent.prototype.getReturnRequestQty = function () {
        var _this = this;
        this.returnRequestService.getReturnRequestsByOption('supplierEmail', this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (requests) {
            requests.forEach(function (x) {
                if (x.requestApprove == '1') {
                    _this.requestedOrdersQty++;
                }
            });
        });
    };
    SupplierCashHistoryComponent.prototype.calculateProfit = function (order) {
        var _this = this;
        var L_C_price = 0;
        var total = 0;
        order.productDetail.forEach(function (prod) {
            var index = _this.products.findIndex(function (x) { return x.id == prod['id']; });
            prod['productSKU'].forEach(function (SKU) {
                L_C_price = 0;
                if (index > -1) {
                    console.log(SKU.quantity);
                    _this.products[index].productSKU.forEach(function (product) {
                        if (product.SKU_Name == SKU.SKU_Name) {
                            L_C_price = (product.SKU_Price ? +product.SKU_Price : 0) - (product.SKU_Cost ? +product.SKU_Cost : 0);
                            console.log(L_C_price);
                        }
                    });
                    total += ((SKU.quantity ? SKU.quantity : 0) * L_C_price);
                }
            });
        });
        return total;
    };
    SupplierCashHistoryComponent.prototype.getProductsListProfit = function () {
        var _this = this;
        var totalQty = 0;
        var myprodSKUQty = 0;
        var myprodSKUQtySold = 0;
        this.productService.getProductsList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (products) {
            _this.products = products;
            totalQty = 0;
            products.forEach(function (product) {
                if (product.supplierEmail == _this.ownEmail) {
                    product.productSKU.forEach(function (SKU) {
                        _this.prodSKUTotalqty += (SKU.SKU_Quantity ? +SKU.SKU_Quantity : 0);
                        totalQty = (+SKU.SKU_sold_qty ? +SKU.SKU_sold_qty : 0) - (+SKU.SKU_Quantity ? +SKU.SKU_Quantity : 0);
                        _this.totalRevenue += (totalQty * (SKU.SKU_Price ? +SKU.SKU_Price : 1));
                        myprodSKUQty += (+SKU.SKU_sold_qty ? +SKU.SKU_sold_qty : 0);
                        myprodSKUQtySold += totalQty;
                    });
                }
            });
        });
    };
    SupplierCashHistoryComponent.prototype.getUserOption = function () {
        var _this = this;
        this.supplierService.getUsersByOption(this.checkChild, this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.user = user;
                _this.credit = _this.user.credit;
            });
        });
    };
    SupplierCashHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-cash-history',
            template: __webpack_require__(/*! ./supplier-cash-history.component.html */ "./src/app/pages/supplier/supplier-cash-history/supplier-cash-history.component.html"),
            styles: [__webpack_require__(/*! ./supplier-cash-history.component.css */ "./src/app/pages/supplier/supplier-cash-history/supplier-cash-history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_return_request_service__WEBPACK_IMPORTED_MODULE_4__["ReturnRequestService"],
            _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_2__["SupplierOrderListService"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], SupplierCashHistoryComponent);
    return SupplierCashHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/supplier/supplier-cashout-final/supplier-cashout-final.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-cashout-final/supplier-cashout-final.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top: 60px;\r\n    text-align: center;\r\n }\r\n.myCard{\r\n    padding-bottom: 60px;\r\n}\r\n.card-body{\r\n    max-height: 350px; \r\n    overflow: scroll;\r\n    padding: .5rem;\r\n}\r\n.order-item{\r\n    border: 2px solid #dfdfdf;\r\n    margin: 0.3rem 0px;\r\n    border-radius: .25rem;\r\n}\r\n.styling{\r\n    font-size:0.8em;\r\n}\r\n.satisfied{\r\n  \r\n    color:green;\r\n}\r\n.bold{\r\n    font-weight: bold;\r\n}\r\n.returns{\r\n    font-size:0.8em;\r\n    color:red;    \r\n}\r\n.title{\r\n    font-weight: 500;\r\n    font-size: initial;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcGxpZXIvc3VwcGxpZXItY2FzaG91dC1maW5hbC9zdXBwbGllci1jYXNob3V0LWZpbmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7SUFDSSxxQkFBcUI7Q0FDeEI7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEOztJQUVJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtDQUNiO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VwcGxpZXIvc3VwcGxpZXItY2FzaG91dC1maW5hbC9zdXBwbGllci1jYXNob3V0LWZpbmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbi5teUNhcmR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDsgXHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuLm9yZGVyLWl0ZW17XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGZkZmRmO1xyXG4gICAgbWFyZ2luOiAwLjNyZW0gMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcbi5zdHlsaW5ne1xyXG4gICAgZm9udC1zaXplOjAuOGVtO1xyXG59XHJcblxyXG4uc2F0aXNmaWVke1xyXG4gIFxyXG4gICAgY29sb3I6Z3JlZW47XHJcbn1cclxuLmJvbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucmV0dXJuc3tcclxuICAgIGZvbnQtc2l6ZTowLjhlbTtcclxuICAgIGNvbG9yOnJlZDsgICAgXHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/supplier/supplier-cashout-final/supplier-cashout-final.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-cashout-final/supplier-cashout-final.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header currentAction=\"Cash History\" currentLink=\"/supplierCashHistory\" previousAction=\"Home\" previousLink=\"/supplierHome\"></app-header>\r\n<div class=\"container\" style=\"  margin-bottom: 6rem;\">\r\n    <div class=\"row mt-5\">\r\n        <div class=\"col-12\">\r\n            <p class=\"title\">Cashout Balance</p>\r\n            <p> <b>My Total Balance:</b> {{realCredit}}</p>\r\n            <p> <b>Deduction:</b> {{settongData?.deduction}} %</p>\r\n            <h3>$ {{credit}}</h3>\r\n\r\n            <button class=\"btn btn-info btn-lg\" (click)=\"onDone()\"><i class=\"fa fa-money\"\r\n                                        aria-hidden=\"true\"></i> Done </button>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <p class=\"p-0 m-0\">Selected Order List</p>\r\n    <div class=\" col-12 mb-5 p-0\">\r\n        <div class=\"card card-shadow mb-4\">\r\n            <div class=\"card-body\">\r\n                <ul class=\"list-group\">\r\n                    <ng-container *ngFor=\"let order of orderList;\">\r\n\r\n                        <span class=\"order-item\">\r\n                                                        <li class=\"list-group-item justify-content-between p-0 m-0\"\r\n                                                                *ngFor=\"let product of order.productDetail;\">\r\n                                                                <div class=\"row p-0 m-0\">\r\n                                                                        <div class=\"col-5 p-0\">\r\n                                                                                <p class=\"p-0 m-0\">\r\n                                                                                        {{product.productName}}</p>\r\n                                                                                <p class=\"styling\">\r\n                                                                                        {{order.addOn | date:'MMM dd, HH:mm' }}\r\n                                                                                </p>\r\n\r\n                                                                        </div>\r\n                                                                        <div class=\"col-4 p-0\">\r\n                                                                                <span>SKU Name </span>\r\n                        <p class=\"p-0 m-0 styling\" *ngFor=\"let SKU of product.productSKU;\">\r\n                            {{SKU.SKU_Name}} </p>\r\n            </div>\r\n            <div class=\"col-3 p-0 satisfied \">\r\n                <span>SKU Price </span>\r\n                <p class=\"p-0 m-0 styling\" *ngFor=\"let SKU of product.productSKU;\">\r\n                    +${{SKU.SKU_Price}} </p>\r\n\r\n            </div>\r\n        </div>\r\n        </li>\r\n        </span>\r\n        </ng-container>\r\n\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/supplier/supplier-cashout-final/supplier-cashout-final.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-cashout-final/supplier-cashout-final.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SupplierCashoutFinalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierCashoutFinalComponent", function() { return SupplierCashoutFinalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _services_cashout_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/cashout-request.service */ "./src/app/services/cashout-request.service.ts");
/* harmony import */ var _models_cashout_request_model_Copy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/cashout-request.model - Copy */ "./src/app/models/cashout-request.model - Copy.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SupplierCashoutFinalComponent = /** @class */ (function () {
    function SupplierCashoutFinalComponent(cashoutRequestService, settingService, sendEmail, toastrService, supplierOrderListService, router, supplierSer, productService) {
        this.cashoutRequestService = cashoutRequestService;
        this.settingService = settingService;
        this.sendEmail = sendEmail;
        this.toastrService = toastrService;
        this.supplierOrderListService = supplierOrderListService;
        this.router = router;
        this.supplierSer = supplierSer;
        this.productService = productService;
        this.credit = 0;
        this.realCredit = 0;
        this.users = [];
        this.requestContainer = new _models_cashout_request_model_Copy__WEBPACK_IMPORTED_MODULE_7__["CashoutRequestModel"]();
        this.orderList = JSON.parse(localStorage.getItem('orderCheckout'));
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.getsetting();
    }
    SupplierCashoutFinalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderList.forEach(function (order) {
            _this.realCredit = order.totalPrice;
        });
        this.calculateCreditByPercentage();
        this.getCurrentUserInfo();
        this.getOrderList();
    };
    SupplierCashoutFinalComponent.prototype.getsetting = function () {
        var _this = this;
        this.settingService.getSettingList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (settings) {
            settings.forEach(function (setting) {
                _this.settongData = setting;
            });
            _this.calculateCreditByPercentage();
        });
    };
    SupplierCashoutFinalComponent.prototype.calculateCreditByPercentage = function () {
        var ans = 0;
        if (this.settongData) {
            ans = (+this.settongData.deduction / 100) * this.realCredit;
            this.credit = Math.round((this.realCredit - ans) * 100) / 100;
        }
    };
    SupplierCashoutFinalComponent.prototype.onDone = function () {
        var _this = this;
        this.users.forEach(function (user) {
            _this.sendEmail.supplierTag.title = 'Cashout Request!';
            _this.sendEmail.supplierTag.data = "Supplier Name: " + _this.user.name + " ";
            _this.sendEmail.supplierTag.link = '';
            _this.sendEmail.sendEmail(user.email, _this.sendEmail.supplierTag, _this.credit, _this.orderList[0]);
        });
        // 
        this.orderList.forEach(function (order) {
            var index = _this.allOrderList.findIndex(function (x) { return x.userOrderID == order.userOrderID; });
            if (index == -1) {
                _this.toastrService.info(' Cannot find order, Something went wrong!');
            }
            else {
                console.log(index);
                _this.allOrderList[index].requested = "1";
                _this.supplierOrderListService.updateOrderList(_this.allOrderList[index].key, _this.allOrderList[index]);
            }
        });
        this.createRequest();
        localStorage.removeItem('orderCheckout');
        this.router.navigate(['/supplierCashout']);
    };
    SupplierCashoutFinalComponent.prototype.getOrderList = function () {
        var _this = this;
        this.allOrderList = [];
        this.supplierOrderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (supplierOrderList) {
            _this.allOrderList = supplierOrderList;
        });
    };
    SupplierCashoutFinalComponent.prototype.createRequest = function () {
        var _this = this;
        this.orderList.forEach(function (order) {
            _this.requestContainer.orderDetail.push(order.productDetail);
        });
        this.requestContainer.userRequestID = this.productService.makeid();
        this.requestContainer.totalPrice = this.credit;
        this.requestContainer.supplierEmail = this.ownEmail;
        this.requestContainer.requestApprove = "0";
        this.requestContainer.addOn = Date.now();
        this.cashoutRequestService.createCashoutRequest(this.requestContainer);
    };
    SupplierCashoutFinalComponent.prototype.getCurrentUserInfo = function () {
        var _this = this;
        this.supplierSer.getUsersByOption("email", this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            users.forEach(function (user) {
                _this.user = user;
            });
        });
        this.supplierSer.getUsersByOption("option", "Admin").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (users) {
            _this.users = users;
        });
    };
    SupplierCashoutFinalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-cashout-final',
            template: __webpack_require__(/*! ./supplier-cashout-final.component.html */ "./src/app/pages/supplier/supplier-cashout-final/supplier-cashout-final.component.html"),
            styles: [__webpack_require__(/*! ./supplier-cashout-final.component.css */ "./src/app/pages/supplier/supplier-cashout-final/supplier-cashout-final.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cashout_request_service__WEBPACK_IMPORTED_MODULE_6__["CashoutRequestService"],
            _services_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"],
            _services_email_service__WEBPACK_IMPORTED_MODULE_4__["EmailService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_9__["SupplierOrderListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_5__["SupplierService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]])
    ], SupplierCashoutFinalComponent);
    return SupplierCashoutFinalComponent;
}());



/***/ }),

/***/ "./src/app/pages/supplier/supplier-cashout/supplier-cashout.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-cashout/supplier-cashout.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding-top: 60px;\r\n    text-align: center;\r\n}\r\n\r\n.myCard {\r\n    padding-bottom: 60px;\r\n}\r\n\r\n.card-body {\r\n    max-height: 350px;\r\n    overflow: scroll;\r\n    padding: .5rem;\r\n}\r\n\r\n.order-item {\r\n    border: 2px solid #dfdfdf;\r\n    margin: 0.3rem 0px;\r\n    border-radius: .25rem;\r\n}\r\n\r\n.styling {\r\n    font-size: 0.8em;\r\n}\r\n\r\n.satisfied {\r\n    color: green;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.returns {\r\n    font-size: 0.8em;\r\n    color: red;\r\n}\r\n\r\n.sub-title {\r\n    font-size: 11px;\r\n}\r\n\r\n.pr2 {\r\n    padding-right: 0.2rem !important;\r\n}\r\n\r\n.pr1 {\r\n    padding-right: 0.1rem !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcGxpZXIvc3VwcGxpZXItY2FzaG91dC9zdXBwbGllci1jYXNob3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0kscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLGlDQUFpQztDQUNwQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBsaWVyL3N1cHBsaWVyLWNhc2hvdXQvc3VwcGxpZXItY2FzaG91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm15Q2FyZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxufVxyXG5cclxuLm9yZGVyLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RmZGZkZjtcclxuICAgIG1hcmdpbjogMC4zcmVtIDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG5cclxuLnN0eWxpbmcge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLnNhdGlzZmllZCB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucmV0dXJucyB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5wcjIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMC4ycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcjEge1xyXG4gICAgcGFkZGluZy1yaWdodDogMC4xcmVtICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/supplier/supplier-cashout/supplier-cashout.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-cashout/supplier-cashout.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header currentAction=\"Cash History\" currentLink=\"/supplierCashHistory\" previousAction=\"Home\" previousLink=\"/supplierHome\"></app-header>\r\n<div class=\"container\" style=\"  margin-bottom: 6rem;\">\r\n\r\n    <div class=\"row mt-5\">\r\n        <div class=\"col-12\">\r\n            <p>Your Balance</p>\r\n            <h3>$ {{realCredit | number : '1.2-2'}}</h3>\r\n            <button class=\"btn btn-info btn-lg\" (click)=\"onCashout()\"><i class=\"fa fa-money\"\r\n                                        aria-hidden=\"true\"></i> Cash\r\n                                Out</button>\r\n            <p>PAYMENT SCHEDULED: 10/1</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"orderSelected.length > 0\">\r\n        <p class=\"p-0 m-0\">Selected Order List</p>\r\n        <div class=\" col-12 mb-5 p-0\">\r\n            <div class=\"card card-shadow mb-4\">\r\n                <div class=\"card-body\">\r\n                    <ul class=\"list-group\">\r\n                        <ng-container *ngFor=\"let order of orderSelected;\">\r\n                            <span class=\"order-item\">\r\n                                                                <li class=\"list-group-item justify-content-between p-0 m-0\"\r\n                                                                        *ngFor=\"let product of order.productDetail;\">\r\n                                                                        <div class=\"row p-0 m-0\">\r\n                                                                                <div class=\"col-5 p-0\">\r\n                                                                                        <p class=\"p-0 m-0\">\r\n                                                                                                {{product.productName}}\r\n                                                                                        </p>\r\n                                                                                        <p class=\"styling\">\r\n                                                                                                {{order.addOn | date:'MMM dd, HH:mm' }}\r\n                                                                                        </p>\r\n\r\n                                                                                </div>\r\n                                                                                <div class=\"col-3 p-0\">\r\n                                                                                        <span class=\"sub-title\">SKU Name\r\n                                                                                        </span>\r\n                            <p class=\"p-0 m-0 styling\" *ngFor=\"let SKU of product.productSKU;\">\r\n                                {{SKU.SKU_Name}} </p>\r\n                </div>\r\n                <div class=\"col-2 p-0  pr2\">\r\n                    <span class=\"sub-title \">Quantity</span>\r\n                    <p class=\"p-0 m-0 styling\" *ngFor=\"let SKU of product.productSKU;\">\r\n                        {{SKU.quantity}} </p>\r\n\r\n                </div>\r\n                <div class=\"col-2 p-0 satisfied pr1\">\r\n                    <span class=\"sub-title\">SKU\r\n                                                                                                Price </span>\r\n                    <p class=\"p-0 m-0 styling\" *ngFor=\"let SKU of product.productSKU;\">\r\n                        +${{SKU.SKU_Price}} </p>\r\n\r\n                </div>\r\n            </div>\r\n            </li>\r\n            <button class=\"btn btn-outline-danger addBtn\" (click)=\"removeOrder(order)\" style=\" width: 100%;\">\r\n                                                                        <i class=\"fa fa-minus\"></i></button>\r\n            </span>\r\n            </ng-container>\r\n\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n<div *ngIf=\"supplierOrderList.length > 0\">\r\n    <p class=\"p-0 m-0\">Posted</p>\r\n    <div class=\" col-12 mb-5 p-0\">\r\n        <div class=\"card card-shadow mb-4\">\r\n            <div class=\"card-body\">\r\n                <ul class=\"list-group\">\r\n                    <ng-container *ngFor=\"let order of supplierOrderList;\">\r\n\r\n                        <span class=\"order-item\">\r\n                                                                <li class=\"list-group-item justify-content-between p-0 m-0\"\r\n                                                                        *ngFor=\"let product of order.productDetail;\">\r\n                                                                        <div class=\"row p-0 m-0\">\r\n                                                                                <div class=\"col-5 p-0\">\r\n                                                                                        <p class=\"p-0 m-0\">\r\n                                                                                                {{product.productName}}\r\n                                                                                        </p>\r\n                                                                                        <p class=\"styling\">\r\n                                                                                                {{order.addOn | date:'MMM dd, HH:mm' }}\r\n                                                                                        </p>\r\n\r\n                                                                                </div>\r\n                                                                                <div class=\"col-3 p-0\">\r\n                                                                                        <span class=\"sub-title\">SKU Name\r\n                                                                                        </span>\r\n                        <p class=\"p-0 m-0 styling\" *ngFor=\"let SKU of product.productSKU;\">\r\n                            {{SKU.SKU_Name}} </p>\r\n            </div>\r\n            <div class=\"col-2 p-0  pr2\">\r\n                <span class=\"sub-title\">Quantity</span>\r\n                <p class=\"p-0 m-0 styling\" *ngFor=\"let SKU of product.productSKU;\">\r\n                    {{SKU.quantity}} </p>\r\n\r\n            </div>\r\n            <div class=\"col-2 p-0 satisfied pr1\">\r\n                <span class=\"sub-title\">SKU\r\n                                                                                                Price </span>\r\n                <p class=\"p-0 m-0 styling\" *ngFor=\"let SKU of product.productSKU;\">\r\n                    +${{SKU.SKU_Price}} </p>\r\n\r\n            </div>\r\n        </div>\r\n        </li>\r\n        <button class=\"btn btn-outline-danger addBtn\" (click)=\"addOrder(order)\" style=\" width: 100%;\">\r\n                                                                        <i class=\"fa fa-plus\"></i></button>\r\n        </span>\r\n        </ng-container>\r\n\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n<div *ngIf=\"requestedSupplierOrderList.length > 0\">\r\n    <p class=\"p-0 m-0\">Requested Orders</p>\r\n    <div class=\" col-12 mb-5 p-0\">\r\n        <div class=\"card card-shadow mb-4\">\r\n            <div class=\"card-body\">\r\n                <ul class=\"list-group\">\r\n                    <ng-container *ngFor=\"let order of requestedSupplierOrderList;\">\r\n\r\n                        <span class=\"order-item\">\r\n                                                                <li class=\"list-group-item justify-content-between p-0 m-0\"\r\n                                                                        *ngFor=\"let product of order.productDetail;\">\r\n                                                                        <div class=\"row p-0 m-0\">\r\n                                                                                <div class=\"col-5 p-0\">\r\n                                                                                        <p class=\"p-0 m-0\">\r\n                                                                                                {{product.productName}}\r\n                                                                                        </p>\r\n                                                                                        <p class=\"styling\">\r\n                                                                                                {{order.addOn | date:'MMM dd, HH:mm' }}\r\n                                                                                        </p>\r\n\r\n                                                                                </div>\r\n                                                                                <div class=\"col-3 p-0\">\r\n                                                                                        <span class=\"sub-title\">SKU Name\r\n                                                                                        </span>\r\n                        <p class=\"p-0 m-0 styling\" *ngFor=\"let SKU of product.productSKU;\">\r\n                            {{SKU.SKU_Name}} </p>\r\n            </div>\r\n            <div class=\"col-2 p-0 pr2 \">\r\n                <span class=\"sub-title\">Quantity</span>\r\n                <p class=\"p-0 m-0 styling\" *ngFor=\"let SKU of product.productSKU;\">\r\n                    {{SKU.quantity}} </p>\r\n\r\n            </div>\r\n            <div class=\"col-2 p-0 satisfied pr1\">\r\n                <span class=\"sub-title\">SKU\r\n                                                                                                Price </span>\r\n                <p class=\"p-0 m-0 styling\" *ngFor=\"let SKU of product.productSKU;\">\r\n                    +${{SKU.SKU_Price}} </p>\r\n\r\n            </div>\r\n        </div>\r\n        </li>\r\n        </span>\r\n        </ng-container>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n\r\n</div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/supplier/supplier-cashout/supplier-cashout.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-cashout/supplier-cashout.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SupplierCashoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierCashoutComponent", function() { return SupplierCashoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SupplierCashoutComponent = /** @class */ (function () {
    function SupplierCashoutComponent(router, toastrService, supplierOrderListService, supplierService) {
        this.router = router;
        this.toastrService = toastrService;
        this.supplierOrderListService = supplierOrderListService;
        this.supplierService = supplierService;
        this.supplierOrderList = new Array();
        this.orderSelected = [];
        this.checkChild = "email";
        this.credit = 0;
        this.realCredit = 0;
        this.requestedSupplierOrderList = [];
    }
    SupplierCashoutComponent.prototype.ngOnInit = function () {
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
        this.getUserOption();
        this.getOrderList();
    };
    SupplierCashoutComponent.prototype.getOrderList = function () {
        var _this = this;
        this.supplierOrderList = [];
        this.requestedSupplierOrderList = [];
        this.supplierOrderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (supplierOrderList) {
            _this.realCredit = 0;
            _this.requestedSupplierOrderList = [];
            _this.supplierOrderList = [];
            supplierOrderList.forEach(function (order) {
                if (_this.ownEmail == order.supplierEmail) {
                    console.log(order);
                    if (order.requested == "0") {
                        _this.realCredit += order.totalPrice;
                        _this.supplierOrderList.push(order);
                    }
                    else {
                        _this.requestedSupplierOrderList.push(order);
                    }
                }
            });
            console.log(_this.realCredit);
        });
    };
    SupplierCashoutComponent.prototype.getUserOption = function () {
        var _this = this;
        this.supplierService.getUsersByOption(this.checkChild, this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (user) {
            _this.user = user[0];
        });
    };
    SupplierCashoutComponent.prototype.addOrder = function (order) {
        var index = 0;
        index = this.supplierOrderList.findIndex(function (x) { return x.userOrderID === order.userOrderID; });
        if (index == -1) {
            this.toastrService.info(' Cannot find order, Something went wrong!');
        }
        else {
            this.orderSelected.push(this.supplierOrderList[index]);
            this.supplierOrderList.splice(index, 1);
        }
    };
    SupplierCashoutComponent.prototype.removeOrder = function (order) {
        var index = 0;
        index = this.orderSelected.findIndex(function (x) { return x.userOrderID === order.userOrderID; });
        if (index == -1) {
            this.toastrService.info(' Cannot find order, Something went wrong!');
        }
        else {
            this.supplierOrderList.push(this.orderSelected[index]);
            this.orderSelected.splice(index, 1);
        }
    };
    SupplierCashoutComponent.prototype.onCashout = function () {
        if (this.orderSelected.length > 0) {
            console.log(this.orderSelected);
            console.log(this.supplierOrderList);
            localStorage.setItem('orderCheckout', JSON.stringify(this.orderSelected));
            this.router.navigate(['/supplierCashoutFinal']);
        }
        else {
            this.toastrService.info('Order Not Selected!');
        }
    };
    SupplierCashoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-cashout',
            template: __webpack_require__(/*! ./supplier-cashout.component.html */ "./src/app/pages/supplier/supplier-cashout/supplier-cashout.component.html"),
            styles: [__webpack_require__(/*! ./supplier-cashout.component.css */ "./src/app/pages/supplier/supplier-cashout/supplier-cashout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_2__["SupplierOrderListService"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"]])
    ], SupplierCashoutComponent);
    return SupplierCashoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/supplier/supplier-home/supplier-home.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-home/supplier-home.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnStyle {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n  }\r\n  .col-12{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcGxpZXIvc3VwcGxpZXItaG9tZS9zdXBwbGllci1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixhQUFhO0dBQ2Q7RUFDRDtJQUNFLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0dBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VwcGxpZXIvc3VwcGxpZXItaG9tZS9zdXBwbGllci1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuU3R5bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmNvbC0xMntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/supplier/supplier-home/supplier-home.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-home/supplier-home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <app-header currentAction=\"M2B\" currentLink = \"/supplierCashout\" previousAction=\"Log Out\" previousLink=\"/auth/login\" ></app-header>\r\n  <div class=\"container \" style=\"margin-top: 75px  !important; \">\r\n\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-12\">\r\n        <h3>Welcome To M2B</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"btnStyle mt-5\">\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-12  col-lg-6\" >\r\n          <button class=\"btn btn-primary btn-lg mt-2\"  [routerLink]=\"['/admin/categories/products']\"><i class=\"fa fa-user-circle-o\"></i> Admin</button>\r\n      </div>\r\n      <div class=\"col-12 col-lg-6 \">\r\n          <button class=\"btn btn-primary btn-lg mt-2\"[routerLink]=\"['/supplierCashout']\"><i class=\"fa fa-meetup\"></i> M2B</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/supplier/supplier-home/supplier-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-home/supplier-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: SupplierHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierHomeComponent", function() { return SupplierHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/supplier.service */ "./src/app/services/supplier.service.ts");
/* harmony import */ var _services_cashout_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cashout-request.service */ "./src/app/services/cashout-request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/supplier-order-list-service.service */ "./src/app/services/supplier-order-list-service.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SupplierHomeComponent = /** @class */ (function () {
    function SupplierHomeComponent(router, cashoutRequestService, supplierService, supplierOrderListService) {
        this.router = router;
        this.cashoutRequestService = cashoutRequestService;
        this.supplierService = supplierService;
        this.supplierOrderListService = supplierOrderListService;
        this.realCredit = 0;
        this.diffrRealCredit = 0;
        this.LSRole = localStorage.getItem("op");
        this.ownEmail = JSON.parse(localStorage.getItem("user")).email;
    }
    SupplierHomeComponent.prototype.ngOnInit = function () {
        this.getUserOption();
        this.getOrderList();
        this.getCashoutList();
        if (this.LSRole === _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Role"].Admin) {
            this.router.navigate(['/admin']);
        }
        else if (this.LSRole === _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Role"].Business) {
            this.router.navigate(['/home/products']);
        }
        else if (this.LSRole === _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Role"].Courier) {
            this.router.navigate(['/courier-map']);
        }
    };
    SupplierHomeComponent.prototype.getOrderList = function () {
        var _this = this;
        this.supplierOrderListService.getOrderLists().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (supplierOrderList) {
            _this.realCredit = 0;
            supplierOrderList.forEach(function (order) {
                if (_this.ownEmail == order.supplierEmail) {
                    console.log(order);
                    _this.realCredit += order.totalPrice;
                }
            });
        });
    };
    SupplierHomeComponent.prototype.getCashoutList = function () {
        var _this = this;
        this.cashoutRequestService.getCashoutRequestsByOption("supplierEmail", this.ownEmail).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (cashoutOrderList) {
            cashoutOrderList.forEach(function (order) {
                if (order.requestApprove == '1') {
                    _this.diffrRealCredit += order.totalPrice;
                }
            });
            _this.updateUser();
        });
    };
    SupplierHomeComponent.prototype.updateUser = function () {
        if (this.user) {
            this.user.credit = (this.realCredit ? this.realCredit : 0) - (this.diffrRealCredit ? this.diffrRealCredit : 0);
            this.supplierService.updateUser(this.user.key, this.user);
        }
    };
    SupplierHomeComponent.prototype.getUserOption = function () {
        var _this = this;
        this.supplierService.getUsersByOption('email', this.ownEmail).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (user) {
            _this.user = user[0];
        });
    };
    SupplierHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-home',
            template: __webpack_require__(/*! ./supplier-home.component.html */ "./src/app/pages/supplier/supplier-home/supplier-home.component.html"),
            styles: [__webpack_require__(/*! ./supplier-home.component.css */ "./src/app/pages/supplier/supplier-home/supplier-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_cashout_request_service__WEBPACK_IMPORTED_MODULE_4__["CashoutRequestService"],
            _services_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"],
            _services_supplier_order_list_service_service__WEBPACK_IMPORTED_MODULE_6__["SupplierOrderListService"]])
    ], SupplierHomeComponent);
    return SupplierHomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/supplier/supplier-under-construction/supplier-under-construction.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-under-construction/supplier-under-construction.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top: 60px;\r\n    text-align: center;\r\n    \r\n }\r\n.myCard{\r\n    padding-bottom: 60px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcGxpZXIvc3VwcGxpZXItdW5kZXItY29uc3RydWN0aW9uL3N1cHBsaWVyLXVuZGVyLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjs7RUFFckI7QUFDRjtJQUNJLHFCQUFxQjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBsaWVyL3N1cHBsaWVyLXVuZGVyLWNvbnN0cnVjdGlvbi9zdXBwbGllci11bmRlci1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gfVxyXG4ubXlDYXJke1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/supplier/supplier-under-construction/supplier-under-construction.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-under-construction/supplier-under-construction.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header currentAction=\"Cash History\" currentLink=\"/supplierCashHistory\" previousAction=\"Cash History\"\r\n  previousLink=\"/supplierCashHistory\"></app-header>\r\n<div class=\"container\">\r\n\r\n\r\n  Under Construction\r\n\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/supplier/supplier-under-construction/supplier-under-construction.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/supplier/supplier-under-construction/supplier-under-construction.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SupplierUnderConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierUnderConstructionComponent", function() { return SupplierUnderConstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupplierUnderConstructionComponent = /** @class */ (function () {
    function SupplierUnderConstructionComponent() {
    }
    SupplierUnderConstructionComponent.prototype.ngOnInit = function () {
    };
    SupplierUnderConstructionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-under-construction',
            template: __webpack_require__(/*! ./supplier-under-construction.component.html */ "./src/app/pages/supplier/supplier-under-construction/supplier-under-construction.component.html"),
            styles: [__webpack_require__(/*! ./supplier-under-construction.component.css */ "./src/app/pages/supplier/supplier-under-construction/supplier-under-construction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupplierUnderConstructionComponent);
    return SupplierUnderConstructionComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  payment works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/services/cashout-request.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/cashout-request.service.ts ***!
  \*****************************************************/
/*! exports provided: CashoutRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutRequestService", function() { return CashoutRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CashoutRequestService = /** @class */ (function () {
    function CashoutRequestService(afAuth, db, authService) {
        this.afAuth = afAuth;
        this.db = db;
        this.authService = authService;
        this.dbPath = '/cashoutRequest';
        this.CashoutRequestsRef = null;
        this.CashoutRequestRef = null;
        this.CashoutRequestsRef = db.list(this.dbPath);
    }
    CashoutRequestService.prototype.createCashoutRequest = function (cashoutRequest) {
        this.CashoutRequestsRef.push(cashoutRequest);
    };
    CashoutRequestService.prototype.setCashoutRequest = function (id, cashoutRequest) {
        var itemPath = this.dbPath + "/" + id;
        this.CashoutRequestRef = this.db.object(itemPath);
        return this.CashoutRequestRef.set(cashoutRequest);
    };
    CashoutRequestService.prototype.getCashoutRequests = function () {
        return this.CashoutRequestsRef;
    };
    CashoutRequestService.prototype.getCashoutRequestsByOption = function (option, value) {
        this.CashoutRequestsByoption = this.db.list(this.dbPath, function (ref) { return ref.orderByChild(option).equalTo(value); });
        return this.CashoutRequestsByoption;
    };
    CashoutRequestService.prototype.updateCashoutRequest = function (key, value) {
        var _this = this;
        this.CashoutRequestsRef.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    CashoutRequestService.prototype.handleError = function (error) {
        console.log(error);
    };
    CashoutRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CashoutRequestService);
    return CashoutRequestService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
        this.dbPath = '/categories';
        this.categoriesRef = null;
        this.categoryRef = null;
        this.categoriesRef = db.list(this.dbPath);
    }
    CategoryService.prototype.createCategory = function (category) {
        this.categoriesRef.push(category);
    };
    CategoryService.prototype.getCategoriesList = function () {
        return this.categoriesRef;
    };
    CategoryService.prototype.getCategoriesListByOption = function (option, value) {
        this.categoriesListByoption = this.db.list(this.dbPath, function (ref) { return ref.orderByChild(option).equalTo(value); });
        return this.categoriesListByoption;
    };
    CategoryService.prototype.GetCategory = function (id) {
        /*let cat = this.db.list('/categories', {
        query: {
            key: id
        }
    });
        console.log(cat);*/
        var itemPath = this.dbPath + "/" + id;
        this.categoryRef = this.db.object(itemPath);
        return this.categoryRef;
    };
    CategoryService.prototype.updateCategory = function (key, value) {
        var _this = this;
        this.categoriesRef.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    CategoryService.prototype.deleteCategory = function (key) {
        var _this = this;
        this.categoriesRef.remove(key).catch(function (error) { return _this.handleError(error); });
    };
    CategoryService.prototype.handleError = function (error) {
        console.log(error);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/chat-message.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/chat-message.service.ts ***!
  \**************************************************/
/*! exports provided: ChatMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageService", function() { return ChatMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatMessageService = /** @class */ (function () {
    function ChatMessageService(afAuth, db, authService) {
        this.afAuth = afAuth;
        this.db = db;
        this.authService = authService;
        this.dbPath = '/chats';
        this.chatMessagesRef = null;
        this.chatMessageRef = null;
        this.chatMessagesRef = db.list(this.dbPath);
    }
    ChatMessageService.prototype.createchatMessage = function (chatMessage) {
        this.chatMessagesRef.push(chatMessage);
    };
    ChatMessageService.prototype.setchatMessage = function (id, chatMessage) {
        var itemPath = this.dbPath + "/" + id;
        this.chatMessageRef = this.db.object(itemPath);
        return this.chatMessageRef.set(chatMessage);
    };
    ChatMessageService.prototype.getchatMessages = function () {
        return this.chatMessagesRef;
    };
    ChatMessageService.prototype.getchatMessagesByOption = function (option, value) {
        this.chatMessagesByoption = this.db.list(this.dbPath, function (ref) { return ref.orderByChild(option).equalTo(value); });
        return this.chatMessagesByoption;
    };
    ChatMessageService.prototype.updatechatMessage = function (key, value) {
        var _this = this;
        this.chatMessagesRef.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    ChatMessageService.prototype.handleError = function (error) {
        console.log(error);
    };
    ChatMessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ChatMessageService);
    return ChatMessageService;
}());



/***/ }),

/***/ "./src/app/services/email.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        this.supplierTag = { title: "Thank You!", data: "User Name: ABC ", link: "" };
        this.emailUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].functionsURL + "/mailService";
        this.urlToken = "";
        this.params = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["URLSearchParams"]();
    }
    EmailService.prototype.sendEmail = function (email, info, totalSelectPrice, order) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, options, res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
                        options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
                        console.log(email);
                        this.params.set('to', email);
                        this.params.set('from', '"M2B Order Processing Center" <orders@m2bwholesale.com>');
                        this.params.set('subject', "Order from M2b by " + email);
                        if (totalSelectPrice == -2) {
                            this.params.set('html', "\n\n      <div>\n      <div style=\"width:510px;margin:20px auto;padding:20px;background-color:#ff8e32; border-radius: 9px;\">\n          <div style=\"padding:30px 30px 0px 30px;width:450px;background-color:#fff;\">\n              <div style=\"margin-bottom:35px;\">http://m2bapp.herokuapp.com/assets/img/IMG_6766.JPG\n              <img src=\"\"\n                        alt=\"M2B Logo Not Found\" style=\" width: 40%; margin-left: 30%; \">\n                        </div>\n              <div style=\"font-size:14px;color:#505050;font-weight:500;\">" + info.title + "</div>\n              <p style=\"font-size:12px;color:#505050;margin:8px 0 25px;width:100%;line-height:18px;\">" + info.data + "</p>\n              <h5>Tracking No :</h5>" + order + "\n              <p style=\"font-size:12px;color:#505050;margin-top:25px;margin-bottom:20px;\">\n              </p>\n              \n  \n              <div style=\"border-top:1px solid #d8d8d8;padding-top:15px;padding-bottom:20px;\">\n                  <p style=\"font-size:12px;color:#505050;margin:0;\">@ M2BWholesale 2019</p>\n              </div>\n          </div>\n      </div>\n    </div>\n     ");
                        }
                        else {
                            this.params.set('html', "\n\n      <div>\n      <div style=\"width:510px;margin:20px auto;padding:20px;background-color:#ff8e32; border-radius: 9px;\">\n          <div style=\"padding:30px 30px 0px 30px;width:450px;background-color:#fff;\">\n              <div style=\"margin-bottom:35px;\">\n              <img src=\"http://m2bapp.herokuapp.com/assets/img/IMG_6766.JPG\"\n                        alt=\"M2B Logo Not Found\" style=\" width: 40%; margin-left: 30%; \">\n                        </div>\n              <div style=\"font-size:14px;color:#505050;font-weight:500;\">" + info.title + "</div>\n              <p style=\"font-size:12px;color:#505050;margin:8px 0 25px;width:100%;line-height:18px;\">" + info.data + "</p>\n              " + this.getTable(order) + "\n              <p style=\"font-size:12px;color:#505050;margin-top:25px;margin-bottom:20px;\">\n              </p>\n              <div style=\"padding-bottom:30px;\">\n  \n                  <p style=\"font-weight:600;margin:0;\">Total Amount: $ " + totalSelectPrice + "</p>\n                  " + info.link + "\n              </div>\n  \n              <div style=\"border-top:1px solid #d8d8d8;padding-top:15px;padding-bottom:20px;\">\n                  <p style=\"font-size:12px;color:#505050;margin:0;\">\u00A9 M2BWholesale 2019 </p>\n              </div>\n          </div>\n      </div>\n    </div>\n     ");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.post(this.emailUrl, this.params)
                                .toPromise()];
                    case 2:
                        res = _a.sent();
                        console.log(res);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EmailService.prototype.deployToken = function (token) {
        var data = {
            "token": token,
        };
        return this.http.post('https://m2b.foxaf.com/su.php', data).toPromise().then(function (res) {
            return res;
        }, function (err) {
            return err['error'];
        });
    };
    EmailService.prototype.getTable = function (orderList) {
        var _this = this;
        console.log(orderList);
        var SKU = "";
        orderList.productDetail.forEach(function (data) {
            SKU = SKU + ("\n      <p style=\"color:#505050;width:100%;line-height:18px;font-weight: bold;font-size: initial;\">Order Details: <span style=\"font-weight: normal;\">" + data.productName + "</span><br></p>\n            <table style=\"text-align: center; margin: auto; border: 1px solid #dedede; padding: .5rem; width: 33%;\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\"\n                            style=\"background: #f2f0e6; text-align: center;  border: 1px solid #dedede; padding: 1rem; width: 33%;\">\n                            SKU Name</th>\n                        <th scope=\"col\"\n                            style=\"background: #f2f0e6; text-align: center; margin: auto; border: 1px solid #dedede; padding: 1rem; width: 33%;\">\n                            Price</th>\n                        <th scope=\"col\"\n                            style=\"background: #f2f0e6; text-align: center; margin: auto; border: 1px solid #dedede; padding: 1rem; width: 33%;\">\n                            Qt</th>\n                    </tr>\n                </thead>\n                <tbody>\n                " + _this.getTableData(data) + "\n\n                </tbody>\n            </table>\n      ");
        });
        return SKU;
    };
    EmailService.prototype.getTableData = function (data) {
        var SKU = "";
        data.productSKU.forEach(function (data) {
            SKU = SKU + ("\n      <tr >\n      <td scope=\"col\" class=\"bold\"\n      style=\"text-align: center; margin: auto; border: 1px solid #dedede; padding: 1rem; width: 50%;\">" + data.SKU_Name + "</td>\n      <td scope=\"col\" class=\"bold\"\n      style=\"text-align: center; margin: auto; border: 1px solid #dedede; padding: 1rem; width: 50%;\">$ " + data.SKU_Price + "</td>  \n      <td scope=\"col\" class=\"bold\"\n      style=\"text-align: center; margin: auto; border: 1px solid #dedede; padding: 1rem; width: 50%;\"> " + data.quantity + "</td>\n  </tr>\n      ");
        });
        return SKU;
    };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/services/manage-user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/manage-user.service.ts ***!
  \*************************************************/
/*! exports provided: ManageUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserService", function() { return ManageUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ManageUserService = /** @class */ (function () {
    function ManageUserService(http) {
        this.http = http;
        this.emailUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].functionsURL + "/userDelete";
        this.params = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["URLSearchParams"]();
    }
    ManageUserService.prototype.deletUser = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, options, res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
                        options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
                        this.params.set('email', email);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.post(this.emailUrl, this.params)
                                .toPromise()];
                    case 2:
                        res = _a.sent();
                        console.log(res);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ManageUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ManageUserService);
    return ManageUserService;
}());



/***/ }),

/***/ "./src/app/services/order-list.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/order-list.service.ts ***!
  \************************************************/
/*! exports provided: OrderListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListService", function() { return OrderListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderListService = /** @class */ (function () {
    function OrderListService(db, authService) {
        this.db = db;
        this.authService = authService;
        this.isOrderAdded = false;
        this.dbPath = '/orderLists';
        this.OrderListsRef = null;
        this.OrderListRef = null;
        this.OrderListsRef = db.list(this.dbPath);
    }
    OrderListService.prototype.createOrderList = function (OrderList) {
        this.OrderListsRef.push(OrderList);
    };
    OrderListService.prototype.getOrderLists = function () {
        return this.OrderListsRef;
    };
    OrderListService.prototype.getOrderListsByOption = function (option, value) {
        this.OrderListsByoption = this.db.list(this.dbPath, function (ref) { return ref.orderByChild(option).equalTo(value); });
        return this.OrderListsByoption;
    };
    OrderListService.prototype.GetOrderList = function (id) {
        var itemPath = this.dbPath + "/" + id;
        this.OrderListRef = this.db.object(itemPath);
        return this.OrderListRef;
    };
    OrderListService.prototype.updateOrderList = function (key, value) {
        var _this = this;
        this.OrderListsRef.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    OrderListService.prototype.handleError = function (error) {
        console.log(error);
    };
    OrderListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], OrderListService);
    return OrderListService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(afs, db) {
        this.afs = afs;
        this.db = db;
        this.dbPath = '/products';
        this.productsRef = null;
        this.productRef = null;
        this.prodRef = null;
        this.selectProduct = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]().ref();
        this.metadata = {
            contentType: 'image/jpeg',
        };
        this.selectProducts = this.selectProduct.asObservable();
        this.productsRef = db.list(this.dbPath);
    }
    ProductService.prototype.changeData = function (message) {
        this.selectProduct.next(message);
    };
    ProductService.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    ProductService.prototype.uploadImg = function (id, folder, did, img) {
        var _this = this;
        if (folder === void 0) { folder = ''; }
        if (did === void 0) { did = ''; }
        if (img === void 0) { img = ''; }
        var rurl = '';
        alert(id);
        alert(document.getElementById(id));
        var _loop_1 = function (selectedFile) {
            console.log("comming");
            this_1.nameFile = "" + this_1.makeid() + selectedFile.name;
            var path = "/" + folder + "/" + this_1.nameFile;
            var iRef = this_1.storageRef.child(path);
            iRef.put(selectedFile, this_1.metadata).then(function (snapshot) {
                // alert(this.nameFile);
                // product.product_image_url g1= this.nameFile;
                _this.storageRef.child(path).getDownloadURL().then(function (url) {
                    //Set Image URL
                    // alert(url);
                    if (did) {
                        //did
                        document.getElementById(did).value = url;
                        localStorage.setItem(img, url);
                        document.getElementById(img).src = url;
                        // alert(url);
                    }
                    rurl = url;
                    // return this.productsRef.push(product);
                }).catch(function (error) {
                    console.log(error);
                });
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = [document.getElementById(id).files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_1(selectedFile);
        }
        return rurl;
    };
    ProductService.prototype.createProduct = function (product) {
        return this.productsRef.push(product);
    };
    ProductService.prototype.getProductsList = function () {
        return this.productsRef;
    };
    ProductService.prototype.getProductbycat = function (option, value) {
        console.log(option, value);
        this.productsByoption = this.db.list(this.dbPath, function (ref) { return ref.orderByChild(option).equalTo(value); });
        return this.productsByoption;
    };
    ProductService.prototype.GetProduct = function (id) {
        var itemPath = this.dbPath + "/" + id;
        this.productRef = this.db.object(itemPath);
        return this.productRef;
    };
    ProductService.prototype.updateProduct = function (key, value, oldName) {
        return this.productsRef.update(key, value);
    };
    ProductService.prototype.deleteProduct = function (key) {
        var _this = this;
        this.GetProduct(key).valueChanges().subscribe(function (data) {
            if (data.path) {
                _this.storageRef.child(_this.folder + "/" + data.product_image_url).delete().catch(function (error) { return _this.handleError(error); }).then(function (d) {
                    _this.productsRef.remove(key).catch(function (error) { return _this.handleError(error); });
                });
            }
            else {
                _this.productsRef.remove(key).catch(function (error) { return _this.handleError(error); });
            }
        });
    };
    ProductService.prototype.handleError = function (error) {
        console.log(error);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/return-request.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/return-request.service.ts ***!
  \****************************************************/
/*! exports provided: ReturnRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnRequestService", function() { return ReturnRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReturnRequestService = /** @class */ (function () {
    function ReturnRequestService(afAuth, db, authService) {
        this.afAuth = afAuth;
        this.db = db;
        this.authService = authService;
        this.dbPath = '/returnRequest';
        this.ReturnRequestsRef = null;
        this.ReturnRequestRef = null;
        this.ReturnRequestsRef = db.list(this.dbPath);
    }
    ReturnRequestService.prototype.createReturnRequest = function (ReturnRequest) {
        this.ReturnRequestsRef.push(ReturnRequest);
    };
    ReturnRequestService.prototype.setReturnRequest = function (id, ReturnRequest) {
        var itemPath = this.dbPath + "/" + id;
        this.ReturnRequestRef = this.db.object(itemPath);
        return this.ReturnRequestRef.set(ReturnRequest);
    };
    ReturnRequestService.prototype.getReturnRequests = function () {
        return this.ReturnRequestsRef;
    };
    ReturnRequestService.prototype.getReturnRequestsByOption = function (option, value) {
        this.ReturnRequestsByoption = this.db.list(this.dbPath, function (ref) { return ref.orderByChild(option).equalTo(value); });
        return this.ReturnRequestsByoption;
    };
    ReturnRequestService.prototype.updateReturnRequest = function (key, value) {
        var _this = this;
        this.ReturnRequestsRef.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    ReturnRequestService.prototype.handleError = function (error) {
        console.log(error);
    };
    ReturnRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ReturnRequestService);
    return ReturnRequestService;
}());



/***/ }),

/***/ "./src/app/services/setting.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/setting.service.ts ***!
  \*********************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingService = /** @class */ (function () {
    function SettingService(db) {
        this.db = db;
        this.dbPath = '/settings';
        this.settingsRef = null;
        this.settingRef = null;
        this.settingsRef = db.list(this.dbPath);
    }
    SettingService.prototype.createSetting = function (setting) {
        this.settingsRef.push(setting);
    };
    SettingService.prototype.getSettingList = function () {
        return this.settingsRef;
    };
    SettingService.prototype.GetSetting = function (id) {
        var itemPath = this.dbPath + "/" + id;
        this.settingRef = this.db.object(itemPath);
        return this.settingRef;
    };
    SettingService.prototype.updateSetting = function (key, value) {
        var _this = this;
        this.settingsRef.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    SettingService.prototype.deleteSetting = function (key) {
        var _this = this;
        this.settingsRef.remove(key).catch(function (error) { return _this.handleError(error); });
    };
    SettingService.prototype.handleError = function (error) {
        console.log(error);
    };
    SettingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "./src/app/services/supplier-order-list-service.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/supplier-order-list-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: SupplierOrderListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierOrderListService", function() { return SupplierOrderListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupplierOrderListService = /** @class */ (function () {
    function SupplierOrderListService(db, authService) {
        this.db = db;
        this.authService = authService;
        this.isOrderAdded = false;
        this.dbPath = '/supplierOrderLists';
        this.OrderListsRef = null;
        this.OrderListRef = null;
        this.OrderListsRef = db.list(this.dbPath);
    }
    SupplierOrderListService.prototype.createOrderList = function (OrderList) {
        this.OrderListsRef.push(OrderList);
    };
    SupplierOrderListService.prototype.getOrderLists = function () {
        return this.OrderListsRef;
    };
    SupplierOrderListService.prototype.getOrderListsByOption = function (option, value) {
        this.OrderListsByoption = this.db.list(this.dbPath, function (ref) { return ref.orderByChild(option).equalTo(value); });
        return this.OrderListsByoption;
    };
    SupplierOrderListService.prototype.updateOrderList = function (key, value) {
        var _this = this;
        this.OrderListsRef.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    SupplierOrderListService.prototype.GetOrderList = function (id) {
        var itemPath = this.dbPath + "/" + id;
        this.OrderListRef = this.db.object(itemPath);
        return this.OrderListRef;
    };
    SupplierOrderListService.prototype.handleError = function (error) {
        console.log(error);
    };
    SupplierOrderListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SupplierOrderListService);
    return SupplierOrderListService;
}());



/***/ }),

/***/ "./src/app/services/supplier.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/supplier.service.ts ***!
  \**********************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/core/auth.service */ "./src/app/authentication/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupplierService = /** @class */ (function () {
    function SupplierService(db, authService) {
        this.db = db;
        this.authService = authService;
        this.dbPath = '/users';
        this.usersRef = null;
        this.userRef = null;
        this.needCredit = 0;
        this.usersRef = db.list(this.dbPath);
    }
    SupplierService.prototype.getUsersList = function () {
        return this.usersRef;
    };
    SupplierService.prototype.getUsersByOption = function (option, value) {
        this.usersByoption = this.db.list(this.dbPath, function (ref) { return ref.orderByChild(option).equalTo(value); });
        return this.usersByoption;
    };
    SupplierService.prototype.GetUser = function (id) {
        var itemPath = this.dbPath + "/" + id;
        this.userRef = this.db.object(itemPath);
        return this.userRef;
    };
    SupplierService.prototype.updateUser = function (key, value) {
        var _this = this;
        this.usersRef.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    SupplierService.prototype.deleteUser = function (key) {
        var _this = this;
        this.usersRef.remove(key).catch(function (error) { return _this.handleError(error); });
    };
    SupplierService.prototype.handleError = function (error) {
        console.log(error);
    };
    SupplierService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _authentication_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SupplierService);
    return SupplierService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDmwh_ariwC1hZENVvCHVELmFsaMJjO1Z0",
        authDomain: "m2bwholesale-219d4.firebaseapp.com",
        databaseURL: "https://m2bwholesale-219d4.firebaseio.com",
        projectId: "m2bwholesale-219d4",
        storageBucket: "m2bwholesale-219d4.appspot.com",
        messagingSenderId: "545202805485"
    },
    functionsURL: 'https://us-central1-m2bwholesale-219d4.cloudfunctions.net',
    paypalSandboxKey: 'AQT6Lob6ZwNMSCkI8dE6ZjiC6IyKW77SdjkxZ8YWR4tN3pjbn-SfvTDDxkquTG7mRDNDlABPQZCFEUK9',
    paypalProductionKey: 'AYUF1sisd8CX6n9wDzO13KAL2wpq9FXZcbcnoZc49cvy2GIW7-zEtlOSKMCZg0B9kRzWMYdOBKHN17Ht',
    appUrl: 'https://m2bapp.herokuapp.com'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ITVisionPc\Desktop\itvision-m2bapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map