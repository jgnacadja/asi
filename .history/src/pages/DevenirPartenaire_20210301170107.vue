<template>
  <Layout>
    <div class="container has-text-centered">
      <section class="section">
        <div class="container">
          <div class="columns is-multiline has-text-centered">
            <div class="column is-12 has-text-primary">
              <h1>Intégrez le cercle des partenaires de Studely.</h1>
            </div>
            <div class="column is-12 subtitle">
              Participez à la concrétisation de milliers de projets d’étudiants
              internationaux !
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="has-text-centered">
      <section class="section has-text-centered">
        <div class="columns is-multiline is-centered">
          <div class="column is-12 title has-text-primary"></div>

          <div class="column is-12 contact-form is-marginless is-paddingless">
            <div class="columns is-centered">
              <div class="column is-half">
                <br />
                <br />
                <form
                  id="app"
                  action
                  method="post"
                  name="form"
                  @submit.prevent="checkForm"
                >
                  <b-field>
                    <b-select
                      id="profil"
                      v-model="data.data.profil"
                      placeholder="vous êtes"
                      name="profil"
                      @change="info(value)"
                      class="has-text-left"
                    >
                      <option value="partenaire">Partenaire</option>
                      <option value="particulier">Particulier</option>
                    </b-select>
                  </b-field>

                  <span
                    v-if="data.data.profil === 'partenaire'"
                    class="Partenaire"
                  >
                    <b-field>
                      <input
                        v-model="data.data.structure"
                        class="input"
                        type="text"
                        placeholder="Nom Structure"
                        name="structure"
                      />
                    </b-field>
                    <div
                      v-if="data.errors.structure"
                      style="text-align: left; padding-bottom: 5px"
                    >
                      <strong style="color: red !important">{{
                        data.errors.structure
                      }}</strong>
                    </div>
                    <b-field>
                      <b-select
                        v-model="data.data.secteur"
                        placeholder="Secteur"
                        name="secteur"
                        class="has-text-left"
                      >
                        <option disabled selected>Secteur</option>
                        <option>Banque</option>
                        <option>Ecole</option>
                        <option>Immobilier</option>
                        <option>Assurance</option>
                        <option>Autre</option>
                      </b-select>
                    </b-field>
                    <div
                      v-if="data.errors.secteur"
                      style="text-align: left; padding-bottom: 5px"
                    >
                      <strong style="color: red !important">{{
                        data.errors.secteur
                      }}</strong>
                    </div>
                    <b-field>
                      <input
                        v-model="data.data.fonction"
                        class="input"
                        type="text"
                        placeholder="Fonction"
                        name="fonction"
                      />
                    </b-field>
                    <div
                      v-if="data.errors.fonction"
                      style="text-align: left; padding-bottom: 5px"
                    >
                      <strong style="color: red !important">{{
                        data.errors.fonction
                      }}</strong>
                    </div>
                    <b-field>
                      <input
                        v-model="data.data.site"
                        class="input"
                        type="text"
                        placeholder="Site Web"
                        name="site"
                      />
                    </b-field>
                    <div
                      v-if="data.errors.site"
                      style="text-align: left; padding-bottom: 5px"
                    >
                      <strong style="color: red !important">{{
                        data.errors.site
                      }}</strong>
                    </div>
                    <br />
                  </span>

                  <span
                    v-if="data.data.profil === 'particulier'"
                    class="particulier"
                  >
                    <br />
                    <b-field>
                      <input
                        v-model="data.data.nom"
                        class="input"
                        type="text"
                        placeholder="Nom"
                        name="nom"
                      />
                    </b-field>
                    <div
                      v-if="data.errors.nom"
                      style="text-align: left; padding-bottom: 5px"
                    >
                      <strong style="color: red !important">{{
                        data.errors.nom
                      }}</strong>
                    </div>
                    <b-field>
                      <input
                        v-model="data.data.prenom"
                        class="input"
                        type="text"
                        placeholder="Prénom"
                        name="prenom"
                      />
                    </b-field>
                    <div
                      v-if="data.errors.prenom"
                      style="text-align: left; padding-bottom: 5px"
                    >
                      <strong style="color: red !important">{{
                        data.errors.prenom
                      }}</strong>
                    </div>
                    <b-field>
                      <input
                        v-model="data.data.objet"
                        class="input"
                        type="text"
                        placeholder="Objet"
                        name="objet"
                      />
                    </b-field>
                    <div
                      v-if="data.errors.objet"
                      style="text-align: left; padding-bottom: 5px"
                    >
                      <strong style="color: red !important">{{
                        data.errors.objet
                      }}</strong>
                    </div>
                    <br />
                  </span>

                  <b-field>
                    <textarea
                      v-model="data.data.message"
                      class="textarea"
                      rows="5"
                      placeholder="Ecrivez quelque
                    chose..."
                      name="message"
                    ></textarea>
                  </b-field>
                  <div
                    v-if="data.errors.message"
                    style="text-align: left; padding-bottom: 5px"
                  >
                    <strong style="color: red !important">{{
                      data.errors.message
                    }}</strong>
                  </div>

                  <b-field class="file has-text-white">
                    <b-upload v-model="data.fileupload" name="fileupload">
                      <b-icon
                        pack="fas"
                        icon="file-upload"
                        size="is-medium"
                        type="is-info"
                      />
                      <span
                        >Joindre un ou plusieurs fichiers (jpeg,pdf,word)</span
                      >
                    </b-upload>
                    <span v-if="data.fileupload" class="file-name">
                      {{ data.fileupload }}
                    </span>
                    <br />
                  </b-field>

                  <div class="columns">
                    <b-field class="column is-3">
                      <button
                        class="button is-primary is-fullwidth"
                        type="submit"
                      >
                        envoyer
                      </button>
                    </b-field>
                    <br />
                  </div>
                  <span
                    v-if="data.success"
                    class="success-message"
                    style="color: white !important"
                  >
                    {{ data.success }}
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import CarteInteractive from "~/components/CarteInteractive.vue";
//import { Email } from "../../static/smtp";
import emailjs from "emailjs-com";

export default {
  components: {
    CarteInteractive,
  },
  metaInfo: {
    title: "Contactez-Nous",
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
      file: {
        name: "",
      },
      firstIndex: 0,
      selectedCountry: {
        name: "Studely Cameroun",
        id: "Cameroun",
        branchs: [
          {
            name: "Bureau de Yaoundé :",
            adresse:
              "Carrefour Elig-Essono, Immeuble de la Pharmacie du Mfoundi, 1er étage au dessus de la NFC BANK",
            contact: ["653 47 22 01", "657 99 33 06"],
            email: "",
          },
          {
            name: "Bureau de Douala",
            adresse:
              "Quartier Bali, Rue Ngosso Din à 50m de Jamaica, face rue des pavés",
            contact: ["653 47 22 00", "657 99 33 05"],
            email: "contact.cm@studely.com",
          },
        ],
      },
      afiliates: [
        {
          name: "Afrique Centrale",
          countries: [
            {
              name: "Studely Cameroun",
              id: "Cameroun",
              branchs: [
                {
                  name: "Bureau de Yaoundé :",
                  adresse:
                    "Carrefour Elig-Essono, Immeuble de la Pharmacie du Mfoundi, 1er étage au dessus de la NFC BANK",
                  contact: ["653 47 22 01", "657 99 33 06"],
                  email: "",
                },
                {
                  name: "Bureau de Douala",
                  adresse:
                    "Quartier Bali, Rue Ngosso Din à 50m de Jamaica, face rue des pavés",
                  contact: ["653 47 22 00", "657 99 33 05"],
                  email: "contact.cm@studely.com",
                },
              ],
            },
            {
              name: "Studely Congo Brazzaville",
              id: "Congo_Brazzaville",
              branchs: [
                {
                  name: "Bureau de Brazzaville ",
                  adresse:
                    "22 Rue Mbochis, Poto Poto, Brazzaville Ref : En face de la clinique Elikia",
                  contact: ["(+242) 056 078 855", "(+242) 064 819 776"],
                  email: "contact.bz@studely.com",
                },
              ],
            },
            {
              name: "Studely Congo RDC",
              id: "Congo_RDC",
              branchs: [
                {
                  name: " Bureau de Kinshasa  ",
                  adresse:
                    "Immeuble Cinq_sur_Cinq_GIE au 9ème étage, Anciennes Galeries Présidentielles, Commune de la Gombe, Kinshasa",
                  contact: ["(+243) 810 010 025", "(+243) 840 823 489"],
                  email: "contact.rdc@studely.com",
                },
              ],
            },
          ],
        },
        {
          name: "Afrique de l'Ouest",
          countries: [
            {
              name: "Studely Bénin",
              id: "Bénin",
              branchs: [
                {
                  name: "Bureau de  Cotonou:",
                  adresse:
                    "Quartier Gbégamey, voie pavée quittant l’ENEAM pour le Carrefour Cossi, entre l’ex bar la Maison Blanche et Optic médical plus.",
                  contact: ["(+229) 62 53 74 74", "(+229) 62 35 64 64"],
                  email: "contact.bj@studely.com ",
                },
              ],
            },
            {
              name: "Studely Côte d'Ivoire",
              id: "Côte_d_x27_Ivoire",
              branchs: [
                {
                  name: "Bureau d'Abidjan:",
                  adresse:
                    "Cocody, Riviera golf, rue des jardins, non loin de la pharmacie les elias",
                  contact: [
                    "(+225) 89 09 66 53",
                    "(+225) 86 86 13 64 ",
                    "(+225) 09 66 21 80",
                    " (+225) 57 55 99 95",
                    "(+225) 68 70 34 92",
                    "(+225) 22 59 41 84",
                  ],
                  email: "contact.ci@studely.com",
                },
              ],
            },
            {
              name: "Studely Burkina Faso",
              id: "Burkina_Faso",
              branchs: [
                {
                  name: "Bureau de Ouagadougou:",
                  adresse:
                    "Avenue de la liberté, Section Paspanga Immeuble à 100 mètres du feu du CHU de YALGADO vers le club SONABEL",
                  contact: ["(+226) 63 80 29 29"],
                  email: "contact.bf@studely.com",
                },
              ],
            },
            {
              name: "Studely Guinée",
              id: "Guinée",
              branchs: [
                {
                  name: "Bureau de Conakry : ",
                  adresse: "Lambagni carrefour wariah, Commune de Ratoma",
                  contact: ["(+224) 628 88 73 66", "(+224)664 51 54 39"],
                  email: "contact.gn@studely.com",
                },
              ],
            },
            {
              name: "Studely Mali",
              id: "Mali",
              branchs: [
                {
                  name: "Bureau de Bamako :",
                  adresse:
                    "- Cabinet Kelisse : Bacodjicoroni ACI, route de KALABANKORO, rue 565, Porte 016",
                  contact: ["(+223) 71 74 41 65"],
                  email: "contact.ml@studely.com",
                },
              ],
            },
            {
              name: "Studely Sénégal",
              id: "Sénégal",
              branchs: [
                {
                  name: "Bureau de Dakar:",
                  adresse:
                    "40 Cité Keur Gorgui, Sacré-cœur Pyrotechnie, 1er étage, local A102",
                  contact: ["(+221) 7 76 28 57 57", "(+221) 7 76 28 73 73"],
                  email: "contact.sn@studely.com",
                },
              ],
            },
            {
              name: "Studely Togo",
              id: "Togo",
              branchs: [
                {
                  name: "Bureau de  Lomé :",
                  adresse: "Avenue de Calais, Nyékonapoè Lomé, Togo",
                  contact: ["(+228) 93 05 84 44", "(+228) 91 98 54 83"],
                  email: "contact.tg@studely.com",
                },
              ],
            },
          ],
        },
        {
          name: "Afrique du Nord",
          countries: [
            {
              name: "Studely Algérie",
              id: "Algérie",
              branchs: [
                {
                  name: "Bureau d'Alger :",
                  adresse: "10 rue Larbi Alik, 2ème étage, Hydra, Alger",
                  contact: ["(+213) 554 747 703"],
                  email: "contact.dz@studely.com",
                },
              ],
            },
            {
              name: "Studely Maroc",
              id: "Maroc",
              branchs: [
                {
                  name: "Bureau de Casablanca : ",
                  adresse:
                    "Résidence Al Borj, Appartement N°12 21, Bd Zerktouni 20390, Casablanca – MAROC",
                  contact: ["(+212) 5 22 22 66 30", "(+212) 5 22 22 66 31"],
                  email: "contact.ma@studely.com",
                },
                {
                  name: "Bureau de Rabat :",
                  adresse:
                    "489, avenue Mohamed V, appart n5 , 1er étage, Rabat",
                  contact: ["(+212) 5 38 00 91 51", "(+212) 6 73 46 95 99"],
                  email: "contact.ma@studely.com ",
                },
              ],
            },
            {
              name: "Studely Tunisie",
              id: "Tunisie",
              branchs: [
                {
                  name: "Bureau de Tunis : ",
                  adresse:
                    "39 Avenue de Paris Tunis 1000 RP, 2ème étage, Appt 2-2",
                  contact: ["(+216) 71 330 409", "(+216) 27 586 227"],
                  email: "contact.tn@studely.com",
                },
              ],
            },
          ],
        },
      ],
      data: {
        errors: {
          structure: "",
          secteur: "",
          fonction: "",
          site: "",
          nom: "",
          prenom: "",
          objet: "",
          message: "",
        },
        data: {
          profil: "partenaire",
          structure: null,
          secteur: null,
          fonction: null,
          site: null,
          nom: null,
          prenom: null,
          objet: null,
          message: null,
        },
        success: "",
        loading: false,
        fileupload: null,
      },
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
    checkForm: function (e) {
      if (
        this.structure &&
        this.secteur &&
        this.fonction &&
        this.site &&
        this.message
      ) {
        return true;
      } else if (this.nom && this.penom && this.objet && this.message) {
        return true;
      }

      this.data.errors = {
        structure: null,
        secteur: null,
        fonction: null,
        site: null,
        nom: null,
        prenom: null,
        objet: null,
        message: null,
      };

      const service_id = "service_jvu4qhd";
      const template_id = "template_lxjxbbu";
      const template_id_partenaire = "template_d2r0nnd";
      const user_id = "user_QCKGO9tNGA6O6EoFYH9i5";

      this.data.success = null;

      if (this.data.data.profil === "particulier") {
        if (!this.data.data.nom) {
          this.data.errors.nom = "le nom est requis";
        }
        if (!this.data.data.prenom) {
          this.data.errors.prenom = "le prenom est requis";
        }
        if (!this.data.data.objet) {
          this.data.errors.objet = "l'objet est requis";
        }
        if (!this.data.data.message) {
          this.data.errors.message = "le message est requis";
        }
      }

      if (this.data.data.profil === "partenaire") {
        if (!this.data.data.structure) {
          this.data.errors.structure = "le nom de la structure est requis";
        }
        if (!this.data.data.secteur) {
          this.data.errors.secteur = "le secteur d'activité est requis";
        }
        if (!this.data.data.fonction) {
          this.data.errors.fonction = "La fonction est requis";
        }
        if (!this.data.data.site) {
          this.data.errors.site = "L'adresse du site web est requis";
        }
        if (!this.data.data.message) {
          this.data.errors.message = "le message est requis";
        }
      }

      if (this.data.data.profil === "partenaire") {
        if (
          this.data.data.structure != null &&
          this.data.data.secteur != null &&
          this.data.data.fonction != null &&
          this.data.data.site != null &&
          this.data.data.message != null
        ) {
          if (this.data.fileupload != null) {
            const reader = new FileReader();
            //tobase64
            const attachment = reader.readAsDataURL(this.data.fileupload);

            var vm = this;

            try {
              var vm = this;

              emailjs
                .sendForm(
                  service_id,
                  template_id_partenaire,
                  e.target,
                  user_id,
                  this.data.data
                )
                .then(function () {
                  vm.data.data.structure = null;
                  vm.data.data.secteur = null;
                  vm.data.data.fonction = null;
                  vm.data.data.site = null;
                  vm.data.data.message = null;
                  vm.data.success = "Votre demande a été envoyé";
                });
            } catch (error) {
              return null;
            }
          } else {
            var vm = this;

            try {
              var vm = this;

              emailjs
                .sendForm(
                  service_id,
                  template_id_partenaire,
                  e.target,
                  user_id,
                  this.data.data
                )
                .then(function () {
                  vm.data.data.structure = null;
                  vm.data.data.secteur = null;
                  vm.data.data.fonction = null;
                  vm.data.data.site = null;
                  vm.data.data.message = null;
                  vm.data.success = "Votre demande a été envoyé";
                });
            } catch (error) {
              return null;
            }
          }
        }
      } else if (this.data.data.profil === "particulier") {
        if (
          this.data.data.nom != null &&
          this.data.data.prenom != null &&
          this.data.data.message != null
        ) {
          if (this.data.fileupload != null) {
            const reader = new FileReader();
            //tobase64
            const attachment = reader.readAsDataURL(this.data.fileupload);

            var vm = this;

            try {
              var vm = this;

              emailjs
                .sendForm(
                  service_id,
                  template_id,
                  e.target,
                  user_id,
                  this.data.data
                )
                .then(function () {
                  vm.data.data.nom = null;
                  vm.data.data.prenom = null;
                  vm.data.data.objet = null;
                  vm.data.data.message = null;
                  vm.data.success = "Votre demande a été envoyé";
                });
            } catch (error) {
              return null;
            }
          } else {
            // send the message and get a callback with an error or details of the message that was sent

            var vm = this;

            try {
              var vm = this;

              emailjs
                .sendForm(
                  service_id,
                  template_id,
                  e.target,
                  user_id,
                  this.data.data
                )
                .then(function () {
                  vm.data.data.nom = null;
                  vm.data.data.prenom = null;
                  vm.data.data.objet = null;
                  vm.data.data.message = null;
                  vm.data.success = "Votre demande a été envoyé";
                });
            } catch (error) {
              return null;
            }
          }
        }
      }
      e.preventDefault();
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

.contact-form {
  background-image: url("./../../static/contact/rectangle.png");
  background-size: cover;
}

.is-contact {
  padding-bottom: 1.5em;
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .is-contact {
    font-size: 1em;
  }
}
</style>