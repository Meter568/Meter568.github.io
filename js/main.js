var app = new Vue({
    el:"#app",
    data:{
        products: [{id:1, title:"TAG 1000 (TAG 853)", short_text:"Sweet pepper Determinate Red Standard Round", image:"../images/pepper_1.png", color1:"red", Color1:"Red"},
        {id:2, title:"TAG 1001 (TAG 855)", short_text:"Sweet pepper Determinate Red Standard Round", image:"../images/pepper_2.png", color1:"red", Color1:"Red"},
        {id:3, title:"TAG 1002 (TAG 809)", short_text:"Sweet pepper Determinate Red Standard Round", image:"../images/pepper_3.png", color1:"red", color2:"orange", color3:"yellow", Color1:"Red", Color2:"Orange", Color3:"Yellow"},
        {id:4, title:"TAG 1003 (TAG 834)", short_text:"Sweet pepper Determinate Red Standard Round", image:"../images/pepper_4.png", color1:"red", Color1:"Red", color2:"green", Color2:"Green"},
        {id:5, title:"TAG 1004 (TAG 848)", short_text:"Sweet pepper Determinate Red BEEF Round", image:"../images/pepper_5.png", color1:"red", Color1:"Red", color2:"green", Color2:"Green"},
        {id:6, title:"TAG 1005 (TAG 800)", short_text:"Sweet pepper Determinate Red Standard Round", image:"../images/pepper_6.png", color1:"red", Color1:"Red"},
        {id:7, title:"TAG 1006 (TAG 898)", short_text:"Sweet pepper Determinate Red Elongated", image:"../images/pepper_7.png", color1:"red", Color1:"Red"},
        {id:8, title:"TAG 1007 (TAG 816)", short_text:"Sweet pepper Determinate Red Elongated", image:"../images/pepper_8.png", color1:"red", Color1:"Red"}],
        product: {},
        btnVisible: 0,
        name:[{Title:"Sweet pepper", Titles:"Sweet peppers", titles:"sweet peppers", title:"sweet pepper"}],
        banner:[{image:"../images/banner-papper.png"}]
    },
    methods:{
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(let i in this.products){
                        if (this.products[i] && this.products[i].id && id == this.products[i].id) {
                            this.product = this.products[i];
                        } 
                    }
                }
            }
        },
        addToCart:function(id){
            var cart = [];
            if(window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id)) == -1){
                cart.push(id);
                window.localStorage.setItem('cart',cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1){
                this.btnVisible = 1;
            }
        }
    },
    mounted:function(){
        this.getProduct();
        this.$nextTick(this.checkInCart);
    }
});
