<template>
  <ais-instant-search
    :search-client="searchClient"
    :index-name="ALGOLIA_INDEX_NAME"
    class="is-fullwidth"
  >
    <ais-autocomplete>
      <div slot-scope="{ currentRefinement, indices, refine }">
        <form class="field is-grouped" style="width: 100%">
          <p class="control is-expanded">
            <input
              class="input rm-raduis-input"
              type="text"
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
                  <li v-for="hit in index.hits" :key="hit.objectID">
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
                        <small class="post-author has-text-primary">
                          {{ hit.market }}
                        </small>
                        <small class="post-location">
                          <b-icon pack="fa" icon="map-marker" size="is-small" />
                          {{ hit.startup_country }}
                        </small>
                        <!-- <hr> -->
                      </div>

                      <div class="column is-2-desktop is-3">
                        <div
                          class="
                            has-text-weight-bold
                            is-size-3-desktop is-size-4-mobile
                          "
                          style="margin-top: -1rem"
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
                        <div class="post-location">0 votes</div>
                      </div>
                    </div>
                  </li>
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
      rating: 4,
      search: "",
      ALGOLIA_INDEX_NAME: "asi",
      searchClient: algoliasearch(
        "CGXKUPOJ8Y",
        "14e786e8fe7d0f1093b0a70ba55550cc"
      ),
    };
  },
  mounted() {
    console.log(this.indices);
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
  width: 43.5%;
  position: absolute;
}

.result {
  margin-top: -0.5rem;
}

@media (max-width: 768px) {
  .box-result {
    left: 20px;
    width: 94.5%;
  }
}

@media (max-width: 515px) {
  .box-result {
    left: 20px;
    width: 88%;
  }
}
</style>