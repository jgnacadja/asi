<template>
  <Layout>
    <section class="is-flex is-justify-content-space-between px-6 py-3 contribution">
      <section class="description_how_to_do">
        <h1 class="m-0 is-size-3 title">Faites nous part de vos remarques ou suggestions.</h1>
        <p class="is-size-6 mt-3 mb-5">
          Avez-vous remarqué des informations incohérentes ou presque manquante ? 
          Ajouter sa pierre à l'édifice en nous envoyant un mail 
        </p>
        <figure class="contributor_figure"> 
          <img src="../assets/contributo.png" title="Une erreur ? Un avis ? N'hésitez pas et signaler le nous 😊" 
              alt="Faites nous part de vos remarques ou suggestions"/>
        </figure>
      </section>
      <form class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between
                    px-6 py-2 ml-5 form_contributor">
        <input class="p-3" type="text" placeholder="Nom complet">
        <input class="p-3" type="email" placeholder="Email">
        <section class="format_select pr-3">
          <select class="p-3">
            <option>Selectionner votre profession</option>
            <option></option>
          </select>
        </section>
        <input class="p-3" type="text" placeholder="Objet">
        <textarea class="p-5 yoursuggestion" placeholder="Message"></textarea>
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
    max-height: 70vh;
  }
  .description_how_to_do{
    width: 50vw;
  }
  .title{
    color: $color_primary;
  }
  .contributor_figure img{
    height: 40vh;
  }
  form.form_contributor {
    background: white;
    width: 50vw;
    & input, & .format_select, & select, & textarea {
      background: #F5F5F5;
      color: #888888;
      outline: none;
    }
    & input, & .format_select,& textarea {
      width: 100%;
      border-radius: 4px;
      border: 1px solid #dbdbdb;
      &:hover,&:focus{
        border-color: #b5b5b5;
      }
    }
    & .format_select{
      & select {
        border: none;
        width: 95%;
        color: #888888;
      }
    }
    & .button{
      width: 100%;
      background: $color_orange;
      color: white;
    }
    & .yoursuggestion{
      height: 20vh;
    }
  }
</style>