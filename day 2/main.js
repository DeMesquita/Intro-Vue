Vue.component('product-sizes',{
    props:{
        sizes:{
            type:Array,
            required: true
        }
    },
    template:`
    <ul>
        <li v-for="size in sizes"> {{ size }}</li>
    </ul>
    `
})

Vue.component('product-details', {
    props:{
        details:{
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
        <li v-for="detail in details"> {{ detail }}</li>
    </ul>
`
})

Vue.component('product',{
    props:{
        premium:{
            type:Boolean,
            required:true
        }
    },
    template:` <div class="product">
    <div class="product-image">
        <a :href="link"> <img :src="image" alt="a pair of socks">  </a> <!-- v-bind mantém atributo atualizado -->
    </div>
    <div class="product-info">
        <h1> {{ title }} </h1>
        <p v-if="inStock >= 5">In Stock</p>
        <p v-else-if="inStock < 5 && inStock > 0"> Almost sold out!</p>
        <p v-else="inStock" 
        :class="{outOfStock: !inStock}">Out of Stock</p>
        <br>
        <p> Shipping: {{ shipping }} </p>
        <product-details :details="details"></product-details>
        <span> {{ sale }}</span>
        
        <!-- cores -->
       <div v-for="(variant, index) in variants"   
        :key="variant.variantID"
        class="color-box"
        :style="{backgroundColor: variant.variantColor}"
        @mouseover="updateProduct(index)"> 
        </div>

        <product-sizes :sizes="sizes"></product-sizes>


        <button v-on:click = "addCart" class="btn btn-primary" 
        :disabled="!inStock" :class="{ disabledButton: !inStock}"> Add to cart </button>
        <button  v-on:click = "removeCart" class="btn btn-danger"
        :disabled="!inStock" :class="{ disabledButton: !inStock}"> Remove </button>

        <div class="cart">
            <p> Cart({{cart}})</p>
        </div>
    </div>

</div>

`,  data(){
        return {brand: 'Adidas',
        product: 'socks',
        description:  'A pair of socks',
        selectedVariant: 0,
        link:'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        onSale: true,
        details: ['50% cotton', '50% polyester'],
        variants:[
            {
                variantID: 01,
                variantColor: 'green'  ,
                variantImage:'./img/vmSocks-green-onWhite.jpg',
                variantQuantity: 10
    
            },
            {
              variantId: 02,
              variantColor: 'blue',
              variantImage:'./img/vmSocks-blue-onWhite.jpg',
              variantQuantity: 0
    
            }
        ],
        sizes: ['s', 'm', 'l'],
        cart: 0
    
    }
    
},
methods:{
    addCart: function () {
        if( this.cart < this.variants[this.selectedVariant].variantQuantity ){
            this.cart += 1
        }
    },
    updateProduct: function (index){
        this.selectedVariant = index
        console.log(index)
    },
    removeCart: function (){
        if(this.cart > 0){
            this.cart -= 1;
        }
            
    }
},
computed:{
    title(){
        return this.brand + ' ' + this.product
    },
    image(){
        return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
        return this.variants[this.selectedVariant].variantQuantity
    },
    sale(){
        if (this.onSale) {
            return this.brand + ' ' + this.product + ' are on sale'
        } 
            return this.brand + ' ' + this.product + ' are not on sale'
        
    },
    shipping(){
        if(this.premium){
            return "Free"
        }
        return "2.99"

    }
}


})

var app = new Vue({
    el:'#app', //el conecta o objeto com o id='app'
    data: {
        premium: false 

    }
});