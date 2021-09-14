<template>
  <Layout>
    <section class="container mx-auto">
      <div class="has-text-centered my-6">
        <p class="title is-2 has-text-info has-text-weight-bold">Comment ça marche ?</p>
        <p class="subtitle is-6 mt-4">African Startups Insights est une plateforme numérique spécialement <br/> dédiée aux entreprises africaines.</p>
      </div>

      <div class="columns my-6 mx-auto is-align-content-center has-text-centered">
        <div class="column ">
          <g-image 
            class="image is-96x96 mx-auto"
            src="~/assets/search.png"
            alt=""
          >
          </g-image>
          <p class="title is-6 has-text-info mt-4 title1">Entrez le nom de la startup </p>
          <p class=" ">Renseigner dans la barre de recherche le nom 
            de votre startup ou trouvez-en une après avoir sélectionné votre domaine d'activité. 
          </p>
        </div>
        <div class="column">
          <g-image 
            src="~/assets/business.png"
            alt=""
            class="image is-96x96 mx-auto"
          >
          </g-image>
          <p class="title is-6 has-text-info mt-4 mb-2 title2">Accéder aux informations liées à la startup sélectionnée </p>
          <p class="">Analysez les performances et l’influence de la startup 
            auprès de ses utilisteurs.
          </p>
        </div>
        <div class="column">
          <g-image 
            src="~/assets/call.png"
            alt=""
            class="image is-96x96 mx-auto"
          >
          </g-image>
          <p class="title is-6 has-text-info mt-4 title3">Evaluer la startup sélectionnéé</p>
          <p class="">Donner votre avis sur la startup pour lui 
            permettre d'être plus en vue.
          </p>
        </div>
      </div>

      <div class="my-6">
        <p class="title is-2 has-text-weight-bold has-text-info pb-4 has-text-centered">FAQs</p>

        <b-collapse animation="slide" aria-id="contentIdForA11y3" :open="false" class="card column is-8-desktop column is-10-touch mx-auto mb-4">
          <template #trigger="props">
            <div
              role="button"
              class="
                faq1
                columns
                is-variable is-mobile is-vcentered 
              "        
              aria-controls="contentIdForA11y3"
            >
              <div class="column margin-title">
                <p class="has-text-info">Quelles sont les startups retrouvées sur ASI ?</p>
              </div>
              <div class="column is-1 is-variable is-mobbile">
                <button class="card-header-icon" aria-label="more options">
                  <span :class="{ rotate: props.open }" class="icon1">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
                <!-- <b-button type="is-white" class="is-pulled-right">
                  <figure class="image is-32x32">
                    <g-image
                      :class="{ rotate: props.open }"
                      alt="faq"
                      src="~/assets/faq/expend.svg"
                      height="20"
                    />
                  </figure>
                </b-button> -->
              </div>
            </div>
          </template>
          <div
            class="
              panel-block
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
        <b-collapse animation="slide" aria-id="contentIdForA11y3" :open="false" class="card column is-8-desktop column is-10-touch mx-auto">
          <template #trigger="props">
            <div
              role="button"
              class="
                faq2
                columns
                is-variable is-mobile is-vcentered 
              "
              aria-controls="contentIdForA11y3"
            >
              <div class="column has-text-justified margin-title">
                <p class="has-text-info">Quelle est la fiabilité des données trouvées sur ASI?</p>
              </div>
              <div class="column is-1">
                <button class="card-header-icon" aria-label="more options">
                  <span :class="{ rotate: props.open }" class="icon2">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
                <!-- <b-button type="is-white" class="is-pulled-right">
                  <figure class="image is-32x32">
                    <g-image
                      :class="{ rotate: props.open }"
                      alt="faq"
                      src="~/assets/faq/expend.svg"
                      height="20"
                    />
                  </figure>
                </b-button> -->
              </div>
            </div>
          </template>
          <div
            class="
              panel-block
              columns
              is-multiline
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
      </div>
    </section> 
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Comment ça marche ?",
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

<style scoped lang="scss">
@import "../variables.scss";

 @media (max-width: 600px){

  .icon1{
    position: absolute;
    margin-right: 40px;
  }

  .icon2{
    position: absolute;
    margin-right: 40px;
  }
 }

  @media (min-width: 769px){

  .title1{
    margin-bottom: 43px;
  }

   .title3{
    margin-bottom: 26px;
  }
 }

 @media (min-width: 801px){

  .title1{
    margin-bottom: 26px;
  }

   .title3{
    margin-bottom: 8px;
  }
 }

 @media (min-width: 826px){

  .title1{
    margin-bottom: 25px;
  }

   .title3{
    margin-bottom: 26px;
  }
 }

.rotate{
  transform: rotate(180deg);
}
</style>
