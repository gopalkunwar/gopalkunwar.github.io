const productList = [
    {id: 1, product_name: 'Product1', price: 200, desc: 'Product1 Description'},
    {id: 2, product_name: 'Product2', price: 500, desc: 'Product2 Description'},
    {id: 3, product_name: 'Product3', price: 900, desc: 'Product3 Description'},
    
]

exports.getProduct = (req,res) => {
    res.render('product', {
        products: productList, pageTitle: "Product Page"
    })
}
