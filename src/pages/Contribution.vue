<template>
  <Layout>
    <section class="is-flex is-justify-content-space-between container pt-4 contribution">
      <section class="is-flex is-flex-direction-column is-justify-content-space-between description_how_to_do pt-5">
        <h1 class="m-0 is-size-3 title">Faites nous part de vos remarques ou suggestions.</h1>
        <p class="is-size-6 mt-3 mb-5 description">
          Avez-vous remarqué des informations incohérentes ou presque manquante ? 
          Ajouter sa pierre à l'édifice en nous envoyant un mail 
        </p>
        <figure class="contributor_figure has-text-centered"> 
          <img src="../assets/contribution/contributor.png" title="Une erreur ? Un avis ? N'hésitez pas et signaler le nous 😊" 
              alt="Faites nous part de vos remarques ou suggestions" class="contributor"/>
          <span class="contribution_decoration">
            <img src="../assets/contribution/contribution_decoration.svg" alt=""/>
          </span>
        </figure>
      </section>
      <form class="is-flex is-flex-direction-column is-align-items-center p-5 ml-5 form_contributor">
        <input class="p-3 mb-2" type="text" placeholder="Nom complet">
        <input class="p-3  mb-2" type="email" placeholder="Email">
        <section class="is-flex is-flex-direction-column is-justify-content-center format_select mb-2">
          <select class="p-3">
            <option>Selectionner votre profession</option>
            <option>CEO</option>
            <option>Employé</option>
            <option>Manager</option>
          </select>
        </section>
        <input class="p-3 mb-2" type="text" placeholder="Objet">
        <textarea class="p-5 mb-2 yoursuggestion" placeholder="Message"></textarea>
        <button class="button p-5 mb-2">Envoyer</button>
      </form>
    </section>
  </Layout>
</template>

<script>
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
      & , &::before{
        background: rgba(38, 126, 195, 0.1);
      }
      &::before{
        content : "";
        display: block;
        position: absolute;
        height: 30vh;
        margin-left: calc((960px - 100vw) / 2);
        width: calc((100vw - 960px) / 2);
      }
      & .contributor{
        margin-top: -10vh;
        height: 40vh;
      }
      & .contribution_decoration{
        display: block;
        margin-top: -7vh;
        text-align: left;
        & img{
          height: 10vh;
        }
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
    background: white;
    position: relative;
    @include desktop{
      width: 50vw;
    }
    @include tablet{
      width: 80vw;
      margin-left: 0 !important;
    }
    @include mobile{
      margin-left: 0 !important;
    }
    & input, & .format_select, & select, & textarea {
      background: #F5F5F5;
      color: #888888;
      outline: none;
      width: 100%;
    }
    & input, & .format_select,& textarea {
      border-radius: 4px;
      border: 1px solid #dbdbdb;
      max-height: 89px;
      min-height: 69px;
      @include desktop{
        height: 13%;
      }
      &:hover,&:focus{
        border-color: #b5b5b5;
      }
      @include touch{
        height: 7vh;
        margin-bottom: 10px  !important;
      }
    }
    & .format_select{
      & select {
        border: none;
        width: 98%;
        color: #888888;
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
</style>