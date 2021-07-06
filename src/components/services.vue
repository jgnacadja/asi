<template>
  <section class="section has-text-centered is-centered is-paddingless">
    <!--mobile -->
    <div
      class="columns is-multiline is-centered is-hidden-tablet"
      style="padding-top: 5%"
    >
      <div class="column is-10-desktop">
        <div class="columns is-multiline is-centered is-gapless">
          <div class="column is-3-desktop">
            <div class="columns is-multiline is-centered">
              <div class="column is-12 is-paddingless">
                <div class="grid cs-style-3 is-paddingless">
                  <div class="column is-12 has-text-centered">
                    <h2 class="has-text-primary">{{ services[0].title }}</h2>
                  </div>
                  <figure>
                    <g-link :to="services[0].button.link">
                      <g-image :src="services[0].coverImage.file.url" />
                      <figcaption class="figcaption-blue">
                        <br />
                        <div class="tile content is-small text-size-mobile">
                          {{ services[0].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div class="column is-mobile is-child is-3 feat-icon">
                      <g-image
                        :src="services[0].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[0].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[0].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[0].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1 is-hidden-mobile is-hidden-tablet">
            <div class="columns is-multiline is-vcentered">
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12">
                <figure class="image">
                  <g-image class="ligne-2" src="~/assets/index/2e-ligne.svg" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-3-desktop">
            <div class="columns is-multiline is-centered">
              <div class="column is-12 is-paddingless">
                <div class="grid cs-style-3 is-paddingless">
                  <span class="column is-12 is-mobile has-text-centered">
                    <h2 class="has-text-primary">
                      {{ services[1].title }}
                    </h2>
                  </span>
                  <figure>
                    <g-link :to="services[1].button.link">
                      <g-image :src="services[1].coverImage.file.url" />

                      <figcaption class="figcaption-green">
                        <br />
                        <div class="tile content is-small text-size-mobile">
                          {{ services[1].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div class="column is-mobile is-child is-3 feat-icon">
                      <g-image
                        :src="services[1].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[1].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[1].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[1].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-multiline is-centered is-hidden-tablet">
      <div class="column is-10-desktop">
        <div class="columns is-multiline is-centered is-gapless">
          <div class="column is-3-desktop">
            <div class="columns is-multiline is-centered">
              <div class="column is-12">
                <div class="grid cs-style-3 is-paddingless">
                  <span class="column is-12 is-mobile has-text-centered">
                    <h2 class="has-text-primary">{{ services[2].title }}</h2>
                  </span>
                  <figure>
                    <g-link :to="services[2].button.link">
                      <g-image :src="services[2].coverImage.file.url" />
                      <figcaption class="figcaption-blue">
                        <br />
                        <div class="tile content is-small text-size-mobile">
                          {{ services[2].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div class="column is-mobile is-child is-3 feat-icon">
                      <g-image
                        :src="services[2].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[2].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[2].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[1].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1 is-hidden-mobile">
            <div class="columns is-multiline is-vcentered">
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12">
                <figure class="image">
                  <g-image class="ligne-4" src="~/assets/index/4e-ligne.svg" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-3-desktop" style="margin-top: -3%">
            <div class="columns is-multiline is-centered">
              <div class="column is-12">
                <div class="grid cs-style-3 is-paddingless">
                  <span class="column is-12 is-mobile has-text-centered">
                    <h2 class="has-text-primary">{{ services[3].title }}</h2>
                  </span>
                  <figure>
                    <g-link :to="services[3].button.link">
                      <g-image :src="services[3].coverImage.file.url" />
                      <figcaption class="figcaption-red">
                        <br />
                        <div class="tile content is-small">
                          {{ services[3].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div
                      id="service-icon"
                      class="column is-mobile is-child is-3 feat-icon"
                    >
                      <g-image
                        :src="services[3].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[3].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[3].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[3].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--tablet -->
    <div
      class="columns is-multiline is-centered is-mobile is-hidden-mobile is-hidden-desktop columns-1-tablet"
    >
      <div class="column is-10-desktop">
        <div class="columns is-multiline is-centered is-gapless is-mobile">
          <div class="column is-3-desktop is-4-mobile">
            <div class="columns is-multiline is-centered">
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12">
                <div class="grid cs-style-3 is-paddingless">
                  <span
                    class="fig-title column is-12 is-mobile has-text-centered"
                    >{{ services[0].title }}</span
                  >
                  <figure>
                    <g-link :to="services[0].button.link">
                      <g-image :src="services[0].coverImage.file.url" />
                      <figcaption class="figcaption-blue">
                        <br />
                        <div
                          class="tile content figcaption-description is-medium"
                        >
                          {{ services[0].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div class="column is-mobile is-child is-3 feat-icon">
                      <g-image
                        :src="services[0].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[0].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[0].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[0].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-2 is-4-mobile">
            <div class="columns is-multiline is-vcentered">
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12">
                <figure class="image">
                  <g-image class="ligne-2" src="~/assets/index/2e-ligne.svg" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-3-desktop is-4-mobile">
            <div class="columns is-multiline is-centered">
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12">
                <div class="grid cs-style-3 is-paddingless">
                  <span
                    class="fig-title column is-12 is-mobile has-text-centered"
                    >{{ services[1].title }}</span
                  >
                  <figure>
                    <g-link :to="services[1].button.link">
                      <g-image :src="services[1].coverImage.file.url" />

                      <figcaption class="figcaption-green">
                        <br />
                        <div
                          class="tile content figcaption-description is-medium"
                        >
                          {{ services[1].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div class="column is-mobile is-child is-3 feat-icon">
                      <g-image
                        :src="services[1].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[1].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[1].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[1].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="columns is-multiline is-centered is-mobile is-hidden-mobile is-hidden-desktop"
    >
      <div class="column is-10-desktop">
        <div class="columns is-multiline is-centered is-gapless is-mobile">
          <div class="column is-3-desktop is-4-mobile">
            <div class="columns is-multiline is-centered"></div>
          </div>
          <div class="column is-1 is-4-mobile">
            <div class="columns is-multiline is-vcentered">
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
            </div>
          </div>
          <div class="column is-3-desktop is-4-mobile">
            <div class="columns is-multiline is-centered">
              <div class="column is-6 ligne3">
                <g-image class="ligne-3" src="~/assets/index/3e-ligne.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="columns is-multiline is-centered is-mobile is-hidden-mobile is-hidden-desktop columns-3-tablet"
    >
      <div class="column is-10-desktop">
        <div class="columns is-multiline is-centered is-gapless is-mobile">
          <div class="column is-3-desktop is-4-mobile">
            <div class="columns is-multiline is-centered">
              <div class="column is-12">
                <div class="grid cs-style-3 is-paddingless">
                  <span
                    class="fig-title column is-12 is-mobile has-text-centered"
                    >{{ services[2].title }}</span
                  >
                  <figure>
                    <g-link :to="services[2].button.link">
                      <g-image :src="services[2].coverImage.file.url" />
                      <figcaption class="figcaption-blue">
                        <br />
                        <div
                          class="tile content figcaption-description is-medium"
                        >
                          {{ services[2].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div class="column is-mobile is-child is-3 feat-icon">
                      <g-image
                        :src="services[2].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[2].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[2].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[1].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-2 is-4-mobile">
            <div class="columns is-multiline is-vcentered">
              <div class="column is-12">
                <figure class="image">
                  <g-image class="ligne-4" src="~/assets/index/4e-ligne.svg" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-3-desktop is-4-mobile" style="margin-top: -3%">
            <div class="columns is-multiline is-centered">
              <div class="column is-12">
                <div class="grid cs-style-3 is-paddingless">
                  <span
                    class="fig-title column is-12 is-mobile has-text-centered"
                    >{{ services[3].title }}</span
                  >
                  <figure>
                    <g-link :to="services[3].button.link">
                      <g-image :src="services[3].coverImage.file.url" />
                      <figcaption class="figcaption-red">
                        <br />
                        <div
                          class="tile content figcaption-description is-medium"
                        >
                          {{ services[3].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div
                      id="service-icon"
                      class="column is-mobile is-child is-3 feat-icon"
                    >
                      <g-image
                        :src="services[3].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[3].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[3].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[3].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>

    <!--desktop -->
    <div
      class="columns is-multiline is-centered is-mobile is-hidden-touch columns-1-desktop"
    >
      <div class="column is-10-desktop">
        <div class="columns is-multiline is-centered is-gapless is-mobile">
          <div class="column is-3-desktop is-4-mobile">
            <div class="columns is-multiline is-centered">
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12 is-paddingless">
                <div class="grid cs-style-3 is-paddingless">
                  <span
                    class="fig-title column is-12 is-mobile has-text-centered"
                    >{{ services[0].title }}</span
                  >
                  <figure>
                    <g-link :to="services[0].button.link">
                      <g-image :src="services[0].coverImage.file.url" />
                      <figcaption class="figcaption-blue">
                        <br />
                        <div
                          class="tile content figcaption-description is-medium"
                        >
                          {{ services[0].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div class="column is-mobile is-child is-3 feat-icon">
                      <g-image
                        :src="services[0].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[0].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[0].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[0].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1 is-4-mobile">
            <div class="columns is-multiline is-vcentered">
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12">
                <figure class="image">
                  <g-image class="ligne-2" src="~/assets/index/2e-ligne.svg" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-3-desktop is-4-mobile">
            <div class="columns is-multiline is-centered">
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12 is-paddingless">
                <div class="grid cs-style-3 is-paddingless">
                  <span
                    class="fig-title column is-12 is-mobile has-text-centered"
                    >{{ services[1].title }}</span
                  >
                  <figure>
                    <g-link :to="services[1].button.link">
                      <g-image :src="services[1].coverImage.file.url" />

                      <figcaption class="figcaption-green">
                        <br />
                        <div
                          class="tile content figcaption-description is-medium"
                        >
                          {{ services[1].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div class="column is-mobile is-child is-3 feat-icon">
                      <g-image
                        :src="services[1].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[1].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[1].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[1].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-multiline is-centered is-mobile is-hidden-touch">
      <div class="column is-10-desktop">
        <div class="columns is-multiline is-centered is-gapless is-mobile">
          <div class="column is-3-desktop is-4-mobile">
            <div class="columns is-multiline is-centered"></div>
          </div>
          <div class="column is-1 is-4-mobile">
            <div class="columns is-multiline is-vcentered">
              <div class="column is-12"></div>
            </div>
          </div>
          <div class="column is-3-desktop is-4-mobile is-paddingless">
            <div class="columns is-multiline is-centered">
              <div class="column is-12 is-paddingless ligne3">
                <g-image class="ligne-3" src="~/assets/index/3e-ligne.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-multiline is-centered is-mobile is-hidden-touch">
      <div class="column is-10-desktop">
        <div class="columns is-multiline is-centered is-gapless is-mobile">
          <div class="column is-3-desktop is-4-mobile">
            <div class="columns is-multiline is-centered">
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12">
                <div class="grid cs-style-3 is-paddingless">
                  <span
                    class="fig-title column is-12 is-mobile has-text-centered"
                    >{{ services[2].title }}</span
                  >
                  <figure>
                    <g-link :to="services[2].button.link">
                      <g-image :src="services[2].coverImage.file.url" />
                      <figcaption class="figcaption-blue">
                        <br />
                        <div
                          class="tile content figcaption-description is-medium"
                        >
                          {{ services[2].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div class="column is-mobile is-child is-3 feat-icon">
                      <g-image
                        :src="services[2].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[2].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[2].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[1].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1 is-4-mobile">
            <div class="columns is-multiline is-vcentered">
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12"></div>
              <div class="column is-12">
                <figure class="image">
                  <g-image class="ligne-4" src="~/assets/index/4e-ligne.svg" />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-3-desktop is-4-mobile" style="margin-top: -3%">
            <div class="columns is-multiline is-centered">
              <div class="column is-12">
                <div class="grid cs-style-3 is-paddingless">
                  <span
                    class="fig-title column is-12 is-mobile has-text-centered"
                    >{{ services[3].title }}</span
                  >
                  <figure>
                    <g-link :to="services[3].button.link">
                      <g-image :src="services[3].coverImage.file.url" />
                      <figcaption class="figcaption-red">
                        <br />
                        <div
                          class="tile content figcaption-description is-medium"
                        >
                          {{ services[3].description }}
                        </div>
                      </figcaption>
                    </g-link>
                  </figure>
                  <div
                    class="columns column is-mobile is-centered is-12 service-picto"
                  >
                    <div
                      id="service-icon"
                      class="column is-mobile is-child is-3 feat-icon"
                    >
                      <g-image
                        :src="services[3].pictoBefore.file.url"
                        class="first"
                        fit="inside"
                      />
                      <g-image
                        :src="services[3].pictoAfter.file.url"
                        class="second"
                        fit="inside"
                      />
                    </div>
                  </div>
                  <div class="column is-12 content-16">
                    <b-button
                      tag="a"
                      :href="services[3].button.link"
                      type="is-success"
                      class="button-service"
                    >
                      <strong>{{ services[3].button.title }}</strong>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      default: () => [],
    },
  },
  metaInfo: {
    title: "Studely : Etudier en France en toute sérénité !",
    meta: [
      {
        name: "description",
        content:
          "Premier service financier dédié aux étudiants en mobilité vers la France : justification des ressources financières, logement étudiant, compte bancaire, assurances complètes",
      },
    ],
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

section.grid-services {
  padding-left: 160px;
  padding-right: 160px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(15, 1fr);
}

.columns-1-tablet {
  margin-top: -160px;
}

.columns-3-tablet {
  margin-top: -80px;
}

.columns-1-desktop {
  margin-top: -160px;
}

figure.caution-bancaire {
  grid-area: 7 / 2 / 10/ 5;
}
figure.logement {
  grid-area: 7 / 6 / 10 / 9;
}
figure.assurance {
  grid-area: 12 / 3 / 15 / 6;
}
figure.compte-bancaire {
  grid-area: 11 / 7 / 14 / 10;
}

img.ligne-1 {
  grid-area: 6 / 3 / 8 / 5;
}
img.ligne-2 {
  grid-area: 8 / 5 / 10 / 6;
}
img.ligne-3 {
  grid-area: 10 / 7 / 11 / 8;
}
img.ligne-4 {
  grid-area: 11 / 6 / 14 / 7;
}
img.fond1 {
  position: absolute;
  left: 10em;
  top: 5em;
  z-index: -1;
}

img.fond2 {
  position: absolute;
  left: 31em;
  top: 7em;
  z-index: -1;
}

img.fond3 {
  position: absolute;
  left: 54em;
  top: 3em;
  z-index: -1;
}

.section {
  margin-top: -10%;
}

figure,
.feat-icon {
  position: relative;

  .first {
    display: block;
    margin-top: -60px;
  }
  .second {
    display: none;
    margin-top: -60px;
  }
}

.image {
  z-index: -1;
}

.text-size-mobile {
  padding: 1em;
}

.fig-title {
  color: $blue-studely;
  font-size: 24px;
  text-align: center;
  position: relative;
  line-height: 29px;
  margin-bottom: 22px;
  font-weight: 600;
}

.figcaption-description {
  text-align: center;
  margin: 1em;
}

.ligne1 {
  margin-top: -45px;
}

.ligne2 {
  margin-top: -95px;
}

.ligne3 {
  margin-top: -85px;
}

.ligne3-mobile {
  margin-top: -108px;
}

.columns-mobile {
  margin-top: -85px;
}

figure:hover + .service-picto {
  .first {
    display: none !important;
    margin-top: -60px;
  }
  .second {
    display: block !important;
    margin-top: -60px;
  }
}

.figcaption-blue {
  background-color: $blue-studely;
}

.figcaption-red {
  background-color: $red-studely;
}

.figcaption-green {
  background-color: $green-studely;
}

.grid {
  padding: 20px 20px 100px 20px;
  max-width: 1300px;
  margin: 0 auto;
  list-style: none;
  text-align: center;
}

.grid figure {
  margin: 0;
  position: relative;
}

.grid figure img {
  max-width: 100%;
  display: block;
  position: relative;
}

.grid figcaption {
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  opacity: 0.8 !important;
}

/* Individual Caption Styles */

/* Caption Style 3 */
.cs-style-3 figure {
  overflow: hidden;
}

.cs-style-3 figcaption {
  height: 100%;
  width: 100%;
  top: auto;
  bottom: 0;
  opacity: 0;
  -webkit-transform: translateY(100%);
  -moz-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: -webkit-transform 0.4s, opacity 0.1s 0.3s;
  -moz-transition: -moz-transform 0.4s, opacity 0.1s 0.3s;
  transition: transform 0.4s, opacity 0.1s 0.3s;
}

.cs-style-3 figure:hover figcaption,
.cs-style-3 figure.cs-hover figcaption {
  opacity: 1;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition: -webkit-transform 0.4s, opacity 0.1s;
  -moz-transition: -moz-transform 0.4s, opacity 0.1s;
  transition: transform 0.4s, opacity 0.1s;
}

.cs-style-3 figcaption a {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

@media only screen and (max-width: 1500px) {
  img.fond1,
  img.fond2,
  img.fond3 {
    display: none;
  }
}
@media only screen and (max-width: 1300px) {
  .fig-title {
    font-size: unset;
    margin-bottom: 0px;
  }

  .figcaption-description {
    font-size: 13px;
  }

  .service-picto {
    bottom: -80px;
  }

  img.link-etu-parent,
  img.link-parent-partenaire {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  figcaption {
    position: absolute;
    bottom: -129px;
    left: 0;
    right: 0;
    color: $white;
    opacity: 0.8;
    text-align: center;

    height: 0rem;
    transform-origin: bottom;
    transition: all 500ms;

    font-size: 20px;
    line-height: 28px;
    .figcaption-description {
      display: none;
    }
  }

  .figcaption-description {
    font-size: 11px;
    line-height: 28px;
    text-align: center;
    margin: 0, 5em;
  }
}

@media only screen and (max-width: 700px) {
  .fig-title {
    font-size: 7px;
    margin-bottom: 0px;
  }
  .service-picto {
    bottom: -67px;
  }
}

@media only screen and (max-width: 556px) {
  .service-picto {
    bottom: -40px;
  }
  .fig-title {
    margin-bottom: -11px;
  }
}

@media only screen and (max-width: 465px) {
  figure {
    margin: -10px;
  }
}

@media only screen and (max-width: 398px) {
  figure {
    margin: 15px;
  }
}

.content-16 {
  margin-top: -8%;
}

.button-service {
  font-size: 1em !important;
}
</style>
