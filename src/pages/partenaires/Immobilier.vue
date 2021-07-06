<template>
  <Layout>
    <section class="section has-text-centeredn is-paddingless">
      <h1 class="page-title has-text-primary">Partenaires immobiliers</h1>
      <br />
      <br />
      <div class="subtitle">
        Studely : partenaire de confiance des acteurs immobiliers français !
      </div>
    </section>
    <!-- partneaire carrousel mini  -->
    <section class="section container has-text-centered">
      <br />
      <br />
      <Partner />
    </section>

    <!-- ce que vous gagnez  -->
    <section class="section container has-text-centered">
      <h2 class="has-text-primary">
        Ce que vous gagnez en tant que partenaire de Studely :
      </h2>
      <br />
      <br />
      <br />
      <div
        class="columns is-centered is-multiline is-variable is-5 has-text-centered"
      >
        <div class="column is-4">
          <g-image
            src="~/assets/partenaires/acces.svg"
            width="136"
            fit="inside"
          />
          <br />
          <br />
          <h3>
            <strong class="has-text-primary"
              >Accès à une clientèle de qualité</strong
            >
          </h3>
          <br />
          <span class="content-16"
            >Fiabilité des dossiers, validés par nos services et correspondants
            à vos critères</span
          >
        </div>

        <div class="column is-4">
          <g-image
            src="~/assets/partenaires/impaye.svg"
            width="109"
            fit="inside"
          />
          <br />
          <br />
          <br />
          <br />
          <h3>
            <strong class="has-text-primary"
              >Garantie contre les impayés</strong
            >
          </h3>
          <br />
          <span class="content-16"
            >En cas de défaut de paiement, Studely verse directement au bailleur
            la somme impayée</span
          >
        </div>

        <div class="column is-4">
          <g-image
            src="~/assets/partenaires/paie-rapide.svg"
            width="134"
            fit="inside"
          />
          <br />
          <br />
          <br />
          <h3>
            <strong class="has-text-primary">Facilité de paiement</strong>
          </h3>
          <br />

          <span class="content-16"
            >Studely sert d'intermédiaire pour le paiement rapide des frais de
            réservation</span
          >
        </div>
      </div>
    </section>

    <!-- international  -->
    <section class="section container has-text-centered">
      <h2 class="has-text-primary">
        Ce que nous offrons à l'étudiant international :
      </h2>
      <br />
      <br />
      <br />
      <div
        class="columns is-centered is-multiline is-variable is-5 has-text-centered is-hidden-touch"
      >
        <div class="column is-4">
          <h3>
            <strong class="has-text-primary">Recherche logement</strong>
          </h3>
          <br />
          <g-image
            src="~/assets/partenaires/recherche.jpg"
            width="136"
            fit="inside"
          />
          <br />
          <br />
          <span class="content-16"
            >Nous accompagnons les étudiants jusqu’à la signature du contrat de
            bail auprès de nos partenaires immobiliers</span
          >
        </div>

        <div class="column is-4">
          <h3>
            <strong class="has-text-primary">Garantie locative</strong>
          </h3>
          <br />
          <g-image
            src="~/assets/partenaires/garantie.jpg"
            width="150"
            fit="inside"
          />
          <br />
          <br />
          <span class="content-16"
            >Studely couvre les impayés de loyers et permet un remboursement
            immédiat</span
          >
        </div>

        <div class="column is-4">
          <h3>
            <strong class="has-text-primary">Assurance habitation</strong>
          </h3>
          <br />
          <g-image
            src="~/assets/partenaires/assurance.jpg"
            width="134"
            fit="inside"
          />
          <br />
          <br />
          <span class="content-16"
            >Studely permet à l'étudiant de bénéficier d'une attestation
            d'assurance avant l'entrée dans le logement</span
          >
        </div>
      </div>

      <div
        class="columns is-centered is-multiline is-variable is-5 has-text-centered is-hidden-desktop"
      >
        <b-carousel
          :arrow="arrow"
          :icon-pack="iconPack"
          :icon-size="iconSize"
          :pause-hover="pauseHover"
          :arrow-hover="arrowHover"
        >
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <div class="column is-4" style="padding-bottom: 2em !important">
              <h3>
                <strong class="has-text-primary">{{ carousel.title }}</strong>
              </h3>
              <br />
              <g-image :src="carousel.image" width="136" fit="inside" />
              <br />
              <br />
              <span class="content-16">{{ carousel.description }}</span>
            </div>
          </b-carousel-item>
        </b-carousel>
      </div>
    </section>
    <!-- rejoindre partner -->
    <section class="section container has-text-centered">
      <h2>Vous souhaitez rejoindre notre réseau de partenaires ....</h2>
      <br />
      <br />
      <div class="content-16">
        <b-button
          tag="a"
          href="mailto:partenariats@studely.com"
          type="is-primary"
          size="is-large-desktop"
        >
          <strong>Devenez partenaire de Studely</strong>
        </b-button>
      </div>
      <br />
      <br />
      <div class="content-16">
        <a href="#">
          <u>Documentation</u>
        </a>
      </div>
    </section>
  </Layout>
</template>

<script>
import Partner from "~/components/Partner.vue";
export default {
  components: {
    Partner,
  },
  metaInfo: {
    title: "Nos partenaires de confiance",
    meta: [
      {
        name: "description",
        content:
          "Participez à la concrétisation de milliers de projets d’étudiants internationaux",
      },
    ],
  },
  data() {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
      arrow: true,
      iconPack: "fas",
      iconSize: "is-large",
      pauseHover: false,
      arrowHover: false,
      carousels: [
        {
          title: "Recherche logement",
          image: "/partenaires/recherche.jpg",
          description:
            "Nous accompagnons les étudiants jusqu’à la signature du contrat de bail auprès de nos partenaires immobiliers",
        },
        {
          title: "Garantie locative",
          image: "/partenaires/garantie.jpg",
          description:
            "Studely couvre les impayés de loyers et permet un remboursement immédiat",
        },
        {
          title: "Assurance habitation",
          image: "/partenaires/assurance.jpg",
          description:
            "Studely permet à l'étudiant de bénéficier d'une attestation d'assurance avant l'entrée dans le logement",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../variables.scss";
</style>
