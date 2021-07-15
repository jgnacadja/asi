<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-6 is-offset-3">
          <h1 class="title">Bienvenue sur</h1>
          <h2 class="subtitle">La plateforme des potentialités d’Afrique</h2>
          <div class="box">
            <div class="field is-grouped">
              <div class="select">
                <select class="rm-raduis-select">
                  <option>Fintech</option>
                </select>
              </div>
              <p class="control is-expanded">
                <input
                  class="input rm-raduis-input"
                  type="text"
                  placeholder="Rechercher"
                />
              </p>
              <p class="control">
                <span
                  class="button is-info"
                  @click="isSearching = !isSearching"
                >
                  <b-icon pack="fas" icon="search" size="is-small" />
                </span>
              </p>
            </div>
          </div>
          <h5 style="margin-top: -15px">
            Retrouvez les trois meilleurs résultats de votre recherche
          </h5>
          <TheSearch v-if="isSearching" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import TheSearch from "~/components/TheSearch.vue";

export default {
  components: {
    TheSearch,
  },
  metaInfo() {
    return {
      title: "Africa Startups Insights",
    };
  },
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
      search: "",
      isSearching: false,
    };
  },
};
</script>

<style lang="scss">
.rm-raduis-select {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

.rm-raduis-input {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}
</style>
