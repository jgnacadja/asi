<template>
  <Layout>
    <div class="container has-text-centered">
      <section class="section">
        <div class="container">
          <h1 class="title is-1">Titre de l'article</h1>
          <h2 class="subtitle is-2">Besoin d'un conseil?</h2>
          <h3
            class="subtitle is-3"
          >Le consulat de France au Cameroun exige de la part de tout étudiant demandant son visa étudiant long séjour un justificatif de ressources financières, appelé aussi une Attestation de Virement irrévocable (AVI ou compte bloqué).</h3>
        </div>
      </section>

      <section class="section">
        <h2 class="subtitle is-2">Les articles</h2>
        <div class="columns is-desktop is-vcentered">
          <div class="column is-4 is-offset-2">
            <h4 class="title is-4">Question?</h4>
            <g-link class="nav__link" to="/etudier-en-france/article">
              <g-image src="~/assets/gris.svg" width="200" height="200" fit="inside" />
            </g-link>
            <br />Le consulat de France au Cameroun exige de la part de tout étudiant demandant son visa étudiant long séjour
          </div>

          <div class="column is-4 is-offset-0">
            <h4 class="title is-4">Question?</h4>
            <g-image src="~/assets/gris.svg" width="200" height="200" fit="inside" />
            <br />Le consulat de France au Cameroun exige de la part de tout étudiant demandant son visa étudiant long séjour
          </div>
        </div>

        <div class="columns is-desktop is-vcentered">
          <div class="column is-4 is-offset-2">
            <h4 class="title is-4">Question?</h4>
            <g-image src="~/assets/gris.svg" width="200" height="200" fit="inside" />
            <br />Le consulat de France au Cameroun exige de la part de tout étudiant demandant son visa étudiant long séjour
          </div>

          <div class="column is-4 is-offset-0">
            <h4 class="title is-4">Question?</h4>
            <g-image src="~/assets/gris.svg" width="200" height="200" fit="inside" />
            <br />Le consulat de France au Cameroun exige de la part de tout étudiant demandant son visa étudiant long séjour
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <b-button>
            <a href="#">s'abonner</a>
          </b-button>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Nos conseils"
  }
};
</script>
