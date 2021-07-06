<template>
  <Layout>
    <section class="section has-text-centered is-paddingless">
      <h1 class="page-title has-text-primary">Mon assurance</h1>
      <br />
      <br />
      <div class="subtitle">
        J’opte pour une assurance complète pour étudier à l’étranger l’esprit
        tranquille !
      </div>
      <br />
      <br />
      <div
        class="columns is-vcentered is-mobile has-text-centered is-centered fond-avis"
      >
        <div class="column is-6-desktop is-8-tablet is-10-mobile is-mobile">
          <figure class="image is-16by9">
            <iframe
              title="video institutionnelle"
              class="has-ratio"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/0bJ2aee7bJc"
              allowfullscreen
              autoplay
            ></iframe>
          </figure>
        </div>
      </div>
    </section>

    <section
      class="section container has-text-centered"
      style="margin-top: 3rem"
    >
      <div class="columns is-centered is-mobile">
        <div
          class="column is-10-desktop is-12-mobile has-text-centered is-bordered"
        >
          <div class="is-padding">
            <h3 style="line-height: 1.5em">
              Réaliser son projet étudiant en France est une expérience unique.
              <br />Néanmoins, il est essentiel de se protéger des accidents de
              la vie pour profiter pleinement de son séjour.
            </h3>
          </div>
        </div>
      </div>
    </section>

    <section class="section container has-text-centered is-paddingless">
      <h1 class="title has-text-primary">Stud'Assur c'est :</h1>
      <br />
      <br />
      <div class="columns is-variable is-mobile has-text-centered is-centered">
        <div class="column is-4" @click="info('voyage')">
          <div class="columns is-centered is-multiline is-mobile">
            <div ref="voyage" class="column is-9 is-active-service">
              <figure class="image">
                <g-image
                  src="~/assets/nos-services/assurance/4-assurancre.jpg"
                  width="240"
                  fit="inside"
                />
              </figure>
            </div>
            <div class="column is-12 has-text-primary">
              <h3 ref="text-voyage" class="section-title has-text-danger">
                Assurance voyage
              </h3>
            </div>
          </div>
        </div>
        <div class="column is-4" @click="info('habitation')">
          <div class="columns is-centered is-multiline is-mobile">
            <div ref="habitation" class="column is-7">
              <figure class="image">
                <g-image
                  src="~/assets/nos-services/assurance/habitation.jpg"
                  width="240"
                  fit="inside"
                />
              </figure>
            </div>
            <div class="column is-12">
              <strong ref="text-habitation" class="has-text-grey content-16"
                >Assurance habitation</strong
              >
            </div>
          </div>
        </div>
        <div class="column is-4" @click="info('sante')">
          <div class="columns is-centered is-multiline is-mobile">
            <div ref="sante" class="column is-7">
              <figure class="image">
                <g-image
                  src="~/assets/nos-services/assurance/sante.jpg"
                  width="240"
                  fit="inside"
                />
              </figure>
            </div>
            <div class="column is-12 has-text-centered">
              <strong ref="text-sante" class="has-text-grey content-16"
                >Complémentaire santé</strong
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Assurance Voayge -->
    <section v-if="service == 'voyage'" id="voyage" class="section container">
      <br />
      <br />
      <div class="columns is-variable is-8 is-multiline is-centered is-mobile">
        <div class="column is-half-desktop is-12-mobile">
          <div
            class="columns is-multiline is-mobile is-centered has-text-centered"
          >
            <div class="column is-12">
              <g-image
                class="ligne-1"
                src="~/assets/nos-services/assurance/voyage.svg"
                width="92"
              />
            </div>
            <div
              class="column is-two-thirds-desktop is-12-mobile has-text-justified content-16 is-bordered has-background-primary has-text-white"
            >
              <div class="is-padding">
                Stud’Assur vous propose une formule d’assurance complète depuis
                votre pays d’origine.
                <br />
                <br />En fonction de vos besoins, choisissez celle qui vous
                correspond :
                <br />
                <br />
                <div class="columns has-text-left">
                  <div class="column is-8 is-offset-1">
                    <ul
                      style="
                        line-height: 2rem;
                        list-style: disc;
                        padding-left: 1em;
                      "
                    >
                      <li>Pour une durée d’un mois</li>
                      <li>Pour une durée de 3 mois</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-half-desktop is-12-mobile">
          <div class="columns is-multiline is-mobile is-vcentered">
            <div clas="column is-12">
              <h2 class="has-text-primary">
                Ce que je gagne avec l’Assurance Voyage Stud’Assur :
              </h2>
            </div>
            <div class="column is-12 content-16 has-text-justified">
              <ul style="line-height: 2.25rem">
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Une attestation d’assurance délivrée immédiatement par le
                    conseiller*.</span
                  >
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Une assurance valable pour l’obtention de mon Visa étudiant
                    en France.
                  </span>
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Une couverture des frais médicaux jusqu'à 30 000€.</span
                  >
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Mon assurance remboursée en cas de refus de visa.</span
                  >
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Un rapatriement médical vers le lieu de résidence.</span
                  >
                </li>
              </ul>
              <br />
              <br />

              <span>*Après paiement de la prime d’assurance</span>
            </div>
          </div>
        </div>
        <div id="voyage" class="column is-10-desktop is-12-tablet is-12-mobile">
          <!-- voyage / comment ça marche  -->
          <div
            class="columns is-mobile is-centered has-text-centered"
            style="margin-top: 6.8em"
          >
            <div class="column is-12 has-text-primary">
              <h2>Comment ça marche ?</h2>
            </div>
          </div>

          <div class="columns is-multiline is-centered">
            <div class="column is-12"></div>
            <div class="column is-12-desktop is-12-mobile">
              <div
                class="columns is-multiline is-mobile has-text-centered is-centered content-16"
              >
                <div class="column is-2-desktop is-8-mobile">
                  <div class="columns is-centered is-multiline">
                    <div class="column is-7-desktop is-9-tablet is-10-mobile">
                      <figure class="image is-square">
                        <g-image
                          src="~/assets/nos-services/assurance/conseiller.svg"
                          width="134"
                          fit="inside"
                          class="assurance-svg"
                        />
                      </figure>
                    </div>
                    <div class="column is-12">
                      Je me rapproche de mon conseiller Studely ou le contacte
                      via Mon Espace Studely
                    </div>
                  </div>
                </div>
                <div class="column is-1-desktop is-hidden-mobile">
                  <!-- trait -->
                  <div class="columns is-vcentered is-centered is-multiline">
                    <div class="column is-12"></div>
                    <div class="column is-12"></div>
                    <div class="column is-12"></div>
                    <div class="column is-12"></div>
                    <div class="column is-12"></div>
                    <div class="column is-12"></div>
                    <div class="column is-12">
                      <figure class="image">
                        <g-image
                          src="~/assets/nos-services/assurance/path.png"
                          width="134"
                          fit="inside"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="column is-2-desktop is-8-mobile">
                  <div class="columns is-centered is-multiline">
                    <div class="column is-7-desktop is-9-tablet is-10-mobile">
                      <figure class="image is-square">
                        <g-image
                          src="~/assets/nos-services/assurance/carte.svg"
                          width="134"
                          fit="inside"
                        />
                      </figure>
                    </div>
                    <div class="column is-12">
                      Je paie ma prime d'assurance habitation à travers Studely
                    </div>
                  </div>
                </div>
                <div class="column is-1-desktop is-hidden-mobile">
                  <!-- trait -->
                  <div class="column is-12"></div>
                  <div class="column is-12"></div>
                  <div class="column is-12"></div>
                  <div class="column is-12"></div>
                  <div class="column is-12"></div>
                  <div class="column is-12"></div>

                  <figure class="image">
                    <g-image
                      src="~/assets/nos-services/assurance/path.png"
                      width="134"
                      fit="inside"
                    />
                  </figure>
                </div>
                <div class="column is-2-desktop is-8-mobile">
                  <div class="columns is-centered is-multiline">
                    <div class="column is-7-desktop is-9-tablet is-10-mobile">
                      <figure class="image is-square">
                        <g-image
                          src="~/assets/nos-services/assurance/attestattion.svg"
                          width="134"
                          fit="inside"
                          class="assurance-svg"
                        />
                      </figure>
                    </div>
                    <div class="column is-12">
                      Je reçois mon attestation préalable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="columns is-mobile is-centered has-text-centered"
            style="margin-top: 4.3em"
          >
            <div class="column is-3-desktop is-7-mobile is-centered">
              <figure class="image">
                <g-image
                  src="~/assets/nos-services/assurance/group-picto-ligne.svg"
                  width="70"
                  fit="inside"
                />
              </figure>
            </div>
          </div>

          <div
            class="columns is-variable is-3 is-mobile is-centered has-text-centered content-16"
          >
            <div class="column is-6 is-centered">
              En cas d’obtention du Visa, j'intègre mon logement en France, mon
              attestation d’habitation définitive en main
            </div>
            <div class="column is-6 is-centered">
              En cas de refus de Visa, je présente le justificatif et je serai
              remboursé(e)
            </div>
          </div>

          <div
            class="columns is-mobile is-centered has-text-centered"
            style="margin-top: 4.3em"
          >
            <div class="column is-12 content-24">
              <strong>
                Besoin de plus de précisions sur les deux formules Assurance
                voyage de Studely ?
              </strong>
            </div>
          </div>
          <div class="columns is-mobile is-centered has-text-centered">
            <div class="column is-narrow">
              <b-button
                tag="a"
                href="https://espace.studely.com"
                type="is-primary"
                size="is-large"
              >
                <strong>Je contacte mon conseiller</strong>
              </b-button>
            </div>
          </div>
          <div
            class="columns is-multiline is-mobile is-centered has-text-centered"
          >
            <div class="column is-8">
              <span class="content-14">En partenariat avec :</span>
            </div>
            <div class="column is-12">
              <div class="columns is-centered">
                <figure class="column is-6">
                  <g-image
                    src="~/assets/nos-services/assurance/smerra.png"
                    width="134"
                    fit="inside"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Assurance habitation -->
    <section
      v-if="service == 'habitation'"
      id="habitation"
      class="section container"
    >
      <br />
      <br />
      <div class="columns is-variable is-8 is-multiline is-centered is-mobile">
        <div class="column is-half-desktop is-12-mobile">
          <div
            class="columns is-multiline is-mobile is-centered has-text-centered"
          >
            <div class="column is-12">
              <g-image
                class="ligne-1"
                src="~/assets/nos-services/assurance/habitation.svg"
                width="92"
              />
            </div>
            <div
              class="column is-10 has-text-justified is-bordered has-background-primary has-text-white content-16"
            >
              <div class="is-padding">
                L’assurance habitation permet de couvrir votre lieu d’habitation
                et de son contenu contre les risques locatifs (principalement
                dégâts des eaux, incendies, etc) et inclut une garantie
                responsabilité civile en vous protégeant en cas de dommage à un
                tiers. En France, cette assurance est obligatoire avant
                d’intégrer un logement dans une résidence.
              </div>
            </div>
          </div>
        </div>
        <div class="column is-half-desktop is-12-tablet is-12-mobile">
          <div class="columns is-multiline is-mobile is-vcentered">
            <div class="column is-12">
              <h2 class="has-text-primary">
                Pourquoi assurer mon logement en France avec Stud’Assur?
              </h2>
            </div>
            <div class="column is-12 content-16 has-text-left">
              <ul style="line-height: 2.25rem">
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Une responsabilité civile assurée.</span
                  >
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Un service accessible à partir de 39€/an(soit
                    2,92€/mois).</span
                  >
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Une couverture étendue aux colocataires sans frais
                    supplémentaires.
                  </span>
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Une assistance 7j/7 et 24h/24 en cas de sinistre.</span
                  >
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Mes frais remboursés en cas de refus de Visa.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="voyage" class="column is-12-desktop is-12-tablet is-12-mobile">
          <div
            class="columns is-mobile is-centered has-text-centered"
            style="margin-top: 6.8em"
          >
            <div class="column is-12 has-text-primary">
              <h2>Comment ça marche ?</h2>
            </div>
          </div>

          <div class="columns is-multiline is-centered">
            <div class="column is-12"></div>
            <div class="column is-12-desktop is-12-mobile">
              <div
                class="columns is-multiline is-mobile has-text-centered is-centered content-16"
              >
                <div class="column is-2-desktop is-8-mobile">
                  <div class="columns is-centered is-multiline">
                    <div class="column is-7-desktop is-9-tablet is-10-mobile">
                      <figure class="image is-square">
                        <g-image
                          src="~/assets/nos-services/assurance/conseiller.svg"
                          width="134"
                          fit="inside"
                          class="assurance-svg"
                        />
                      </figure>
                    </div>
                    <div class="column is-12">
                      Je me rapproche de mon conseiller Studely ou le contacte
                      via Mon Espace Studely
                    </div>
                  </div>
                </div>
                <div class="column is-1-desktop is-hidden-mobile">
                  <!-- trait -->
                  <div class="columns is-vcentered is-centered is-multiline">
                    <div class="column is-12"></div>
                    <div class="column is-12"></div>
                    <div class="column is-12"></div>
                    <div class="column is-12"></div>
                    <div class="column is-12"></div>
                    <div class="column is-12"></div>
                    <div class="column is-12">
                      <figure class="image">
                        <g-image
                          src="~/assets/nos-services/assurance/path.png"
                          width="134"
                          fit="inside"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="column is-2-desktop is-8-mobile">
                  <div class="columns is-centered is-multiline">
                    <div class="column is-7-desktop is-9-tablet is-10-mobile">
                      <figure class="image is-square">
                        <g-image
                          src="~/assets/nos-services/assurance/carte.svg"
                          width="134"
                          fit="inside"
                        />
                      </figure>
                    </div>
                    <div class="column is-12">
                      Je paie ma prime d'assurance habitation à travers Studely
                    </div>
                  </div>
                </div>
                <div class="column is-1-desktop is-hidden-mobile">
                  <!-- trait -->
                  <div class="column is-12"></div>
                  <div class="column is-12"></div>
                  <div class="column is-12"></div>
                  <div class="column is-12"></div>
                  <div class="column is-12"></div>
                  <div class="column is-12"></div>

                  <figure class="image">
                    <g-image
                      src="~/assets/nos-services/assurance/path.png"
                      width="134"
                      fit="inside"
                    />
                  </figure>
                </div>
                <div class="column is-2-desktop is-8-mobile">
                  <div class="columns is-centered is-multiline">
                    <div class="column is-7-desktop is-9-tablet is-10-mobile">
                      <figure class="image is-square">
                        <g-image
                          src="~/assets/nos-services/assurance/attestattion.svg"
                          width="134"
                          fit="inside"
                          class="assurance-svg"
                        />
                      </figure>
                    </div>
                    <div class="column is-12">
                      Je reçois mon attestation préalable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="columns is-mobile is-centered has-text-centered"
            style="margin-top: 4.3em"
          >
            <div class="column is-3-desktop is-7-mobile is-centered">
              <figure class="image">
                <g-image
                  src="~/assets/nos-services/assurance/group-picto-ligne.svg"
                  width="70"
                  fit="inside"
                />
              </figure>
            </div>
          </div>

          <div
            class="columns is-variable is-3 is-mobile is-centered has-text-centered content-16"
          >
            <div class="column is-6 is-centered">
              En cas d’obtention du Visa, j'intègre mon logement en France, mon
              attestation d’habitation définitive en main
            </div>
            <div class="column is-6 is-centered">
              En cas de refus de Visa, je présente le justificatif et je serai
              remboursé(e)
            </div>
          </div>

          <div
            class="columns is-mobile is-centered has-text-centered"
            style="margin-top: 4.3em"
          >
            <div class="column is-12 content-24">
              <strong>
                Besoin de plus de précisions sur Assurance habitation de Studely
                ?
              </strong>
            </div>
          </div>
          <div class="columns is-mobile is-centered has-text-centered">
            <div class="column is-narrow">
              <b-button
                tag="a"
                href="https://espace.studely.com"
                type="is-primary"
                size="is-large"
              >
                <strong>Je contacte mon conseiller</strong>
              </b-button>
            </div>
          </div>
          <div
            class="columns is-multiline is-mobile is-centered has-text-centered"
          >
            <div class="column is-8">
              <span class="content-14">En partenariat avec :</span>
            </div>
            <div class="column is-12">
              <div class="columns is-centered">
                <figure class="column is-6">
                  <g-image
                    src="~/assets/nos-services/assurance/smerra.png"
                    width="134"
                    fit="inside"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Assurance sante -->
    <section v-if="service == 'sante'" id="sante" class="section container">
      <br />
      <br />
      <div class="columns is-variable is-8 is-multiline is-centered is-mobile">
        <div class="column is-half-desktop is-12-mobile">
          <div
            class="columns is-multiline is-mobile is-centered has-text-centered"
          >
            <div class="column is-12">
              <g-image
                class="ligne-1"
                src="~/assets/nos-services/assurance/sante.svg"
                width="92"
              />
            </div>
            <div
              class="column is-10 has-text-justified is-bordered has-background-primary has-text-white content-16"
            >
              <div class="is-padding">
                Nul n’est à l’abri d’un souci de santé ou d’un accident pendant
                un séjour à l’étranger. En France, il est obligatoire d’avoir
                une couverture santé en s’affiliant à la
                <strong>Sécurité Sociale</strong>. Cependant, le système de
                protection sociale ne couvre qu’une partie des frais médicaux,
                il est donc recommandé de souscrire à une mutuelle pour
                bénéficier d’une couverture santé complète. Pensez dès
                maintenant à souscrire à une mutuelle santé adaptée à vos
                besoins et votre situation personnelle.
              </div>
            </div>
          </div>
        </div>
        <div class="column is-half-desktop is-12-tablet is-12-mobile">
          <div class="columns is-multiline is-mobile is-vcentered">
            <div class="column is-12">
              <h2 class="has-text-primary">
                Pourquoi souscrire à la complémentaire santé avec Stud’Assur ?
              </h2>
            </div>
            <div class="column is-12 column is-two-quarters content-16">
              <ul class="column" style="line-height: 2.25rem">
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Une mutuelle santé adaptée à vos besoin.
                  </span>
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon
                  ><span class="column is-context is-11 is-paddingless"
                    >Un service client disponible par téléphone et par email du
                    lundi au vendredi de 9h à 19h.</span
                  >
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon>
                  <span class="column is-context is-11 is-paddingless">
                    Une prise en charge optimisée de mes dépenses santé.</span
                  >
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon
                  ><span class="column is-context is-11 is-paddingless">
                    Aucune avance des frais avec le Tiers Payant.</span
                  >
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon
                  ><span class="column is-11 is-context is-paddingless">
                    Aucune démarche à faire pour mes remboursements.</span
                  >
                </li>
                <li class="columns">
                  <b-icon
                    class="column is-1 is-paddingless"
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 2em"
                  ></b-icon
                  ><span class="column is-context is-11 is-paddingless">
                    Mon assurance remboursée en cas de refus de Visa.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        class="columns is-mobile is-centered has-text-centered"
        style="margin-top: 6.8em"
      >
        <div class="column is-12 has-text-primary">
          <h2>Comment ça marche ?</h2>
        </div>
      </div>

      <!-- fisrt line comment ça marche -->
      <div class="columns is-multiline is-centered">
        <div class="column is-12"></div>
        <div class="column is-12-desktop is-12-mobile">
          <div
            class="columns is-multiline is-mobile has-text-centered is-centered content-16"
          >
            <div class="column is-2-desktop is-8-mobile">
              <div class="columns is-centered is-multiline">
                <div class="column is-7-desktop is-9-tablet is-10-mobile">
                  <figure class="image is-square">
                    <g-image
                      src="~/assets/nos-services/assurance/espace.svg"
                      width="134"
                      fit="inside"
                      class="assurance-svg"
                    />
                  </figure>
                </div>
                <div class="column is-12">
                  Je me rapproche de mon conseiller Studely ou le contacte via
                  Mon Espace Studely
                </div>
              </div>
            </div>
            <div class="column is-1-desktop is-hidden-mobile">
              <!-- trait -->
              <div class="columns is-vcentered is-centered is-multiline">
                <div class="column is-12"></div>
                <div class="column is-12"></div>
                <div class="column is-12"></div>
                <div class="column is-12"></div>
                <div class="column is-12"></div>
                <div class="column is-12"></div>

                <div class="column is-12">
                  <figure class="image">
                    <g-image
                      src="~/assets/nos-services/assurance/path.png"
                      width="134"
                      fit="inside"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-2-desktop is-8-mobile">
              <div class="columns is-centered is-multiline">
                <div class="column is-7-desktop is-9-tablet is-10-mobile">
                  <figure class="image is-square">
                    <g-image
                      src="~/assets/nos-services/assurance/conseiller.svg"
                      width="134"
                      fit="inside"
                    />
                  </figure>
                </div>
                <div class="column is-12">
                  Le conseiller m’accompagne dans la procédure d’obtention d’une
                  immatriculation à la Sécurité Sociale en France
                </div>
              </div>
            </div>
            <div class="column is-1-desktop is-hidden-mobile">
              <!-- trait -->
              <div class="columns is-vcentered is-centered is-multiline">
                <div class="column is-12"></div>
                <div class="column is-12"></div>
                <div class="column is-12"></div>
                <div class="column is-12"></div>
                <div class="column is-12"></div>
                <div class="column is-12"></div>

                <div class="column is-12">
                  <figure class="image">
                    <g-image
                      src="~/assets/nos-services/assurance/path.png"
                      width="134"
                      fit="inside"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-2-desktop is-8-mobile">
              <div class="columns is-centered is-multiline">
                <div class="column is-7-desktop is-9-tablet is-10-mobile">
                  <figure class="image is-square">
                    <g-image
                      src="~/assets/nos-services/assurance/carte.svg"
                      width="134"
                      fit="inside"
                    />
                  </figure>
                </div>
                <div class="column is-12">
                  Je paie ma prime d'assurance habitation à travers Studely
                </div>
              </div>
            </div>
            <div class="column is-1-desktop is-hidden-mobile">
              <!-- trait -->
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>

              <figure class="image">
                <g-image
                  src="~/assets/nos-services/assurance/path.png"
                  width="134"
                  fit="inside"
                />
              </figure>
            </div>
            <div class="column is-2-desktop is-8-mobile">
              <div class="columns is-centered is-multiline">
                <div class="column is-7-desktop is-9-tablet is-10-mobile">
                  <figure class="image is-square">
                    <g-image
                      src="~/assets/nos-services/assurance/attestattion.svg"
                      width="134"
                      fit="inside"
                      class="assurance-svg"
                    />
                  </figure>
                </div>
                <div class="column is-12">
                  Je reçois mon attestation préalable
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-mobile is-centered has-text-centered">
        <div class="column is-4-desktop is-4-tablet is-5-mobile is-centered">
          <figure class="image is-square">
            <g-image
              src="~/assets/nos-services/assurance/group-picto-ligne.svg"
              width="70"
              fit="inside"
            />
          </figure>
        </div>
      </div>

      <div
        class="columns is-variable is-3 is-mobile is-centered has-text-centered content-16"
      >
        <div class="column is-6 is-centered">
          En cas d’obtention du Visa, je reçois mon attestation « Assurance
          complémentaire santé » définitive
        </div>
        <div class="column is-6 is-centered">
          En cas de refus de Visa, je présente le justificatif et je serai
          remboursé(e)
        </div>
      </div>
      <div
        class="columns is-mobile is-multiline is-centered has-text-centered"
        style="margin-top: 4.3em"
      >
        <div class="column is-12 content-24">
          <strong class="has-text-primary"
            >Les formules de la complémentaire santé Stud'Assur :</strong
          >
        </div>
        <div class="column is-8 content-20">
          <div class="columns is-mutiline is-centered">
            <div class="column is-3-desktop is-12-mobile has-text-left">
              <ul style="line-height: 3.25rem">
                <li>
                  <b-icon
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 1em"
                  ></b-icon
                  >Minimale
                </li>
                <li>
                  <b-icon
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 1em"
                  ></b-icon
                  >Essentielle
                </li>
              </ul>
            </div>
            <div class="column is-3-desktop is-12-mobile has-text-left">
              <ul style="line-height: 3.25rem">
                <li>
                  <b-icon
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 1em"
                  ></b-icon
                  >Confort
                </li>
                <li>
                  <b-icon
                    pack="fa"
                    icon="circle"
                    size="is-small"
                    :type="{ 'is-danger': true }"
                    style="margin-right: 1em"
                  ></b-icon
                  >Tous risques
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        class="columns is-multiline is-mobile is-centered has-text-centered"
        style="margin-top: 4.3em"
      >
        <div class="column is-12 content-24">
          <strong>
            Besoin de plus de précisions sur les formules de la complémentaire
            santé Stud'Assur ?
          </strong>
        </div>
        <div class="column is-12">
          <b-button
            tag="a"
            href="https://espace.studely.com"
            type="is-primary"
            size="is-large"
          >
            <strong>Je contacte mon conseiller</strong>
          </b-button>
        </div>
        <div class="column is-8">
          <span class="content-14">En partenariat avec :</span>
        </div>
        <div class="column is-12">
          <div class="columns is-centered">
            <figure class="column is-6">
              <g-image
                src="~/assets/nos-services/assurance/smerra.png"
                width="134"
                fit="inside"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Mon assurance étudiante ",
    meta: [
      {
        name: "description",
        content:
          "Bénéficiez d’une assurance complète pour étudier en France l’esprit tranquille !",
      },
    ],
  },
  data() {
    return {
      service: "voyage",
    };
  },
  methods: {
    info(value = "voyage") {
      let disabledService = ["voyage", "habitation", "sante"].filter((x) => {
        return x !== value;
      });
      for (let s in disabledService) {
        this.$refs[disabledService[s]].className = "column is-7";
        this.$refs["text-" + disabledService[s]].className =
          "has-text-grey content-16";
      }

      this.service = value;
      this.$refs[value].className = "column is-9 is-active-service";
      this.$refs["text-" + value].className = "has-text-danger section-title";
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../variables.scss";

.fond-avis {
  background-image: url("./../../../static/service/assurance/fond_assurance_vf.svg");
  background-size: cover;
  background-position: center;
  height: 35em;
}

.is-bordered {
  border-color: $blue-studely;
}
.is-active-service {
  background-image: url("./../../../static/service/assurance/fond-service.svg");
  background-size: cover;
}
.padding {
  padding-bottom: unset !important;
}

.list {
  line-height: 3.25rem;
}

.picto-how-to {
  margin-left: 6em;
}
.rectangle-mini {
  box-sizing: border-box;
  margin-top: 7px;
  padding-left: 2.25rem;
}

@media only screen and (max-width: 425px) {
  .list {
    line-height: 2em;
  }
}
@media only screen and (min-width: 769px) {
  .assurance-svg {
    padding-bottom: 35px;
  }
}

@media only screen and (min-width: 425px) and (max-width: 1920px) {
  .fond-avis {
    height: 45em;
  }
}

@media only screen and (max-width: 414px) {
  .fond-avis {
    height: auto;
  }
}

@media (max-width: 1366px) and (min-width: 1280px) {
  .content-16 {
    font-size: 17px !important;
  }
}

@media (max-width: 1024px) and (min-width: 1024px) {
  .content-16 {
    font-size: 14px !important;
  }
}

.is-context {
  line-height: 2em;
  margin-left: -2em;
}

.is-padding {
  padding: 1rem 1rem;
}
</style>
