<template>
  <Layout>
    <b-loading :is-full-page="true" v-model="loading"></b-loading>
    <section v-if="loading && !data._id || !loading && !data._id" class="overview_page">
      <!-- Search bar -->
      <header class="toolbar is-flex is-justify-content-center mb-6 py-5">
        <form action="" class="is-flex is-justify-content-center is-align-items-center m-6" >
          <span class="domain px-4 py-4">
            <select class="is-size-7">
              <option>Fintech</option>
              <option></option>
            </select>
          </span>
          <input placeholder="Rechercher" class="search_here px-3 py-4 is-size-7"/>
          <span class="search_icon px-5 py-3">
            <img src="../assets/search.svg" alt="Search" />
          </span>
        </form>
      </header>
      <section class="my-6 px-6 main_content">
        <!-- Summary startup-->
        <header class="is-flex is-align-items-center card about_us">
          <figure class="ml-4 mr-2 p-0">
            <p class="image is-64x64">
              <b-skeleton :animated="animated" circle width="64px" height="64px"></b-skeleton>
            </p>
          </figure>
          <aside class="column is-three-quarters" aria-label="Rintio en quelques mots">
            <h1 class="column is-1 m-0 is-size-4 rm-padding">
              <b-skeleton :animated="animated"></b-skeleton>
            </h1>
            <h2 class="column is-2 m-0 is-size-6 rm-padding">
              <b-skeleton :animated="animated"></b-skeleton>
            </h2>
            <p class="column is-5 mt-1 is-size-6 description rm-padding">
              <b-skeleton :animated="animated"></b-skeleton>
            </p>
          </aside>
        </header>
        <!-- Startup Informations-->
        <section>
          <!-- Startup general Informations-->
          <section class="is-flex is-flex-wrap-wrap is-justify-content-space-between about_startup mb-6">
            <!-- Startup environment-->
            <section class="contents_group mt-5">
              <article class="card p-5 general_informations">
                <h3 class="is-flex is-justify-content-space-between">
                  <figure class="is-flex is-align-items-center">
                    <span class="is-flex representation p-4 mr-3">
                      <img src="../assets/social_networks/awards.svg" title="Informations générales"  alt=""/>
                    </span>
                    <figcaption class="has-text-weight-normal">
                      Informations générales
                    </figcaption>
                  </figure>
                </h3>
                <ul class="pt-5 is-size-7">
                  <li class="columns is-justify-content-space-between">
                    <div class="column is-3">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                    <div class="column is-3">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                  </li>
                  <li class="columns is-justify-content-space-between">
                    <div class="column is-2">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                    <div class="column is-2">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                  </li>
                  <li class="columns is-justify-content-space-between">
                    <div class="column is-2">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                    <div class="column is-5">
                      <b-skeleton class="align-items-right" :animated="animated"></b-skeleton>
                    </div>
                  </li>
                  <li class="columns is-justify-content-space-between">
                    <div class="column is-1">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                    <div class="column is-3">
                      <b-skeleton class="align-items-right" :animated="animated"></b-skeleton>
                    </div>
                  </li>
                </ul>
              </article>
              <article class="card mt-5 p-5 discussions">
                <h3 class="is-flex is-justify-content-space-between">
                  <figure class="is-flex is-align-items-center">
                    <span class="is-flex representation p-4 mr-3">
                      <img src="../assets/comments/comments.svg" title="Commentaires" alt=""/>
                    </span>
                    <figcaption class="has-text-weight-normal">Commentaires</figcaption>
                  </figure>
                </h3>
                <section>
                  <ul class="comments_history mt-5">
                    <li class="mb-5">
                      <article class="is-flex p-5">
                        <figure class="mr-3">
                          <img src="../assets/comments/author.svg" alt="Search"/>
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
                          <img src="../assets/comments/author.svg" alt="Search"/>
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
            <!-- Social Network-->
            <section class="card contents_group e_reputation mt-5 p-5">
              <header class="is-flex is-justify-content-space-between">
                <figure class="is-flex is-align-items-center">
                  <span class="is-flex representation p-4 mr-3">
                    <img src="../assets/social_networks/awards.svg" title="E-reputation"  alt=""/>
                  </span>
                  <figcaption>E-reputation</figcaption>
                </figure>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </header>
              <figure class="charts mt-4">
                <p>
                  <b-skeleton :animated="animated" height="80px"></b-skeleton>
                </p>
              </figure>
              <footer class="report_social_network mb-5 is-size-7">
                <ul>
                  <li class="columns is-align-items-center linkedin ml-2">
                    <div class="column is-2">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                  </li>
                  <li class="columns is-align-items-center facebook ml-2">
                    <div class="column is-2">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                  </li>
                  <li class="columns is-align-items-center twitter ml-2">
                    <div class="column is-2">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                  </li>
                  <li class="columns is-align-items-center instagram ml-2">
                    <div class="column is-2">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                  </li>
                </ul>
              </footer>
            </section>
          </section>
          <!-- Startup rentability-->
          <section class="mt-5">
            <article class="p-5 financial_informations">
              <h3 class="is-flex is-justify-content-space-between mb-5">
                <figure class="is-flex is-align-items-center">
                  <span class="is-flex representation p-4 mr-3">
                    <img src="../assets/social_capital/finance.svg" title="Performance financière" alt=""/>
                  </span>
                  <figcaption class="has-text-weight-normal">Performance financière</figcaption>
                </figure>
              </h3>
              <div class="columns is-justify-content-space-between">
                <div class="column is-1">
                  <b-skeleton :animated="animated"></b-skeleton>
                </div>
                <div class="column is-2">
                  <b-skeleton :animated="animated"></b-skeleton>
                </div>
              </div>
              <figure class="mt-5">
                <figure class="charts mt-4 mb-5">
                  <p>
                    <b-skeleton :animated="animated" height="80px"></b-skeleton>
                  </p>
                </figure>
                <figcaption class="columns is-justify-content-space-between is-align-items-center">
                  <aside class="column" aria-label="Valeur actuelle">
                    <span class="title has-text-weight-bold">Valeur actuelle</span>
                    <div class="columns mt-1">
                      <div class="column is-1">
                        <b-skeleton :animated="animated"></b-skeleton>
                      </div>
                      <div class="column is-2">
                        <b-skeleton :animated="animated"></b-skeleton>
                      </div>
                    </div>
                  </aside>
                  <div class="column is-1 is-size-5 amount has-text-weight-semibold">
                    <b-skeleton :animated="animated"></b-skeleton>
                  </div>
                </figcaption>
              </figure>
            </article>
          </section>
        </section>
        <!-- More startup-->
        <footer class="see_more px-3 mt-6">
          <h3 class="is-size-4 my-5">Voir plus</h3>
          <ul class="is-flex is-justify-content-space-between is-flex-wrap-wrap px-3" >
            <li class="mb-2">
              <a href="">
                <figure class="is-flex card p-3">
                  <p class="image is-64x64">
                    <b-skeleton :animated="animated" circle width="64px" height="64px"></b-skeleton>
                  </p>
                  <figcaption class="ml-3 is-size-7 column is-flex-direction-column is-justify-content-space-around">
                    <div class="column is-6 rm-padding">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                    <div class="column is-6 rm-padding mt-2">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li class="mb-2">
              <a href="">
                <figure class="is-flex card p-3">
                  <p class="image is-64x64">
                    <b-skeleton :animated="animated" circle width="64px" height="64px"></b-skeleton>
                  </p>
                  <figcaption class="ml-3 is-size-7 column is-flex-direction-column is-justify-content-space-around">
                    <div class="column is-6 rm-padding">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                    <div class="column is-6 rm-padding mt-2">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li class="mb-2">
              <a href="">
                <figure class="is-flex card p-3">
                  <p class="image is-64x64">
                    <b-skeleton :animated="animated" circle width="64px" height="64px"></b-skeleton>
                  </p>
                  <figcaption class="ml-3 is-size-7 column is-flex-direction-column is-justify-content-space-around">
                    <div class="column is-6 rm-padding">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                    <div class="column is-6 rm-padding mt-2">
                      <b-skeleton :animated="animated"></b-skeleton>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </section>
    <section v-else class="overview_page">
      <!-- Search bar -->
      <header class="toolbar is-flex is-justify-content-center mb-6 py-5">
        <form action="" class="is-flex is-justify-content-center is-align-items-center m-6">
          <span class="domain px-4 py-4">
            <select class="is-size-7">
              <option>Fintech</option>
              <option></option>
            </select>
          </span>
          <input placeholder="Rechercher" class="search_here px-3 py-4 is-size-7"/>
          <span class="search_icon px-5 py-3">
            <img src="../assets/search.svg" alt="Search" />
          </span>
        </form>
      </header>
      <section class="my-6 px-6 main_content">
        <!-- Summary startup-->
        <header class="is-flex is-align-items-center card about_us">
          <figure class="ml-4 mr-2 p-0">
            <img src="../assets/logo_rintio.png" :title="data._source.name" alt="Logo" />
          </figure>
          <aside class="column is-three-quarters" aria-label="Rintio en quelques mots">
            <h1 class="m-0 is-size-4">{{ data._source.name }}</h1>
            <h2 class="m-0 is-size-6 is-inline-block category py-2 my-2 px-4 pr-5"> {{ data._source.market }} </h2>
            <p class="is-size-6 description pb-2">{{ data._source.goal }} </p>
          </aside>
        </header>
        <!-- Startup Informations-->
        <section>
          <section class="is-flex is-flex-wrap-wrap is-justify-content-space-between about_startup mb-6">
            <section class="contents_group mt-5">
              <article class="card p-5 general_informations">
                <h3 class="is-flex is-justify-content-space-between">
                  <figure class="is-flex is-align-items-center">
                    <span class="is-flex representation p-4 mr-3">
                      <img src="../assets/social_networks/awards.svg" title="Informations générales" alt=""/>
                    </span>
                    <figcaption class="has-text-weight-normal">Informations générales</figcaption>
                  </figure>
                </h3>
                <ul class="pt-5 is-size-7">
                  <li class="columns is-justify-content-space-between">
                    <div class="column">Date de création</div>
                    <div class="column has-text-right">
                      <strong>{{data._source.creation_date | formatDate}}</strong>
                    </div>
                  </li>
                  <li class="columns is-justify-content-space-between">
                    <div class="column">Siège social</div>
                    <div class="column has-text-right">
                      <strong>{{ data._source.address }}</strong>
                    </div>
                  </li>
                  <li class="columns is-justify-content-space-between">
                    <div class="column">Email</div>
                    <div class="column has-text-right">
                      <strong>
                        <a :href="'mailto:'+ data._source.email" class="has-text-black">{{ data._source.email }}</a>
                      </strong>
                    </div>
                  </li>
                  <li class="columns is-justify-content-space-between">
                    <div class="column">Site web</div>
                    <div class="column has-text-right">
                      <strong>
                        <a :href="data._source.web_site" class="has-text-black">{{ data._source.web_site }}</a>
                      </strong>
                    </div>
                  </li>
                </ul>
              </article>
              <article class="card mt-5 p-5 discussions">
                <h3 class="is-flex is-justify-content-space-between">
                  <figure class="is-flex is-align-items-center">
                    <span class="is-flex representation p-4 mr-3">
                      <img src="../assets/comments/comments.svg" title="Commentaires" alt=""/>
                    </span>
                    <figcaption class="has-text-weight-normal">Commentaires</figcaption>
                  </figure>
                </h3>
                <section>
                  <ul class="comments_history mt-5">
                    <li class="mb-5">
                      <article class="is-flex p-5">
                        <figure class="mr-3">
                          <img src="../assets/comments/author.svg" alt="Search" />
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
                          <img src="../assets/comments/author.svg" alt="Search"/>
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
                    <img src="../assets/social_networks/awards.svg" title="E-reputation" alt="" />
                  </span>
                  <figcaption>E-reputation</figcaption>
                </figure>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </header>
              <figure class="charts is-flex is-justify-content-center is-align-items-center">
                <vc-donut 
                  background="white" 
                  foreground="white"
                  :size="400" unit="px" :thickness="40"
                  :sections="sections" :total="100"
                  :start-angle="45" 
                  :auto-adjust-text-size="true"
                  section.value="true"
                  has-legend legend-placement="bottom"
                  @section-click="handleSectionClick"
                  @section-mouseover="handleSectionMouseOver">
                  <figcaption class="is-size-4">
                    Total <br/>
                    <span class="rate_percent">+18,15%</span>
                  </figcaption>
                </vc-donut>
              </figure>
              <footer class="report_social_network mb-5 is-size-7">
                <ul>
                  <li class="is-flex is-align-items-center linkedin mt-2">
                    <figure>
                      <figcaption>
                        LINKEDIN<span class="rate mr-5 pr-5">{{data._source.linkedin_data }}</span>
                      </figcaption>
                    </figure>
                  </li>
                  <li class="is-flex is-align-items-center facebook mt-2">
                    <figure>
                      <figcaption>
                        FACEBOOK<span class="rate mr-5 pr-5">{{ data._source.facebook_data}}</span>
                      </figcaption>
                    </figure>
                  </li>
                  <li class="is-flex is-align-items-center twitter mt-2">
                    <figure>
                      <figcaption>
                        TWITTER<span class="rate mr-5 pr-5">{{ data._source.twitter_data}}</span>
                      </figcaption>
                    </figure>
                  </li>
                  <li class="is-flex is-align-items-center instagram mt-2">
                    <figure>
                      <figcaption>
                        INSTAGRAM<span class="rate mr-5 pr-5">{{data._source.instagram_data }}</span>
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
                    <img src="../assets/social_capital/finance.svg" title="Performance financière" alt=""/>
                  </span>
                  <figcaption class="has-text-weight-normal"> Performance financière</figcaption>
                </figure>
              </h3>
              <span class="is-flex is-justify-content-space-between">
                Capital social<strong class="is-size-5 has-text-weight-bold">{{data._source.share_capital}}</strong>
              </span>
              <figure class="mt-5">
                <span class="legende is-size-7">Valeur</span>
                <span id="chart_bar" class="mb-5"></span>
                <figcaption class="is-flex is-justify-content-space-between is-align-items-center">
                  <aside aria-label="Valeur actuelle">
                    <span class="title has-text-weight-bold">Valeur actuelle</span>
                    <p class="value mt-1">
                      <span class="percent mr-5">(+23%)</span>Bilan annuel
                    </p>
                  </aside>
                  <span class="is-size-5 amount has-text-weight-semibold">56.000.000 FCFA</span>
                </figcaption>
              </figure>
            </article>
          </section>
        </section>
        <!-- More startup-->
        <footer class="see_more px-3 mt-6">
          <h3 class="is-size-4 my-5">Voir plus</h3>
          <ul class="is-flex is-justify-content-space-between is-flex-wrap-wrap px-3">
            <li class="mb-2">
              <a href="">
                <figure class="is-flex card p-3">
                  <img src="../assets/startup/startup.svg" title="Fintech" alt="Logo Fintech"/>
                  <figcaption class="ml-3 is-size-7 is-flex is-flex-direction-column is-justify-content-space-around">
                    <h4>
                      <a href="skypemail.com" class="has-text-black is-size-5">SkyeMall.com</a>
                    </h4>
                    <span> <span>Fintech</span> Accra, Ghana </span>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li class="mb-2">
              <a href="">
                <figure class="is-flex card p-3">
                  <img src="../assets/startup/startup.svg" title="Fintech" alt="Logo Fintech"/>
                  <figcaption class="ml-3 is-size-7 is-flex is-flex-direction-column is-justify-content-space-around">
                    <h4>
                      <a href="skypemail.com" class="has-text-black is-size-5">SkyeMall.com</a>
                    </h4>
                    <span> <span>Fintech</span> Accra, Ghana </span>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li class="mb-2">
              <a href="">
                <figure class="is-flex card p-3">
                  <img src="../assets/startup/startup.svg" title="Fintech" alt="Logo Fintech" />
                  <figcaption class="ml-3 is-size-7 is-flex is-flex-direction-column is-justify-content-space-around">
                    <h4>
                      <a href="skypemail.com" class="has-text-black is-size-5">SkyeMall.com</a>
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
import moment from "moment";
import "moment/locale/fr";

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
    function compute_label(value) {
        var signe="";
        var k=1000;
        var m=1000000;
        var g=1000000000;
        if(value >= g){
            value/=g;
            signe="G";
        }
        else{
            if(value > m){
                value/=m;
                signe="M"
            }
            else if(value > k){
                value/=k;
                signe="K";
            }
        }
        return String(value)+signe;
    }
    var linkedin = 17000;
    var facebook = 37000;
    var twitter = 10000;
    var instagram = 8000;
    var stats = [linkedin,facebook,twitter,instagram];
    var total = stats.reduce((acc, cur) => acc + cur, 0);
    var linkedin_percent = linkedin*100/total;
    var facebook_percent = facebook*100/total;
    var twitter_percent = twitter*100/total;
    var instagram_percent = instagram*100/total;
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
      loading: false,
      awaitingSearch: false,
      error: false,
      animated: false,
      data: {
        _index: "",
        _type: "",
        _id: "",
        _version: 0,
        _seq_no: 0,
        _primary_term: 0,
        found: true,
        _source: {
          last_modification_date: null,
          scrapping_url: "",
          creation_date: null,
          identifiant: "",
          name: "",
          startup_country: "",
          goal: "",
          address: "",
          email: null,
          market: "",
          sectors: [],
          web_site: "",
          share_capital: null,
          trends: null,
          employees_size: 1,
          contacts: [],
          all_locations: null,
          location: null,
          list_team: [],
          list_investissor: [],
          publications: [],
          videos: [],
          turnover: [],
          fundings: {
            total: null,
            details: null,
          },
          facebook_data: null,
          twitter_data: null,
          instagram_data: null,
          linkedin_data: null,
          stats: null,
          objectID: "",
        },
      },
      //DONUT 
      sections: [
          { label: 'LINKEDIN',title: 'LINKEDIN', value: linkedin_percent, color: '#76FAC7', stats : compute_label(linkedin) },
          { label: 'FACEBOOK',title: 'FACEBOOK', value: facebook_percent, color: '#FF00E5', stats :  compute_label(facebook)},
          { label: 'TWITTER',title: 'TWITTER', value: twitter_percent, color: '#267EC3', stats :  compute_label(twitter)},
          { label: 'INSTAGRAM',title: 'INSTAGRAM', value: instagram_percent, color: '#F9F871', stats : compute_label(instagram) },
        ]
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    parseUri(objectId) {
      return escape(objectId);
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
    //Donut
    handleSectionClick(section, event) {
      console.log(`${section.label} clicked.`);
    },
    handleSectionMouseOver(section, event) {
      section.label= section.title+ " ("+section.stats+")"
    }
  },
  filters: {
    // Filter definitions
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY");
      }
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
.rm-padding {
  padding: 0 !important;
}
.about_us,.general_informations,.financial_informations {
  box-shadow: 0px 0px 27px rgba(0, 0, 0, 0.05);
}
.toolbar,.about_us,.e_reputation,.contents_group article,.financial_informations {
  background: white;
}
//Toolbar
.toolbar form {
  box-shadow: 3px 8px 18px #80808017;
}
.toolbar .domain select,.toolbar .domain + input,.domain select:focus-visible {
  border: none;
  outline: none;
}
.toolbar .domain,.toolbar .domain select {
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
.general_informations,.discussions,.financial_informations {
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
.about_startup .percent,.about_startup .percent figcaption {
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
.charts .rate_percent {
  color:$color_orange;
}
// Report social network
.e_reputation,.report_social_network li {
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
