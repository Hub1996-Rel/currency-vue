// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.prototype.$axios= axios;
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data(){
    return{
    infolist:'',
    info:'',
    in_value:'',
    out_value:'',
    rate:'',
    curin:'',
    curout:'',
    A:'',
    B:'',
    rate:'',
    quality:'',
    curate:'',
    valueel:'',
    valueel2:'',
    optionsel:'',
    elnum:'',
  }
},
  methods:{
    inp:function(){
        this.A=this.valueel.split('|')[1];
        this.$forceUpdate();
        this.valueel=this.valueel.split('|')[0]
    },
    outp:function(){
        this.B=this.valueel2.split('|')[1];
        this.$forceUpdate();
        this.valueel2=this.valueel2.split('|')[0]
    },
    cal:function(){
        this.rate=this.A/this.B
        this.info=this.infolist
        this.$forceUpdate();
    },
    btnchange:function(){
        var ini=this.valueel
        this.valueel=this.valueel2
        this.valueel2=ini
        this.rate=1/this.rate
        this.curate=this.quality*this.rate
        
        console.log(this.valueel)
        console.log(this.B)
    },
    handleChange(value) {
        console.log(value);
    },

},
})
