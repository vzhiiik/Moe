﻿new Vue({

    el: "#app",
    data: {
        sometext: "Kalle"
    },
    computed: {
        loud: function () {
            if (this.sometext.length > 0)
                return "**" + this.sometext.toUpperCase() + "**";
            else
                return "";
        },
        doubleword: function () {
            return this.sometext + this.sometext;
        }
    }

});