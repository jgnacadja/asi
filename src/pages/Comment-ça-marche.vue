<template>
  <Layout>
    <section class="container mx-auto">
      <div class="has-text-centered mt-6">
        <p class="title is-2 has-text-info">Comment ça marche ?</p>
        <p class="subtitle is-6 mt-4">African Startups Insights est une plateforme numérique spécialement <br/> dédiée aux entreprises africaines.</p>
      </div>

      <div class="columns my-6 mx-auto is-align-content-center has-text-centered">
        <div class="column">
          <g-image 
            class="image is-96x96 mx-auto"
            src="~/assets/search.png"
            alt=""
          >
          </g-image>
          <p class="title is-5 has-text-info my-4">Recherchez votre domaine d’activité </p>
          <p class="subtitle is-6 mt-6">Entrez dans la barre le domaine d’activité ou le pays de votre choix. ASI vous présente une liste de startups. </p>
        </div>
        <div class="column">
          <g-image 
            src="~/assets/business.png"
            alt=""
            class="image is-96x96 mx-auto"
          >
          </g-image>
          <p class="title is-5 has-text-info my-4">Consultez la carte d’identité et l’influence des startups </p>
          <p class="subtitle is-6 my-5">Analysez les performances et l’influence des startups de votre choix auprès de leurs utilisateurs</p>
        </div>
        <div class="column">
          <g-image 
            src="~/assets/call.png"
            alt=""
            class="image is-96x96 mx-auto"
          >
          </g-image>
          <p class="title is-5 has-text-info my-4">Contactez la ou les startup(s) de votre choix</p>
          <p class="subtitle is-6 my-5">Retrouvez l’adresse et les contacts des  startups de votre choix et mettez vous en relation avec elles.</p>
        </div>
      </div>

      <div>
        <p class="title is-4 has-text-info ml-5">FAQs</p>

        <b-collapse animation="slide" aria-id="contentIdForA11y3" :open="false">
          <template #trigger="props">
            <div
              role="button"
              class="
                panel-heading
                columns
                is-variable is-mobile
                has-background-white
                my-6
              "
              aria-controls="contentIdForA11y3"
            >
              <div class="column is-10 has-text-justified margin-title">
                <p class="has-text-info">Consultez la carte d’identité et l’influence des startups</p>
              </div>
              <div class="column is-2">
                <b-button type="is-white" class="is-pulled-right">
                  <figure class="image is-32x32">
                    <g-image
                      :class="{ rotate: props.open }"
                      alt="faq"
                      src="~/assets/faq/expend.svg"
                      height="20"
                    />
                  </figure>
                </b-button>
              </div>
            </div>
          </template>
          <div
            class="
              panel-block
              has-background-white
              columns
              is-multiline
              has-background-white
              is-centered
              has-text-justified
            "
          >
            <div class="column is-12" v-html="content"></div>
          </div>
        </b-collapse>
        <b-collapse animation="slide" aria-id="contentIdForA11y3" :open="false">
          <template #trigger="">
            <div
              role="button"
              class="
                panel-heading
                columns
                is-variable is-mobile
                has-background-white
              "
              aria-controls="contentIdForA11y3"
            >
              <div class="column is-10 has-text-justified margin-title">
                <p class="has-text-info">Consultez la carte d’identité et l’influence des startups</p>
              </div>
            </div>
          </template>
          <div
            class="
              panel-block
              has-background-white
              columns
              is-multiline
              has-background-white
              is-centered
              has-text-justified
            "
          >
            <div class="column is-12" v-html="content"></div>
          </div>
        </b-collapse>
        <b-collapse animation="slide" aria-id="contentIdForA11y3" :open="false">
          <template #trigger="">
            <div
              role="button"
              class="
                panel-heading
                columns
                is-variable is-mobile
                has-background-white
                my-6
              "
              aria-controls="contentIdForA11y3"
            >
              <div class="column is-10 has-text-justified margin-title">
                <p class="has-text-info">Consultez la carte d’identité et l’influence des startups</p>
              </div>
            </div>
          </template>
          <div
            class="
              panel-block
              has-background-white
              columns
              is-multiline
              has-background-white
              is-centered
              has-text-justified
            "
          >
            <div class="column is-12" v-html="content"></div>
          </div>
        </b-collapse>
        <b-collapse animation="slide" aria-id="contentIdForA11y3" :open="false">
          <template #trigger="">
            <div
              role="button"
              class="
                panel-heading
                columns
                is-variable is-mobile
                has-background-white
              "
              aria-controls="contentIdForA11y3"
            >
              <div class="column is-10 has-text-justified margin-title">
                <p class="has-text-info">Consultez la carte d’identité et l’influence des startups</p>
              </div>
            </div>
          </template>
          <div
            class="
              panel-block
              has-background-white
              columns
              is-multiline
              has-background-white
              is-centered
              has-text-justified
            "
          >
            <div class="column is-12" v-html="content"></div>
          </div>
        </b-collapse>
      </div>
    </section> 
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
