<template>
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
                              <span
                  v-if="data.status !== null"
                  class="success-message"
                  style="color: white !important"
                >
                  {{ data.status }}
                </span>
                <b-field>
                  <b-select
                    id="profil"
                    v-model="data.data.profil"
                    placeholder="vous êtes"
                    name="profil"
                    class="has-text-left"
                  >
                    <option value="partenaire">Partenaire</option>
                    <option value="particulier">Particulier</option>
                  </b-select>
                </b-field>

                <b-field v-if="data.data.profil === 'partenaire'">
                  <input
                    v-model="data.data.structure"
                    class="input"
                    type="text"
                    placeholder="Nom Structure"
                    name="structure"
                  />
                </b-field>
                <div
                  v-if="
                    data.data.profil === 'partenaire' &&
                    data.data.structure === null &&
                    data.submit === true
                  "
                  style="text-align: left; padding-bottom: 5px"
                >
                  <strong style="color: red !important">
                    le nom de la structure est requis
                  </strong>
                </div>
                <b-field v-if="data.data.profil === 'partenaire'">
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
                  v-if="
                    data.data.profil === 'partenaire' &&
                    data.data.secteur === null &&
                    data.submit === true
                  "
                  style="text-align: left; padding-bottom: 5px"
                >
                  <strong style="color: red !important"
                    >le secteur d'activité est requis</strong
                  >
                </div>
                <b-field v-if="data.data.profil === 'partenaire'">
                  <input
                    v-model="data.data.fonction"
                    class="input"
                    type="text"
                    placeholder="Fonction"
                    name="fonction"
                  />
                </b-field>
                <div
                  v-if="
                    data.data.profil === 'partenaire' &&
                    data.data.fonction === null &&
                    data.submit === true
                  "
                  style="text-align: left; padding-bottom: 5px"
                >
                  <strong style="color: red !important"
                    >la fonction est requis</strong
                  >
                </div>
                <b-field v-if="data.data.profil === 'partenaire'">
                  <input
                    v-model="data.data.site"
                    class="input"
                    type="text"
                    placeholder="Site Web"
                    name="site"
                  />
                </b-field>
                <div
                  v-if="
                    data.data.profil === 'partenaire' &&
                    data.data.site === null &&
                    data.submit === true
                  "
                  style="text-align: left; padding-bottom: 5px"
                >
                  <strong style="color: red !important"
                    >l'adresse du site web est requis</strong
                  >
                </div>
                <b-field v-if="data.data.profil === 'particulier'">
                  <input
                    v-model="data.data.nom"
                    class="input"
                    type="text"
                    placeholder="Nom"
                    name="nom"
                  />
                </b-field>
                <div
                  v-if="
                    data.data.profil === 'particulier' &&
                    data.data.nom === null &&
                    data.submit === true
                  "
                  style="text-align: left; padding-bottom: 5px"
                >
                  <strong style="color: red !important"
                    >le nom est requis</strong
                  >
                </div>
                <b-field v-if="data.data.profil === 'particulier'">
                  <input
                    v-model="data.data.prenom"
                    class="input"
                    type="text"
                    placeholder="Prénom"
                    name="prenom"
                  />
                </b-field>
                <div
                  v-if="
                    data.data.profil === 'particulier' &&
                    data.data.prenom === null &&
                    data.submit === true
                  "
                  style="text-align: left; padding-bottom: 5px"
                >
                  <strong style="color: red !important"
                    >le prenom est requis</strong
                  >
                </div>
                <b-field v-if="data.data.profil === 'particulier'">
                  <input
                    v-model="data.data.objet"
                    class="input"
                    type="text"
                    placeholder="Objet"
                    name="objet"
                  />
                </b-field>
                <div
                  v-if="
                    data.data.profil === 'particulier' &&
                    data.data.objet === null &&
                    data.submit === true
                  "
                  style="text-align: left; padding-bottom: 5px"
                >
                  <strong style="color: red !important"
                    >l'objet est requis</strong
                  >
                </div>
                <br />

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
                  v-if="data.data.message === null && data.submit === true"
                  style="text-align: left; padding-bottom: 5px"
                >
                  <strong style="color: red !important"
                    >le message est requis</strong
                  >
                </div>

                <b-field class="file has-text-white">
                  <b-upload v-model="data.attachment" name="attachment">
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
                  <span v-if="data.attachment" class="file-name">
                    {{ data.attachment.name }}
                  </span>
                  <br />
                </b-field>

                <div class="columns">
                  <b-field class="column is-3">
                    <button
                      class="button is-primary is-fullwidth"
                      :class="data.loading ? 'is-loading' : ''"
                      type="submit"
                    >
                      envoyer
                    </button>
                  </b-field>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      file: {
        name: "",
      },
      data: {
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
        success: "Votre demande a été envoyée",
        error: "Quelque chose s'est mal passé. Veuiller réessayer",
        status: null,
        loading: false,
        attachment: null,
        submit: false,
      },
    };
  },
  methods: {
    checkForm: function (e) {
      const service_id = process.env.GRIDSOME_EMAILJS_SERVICE_ID;

      this.data.submit = true;

      let vm = this;
      if (this.data.data.profil === "partenaire") {
        if (
          this.data.data.structure == null ||
          this.data.data.secteur == null ||
          this.data.data.fonction == null ||
          this.data.data.site == null ||
          this.data.data.message == null
        )
          return false;
      } else {
        if (
          this.data.data.nom == null ||
          this.data.data.prenom == null ||
          this.data.data.message == null
        )
          return false;
      }

      this.data.loading = true;
      try {
        emailjs
          .sendForm(
            service_id,
            this.data.data.profil === "partenaire"
              ? process.env.GRIDSOME_EMAILJS_TEMPLATE_PARTENAIRE
              : process.env.GRIDSOME_EMAILJS_TEMPLATE_PARTICULIER,
            e.target,
            process.env.GRIDSOME_EMAILJS_USER_ID,
            this.data.data
          )
          .then(function () {
            vm.resetForm();
            vm.data.status = "Votre demande a été envoyé";
          });
      } catch (err) {
        vm.resetForm();
        vm.data.status = "Quelque chose s'est mal passé. Veuiller réessayer";
      }

      e.preventDefault();
    },
    resetForm: function (e) {
      this.data.data.nom = null;
      this.data.data.prenom = null;
      this.data.data.objet = null;
      this.data.data.structure = null;
      this.data.data.secteur = null;
      this.data.data.fonction = null;
      this.data.data.site = null;
      this.data.data.message = null;
      this.data.attachment = null;
      this.data.loading = false;
      this.data.submit = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../variables.scss";

.contact-form {
  background-image: url("./../../../static/contact/rectangle.png");
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