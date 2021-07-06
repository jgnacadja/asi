<template>
  <b-field class="b-field">
    <div class="container">
      <ais-instant-search
        :search-client="searchClient"
        :index-name="ALGOLIA_INDEX_NAME"
      >
        <ais-autocomplete>
          <div slot-scope="{ currentRefinement, indices, refine }">
            <form id="searchform">
              <input
                id="search-field"
                type="search"
                class="input input-mobile is-hidden-desktop"
                :value="currentRefinement"
                placeholder="Rechercher"
                @input="refine($event.currentTarget.value)"
                autocomplete="off"
              />
              <input
                id="search-field"
                type="search"
                class="input input-desktop is-hidden-mobile"
                :class="state"
                :style="styleObject"
                :value="currentRefinement"
                placeholder="Rechercher"
                @input="refine($event.currentTarget.value)"
                autocomplete="off"
              />
            </form>
            <div
              class="columns is-hidden-desktop smooth-scroll-area-m"
              id="scroll-area"
              v-if="currentRefinement"
            >
              <smooth-scrollbar>
                <div class="hits">
                  <ul v-for="index in indices" :key="index.label">
                    <li
                      class="column"
                      style="text-align: center !important"
                      v-show="index.hits.length == 0"
                    >
                      <em>Aucun résultat...</em>
                    </li>
                    <li>
                      <ul>
                        <li v-for="hit in index.hits" :key="hit.objectID">
                          <div
                            class="columns is-mobile post-item is-marginless is-paddingless"
                          >
                            <div class="column is-2 post-cover">
                              <g-image
                                class="post-coverImage"
                                :src="hit.coverImage"
                              />
                            </div>
                            <div class="column is-10">
                              <g-link :to="hit.path">{{ hit.title }}</g-link>

                              <br />
                              <small class="post-author">{{
                                hit.author
                              }}</small>
                              <small class="post-date">{{
                                format_date(hit.date)
                              }}</small>
                              <!-- <hr> -->
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </smooth-scrollbar>
            </div>
            <div
              class="columns is-hidden-mobile smooth-scroll-area-d"
              id="scroll-area"
              v-if="currentRefinement"
            >
              <smooth-scrollbar>
                <div class="hits">
                  <ul v-for="index in indices" :key="index.label">
                    <li
                      class="column"
                      style="text-align: center !important"
                      v-show="index.hits.length == 0"
                    >
                      <em>Aucun résultat...</em>
                    </li>
                    <li>
                      <ul>
                        <li v-for="hit in index.hits" :key="hit.objectID">
                          <div
                            class="columns post-item is-marginless is-paddingless"
                          >
                            <div class="column is-2 post-cover">
                              <g-image
                                class="post-coverImage"
                                :src="hit.coverImage"
                              />
                            </div>
                            <div class="column is-10">
                              <g-link :to="hit.path">{{ hit.title }}</g-link>

                              <br />
                              <small class="post-author">{{
                                hit.author
                              }}</small>
                              <small class="post-date">{{
                                format_date(hit.date)
                              }}</small>
                              <!-- <hr> -->
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </smooth-scrollbar>
            </div>
          </div>
        </ais-autocomplete>
      </ais-instant-search>
    </div>
  </b-field>
</template>

<script>
import algoliasearch from "algoliasearch/lite";

import moment from "moment";

export default {
  props: {
    state: {
      type: String,
      default() {
        return "input-desktop-hidden";
      },
    },
  },
  data() {
    return {
      ALGOLIA_INDEX_NAME: "prod_studelyapp",
      searchClient: algoliasearch(
        "LN9TK4HMD4",
        "226b34d5d32255c856515a040f9a0830"
      ),
      searchInputStyle: "2px solid #48c774",
    };
  },
  mounted() {
    var url = location.href; // = location.href
    var parts = url.split("/").slice(2);
    if (parts[1] === "") {
      this.searchInputStyle = "2px solid #185996";
    }
  },
  computed: {
    styleObject: function () {
      return {
        "--color-hover": this.searchInputStyle,
      };
    },
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMMM YYYY");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
.field:not(:last-child) {
  margin-bottom: 0rem !important;
}

input.border-round {
  border-radius: 1em !important;
}

.input-mobile {
  background-image: url("../../static/search-solid.svg");
  background-repeat: no-repeat;
  background-position: 95% center;
  background-size: 15px;
}

.input-mobile:focus {
  //background-image: url('../../static/search-solid.svg');
  background-repeat: no-repeat;
  background-position: 110% center;
  background-size: 15px;
  //border: 2px solid #48c774;box-shadow: none;
}

.input-desktop {
  background-image: url("../../static/search-solid.svg");
  background-repeat: no-repeat;
  background-position: 95% center;
  background-size: 15px;
}

.input-desktop:focus {
  //background-image: url('../../static/search-solid.svg');
  background-repeat: no-repeat;
  background-position: 110% center;
  background-size: 15px;
  border: var(--color-hover);
  box-shadow: none;
}

.post-date {
  position: absolute;
  right: 2%;
  padding-top: 1%;
}

.post-item {
  padding-top: 5%;
}

/*.post-cover {
  //position: absolute;
  //margin-left: -15%;
  //margin-top: 2%;
}*/

/*.post-coverImage {
  width: 30px;
}*/

.smooth-scroll-area-d {
  height: 300px;
  color: black;
  width: 500px;
  position: absolute;
  margin-top: 18%;
  right: -10%;
  //padding-left: 1%;
  padding-right: 5%;
  -webkit-tap-highlight-color: transparent;
  text-align: left;
  box-sizing: border-box;
  background-color: #fff !important;
  border-radius: 0.25rem !important;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.smooth-scroll-area-m {
  height: 300px;
  color: black;
  width: 99%;
  position: absolute;
  margin-top: 1%;
  left: 4%;
  padding-left: 5%;
  padding-right: 5%;
  -webkit-tap-highlight-color: transparent;
  text-align: left;
  box-sizing: border-box;
  background-color: #fff !important;
  border-radius: 0.25rem !important;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  z-index: 1;
}

@media only screen and (max-width: 415px) {
  .input {
    background-image: url("../../static/search-solid.svg");
    background-repeat: no-repeat;
    background-position: 95% center;
    background-size: 15px;
  }

  .input:focus {
    //background-image: url('../../static/search-solid.svg');
    background-repeat: no-repeat;
    background-position: 110% center;
    background-size: 15px;
  }
}

@media only screen and (max-width: 768px) {
  .input {
    background-image: url("../../static/search-solid.svg");
    background-repeat: no-repeat;
    background-position: 98% center;
    background-size: 15px;
  }

  .input:focus {
    //background-image: url('../../static/search-solid.svg');
    background-repeat: no-repeat;
    background-position: 110% center;
    background-size: 15px;
  }
}

@media only screen and (max-width: 1023px) {
  .input {
    background-image: url("../../static/search-solid.svg");
    background-repeat: no-repeat;
    background-position: 98% center;
    background-size: 15px;
  }

  .input:focus {
    //background-image: url('../../static/search-solid.svg');
    background-repeat: no-repeat;
    background-position: 110% center;
    background-size: 15px;
  }
}

@media only screen and (min-width: 1280px) {
  .b-field {
    right: 12%;
    position: absolute;
  }
}

@media only screen and (min-width: 414px) and (max-width: 768px) {
  .smooth-scroll-area-m {
    height: 300px;
    color: black;
    width: 99%;
    position: absolute;
    margin-top: 1%;
    left: 2%;
    padding-left: 5%;
    padding-right: 5%;
    -webkit-tap-highlight-color: transparent;
    text-align: left;
    box-sizing: border-box;
    background-color: #fff !important;
    border-radius: 0.25rem !important;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1024px) {
  #searchform {
    width: 95%;
  }
}

@media only screen and (min-width: 1085px) and (max-width: 1279px) {
  .input-desktop-display {
    transform: translateX(-40%) !important;
  }
}

@media only screen and (min-width: 1084px) and (max-width: 1546px) {
  .input-desktop-hidden {
    transition: transform 0.5s ease;
    transform: translateX(120%);
    z-index: -1;
    -webkit-opacity: 0;
    -moz-opacity: 0;
    opacity: 0;
    -webkit-transition: all 0.5 ease-in-out;
    -moz-transition: all 0.5 ease-in-out;
    -ms-transition: all 0.5 ease-in-out;
    -o-transition: all 0.5 ease-in-out;
  }

  .input-desktop-display {
    display: block;
    transition: transform 0.5s ease;
    transform: translateX(-10%);
    z-index: 1;
    -webkit-opacity: 1;
    -moz-opacity: 1;
    opacity: 1;
    -webkit-transition: all 0.5 ease-in;
    -moz-transition: all 0.5 ease-in;
    -ms-transition: all 0.5 ease-in;
    -o-transition: all 0.5 ease-in;
  }
}

@media only screen and (min-width: 1366px) and (max-width: 1366px) {
  #searchform {
    margin-left: 10%;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1096px) {
  .input-desktop {
    display: none;
  }
}
</style>