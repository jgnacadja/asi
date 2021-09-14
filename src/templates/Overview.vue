<template>
  <Layout>
    <b-loading :is-full-page="true" v-model="loading"></b-loading>
    {{ data }}

    <section class="overview_page">
      <header class="toolbar is-flex is-justify-content-center mb-6 py-5">
        <form
          action=""
          class="is-flex is-justify-content-center is-align-items-center m-6"
        >
          <span class="domain px-4 py-4">
            <select class="is-size-7">
              <option>Fintech</option>
              <option></option>
            </select>
          </span>
          <input
            placeholder="Rechercher"
            class="search_here px-3 py-4 is-size-7"
          />
          <span class="search_icon px-5 py-3">
            <img src="../assets/search.svg" alt="Search" />
          </span>
        </form>
      </header>
      <section class="my-6 px-6 main_content">
        <header class="is-flex is-align-items-center card about_us">
          <figure class="ml-4 mr-2 p-0">
            <img
              src="../assets/logo_rintio.png"
              title="RINTIO"
              alt="Logo RINTIO"
            />
          </figure>
          <aside
            class="column is-three-quarters"
            aria-label="Rintio en quelques mots"
          >
            <h1 class="m-0 is-size-4">RINTIO</h1>
            <h2 class="m-0 is-size-6 is-inline-block category py-2 px-4 pr-5">
              Technologies et services de l’information
            </h2>
            <p class="is-size-6 description pb-2">
              Notre mission est d’accompagner nos clients et partenaires dans
              leur transformation opérationnelle et organisationnelle.
            </p>
          </aside>
        </header>
        <section>
          <section
            class="
              is-flex is-flex-wrap-wrap is-justify-content-space-between
              about_startup
              mb-6
            "
          >
            <section class="contents_group mt-5">
              <article class="card p-5 general_informations">
                <h3 class="is-flex is-justify-content-space-between">
                  <figure class="is-flex is-align-items-center">
                    <span class="is-flex representation p-4 mr-3">
                      <img
                        src="../assets/social_networks/awards.svg"
                        title=""
                        alt=""
                      />
                    </span>
                    <figcaption class="has-text-weight-normal">
                      Informations générales
                    </figcaption>
                  </figure>
                </h3>
                <ul class="pt-5 is-size-7">
                  <li class="is-flex is-justify-content-space-between py-3">
                    Date de création
                    <strong>01-01-2018</strong>
                  </li>
                  <li class="is-flex is-justify-content-space-between py-3">
                    Siège social
                    <strong>Cotonou</strong>
                  </li>
                  <li class="is-flex is-justify-content-space-between py-3">
                    Email
                    <strong
                      ><a
                        href="mailto:contact@rintio.com"
                        class="has-text-black"
                        >contact@rintio.com</a
                      ></strong
                    >
                  </li>
                  <li class="is-flex is-justify-content-space-between py-3">
                    Site web
                    <strong
                      ><a href="www.rintio.com" class="has-text-black">
                        www.rintio.com</a
                      ></strong
                    >
                  </li>
                </ul>
              </article>
              <article class="card mt-5 p-5 discussions">
                <h3 class="is-flex is-justify-content-space-between">
                  <figure class="is-flex is-align-items-center">
                    <span class="is-flex representation p-4 mr-3">
                      <img
                        src="../assets/comments/comments.svg"
                        title=""
                        alt=""
                      />
                    </span>
                    <figcaption class="has-text-weight-normal">
                      Commentaires
                    </figcaption>
                  </figure>
                </h3>
                <section>
                  <ul class="comments_history mt-5">
                    <li class="mb-5">
                      <article class="is-flex p-5">
                        <figure class="mr-3">
                          <img
                            src="../assets/comments/author.svg"
                            alt="Search"
                          />
                        </figure>
                        <p class="is-size-7 has-text-justified">
                          <strong>John Joe </strong> <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Viverra ullamcorper sapien lectus non proin nisl
                          sed in neque. Non posuere parturient cras nascetur
                          tortor nisi, turpis in.
                        </p>
                      </article>
                    </li>
                    <li class="mb-5">
                      <article class="is-flex p-5">
                        <figure class="mr-3">
                          <img
                            src="../assets/comments/author.svg"
                            alt="Search"
                          />
                        </figure>
                        <p class="is-size-7 has-text-justified">
                          <strong>John Joe </strong> <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Viverra ullamcorper sapien lectus non proin nisl
                          sed in neque. Non posuere parturient cras nascetur
                          tortor nisi, turpis in.
                        </p>
                      </article>
                    </li>
                  </ul>
                  <b-pagination
                    aria-previous-label="Previous page"
                    :total="total"
                    v-model="current"
                    :range-before="rangeBefore"
                    :range-after="rangeAfter"
                    :order="order"
                    :size="size"
                    :simple="isSimple"
                    :rounded="isRounded"
                    :per-page="perPage"
                    :icon-prev="prevIcon"
                    :icon-next="nextIcon"
                    aria-next-label="Next page"
                    aria-page-label="Page"
                    aria-current-label="Current page"
                  >
                  </b-pagination>
                </section>
              </article>
            </section>
            <section class="card contents_group e_reputation mt-5 p-5">
              <header class="is-flex is-justify-content-space-between">
                <figure class="is-flex is-align-items-center">
                  <span class="is-flex representation p-4 mr-3">
                    <img
                      src="../assets/social_networks/awards.svg"
                      title=""
                      alt=""
                    />
                  </span>
                  <figcaption>E-reputation</figcaption>
                </figure>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </header>
              <figure
                class="
                  charts
                  is-flex is-justify-content-center is-align-items-center
                "
              >
                <span id="chart_donut"></span>
              </figure>
              <footer class="report_social_network mb-5 is-size-7">
                <ul>
                  <li class="is-flex is-align-items-center linkedin mt-2">
                    <figure>
                      <figcaption>
                        LINKEDIN<span class="rate mr-5 pr-5">+ 27,13%</span>
                      </figcaption>
                    </figure>
                  </li>
                  <li class="is-flex is-align-items-center facebook mt-2">
                    <figure>
                      <figcaption>
                        FACEBOOK<span class="rate mr-5 pr-5">+ 33,22%</span>
                      </figcaption>
                    </figure>
                  </li>
                  <li class="is-flex is-align-items-center twitter mt-2">
                    <figure>
                      <figcaption>
                        TWITTER <span class="rate mr-5 pr-5">+ 17,13%</span>
                      </figcaption>
                    </figure>
                  </li>
                  <li class="is-flex is-align-items-center instagram mt-2">
                    <figure>
                      <figcaption>
                        INSTAGRAM<span class="rate mr-5 pr-5">+ 25,13%</span>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </footer>
            </section>
          </section>
          <section class="mt-5">
            <article class="p-5 financial_informations">
              <h3 class="is-flex is-justify-content-space-between mb-5">
                <figure class="is-flex is-align-items-center">
                  <span class="is-flex representation p-4 mr-3">
                    <img
                      src="../assets/social_capital/finance.svg"
                      title=""
                      alt=""
                    />
                  </span>
                  <figcaption class="has-text-weight-normal">
                    Performance financière
                  </figcaption>
                </figure>
              </h3>
              <span class="is-flex is-justify-content-space-between">
                Capital social
                <strong class="is-size-5 has-text-weight-bold"
                  >2.000.000 FCFA</strong
                >
              </span>
              <figure class="mt-5">
                <span class="legende is-size-7">Valeur</span>
                <span id="chart_bar" class="mb-5"></span>
                <figcaption
                  class="
                    is-flex
                    is-justify-content-space-between
                    is-align-items-center
                  "
                >
                  <aside aria-label="Valeur actuelle">
                    <span class="title has-text-weight-bold"
                      >Valeur actuelle</span
                    >
                    <p class="value mt-1">
                      <span class="percent mr-5">(+23%)</span>Bilan annuel
                    </p>
                  </aside>
                  <span class="is-size-5 amount has-text-weight-semibold"
                    >56.000.000 FCFA</span
                  >
                </figcaption>
              </figure>
            </article>
          </section>
        </section>
        <footer class="see_more px-3 mt-6">
          <h3 class="is-size-4 my-5">Voir plus</h3>
          <ul
            class="
              is-flex is-justify-content-space-between is-flex-wrap-wrap
              px-3
            "
          >
            <li class="mb-2">
              <a href="">
                <figure class="is-flex card p-3">
                  <img
                    src="../assets/startup/startup.svg"
                    title="Fintech"
                    alt="Logo Fintech"
                  />
                  <figcaption
                    class="
                      ml-3
                      is-size-7
                      is-flex
                      is-flex-direction-column
                      is-justify-content-space-around
                    "
                  >
                    <h4>
                      <a href="skypemail.com" class="has-text-black is-size-5"
                        >SkyeMall.com</a
                      >
                    </h4>
                    <span> <span>Fintech</span> Accra, Ghana </span>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li class="mb-2">
              <a href="">
                <figure class="is-flex card p-3">
                  <img
                    src="../assets/startup/startup.svg"
                    title="Fintech"
                    alt="Logo Fintech"
                  />
                  <figcaption
                    class="
                      ml-3
                      is-size-7
                      is-flex
                      is-flex-direction-column
                      is-justify-content-space-around
                    "
                  >
                    <h4>
                      <a href="skypemail.com" class="has-text-black is-size-5"
                        >SkyeMall.com</a
                      >
                    </h4>
                    <span> <span>Fintech</span> Accra, Ghana </span>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li class="mb-2">
              <a href="">
                <figure class="is-flex card p-3">
                  <img
                    src="../assets/startup/startup.svg"
                    title="Fintech"
                    alt="Logo Fintech"
                  />
                  <figcaption
                    class="
                      ml-3
                      is-size-7
                      is-flex
                      is-flex-direction-column
                      is-justify-content-space-around
                    "
                  >
                    <h4>
                      <a href="skypemail.com" class="has-text-black is-size-5"
                        >SkyeMall.com</a
                      >
                    </h4>
                    <span> <span>Fintech</span> Accra, Ghana </span>
                  </figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </section>
  </Layout>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  metaInfo: {
    title: "Aperçu",
    meta: [
      {
        name: "Aperçu",
        content: "Aperçu de la Startup",
      },
    ],
  },
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      total: 200,
      current: 10,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "",
      size: "",
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      elasticsearch: {
        API: "https://elasticsearch.dev.rintio.com",
        INDEX: "asi",
      },
      data: {},
      loading: false,
      awaitingSearch: false,
      error: false,
    };
  },
  mounted() {
    this.fetch();

    //donut
    var tableau = [8000, 17000, 37000, 10000];
    var sum = tableau.reduce((acc, cur) => acc + cur, 0);
    function compute_label(value) {
      var signe = "";
      var k = 1000;
      var m = 1000000;
      var g = 1000000000;
      if (value >= g) {
        value /= g;
        signe = "G";
      } else {
        if (value > m) {
          value /= m;
          signe = "M";
        } else if (value > k) {
          value /= k;
          signe = "K";
        }
      }
      return String(value) + signe;
    }
    var options_donut = {
      chart: {
        type: "donut",
        height: "400px",
      },
      legend: {
        show: false,
      },
      labels: ["INSTAGRAM", "LINKEDIN", "FACEBOOK", "TWITTER"],
      colors: ["#F9F871", "#76FAC7", "#FF00E5", "#267EC3"],
      dataLabels: {
        enabled: true, //Remove label
        formatter: function (val, opts) {
          var value = (val * sum) / 100;
          return compute_label(value);
        },
        textAnchor: "end",
        style: {
          margin: 50,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (value) {
            return compute_label(value);
          },
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "50%",
            labels: {
              show: true,
              name: {
                show: true,
              },
              value: {
                color: "#FF9B26",
                formatter: function (value) {
                  return compute_label(value);
                },
              },
              total: {
                show: true,
                label: "Total",
                color: "black",
                formatter: function (w) {
                  return "+18.15%";
                },
              },
            },
          },
        },
      },
      series: tableau,
    };
    var chart_donut = new ApexCharts(
      document.querySelector("#chart_donut"),
      options_donut
    );
    chart_donut.render();
    //BAR
    var options_bar = {
      series: [
        {
          name: "Valeur",
          data: [
            {
              x: "01",
              y: 800,
            },
            {
              x: "02",
              y: 600,
            },
            {
              x: "03",
              y: 400,
            },
            {
              x: "04",
              y: 975,
            },
            {
              x: "05",
              y: 775,
            },
            {
              x: "06",
              y: 850,
            },
            {
              x: "07",
              y: 510,
            },
            {
              x: "08",
              y: 400,
            },
            {
              x: "09",
              y: 625,
            },
          ],
        },
      ],
      grid: {
        show: true,
        borderColor: "#90A4AE",
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 10,
          right: 40,
          bottom: 30,
          left: 40,
        },
      },
      yaxis: {
        show: true,
        min: 0,
        max: 1000,
      },
      xaxis: {
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: true,
          width: 1,
          position: "back",
          opacity: 0.9,
          stroke: {
            color: "#b6b6b6",
            width: 0,
            dashArray: 0,
          },
          fill: {
            type: "solid",
            color: "#B1B9C4",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 1,
            opacity: 0.4,
          },
        },
      },
      chart: {
        height: 350,
        type: "bar",
        foreColor: "#fff",
        toolbar: {
          show: false, // remove download option
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "10%",
        },
      },
      colors: ["#FFFFFF"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
        showForSingleSeries: true,
        customLegendItems: ["Valeur"],
        markers: {
          fillColors: ["000"],
        },
        position: "top",
        horizontalAlign: "left",
      },
    };
    var chart_bar = new ApexCharts(
      document.querySelector("#chart_bar"),
      options_bar
    );
    chart_bar.render();
  },
  methods: {
    parseUri(objectId) {
      const parseId = escape(objectId);
      return parseId;
    },
    // make an axios request to the server to get startup data
    fetch() {
      this.loading = true;
      var axios = require("axios");

      axios
        .get(
          `${this.elasticsearch.API}/${
            this.elasticsearch.INDEX
          }/_doc/${this.parseUri(this.$route.params.id)}`
        )
        .then((response) => {
          this.loading = false;
          this.data = response.data;
        })
        .catch((error) => {
          this.loading = false;
          this.error = true;
        });
    },
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";
$color_primary: #267ec3;
$color_orange: #ff9b26;
.overview_page {
  // @media screen and (max-width: 402px){
  //     padding: 0 1rem !important;
  // }
}
.about_us,
.general_informations,
.financial_informations {
  box-shadow: 0px 0px 27px rgba(0, 0, 0, 0.05);
}
.toolbar,
.about_us,
.e_reputation,
.contents_group article,
.financial_informations {
  background: white;
}
//Toolbar
.toolbar form {
  box-shadow: 3px 8px 18px #80808017;
}
.toolbar .domain select,
.toolbar .domain + input,
.domain select:focus-visible {
  border: none;
  outline: none;
}
.toolbar .domain,
.toolbar .domain select {
  background: #e6e6e6;
}
.toolbar .search_here {
  width: 50vw;
}
.toolbar .search_icon {
  background: $color_orange;
  height: 100%;
  color: white;
  @media screen and (max-width: 400px) {
    display: none;
  }
}
.toolbar .search_icon img {
  height: 25px;
}
//main content
.main_content {
  @media screen and (max-width: 413px) {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}
//About us
.about_us {
  @include mobile() {
    display: block;
    padding-bottom: 50px;
    position: relative;
  }
  @media screen and (max-width: 492px) {
    padding-bottom: 70px;
  }
  @media screen and (max-width: 334px) {
    padding-bottom: 90px;
  }
}
.about_us aside {
  @media screen and (max-width: 328px) {
    padding-left: 0px !important;
    padding-right: 5px !important;
  }
}
.about_us img {
  height: 115px;
  margin-bottom: -5px;
  @include mobile() {
    height: 50px;
  }
  @media screen and (max-width: 338px) {
    height: 40px;
  }
  @media screen and (max-width: 314px) {
    margin-right: 0px;
  }
}
.about_us .category {
  color: $color_orange;
  background: rgba(255, 155, 38, 0.15);
  border-radius: 7px;
  cursor: default;
  @include mobile() {
    font-size: 9px !important;
    padding: 10px !important;
    display: inline-block;
  }
  @media screen and (max-width: 328px) {
    padding-left: 6px !important;
    padding-right: 6px !important;
  }
}
.about_us .description {
  @include mobile() {
    position: absolute;
    left: 1rem;
    margin-top: 10px;
    padding-right: 1rem;
    font-size: 12px !important;
  }
}
//Icone
.representation {
  background-color: $color_primary;
  padding: 10px;
  border-radius: 8px;
}
//General informations
.general_informations,
.discussions,
.financial_informations {
  border-radius: 16px;
}
.general_informations li {
  border-bottom: 1px solid #c4c4c4;
}
.general_informations li:last-child {
  border: none;
}
//comments
.comments_history article {
  background: #eff8ff99;
  border-radius: 10px;
  @include touch {
    align-items: flex-start;
  }
}
.comments_history figure {
  padding: 0 !important;
  @include desktop-only {
    width: 20%;
  }
}
.comments_history img {
  @include touch {
    height: 80%;
  }
  @include desktop-only {
    width: 100%;
  }
}
//about_startup
.about_startup {
  // @media screen and (max-width: 402px){
  //     margin: 0 1rem !important;
  // }
  @include touch {
    display: block !important;
  }
}
.about_startup .contents_group {
  width: calc(50% - 10px);
  @include touch {
    width: 100%;
  }
}
.social_capital figure {
  @media screen and (max-width: 402px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center !important;
  }
}
.social_capital .representation {
  @media screen and (max-width: 384px) {
    margin-bottom: 20px;
  }
}
.social_capital .representation img {
  height: 80px;
}
.about_startup .category img {
  height: 50px;
}
.about_startup .category figcaption {
  padding-top: 20px;
}
.about_startup .percent {
  background: #ccc;
  margin-bottom: 20px;
}
.about_startup .percent,
.about_startup .percent figcaption {
  border-radius: 16px;
}
.about_startup .percent figcaption {
  background: gray;
  height: 7px;
}
.e_reputation header figure {
  @media screen and (max-width: 366px) {
    flex-direction: column-reverse;
  }
}
//toogle from w3school
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 20px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  margin-top: -5px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: $color_primary;
}
input:focus + .slider {
  box-shadow: 0 0 1px $color_primary;
}
input:checked + .slider:before {
  -webkit-transform: translateX(30px);
  -ms-transform: translateX(30px);
  transform: translateX(30px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.charts {
  height: 80%;
  @include touch {
    height: 400px;
  }
}
.charts #chart_donut {
  width: 100%;
}
// Report social network
.e_reputation,
.report_social_network li {
  position: relative;
}
@include desktop {
  .report_social_network {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}
.report_social_network .rate {
  right: 0;
  top: 0;
  position: absolute;
  color: $color_orange;
}
.report_social_network li::before {
  content: "";
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-right: 5px;
}
.report_social_network li.linkedin::before {
  background: linear-gradient(#76fac7, #00d5d9);
}
.report_social_network li.facebook::before {
  background: linear-gradient(#ff00e5, #7a00d9);
}
.report_social_network li.twitter::before {
  background: linear-gradient($color_primary, #040405);
}
.report_social_network li.instagram::before {
  background: linear-gradient(#f9f871, $color_orange);
}
//financial_informations
.financial_informations .legende {
  color: white;
  display: block;
  position: absolute;
  margin: 25px 0 0 50px;
}
.financial_informations #chart_bar {
  height: 200px;
  display: block;
  background: linear-gradient(#3a416f, #141727);
  border-radius: 12px;
  padding: 20px 30px 20px 75px;
}
.financial_informations .title {
  font-size: 15px;
}
.financial_informations .value {
  font-size: 12px;
}
.financial_informations .percent {
  color: $color_orange;
}
.financial_informations .amount {
  color: $color_primary;
}
//See more startup
.see_more li {
  @include tablet {
    width: 30%;
  }
}
.see_more ul li figure {
  box-shadow: none;
  background: white;
}
.see_more ul li figure:hover {
  background: #f5fbff;
}
</style>