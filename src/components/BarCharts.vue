<template>
  <figure class="my-5 p-5 capital_social">
    <figure class="m-5">
      <span class="legende is-flex is-align-items-center is-justify-content-space-between is-size-7">Valeur {{ok}}</span>
      <ul class="pl-5 mt-2 bars">
        <li class="bar_column">
            <ul class="is-flex is-flex-direction-column-reverse">
              <li>0</li>
              <li>200</li>
              <li>400</li>
              <li>600</li>
              <li>800</li>
              <li>1000</li>
            </ul>
        </li>
        <li class="bar_contents">
          <ul class="is-flex is-justify-content-space-between">
            <li v-for="i in details" :key="i">
              <span class="graduation_x">{{i.date}}</span>
              <span class="graduation_x_value" style="height:0%" :title="i.amount"></span>
            </li>
            <!-- <li>
              <span class="graduation_x">7</span>
              <span class="graduation_x_value" style="height:80%"></span>
            </li> -->
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
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return  {
      ok : "okay",
      details: [
          // {
          //     "date": 2018,
          //     "amount": "2.000.000 FCFA"
          // },
          // {
          //     "date": 2019,
          //     "amount": "2.000.000 FCFA"
          // },
          // {
          //     "date": 2020,
          //     "amount": "2.000.000 FCFA"
          // }
        ]
      }
  },
  mounted(){
    this.social_capital();
  },
  methods: {
    social_capital(){
      var current_year = new Date().getFullYear();
      switch (this.details.length) {
        case 0:
          this.details = [
          {
            date : current_year,
            amount : 0,
          },
          {
            date : current_year - 1 ,
            amount : 0,
          },
          {
            date : current_year - 2,
            amount : 0,
          },
          {
            date : current_year - 3,
            amount : 0,
          },
          {
            date : current_year - 4,
            amount : 0,
          },
        ]
          break;
      
        default:
          break;
      }
    }
  }
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
