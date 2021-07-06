<template>
  <Layout>
    <section class="section has-text-centered is-paddingless">
      <h1 class="page-title has-text-primary">
        Banques & Institutions financières
      </h1>
      <br />
      <br />
      <div class="subtitle">
        Studely simplifie vos démarches pour l'obtention de votre Visa étudiant
        depuis votre pays d'origine.
      </div>
      <br />
      <br />
      <div
        class="columns is-vcentered is-mobile has-text-centered is-centered fond-avis"
      >
        <div class="column is-6-desktop is-8-tablet is-10-mobile is-mobile">
          <figure class="image is-16by9">
            <iframe
              class="has-ratio"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/UEnTDdzXogQ"
              title="video presentation"
              allowfullscreen
            ></iframe>
          </figure>
        </div>
      </div>
    </section>

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
            src="~/assets/partenaire-banque-portefeuille.svg"
            width="136"
            fit="inside"
          />
          <br />
          <br />
          <br />
          <br />
          <h3>
            <strong class="has-text-primary">
              Développement du
              <br />portefeuille clients
            </strong>
          </h3>
          <br />
          <span class="content-16">
            100 000 étudiants étrangers par
            <br />an en France.
          </span>
        </div>

        <div class="column is-4">
          <g-image
            src="~/assets/partenaire-banque-impact.svg"
            width="109"
            fit="inside"
          />
          <br />
          <br />
          <br />
          <br />
          <h3>
            <strong class="has-text-primary">Impact RSE</strong>
          </h3>
          <br />
          <span class="content-16">
            Nous facilitons l'intégration des
            <br />étudiants étrangers en France.
          </span>
        </div>

        <div class="column is-4">
          <g-image
            src="~/assets/partenaire-banque-visibilite.svg"
            width="134"
            fit="inside"
          />
          <br />
          <br />
          <br />
          <br />
          <h3>
            <strong class="has-text-primary">Fiabilité des dossiers</strong>
          </h3>
          <br />
          <span class="content-16">
            Validation des "KYC*" de chaque
            <br />étudiants par nos conseillers <br />locaux selon vos critères
            *connaissance client
          </span>
          <br />
          <br />
          <br />
          <em class="content-14">*connaissance client</em>
        </div>
      </div>
    </section>

    <section class="section container has-text-centered">
      <h2 class="has-text-primary">Nos partenaires</h2>
      <br />
      <br />
      <br />
      <div
        class="columns container is-vcentered is-centered is-mobile content-16"
      >
        <div class="column is-two-quarters">
          <div class="columns is-variable is-centered">
            <div class="column is-2">
              <figure class="image is-128x128 center-image">
                <g-image
                  src="~/assets/partenaire-assurance-mutuelle.svg"
                  width="300"
                  height="300"
                  fit="inside"
                />
              </figure>
            </div>
            <div class="column is-5 media-content">
              La SMERRA offre une gamme de services 360° pour répondre aux
              besoins des étudiants depuis 50 ans : remboursements des soins,
              assurances (voyage, santé et habitation), logement, prévention et
              loisirs.
              <br />Pour en savoir plus :
              <a href="https://smerra.fr/">https://smerra.fr/</a>
            </div>
          </div>
          <div class="columns is-variable is-centered">
            <div class="column is-2">
              <figure class="image is-128x128 center-image">
                <g-image
                  src="~/assets/partenaire-la-banque-postale.svg"
                  width="300"
                  height="300"
                  fit="inside"
                />
              </figure>
            </div>
            <div class="column is-5 media-content">
              Créée le 1er janvier 2006, La Banque Postale est une banque issue
              des services financiers du Groupe La Poste. Banque et Citoyenne,
              elle a développé une gamme de produits et services utiles, simples
              et transparents notamment pour les jeunes. Elle compte 3007
              salariés avec un chiffre d’affaires de 5,570 Md€ (2018).
              <br />Pour en savoir plus :
              <a hfref="https://www.labanquepostale.fr"
                >https://www.labanquepostale.fr</a
              >
            </div>
          </div>
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

<style scoped lang="scss">
.card {
  margin: 10px;
  border: 3px solid blue;
}

.center-image {
  margin: auto;
}
</style>

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
};
</script>
<style scoped lang="scss">
@import "../../variables.scss";

.fond-avis {
  background-image: url("./../../../static/partners/banque-institurions.svg");
  background-size: cover;
  background-position: center;
  height: 35em;
}

@media only screen and (min-width: 425px) and (max-width: 1920px) {
  .fond-avis {
    height: 45em;
  }
}

@media only screen and (max-width: 414px) {
  .fond-avis {
    height: auto;
  }
}
</style>