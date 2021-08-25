<template>
  <div id="app">
    <h2>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp实时汇率兑换V1.01&nbsp(建议使用电脑运行)</h2>
    <div id="value">
    <div id="current">
    <el-input-number v-model="quality" @change="handleChange" :min="0" label="描述文字"></el-input-number>

    <div id="input">
        <el-select v-model="valueel" filterable placeholder="请选择" @change="inp()">
            <el-option
              v-for="item in infolist"
              :value="`${item.CharCode}|${item.Value}`"
              :label="item.CharCode"
              @click.native="cal()">
            </el-option>
        </el-select>
    </div>
     
    <div>
        <button id="exchange" @click="btnchange()" >EXA</button>
    </div>
    

    <div id="output" >
        <el-select v-model="valueel2" filterable placeholder="请选择" @change="outp()">
            <el-option
              v-for="item in infolist"
              :value="`${item.CharCode}|${item.Value}`"
              :label="item.CharCode"
              @click.native="cal()">
            </el-option>
        </el-select>
    </div>
</div>

<div id="result">
    <h2>汇率:{{rate}}({{valueel}}--{{valueel2}})</h2>
    <h2>{{quality}}&nbsp&nbsp{{in_value.CharCode}}&nbsp相当于&nbsp{{curate}}&nbsp{{out_value.CharCode}}</h2>
    <h3>由于网络环境不同，请确保与当前API的连通，汇率和计算结果仅供参考</h3>
  <h3>API:https://www.cbr-xml-daily.ru/daily_json.js</h3>
  
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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

created () {
        this.$axios
          .get('https://www.cbr-xml-daily.ru/daily_json.js')
          .then(response => (this.infolist = response.data.Valute))
          .catch(function (error) {
            console.log(error);
          });
          
      },
watch:{rate:function(newValue,oldValue){this.curate=this.quality*this.rate},
          quality:function(newValue,oldValue){this.curate=this.quality*this.rate}},
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
}
</script>

<style>

body{
    margin:0;
    background-color: aliceblue;
}
#current{
    display: flex;
    flex:1 1 auto;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    background-color:white;
    margin:20px 0px;
}
#sel{
    height: 30px;
    width: 100px;
    border-radius: 6px;
    box-shadow: 0px 0px 10px #a8a8aa;
    outline: none;
    border:1px grey solid;
}
#num{
    height: 34px;
    width: 100px;
    border-radius: 6px;
    outline: none;
    border:1px grey solid;
}
#exchange{
    height:40px;
    line-height: 5px;
    width: 40px;
    text-align: center;
    border-radius: 100%;
    background-color: white;
}
#result{
    height: 80px;
    line-height: 80px;
    margin-left: 60px;
}


</style>
