<template>
  <Layout>
    <section class="section has-text-centered is-paddingless">
      <h1 class="page-title">Nos médias</h1>
      <br />
    </section>
    <br />
    <section class="section container has-text-centered is-centered">
      <b-tabs
        size="is-large"
        expanded
        position="is-centered"
        class="block"
        destroy-on-hide="true"
      >
        <b-tab-item label="Étudiants">
          <br />
          <div
            class="columns is-multiline container is-centered has-text-centered"
          >
            <div class="column is-12 content-24">
              <strong class="has-text-primary"
                >Découvrez votre dépliant !</strong
              >
            </div>
            <div class="column is-12">
              <div class="columns is-variable is-8 is-centered is-hidden-touch">
                <div class="column is-5">
                  <div
                    class="columns is-multiline container is-centered has-text-centered"
                  >
                    <div class="column is-12">
                      <a
                        download
                        target="_blank"
                        href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                      >
                        <div class="card">
                          <div class="card-content">
                            <div class="columns is-variable">
                              <div class="column is-half is-marginless">
                                <a
                                  download
                                  target="_blank"
                                  href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                                >
                                  <figure class="image">
                                    <g-image
                                      src="~/assets/documentaire/etudiant/brochure-VF2020.jpg"
                                      fit="inside"
                                    />
                                  </figure>
                                </a>
                              </div>
                              <div class="column is-half has-text-left">
                                <strong class="content-20"
                                  >Studely au coeur de la mobilité
                                  internationale étudiante</strong
                                >
                                <br />
                                <br />
                                <span class="content-14">édition 2020</span>
                                <br />
                                <br />
                                <a
                                  href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                                  download
                                  target="_blank"
                                  >(.pdf)</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="column is-2"></div>
                <div class="column is-5">
                  <div
                    class="columns is-multiline container is-centered has-text-centered"
                  >
                    <div class="column is-12">
                      <a
                        download
                        target="_blank"
                        href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                      >
                        <div class="card">
                          <div class="card-content">
                            <div class="columns is-variable">
                              <div class="column is-half is-marginless">
                                <figure class="image">
                                  <g-image
                                    src="~/assets/documentaire/etudiant/cover-depliant.jpg"
                                    fit="inside"
                                  />
                                </figure>
                              </div>
                              <div class="column is-half has-text-left">
                                <strong class="content-20"
                                  >OSER DIRE OUI à la réussite de votre projet
                                  d’études en France !</strong
                                >
                                <br />
                                <br />
                                <span class="content-14">édition 2020</span>
                                <br />
                                <br />
                                <a
                                  href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                                  download
                                  target="_blank"
                                  >(.pdf)</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="columns is-variable is-8 is-centered is-hidden-desktop"
              >
                <div class="column is-12">
                  <div
                    class="columns is-multiline container is-centered has-text-centered"
                  >
                    <div class="column is-12">
                      <a
                        download
                        target="_blank"
                        href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                      >
                        <div class="card">
                          <div class="card-content">
                            <div class="columns is-variable">
                              <div class="column is-half is-marginless">
                                <a
                                  download
                                  target="_blank"
                                  href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                                >
                                  <figure class="image">
                                    <g-image
                                      src="~/assets/documentaire/etudiant/brochure-VF2020.jpg"
                                      fit="inside"
                                    />
                                  </figure>
                                </a>
                              </div>
                              <div class="column is-half has-text-left">
                                <strong class="content-20"
                                  >Studely au coeur de la mobilité
                                  internationale étudiante</strong
                                >
                                <br />
                                <br />
                                <span class="content-14">édition 2020</span>
                                <br />
                                <br />
                                <a
                                  href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                                  download
                                  target="_blank"
                                  >(.pdf)</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Témoignage -->

          <div
            class="columns has-text-centered is-centered is-multiline"
            style="margin-top: 5em"
          >
            <div class="column is-12">
              <h2 class="has-text-primary">Découvrez tous les témoignages</h2>
            </div>

            <div class="column is-12 is-hidden-mobile" style="margin-top: 5em">
              <b-carousel-list
                :data="testemonies.slides"
                :items-to-show="testemonies.perList"
                :arrow="testemonies.arrow"
                :has-drag="testemonies.drag"
                :has-grayscale="testemonies.gray"
                :has-opacity="testemonies.opacity"
                :refresh="testemonies.refresh"
                :icon-pack="testemonies.iconPack"
                :icon-size="testemonies.iconSize"
                :autoplay="true"
                :interval="10000"
                :pause-hover="false"
                style="box-shadow: unset"
              >
                <template slot="item" slot-scope="props">
                  <figure class="image is-16by9">
                    <iframe
                      title="video institutionnelle"
                      class="has-ratio"
                      width="381"
                      height="218"
                      :src="props.list.link"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </template>
              </b-carousel-list>
            </div>

            <div
              class="column is-12 is-hidden-desktop is-hidden-tablet"
              style="margin-top: 5em"
            >
              <b-carousel-list
                :data="testemonies.slides"
                :items-to-show="1"
                :arrow="testemonies.arrow"
                :has-drag="testemonies.drag"
                :has-grayscale="testemonies.gray"
                :has-opacity="testemonies.opacity"
                :refresh="testemonies.refresh"
                :icon-pack="testemonies.iconPack"
                :icon-size="testemonies.iconSize"
                :autoplay="true"
                :interval="10000"
                :pause-hover="false"
                style="box-shadow: unset"
              >
                <template slot="item" slot-scope="props">
                  <figure class="image is-16by9">
                    <iframe
                      title="video institutionnelle"
                      class="has-ratio"
                      width="381"
                      height="218"
                      :src="props.list.link"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </template>
              </b-carousel-list>
            </div>
          </div>

          <!-- Documents pratiques  -->
          <div
            class="columns has-text-centered is-centered is-multiline"
            style="margin-top: 5em"
          >
            <div class="column is-12">
              <h2 class="has-text-primary">Documents pratiques</h2>
            </div>
            <div class="columns container is-centered">
              <div class="column is-half">
                <div class="columns is-multiline has-text-left">
                  <div
                    v-for="file in studentDoc"
                    :key="file"
                    class="column is-12 has-text-primary content-16"
                  >
                    <a :href="file.url" download target="_blank">{{
                      file.titre
                    }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Medias  -->
          <div
            class="columns has-text-centered is-centered is-multiline"
            style="margin-top: 5em"
          >
            <div class="column is-12">
              <h2 class="has-text-primary">Médias</h2>
            </div>
            <div class="columns container is-centered">
              <div class="column is-half">
                <div class="columns is-multiline has-text-left">
                  <div
                    v-for="m in media"
                    :key="m"
                    class="column is-12 has-text-primary content-16"
                  >
                    <a :href="m.url" target="_blank">{{ m.titre }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab-item>
        <b-tab-item label="Parents">
          <br />
          <div
            class="columns is-multiline container is-centered has-text-centered"
          >
            <div class="column is-12 content-24">
              <strong class="has-text-primary">Découvrez votre flyer</strong>
            </div>
            <div class="column is-12">
              <div class="columns is-variable is-8 is-centered is-hidden-touch">
                <div class="column is-5">
                  <div
                    class="columns is-multiline container is-centered has-text-centered"
                  >
                    <div class="column is-12">
                      <a
                        download
                        target="_blank"
                        href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                      >
                        <div class="card">
                          <div class="card-content">
                            <div class="columns is-variable">
                              <div class="column is-half is-marginless">
                                <figure class="image">
                                  <g-image
                                    src="~/assets/documentaire/etudiant/brochure-VF2020.jpg"
                                    fit="inside"
                                  />
                                </figure>
                              </div>
                              <div class="column is-half has-text-left">
                                <strong class="content-20"
                                  >Studely au coeur de la mobilité
                                  internationale étudiante</strong
                                >
                                <br />
                                <br />
                                <span class="content-14">édition 2020</span>
                                <br />
                                <br />
                                <a
                                  href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                                  download
                                  target="_blank"
                                  >(.pdf)</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="column is-2"></div>
                <div class="column is-5">
                  <div
                    class="columns is-multiline container is-centered has-text-centered"
                  >
                    <div class="column is-12">
                      <a
                        download
                        target="_blank"
                        href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                      >
                        <div class="card">
                          <div class="card-content">
                            <div class="columns is-variable">
                              <div class="column is-half is-marginless">
                                <figure class="image">
                                  <g-image
                                    src="~/assets/documentaire/parent/cover-parent.jpg"
                                    fit="inside"
                                  />
                                </figure>
                              </div>
                              <div class="column is-half has-text-left">
                                <strong class="content-20"
                                  >Votre enfant a un projet d'études en France
                                  ?</strong
                                >
                                <br />
                                <br />
                                <span class="content-14">édition 2020</span>
                                <br />
                                <br />
                                <a
                                  href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                                  download
                                  target="_blank"
                                  >(.pdf)</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="columns is-variable is-8 is-centered is-hidden-desktop"
              >
                <div class="column is-12">
                  <div
                    class="columns is-multiline container is-centered has-text-centered"
                  >
                    <div class="column is-12">
                      <a
                        download
                        target="_blank"
                        href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                      >
                        <div class="card">
                          <div class="card-content">
                            <div class="columns is-variable">
                              <div class="column is-half is-marginless">
                                <figure class="image">
                                  <g-image
                                    src="~/assets/documentaire/etudiant/brochure-VF2020.jpg"
                                    fit="inside"
                                  />
                                </figure>
                              </div>
                              <div class="column is-half has-text-left">
                                <strong class="content-20"
                                  >Studely au coeur de la mobilité
                                  internationale étudiante</strong
                                >
                                <br />
                                <br />
                                <span class="content-14">édition 2020</span>
                                <br />
                                <br />
                                <a
                                  href="documentaire/etudiant/Brochure_Client_2020_France.pdf"
                                  download
                                  target="_blank"
                                  >(.pdf)</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Témoignage -->

          <div
            class="columns has-text-centered is-centered is-multiline"
            style="margin-top: 5em"
          >
            <div class="column is-12">
              <h2 class="has-text-primary">Découvrez tous les témoignages</h2>
            </div>

            <div class="column is-12 is-hidden-mobile" style="margin-top: 5em">
              <b-carousel-list
                :data="testemonies.slides"
                :items-to-show="testemonies.perList"
                :arrow="testemonies.arrow"
                :has-drag="testemonies.drag"
                :has-grayscale="testemonies.gray"
                :has-opacity="testemonies.opacity"
                :refresh="testemonies.refresh"
                :icon-pack="testemonies.iconPack"
                :icon-size="testemonies.iconSize"
                :autoplay="true"
                :interval="10000"
                :pause-hover="false"
                style="box-shadow: unset"
              >
                <template slot="item" slot-scope="props">
                  <figure class="image is-16by9">
                    <iframe
                      title="video institutionnelle"
                      class="has-ratio"
                      width="381"
                      height="218"
                      :src="props.list.link"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </template>
              </b-carousel-list>
            </div>
            <div
              class="column is-12 is-hidden-desktop is-hidden-tablet"
              style="margin-top: 5em"
            >
              <b-carousel-list
                :data="testemonies.slides"
                :items-to-show="1"
                :arrow="testemonies.arrow"
                :has-drag="testemonies.drag"
                :has-grayscale="testemonies.gray"
                :has-opacity="testemonies.opacity"
                :refresh="testemonies.refresh"
                :icon-pack="testemonies.iconPack"
                :icon-size="testemonies.iconSize"
                :autoplay="true"
                :interval="10000"
                :pause-hover="false"
                style="box-shadow: unset"
              >
                <template slot="item" slot-scope="props">
                  <figure class="image is-16by9">
                    <iframe
                      title="video institutionnelle"
                      class="has-ratio"
                      width="381"
                      height="218"
                      :src="props.list.link"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </template>
              </b-carousel-list>
            </div>
            <!-- Documents pratiques  -->
            <div
              class="columns has-text-centered is-centered is-multiline"
              style="margin-top: 5em"
            >
              <div class="column is-12">
                <h2 class="has-text-primary">Documents pratiques</h2>
              </div>
              <div class="columns container is-centered">
                <div class="column is-half">
                  <div class="columns is-multiline has-text-left">
                    <div
                      v-for="file in parentDoc"
                      :key="file"
                      class="column is-12 has-text-primary content-16"
                    >
                      <a :href="file.url" download target="_blank">{{
                        file.titre
                      }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Medias  -->
            <div
              class="columns has-text-centered is-centered is-multiline"
              style="margin-top: 5em"
            >
              <div class="column is-12">
                <h2 class="has-text-primary">Médias</h2>
              </div>
              <div class="columns container is-centered">
                <div class="column is-half">
                  <div class="columns is-multiline has-text-left">
                    <div
                      v-for="m in media"
                      :key="m"
                      class="column is-12 has-text-primary content-16"
                    >
                      <a :href="m.url">{{ m.titre }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab-item>
        <b-tab-item label="Partenaires">
          <br />
          <div
            class="columns is-multiline is-vcentered is-centered has-text-centered"
          >
            <div class="column is-12 content-24">
              <strong class="has-text-primary"
                >Rapport d'activité annuel</strong
              >
            </div>
            <div class="column is-12">
              <div class="columns is-variable is-8 is-centered is-hidden-touch">
                <div class="column is-4">
                  <div
                    class="columns is-multiline container is-centered has-text-centered"
                  >
                    <div class="column is-12">
                      <a
                        download
                        target="_blank"
                        href="documentaire/partenaire/Rapport d'activite2019_web.pdf"
                      >
                        <div class="card">
                          <div class="card-content">
                            <div class="columns is-variable">
                              <div class="column is-half is-marginless">
                                <figure class="image">
                                  <g-image
                                    src="~/assets/documentaire/partenaire/Artboard 1.jpg"
                                    fit="inside"
                                  />
                                </figure>
                              </div>
                              <div class="column is-half has-text-left">
                                <strong class="content-20"
                                  >Studely au cœur de la mobilité
                                  étudiante</strong
                                >
                                <br />
                                <br />
                                <span class="content-14">édition 2020</span>
                                <br />
                                <br />
                                <a
                                  href="documentaire/partenaire/Rapport d'activite2019_web.pdf"
                                  download
                                  target="_blank"
                                  >(.pdf)</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="column is-4">
                  <div
                    class="columns is-multiline container is-centered has-text-centered"
                  >
                    <div class="column is-12">
                      <a
                        download
                        target="_blank"
                        href="documentaire/partenaire/VF%20web%20rapport.pdf"
                      >
                        <div class="card">
                          <div class="card-content">
                            <div class="columns is-variable">
                              <div class="column is-half is-marginless">
                                <figure class="image">
                                  <g-image
                                    src="~/assets/documentaire/partenaire/cover-rapport.jpg"
                                    fit="inside"
                                  />
                                </figure>
                              </div>
                              <div class="column is-half has-text-left">
                                <strong class="content-20"
                                  >Plus d’ouverture pour améliorer la mobilité
                                  étudiante vers la France</strong
                                >
                                <br />
                                <br />
                                <span class="content-14">édition 2019</span>
                                <br />
                                <br />
                                <a
                                  href="documentaire/partenaire/VF%20web%20rapport.pdf"
                                  download
                                  target="_blank"
                                  >(.pdf)</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="column is-4">
                  <div
                    class="columns is-multiline container is-centered has-text-centered"
                  >
                    <div class="column is-12">
                      <a
                        download
                        target="_blank"
                        href="documentaire/partenaire/Rapport%20web.pdf"
                      >
                        <div class="card">
                          <div class="card-content">
                            <div class="columns is-variable">
                              <div class="column is-half is-marginless">
                                <figure class="image">
                                  <g-image
                                    src="~/assets/documentaire/partenaire/cover-rapport18.jpg"
                                    fit="inside"
                                  />
                                </figure>
                              </div>
                              <div class="column is-half has-text-left">
                                <strong class="content-20"
                                  >Une aventure pleine de passion, une
                                  incroyable évolution</strong
                                >
                                <br />
                                <br />
                                <span class="content-14">édition 2018</span>
                                <br />
                                <br />
                                <a
                                  href="documentaire/partenaire/Rapport%20web.pdf"
                                  download
                                  target="_blank"
                                  >(.pdf)</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="columns is-variable is-8 is-centered is-hidden-desktop"
              >
                <div class="column is-12">
                  <div
                    class="columns is-multiline container is-centered has-text-centered"
                  >
                    <div class="column is-12">
                      <a
                        download
                        target="_blank"
                        href="documentaire/partenaire/Rapport d'activite2019_web.pdf"
                      >
                        <div class="card">
                          <div class="card-content">
                            <div class="columns is-variable">
                              <div class="column is-half is-marginless">
                                <figure class="image">
                                  <g-image
                                    src="~/assets/documentaire/partenaire/Artboard 1.jpg"
                                    fit="inside"
                                  />
                                </figure>
                              </div>
                              <div class="column is-half has-text-left">
                                <strong class="content-20"
                                  >Studely au cœur de la mobilité
                                  étudiante</strong
                                >
                                <br />
                                <br />
                                <span class="content-14">édition 2020</span>
                                <br />
                                <br />
                                <a
                                  href="documentaire/partenaire/Rapport d'activite2019_web.pdf"
                                  download
                                  target="_blank"
                                  >(.pdf)</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Témoignage -->

          <div
            class="columns has-text-centered is-centered is-multiline"
            style="margin-top: 5em"
          >
            <div class="column is-12">
              <h2 class="has-text-primary">Découvrez tous les témoignages</h2>
            </div>

            <div class="column is-12 is-hidden-mobile" style="margin-top: 5em">
              <b-carousel-list
                :data="testemonies.slides"
                :items-to-show="testemonies.perList"
                :arrow="testemonies.arrow"
                :has-drag="testemonies.drag"
                :has-grayscale="testemonies.gray"
                :has-opacity="testemonies.opacity"
                :refresh="testemonies.refresh"
                :icon-pack="testemonies.iconPack"
                :icon-size="testemonies.iconSize"
                :autoplay="true"
                :interval="10000"
                :pause-hover="false"
                style="box-shadow: unset"
              >
                <template slot="item" slot-scope="props">
                  <figure class="image is-16by9">
                    <iframe
                      title="video institutionnelle"
                      class="has-ratio"
                      width="381"
                      height="218"
                      :src="props.list.link"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </template>
              </b-carousel-list>
            </div>
            <div
              class="column is-12 is-hidden-desktop is-hidden-tablet"
              style="margin-top: 5em"
            >
              <b-carousel-list
                :data="testemonies.slides"
                :items-to-show="1"
                :arrow="testemonies.arrow"
                :has-drag="testemonies.drag"
                :has-grayscale="testemonies.gray"
                :has-opacity="testemonies.opacity"
                :refresh="testemonies.refresh"
                :icon-pack="testemonies.iconPack"
                :icon-size="testemonies.iconSize"
                :autoplay="true"
                :interval="10000"
                :pause-hover="false"
                style="box-shadow: unset"
              >
                <template slot="item" slot-scope="props">
                  <figure class="image is-16by9">
                    <iframe
                      title="video institutionnelle"
                      class="has-ratio"
                      width="381"
                      height="218"
                      :src="props.list.link"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </template>
              </b-carousel-list>
            </div>
          </div>

          <!-- Medias  -->
          <div
            class="columns has-text-centered is-centered is-multiline"
            style="margin-top: 5em"
          >
            <div class="column is-12">
              <h2 class="has-text-primary">Médias</h2>
            </div>
            <div class="columns container is-centered">
              <div class="column is-half">
                <div class="columns is-multiline has-text-left">
                  <div
                    v-for="m in media"
                    :key="m"
                    class="column is-12 has-text-primary content-16"
                  >
                    <a :href="m.url">{{ m.titre }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab-item>
      </b-tabs>
    </section>
  </Layout>
</template>

<script>
import files from "../assets/utils/files";
import medias from "../assets/utils/medias";
import slides from "../assets/utils/slides";

export default {
  metaInfo: {
    title: "Nos Médias",
    meta: [
      {
        name: "description",
        content:
          "Consultez votre espace documentaire pour en savoir plus sur Studely",
      },
    ],
  },
  data() {
    return {
      rubrique: "Etudiant",
      files: files.data,
      media: medias.data,
      testemonies: {
        refresh: true,
        arrow: true,
        drag: true,
        gray: false,
        opacity: false,
        values: "3",
        repeat: true,
        iconPack: "fas",
        iconSize: "is-large",
        perList: 2,
        slides: slides.data,
      },
    };
  },
  computed: {
    studentDoc: function () {
      return this.files.filter((e) => {
        return e.categorie.includes("etudiant");
      });
    },
    parentDoc: function () {
      return this.files.filter((e) => {
        return e.categorie.includes("parent");
      });
    },
  },
  methods: {
    info(value = "voyage") {
      let disabledService = ["voyage", "habitation", "sante"].filter((x) => {
        return x !== value;
      });
      for (let s in disabledService) {
        this.$refs[disabledService[s]].className = "column is-narrow";
        this.$refs["text-" + disabledService[s]].className = "has-text-grey";
      }

      this.rubrique = value;
      this.$refs[value].className = "column is-narrow is-active-service";
      this.$refs["text-" + value].className = "has-text-danger";
    },
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";

.is-bordered {
  border-color: $blue-studely;
}
.is-active-service {
  //background-image: url("./../../../static/service/assurance/fond-service.png");
  background-size: cover;
}
.padding {
  padding-bottom: unset !important;
}

.picto-how-to {
  margin-left: 6em;
}
.rectangle-mini {
  box-sizing: border-box;
  margin-top: 7px;
  padding-left: 2.25rem;
}

@media (max-width: 1366px) and (min-width: 1280px) {
  .card {
    height: 22em;
  }
}

@media (max-width: 1024px) and (min-width: 1024px) {
  .card {
    height: 25em;
  }
}
</style>
