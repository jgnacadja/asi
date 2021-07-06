<template>
  <Layout>
    <section class="section has-text-centered is-paddingless">
      <h1 class="page-title has-text-primary">Mon prêt étudiant</h1>
      <br />
      <br />
      <div
        class="subtitle is-subtitle has-text-weight-semibold is-size-6-mobile"
      >
        Parce que chaque projet d'études est unique, Studely et son partenaire
        bancaire NYESIGISO mobilisent leur expertise pour vous proposer des
        solutions de financement sur mesure en 48H
      </div>

      <br />
      <div class="subtitle is-subtitle is-size-6 has-text-weight-semibold">
        *Taux d'intéret mensuel
      </div>
      <br />
      <br />
      <div class="subtitle is-subtitle is-size-6 has-text-weight-semibold">
        <b-button
          tag="a"
          class="button is-large is-danger"
          href="https://espace.studely.com"
        >
          <strong>Je contacte mon conseiller</strong>
        </b-button>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div
        class="columns is-vcentered is-centered is-multiline has-text-centered"
      >
        <div class="column is-12">
          <b-carousel
            :indicator="indicator"
            :arrow="arrow"
            :arrow-both="arrowBoth"
            :arrow-hover="arrowHover"
            :icon-pack="iconPack"
            :icon-prev="iconPrev"
            :icon-next="iconNext"
            :icon-size="iconSize"
            :autoplay="false"
            :interval="10000"
            :pause-hover="false"
          >
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <section
                :class="`hero is-medium diapo has-text-white is-banner-etudiant`"
                :style="{ backgroundImage: `url('${carousel.image}')` }"
              >
                <div class="hero-body has-text-left">
                  <div class="columns is-multiline has-text-left is-desc">
                    <div class="column is-8 is-offset-1">
                      <h1 class="title has-text-white">{{ carousel.title }}</h1>
                    </div>
                    <br />
                    <div
                      class="column is-offset-1 is-4-desktop is-12-mobile content-24 content-16 is-bg-desc is-size-3-desktop has-text-weight-medium is-size-6-mobile"
                    >
                      {{ carousel.description }}
                    </div>
                    <div
                      class="column is-offset-1 is-4-desktop is-12-mobile content-24 content-16 is-size-3-desktop has-text-weight-medium is-hidden-touch"
                    >
                      <figure class="image" style="margin-top: -5em">
                        <g-image class="" :src="carousel.stepImage"></g-image>
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="is-banner-info has-text-right is-size-7-mobile">
                  {{ carousel.info }}
                </div>
              </section>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </section>

    <section class="section container has-text-centered is-eligibility">
      <!-- Avis Studely -->

      <div class="columns is-variable is-8 is-multiline is-centered">
        <div class="column">
          <div class="is-eligibility-title has-background-primary">
            <h1 class="has-text-white is-size-4-desktop is-size-6-mobile">
              Les critères d'éligibilité
            </h1>
          </div>

          <div
            class="column section is-padding is-two-third-desktop is-two-third-tablet is-10-mobile has-text-justified is-bordered container is-eligibility-check"
            style="padding-left: 50px; padding-right: 50px; padding-top: 50px"
          >
            <ul
              class="section content-14 has-text-weight-semibold"
              style="line-height: 1.7em; list-style: disc"
            >
              <li>
                Ouvrir un compte ou alors possède déjà au moins un compte dans
                les livres de NYESIGISO.
              </li>
              <br />
              <li>
                Avoir des documents qui justifient de votre admission dans une
                université ou école en France et de vos justificatifs de revenue
                comme garant du crédit.
              </li>
              <br />
              <li>
                Justifier d'un apport personnel minimum de 20% du montant
                relatif à la caution bancaire pour études, logé dans un compte à
                NYESIGISO.
              </li>
            </ul>

            <p class="content-14 has-text-centered is-notice">
              Ces critères peuvent varier en fonction de la catégorie
              socioprofessionnelle du garant du demandeur
            </p>
          </div>
        </div>

        <div
          class="column is-two-third-desktop is-two-third-tablet is-10-mobile container is-centered"
        >
          <div
            class="columns is-multiline is-variable is-8 is-mobile is-centered has-text-centered"
          >
            <div class="column is-12">
              <h2
                class="has-text-primary is-size-6 is-red-studely is-hidden-desktop"
              >
                Le prêt étudiant avec Studely, c'est :
              </h2>
              <h2 class="has-text-primary is-red-studely is-hidden-touch">
                Le prêt étudiant avec<br />
                Studely, c'est :
              </h2>
            </div>
            <div class="columns is-12 is-mobile">
              <div class="column is-5-desktop is-6-mobile is-offset-2-desktop">
                <g-image
                  src="~/assets/nos-services/pretetudiant/step1.png"
                  width="120"
                  fit="inside"
                />
                <br />
                <span class="content-16"
                  >Jusqu'a 80% du montant minimum de la caution bancaire</span
                >
              </div>

              <div
                class="column is-5-desktop is-6-mobile is-offset-2-desktop is-hidden-desktop"
              >
                <g-image
                  src="~/assets/nos-services/pretetudiant/step2.png"
                  width="120"
                  fit="inside"
                />
                <br />
                <span class="content-16"
                  >Economique avec un taux* exceptionnel</span
                >
              </div>
            </div>
            <div class="column is-12 remove-margin-top is-hidden-touch">
              <div class="column is-5 is-pulled-right">
                <g-image
                  src="~/assets/nos-services/pretetudiant/step2.png"
                  width="120"
                  fit="inside"
                />
                <br />
                <span class="content-16"
                  >Economique avec un taux* exceptionnel</span
                >
              </div>
            </div>
            <div class="column is-12 remove-margin-top is-center-mobile">
              <div class="column is-5 is-offset-2-desktop">
                <g-image
                  src="~/assets/nos-services/pretetudiant/step3.png"
                  width="120"
                  fit="inside"
                />
                <br />
                <span class="content-16">Disponible en 48H</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section has-background-primary is-paddingless is-marginless"
    >
      <h1 class="page-title section has-text-white">Comment ça marche</h1>

      <div class="section columns has-text-centered is-hidden-touch">
        <div class="column ispaddingless is-up">
          <p
            class="has-text-weight-semibold has-text-white is-size-5-desktop is-size-7-mobile"
          >
            Demande de financement
          </p>
          <g-image
            src="~/assets/nos-services/pretetudiant/demande.png"
            width="120"
            fit="inside"
          />
        </div>

        <div class="column ispaddingless is-arrow is-hidden-touch">
          <g-image
            src="~/assets/nos-services/pretetudiant/1.png"
            width="120"
            fit="inside"
          />
        </div>

        <div class="column ispaddingless">
          <p
            class="has-text-weight-semibold has-text-white is-size-5-desktop is-size-7-mobile is-down"
          >
            Dépot de dossier
          </p>
          <g-image
            src="~/assets/nos-services/pretetudiant/depot.png"
            width="120"
            fit="inside"
          />
        </div>

        <div class="column ispaddingless is-arrow-2 is-hidden-touch">
          <g-image
            src="~/assets/nos-services/pretetudiant/2.png"
            width="120"
            fit="inside"
          />
        </div>

        <div class="column ispaddingless">
          <p
            class="has-text-weight-semibold has-text-white is-size-5-desktop is-size-7-mobile is-up-2"
          >
            Traitement
          </p>
          <g-image
            src="~/assets/nos-services/pretetudiant/traitement.png"
            width="120"
            fit="inside"
          />
        </div>

        <div class="column ispaddingless is-arrow-3 is-hidden-touch">
          <g-image
            src="~/assets/nos-services/pretetudiant/3.png"
            width="120"
            fit="inside"
          />
        </div>

        <div class="column ispaddingless">
          <p
            class="has-text-weight-semibold has-text-white is-size-5-desktop is-size-7-mobile is-down-2"
          >
            Acceptation du prêt
          </p>
          <g-image
            src="~/assets/nos-services/pretetudiant/acceptation.png"
            width="120"
            fit="inside"
          />
        </div>

        <div class="column ispaddingless is-arrow-4 is-hidden-touch">
          <g-image
            src="~/assets/nos-services/pretetudiant/4.png"
            width="120"
            fit="inside"
          />
        </div>

        <div class="column ispaddingless">
          <p
            class="has-text-weight-semibold has-text-white is-size-5-desktop is-size-7-mobile is-up"
          >
            Délivrance de l'AVI
          </p>
          <g-image
            src="~/assets/nos-services/pretetudiant/delivrance.png"
            width="120"
            fit="inside"
          />
        </div>
      </div>

      <div class="section column has-text-centered is-hidden-desktop">
        <div class="columns is-mobile ml-2 mr-2">
          <div class="column is-4 ispaddingless">
            <g-image
              src="~/assets/nos-services/pretetudiant/demande.png"
              width="120"
              fit="inside"
            />
            <p
              class="has-text-weight-semibold has-text-white is-size-5-desktop is-size-7-mobile"
            >
              Demande de financement
            </p>
          </div>

          <div class="column is-4 ispaddingless is-arrow-mobile">
            <g-image
              src="~/assets/nos-services/pretetudiant/mobile_1.png"
              width="120"
              fit="inside"
            />
          </div>

          <div class="column is-4 ispaddingless">
            <g-image
              src="~/assets/nos-services/pretetudiant/depot.png"
              width="120"
              fit="inside"
            />
            <p
              class="has-text-weight-semibold has-text-white is-size-5-desktop is-size-7-mobile"
            >
              Dépot de dossier
            </p>
          </div>
        </div>

        <div class="columns is-mobile mt-4 ml-2 mr-2">
          <div class="column is-4 ispaddingless">
            <g-image
              src="~/assets/nos-services/pretetudiant/traitement.png"
              width="120"
              fit="inside"
            />
            <p
              class="has-text-weight-semibold has-text-white is-size-5-desktop is-size-7-mobile"
            >
              Traitement
            </p>
          </div>

          <div class="column is-4 ispaddingless is-arrow-mobile">
            <g-image
              src="~/assets/nos-services/pretetudiant/mobile_2.png"
              width="120"
              fit="inside"
            />
          </div>

          <div class="column is-4 ispaddingless">
            <g-image
              src="~/assets/nos-services/pretetudiant/acceptation.png"
              width="120"
              fit="inside"
            />
            <p
              class="has-text-weight-semibold has-text-white is-size-5-desktop is-size-7-mobile"
            >
              Acceptation du prêt
            </p>
          </div>
        </div>

        <div class="columns is-mobile mt-4 is-centered mb-5 ml-2 mr-2">
          <div class="column is-4 ispaddingless">
            <g-image
              src="~/assets/nos-services/pretetudiant/delivrance.png"
              width="120"
              fit="inside"
            />
            <p
              class="has-text-weight-semibold has-text-white is-size-5-desktop is-size-7-mobile"
            >
              Délivrance de l'AVI
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-text-centered">
      <a href="#" download target="_blank"
        >Je télécharge l’infographie (.pdf)</a
      >
      <br />
      <br />
      <h3 class="has-text-weight-semibold">
        Besoin de plus de plus de précisions <br />
        sur le prêt étudiant de Studely ?
      </h3>
      <br />
      <br />
      <div class="subtitle is-subtitle is-size-6 has-text-weight-semibold">
        <b-button
          tag="a"
          class="is-button-color"
          href="https://espace.studely.com"
          type="is-success"
          size="is-medium"
        >
          <strong>Je contacte mon conseiller</strong>
        </b-button>
      </div>

      <div class="">
        <br />
        <br />
        <h5>En partenariat avec :</h5>
        <g-image
          src="~/assets/nos-services/pretetudiant/partner.png"
          width="120"
          fit="inside"
        />
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Ma caution bancaire pour Visa étudiant",
    meta: [
      {
        name: "description",
        content:
          "Bénéficiez d’une attestation de compte bloqué fiable, sécurisée, délivrée rapidement et économique pour votre Visa étudiant",
      },
    ],
  },
  data() {
    return {
      //Main carrousel
      arrow: false,
      arrowBoth: true,
      arrowHover: false,
      iconPack: "mdi",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      iconSize: "is-medium",
      indicator: false,
      carousels: [
        {
          title: "Mon financement :",
          image: "/service/pretetudiant/banner-bg-studely.jpg",
          stepImage: "/service/pretetudiant/banner-image.png",
          description:
            "Bénériciez d'un crédit pour les études de vos enfants en France à 1,25%*",
          info: "*Taux d'intérêt mensuel",
        },
        {
          title: "Mon financement :",
          image: "/service/pretetudiant/banner-bg-studely.jpg",
          stepImage: "/service/pretetudiant/banner-image.png",
          description:
            "Bénériciez d'un crédit pour les études de vos enfants en France à 1,25%*",
          info: "*Taux d'intérêt mensuel",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../variables.scss";

.is-arrow {
  margin-left: -3em;
  margin-right: -6em;
}

.is-arrow-2 {
  margin-left: -6em;
  margin-right: -8em;
}

.is-arrow-3 {
  margin-left: -8em;
  margin-right: -5em;
}

.is-arrow-4 {
  margin-left: -4em;
  margin-right: -6em;
  margin-top: 2.5em;
}

.ispaddingless {
  padding: 0 !important;
}

.is-up {
  margin-top: -0.5em;
}

.is-up-2 {
  margin-top: -0.5em;
}

.is-down {
  margin-top: 4.5em;
}

.is-down-2 {
  margin-top: 7em;
}

.is-eligibility-check {
  li::marker {
    color: $red-studely;
    font-size: 1.8em;
  }
  li {
    padding-left: 1em;
  }
  ul {
    margin-left: 2em;
    margin-right: 2em;
  }
}

.is-danger {
  background-color: $red-studely;
  color: $white-studely;
}
.is-notice {
  margin-top: -1em;
  margin-bottom: 1em;
}

.is-eligibility {
  margin-top: 2em !important;
}

.remove-margin-top {
  margin-top: -2.5em;
}

.is-eligibility-title {
  padding-top: 1em;
  padding-bottom: 1em;
}

.is-red-studely {
  color: $red-studely !important;
}

.is-desc {
  margin-top: 12em;
}

.is-banner-info {
  margin-bottom: 3em;
  margin-right: 3em;
}

.is-banner-etudiant {
  background-size: cover;
  background-repeat: no-repeat;
  height: 50em;
}

.is-subtitle {
  margin-left: 15%;
  margin-right: 15%;
}

.is-button-color {
  background-color: $red-studely;

  strong {
    color: white;
  }
}

.is-button-color:hover {
  background-color: $red-studely;

  strong:hover {
    color: white;
  }
}
.is-bordered {
  border-color: $blue-studely;
}

.padding {
  padding-bottom: unset !important;
}
section.container {
  margin: auto;
}

.is-padding {
  padding: 2% !important;
}
.is-arrow {
  margin-left: -3em;
  margin-right: -6em;
}

.is-arrow-2 {
  margin-left: -6em;
  margin-right: -8em;
}

.is-arrow-3 {
  margin-left: -8em;
  margin-right: -5em;
}

.is-arrow-4 {
  margin-left: -4em;
  margin-right: -6em;
  margin-top: 2.5em;
}

.ispaddingless {
  padding: 0 !important;
}

.is-up {
  margin-top: -0.5em;
}

.is-up-2 {
  margin-top: -0.5em;
}

.is-down {
  margin-top: 4.5em;
}

.is-down-2 {
  margin-top: 7em;
}

@media only screen and (min-width: 1024px) and (max-width: 1024px) {
  .is-arrow {
    margin-left: -3em;
    margin-right: -2em;
  }

  .is-arrow-2 {
    margin-left: -3em;
    margin-right: -4em;
  }

  .is-arrow-3 {
    margin-left: -2em;
    margin-right: -3em;
  }

  .is-arrow-4 {
    margin-left: -2em;
    margin-right: -3em;
    margin-top: 2.5em;
  }

  .ispaddingless {
    padding: 0 !important;
  }

  .is-up {
    margin-top: -0.5em;
  }

  .is-up-2 {
    margin-top: -0.5em;
  }

  .is-down {
    margin-top: 4.5em;
  }

  .is-down-2 {
    margin-top: 7em;
  }
}

@media only screen and (min-width: 425px) and (max-width: 768px) {
  .fond-avis {
    height: 40em;
  }

  .is-bg-desc {
    margin-top: -2em;
  }

  .is-banner-info {
    margin-top: -6em;
    margin-bottom: 4em;
    margin-right: 1em;
    text-align: center !important;
  }

  .is-desc {
    text-align: center !important;
    margin-top: 0em;
  }

  .is-banner-etudiant {
    background-size: cover;
    background-repeat: no-repeat;
    height: 15em;
  }

  .is-subtitle {
    padding-left: 5% !important;
    padding-right: 5% !important;
    margin: 0 !important;
  }

  .is-eligibility-check {
    li::marker {
      color: $red-studely;
      font-size: 1.8em;
    }
    li {
      padding-left: 0em;
    }
    ul {
      margin-left: 0em;
      margin-right: 0em;
    }
    margin-left: 0em;
    margin-right: 0em;
    width: 100%;
  }

  .is-arrow-mobile {
    margin-top: 2em;
  }
}

@media only screen and (max-width: 414px) {
  .is-arrow-mobile {
    margin-top: 2em;
  }

  .is-center-mobile {
    text-align: center;
  }

  .is-eligibility-check {
    li::marker {
      color: $red-studely;
      font-size: 1.8em;
    }
    li {
      padding-left: 0em;
    }
    ul {
      margin-left: 0em;
      margin-right: 0em;
    }
    margin-left: 0em;
    margin-right: 0em;
    width: 100%;
  }

  .is-bg-desc {
    margin-top: -2em;
  }

  .is-banner-info {
    margin-top: -6em;
    margin-bottom: 4em;
    margin-right: 1em;
    text-align: center !important;
  }

  .is-desc {
    text-align: center !important;
    margin-top: 0em;
  }

  .is-banner-etudiant {
    background-size: cover;
    background-repeat: no-repeat;
    height: 15em;
  }

  .is-subtitle {
    padding-left: 5% !important;
    padding-right: 5% !important;
    margin: 0 !important;
  }

  .is-padding {
    padding: 5% !important;
  }

  .fond-avis {
    height: auto;
  }
}
</style>
