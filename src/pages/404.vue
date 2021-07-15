<template>
  <Layout>
    <section class="section hero">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="has-text-centered">
              <h1>404 Non trouvé</h1>
              <div>
                Désolé, une erreur s'est produite, la page demandée n'a pas été
                trouvée !
              </div>
              <div class="error-actions">
                <g-link>Revenir à l'acceuil </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>



<script>
export default {
  metaInfo: {
    title: "404",
    meta: [
      {
        name: "404",
        content: "Désolé. Nous ne pouvons satisfaire a cette requete.",
      },
    ],
  },
};
</script>


<style scoped lang="scss">
@import "../variables.scss";

.hero {
  background-size: cover;
}

@media (max-width: 1023px) and (min-width: 769px) {
  .hero {
    min-height: 50em;
  }
}

@media only screen and (min-width: 1921px) {
  .center-over-1920 {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (min-width: 1024px) {
  #loading {
    margin-top: 8% !important;
  }
}

#loading {
  margin-left: auto;
  margin-right: auto;
}
</style>

