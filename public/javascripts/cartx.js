/* 
 * jQuery Simple Shopping Cart v0.1
 * Basis shopping cart using javascript/Jquery.
 * 
 * Authour : Sirisha
 */


/* '(function(){})();' this function is used, to make all variables of the plugin Private */

(function ($, window, document, undefined) {

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
        _setupCart: function () {
            
            
        },
        _addProductstoCart: function () {
        },
        _updateCartDetails: function () {
            var mi = this;
            $(this.options.cartProductListClass).html(mi._displayCart());
            $(this.options.totalCartCountClass).html("Your Cart " + mi._totalCartCount() + " items");
            $('#frm').append("<input type='hidden' name='ccount' value='"+ mi._totalCartCount() +"'>");
            $('#frm').append("<input type='hidden' name='tamt' value='"+ mi._totalCartCost() +"'>");
            $(this.options.totalCartCostClass).html(mi._totalCartCost());
        },
        _setCartbuttons: function () {

        },
        _setEvents: function () {
            var mi = this;
            $(this.options.addtoCartClass).on("click", function (e) {
                e.preventDefault();
                var name = $(this).attr("data-name");
                var cost = Number($(this).attr("data-price"));
                mi._addItemToCart(name, cost, 1);
                mi._updateCartDetails();
            });
            
            $(this.options.showcartID).on("change", this.options.itemCountClass, function (e) {
                var ci = this;
        e.preventDefault();
        var count = $(this).val();
        var name = $(this).attr("data-name");
        var cost = Number($(this).attr("data-price"));
        mi._removeItemfromCart(name, cost, count);
        mi._updateCartDetails();
    });

        },
        /* Helper Functions */
        _addItemToCart: function (name, price, count) {
            for (var i in this.cart) {
                if (this.cart[i].name === name) {
                    this.cart[i].count++;
                    this.cart[i].price = price * this.cart[i].count;
                    this._saveCart();
                    return;
                }
            }
            var item = new Item(name, price, count);
            this.cart.push(item);
            this._saveCart();
        },
        _addItemToChk: function (name, price, count) {
            for (var i in this.cart) {
                if (this.cart[i].name === name) {
                    this.cart[i].count++;
                    this.cart[i].price = price * this.cart[i].count;
                    this._saveCart();
                    return;
                }
            }
            var item = new Item(name, price, count);
            this.cart.push(item);
            this._saveCart();
        },
        _removeItemfromCart: function (name, price, count) {
            for (var i in this.cart) {
                if (this.cart[i].name === name) {
                    var singleItemCost = Number(price / this.cart[i].count);
                    this.cart[i].count = count;
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
        
        _displayCart: function () {
            var cartArray = this._listCart();
            
            console.log(cartArray);
            var output = "";
            var outputz = "";
            if (cartArray.length <= 0) {
                output = "<h4>Your cart is empty</h4>";
            }
           // var i=1
            for (var i in cartArray) {
               
                outputz += "                <input type='hidden' name="+'name-'+ [i]+" value="+ cartArray[i].name +">\n\
                                       <input type='hidden' name="+'price-'+[i]+" value="+ cartArray[i].price +">\n\
                     <input type='hidden'  value="+ cartArray[i].count +" name="+'count-'+[i]+">\n\
";
            
            
     }
            
            for (var i in cartArray) {
                output += "<div class='cart-each-product'>\n\
                <div class='name'>" + cartArray[i].name + "</div>\n\
                               <div class='quantityContainer'>\n\
                            <input type='number' class='quantity form-control item-count' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' min='0' value=" + cartArray[i].count + " name='number'>\n\
                       </div>\n\
                 <div class='quantity-am'><i class='fa fa-euro'>" + cartArray[i].price + "</i></div>\n\
                 <div class='btnx'>\n\
                 <button type='button' class='form-control sc-remove' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' min='0' value=" + cartArray[i].count + " name='number'><i class='fas fa-2x fa-times'></i>\n\
            </div></button>\n\
                </div>";
                       
                       
            }
            
           
           
           
            $('#frm').append(""+outputz+"  ");
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
        _listChk: function () {
            var cartCopy = [];
            for (var i in this.cart) {
                var item = this.cart[i];
                var itemCopy = {};
                for (var p in item) {
                    itemCopy[p] = item[p];
                }
                cartCopy.push(itemCopy);
            }
            return this.cart;
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



