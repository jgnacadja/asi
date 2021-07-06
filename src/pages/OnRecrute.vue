<template>
  <Layout>
    <section class="section has-text-centered is-paddingless">
      <h1 class="page-title has-text-primary">Rejoignez-nous</h1>
      <br />
      <br />
      <div class="subtitle">
        Comme nous, vous aimez l’audace, les idées originales, l’innovation ?
        <br />Vous souhaitez gagner en compétences dans une entreprise
        internationale en pleine croissance ? <br />Alors, ne perdez pas une
        minute pour nous rejoindre et postulez dès maintenant !
      </div>
      <br />
      <br />
      <div
        class="columns is-multiline is-mobile has-text-centered is-centered is-vcentered"
      >
        <div class="column is-5-desktop is-12-mobile">
          <figure class="image is-16by9">
            <iframe
              title="presentation"
              class="has-ratio"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/1gylPOVjPhc"
              allowfullscreen
            ></iframe>
          </figure>
        </div>
        <div class="column is-1-desktop is-hidden-mobile"></div>
        <div
          class="column is-3-desktop is-10-mobile content-16 has-text-justified is-bordered"
          style="padding: 2em !important"
        >
          Le Groupe Studely place l’humain et la formation au centre de ses
          préoccupations et apporte une attention particulière à la carrière de
          ses collaborateurs. Entreprise jeune, dynamique et multiculturelle,
          Studely vous offre la possibilité de mettre en lumière vos
          compétences, vos idées et votre savoir-faire dans environnement
          stimulant et en constante évolution.
        </div>
      </div>
    </section>
    <br />
    <br />

    <section class="section has-text-centered is-paddingless">
      <strong class="title has-text-primary"
        >Les 5 bonnes raisons de rejoindre Studely</strong
      >
      <br />
      <br />
      <br />
      <br />
      <div
        class="columns is-paddingless is-mobile is-vcentered is-gapless is-hidden-mobile"
      >
        <div
          class="column is-paddingless is-vcentered"
          v-for="(c, i) in carousels"
          :key="i"
        >
          <div class="grid cs-style-3 is-paddingless">
            <figure>
              <g-image :src="c.image" />
              <figcaption :class="c.hover">
                <br />
                <div
                  class="tile content figcaption-description is-size-6-mobile is-size-3-desktop is-align-items-center"
                >
                  {{ c.title }}
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="is-hidden-tablet">
        <b-carousel
          :arrow="arrow"
          :arrow-both="arrowBoth"
          :arrow-hover="arrowHover"
          :icon-pack="iconPack"
          :icon-size="iconSize"
          :autoplay="true"
          :interval="10000"
          :pause-hover="false"
        >
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section
              :class="`hero is-medium diapo has-text-white `"
              :style="{ backgroundImage: `url('${carousel.imagebg}')` }"
            >
              <div class="hero-body has-text-left">
                <div class="columns is-multiline has-text-left">
                  <div class="column is-8 is-offset-1">
                    <h2 class="title has-text-white">{{ carousel.title }}</h2>
                  </div>
                </div>
              </div>
            </section>
          </b-carousel-item>
        </b-carousel>
      </div>
    </section>

    <section class="section container content-16">
      <div
        class="columns is-multiline is-vcentered is-centered has-text-centered"
      >
        <div class="column is-8">
          <strong>
            Vous souhaitez faire partie de l’aventure Studely et contribuer à la
            réussite de milliers de projets d’étudiants ?
          </strong>
        </div>
        <div class="column is-8">
          <strong>Rejoignez-nous !</strong>
        </div>
        <div class="column is-8">
          Envoyez-nous votre candidature spontanée ou répondez directement à nos
          offres d’emploi à l’adresse suivante :
          <a href="mailto:recrutement@studely.com">recrutement@studely.com</a>,
          en joignant :
          <br />
          <br />
        </div>
        <div class="column is-5 is-offset-3">
          <ul
            class="has-text-left"
            style="list-style: outside; padding-left: 1em"
          >
            <li>Un curriculum Vitae</li>

            <li>Une lettre de motivation</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section has-text-centered content-16">
      <strong class="title has-text-primary">Les offres du moment :</strong>
      <br />
      <br />
    </section>

    <section
      v-for="edge in $page.allOffres.edges"
      :key="edge.node.id"
      class="section is-section has-text-centered content-16"
    >
      <div class="columns is-multiline is-centered is-vcentered">
        <div class="column is-6-desktop is-12-mobile has-text-left">
          <b-collapse
            aria-id="contentIdForA11y2"
            class="panel"
            animation="slide"
            :open="false"
          >
            <div
              slot="trigger"
              class="panel-heading columns is-variable is-mobile has-background-white"
              role="button"
              aria-controls="contentIdForA11y2"
            >
              <div class="column is-8">
                <strong>{{ edge.node.title }}</strong>
                <br />
                <br />
                <span class="has-text-grey">{{ edge.node.summary }}</span>
              </div>
              <div class="column is-4">
                <b-button type="is-primary" class="is-pulled-right"
                  >Voir l'offre</b-button
                >
              </div>
            </div>

            <div
              class="panel-block has-background-white columns is-multiline has-background-white is-centered content-recruit is-hidden-tablet"
            >
              <div class="column is-12 container">
                <p class="recruit-content has-text-justified">
                  <vue-markdown class="content">{{
                    edge.node.content
                  }}</vue-markdown>
                </p>
              </div>
            </div>
            <div
              class="panel-block has-background-white columns is-multiline has-background-white is-centered content-recruit is-hidden-mobile"
            >
              <div class="column is-12 container">
                <div class="recruit-content has-text-justified">
                  <vue-markdown class="content">{{
                    edge.node.content
                  }}</vue-markdown>
                </div>
              </div>
            </div>
            <div
              class="panel-block has-background-white columns has-text-centered is-centered"
            >
              <div class="column is-2">
                <a href="mailto:recrutement@studely.com">
                  <b-button type="is-danger" class="is-centered"
                    >Je postule</b-button
                  >
                </a>
              </div>
            </div>
          </b-collapse>
        </div>
        <br />
        <br />
      </div>
    </section>

    <br />
    <br />
    <br />
  </Layout>
</template>

<page-query>
query {
  allOffres {
    edges {
      node {
        title
        summary
        content
      }
    }
  }
}
</page-query>

<script>
import VueMarkdown from "vue-markdown";
export default {
  components: {
    VueMarkdown,
  },
  metaInfo: {
    title: "Carrières",
    meta: [
      {
        name: "description",
        content:
          "Rejoignez une équipe innovante, multiculturelle et passionnée !",
      },
    ],
  },
  data() {
    return {
      carousel: 0,
      animated: "fade",
      drag: true,
      autoPlay: true,
      arrow: false,
      arrowHover: false,
      pauseHover: false,
      pauseInfo: false,
      repeat: false,
      iconPack: "fas",
      iconSize: "is-medium",
      pauseType: "is-primary",
      interval: 3000,
      carousels: [
        {
          title:
            "Intégrer une équipe jeune, ambitieuse, multiculturelle et passionnée",
          image: "/carrer-carroussel/1.jpg",
          imagebg: "/carrer-carroussel/1m.jpg",
          hover: "figcaption-blue",
        },
        {
          title: "Enrichir ses compétences et développer son potentiel",
          image: "/carrer-carroussel/2.jpg",
          imagebg: "/carrer-carroussel/2m.jpg",
          hover: "figcaption-green",
        },
        {
          title: "Collaborer sur des projets transverses à l’international",
          image: "/carrer-carroussel/3.jpg",
          imagebg: "/carrer-carroussel/3m.jpg",
          hover: "figcaption-red",
        },
        {
          title:
            "Participer à la réussite des projets d’études de jeunes étudiants internationaux.",
          image: "/carrer-carroussel/4.jpg",
          imagebg: "/carrer-carroussel/4m.jpg",
          hover: "figcaption-blue",
        },
        {
          title:
            "Faire partie d’un groupe innovant présent dans 15 pays à vocation internationale.",
          image: "/carrer-carroussel/5.jpg",
          imagebg: "/carrer-carroussel/5m.jpg",
          hover: "figcaption-green",
        },
      ],
    };
  },
  methods: {
    info(value) {
      this.carousel = value;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";

.is-bordered {
  border-color: $blue-studely;
}

.diapo {
  min-height: 50em;
  background-size: cover;
  background-repeat: no-repeat;
}

.recruit-content {
  padding: 0px 30px 0px 30px;
}

.content-recruit {
  line-height: 25px;
}

.noOfferAvailable {
  color: #a2a6a6;
}

.is-section {
  padding: 1.5rem 1.5rem !important;
}

.is-fullwidth {
  width: 100%;
}

.figcaption-blue {
  background-color: $blue-studely;
}

.figcaption-red {
  background-color: $red-studely;
}

.figcaption-green {
  background-color: $green-studely;
}

.figcaption-description {
  align-items: center;
  height: 100%;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: -2rem;
}

.grid figcaption {
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  opacity: 0.8 !important;
}

.image {
  z-index: -1;
}

.text-size-mobile {
  padding: 1em;
}

.grid {
  padding: 20px 20px 100px 20px;
  max-width: 1300px;
  margin: 0 auto;
  list-style: none;
  text-align: center;
}

.grid figure {
  margin: 0;
  position: relative;
}

.grid figure img {
  width: 100%;
  max-width: 100%;
  display: block;
  position: relative;
}

/* Individual Caption Styles */

/* Caption Style 3 */
.cs-style-3 figure {
  overflow: hidden;
}

.cs-style-3 figcaption {
  height: 100%;
  width: 100%;
  top: auto;
  bottom: 0;
  opacity: 0;
  -webkit-transform: translateY(100%);
  -moz-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: -webkit-transform 0.4s, opacity 0.1s 0.3s;
  -moz-transition: -moz-transform 0.4s, opacity 0.1s 0.3s;
  transition: transform 0.4s, opacity 0.1s 0.3s;
}

.cs-style-3 figure:hover figcaption,
.cs-style-3 figure.cs-hover figcaption {
  opacity: 1;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition: -webkit-transform 0.4s, opacity 0.1s;
  -moz-transition: -moz-transform 0.4s, opacity 0.1s;
  transition: transform 0.4s, opacity 0.1s;
}

.cs-style-3 figcaption a {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

@media only screen and (min-width: 1024px) and (max-width: 1200px) {
  .figcaption-description {
    font-size: 1rem !important;
  }
}

@media only screen and (min-width: 515px) and (max-width: 768px) {
  .is-section {
    padding: 0.5rem 1.5rem !important;
  }
}

@media only screen and (max-width: 425px) {
  .diapo {
    min-height: 10em;
  }

  .is-section {
    padding: 1rem 1.5rem !important;
  }
}
</style>
