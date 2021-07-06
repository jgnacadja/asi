<template>
  <Layout>
    <section class="section container">
      <div class="columns is-multiline is-centered">
        <div class="column is-12 page-title">Questions fréquentes</div>
        <div class="column is-12 subtitle">
          Toutes les questions que vous vous posez sur studely
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-centered">
          <div class="column is-10"></div>
          <div class="column is-12">
            <div class="columns is-multiline is-centered is-vcentered">
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Qu’est-ce qu’une Attestation de Virement Irrévocable ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      L’Attestation de virement irrévocable (AVI) ou encore
                      connue sous le nom de caution bancaire pour études est un
                      acte délivré par toute banque ou établissement financier
                      confirmant un dépôt d’ordre de virement mensuel. Il permet
                      de justifier de moyens d’existence auprès de l’Ambassade
                      de France pour une demande de visa pour étudiant. Sa
                      valeur est actuellement estimée à 7380 euros minimum
                      (l’équivalent de 615 euros/12 mois).
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        L’Attestation de virement irrévocable est-elle
                        indispensable pour un étudiant qui souhaite poursuivre
                        ses études en France ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      OUI. Aujourd’hui, un étudiant qui demande un VISA long
                      séjour pour effectuer ses études à l’étranger doit
                      obligatoirement dans certains pays (notamment la France),
                      justifier de ses ressources financières. La plupart des
                      étudiants étrangers justifient leurs ressources au moyen
                      d’une Attestation de Virement Irrévocable (AVI), souvent
                      délivrée par une banque locale.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        En moyenne quels sont les frais supportés pour une
                        demande d’Attestation de virement irrévocable et les
                        délais de délivrance lorsque l’étudiant passe par une
                        banque locale ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      En fonction du pays d’origine, les frais auprès des
                      banques locales peuvent atteindre jusqu’à 1000 euros sur
                      une période de 12 mois et les délais de délivrance de
                      l’Attestation de Virement Irrévocable sont en moyenne de
                      deux à trois semaines. Contrairement à STUDELY qui délivre
                      le même document en 48h.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Qui fixe le montant minimal de la caution bancaire ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Il s’agit de l’application d’une décision du Ministère des
                      Affaires Etrangères en date du 9 Juillet 2003. Cette somme
                      correspond à la base mensuelle allouée aux boursiers du
                      gouvernement français.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong
                        >Quels sont les services proposés par STUDELY ?</strong
                      >
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      STUDELY propose comme services : -L’accompagnement
                      personnalisé dans vos démarches pour étudier en France -La
                      délivrance de l’Attestation de Virement Irrévocable, -Un
                      accès aux offres de recherches de logement étudiants
                      depuis votre pays d’origine -La délivrance d’un acte de
                      cautionnement locatif qui appuie votre dossier de demande
                      et garantit par la suite votre logement vis-à-vis de votre
                      bailleur.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Puis-je demander une Attestation de Virement Irrévocable
                        pour une demande de visa dans les pays de L’Union
                        Européenne autres que la France ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      L’Attestation de Virement Irrévocable délivrée par STUDELY
                      n’est valable que pour une demande de visa dans les
                      Ambassades et Consulats de France qui sont installés dans
                      les pays suivants : l’Algérie, le Bénin, la Côte d’Ivoire,
                      le Cameroun, le Mali, le Maroc, la République Démocratique
                      du Congo, la Tunisie, le Togo et le Sénégal.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Quelle est la durée de validité de l’AVI ? l’AVI
                        est-elle renouvelable ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      L’AVI est émise pour une durée maximum de douze (12) mois.
                      Une personne en stage ou effectuant une formation de moins
                      de douze mois peut faire une demande d’attestation de
                      virement irrévocable. . L’attestation de virement
                      irrévocable peut être renouvelée pour une durée précise
                      d’un (1) an.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Comment faire une demande d’Attestation Irrévocable chez
                        STUDELY ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      La première étape est l’inscription en ligne sur notre
                      plateforme : espace.studely.com et la complétion d’un
                      formulaire . Interviendra par la suite un conseiller local
                      qui vous accompagnera de vive voix dans la suite de la
                      procédure.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>L’inscription en ligne est-elle payante ?</strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Non. Elle est totalement gratuite.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Pourquoi dois-je me rendre dans les bureaux de STUDELY
                        en Local pour finaliser ma demande d’Attestation de
                        Virement Irrévocable ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Il s’agit de l’application d’une décision du Ministère des
                      Affaires Etrangères en date du 9 Juillet 2003. Cette somme
                      correspond à la base mensuelle allouée aux boursiers du
                      gouvernement français.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>Où pourrais-je payer ma caution ?</strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Dans le compte bancaire de Studely dans votre pays
                      d’origine ou via votre garant ou proche dans le compte
                      bancaire Studely en France. Renseignez-vous auprès de la
                      filiale présente dans votre pays d’origine.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Quel mode de règlement pourrais-je adopter pour le
                        paiement de ma caution ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Dépôt en espèces, virement et chèque sous réserve.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Le paiement de la caution suffit-il pour obtenir l’AVI ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Non. L’obtention de l’AVI nécessite obligatoirement le
                      dépôt de la caution ainsi que le paiement des frais de
                      services.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Je n’ai pas la totalité de la caution. Puis-je faire
                        plusieurs dépôts ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Oui. Vous pouvez faire le dépôt de votre caution pour
                      études en deux fois. Toutefois ; l‘Attestation de Virement
                      Irrévocable ne vous sera délivré qu’après réception de la
                      totalité des fonds (montant total de la caution et des
                      frais de prestations de services).
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Quand aurai-je une réponse pour ma demande d’Attestation
                        de virement irrévocable ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      L’Attestation de virement irrévocable s’obtient dans un
                      délai maximal de 48 h après réception des fonds (montant
                      total de la caution et des frais de prestations de
                      services).
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Comment suivre l’avancement de mon dossier de demande
                        d’Attestation de Virement Irrévocable ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      A tout moment et en temps réel, vous pouvez suivre
                      l’avancement de votre demande depuis votre espace
                      étudiant/client. Simple et pratique, connectez-vous depuis
                      votre téléphone ou votre ordinateur avec vos identifiants.
                      Vous pouvez également contacter nos conseillers STUDELY
                      dans votre pays de résidence en vous rapportant à la
                      Rubrique « Nous contacter » sur notre site internet.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        J’ai fait une erreur dans le formulaire d’Attestation de
                        Virement Irrévocable, puis-je le modifier après l’avoir
                        validé ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Oui. Pour ce faire, il faudra vous adresser à votre
                      conseiller local.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Je souhaite obtenir une copie de mon Attestation de
                        Virement Irrévocable.
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      La copie originale de l’AVI est à récupérer auprès du
                      conseiller local pour compléter votre dossier demande de
                      visa. Une copie est ensuite envoyée au Consulat de France
                      de votre pays et une seconde copie est disponible dans
                      votre espace personnel.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        STUDELY propose-t-elle des logements étudiants ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Non. STUDELY n’est pas un promoteur immobilier mais vous
                      accompagne dans votre recherche de logement.
                      L’accompagnement logement Studely se fait de deux manières
                      1) Après l’obtention de votre attestation de virement
                      irrévocable, Studely se porte garant du logement que vous
                      aurez trouvé lors de vos recherches, sur une durée
                      maximale de un (1) an, lorsque le coût annuel de votre
                      loyer n’excède pas le montant total de la caution déposée.
                      Attention : Offre soumise à conditions 2) Studely
                      Cherche&Trouve est un service dédié à la recherche de
                      logement à votre place. Studely se charge de rechercher un
                      logement pour vous auprès de ses partenaires immobiliers.
                      Nos équipes en local vous accompagnent de la recherche de
                      logement à la signature de contrat de bail. Nb. : Studely
                      Cherche&Trouve est un service payant au résultat : vous
                      paierez seulement si vous signez un contrat de bail. *Dans
                      certains pays, le service Studely Cherche&Trouve nécessite
                      une souscription au service de délivrance de l’Attestation
                      de virement irrévocable.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        STUDELY peut-elle utiliser ma caution pour régler mon
                        dépôt de garantie auprès du bailleur?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      OUI. Il vous faudra vous rapprocher de votre conseiller
                      clientèle pour en connaître les conditions.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Le contrat de prélèvement que je signe avant la
                        délivrance de l’acte de cautionnement autorise-t-il
                        STUDELY à régler mon loyer chaque mois à mon bailleur ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Non. Ce contrat de prélèvement est un acte juridique par
                      lequel l’étudiant donne l’autorisation à STUDELY de
                      prélever sur sa caution dans les cas d’impayés de loyers,
                      les montants qu’il doit à son bailleur. Cette opération ne
                      se fera que sur saisie et notification préalable du
                      bailleur.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>L’acte de cautionnement est-il payant ?</strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      L’acte de cautionnement est totalement gratuit. Toutefois
                      ne sont éligibles à l’octroi de l’acte de cautionnement
                      que les étudiants qui ont une Attestation de virement
                      irrévocable d’une durée de douze (12) mois couvrant le
                      montant total du loyer annuel.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Encore dans mon pays d’origine, puis-je réclamer à
                        STUDELY l’intégralité de ma caution pour études après
                        l’obtention de mon visa?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Non. Sauf disposition contraire. En effet, en vertu de
                      notre contrat de prestations de service et de nos
                      engagements auprès de l’Ambassade; STUDELY s’est engagée à
                      bloquer dans un compte en France, la caution de l’étudiant
                      jusqu’à son installation en France. A l’ouverture de son
                      compte, l’étudiant transmet son RIB à l’adresse
                      rib@studely.com et ses virements se font mensuellement à
                      hauteur de 615 euros sur 12 mois (ou plus, en fonction du
                      montant de la caution).
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Comment rentrer en possession de ma caution étudiante
                        une fois en France ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Par l’ouverture d’un compte bancaire dans un établissement
                      bancaire de votre choix et l’envoi de votre relevé
                      d’identité bancaire à l’adresse suivante :
                      rib@studely.com.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Puis-je fournir un relevé d’identité bancaire autre que
                        le mien ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Oui. Dans l’attente d’une ouverture de votre compte
                      bancaire personnel, vous pouvez nous communiquer le relevé
                      d’identité bancaire d’un proche ou toute personne de
                      confiance. Pour ce faire, merci de contacter notre équipe
                      en France à : contact@studely.com afin de connaitre la
                      procédure à suivre.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Est-ce possible de réclamer l’intégralité de ma caution
                        en seul virement une fois en France ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Non. L’Attestation de virement irrévocable à laquelle vous
                      avez souscrite détermine les modalités de virement
                      applicables. Vous ne recevrez donc que 615 euros chaque
                      mois jusqu’à l’épuisement des 12 mensualités.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Quelle est la date qui est prise en compte pour le
                        commencement de mes virements ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Votre premier virement sera effectué à partir de la date
                      de communication de votre relevé d’identité bancaire.
                      Exemple : j’ai reçu mon attestation de virement
                      irrévocable le 5 Avril, je suis arrivé(e) en France, le
                      1er Mai et j’ai communiqué mon relevé d’identité bancaire
                      le 20 juin. Dans ce cas de figure, la date du 20 juin sera
                      prise en compte votre relevé d’identité bancaire. Vous
                      recevrez le premier virement correspondant au mois de Juin
                      dans le cours de ce mois et les suivants au plus tard
                      chaque 30 du mois.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Les fonds déposés ont-ils pour vocation de régler mes
                        frais de scolarité ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      En principe non, toutefois l’utilisation de votre caution
                      vous revient.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Mon visa étudiant m’a été refusé. Que dois-je faire ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      En cas de refus de visa, vous avez deux possibilités qui
                      s’offrent à vous. La première est le remboursement et la
                      seconde est la reconduction d’AVI.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>La procédure de remboursement</strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      L’étudiant ou son représentant légal s’il est mineur,
                      déclenche la procédure de remboursement et adresse au
                      conseiller local, une demande de remboursement accompagnée
                      de la notification de refus de visa ; soit par courriel,
                      soit en se rendant dans les locaux de STUDELY. La caution
                      bancaire pour études est intégralement remboursée.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item faq-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        A qui est effectué le remboursement de la caution ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Le remboursement de la caution est exécuté au bénéfice de
                      la personne qui aura fait, soit le dépôt de la caution
                      auprès de la banque locale, soit le virement depuis la
                      France, sauf demande expresse du client pour un changement
                      de bénéficiaire. Il devra dans ce cas de figure donner une
                      procuration à cette personne accompagnée de leurs pièces
                      d’identités respectives.
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div
                class="column is-10-desktop is-12-mobile has-text-left carrier-item"
              >
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
                    <div class="column is-10 has-text-justified margin-title">
                      <strong>
                        Quels sont les différentes voies de remboursements et
                        les délais y afférant ?
                      </strong>
                    </div>
                    <div class="column is-2">
                      <b-button type="is-white" class="is-pulled-right">
                        <figure class="image is-32x32">
                          <g-image src="~/assets/faq/expend.svg" height="20" />
                        </figure>
                      </b-button>
                    </div>
                  </div>

                  <div
                    class="panel-block has-background-white columns is-multiline has-background-white is-centered has-text-justified"
                  >
                    <div class="column is-12">
                      Par la mise à disposition : les fonds sont immédiatement
                      disponibles après la communication du justificatif de mise
                      à disposition. Par le virement : les fonds sont
                      disponibles dans un délai de cinq (5) jours ouvrés à
                      compter de la communication du justificatif de virement.
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "FAQ",
    meta: [
      {
        name: "description",
        content:
          "La FAQ de Studely. Comment pouvons-nous vous aider pour concrétiser votre projet d’études en France ?",
      },
    ],
  },
};
</script>

<style>
.column {
  padding: 2.5rem;
}
.card {
  padding: 0rem;
}

.faq-item {
  margin-bottom: 10px;
}

@media only screen and (max-width: 768px) {
  .margin-title {
    margin-right: 6%;
  }
}
</style>
<style scoped lang="scss">
@import "../variables.scss";
</style>
