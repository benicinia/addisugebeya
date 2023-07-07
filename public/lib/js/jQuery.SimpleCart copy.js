/* 
 * Gebeya Shopping Cart v0.1
 * 
 * 
 * Authour : Bncn
 */


/* '(function(){})();' this function is used, to make all variables of the plugin Private */

(function ($, window, document, undefined) {
// default options
var settings = {
    checkout				: { type: "Ezpay", email: "abenezeramdie@gmail.com" },
    currency				: "ETB",
    language				: "english-us",

    cartStyle				: "div",
    cartColumns			: [
        { attr: "name", label: "Name" },
        { attr: "price", label: "Price", view: 'currency' },
        { view: "decrement", label: false },
        { attr: "quantity", label: "Qty" },
        { view: "increment", label: false },
        { attr: "total", label: "SubTotal", view: 'currency' },
        { view: "remove", text: "Remove", label: false }
    ],

    excludeFromCheckout	: ['thumb'],

    shippingFlatRate		: 0,
    shippingQuantityRate	: 0,
    shippingTotalRate		: 0,
    shippingCustom		: null,

    taxRate				: 0,
    
    taxShipping			: false,

    data				: {}

}
    /* Default Options */
    var defaults = {
        cart: [],
        addtoCartClass: '.sc-add-to-cart',
        cartProductListClass: '.cart-products-list',
        totalCartCountClass: '.total-cart-count',
        totalCartCostClass: '.total-cart-cost',
        showcartID : '#show-cart',
        itemCountClass : '.item-count',
        removeItemClass:'.sc-remove',
        clearCartClass:'sc-clear-cart',
        chkOutClass:'sc-chk-out'
        
    };

    function Item(name,image, price, count) {
        this.name = name;
        this.image=image;
        this.price = price;
        this.count = count;
    }
    /*Constructor function*/
    function simpleCart(domEle, options) {

        /* Merge user settings with default, recursively */
        this.options = $.extend(true, {}, defaults, options);
        //Cart array
        this.cart = [];
        //Dom Element
        this.cart_ele = $(domEle);
        //Initial init function
        this.init();
    }


    /*plugin functions */
    $.extend(simpleCart.prototype, {
        init: function () {
            this._setupCart();
            this._setEvents();
            this._loadCart();
            this._updateCartDetails();
        },
        _displayCart: function () {
            var cartArray = this._listCart();
            console.log(cartArray);
            var output = "";
            if (cartArray.length <= 0) {
                output = "<h4>Your cart is empty</h4>";
            }
            
            for (var i in cartArray) {
                output += "<div class='cart-each-product'>\n\
                       <div class='name'>" + cartArray[i].name + "</div>\n\
                       <div class='name'>\n\
                       <img style='width:67px;' class='image' src="+'../images/uploads/'+cartArray[i].image +">\n\
                       </div>\n\
                       <div class='quantityContainer'>\n\
                            <input type='number' class='quantity form-control item-count' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' min='0' value=" + cartArray[i].count + " name='number'>\n\
                       </div>\n\
                        <div class='quantity-am'><i class='fa fa-euro'>" + cartArray[i].price + "</i></div>\n\
                        <div class='quantityContainer'>\n\
                        <button type='button' class='quantity form-control item-count sc-remove' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' min='0' value=" + cartArray[i].count + " name='number'><i class='fas fa-2x fa-times'></i>\n\
                   </div></button>\n\
                       </div>";
                       
            }
            return output;
        },
     
        _setupCart: function () {
            var cartArray = this._listCart();
            console.log(cartArray);
            var output = "";
            var outputz = "";
            if (cartArray.length <= 0) {
                output = "<h4>Your cart is empty</h4>";
            }
            for (var i in cartArray){
                outputz += "<div class='cart-each-product'>\n\
                <input type='hidden' name="+'name_'+ cartArray.indexOf(cartArray[i].name)+" value="+ cartArray[i].name +">\n\
                   <div class='quantityContainer'>\n\
                     <input type='hidden' name="+'price_'+ cartArray[i].index+" value="+ cartArray[i].price +">\n\
                </div>\n\
                                       </div>";
                
                
     }
            
            for (var i in cartArray) {
                output += "<div class='cart-each-product'>\n\
                       <div class='name'>" + cartArray[i].name + "</div>\n\
                       <div class='name'>\n\
                       <img style='width:67px;' class='image' src="+'../images/uploads/'+cartArray[i].image +">\n\
                       </div>\n\
                       <div class='quantityContainer'>\n\
                            <input type='number' class='quantity form-control item-count' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' min='0' value=" + cartArray[i].count + " name='number'>\n\
                       </div>\n\
                        <div class='quantity-am'><i class='fa fa-euro'>" + cartArray[i].price + "</i></div>\n\
                        <div class='quantityContainer'>\n\
                        <button type='button' class='quantity form-control item-count sc-remove' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' min='0' value=" + cartArray[i].count + " name='number'><i class='fas fa-2x fa-times'></i>\n\
                   </div></button>\n\
                       </div>";
                       
            }
           
            this.cart_ele.addClass("cart-grid panel panel-defaults");
            this.cart_ele.append("<div class='panel-heading cart-heading'><div class='total-cart-count'>0</div><div class='spacer'></div><i class='fa fa-euro total-cart-cost'>0</i><div></div></div>")
            this.cart_ele.append("<div class='panel-body cart-body'><div class='cart-products-list' id='show-cart'><!-- Dynamic Code from Script comes here--></div></div>")
           
           
           
           
            return output;
        },
        _addProductstoCart: function () {
        },
        _updateCartDetails: function () {
            var mi = this;
            $(this.options.cartProductListClass).html(mi._displayCart());
            $(this.options.totalCartCountClass).html(mi._totalCartCount());
            $(this.options.totalCartCostClass).html(mi._totalCartCost());
        },
        _setCartbuttons: function () {

        },
        _setEvents: function () {
            var mi = this;
            $(this.options.addtoCartClass).on("click", function (e) {
                e.preventDefault();
                var name = $(this).attr("data-name");
                var image = $(this).attr("data-img");
                var cost = Number($(this).attr("data-price"));
                mi._addItemToCart(name,image, cost, 1);
                mi._updateCartDetails();
            });
            
            $(this.options.showcartID).on("change", this.options.itemCountClass, function (e) {
                var ci = this;
        e.preventDefault();
        var count = $(this).val();
        var name = $(this).attr("data-name");
        var image = $(this).attr("data-img");
        var cost = Number($(this).attr("data-price"));
        mi._removeItemfromCart(name,image,cost, count);
        mi._updateCartDetails();
    });
    $(this.options.removeItemClass).on("click", function (e) {
        var ci = this;
e.preventDefault();
var count = $(this).val();
var name = $(this).attr("data-name");
var image = $(this).attr("data-img");
var cost = Number($(this).attr("data-price"));
mi._removeItemfromCart(name,image,cost, count);
mi._updateCartDetails();
});
$(this.options.clearCartClass).on("click", function (e) {
    var ci = this;
e.preventDefault();
var count = $(this).val();
var name = $(this).attr("data-name");
var image = $(this).attr("data-img");
var cost = Number($(this).attr("data-price"));
mi._clearCart(name,image,cost, count);
mi._updateCartDetails();
});
        },
        /* Helper Functions */
        _addItemToCart: function (name,image, price, count) {
            for (var i in this.cart) {
                if (this.cart[i].name === name-[i]) {
                    this.cart[i].count++;
                    this.cart[i].image === image;
                    this.cart[i].price = price * this.cart[i].count;
                    this._saveCart();
                    return;
                }
            }
            var item = new Item(name,image,  price,count);
            this.cart.push(item);
            this._saveCart();
        },
        _removeItemfromCart: function (name,image, price, count) {
            for (var i in this.cart) {
                if (this.cart[i].name === name) {
                    var singleItemCost = Number(price / this.cart[i].count);
                    this.cart[i].count = count;
                    this.cart[i].image = image;
                    this.cart[i].price = singleItemCost * count;
                    if (count == 0) {
                        this.cart.splice(i, 1);
                    }
                    break;
                }
            }
            this._saveCart();
        },
        _clearCart: function () {
            this.cart = [];
            this._saveCart();
        },
        _totalCartCount: function () {
            return this.cart.length;
        },
        _displayCartz: function () {
            var cartArray = this._listCart();
            console.log(cartArray);
            var output = "";
            if (cartArray.length <= 0) {
                output = "<h4>Your cart is empty</h4>";
            }
            for (var i in cartArray) {
                output += "<div class='cart-each-product'>\n\
                       <div class='name'>" + cartArray[i].name + "</div>\n\
                       <div class='name'>\n\
                       <img style='width:67px;' class='image' src="+'../images/uploads/'+cartArray[i].image +">\n\
                       </div>\n\
                       <div class='quantityContainer'>\n\
                            <input type='number' class='quantity form-control item-count' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' min='0' value=" + cartArray[i].count + " name='number'>\n\
                       </div>\n\
                        <div class='quantity-am'><i class='fa fa-euro'>" + cartArray[i].price + "</i></div>\n\
                        <div class='quantityContainer'>\n\
                        <button type='button' class='quantity form-control item-count sc-remove' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' min='0' value=" + cartArray[i].count + " name='number'><i class='fas fa-2x fa-times'></i>\n\
                   </div></button>\n\
                       </div>";
                       
            }
            return output;
        },

        _displayCart: function () {
            var cartArray = this._listCart();
            console.log(cartArray);
            var output = "";
            var outputz = "";
            if (cartArray.length <= 0) {
                output = "<h4>Your cart is empty</h4>";
            }
            for (let i = 0; i < 2; i++) {
                console.log(cartArray[i]);
                outputz += "<div class='cart-each-product'>\n\
                <input type='hidden' name="+'name'+ [i]+" value="+ cartArray[i].name +">\n\
                   <div class='quantityContainer'>\n\
                     <input type='hidden' name='price' value="+ cartArray[i].price +">\n\
                </div>\n\
                                       </div>";
            
            
     }
            
            for (var i in cartArray) {
                output += "<div class='cart-each-product'>\n\
                <div class='name'>" + cartArray[i].name + "</div>\n\
                <div class='name'>\n\
                <img style='width:67px;' class='image' src="+'../images/uploads/'+cartArray[i].image +">\n\
                </div>\n\
                <div class='quantityContainer'>\n\
                     <input type='number' class='quantity form-control item-count' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' min='0' value=" + cartArray[i].count + " name='number'>\n\
                </div>\n\
                 <div class='quantity-am'><i class='fa fa-euro'>" + cartArray[i].price + "</i></div>\n\
                 <div class='quantityContainer'>\n\
                 <button type='button' class='quantity form-control item-count sc-remove' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' min='0' value=" + cartArray[i].count + " name='number'><i class='fas fa-2x fa-times'></i>\n\
            </div></button>\n\
                </div>";
                       
                       
            }
            
           
           
           
            this.cart_ele.append("<div class='cart-summary-container'>\n\
                                <div class='cart-offer'></div>\n\
                                        <div class='cart-total-amount'>\n\
                                            <div>Total</div>\n\
                                            <div class='spacer'></div>\n\
                                            <div><i class='fa fa-euro total-cart-cost'>0</i></div>\n\
                                            </div>\n\
                                            <div class='cart-checkout'>\n\
                                            <form action='/checkout' method='get'>\n\
                                            "+outputz+"\n\
                                                <button type='submit' class='btn btn-primary sc-chk-out'>Proceed To Checkout</button>\n\
                                            </form>\n\
                                        </div>\n\
                                 </div>");
            return output;
        },
        _totalCartCost: function () {
            var totalCost = 0;
            for (var i in this.cart) {
                totalCost += this.cart[i].price;
            }
            return totalCost;
        },
        _listCart: function () {
            var cartCopy = [];
            for (var i in this.cart) {
                var item = this.cart[i];
                var itemCopy = {};
                for (var p in item) {
                    itemCopy[p] = item[p];
                }
                cartCopy.push(itemCopy);
            }
            return cartCopy;
        },
        _calGST: function () {
            var GSTPercent = 18;
            var totalcost = this.totalCartCost();
            var calGST = Number((totalcost * GSTPercent) / 100);
            return calGST;
        },
        _saveCart: function () {
            localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
        },
        _loadCart: function () {
            this.cart = JSON.parse(localStorage.getItem("shoppingCart"));
            if (this.cart === null) {
                this.cart = [];
            }
        }
    });
    
    /* Defining the Structure of the plugin 'simpleCart'*/
    $.fn.simpleCart = function (options) {
        return this.each(function () {
            $.data(this, "simpleCart", new simpleCart(this));
            console.log($(this, "simpleCart"));
        });
    }
    ;
           
})(jQuery, window, document);



