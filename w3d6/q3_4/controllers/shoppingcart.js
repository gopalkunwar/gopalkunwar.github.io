const cartItemList = [
    {product_name: 'Product1', price: 100, qty: 5},
    {product_name: 'Product2', price: 200, qty: 10},
    {product_name: 'Product3', price: 300, qty: 15}
]

exports.getCartItems = (req,res) => {
    res.render('shoppingcart', {
        cartItems: cartItemList, pageTitle: "Shopping Cart"
    })
}
