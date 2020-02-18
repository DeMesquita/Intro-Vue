var app = new Vue({
    el:'#app', //el conecta o objeto com o id='app'
    data: {
        product: 'socks',
        description:  'The color of the pair of socks is green with white',
        image:'./img/vmSocks-green-onWhite.jpg',
        link:'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        inStock: 3,
        onSale: true,
        details: ['50% cotton', '50% polyester'],
        variants:[
            {
                variantID: 01,
                variantColor: 'green'    
            },
            {
              variantId: 02,
              variantColor: 'blue'
            }
        ],
        sizes: ['s', 'm', 'l']

    }

});