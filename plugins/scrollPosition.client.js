import Vue from 'vue'

Vue.directive('scroll-position', {
    inserted: function(el, binding) {
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        console.log('hello')
        window.addEventListener('scroll', f)
    }
})