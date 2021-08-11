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
          <p class="subtitle is-6 mt-6">Entrez le domaine d'activité ou le pays de 
            votre choix dans la barre de recherche. ASI vous une liste de startups.<br />
            Ou entrez directement le nom de la startup.
          </p>
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
          <p class="title is-5 has-text-info my-4">Evaluer la ou les startup(s) de votre choix</p>
          <p class="subtitle is-6 my-5">Trouvez votre préférence en fonction des notes qui leur sont attribuées.</p>
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
                <p class="has-text-info">Les startups retrouvées sur ASI interviennent-elles dans des domaines spécifiques?</p>
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
              is-centered
              has-text-justified
            "
          >
            <div class="column is-12">
              Non, ASI n’est pas sélective en ce qui concerne le domaine d’activité des startups. 
              Quel que soit le domaine souhaité, ASI vous propose un large choix dans plusieurs pays d’Afrique.  
            </div>
          </div>
        </b-collapse>
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
                <p class="has-text-info">Quelle est la fiabilité des données trouvées sur ASI?</p>
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
            <div class="column is-12">
              Nos moteurs de collectes parcourent la toile à la recherche d’informations existantes sur les startups. 
              ASI collecte donc près de 90% de données grâce aux sites webs, aux réseaux sociaux, aux moteurs de recherches etc. 
              pouvant évaluer l’influence de nos Startups.

            </div>
          </div>
        </b-collapse>
        <!-- <b-collapse animation="slide" aria-id="contentIdForA11y3" :open="false">
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
        </b-collapse> -->
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
