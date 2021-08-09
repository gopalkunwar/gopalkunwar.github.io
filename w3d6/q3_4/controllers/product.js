const productList = [
    {id: 1, name: 'Product1', price: 200, description: 'Product1 Description'},
    {id: 2, name: 'Product2', price: 500, description: 'Product2 Description'},
    {id: 3, name: 'Product3', price: 900, description: 'Product3 Description'},
    {id: 4, name: 'Product4', price: 200, description: 'Product4 Description'},
    
]

exports.getProduct = (req,res) => {
    res.render('product', {
        products: productList, pageTitle: "Product Page"
    })
}
