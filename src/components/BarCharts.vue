<template>
  <figure class="my-5 p-5 capital_social">
    <figure class="m-5">
      <span class="legende is-flex is-align-items-center is-justify-content-space-between is-size-7">Valeur</span>
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
            <li>
              <span class="graduation_x">01</span>
              <span class="graduation_x_value" style="height:80%"></span>
            </li>
            <li>
              <span class="graduation_x">02</span>
              <span class="graduation_x_value" style="height:60%"></span>
            </li>
            <li>
              <span class="graduation_x">03</span>
              <span class="graduation_x_value" style="height:40%"></span>
            </li>
            <li>
              <span class="graduation_x">04</span>
              <span class="graduation_x_value" style="height:100%"></span>
            </li>
            <li>
              <span class="graduation_x">05</span>
              <span class="graduation_x_value" style="height:67%"></span>
            </li>
            <li>
              <span class="graduation_x">06</span>
              <span class="graduation_x_value" style="height:90%"></span>
            </li>
            <li>
              <span class="graduation_x">07</span>
              <span class="graduation_x_value" style="height:45%"></span>
            </li>
            <li>
              <span class="graduation_x">08</span>
              <span class="graduation_x_value" style="height:40%"></span>
            </li>
            <li>
              <span class="graduation_x">09</span>
              <span class="graduation_x_value" style="height:60%"></span>
            </li>
          </ul>
        </li>
      </ul>
    </figure>
  </figure>
</template>

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
