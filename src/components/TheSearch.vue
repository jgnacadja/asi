<template>
  <div class="container">
    <ais-instant-search
      :search-client="searchClient"
      :index-name="ALGOLIA_INDEX_NAME"
    >
      <form class="columns is-mobile field is-grouped">
        <ais-menu-select
          class="is-hidden-mobile column is-3 is-marginless is-paddingless"
          :attribute="attribute"
          :limit="1000"
        >
          <select
            class="select rm-raduis-select is-fullwidth"
            slot-scope="{ items, canRefine, refine }"
            :disabled="!canRefine"
            @change="refine($event.currentTarget.value)"
          >
            <option style="padding: 5px 0" value="">Tous les domaines</option>
            <option
              style="padding: 5px 0"
              v-for="item in items"
              :key="item.value"
              :value="item.value"
              :selected="item.isRefined"
            >
              {{ item.label }}
            </option>
          </select>
        </ais-menu-select>
        <div
          class="
            column
            is-12-mobile is-9-touch is-marginless is-paddingless is-fullwidth
          "
        >
          <ais-index
            :indexName="ALGOLIA_INDEX_NAME"
            indexId="instant_search_results"
          >
            <ais-autocomplete>
              <div slot-scope="{ currentRefinement, indices, refine }">
                <p class="control is-expanded mobile-input">
                  <input
                    class="input rm-raduis-input is-borderless"
                    type="search"
                    placeholder="Accéder à une startup"
                    :value="currentRefinement"
                    @input="refine($event.currentTarget.value)"
                    autocomplete="off"
                  />
                </p>
                {{ print(currentRefinement, indices) }}
              </div>
            </ais-autocomplete>
          </ais-index>
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
      <div v-if="current" class="result">
        <smooth-scrollbar class="box-result">
          <div class="is-box">
            <div class="hits">
              <ul v-for="index in hits" :key="index.name">
                <li
                  class="column"
                  style="text-align: center !important"
                  v-show="index.hits.length == 0"
                >
                  <em>Aucun résultat...</em>
                </li>
                <li
                  v-for="hit in index.hits.slice(0, 3)"
                  :key="hit.objectID"
                  class="custom-hr-top"
                >
                  <g-link :to="parseUri(hit.objectID)">
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
                          is-10-tablet is-8-mobile
                          has-text-left has-text-weight-bold
                          is-size-7-mobile
                        "
                      >
                        {{ hit.name }}

                        <br />
                        <small
                          class="
                            post-author
                            has-text-primary
                            is-size-7-mobile
                            has-text-weight-light
                          "
                          v-if="hit.market !== 'Indefini'"
                        >
                          {{ hit.market }}
                        </small>
                        <small
                          class="
                            post-location
                            is-size-7-mobile
                            has-text-weight-light
                          "
                        >
                          <b-icon pack="fa" icon="map-marker" size="is-small" />
                          {{ hit.startup_country }}
                        </small>
                        <!-- <hr> -->
                      </div>

                      <div class="column is-2-tablet is-4-mobile">
                        <div
                          class="
                            has-text-weight-bold
                            post-vote
                            is-size-4-desktop is-size-7-mobile
                          "
                        >
                          <span v-if="hit.stats">{{ hit.stats }}</span>
                          <span v-if="!hit.stats">0.0</span>
                        </div>
                        <div class="has-text-centered custom-size-mobile">
                          <i
                            v-bind:class="hit.stats >= 1 ? 'fas' : 'far'"
                            class="fa-star fa-sm has-text-warning ml-1"
                          ></i>

                          <i
                            v-bind:class="hit.stats >= 2 ? 'fas' : 'far'"
                            class="fa-star fa-sm has-text-warning ml-1"
                          ></i>

                          <i
                            v-bind:class="hit.stats >= 3 ? 'fas' : 'far'"
                            class="fa-star fa-sm has-text-warning ml-1"
                          ></i>

                          <i
                            v-bind:class="hit.stats >= 4 ? 'fas' : 'far'"
                            class="fa-star fa-sm has-text-warning ml-1"
                          ></i>

                          <i
                            v-bind:class="hit.stats >= 5 ? 'fas' : 'far'"
                            class="fa-star fa-sm has-text-warning ml-1"
                          ></i>
                        </div>
                        <!-- <div
                          class="
                            post-location
                            is-size-7-mobile
                            has-text-weight-light
                          "
                        >
                          0 votes
                        </div> -->
                      </div>
                    </div>
                  </g-link>
                </li>
              </ul>
              <g-image
                class="custom-size is-pulled-right mr-4 pt-2 pt-4-desktop"
                alt="algolia"
                src="~/assets/algolia.svg"
              />
            </div>
          </div>
        </smooth-scrollbar>
      </div>
    </ais-instant-search>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch/lite";

export default {
  component: {},
  data() {
    return {
      baseUrl: "http://asi.dev.rintio.com/detail/",
      ALGOLIA_INDEX_NAME: "asi",
      searchClient: algoliasearch(
        "CGXKUPOJ8Y",
        "14e786e8fe7d0f1093b0a70ba55550cc"
      ),
      attribute: "market",
      current: "",
      hits: [],
    };
  },
  methods: {
    parseUri(objectId) {
      const parseId = escape(objectId);
      return `${this.baseUrl}${parseId}`;
    },
    print(query, indices) {
      this.current = query;
      this.hits = indices;

      console.log(this.current);
      console.log("hits", this.hits);
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
  vertical-align: top;
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

