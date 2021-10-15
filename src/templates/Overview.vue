<template>
  <Layout>
    <b-loading :is-full-page="true" v-model="loading"></b-loading>
    <section v-if="(loading && !data._id) || (!loading && !data._id)" class="overview_page">
      <!-- Search bar -->
      <div class="container has-text-centered mx-auto">
        <div class="column is-column is-12-desktop ">
          <div class="box is-shadowless is-paddinless-mobile">
            <div class="box field is-grouped">
              <TheSearch />
            </div>
          </div>
        </div>
      </div>
      <section class="my-6 px-6 main_content">
        <!-- Summary startup-->
        <header class="is-flex is-align-items-center card about_us">
          <figure class="ml-4 mr-2 p-0">
            <p class="image is-64x64">
              <b-skeleton :animated="animated" circle width="64px" height="64px"></b-skeleton>
            </p>
          </figure>
          <aside class="column is-three-quarters" aria-label="contents_loading">
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
                      <img src="../assets/social_networks/awards.svg" title="Informations générales" alt="" />
                    </span>
                    <figcaption class="has-text-weight-normal"> Informations générales</figcaption>
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
                      <b-skeleton class="align-items-right" :animated="animated" ></b-skeleton>
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
                    <figcaption class="has-text-weight-normal"> Commentaires</figcaption>
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
            <!-- Social Network-->
            <section class="card contents_group e_reputation mt-5 p-5">
              <header class="is-flex is-justify-content-space-between">
                <figure class="is-flex is-align-items-center">
                  <span class="is-flex representation p-4 mr-3">
                    <img src="../assets/social_networks/awards.svg" title="E-reputation" alt=""/>
                  </span>
                  <figcaption>E-reputation</figcaption>
                </figure>
                <!-- <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label> -->
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
                  <figcaption class="has-text-weight-normal"> Performance financière</figcaption>
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
          <ul class="is-flex is-justify-content-space-between is-flex-wrap-wrap px-3">
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
                  <figcaption class=" ml-3 is-size-7 column is-flex-direction-column is-justify-content-space-around">
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
      <header class="container has-text-centered mx-auto">
        <div class="column is-column is-12-desktop">
          <div class="box is-shadowless is-paddinless-mobile">
            <div class="box field is-grouped">
              <TheSearch :query="data._source.name" :direct="false" />
            </div>
          </div>
        </div>
      </header>
      <section class="my-6 px-6 main_content">
        <!-- Summary startup-->
        <header class="is-flex is-align-items-center card about_us">
          <figure class="ml-4 mr-2 p-0">
            <img v-if="data._source.logo" :src="data._source.logo" :title="data._source.name" alt="Logo"/>
          </figure>
          <aside class="column is-three-quarters" aria-label="Description Startup">
            <h1 class="m-0 is-size-4">
              <span v-if="data._source.name">{{ data._source.name }}</span>
              <span v-else>{{ notAvailable }}</span>
            </h1>
            <h2 class="m-0 is-size-6 is-inline-block category py-2 my-2 px-4 pr-5">
              <span v-if="data._source.market && data._source.market !== 'Indefini'" >{{ data._source.market }}</span>
              <span v-else>{{ notAvailable }}</span>
            </h2>
            <p class="is-size-6 description pb-2">
              <span v-if="data._source.goal">{{ data._source.goal }}</span>
              <span v-else>Aucune description disponible</span>
            </p>
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
                  <li class="is-flex columns is-justify-content-space-between">
                    <div class="column">Date de création</div>
                    <div class="column has-text-right">
                      <strong>
                        <span v-if="data._source.creation_date">{{data._source.creation_date | formatDate}}</span>
                        <span v-else>{{ notAvailable }}</span>
                      </strong>
                    </div>
                  </li>
                  <li class="is-flex columns is-justify-content-space-between">
                    <div class="column">Siège social</div>
                    <div class="column has-text-right">
                      <span v-if="data._source.address">{{data._source.address}}</span>
                      <span v-else>{{ notAvailable }}</span>
                    </div>
                  </li>
                  <li class="is-flex columns is-justify-content-space-between">
                    <div class="column">Email</div>
                    <div class="column has-text-right">
                      <strong>
                        <span v-if="data._source.email">
                          <a :href="'mailto:' + data._source.email" class="has-text-black">
                            {{ data._source.email }}
                          </a>
                        </span>
                        <span v-else>{{ notAvailable }}</span>
                      </strong>
                    </div>
                  </li>
                  <li class="is-flex columns is-justify-content-space-between">
                    <div class="column">Site web</div>
                    <div class="column has-text-right">
                      <strong>
                        <span v-if="data._source.web_site">
                          <a :href="'mailto:' + data._source.web_site" class="has-text-black">
                            {{ data._source.web_site }}
                          </a>
                        </span>
                        <span v-else>{{ notAvailable }}</span>
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
                    <figcaption class="has-text-weight-normal">Commentaires </figcaption>
                  </figure>
                </h3>
                <section v-if="data._source.comments && data._source.comments.length !== 0">
                  <ul class="comments_history mt-5">
                    <li v-for="comment in data._source.comments" :key="comment" class="mb-5">
                      <article class="is-flex p-5">
                        <figure class="mr-3">
                          <img :src="comment.author" :alt="comment.name" />
                        </figure>
                        <p class="is-size-7 has-text-justified">
                          <strong>{{ comment.name }} </strong> <br /> {{ comment.comment }}
                        </p>
                      </article>
                    </li>
                  </ul>
                  <b-pagination
                    aria-previous-label="Previous page"
                    :total="data._source.comments.length"
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
                <section v-else class="mt-5 mb-6 p-2 no_comment is-italic" >
                  Aucun commentaire disponible
                </section>
              </article>
            </section>
            <section class="card contents_group e_reputation mt-5 p-5">
              <header class="is-flex is-justify-content-space-between">
                <figure class="is-flex is-align-items-center">
                  <span class="is-flex representation p-4 mr-3">
                    <img src="../assets/social_networks/awards.svg" title="E-reputation" alt=""/>
                  </span>
                  <figcaption>E-reputation</figcaption>
                </figure>
                <!-- <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label> -->
              </header>
              <figure class="charts is-flex is-flex-direction-column-reverse is-justify-content-center is-align-items-center">
                <vc-donut 
                  background="white"
                  foreground="white"
                  :size="400"
                  unit="px"
                  :thickness="40"
                  :sections="sections"
                  :total="100"
                  :start-angle="0"
                  :auto-adjust-text-size="true"
                  section.value="true"
                  has-legend
                  legend-placement="bottom"
                  @section-click="handleSectionClick"
                  @section-mouseover="handleSectionMouseOver" 
                >
                  <figcaption class="is-size-4">
                    Total <br />
                    <span class="rate_percent">+0%</span>
                  </figcaption>
                </vc-donut>
                <figcaption class="statistic_donut has-text-white has-text-weight-bold" :class="link_data_exist ? 'd-block':'d-none'">
                  <ul>
                    <li class="linkedin_caption" :style="'top : '+y_linkedin+';left: '+x_linkedin">
                      <figure class="is-flex is-align-items-center is-justify-content-center">
                        <figcaption v-if="stats_linkedin !== '0'">{{stats_linkedin}}</figcaption>
                      </figure>
                    </li>
                    <li class="facebook_caption" :style="'top : '+y_facebook+';left: '+x_facebook">
                      <figure class="is-flex is-align-items-center is-justify-content-center">
                        <figcaption v-if="stats_facebook !== '0'">{{stats_facebook}}</figcaption>
                      </figure>
                    </li>
                    <li class="twitter_caption" :style="'top : '+y_twitter+';left: '+x_twitter">
                      <figure class="is-flex is-align-items-center is-justify-content-center">
                        <figcaption v-if="stats_twitter !== '0'">{{stats_twitter}}</figcaption>
                      </figure>
                    </li>
                    <li class="instagram_caption" :style="'top : '+y_instagram+';left: '+x_instagram">
                      <figure class="is-flex is-align-items-center is-justify-content-center">
                        <figcaption v-if="stats_instagram !== '0'">{{stats_instagram}}</figcaption>
                      </figure>
                    </li>
                  </ul>
                </figcaption>
              </figure>
              <footer class="report_social_network mb-5 is-size-7">
                <ul>
                  <li class="is-flex is-align-items-center linkedin mt-2 mx-6">
                    <div class="column">
                      <span class="linkedin"></span> LINKEDIN
                    </div>
                    <div class="column has-text-centered">
                      <span v-if="data._source.linkedin_data.followers" class="rate mr-5 pr-5 has-text-right">
                        {{ data._source.linkedin_data.followers }}
                      </span>
                      <span v-else>{{ notAvailable }}</span>
                    </div>
                  </li>
                  <li class="is-flex is-align-items-center facebook mt-2 mx-6">
                    <div class="column">
                      <span class="facebook"></span> FACEBOOK
                    </div>
                    <div class="column has-text-centered">
                      <span v-if="data._source.facebook_data.followers" class="rate mr-5 pr-5 has-text-right">
                        {{ data._source.facebook_data.followers }}
                      </span>
                      <span v-else>{{ notAvailable }}</span>
                    </div>
                  </li>
                  <li class="is-flex is-align-items-center twitter mt-2 mx-6">
                    <div class="column">
                      <span class="twitter"></span> TWITTER
                    </div>
                    <div class="column has-text-centered">
                      <span v-if="data._source.twitter_data.followers" class="rate mr-5 pr-5 has-text-right">
                        {{ data._source.twitter_data.followers }}
                      </span>
                      <span v-else>{{ notAvailable }}</span>
                    </div>
                  </li>
                  <li class="is-flex columns is-align-items-center mt-2 mx-6">
                    <div class="column">
                      <span class="instagram"></span> INSTAGRAM
                    </div>
                    <div class="column has-text-centered">
                      <span v-if="data._source.instagram_data.followers" class="rate mr-5 pr-5 has-text-right">
                        {{ data._source.instagram_data.followers }}
                      </span>
                      <span v-else>{{ notAvailable }}</span>
                    </div>
                  </li>
                </ul>
              </footer>
            </section>
          </section>
          <!-- Financial informations -->
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
              <span class="is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-items-center">
                Capital social
                <strong class="is-size-5 has-text-weight-bold pl-1">
                  <span v-if="data._source.share_capital">{{data._source.share_capital}}
                  </span>
                  <span v-else> 0 </span>
                </strong>
              </span>
              <BarCharts :net_result="data._source.details" />
              <figcaption  class="p-4 has-background-white is-flex is-justify-content-space-between 
                                  is-align-items-center">
                <aside aria-label="Valeur actuelle">
                  <span class="title has-text-weight-bold">Valeur actuelle</span>
                  <p class="value mt-1">
                    <span class="percent mr-5">
                      (
                        <span v-if="data._source.net_value && data._source.net_value.grow">
                          {{ data._source.net_value.grow }}%
                        </span>
                        <span v-else> - </span>
                      )
                    </span>Bilan annuel
                  </p>
                </aside>
                <span class="is-size-5 amount has-text-weight-semibold">
                  <span v-if="data._source.net_result && data._source.net_result.total">
                    {{ data._source.net_result.total }}
                  </span>
                  <span v-else> 0 FCFA</span>
                </span>
              </figcaption>
            </article>
          </section>
        </section>
        <!-- More startup-->
        <footer class="see_more px-3 mt-6">
          <h3 class="is-size-4 my-5">Voir plus</h3>
          <ul class="is-flex is-justify-content-space-between is-flex-wrap-wrap px-3">
            <li v-for="hit in this.results" :key="hit" class="mb-2">
              <g-link :to="`/overview/${parseUri(hit._source.objectID)}`" title="Cliquez pour y accéder"
                class="has-text-black is-size-5">
                <figure class="is-flex card p-3">
                  <img src="../assets/startup/startup.svg" :title="hit._source.name" :alt="'Logo'+hit._source.name "/>
                  <figcaption class="ml-3 is-size-7 is-flex is-flex-direction-column is-justify-content-space-around">
                    <h4>
                      <span v-if="hit._source.name">
                            {{ hit._source.name }}
                      </span>
                      <span v-else>{{ notAvailable }}</span>
                    </h4>
                    <span>
                      <span>
                        <span v-if="hit._source.market">{{ hit._source.market }}</span>
                        <span v-else>{{ notAvailable }} </span>
                      </span> &nbsp;
                      <span v-if="hit._source.startup_country">{{hit._source.startup_country}}</span>
                      <span v-else>{{ notAvailable }}</span>
                    </span>
                  </figcaption>
                </figure>
              </g-link>
            </li>
          </ul>
        </footer>
      </section>
      <footer class="share_options" >
        <span class="icon share_tools is-flex is-justify-content-center is-align-items-center p-4" @click="openCloseShareOption">
          <i class="fas fa-share-alt has-text-white" title="Liens de partage"></i>
        </span>
        <ul class="has-text-right is-size-4 p-2" :class="share_open ?'d-block showit' :'d-none'">
          <li >
            <ShareNetwork
                network="LinkedIn"
                :url="url"
                :title="data._source.name"
                :description="data._source.goal"
                :hashtags="data._source.market">
               <span class="icon">
                <i class="fab fa-linkedin" title="Partager sur LinkedIn"></i>
              </span>
            </ShareNetwork>
          </li>
          <li>
            <ShareNetwork
                network="facebook"
                :url="url"
                :title="data._source.name"
                :description="data._source.goal"
                :hashtags="data._source.market">
              <span class="icon">
                <i class="fab fa-facebook" title="Partager sur Facebook"></i>
              </span>
            </ShareNetwork>
          </li>
          <li>
            <ShareNetwork
                network="Twitter"
                :url="url"
                :title="data._source.name"
                :description="data._source.goal"
                :hashtags="data._source.market">
               <span class="icon">
                <i class="fab fa-twitter" title="Partager sur Twitter"></i>
              </span>
            </ShareNetwork>
          </li>
        </ul>
        
      </footer>
    </section>
  </Layout>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import BarCharts from "~/components/BarCharts.vue";
// import SocialNetwork from "~/components/SocialNetwork.vue";
import "vueperslides/dist/vueperslides.css";
import moment from "moment";
import "moment/locale/fr";
import TheSearch from "~/components/TheSearch.vue";
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
  // components: { VueperSlides, VueperSlide, BarCharts, TheSearch,SocialNetwork },
  components: { VueperSlides, VueperSlide, BarCharts, TheSearch },
  data() {
    return {
      share_open: false,
      url: "",
      stats_linkedin : "0",
      stats_facebook : "0",
      stats_twitter : "0",
      stats_instagram : "0",
      linkedin_percent : 0,
      facebook_percent : 0,
      twitter_percent : 0,
      instagram_percent : 0,
      x_linkedin : "0px",
      y_linkedin : "0px",
      x_facebook : "0px",
      y_facebook : "0px",
      x_twitter : "0px",
      y_twitter : "0px",
      x_instagram : "0px",
      y_instagram : "0px",
      total: 200,
      current: 10,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "",
      size: "",
      link_data_exist: false,
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
          logo: "",
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
          net_result: {
            total: null,
            details: [],
          },
          net_value: {
            value: null,
            grow: null,
          },
          linkedin_data: {},//17000
          facebook_data: {},//37000
          twitter_data: {}, //10000
          instagram_data: {}, //8000
          stats: null,
          objectID: "",
          comments: [],
        },
      },
      results: [],
      notAvailable: "Non disponible",
      //DONUT
      sections: [
        {
          label: "LINKEDIN",
          title: "LINKEDIN",
          value: 0,
          color: "#73eabc",
          stats: "LINKEDIN : 0",
        },
        {
          label: "FACEBOOK",
          title: "FACEBOOK",
          value: 0,
          color: "#FF00E5",
          stats: "FACEBOOK : 0",
        },
        {
          label: "TWITTER",
          title: "TWITTER",
          value: 0,
          color: "#267EC3",
          stats: "TWITTER : 0",
        },
        {
          label: "INSTAGRAM",
          title: "INSTAGRAM",
          value: 0,
          color: "#ffdc34",
          stats: "INSTAGRAM : 0",
        },
      ],
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
          this.fetchAlternatives();
          this.computeLinkRate();
          this.verifyLinkData();
        })
        .catch((error) => {
          this.loading = false;
          this.error = true;
        });
    },
    fetchAlternatives() {
      var axios = require("axios");
      let body;
      if (this.data._source.market) {
        body = {
          query: {
            query_string: {
              type: "best_fields",
              fields: ["name", "startup_country", "market"],
              query: `market: ${this.data._source.market}`,
            },
          },
          size: 3,
        };
      }
      axios
        .post(
          `${this.elasticsearch.API}/${this.elasticsearch.INDEX}/_search`,
          body,
          {}
        )
        .then((response) => {
          this.results = response.data.hits.hits;
        })
        .catch((error) => {console.log(error)});
    },
    //Donut
    compute_label (num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'Md';
        }
        else {
          if (num >= 10000000) {
              return (num / 10000000).toFixed(1).replace(/\.0$/, '') + 'M';
          }
          else if (num >= 1000) {
              return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
          }
        } 
        return num;
    },
    convert_deg_rad(value) {
      var deg_rad = 1.57 - (1.8* value * 2*3.14) / 360;
      var x = 160*Math.cos(deg_rad) - 35;
      var y = 160 - 160*Math.sin(deg_rad) +15;
      return [x,y];
    },
    computeLinkRate(){
      var linkedin = this.data._source.linkedin_data.followers ; //17000
      var facebook = this.data._source.facebook_data.followers; //37000
      var twitter = this.data._source.twitter_data.followers; //10000
      var instagram = this.data._source.instagram_data.followers; //8000
      var linkedin_coordinates,facebook_coordinates,twitter__coordinates,instagram_coordinates;
      var linkedin_percent,facebook_percent,twitter_percent,instagram_percent;
      linkedin_coordinates=facebook_coordinates=twitter__coordinates=instagram_coordinates = [0,0];
      linkedin_percent=facebook_percent=twitter_percent=instagram_percent=0;
      if((linkedin!==0 && linkedin !==null) || (facebook!==0 && facebook !==null) || 
          (twitter!==0 && twitter !==null) || (instagram!==0 && instagram !==null)){
        var stats = [linkedin, facebook, twitter, instagram];
        var total = stats.reduce((acc, cur) => acc + cur, 0);
        linkedin_percent = (linkedin * 100) / total;
        facebook_percent = (facebook * 100) / total;
        twitter_percent = (twitter * 100) / total;
        instagram_percent = (instagram * 100) / total;
        // Coordinates 
        linkedin_coordinates= this.convert_deg_rad(linkedin_percent);
        facebook_coordinates= this.convert_deg_rad((linkedin_percent*2)+facebook_percent);
        twitter__coordinates= this.convert_deg_rad(((linkedin_percent+facebook_percent)*2)+twitter_percent);
        instagram_coordinates= this.convert_deg_rad(((linkedin_percent+facebook_percent+twitter_percent)*2)+instagram_percent);
        // Affect each x-axis y-axis
        this.x_linkedin = linkedin_coordinates[0] +"px";
        this.y_linkedin = linkedin_coordinates[1] +"px";
        this.x_facebook = facebook_coordinates[0] +"px";
        this.y_facebook = facebook_coordinates[1] +"px";
        this.x_twitter = twitter__coordinates[0] +"px";
        this.y_twitter = twitter__coordinates[1] +"px";
        this.x_instagram = instagram_coordinates[0] +"px";
        this.y_instagram = instagram_coordinates[1] +"px";
        //Compute again donut value
        this.sections = [
          {
            label: "LINKEDIN",
            title: "LINKEDIN",
            value: linkedin_percent,
            color: "#73eabc",
            stats: this.compute_label(linkedin),
          },
          {
            label: "FACEBOOK",
            title: "FACEBOOK",
            value: facebook_percent,
            color: "#FF00E5",
            stats: this.compute_label(facebook),
          },
          {
            label: "TWITTER",
            title: "TWITTER",
            value: twitter_percent,
            color: "#267EC3",
            stats: this.compute_label(twitter),
          },
          {
            label: "INSTAGRAM",
            title: "INSTAGRAM",
            value: instagram_percent,
            color: "#ffdc34",
            stats: this.compute_label(instagram),
          },
        ];
      }
      this.linkedin_percent = linkedin_percent;
      this.facebook_percent = facebook_percent;
      this.twitter_percent = twitter_percent;
      this.instagram_percent = instagram_percent;
      this.stats_linkedin = this.compute_label(linkedin);
      this.stats_facebook = this.compute_label(facebook);
      this.stats_twitter = this.compute_label(twitter);
      this.stats_instagram = this.compute_label(instagram);    
    },
    verifyLinkData(){
      for (let index in this.sections) {
        const element =  this.sections[index];
        if(element.value !==0){
          this.link_data_exist = true;
          break;
        }
      }
      if(this.link_data_exist===false){
        this.sections = [{label: "Inexistant",title: "Inexistant",value: 100,color: "#ccc",stats: 100} ];
      }
    },
    handleSectionClick(section, event) {
      console.log(`${section.label} clicked.`);
    },
    handleSectionMouseOver(section, event) {
      section.label = section.title + " (" + section.stats + ")";
    },
    openCloseShareOption(){
      this.share_open = !this.share_open
      this.url = window.location.href
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
  watch: {
    $route(to, from) {
      this.fetch();
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
.overview_page{
  padding-bottom: 50px;
  @media (min-width: 1024px){
    width: 80vw;
    margin: auto;
  }
  @media (max-width: 1024px) {
    overflow-x: hidden;
  }
}
@mixin linearLinkedIn {
  background: linear-gradient(#76fac7, #00d5d9);
}
@mixin linearFacebook {
  background: linear-gradient(#ff00e5, #7a00d9);
}
@mixin linearTwitter {
  background: linear-gradient($color_primary, #040405);
}
@mixin linearInstagram {
  background: linear-gradient(#f9f871, $color_orange);
}
.d-none{
  display: none;
}
.d-block{
  display: block;
}
.is-fullwidth {
  width: 100%;
}
.rm-raduis-select {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
.rm-raduis-input {
  border-radius: 0px;
}
.rm-raduis-search {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  background: #ff9b26;
}
.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.125;
}
.subtitle {
  font-size: 24px;
  line-height: 1.125;
}
.caption {
  font-size: 14px;
  color: #b7b7b7;
}
@media (max-width: 768px) {
  .is-column {
    padding: 0 !important;
  }
}
@media (min-width: 768px) {
  .title {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.125;
  }
  .subtitle {
    font-size: 36px;
    line-height: 1.125;
  }
  .caption {
    font-size: 18px;
    color: #b7b7b7;
  }
}
.field.is-grouped .select select {
  background: #f5f5f5;
}
.button,.input,.textarea,.taginput .taginput-container.is-focusable,.select select,
.file-cta,.file-name,.pagination-previous,.pagination-next,.pagination-link,
.pagination-ellipsis {
  height: 3.5em;
}
.select:not(.is-multiple) {
  height: 3.5em;
}
.field.is-grouped > .control:not(:last-child) {
  margin-right: 0;
}
.field.is-grouped .button {
  width: 4rem;
}
@media (max-width: 768px) {
  .is-paddinless-mobile {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}
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
.discussions{
  @include mobile(){
    margin-bottom: 1.5rem !important;
  }
}
.discussions .no_comment{
  background: #fafafa;
  min-height: 10vh;
  @include desktop{
    height: 200px;
  }
}
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
.e_reputation figure .statistic_donut ul {
  position: relative;
  // margin-top: -60px;
  // margin-left: -30px;
}
.e_reputation figure .statistic_donut li {
  position: absolute;
  // top: 240px;
}
.e_reputation figure .statistic_donut figure{
  height:60px;
  width: 60px;
  border-radius: 50%;
  // border: solid white 5px;
}
// .e_reputation figure .statistic_donut li.linkedin_caption figure{
//   @include linearLinkedIn;
// }
// .e_reputation figure .statistic_donut li.facebook_caption figure{
//   @include linearFacebook;
// }
// .e_reputation figure .statistic_donut li.twitter_caption figure{
//   @include linearTwitter;
// }
// .e_reputation figure .statistic_donut li.instagram_caption figure{
//   @include linearInstagram;
// }
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
  padding: 20px 0 0;
  @include desktop{
    padding-bottom: 150px ;
  }
  @include touch {
    height: 400px;
  }
  @media screen and (max-width: 420px)  {
    height: 300px !important;
  }
  @media screen and (max-width: 413px)  {
    height: 350px !important;
    padding-top: 0 !important;
  }
  @media screen and (max-width: 346px)  {
    height: 300px !important;
  }
}
.charts .rate_percent {
  color: $color_orange;
}
// Report social network
.e_reputation,.report_social_network li {
  position: relative;
  @media screen and (max-width: 467px)  {
    margin:0 !important;
  }
}
.report_social_network {
  @include desktop {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}
.report_social_network li div{
  position: relative;
}
.report_social_network .rate {
  right: 0;
  bottom: 0;
  position: absolute;
  color: $color_orange;
}
.report_social_network li .linkedin {
  @include linearLinkedIn;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}
.report_social_network li .facebook {
  @include linearFacebook();
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}
.report_social_network li .twitter {
  @include linearTwitter();
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}
.report_social_network li .instagram {
  @include linearInstagram();
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}
//financial_informations
.financial_informations .capital_social {
  color: white;
  background: linear-gradient(#3a416f, #141727);
  @media (max-width: 510px){
    padding: 1.5rem 0 !important;
  }
  @media (max-width: 331px) {
    margin-left: -1.5rem;
    width: calc(100% + (1.5rem*2));
  }
}
.financial_informations .legende {
  width: 100%;
}
.financial_informations .legende::after {
  width: calc(90% - 1.5rem);
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
.share_options{
  position: fixed;
  bottom: 40px;
  right: 0;
  width: 150px;
}
.share_options .share_tools{
  background: orange;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  bottom: -25px;
  right: 15px;
}
.share_options .showit{
  position: absolute;
  width: 150px;
  z-index: 0;
  bottom: 0px;
  padding-right: 20px !important;
  animation-name: example;
  animation-duration: 0.5s;
}
.share_options .showit .icon{
  transform: scale(1);
  transition: transform 0.5s;
}
.share_options a:hover{
  color: #485fc7 !important;
}
.share_options .icon:hover{
  transform: scale(1.15);
  color: #485fc7 !important;
}
@keyframes example {
  from  {
    opacity : 0;
    bottom : -25px
  }
  to    {
    bottom: 0px;
    opacity : 1
  }
}
</style>
