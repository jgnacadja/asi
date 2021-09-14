<template>
  <div class="container">
    <form class="columns is-mobile field is-grouped">
      <div class="is-hidden-mobile column is-3 is-marginless is-paddingless">
        <select class="select rm-raduis-select is-fullwidth" v-model="category">
          <option style="padding: 5px 0" value="">Tous les domaines</option>
          <option
            style="padding: 5px 0"
            v-for="item in categories.slice(1)"
            :key="item.key"
          >
            {{ item.key }}
          </option>
        </select>
      </div>
      <div
        class="
          column
          is-12-mobile is-9-touch is-marginless is-paddingless is-fullwidth
        "
      >
        <div>
          <p class="control is-expanded mobile-input">
            <input
              id="search"
              class="input rm-raduis-input is-borderless"
              type="search"
              placeholder="Accéder à une startup"
              v-model="query"
              autocomplete="off"
            />
          </p>
        </div>
      </div>
      <!-- <p
          class="
            control
            column
            is-1-desktop is-marginless is-paddingless is-fullwidth
          "
        >
          <span class="button has-text-white rm-raduis-search is-fullwidth">
            <b-icon pack="fas" icon="search" size="is-small" />
          </span>
        </p> -->
    </form>
    <div v-if="query.length > 2" class="result">
      <smooth-scrollbar class="box-result">
        <div class="is-box">
          <div
            class="hits"
            v-bind:style="results.length === 0 ? 'height:3.2rem;' : ''"
          >
            <div v-if="loading">
              <b-loading :is-full-page="false" v-model="loading"></b-loading>
            </div>

            <ul v-else>
              <li
                v-if="
                  results.length === 0 &&
                  query.length > 2 &&
                  !loading &&
                  !awaitingSearch
                "
                class="column"
                style="text-align: center !important"
              >
                <em>Aucun résultat...</em>
              </li>
              <li
                v-for="hit in results"
                :key="hit._source.objectID"
                class="custom-hr-top"
                v-else
              >
                <g-link :to="`/overview/${hit._source.objectID}`">
                  <div
                    class="
                      columns
                      post-item
                      is-marginless is-paddingless is-mobile
                      has-text-black
                    "
                  >
                    <!-- <div class="column is-2 post-cover">
                              <g-image
                                class="post-coverImage"
                                src="~/assets/fintech.png"
                                fit="inside"
                              />
                            </div> -->
                    <div
                      class="
                        column
                        is-10-tablet is-12-mobile
                        has-text-left has-text-weight-bold
                        is-size-7-mobile
                      "
                    >
                      {{ hit._source.name }}

                      <br />
                      <small
                        class="
                          post-author
                          has-text-primary
                          is-size-7-mobile
                          has-text-weight-light
                        "
                        v-if="hit._source.market !== 'Indefini'"
                      >
                        {{ hit._source.market }}
                      </small>
                      <small
                        class="
                          post-location
                          is-size-7-mobile
                          has-text-weight-light
                        "
                      >
                        <b-icon pack="fa" icon="map-marker" size="is-small" />
                        {{ hit._source.startup_country }}
                      </small>
                      <!-- <hr> -->
                    </div>

                    <!-- <div class="column is-2-tablet is-4-mobile">
                      <div
                        class="
                          has-text-weight-bold
                          post-vote
                          is-size-4-desktop is-size-7-mobile
                        "
                      >
                        <span v-if="hit._source.stats">{{
                          hit._source.stats
                        }}</span>
                        <span v-if="!hit._source.stats">0.0</span>
                      </div>
                      <div class="has-text-centered custom-size-mobile">
                        <i
                          v-bind:class="hit._source.stats >= 1 ? 'fas' : 'far'"
                          class="fa-star fa-sm has-text-warning ml-1"
                        ></i>

                        <i
                          v-bind:class="hit._source.stats >= 2 ? 'fas' : 'far'"
                          class="fa-star fa-sm has-text-warning ml-1"
                        ></i>

                        <i
                          v-bind:class="hit._source.stats >= 3 ? 'fas' : 'far'"
                          class="fa-star fa-sm has-text-warning ml-1"
                        ></i>

                        <i
                          v-bind:class="hit._source.stats >= 4 ? 'fas' : 'far'"
                          class="fa-star fa-sm has-text-warning ml-1"
                        ></i>

                        <i
                          v-bind:class="hit._source.stats >= 5 ? 'fas' : 'far'"
                          class="fa-star fa-sm has-text-warning ml-1"
                        ></i>
                      </div>
                      <div
                          class="
                            post-location
                            is-size-7-mobile
                            has-text-weight-light
                          "
                        >
                          0 votes
                        </div>
                    </div> -->
                  </div>
                </g-link>
              </li>
            </ul>
          </div>
        </div>
      </smooth-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elasticsearch: {
        API: "https://elasticsearch.dev.rintio.com",
        INDEX: "asi",
      },
      attribute: "market.keyword",
      query: "",
      category: "",
      categories: [],
      results: [],
      loading: false,
      awaitingSearch: false,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    // make an axios request to the server with the current search query
    search() {
      var axios = require("axios");
      // add * to each word of search query // required by elasticsearch
      var query = this.query
        .split(" ")
        .map((s) => s + "*")
        .join(" ");
      this.results = [];
      this.loading = true;
      let body;
      if (this.category) {
        body = {
          query: {
            query_string: {
              type: "best_fields",
              fields: ["name", "startup_country", "market"],
              query: `${query} AND market: ${this.category}`,
            },
          },
          size: 3,
        };
      } else {
        body = {
          query: {
            query_string: {
              type: "best_fields",
              fields: ["name", "startup_country", "market"],
              query: `${query}`,
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
          this.loading = false;
          this.results = response.data.hits.hits;
        })
        .catch((error) => {
          this.loading = false;
        });
    },
    // make an axios request to the server to get all categories
    fetch() {
      var axios = require("axios");
      var body = {
        size: 0,
        aggs: {
          distinct_markets: {
            terms: {
              field: this.attribute,
              size: 10000,
            },
          },
        },
      };
      axios
        .post(
          `${this.elasticsearch.API}/${this.elasticsearch.INDEX}/_search`,
          body,
          {}
        )
        .then((response) => {
          this.categories = response.data.aggregations.distinct_markets.buckets;
        })
        .catch((error) => {
          this.categories = [];
        });
    },
  },
  watch: {
    // watch for change in the query string and recall the search method
    query: function () {
      if (!this.awaitingSearch) {
        setTimeout(() => {
          if (this.query.length > 2) this.search();
          this.awaitingSearch = false;
        }, 500); // 0.5 msec delay
      }
      this.awaitingSearch = true;
    },
    category: function () {
      this.query = "";
      this.results = [];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

/* .post-item:hover{
  background-color: rgba(28, 102, 172, 0.1);
} */

li {
  list-style-type: none;
}

.result {
  padding-top: 1rem;
  border-top: 1px solid #dedede;
}

.custom-size {
  width: 12%;
}

@media screen and (min-width: 1024px) {
  .result {
    margin-right: 1rem;
  }
}

@media screen and (max-width: 767px) {
  .custom-size-mobile {
    font-size: 0.5rem;
  }

  .custom-size {
    width: 25% !important;
  }
}

.select {
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  box-sizing: inherit;
  margin: 0;
  font-family: poppins, sans-serif;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  align-items: center;
  border: 1px solid transparent;
  box-shadow: none;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  border-color: transparent;
  border-radius: 4px;
  color: #363636;
  cursor: pointer;
  display: block;
  font-size: 1em;
  width: 12em;
  outline: none;
  text-rendering: auto !important;
  height: 3.5em;
  padding-right: 0px;
  background: transparent;
  -webkit-transition: 0.5s; /* For Safari 3.1 to 6.0 */
  transition: 0.5s;
}

.select:hover {
  background: #f5f5f5;
}

.select::after,
.select::before {
  color: red !important;
  border-color: #485fc7 !important;
}

.rm-raduis-select {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

.rm-raduis-input {
  border-radius: 0px;
}

.is-borderless {
  border: transparent;
  box-shadow: none;
}

.rm-raduis-search {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  background: #ff9b26;
}

.post-vote {
  margin-top: -1rem;
}

@media (max-width: 768px) {
  .post-vote {
    margin-top: 0rem;
  }

  .custom-hr {
    border-bottom: 1px solid #c4c4c4;
    margin-bottom: 1rem;
  }

  .custom-hr-top {
    margin-top: -1rem;
  }

  .custom-hr-bottom {
    margin-bottom: -1.2rem;
  }
}

.custom-hr {
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 1rem;
}

.is-paddingless,
.is-marginless {
  padding: 0 !important;
}

.is-fullwidth {
  width: 100%;
}

@media (max-width: 768px) {
  .mobile-input {
    margin-left: 0.6rem;
  }
}

p input::placeholder {
  font-style: italic;
}
</style>

