<template>
  <Layout>
    <section class="section">
      <div
        class="columns is-multiline is-centered is-vcentered has-text-centered"
      >
        <div class="column is-12">
          <h1 class="has-text-centered has-text-primary">Etudier en France</h1>
        </div>
        <div class="column is-6 subtitle">
          Savez-vous pourquoi choisir la France pour vos études supérieures ?
          Parce que l’Hexagone a des atouts indénombrables !
        </div>
      </div>
    </section>

    <section class="section">
      <div
        class="columns is-vcentered is-centered is-multiline has-text-centered"
      >
        <div class="column is-12 has-text-primary">
          <h2>Découvrez les 5 bonnes raisons pour venir étudier en France :</h2>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div class="column is-12 is-marginless is-paddingless">
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
                :style="{ backgroundImage: `url('${carousel.image}')` }"
              >
                <div class="hero-body has-text-left">
                  <div class="columns is-multiline has-text-left">
                    <div class="column is-8 is-offset-1">
                      <h2 class="title has-text-white">{{ carousel.title }}</h2>
                    </div>
                    <br />
                    <div
                      class="column is-offset-1 is-half-desktop is-12-mobile content-16"
                    >
                      {{ carousel.description }}
                    </div>
                  </div>
                </div>
              </section>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </section>

    <section class="section">
      <div
        class="columns is-vcentered is-mobile is-multiline has-text-centered is-centered"
      >
        <div class="column is-two-thirds-desktop is-12-mobile">
          <h2 class="has-text-primary">
            Étudier en France : par où commencer ?
          </h2>
        </div>
        <div class="column is-12"></div>
        <div class="column is-5-desktop is-10-mobile">
          <figure class="image is-16by9">
            <iframe
              title="studely"
              class="has-ratio"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/bS1j1o2AvSo"
              allowfullscreen
            ></iframe>
          </figure>
          <br />
        </div>
        <br />
        <div class="column is-two-thirds-desktop is-12-mobile">
          <strong>Découvrez toutes nos astuces !</strong>
        </div>
        <br />
        <div class="column is-two-thirds-desktop is-12-mobile">
          <a
            href="/etudier-en-france/etudier-en-france.pdf"
            download
            target="_blank"
            >Je télécharge l’infographie (.pdf)</a
          >
        </div>
        <br />
        <div class="column is-two-thirds-desktop is-12-mobile">
          <b-button tag="a" href="/blog/" type="is-danger" size="is-large">
            <strong>J’accède au blog Studely</strong>
          </b-button>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Etudier en France",
    meta: [
      {
        name: "description",
        content:
          "Choisir la France pour ses études supérieures c’est choisir l’excellence !",
      },
    ],
  },
  data() {
    return {
      arrow: false,
      arrowBoth: false,
      arrowHover: false,
      iconPack: "fas",
      iconSize: "is-medium",
      carousels: [
        {
          title: "L'art de vivre à la Française",
          color: "info",
          image: "/etudier-en-france/1.jpg",
          description:
            " Etudier en France c’est aller à la rencontre de « l’art de vivre à la française ». Une occasion pour les étudiants internationaux de découvrir une gastronomie mondialement reconnue, un patrimoine plein d’histoire et de profiter d’une offre culturelle riche et variée qui feront de votre séjour étudiant une expérience unique.",
        },
        {
          title:
            "Une vie étudiante attractive dans un environnement international",
          color: "success",
          image: "/etudier-en-france/2.jpg",
          description:
            "L’enseignement supérieur français séduit de nombreux étudiants internationaux venus du monde entier, favorisant des rencontres uniques, multiculturelles et hautement enrichissantes.",
        },

        {
          title: "L'excellence de l'offre de formations en France",
          color: "warning",
          image: "/etudier-en-france/3.jpg",
          description:
            "La France est mondialement reconnue pour la qualité de son enseignement supérieur. Elle est la première destination étudiante francophone au monde.",
        },
        {
          title: "L’environnement favorable à la recherche et à l’innovation",
          color: "info",
          image: "/etudier-en-france/4.jpg",
          description:
            "Les étudiants peuvent compter sur un cadre privilégié pour mener à bien leurs projets innovants et profiter d'un réseau de recherche mondial et d’enseignants prisés.",
        },
        {
          title:
            "L'approfondissement d'une langue internationale : le français",
          color: "success",
          image: "/etudier-en-france/5.jpg",
          description:
            "Vous ne le saviez peut-être pas mais la langue française est la 5ème langue la plus parlée dans le monde, ainsi que le plus apprise après l’anglais. Elle est également la 3ème langue des affaires et la 2ème langue d’information internationale selon l'Organisation internationale de la Francophonie (OIF). Alors, pourquoi attendre venir étudier en France ?",
        },
      ],
    };
  },
};
</script>


<style scoped lang="scss">
@import "../../variables.scss";

.diapo {
  min-height: 36.25em;
  background-size: cover;
}
</style>