<template>
  <figure class="my-5 p-5 capital_social">
    <figure class="m-5">
      <span class="legende is-flex is-align-items-center is-justify-content-space-between is-size-7">Valeur</span>
      <!-- <span v-for="i in net_result" :key="i"> {{i.amount*100/max_amount}} &nbsp;</span> -->
      <ul class="pl-5 mt-2 bars">
        <li class="bar_column">
            <ul class="is-flex is-flex-direction-column-reverse">
              <li v-for="i in amount" :key="i">{{i}}</li>
            </ul>
        </li>
        <li class="bar_contents">
          <ul class="is-flex is-justify-content-space-between">
            <li v-for="i in net_result" :key="i">
              <span class="graduation_x">{{i.date}}</span>
              <span class="graduation_x_value" :style="'height:'+(i.amount*100/max_amount)+'%'" :title="i.amount"></span>
            </li>
          </ul>
        </li>
      </ul>
    </figure>
  </figure>
</template>

<script>
import moment from 'moment';
import 'moment/locale/fr';
export default {
  props: {
    net_result: {
      type: Array,
      default() {
        return [
          // {
          //   date : 2017,
          //   amount : 800000
          // },
          // {
          //   date : 2018,
          //   amount : 600000
          // },
          // {
          //   date : 2019,
          //   amount : 1500000
          // },
          // {
          //   date : 2020,
          //   amount : 4000000.5
          // },
          // {
          //   date : 2021,
          //   amount : 200000
          // },
        ];
      }
    }
  },
  data(){
    return  {
      amount: [],
      max_amount : 0,
    }
  },
  methods: {
    social_capital(){
      var amounts=[];
      var net_result_length=this.net_result.length;
      if(net_result_length==0){
        this.amount.push(0)
        this.amount.push("-")
        this.amount.push("-")
        this.amount.push("-")
        this.amount.push("-")
        this.amount.push("-")
        var currentdate=new Date().getFullYear();
        this.net_result.push({date : currentdate-5,amount : 0})
        this.net_result.push({date : currentdate-4,amount : 0})
        this.net_result.push({date : currentdate-3,amount : 0})
        this.net_result.push({date : currentdate-2,amount : 0})
        this.net_result.push({date : currentdate-1,amount : 0})
      }
      else{
        for (let index = 0; index < this.net_result.length; index++) {
          const element = this.net_result[index].amount;
          amounts.push(element);
        }
        var step=Math.ceil(Math.max(...amounts)/5)
        this.max_amount=step*5
        for (let index = 0; index < 5; index++) {
          var step_value=Math.ceil(step)*index
          this.amount.push(this.compute_label(step_value))
        }
      }
    },
    compute_label(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'Md';
        }
        else if (num >= 10000000) {
            return (num / 10000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        return num;
    }
  },
  mounted(){
    this.social_capital();
  },
}
</script>

<style scoped lang="scss">
@import "../variables.scss";
$graduate_height:50px;
//Chart design
.financial_informations .bars{
  position: relative;
}
.financial_informations .legende::after,.financial_informations .bar_column li::after {
  content:"";
  height: 1px;
  border-bottom: 1px dashed #FFFFFF;
  opacity: 0.2;
}
.financial_informations .bar_column li{
  // margin: 10px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: $graduate_height;
  align-items: baseline;
}
.financial_informations .bar_column li::after {
  width: 90%;
}
.financial_informations .bar_column li:first-child::after {
  border-style: solid;
}
.financial_informations .bar_contents{
  width: calc(90% - 6rem);
  float: right;
  position: absolute;
  top: 18px;
  right: 3rem;
  height: calc(100% - 25px);
}
.financial_informations .bar_contents ul{
  width: 100%;
  position: absolute;
  height: 100%;
}
.financial_informations .bar_contents li{
  display: flex;
  flex-direction: column-reverse;
  height: calc(100% - 25px); 
  align-items: baseline;
  position: relative;
}
.financial_informations .bar_contents li span.graduation_x{
  bottom: -30px;
  position: absolute;
}
.financial_informations .bar_contents li span.graduation_x_value{
  background: white;
  border-radius: 4px;
  width: 10px;
}
</style>
