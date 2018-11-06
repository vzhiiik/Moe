new Vue({

    el: "#app2",
    data: {
        counter: 0             
        
    },
    computed: {
        loud: function () {
            if (this.sometext.length > 0)
                return "**" + this.sometext.toUpperCase() + "**";
            else
                return "";
        },
        
    }
    
});
