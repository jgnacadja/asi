<template>
  <Layout>
    <section class="section has-text-centered is-paddingless">
      <h1 class="page-title has-text-primary">Parents</h1>
      <br />
      <br />
      <div class="subtitle">
        Parce que son avenir est votre priorité, offrez-lui la possibilité de
        réussir son projet d’études en France.
      </div>
      <br />
      <br />
      <div
        class="columns is-vcentered is-mobile has-text-centered is-centered fond-avis"
      >
        <div class="column is-6-desktop is-8-tablet is-10-mobile is-mobile">
          <figure class="image is-16by9">
            <iframe
              title="studely"
              class="has-ratio"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/75BRir3-0Ho?list=PLTrXvI9HiU0GRnzCFlNNaxv21U5WcMj3C"
              allowfullscreen
            ></iframe>
          </figure>
        </div>
      </div>
    </section>
    <section class="section container has-text-centered">
      <div class="columns is-variable is-multiline">
        <div
          class="column parent-section is-paddingless is-carousel carousel-container is-half is-mobile container has-text-justified"
        >
          <b-carousel
            :arrow="arrow"
            :icon-pack="iconPack"
            :icon-size="iconSize"
            :arrow-hover="arrowHover"
          >
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <section :class="`hero is-medium`">
                <g-image :src="carousel.image" fit="inside" height="400" />
              </section>
            </b-carousel-item>
          </b-carousel>
        </div>
        <div
          class="column is-carousel is-half is-mobile has-text-justified is-bordered content-16 is-v-centered is-text-padding"
        >
          <div class="column is-12">
            <div class="column is-container section is-12">
              Un projet d'études, c'est un projet de vie ! Satisfaire les
              familles qui nous font confiance est notre plus grande réussite.
              C'est pour cela que Studely crée l'occasion pour vous rencontrer,
              vous, parents d'étudiants, pour discuter du projet d'études de
              votre enfant en France. Salons, journées portes ouvertes, sessions
              d'information spéciales Parents... sont des moments forts que nous
              partageons avec vous, pour offrir à votre enfant un accompagnement
              de qualité, une solution complète pour une meilleure intégration
              en France, un service basé sur l'écoute, le conseil et le suivi.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section container has-text-centered">
      <h2 class="has-text-primary">Ce que nous vous offrons :</h2>
      <br />
      <br />
      <div class="columns is-vcentered is-centered is-variable">
        <div class="column is-3">
          <g-image src="~/assets/parents/dossier.svg" width="80" fit="inside" />
          <br />
          <h3>
            <strong class="has-text-primary"
              >Une simplification des démarches administratives</strong
            >
          </h3>
        </div>
        <div class="column is-3">
          <g-image src="~/assets/parents/visa.svg" width="80" fit="inside" />
          <br />
          <h3>
            <strong class="has-text-primary"
              >Des documents fiables auprès du Consulat de France</strong
            >
          </h3>
        </div>
        <div class="column is-3">
          <g-image
            src="~/assets/parents/conseiller.svg"
            width="80"
            fit="inside"
          />
          <br />
          <h3>
            <strong class="has-text-primary">
              Un suivi tout au long de la première année d'études en France de
              votre enfant
            </strong>
          </h3>
        </div>
      </div>
    </section>

    <section class="section container has-text-centered">
      <h2>Une question?</h2>
      <br />
      <br />
      <div class="content-24">
        Échangez avec nos équipes lors des différents Salons et Journées Portes
        Ouvertes ou en passant dans
        <br />nos locaux : une occasion de répondre à toutes vos inquiétudes au
        sujet du séjour d'études de votre <br />enfant en France et de trouver
        ensemble les solutions qui vous conviennent !
      </div>
      <br />
      <br />
      <g-link to="/service-client/">
        <b-button type="is-primary" size="is-large">
          <strong>Contactez-nous</strong>
        </b-button>
      </g-link>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Parents : faites le choix de Studely pour votre enfant",
    meta: [
      {
        name: "description",
        content:
          "Votre enfant mérite le meilleur accompagnement dans ses démarches post admission pour étudier en France !",
      },
    ],
  },
  data() {
    return {
      arrow: false,
      iconPack: "fas",
      iconSize: "is-medium",
      arrowHover: false,
      carousels: [
        { text: "Slide 1", color: "primary", image: "/parents/1.jpg" },
        { text: "Slide 2", color: "info", image: "/parents/3.jpg" },
        { text: "Slide 3", color: "success", image: "/parents/2.jpg" },
        { text: "Slide 4", color: "warning", image: "/parents/4.jpg" },
        { text: "Slide 5", color: "danger", image: "/parents/5.jpg" },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";

.fond-avis {
  background-image: url("./../../static/parents/fond-parents.svg");
  background-size: cover;
  background-position: center;
  height: 35em;
}

.video {
  height: 640px;
  figure {
    height: 100%;
  }
}
.is-bordered {
  border-color: $blue-studely;
}

@media only screen and (min-width: 425px) and (max-width: 1920px) {
  .fond-avis {
    height: 45em;
  }
}

@media only screen and (max-width: 414px) {
  .is-padding {
    padding: 5% !important;
  }

  .fond-avis {
    height: auto;
  }
}

@media only screen and (min-width: 769px) {
  .carousel-container {
    padding: 0px !important;
  }

  .is-carousel {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  .is-container {
    line-height: 45px;
  }
}

@media only screen and (max-width: 768px) {
  .is-padding-bottom {
    padding: 10% !important;
  }
}
</style>
