<template>
  <Layout>
    <div id="app" class="container">
      <section>
        <b-steps
          v-model="activeStep"
          :has-navigation="hasNavigation"
          :icon-prev="prevIcon"
          :icon-next="nextIcon"
          :label-position="labelPosition"
          :animated="isAnimated"
          :rounded="isRounded"
        >
          <b-step-item step="1">
            <h1 class="title has-text-centered">Step 1</h1>
          </b-step-item>

          <b-step-item step="2">
            <h1 class="title has-text-centered">Step 2</h1>
          </b-step-item>

          <b-step-item step="3">
            <h1 class="title has-text-centered">Step 3</h1>
          </b-step-item>
          <template v-if="customNavigation" #navigation="{ previous, next }">
            <div class="has-text-centered is-centered">
              <b-button
                outlined
                icon-pack="fas"
                icon-left="arrow-left"
                :disabled="previous.disabled"
                @click.prevent="previous.action"
              >
                Précédent
              </b-button>
              <b-button
                outlined
                icon-pack="fas"
                icon-right="arrow-right"
                :disabled="next.disabled"
                @click.prevent="next.action"
              >
                Suivant
              </b-button>
            </div>
          </template>
        </b-steps>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "How is works",
    };
  },
  data() {
    return {
      activeStep: 0,

      showSocial: false,
      isAnimated: true,
      isRounded: true,
      isStepsClickable: false,

      hasNavigation: true,
      customNavigation: true,
      isProfileSuccess: false,

      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      labelPosition: "bottom",
      mobileMode: "minimalist",
    };
  },
};
</script>
