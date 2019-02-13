

new Vue({
    el: '#app',
    data: {
        active:false

    },
    methods: {
        mouseOver: function(){
            this.active = !this.active;


        }
    }
});


