new Vue({

    el: "#app",
    data: {
        products: []
       
    },
    created: async function () {
        let response = await fetch("/products", { method: "GET" });

        if (response.status === 200) {
            this.products = await response.json();

            console.log(products)
        }
        else {
            alert("Något gick fel")
        }
    },
    computed: {
        totalProducts: function () {
            let sum = 0
            for (let i = 0; i < this.products.length; i++) {
                sum += parseInt(this.products[i].quantity);
            }
            return sum;
        }
        
    },

    methods: {
        isNull(p) {
            if (p.quantity === 0)
                return " NOLL";
            else
                return "";
        },
        increase(p) {
            if (p.quantity >= 0)
                return p.quantity++;
            else
                return p.quantity = 0;
        },
        decrease(p) {
            if (p.quantity > 0)
                return p.quantity--;
            else
                return p.quantity = 0;
        }
        
    }
});


