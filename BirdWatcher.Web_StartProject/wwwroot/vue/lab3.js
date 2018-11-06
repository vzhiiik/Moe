:new Vue({

    el: "#app",
    data: {
        myList: [
            { name: 'Royal' },
            { name: 'Etheline' },
            { name: 'Henry' },
            { name: 'Chas' },
            { name: 'Richie' },
            { name: 'Margot' },
            { name: 'Ari' },
            { name: 'Uzi' }
        ],
        input: "",
        checked: false,
        newName: ""
    },
    computed: {
        letterR: function () {
            return this.myList.filter(function (x) {
                return x.name[0] == "R";
            })
        },
        letterInput: function () {
            if (this.checked) {
                let inputz = this.input;
                return this.myList.filter(function (x) {
                    return x.name[0] == inputz;
                })
            } else {
                let inputz = this.input.toUpperCase();
                return this.myList.filter(function (x) {
                    return x.name[0] == inputz;
                })
            }
        }

    },
    methods: {

        addName: function () {
            this.myList.push({ name: this.newName })
        }

    }
})