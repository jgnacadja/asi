<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <div class="hero-body">
      <div class="container has-text-centered mx-auto">
        <div class="column is-column is-8-desktop is-offset-2-desktop">
          <h1 class="title">BIENVENUE SUR</h1>
          <br />
          <h2 class="subtitle has-text-weight-bold">
            La plateforme des potentialités d’Afrique
          </h2>
          <div class="box is-shadowless is-paddinless-mobile">
            <div class="box field is-grouped">
              <TheSearch />
            </div>
          </div>
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
      title: "Africa Startup Insight",
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
};
</script>

<style lang="scss">
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

.button,
.input,
.textarea,
.taginput .taginput-container.is-focusable,
.select select,
.file-cta,
.file-name,
.pagination-previous,
.pagination-next,
.pagination-link,
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
</style>
