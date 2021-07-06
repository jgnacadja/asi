<template>
  <Layout>
    <div class="container has-text-centered">
      <section class="section">
        <div class="container">
          <h1 class="title has-text-primary">Contactez-nous</h1>
          <br />
          <div class="subtitle">
            Besoin d'échanger sur votre projet d'études en France ? Toutes nos
            équipes en
            <br />France et à l'international se tiennent à votre disposition !
          </div>
          <div class="column is-12"></div>
          <div class="column is-narrow">
            <b-button
              tag="a"
              href="https://espace.studely.com"
              size="is-large"
              type="is-success"
            >
              <strong
                >Prendre rendez-vous
                <span class="is-hidden-mobile">avec un conseiller</span></strong
              >
            </b-button>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="columns is-vcentered is-variable is-7">
            <div class="column is-3">
              <p class="subtitle is-bordered is-contact">
                <br />
                <strong class="has-text-primary">Nos coordonnées</strong>
                <br />
                <br />
                <span class="has-text-centered">
                  1-7 Cours Valmy
                  <br />92800 Puteaux - France
                  <br />
                  <br />
                  <a href="tel:">(+33) 1 80 88 90 77</a>
                  <br />
                  <br />
                  <a href="mailto:">contact@studely.com</a>
                </span>
                <br />
              </p>
            </div>
            <div class="column is-9">
              <div
                class="columns is-multiline container is-centered has-text-centered"
              >
                <div class="column is-12">
                  <h2 class="title is-spaced has-text-primary">
                    Notre siège social
                  </h2>
                </div>
                <div class="column is-12">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10491.755912442972!2d2.3102812!3d48.8975001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10ab3186871cd16b!2sMorning%20Coworking%20-%20Clichy!5e0!3m2!1sfr!2sfr!4v1578047007407!5m2!1sfr!2sfr"
                    style="height: 500px"
                    allowfullscreen
                    width="100%"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="columns is-variable is-1 is-vcentered">
            <div class="column is-8 is-paddingless is-marginless">
              <div class="columns is-multiline">
                <div class="column is-12 content-14">
                  Je clique sur la carte pour choisir mon pays
                </div>
                <div class="column is-12">
                  <CarteInteractive />
                </div>
                <div class="column is-12 content-16">
                  <a href="/contact/implantations.pdf" download target="_blank"
                    >Je consulte toutes les implantations de Studely (.pdf)</a
                  >
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="columns is-multiline is-centered has-text-centered">
                <div class="column is-12 has-text-primary title">
                  {{ selectedCountry.name }}
                </div>
                <div class="columns is-12">
                  <div class="card">
                    <div class="card-content">
                      <div
                        v-for="(branch, index) in selectedCountry.branchs"
                        :key="index"
                        class="content"
                      >
                        <strong class="has-text-primary content-20">
                          {{ branch.name }}
                        </strong>
                        <br />
                        <span class="content-16 has-text-left">
                          {{ branch.adresse }}
                          <br />
                          <span v-for="phone in branch.contact" :key="phone">
                            <span v-if="phone != ''">
                              <a :href="'tel:' + phone">
                                <b-icon
                                  pack="fas"
                                  icon="phone-square-alt"
                                  size="is-small"
                                ></b-icon>
                                {{ phone }}
                              </a>
                            </span>
                            <br />
                          </span>
                          <span v-if="branch.email != ''">
                            <a :href="'mailto:' + branch.email">
                              <b-icon
                                pack="fas"
                                icon="envelope-square"
                                size="is-small"
                              ></b-icon>
                              {{ branch.email }}
                            </a>
                          </span>
                          <br />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--  zone section -->
      <section class="section">
        <div class="container">
          <div class="columns is-variable">
            <div v-for="(zone, id) in afiliates" :key="id" class="column is-4">
              <div class="columns is-multiline is-centered has-text-centered">
                <div class="column is-12 title has-text-primary">
                  {{ zone.name }}
                </div>
                <br />

                <!-- repeat this -->
                <div
                  v-for="(country, index) in zone.countries"
                  :key="index"
                  class="column is-12"
                >
                  <b-collapse
                    :open="firstIndex == index"
                    class="card"
                    animation="slide"
                    aria-id="contentIdForA11y3"
                  >
                    <div
                      slot="trigger"
                      class="card-header"
                      role="button"
                      aria-controls="contentIdForA11y3"
                    >
                      <p
                        class="card-header-title has-background-primary has-text-white content-20"
                      >
                        {{ country.name }}
                      </p>
                    </div>
                    <div class="card-content has-text-left">
                      <div
                        v-for="(branch, idx) in country.branchs"
                        :key="idx"
                        class="content"
                      >
                        <strong class="has-text-primary content-20">
                          {{ branch.name }}
                        </strong>
                        <br />
                        <span class="content-16">
                          {{ branch.adresse }}
                          <br />
                          <span v-for="phone in branch.contact" :key="phone">
                            <span v-if="phone != ''">
                              <a :href="'tel:' + phone">
                                <b-icon
                                  pack="fas"
                                  icon="phone-square-alt"
                                  size="is-small"
                                ></b-icon>
                                {{ phone }}
                              </a>
                            </span>
                            <br />
                          </span>
                          <span v-if="branch.email != ''">
                            <a :href="'mailto:' + branch.email">
                              <b-icon
                                pack="fas"
                                icon="envelope-square"
                                size="is-small"
                              ></b-icon>
                              {{ branch.email }}
                            </a>
                          </span>
                        </span>
                      </div>
                    </div>
                  </b-collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- old codes -->
    </div>
  </Layout>
</template>

<script>
import CarteInteractive from "~/components/CarteInteractive.vue";

import selectedCountry from "./../assets/utils/selectedCountry";
import afiliates from "./../assets/utils/afiliates";

export default {
  components: {
    CarteInteractive,
  },
  metaInfo: {
    title: "Service Client",
    meta: [
      {
        name: "description",
        content:
          "Découvrez notre présence en Afrique et contactez dès maintenant votre conseiller Studely",
      },
    ],
  },
  data() {
    return {
      firstIndex: 0,
      selectedCountry: selectedCountry.data,
      afiliates: afiliates.data,
    };
  },
  mounted() {
    this.addClickHandler();
  },

  methods: {
    getState(value) {
      let backup = this.selectedCountry;
      for (const zone in this.afiliates) {
        this.selectedCountry = this.afiliates[zone].countries.find((e) => {
          return e.id === value;
        });
        if (this.selectedCountry) break;
      }
      if (!this.selectedCountry) {
        this.selectedCountry = backup;
      }
    },
    addClickHandler() {
      let paths = document.querySelectorAll("path");
      paths.forEach((el) => {
        let title = el.getAttribute("id");
        el.addEventListener("click", () => {
          this.getState(title);
        });
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.is-bordered {
  border-color: $blue-studely;
  border-radius: 20px;
}
</style>