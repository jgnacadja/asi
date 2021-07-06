<template>
  <Layout>
    <section class="section container has-text-centeredn is-paddingless">
      <h1 class="page-title has-text-primary">Nos écoles partenaires</h1>
      <br />
      <br />
      <div class="subtitle">
        Studely accompagne les étudiants internationaux admis dans les
        Établissements
        <br />d’enseignement supérieur en France pour l'obtention de leur Visa
        étudiant et leur <br />intégration via notre service Logement.
        <br />
        <br />
      </div>
      <div class="columns is-vcentered is-mobile has-text-centered is-centered">
        <div class="column is-two-thirds-desktop is-10-mobile is-mobile">
          <b-carousel
            :arrow="slide.arrow"
            :icon-pack="slide.iconPack"
            :icon-size="slide.iconSize"
            :pause-hover="slide.pauseHover"
            :autoplay="true"
            :arrow-hover="slide.arrowHover"
            :interval="3000"
            class="bcarousel"
          >
            <b-carousel-item v-for="(carousel, i) in slide.carousels" :key="i">
              <section class="hero is-white slide-item">
                <section class="section container" style="border: blue">
                  <div class="columns is-mobile is-centered">
                    <div class="column is-2-desktop is-5-mobile">
                      <figure class="image is-square">
                        <g-image :src="carousel.logo" fit="insisde" />
                      </figure>
                    </div>
                  </div>
                  <div class="columns is-mobile is-centered">
                    <div class="column is-5-desktop is-7-mobile">
                      <figure class="image is-4by3">
                        <g-image :src="carousel.image" width="150" />
                      </figure>
                    </div>
                  </div>
                  <div class="columns is-mobile is-centered">
                    <div
                      class="column is-two-quarters content-16 has-text-centered is-mobile"
                    >
                      {{ carousel.description }}
                    </div>
                  </div>
                </section>
              </section>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </section>

    <section
      class="section container has-text-centered"
      style="margin-top: 11rem"
    >
      <h2 class="has-text-primary">
        Ce que vous gagnez en tant que partenaire de Studely :
      </h2>
      <br />
      <br />
      <br />
      <div
        class="columns is-centered is-multiline is-variable is-5 has-text-centered"
      >
        <div class="column is-3">
          <g-image
            src="~/assets/partenaire-banque-portefeuille.svg"
            width="136"
            fit="inside"
          />
          <br />
          <br />

          <h3>
            <strong class="has-text-primary">
              Amélioration du taux
              <br />d'obtention des Visas de <br />vos étudiants
            </strong>
          </h3>
        </div>

        <div class="column is-3">
          <g-image
            src="~/assets/partenaires/4000_1.svg"
            width="109"
            fit="inside"
          />
          <br />
          <br />
          <h3>
            <strong class="has-text-primary">
              Facilitation de l'intégration
              <br />de vos étudiants étrangers <br />en France
            </strong>
          </h3>
        </div>

        <div class="column is-3">
          <g-image src="~/assets/residences.svg" width="134" fit="inside" />
          <br />
          <br />
          <h3>
            <strong class="has-text-primary">
              Accès privilégié à des
              <br />offres de logement <br />étudiant
            </strong>
          </h3>
        </div>

        <div class="column is-3">
          <g-image
            src="~/assets/partenaires/visible.png"
            width="134"
            fit="inside"
          />
          <br />
          <br />
          <h3>
            <strong class="has-text-primary">
              Visibilité de votre
              <br />École / Université
            </strong>
          </h3>
        </div>
      </div>
    </section>

    <section class="section container has-text-centered">
      <h2>Vous souhaitez rejoindre notre réseau de partenaires ....</h2>
      <br />
      <br />
      <div class="content-16">
        <b-button
          tag="a"
          href="mailto:partenariats@studely.com"
          type="is-primary"
          size="is-large"
        >
          <strong>Devenez partenaire de Studely</strong>
        </b-button>
      </div>
      <br />
      <br />
      <div class="content-16">
        <a href="/espace-documentaire">
          <u>Documentation</u>
        </a>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
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
      slide: {
        arrow: false,
        iconPack: "fas",
        iconSize: "is-large",
        pauseHover: false,
        arrowHover: false,
        carousels: [
          {
            logo: "/partner-ecoles/logo/leonardo.jpg",
            image: "/partner-ecoles/Untitled_(3).png",
            description:
              "Trois écoles à Paris-La Défense : école d’ingénieurs, école de management, école multimédia. Les enseignements pédagogiques sont transversaux et permettent aux étudiants de travailler en équipe sur divers projets. Selon le parcours choisi, le Pôle offre 3 possibilités de rentrée : en septembre, octobre ou février.",
          },
          {
            logo: "/partner-ecoles/logo/ESC_clermont.jpg",
            image: "/partner-ecoles/Untitled.png",
            description:
              "Ecole accréditée AACSB depuis 2005 et classée dans le Financial Times et QS Ranking. Elle est réputée par la qualité de son offre de formations (double-diplôme, échanges, langues, projets, savoir-faire) avec un suivi personnalisé. La rentrée se déroule entre septembre et octobre de chaque année.",
          },
          {
            logo: "/partner-ecoles/logo/excelia.jpg",
            image: "/partner-ecoles/Untitled_(1).png",
            description:
              "Groupe d'enseignement supérieur français comptant près de 3 600 étudiants et 16 000 diplômés. Il se compose de 5 écoles : La Rochelle Business School, La Rochelle Tourism & Hospitality School, La Rochelle Digital School, La Rochelle Academy et La Rochelle Exécutive Education.",
          },
          {
            logo: "/partner-ecoles/logo/FIGS.jpg",
            image: "/partner-ecoles/Untitled_(4).png",
            description:
              "FIGS rassemble 20 écoles proposant des programmes dispensés en français ou en anglais du BAC au BAC+5.  Ces écoles proposent des cursus professionnalisants, des diplômes de qualité, reconnus par l’État et une implantation sur 10 villes en France.",
          },

          {
            logo: "/partner-ecoles/logo/ieseg.jpg",
            image: "/partner-ecoles/IESEG.jpg",
            description:
              "Grande École à la triple accréditation EQUIS, AACSB, AMBA et top 10 des meilleures écoles de commerce françaises. La majorité des programmes proposés par l'IESEG sont 100% en anglais.La rentrée se passe en septembre pour la majorité des programmes avec une semaine d’orientation obligatoire, la dernière semaine du mois d’août.",
          },
        ],
      },
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../variables.scss";

.card {
  margin: 10px;
  border: 3px solid blue;
}

.bcarousel {
  border-color: $blue-studely !important;
  border: solid;
}
</style>