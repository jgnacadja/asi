<template>
  <Layout>
    <section class="section has-text-centered is-paddingless">
      <div class="columns is-multiline has-text-centered">
        <div class="column is-12">
          <div
            class="columns is-variable is-mobile is-centered has-text-centered"
          >
            <div class="column is-narrow">
              <figure class="image is6x96 is-header-picto">
                <g-image src="~/assets/bourse/picto_bourse.svg" fit="inside">
                </g-image>
              </figure>
            </div>
            <div class="column is-8">
              <h1 class="page-title has-text-primary">La bourse Studely</h1>
            </div>
            <div class="column is-narrow">
              <figure class="image is-96x96 is-header-picto">
                <g-image src="~/assets/bourse/picto_book.svg" fit="inside">
                </g-image>
              </figure>
            </div>
          </div>
        </div>
        <br />
        <div class="column is-8-desktop is-10-touch is-size-5-touch subtitle">
          Pour soutenir les étudiants en mobilité internationale dans leur
          projet d’études en France et leur faciliter l’accès à l’enseignement
          supérieur français, Studely met en place un programme de bourse pour
          financer une partie des frais de scolarité de leur première année
          d’études.
          <br /><br />
          <strong
            >Les candidatures sont ouvertes jusqu’au 30 avril 2021 !</strong
          >
        </div>
        <br />
        <div class="column is-12 content-16">
          <div
            class="columns is-vcentered is-variable is-mobile is-centered has-text-centered"
          >
            <div class="column is-narrow is-hidden-touch">
              <figure class="image is-96x96">
                <g-image src="~/assets/bourse/picto_visa.svg" fit="inside">
                </g-image>
              </figure>
            </div>
            <div class="column is-6">
              <b-button
                tag="a"
                title="bourse"
                href="https://espace.studely.com"
                size="is-medium"
                type="is-primary"
              >
                <strong>Je postule à la bourse</strong>
              </b-button>
            </div>
            <div class="column is-narrow is-hidden-touch">
              <figure class="image">
                <g-image src="~/assets/bourse/picto_tour.svg" fit="inside">
                </g-image>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div
        class="columns is-vcentered is multiline is-mobile has-text-centered is-centered fond-avis"
        style="width: 100%"
      >
        <div class="column is-6-desktop is-8-tablet is-10-mobile is-mobile">
          <figure class="image is-16by9">
            <iframe
              class="has-ratio"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/aMqxfhrFovA"
              allowfullscreen
            ></iframe>
          </figure>
        </div>
      </div>
    </section>

    <section class="section container has-text-centered is-paddingless mb-2">
      <div class="columns is-mobile is-marginless is-mobile">
        <div
          class="column is-3 is-offset-4"
          style="padding-bottom: 0em; margin-left: 26.5%"
        >
          <g-image
            class="ligne-1"
            src="~/assets/nos-services/compteBancaire/ligne1.svg"
            height="120"
          />
        </div>
      </div>

      <div class="columns is-variable is-centered">
        <div class="column is-half-desktop is-12-mobile">
          <div class="columns is-multiline is-mobile is-centered is-vcentered">
            <div
              class="column is-9 has-text-justified is-bordered rectangle-mini"
            >
              <div class="columns is-multiline">
                <div
                  class="column is-12 has-text-centered has-background-success has-text-white mb-4"
                >
                  <h2>Un futur projet d'études en France</h2>
                </div>

                <div class="column is-12 is-padding">
                  <span class="content-16">
                    Pour <strong>l’année 2021/2022</strong>, Studely offre à
                    <strong>30 étudiants candidats</strong> dans une
                    établissement d’enseignement supérieur français une
                    <strong>aide financière</strong> pour participer
                    partiellement aux frais de scolarité de leur
                    <strong>année d’études en France</strong>. <br /><br />Pour
                    sélectionner les 30 lauréats, un jury indépendant étudiera
                    la qualité des dossiers présentés, en prenant en compte
                    notamment des critères économiques et sociaux, la pertinence
                    du projet et la motivation de l’étudiant.<br /><br />
                    Attention, plus aucune demande de bourse ne sera traitée
                    après le 30 avril 2021 et seuls les dossiers complets seront
                    étudiés.
                    <br />
                    <br />
                  </span>
                </div>
              </div>
            </div>
            <div
              class="column is-6 is-offset-6-desktop is-mobile is-paddingless"
            >
              <g-image
                class="ligne-1"
                src="~/assets/nos-services/compteBancaire/ligne2.svg"
                height="240"
              />
            </div>
          </div>
        </div>
        <div class="column is-half-desktop is-12-mobile">
          <div class="columns is-multiline is-centered has-text-centered">
            <div class="column is-12">
              <h2 class="has-text-primary">Les critères d'éligibilité :</h2>
            </div>
            <div class="column is-12 mt-2 criteria is-hidden-mobile">
              <ul style="line-height: 2.25rem">
                <li
                  v-for="(c, index) in criteria"
                  :key="index"
                  class="columns is-variable is-mobile has-text-left"
                >
                  <b-icon
                    class="column is-1 is-paddingless mt-4"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-primary': true }"
                  ></b-icon>
                  <span class="column is-context is-size-5 is-paddingless">
                    {{ c.label }}</span
                  >
                </li>
              </ul>
            </div>
            <div class="column is-8 is-hidden-desktop is-hidden-tablet mb-2">
              <div class="columns is-variable is-mobile">
                <div v-for="index in [0, 1]" :key="index" class="column is-6">
                  <div
                    class="columns is-multiline is-mobile has-text-centered is-centered"
                  >
                    <div class="column is-narrow">
                      <figure class="image is-96x96">
                        <g-image :src="criteria[index].image" fit="inside" />
                      </figure>
                    </div>

                    <div class="column is-10">{{ criteria[index].label }}</div>
                  </div>
                </div>
              </div>
              <div class="columns is-variable is-mobile">
                <div v-for="index in [2, 3]" :key="index" class="column is-6">
                  <div
                    class="columns is-multiline is-mobile has-text-centered is-centered"
                  >
                    <div class="column is-narrow">
                      <figure class="image is-96x96">
                        <g-image :src="criteria[index].image" fit="inside" />
                      </figure>
                    </div>

                    <div class="column is-10">{{ criteria[index].label }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-variable is-mobile" style="margin-top: 1em">
              <div class="column"></div>
              <div
                class="column is-11 has-text-left is-offset-1-desktop content-16"
              >
                *Algérie, Bénin, Burkina Faso, Cameroun, Congo, Côte d’Ivoire,
                Gabon, Guinée, Mali, Maroc, RDC, Sénégal, Tchad, Togo, Tunisie.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-text-centered is-paddingless">
      <div class="columns has-text-centered mb-2">
        <div class="column is-12 content-16" style="margin-top: 1em">
          <b-button
            tag="a"
            href="https://espace.studely.com"
            size="is-large"
            type="is-primary"
          >
            <strong>Je postule à la bourse</strong>
          </b-button>
          <br /><br />
          <a href="/bourse/flyer.pdf" download target="_blank"
            >Je télécharge le flyer (.pdf)</a
          >
        </div>
      </div>

      <div class="columns is-mobile is-multiline">
        <div class="column is-12 is-hidden-mobile">
          <figure class="image">
            <g-image
              src="~/assets/bourse/calendrier_bourse_web.svg"
              fit="inside"
            >
            </g-image>
          </figure>
        </div>
        <div class="column is-12 is-hidden-desktop">
          <figure class="image">
            <g-image
              src="~/assets/bourse/calendrier_bourse_mobile.svg"
              fit="inside"
            >
            </g-image>
          </figure>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "La bourse Studely",
      meta: [
        {
          key: "description",
          name: "description",
          content: "Aide financière pour étudier en France",
        },
      ],
    };
  },
  data() {
    return {
      criteria: [
        {
          image: "/bourse/picto_18.svg",
          label:
            "Être agé d'au moins 18 ans et être titulaire d'un baccalauréat.",
        },
        {
          image: "/bourse/picto_fra.svg",
          label:
            "Être candidat/inscrit dans un établissement d'enseignement supérieur en France pour l'année 2021/2022.",
        },

        {
          image: "/bourse/picto_afrik.svg",
          label:
            "Être résidant dans un pays africain où Studely est implanté*.",
        },
        {
          image: "/bourse/picto_no.svg",
          label:
            "Ne pas bénéficier d'un autre programme de bourse sur l'année académique 2021/2022.",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
.fond-avis {
  background-image: url("./../../static/bourse/fond5.svg");
  background-size: cover;
  background-position: center;
  height: 35em;
}
.mb-2 {
  margin-bottom: 2em;
}
.criteria {
  padding-left: 2em !important;
  margin-top: 3em !important;
}
.is-bordered {
  border-color: $green-studely;
}

.padding {
  padding-bottom: unset !important;
}
section.container {
  margin: auto;
}
img.ligne-1 {
  grid-area: 6 / 3 / 8 / 5;
}
img.ligne-2 {
  grid-area: 8 / 5 / 10 / 6;
}
img.ligne-3 {
  grid-area: 10 / 7 / 11 / 8;
}

.is-padding {
  padding: 10% !important;
}

@media only screen and (min-width: 2560px) {
  .fond-avis {
    height: 60em;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1920px) {
  .fond-avis {
    height: 45em;
  }
}

@media only screen and (min-width: 425px) and (max-width: 768px) {
  .fond-avis {
    height: 40em;
  }
}

@media only screen and (max-width: 414px) {
  .is-header-picto {
    width: 40px;
    height: 40px;
  }
  .is-padding {
    padding: 5% !important;
  }

  .fond-avis {
    height: auto;
  }
}
</style>
