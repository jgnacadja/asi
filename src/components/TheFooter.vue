<template>
  <footer id="footer" class="footer has-background-success has-text-white">
    <div class="contain">
      <div class="columns is-variable is-desktop has-text-white">
        <div class="column is-3-desktop is-two-thirds-tablet is-offset-1">
          <h3>Newsletter</h3>
          <br />
          <b-field>
            <iframe
              title="mailjet"
              class="mj-w-res-iframe bfieldStyle"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://app.mailjet.com/widget/iframe/2l0Z/F86"
              width="100%"
              height="220px"
            ></iframe>
          </b-field>
          <br />
          <h6>
            <strong :class="bclass" :v-show="message">{{ message }}</strong>
          </h6>
          Suivez-nous &nbsp;
          <a href="https://www.facebook.com/StudelyFrance/">
            <b-icon
              pack="fab"
              icon="facebook"
              size="is-medium"
              type="is-white"
            /> </a
          >&nbsp;
          <a href="https://www.instagram.com/studelyofficiel/">
            <b-icon
              pack="fab"
              icon="instagram"
              size="is-medium"
              type="is-white"
            /> </a
          >&nbsp;
          <a href="https://twitter.com/studelyofficiel">
            <b-icon
              pack="fab"
              icon="twitter"
              size="is-medium"
              type="is-white"
            />
          </a>
          &nbsp;
          <a href="https://www.linkedin.com/company/linkedindestudely">
            <b-icon
              pack="fab"
              icon="linkedin"
              size="is-medium"
              type="is-white"
            /> </a
          >&nbsp;
          <a href="https://www.youtube.com/channel/UCpd-GbAseIuTLtutXSy8dAA">
            <b-icon
              pack="fab"
              icon="youtube"
              size="is-medium"
              type="is-white"
            />
          </a>
          &nbsp;
        </div>
        <div class="column" style="padding-top: 3.3em">
          <div class="columns is-variable is-centered">
            <div class="column is-4 is-offset-1">
              <ul>
                <li>
                  <g-link to="/qui-sommes-nous/">Qui sommes-nous?</g-link>
                </li>
                <li>
                  <g-link to="/partenaires/">Devenir Partenaire</g-link>
                </li>
                <li>
                  <g-link to="/service-client/">Contactez-nous</g-link>
                </li>
              </ul>
            </div>
            <div class="column is-4">
              <ul>
                <li>
                  <g-link to="/on-recrute/">Carrières</g-link>
                </li>
                <li>
                  <g-link to="/espace-documentaire"
                    >Ressources documentaires</g-link
                  >
                </li>
                <li>
                  <g-link to="/">Plan du site</g-link>
                </li>
              </ul>
            </div>
            <div class="column is-4">
              <ul>
                <li>
                  <g-link to="/faq/">FAQ</g-link>
                </li>
                <li>
                  <g-link to="/mentions-legales/">Mentions légales</g-link>
                </li>
                <li>
                  <g-link to="/cgu/">CGU</g-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
<script>
export default {
  data() {
    return {
      isLoading: false,
      bfieldStyle: "",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      email: "",
      ListeID: process.env.GRIDSOME_MAILJET_LIST_ID,
      form: {
        type: "",
      },
      message: "",
      bclass: "is-size-7",
    };
  },
  mounted() {
    //console.log(process.env.GRIDSOME_MAILJET_LIST_ID);
    var url = location.href; // = location.href
    var parts = url.split("/").slice(2);
    //console.log("/* ... */");

    if (parts[1] !== "404") {
      document.getElementById("footer").style.cssText =
        "position: relative !important";
    }
  },
  methods: {
    checkForm: function (e) {
      this.message = "";
      this.bfieldStyle = "";

      if (this.email === "") {
        this.message = "Votre email est requis";
        this.bclass = "is-size-7 has-text-danger";
        this.bfieldStyle = "is-marginless";
      } else if (!this.reg.test(this.email) && this.email !== "") {
        this.message = "Taper une adresse mail valide";
        this.bclass = "is-size-7 has-text-danger";
        this.bfieldStyle = "is-marginless";
      } else {
        this.message = "";
      }
      //console.log(this.message);

      if (this.message === "") {
        this.isLoading = true;
        let email = this.email;

        var axios = require("axios");

        var data = JSON.stringify({
          mail: this.email,
          list_id: process.env.GRIDSOME_MAILJET_LIST_ID,
          user: process.env.GRIDSOME_MAILJET_USER,
          pwd: process.env.GRIDSOME_MAILJET_PASS,
          contact_url: process.env.GRIDSOME_MAILJET_API_CONTACT,
          mail_list_url: process.env.GRIDSOME_MAILJET_API_LIST_RECIPIENT,
          is_excluded_from_campaigns:
            process.env.GRIDSOME_MAILJET_IS_EXCLUDED_FROM_CAMPAIGNS,
          is_unsubscribed: process.env.GRIDSOME_MAILJET_IS_UNSUBSCRIBED,
        });

        var config = {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          url: process.env.GRIDSOME_MAILJET_API_SERVICE,
          data: data,
        };

        axios(config)
          .then((res) => {
            this.isLoading = false;
            //console.log(res)
            switch (res.data.code) {
              case 400: {
                this.message = "Vous êtes déjà abonné !";
                this.bclass = "is-size-7 has-text-danger";
                this.bfieldStyle = "is-marginless";
                break;
              }
              case 401: {
                this.message =
                  "Quelque chose s'est mal passer ! Merci de réessayer";
                this.bclass = "is-size-7 has-text-danger";
                this.bfieldStyle = "is-marginless";
                break;
              }
              default: {
                this.message = "Vous êtes maintenant abonné à Studely";
                this.bclass = "is-size-7 has-text-white";
                this.bfieldStyle = "is-marginless";
              }
            }
          })
          .catch((error) => {
            this.isLoading = false;
            this.message = error;
            this.bclass = "is-size-7 has-text-danger";
            this.bfieldStyle = "is-marginless";
          });
      }
      e.preventDefault();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

a {
  color: $white;
  line-height: 2.5em;
}

.footer {
  font-family: $family-sans-serif;
}

.rounded {
  border-radius: 12px;
}

/* @media only screen and (min-width: 769px) {
  #footer {
    position: fixed;
  }
} */

@media screen and (max-width: 1023px) {
  #footer {
    position: relative !important;
    top: auto;
    left: auto;
    height: auto;
  }
}

@media screen and (max-width: 767px) {
  #content {
    padding-bottom: 0;
  }
}

#footer {
  height: 26em;
}

@media screen and (min-width: 415px) and (max-width: 768px) {
  #footer {
    height: 54em;
  }
}

@media screen and (max-width: 414px) {
  #footer {
    height: 53em;
  }
}
</style>
