<template>
  <ais-instant-search
    :search-client="searchClient"
    :index-name="ALGOLIA_INDEX_NAME"
    class="is-fullwidth"
  >
    <ais-autocomplete>
      <div slot-scope="{ currentRefinement, indices, refine }">
        <form class="field is-grouped" style="width: 100%">
          <ais-menu-select :attribute="attribute" class="is-hidden-mobile">
            <select
              class="select rm-raduis-select"
              slot-scope="{ items, canRefine, refine }"
              :disabled="!canRefine"
              @change="refine($event.currentTarget.value)"
            >
              <option value="">Tous les domaines</option>
              <option
                v-for="item in items"
                :key="item.value"
                :value="item.value"
                :selected="item.isRefined"
              >
                {{ item.label }}
              </option>
            </select>
          </ais-menu-select>
          <p class="control is-expanded">
            <input
              class="input rm-raduis-input"
              type="search"
              placeholder="Rechercher"
              :value="currentRefinement"
              @input="refine($event.currentTarget.value)"
              autocomplete="off"
            />
          </p>
          <p class="control">
            <span class="button has-text-white rm-raduis-search">
              <b-icon pack="fas" icon="search" size="is-small" />
            </span>
          </p>
        </form>

        <div v-if="currentRefinement" class="result">
          <smooth-scrollbar class="box box-result">
            <div class="is-box">
              <div class="hits">
                <ul v-for="index in indices" :key="index.name">
                  <li
                    class="column"
                    style="text-align: center !important"
                    v-show="index.hits.length == 0"
                  >
                    <em>Aucun résultat...</em>
                  </li>
                  <li
                    v-for="(hit, i) in index.hits.slice(0, 3)"
                    :key="hit.objectID"
                    class="custom-hr-top"
                    v-bind:class="{
                      'custom-hr': i !== index.hits.slice(0, 3).length - 1,
                      'custom-hr-bottom':
                        i === index.hits.slice(0, 3).length - 1,
                    }"
                  >
                    <div
                      class="
                        columns
                        post-item
                        is-marginless is-paddingless is-mobile
                      "
                    >
                      <div class="column is-2 post-cover">
                        <g-image
                          class="post-coverImage"
                          src="~/assets/fintech.png"
                          fit="inside"
                        />
                      </div>
                      <div
                        class="
                          column
                          is-8-desktop is-7
                          has-text-left has-text-weight-bold
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

                      <div class="column is-2-desktop is-3">
                        <div
                          class="
                            has-text-weight-bold
                            post-vote
                            is-size-4-desktop
                          "
                        >
                          <span v-if="hit.stats">{{ hit.stats }}</span>
                          <span v-if="!hit.stats">0.0</span>
                        </div>
                        <div class="has-text-centered is-hidden-mobile">
                          <i
                            v-bind:class="hit.stats >= 1 ? 'fas' : 'far'"
                            class="fa-star fa-sm has-text-warning ml-1"
                          ></i>

                          <i
                            v-bind:class="hit.stats >= 1 ? 'fas' : 'far'"
                            class="fa-star fa-sm has-text-warning ml-1"
                          ></i>

                          <i
                            v-bind:class="hit.stats >= 1 ? 'fas' : 'far'"
                            class="fa-star fa-sm has-text-warning ml-1"
                          ></i>

                          <i
                            v-bind:class="hit.stats >= 1 ? 'fas' : 'far'"
                            class="fa-star fa-sm has-text-warning ml-1"
                          ></i>

                          <i
                            v-bind:class="hit.stats >= 1 ? 'fas' : 'far'"
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
                      </div>
                    </div>
                  </li>
                  <hr />
                </ul>
              </div>
            </div>
          </smooth-scrollbar>
        </div>
      </div>
    </ais-autocomplete>
  </ais-instant-search>
</template>

<script>
import algoliasearch from "algoliasearch/lite";

export default {
  component: {},
  data() {
    return {
      ALGOLIA_INDEX_NAME: "asi",
      searchClient: algoliasearch(
        "CGXKUPOJ8Y",
        "14e786e8fe7d0f1093b0a70ba55550cc"
      ),
      attribute: "market",
    };
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

li {
  list-style-type: none;
}

.box-result {
  height: 15em;
  width: 62%;
  position: absolute;
}

.result {
  margin-top: -0.5rem;
}

@media (max-width: 1024px) {
  .box-result {
    left: 30px;
    width: 93%;
  }
}

@media (max-width: 768px) {
  .box-result {
    left: 0px;
    width: 100%;
  }
}

@media (max-width: 515px) {
  .box-result {
    left: 0px;
    width: 100%;
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
  border-color: #dbdbdb;
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
</style>
