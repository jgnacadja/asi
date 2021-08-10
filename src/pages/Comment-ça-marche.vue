<template>
  <Layout>
    <section class="container mx-auto">
      <div class="has-text-centered mt-6">
        <p class="title is-1 has-text-info">Comment ça marche ?</p>
        <p class="subtitle is-6">African Startups Insights est une plateforme numérique spécialement <br/> dédiée aux entreprises africaines.</p>
      </div>

      <div class="columns my-6 mx-auto has-text-centered">
        <div class="column">
          <svg
            width="80" 
            height="80" 
            viewBox="0 0 125 125" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="62.5" 
              cy="62.5" 
              r="62.5" 
              fill="#FF9B26"
            />
          </svg>
          <p class="title is-5 has-text-info my-4">Recherchez votre domaine d’activité </p>
          <p class="subtitle is-6 mt-6">Entrez dans la barre le domaine d’activité ou le pays de votre choix. ASI vous présente une liste de startups. </p>
        </div>
        <div class="column">
          <svg
            width="80" 
            height="80" 
            viewBox="0 0 125 125" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="62.5" 
              cy="62.5" 
              r="62.5" 
              fill="#FF9B26"
            />
          </svg>
          <p class="title is-5 has-text-info my-4">Consultez la carte d’identité et l’influence des startups </p>
          <p class="subtitle is-6 my-5">Analysez les performances et l’influence des startups de votre choix auprès de leurs utilisateurs</p>
        </div>
        <div class="column">
          <svg
            width="80" 
            height="80" 
            viewBox="0 0 125 125" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="62.5" 
              cy="62.5" 
              r="62.5" 
              fill="#FF9B26"
            />
          </svg>
          <p class="title is-5 has-text-info my-4">Contactez la ou les startup(s) de votre choix</p>
          <p class="subtitle is-6 my-5">Retrouvez l’adresse et les contacts des  startups de votre choix et mettez vous en relation avec elles.</p>
        </div>
      </div>

      <div>
        <p class="title is-4 has-text-info">FAQs</p>

        <b-collapse animation="slide" aria-id="contentIdForA11y3" :open="false">
          <template #trigger="props">
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
