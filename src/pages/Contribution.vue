<template>
  <Layout>
    <section class="is-flex is-justify-content-space-between container pt-4 contribution">
      <section class="is-flex is-flex-direction-column is-justify-content-space-between description_how_to_do pt-5">
        <h1 class="m-0 is-size-3 title">Faites nous part de vos remarques ou suggestions.</h1>
        <p class="is-size-6 mt-3 mb-5 description">
          Avez-vous remarqué des informations incohérentes ou manquantes ? 
          Ajoutez votre pierre à l'édifice en nous envoyant un mail 
          <g-link class="has-text-black has-text-link is-size-7" to="/mentions-legales/">En savoir plus</g-link>
        </p>
        <figure class="contributor_figure has-text-centered"> 
          <img src="../assets/contribution/contributor.png" title="Une erreur ? Un avis ? N'hésitez pas et signaler le nous 😊" 
              alt="Faites nous part de vos remarques ou suggestions" class="contributor"/>
        </figure>
      </section>
      <form @submit.prevent="sendEmail"
        class="is-flex is-flex-direction-column is-align-items-center p-5 ml-5 form_contributor" id="form">
        <input v-model="name" name="name"  id="name"  type="text" placeholder="Nom complet" required
          class="p-3 mb-2 box">
        <input v-model="email" name="email" id="email" type="email" placeholder="Email" required
          class="p-3  mb-2 box">
        <section class="is-flex is-flex-direction-column is-justify-content-center format_select mb-2 box">
          <select class="p-3" v-model="profession" id="profession" name="profession"  placeholder="Profession" required>
            <option value="Selectionner votre profession">Selectionner votre profession</option>
            <option value="CEO">CEO</option>
            <option value="Employé">Employé</option>
            <option value="Manager">Manager</option>
          </select>
        </section>
        <input class="p-3 mb-2 object box" type="text" v-model="object" id="object" name="object"
                placeholder="Objet" required>
        <textarea  v-model="message"  name="message" id="message" placeholder="Message" 
          class="p-5 px-3 mb-2 yoursuggestion box" required></textarea>
        <button class="button p-5 mb-2" :class="loader ? 'is-loading' : ''">Envoyer</button>
        <span id="result"></span>
      </form>
    </section>
  </Layout>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  metaInfo: {
    title: "Contribution",
    meta: [
      {
        name: "Remarques et suggestions",
        content: "Faites nous part de vos remarques ou suggestions.",
      },
    ],
  },
  data() {
    return {
      name: null,
      email: null,
      profession : "Selectionner votre profession",
      object: null,
      message: null,
      themessage: null,
      loader :  false,
    };
  },
  methods: {
    sendEmail: function (e) {
      var vm =this;
      vm.loader= true
      emailjs
        .sendForm(
          "service_dwyfsrs",
          "template_xw6pcdo",
          e.target,
          "user_MXWdoD0LyXWFrrt1IixF0"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            document.getElementById("result").innerHTML ="<span style='color:green'>Votre message a été envoyé.</span>";
            document.getElementById("form").reset();
            vm.loader= false
          },
          (error) => {
            console.log("FAILED...", error);
            document.getElementById("result").innerHTML = "<span style='color:red'>Problème de connection, vérifiez votre connexion.</span>";
          }
        );
    },
  },
  mounted : () =>{
    
  },
};
</script>
<style scoped lang="scss">
  @import "../variables.scss";
  @import "~bulma/sass/utilities/initial-variables";
  @import "~bulma/sass/utilities/derived-variables";
  @import "~bulma/sass/utilities/mixins";
  $color_primary: #267ec3;
  $color_orange: #ff9b26;
  .contribution{
    @include desktop{
      height: 75vh;
      max-height: 75vh;
    }
    @include touch{
      flex-direction: column !important;
      justify-content: flex-start !important;
      width: 80vw;
      padding-top:0 !important;
      min-height: 80vh;
    }
    @include mobile{
      width: 100vw;
    }
  }
  .description_how_to_do{
    @include desktop{
      width: 50vw;
      height: 50vh;
    }
    @include touch{
      margin: auto;
    }
    @media screen and (max-width: 859px){
      padding: 1.5rem;
    }
    & .title{
      color: $color_primary;
      letter-spacing: -0.015em;
      font-size: 42px;
      @include touch{
        width: 100% !important;
      }
      @media screen and (max-width: 375px){
        font-size: 25px !important;
      }
    }
    & .contributor_figure{
      height: 30vh;
      margin-top: 8vh;
      @include touch{
        display: none;
      }
      & .contributor{
        margin-top: -10vh;
        height: 40vh;
      }
    }
    & p{
      @include touch{
        letter-spacing: 0.015em;
      }
      @media screen and (max-width: 375px){
        font-size: 14px !important;
      }
    }
  }
  form.form_contributor {
    position: relative;
    @include desktop{
      width: 50vw !important;
    }
    @include tablet{
      width: 80vw;
      margin-left: 0 !important;
    }
    @include mobile{
      margin-left: 0 !important;
    }
    & input, & .format_select, & select, & textarea {
      color: #888888;
      outline: none;
      border: none;
      width: 100%;
    }
    & input, & .format_select,& textarea {
      border-radius: 4px;
      // border: 1px solid #dbdbdb;
      max-height: 89px;
      @include desktop{
        height: 13%;
      }
      &:hover,&:focus{
        border-color: #b5b5b5;
      }
      @include touch{
        height: 7vh;
        min-height: 69px;
        margin-bottom: 10px  !important;
      }
    }
    & .format_select{
      & select {
        border: none;
        width: 98%;
        background: none;
      }
    }
    & .yoursuggestion{
      max-height: 198px;
      @include desktop{
        height: 36%;
      }
      @include touch{
        height: 21vh;
        min-height: 198px;
        margin-bottom: 10px  !important;
      }
    }
    & .button{
      width: 100%;
      background: $color_orange;
      color: white;
    }
  }
  .d-none{
    display: none !important;
  }
</style>