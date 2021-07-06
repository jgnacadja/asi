<template>
  <Layout>
    <div class="container has-text-centered">
      <section class="section">
        <div class="container">
          <h1 class="title is-1">Mon projet d'études</h1>
          <h2 class="subtitle is-2">
            Envisager votre avenir passe par construire votre projet d'études en
            France.
          </h2>
          <h3 class="subtitle is-3">
            Vous recherchez une formation correspondant à vos compétences
            acquises et à vos objectifs professionnels ? Nous mettons à votre
            disposition des ressources documentaires et logistiques afin de
            mieux vous aider à la trouver.
          </h3>
        </div>
      </section>

      <section>
        <div class="container">
          <b-carousel
            :autoplay="true"
            with-carousel-list
            :indicator="true"
            :arrow="arrow"
            :overlay="gallery"
            :icon-pack="iconPack"
            :icon-size="iconSize"
            :indicator-background="indicatorBackground"
            :indicator-inside="indicatorInside"
            :indicator-mode="indicatorMode"
            :indicator-position="indicatorPosition"
            :indicator-style="indicatorStyle"
            :pause-hover="pauseHover"
          >
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <section class="section">
                <div class="columns is-desktop is-vcentered">
                  <div class="column">
                    <g-image :src="carousel.image" />
                  </div>
                  <div class="column">
                    <g-image :src="carousel.logo" />
                    <h3 class="title is-3">{{ carousel.title }}</h3>
                    <h4 class="subtitle is-4">{{ carousel.subtitle }}</h4>
                  </div>
                </div>
              </section>
            </b-carousel-item>
          </b-carousel>
        </div>
      </section>

      <section class="section">
        <h2 class="title is-1">Avantages</h2>
        <div class="columns is-desktop is-vcentered">
          <div class="column is-2 is-offset-one-quarter">
            <g-image
              src="~/assets/mon-projet-detudes/contact.svg"
              width="200"
              height="200"
              fit="inside"
            />
            <br />
            <h4 class="title is-4">Contact direct</h4>
            <br />Mise en relation avec nos écoles partenaires
          </div>
          <div class="column is-2 is-offset-one-fifth">
            <g-image
              src="~/assets/mon-projet-detudes/ressources.svg"
              width="200"
              height="200"
              fit="inside"
            />
            <br />
            <h4 class="title is-4">Ressources logistiques</h4>
            <p>
              Mise à disposition de nos ressources pour réaliser votre
              candidature
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h4 class="subtitle is-4">
            Une question sur votre projet d'études en France?
          </h4>
          <h5 class="subtitle is-5">Rejoignez dès maintenant le forum :</h5>
          <b-button>
            <a href="https://espace.studely.com/user/auth/login"
              >Mon projet d'études en France</a
            >
          </b-button>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Mon projet d'études",
  },
  data() {
    return {
      arrow: false,
      indicator: true,
      indicatorInside: true,
      indicatorMode: "hover",
      indicatorPosition: "is-bottom",
      indicatorStyle: "is-dots",
      iconPack: "fas",
      iconSize: "is-large",
      pauseHover: false,
      carousels: [
        {
          title:
            "Grande École à la triple accréditation EQUIS, AACSB, AMBA et top 10 des meilleures écoles de commerce françaises. La majorité des programmes proposés par l'IESEG sont 100% en anglais. ",
          subtitle:
            "La rentrée se passe en septembre pour la majorité des programmes avec une semaine d’orientation obligatoire, la dernière semaine du mois d’août.",
          image:
            "/assets/static/src/assets/mon-projet-detudes/IESEG.jpg?&key=6898ad0",
          logo:
            "/assets/static/src/assets/mon-projet-detudes/IESEG.png?&key=6898ad0",
        },
        {
          title:
            "Ecole accréditée AACSB depuis 2005 et classée dans le Financial Times et QS Ranking.",
          subtitle:
            "Elle est réputée par la qualité de son offre de formations (double-diplôme, échanges, langues, projets, savoir-faire) avec un suivi personnalisé. La rentrée se déroule entre septembre et octobre de chaque année.",
          image:
            "/assets/static/src/assets/mon-projet-detudes/ESC.jpg?&key=6898ad0",
          logo:
            "/assets/static/src/assets/mon-projet-detudes/ESC.png?&key=6898ad0",
        },
        {
          title:
            "Groupe d'enseignement supérieur français comptant près de 3 600 étudiants et 16 000 diplômés.",
          subtitle:
            "Il se compose de 5 écoles : La Rochelle Business School, La Rochelle Tourism & Hospitality School, La Rochelle Digital School, La Rochelle Academy et La Rochelle Exécutive Education.",
          image:
            "/assets/static/src/assets/mon-projet-detudes/excelia.jpg?&key=6898ad0",
          logo:
            "/assets/static/src/assets/mon-projet-detudes/excelia.png?&key=6898ad0",
        },
        {
          title:
            "Trois écoles à Paris-La Défense : école d’ingénieurs, école de management, école multimédia.",
          subtitle:
            "Les enseignements pédagogiques sont transversaux et permettent aux étudiants de travailler en équipe sur divers projets. Selon le parcours choisi, le Pôle offre 3 possibilités de rentrée : en septembre, octobre ou février.",
          image:
            "/assets/static/src/assets/mon-projet-detudes/LDV.jpg?&key=6898ad0",
          logo:
            "/assets/static/src/assets/mon-projet-detudes/LDV.png?&key=6898ad0",
        },
        {
          title:
            "FIGS rassemble 20 écoles proposant des programmes dispensés en français ou en anglais du BAC au BAC+5.",
          subtitle:
            "Ces écoles proposent des cursus professionnalisants, des diplômes de qualité, reconnus par l’État et une implantation sur 10 villes en France.",
          image:
            "/assets/static/src/assets/mon-projet-detudes/FIGS.jpg?&key=6898ad0",
          logo:
            "/assets/static/src/assets/mon-projet-detudes/FIGS.png?&key=6898ad0",
        },
        {
          title:
            "Galileo Global Education regroupe 42 écoles de référence sur 80 campus dans 10 pays du monde.",
          subtitle:
            "Elles  délivrent 52 titres certifiés dans les domaines de la création et du management avec des services de digital learning. ",
          image:
            "/assets/static/src/assets/mon-projet-detudes/studalis.jpg?&key=6898ad0",
          logo:
            "/assets/static/src/assets/mon-projet-detudes/studalis.png?&key=6898ad0",
        },
      ],
    };
  },
};
</script>
