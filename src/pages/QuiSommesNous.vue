<template>
  <Layout>
    <section class="section has-text-centered is-paddingless">
      <div class="columns is-multiline is-centered is-vcentered">
        <div class="column is-12">
          <h1 class="page-title has-text-primary">{{ page.title }}</h1>
        </div>

        <div class="column is-12">
          <div class="subtitle" v-html="page.metadescription"></div>
        </div>
      </div>
      <br />
      <br />
      <div
        class="columns is-vcentered is-mobile has-text-centered is-centered fond-avis"
        v-bind:style="{
          'background-image': 'url(' + page.coverImage.file.url + ')',
        }"
      >
        <div class="column is-6-desktop is-8-tablet is-10-mobile is-mobile">
          <figure class="image is-16by9">
            <iframe
              title="studely"
              class="has-ratio"
              width="640"
              height="360"
              :src="page.socialVideoCover"
              allowfullscreen
            ></iframe>
          </figure>
        </div>
      </div>
    </section>

    <section id="about" class="section has-text-centered">
      <div class="columns section is-8-desktop is-12-mobile is-mobile">
        <div class="column is-2-desktop is-5-mobile is-offset-2-desktop">
          <g-image :src="director.coverImage.file.url" fit="contain" />
        </div>
        <div class="column is-6-desktop is-6-mobile">
          <div class="column">
            <g-image
              class="svg-mirror image is-64x64"
              src="~/assets/qui-sommes-nous/guillemetspx.svg"
              fit="contain"
            />
          </div>
          <div
            class="column is-12-desktop is-12-mobile text-justify section content-16 is-hidden-touch"
          >
            {{ director.metaDescription }}
          </div>
        </div>
      </div>
      <div
        class="columns section is-mobile is-centered rm-padding is-hidden-desktop"
      >
        <div
          class="column is-12-desktop is-12-mobile text-justify section content-16 rm-padding"
        >
          {{ director.metaDescription }}
        </div>
      </div>
      <div class="columns section rm-margin is-mobile is-centered">
        <div class="column is-8-desktop is-12-mobile section content-16">
          <vue-markdown
            class="content text-justify"
            :source="source"
            id="dataSource"
            :html="html"
          >
          </vue-markdown>
          <h2 id="highlights" class="signature is-pulled-left">
            {{ director.nameAndOccupation }}
          </h2>
        </div>
      </div>
    </section>

    <div class="is-vcentered is-highlights is-centered has-text-centered">
      <div class="is-highlights-parent has-background-white">
        <h1
          class="section title has-text-primary has-text-left is-margin-highlights"
        >
          {{ highlights.title }}
        </h1>

        <div class="has-background-white is-highlights-content">
          <b-carousel
            :arrow="highlights.arrow"
            :icon-pack="iconPack"
            :icon-size="iconSize"
            :pause-hover="highlights.pauseHover"
            :arrow-hover="highlights.arrowHover"
            :indicator="highlights.indicator"
            :autoplay="false"
            class="is-highlight-carousel"
          >
            <b-carousel-item
              v-for="(carousel, i) in highlights.carrouselBlock"
              :key="i"
            >
              <section :class="`hero is-medium`">
                <section
                  class="section container sponsor-main-wrapper is-highlight-first"
                  v-if="carousel.carrouselBlock.length === 2"
                >
                  <div
                    class="columns is-desktop sponsor-wrapper is-vcentered"
                    v-if="carousel.carrouselBlock[0]"
                  >
                    <div class="section columns">
                      <div class="column is-6">
                        <b-carousel
                          :indicator="indicator"
                          :arrow="arrow"
                          :repeat="arrowBoth"
                          :arrow-hover="arrowHover"
                          :icon-pack="iconPack"
                          :icon-prev="iconPrev"
                          :icon-next="iconNext"
                          :icon-size="iconSize"
                          :autoplay="false"
                        >
                          <b-carousel-item
                            v-for="(childCarouselImage, i) in carousel
                              .carrouselBlock[0].carrouselBlock"
                            :key="i"
                          >
                            <section :class="`hero is-small`">
                              <section>
                                <g-image
                                  :src="childCarouselImage.image.file.url"
                                  fit="inside"
                                  height="400"
                                />
                              </section>
                            </section>
                          </b-carousel-item>
                        </b-carousel>
                      </div>
                      <div class="column is-5">
                        <h1
                          class="title has-text-primary content-highlight-title has-text-left"
                        >
                          {{ carousel.carrouselBlock[0].title }}
                        </h1>
                        <h2 class="subtitle content-2">
                          <p class="content-highlight has-text-justified">
                            {{ carousel.carrouselBlock[0].description }}
                          </p>
                        </h2>
                      </div>
                      <div class="column is-1"></div>
                    </div>
                  </div>

                  <div
                    class="columns is-desktop sponsor-wrapper is-vcentered"
                    v-if="carousel.carrouselBlock[1]"
                  >
                    <div class="section is-highlight-second columns">
                      <div class="column is-1"></div>

                      <div class="column is-5">
                        <h1
                          class="title has-text-primary content-highlight-title has-text-left"
                        >
                          {{ carousel.carrouselBlock[1].title }}
                        </h1>
                        <h2 class="subtitle content-2">
                          <p class="content-highlight has-text-justified">
                            {{ carousel.carrouselBlock[1].description }}
                          </p>
                        </h2>
                      </div>

                      <div class="column is-6">
                        <b-carousel
                          :indicator="indicator"
                          :arrow="arrow"
                          :repeat="arrowBoth"
                          :arrow-hover="arrowHover"
                          :icon-pack="iconPack"
                          :icon-prev="iconPrev"
                          :icon-next="iconNext"
                          :icon-size="iconSize"
                          :autoplay="false"
                        >
                          <b-carousel-item
                            v-for="(childCarouselImage, i) in carousel
                              .carrouselBlock[1].carrouselBlock"
                            :key="i"
                          >
                            <section :class="`hero is-small`">
                              <section>
                                <g-image
                                  :src="childCarouselImage.image.file.url"
                                  fit="inside"
                                  height="400"
                                />
                              </section>
                            </section>
                          </b-carousel-item>
                        </b-carousel>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  class="section container sponsor-main-wrapper is-highlight-first"
                  v-if="carousel.carrouselBlock.length !== 2"
                >
                  <div
                    class="columns is-desktop sponsor-wrapper is-vcentered"
                    v-if="carousel.carrouselBlock[0]"
                  >
                    <div class="section columns">
                      <div class="column is-6">
                        <b-carousel
                          :indicator="indicator"
                          :arrow="arrow"
                          :repeat="arrowBoth"
                          :arrow-hover="arrowHover"
                          :icon-pack="iconPack"
                          :icon-prev="iconPrev"
                          :icon-next="iconNext"
                          :icon-size="iconSize"
                          :autoplay="false"
                        >
                          <b-carousel-item
                            v-for="(childCarouselImage, i) in carousel
                              .carrouselBlock[0].carrouselBlock"
                            :key="i"
                          >
                            <section :class="`hero is-small`">
                              <section>
                                <g-image
                                  :src="childCarouselImage.image.file.url"
                                  fit="inside"
                                  height="400"
                                />
                              </section>
                            </section>
                          </b-carousel-item>
                        </b-carousel>
                      </div>
                      <div class="column is-5">
                        <h1
                          class="title has-text-primary content-highlight-title has-text-left"
                        >
                          {{ carousel.carrouselBlock[0].title }}
                        </h1>
                        <h2 class="subtitle content-2">
                          <p class="content-highlight has-text-justified">
                            {{ carousel.carrouselBlock[0].description }}
                          </p>
                        </h2>
                      </div>
                      <div class="column is-1"></div>
                    </div>
                  </div>

                  <div
                    class="columns is-desktop sponsor-wrapper is-vcentered"
                    v-if="carousel.carrouselBlock[0]"
                    style="visibility: hidden"
                  >
                    <div class="section columns">
                      <div class="column is-6">
                        <b-carousel
                          :indicator="indicator"
                          :arrow="arrow"
                          :repeat="arrowBoth"
                          :arrow-hover="arrowHover"
                          :icon-pack="iconPack"
                          :icon-prev="iconPrev"
                          :icon-next="iconNext"
                          :icon-size="iconSize"
                          :autoplay="false"
                          class="is-highlight-carousel-item"
                        >
                          <b-carousel-item
                            v-for="(childCarouselImage, i) in carousel
                              .carrouselBlock[0].carrouselBlock"
                            :key="i"
                          >
                            <section :class="`hero is-small`">
                              <section>
                                <g-image
                                  :src="childCarouselImage.image.file.url"
                                  fit="inside"
                                  height="400"
                                />
                              </section>
                            </section>
                          </b-carousel-item>
                        </b-carousel>
                      </div>
                      <div class="column is-5">
                        <h1
                          class="title has-text-primary content-highlight-title has-text-left"
                        >
                          {{ carousel.carrouselBlock[0].title }}
                        </h1>
                        <h2 class="subtitle content-2">
                          <p class="content-highlight has-text-justified">
                            {{ carousel.carrouselBlock[0].description }}
                          </p>
                        </h2>
                      </div>
                      <div class="column is-1"></div>
                    </div>
                  </div>
                </section>
              </section>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </div>

    <div id="calendar"
      class="columns is-calendar is-vcentedred is-centered is-12-mobile is-half full-height has-text-centered"
    >
      <div class="column is-half is-half-desktop">
        <div class="column">
          <h1 class="section has-text-primary">{{ page.events.title }}</h1>
        </div>
        <div class="column has-text-left full-height">
          <Calendar :eventsList="events" :headerProps="headerEvent" />
        </div>
      </div>
    </div>

    <div class="is-vcentered is-centered">
      <div class="">
        <g-image class="is-100" :src="page.filialeMap.file.url"></g-image>
      </div>
    </div>

    <section class="section autoheight has-text-centered">
      <h1
        class="section title is-margin has-text-primary has-text-left margin-team-title"
      >
        {{ filialeTeam.title }}
      </h1>

      <div class="column" style="height: 2em">
        <div class="columns team-rows is-mobile">
          <div class="column">
            <div class="column">
              <div
                class="column is-square is-2-desktop is-3-mobile is-offset-2-desktop figure-blue is-team"
              >
                <figure class="image is-square is-team-child is-relative">
                  <g-image
                    :src="filialeTeam.filialeEmployeeOne.coverImage.file.url"
                  />
                </figure>
              </div>
            </div>
            <div class="column is-offset-4-desktop is-team-one-meta">
              <h1
                class="column is-10-desktop is-12-mobile is-meta has-text-bold content-2"
              >
                {{ filialeTeam.filialeEmployeeOne.name }},
              </h1>
              <h4
                class="column is-10-desktop is-12-mobile is-meta content-2 is-occupation"
              >
                {{ filialeTeam.filialeEmployeeOne.occupation }}
              </h4>
            </div>
          </div>

          <div class="column">
            <div class="column">
              <div
                class="column is-square is-2-desktop is-3-mobile is-offset-1-desktop figure-blue is-team"
              >
                <figure class="image is-square is-team-child is-relative">
                  <g-image
                    :src="filialeTeam.filialeEmployeeTwo.coverImage.file.url"
                  />
                </figure>
              </div>
            </div>
            <div class="column is-offset-2-desktop is-team-one-meta">
              <h1
                class="column is-10-desktop is-12-mobile is-meta has-text-bold content-2"
              >
                {{ filialeTeam.filialeEmployeeTwo.name }},
              </h1>
              <h4
                class="column is-10-desktop is-12-mobile is-meta content-2 is-occupation"
              >
                {{ filialeTeam.filialeEmployeeTwo.occupation }}
              </h4>
            </div>
          </div>
        </div>

        <div class="columns team-row is-mobile">
          <div class="column">
            <div class="column">
              <div
                class="column is-square is-2-desktop is-3-mobile is-offset-1-desktop figure-green is-team"
              >
                <figure class="image is-square is-team-child is-relative">
                  <g-image
                    :src="filialeTeam.filialeEmployeeThree.coverImage.file.url"
                  />
                </figure>
              </div>
            </div>
            <div class="column is-offset-2-desktop is-team-one-meta">
              <h1
                class="column is-10-desktop is-12-mobile has-text-bold is-meta content-2"
              >
                {{ filialeTeam.filialeEmployeeThree.name }},
              </h1>
              <h4
                class="column is-10-desktop is-12-mobile is-meta content-2 is-occupation"
              >
                {{ filialeTeam.filialeEmployeeThree.occupation }}
              </h4>
            </div>
          </div>

          <div class="column">
            <div class="column">
              <div
                class="column is-square is-2-desktop is-3-mobile is-offset-0-desktop figure-green is-team"
              >
                <figure class="image is-square is-team-child is-relative">
                  <g-image
                    :src="filialeTeam.filialeEmployeeFour.coverImage.file.url"
                  />
                </figure>
              </div>
            </div>
            <div class="column is-offset-0-desktop is-team-one-meta">
              <h1
                class="column is-8-desktop is-12-mobile is-meta has-text-bold content-2"
              >
                {{ filialeTeam.filialeEmployeeFour.name }},
              </h1>
              <h4
                class="column is-8-desktop is-12-mobile is-meta content-2 is-occupation"
              >
                {{ filialeTeam.filialeEmployeeFour.occupation }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Page($path: String! = "/qui-sommes-nous/") {
  page: contentfulPage(path: $path) {
    id
    path
    title
    metadescription
    coverImage {
      file {
        url
      }
    }
    director {
      title
      country
      coverImage {
        file {
          url
        }
      }
      metaDescription
      description
      nameAndOccupation
    }
    filialeTeam {
      filialeEmployeeOne {
        coverImage {
          file {
            url
          }
        }
        name
        occupation
      }
      filialeEmployeeTwo {
        coverImage {
          file {
            url
          }
        }
        name
        occupation
      }
      filialeEmployeeThree {
        coverImage {
          file {
            url
          }
        }
        name
        occupation
      }
      filialeEmployeeFour {
        coverImage {
          file {
            url
          }
        }
        name
        occupation
      }
    }
    socialVideoCover
    filialeTeam {
      title
      country
      filialeEmployeeOne {
        coverImage {
          file {
            url
          }
        }
        name
        occupation
      }
      filialeEmployeeTwo {
        coverImage {
          file {
            url
          }
        }
        name
        occupation
      }
      filialeEmployeeThree {
        coverImage {
          file {
            url
          }
        }
        name
        occupation
      }
      filialeEmployeeFour {
        coverImage {
          file {
            url
          }
        }
        name
        occupation
      }
    }
    events {
      title
      events(sortBy: "date", order: ASC) {
        id
        title
        country
        description
        date
        startTime
        endTime
        image {
          file {
            url
          }
        }
      }
    }
    filialeMap {
      file {
        url
      }
    }
    highlights {
      indicator
      arrow
      arrowBoth
      arrowHover
      autoPlay
      pauseHover
      title
      country
      carrouselBlock {
        title
        carrouselBlock {
          title
          description
          carrouselBlock {
            title
            description
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
  countries: allContentfulListeFiliales {
    edges {
      node {
        countries
      }
    }
  }
}
</page-query>

<script>
import Calendar from "~/components/calendar/Calendar.vue";
import VueMarkdown from "vue-markdown";

export default {
  metaInfo: {
    title: "Qui sommes nous?",
    meta: [
      {
        name: "description",
        content:
          "Entreprise innovante créée par et pour les étudiants internationaux, Studely compte plus d’une dizaine de filiales en Afrique.",
      },
    ],
  },
  components: {
    Calendar,
    VueMarkdown,
  },
  data() {
    return {
      html: true,
      page: {},
      events: [],
      director: {},
      filialeTeam: {},
      highlights: {},

      indicator: true,
      arrow: false,
      arrowHover: false,
      arrowBoth: false,
      iconPack: "fas",
      iconSize: "is-large",
      headerEvent: {
        bgcolor: "#1b66a9",
        color: "white",
        class: "is-about-Event",
      },
      readMoreActivated: false,
      readMore: `<a class="" id="readMore" href="#"> lire plus</a>`,
      source: "",
    };
  },
  created() {
    this.checkCountry(this.isSubdomain("https://www.benin.studely.com"));

    this.source = this.limit();
  },
  mounted: function () {
    let readmore = document.getElementById("readMore");

    readmore.addEventListener("click", () => {
      this.readMoreActivated = true;
      this.source = this.limit();
    });
  },
  methods: {
    isSubdomain(url) {
      // IF THERE, REMOVE WHITE SPACE FROM BOTH ENDS
      url = url.replace(new RegExp(/^\s+/), ""); // START
      url = url.replace(new RegExp(/\s+$/), ""); // END

      // IF FOUND, CONVERT BACK SLASHES TO FORWARD SLASHES
      url = url.replace(new RegExp(/\\/g), "/");

      // IF THERE, REMOVES 'http://', 'https://' or 'ftp://' FROM THE START
      url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i), "");

      // IF THERE, REMOVES 'www.' FROM THE START OF THE STRING
      url = url.replace(new RegExp(/^www\./i), "");

      // REMOVE COMPLETE STRING FROM FIRST FORWARD SLASH ON
      url = url.replace(new RegExp(/\/(.*)/), "");

      // REMOVES '.??.??' OR '.???.??' FROM END - e.g. '.CO.UK', '.COM.AU'
      if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i), "");

        // REMOVES '.??' or '.???' or '.????' FROM END - e.g. '.US', '.COM', '.INFO'
      } else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,4}$/i), "");
      }
      return url;
    },

    checkCountry(url) {
      // CHECK TO SEE IF THERE IS A DOT '.' LEFT IN THE STRING

      if (url.match(new RegExp(/\./g)) ? true : false) {
        let subdomain = url.split(/\.(?=[^\.]+$)/)[0];

        let countries = this.$page.countries.edges[0].node.countries;

        let country = countries.filter((item) => item === subdomain);

        if (country.length > 0) {
          this.loadCountryData(subdomain);
        }
      }
    },

    loadCountryData(subdomain) {
      //filter page by domain

      let page = [this.$page.page];
      this.page = page[0];

      this.events = this.page.events.events.filter(
        (item) => item.country === subdomain
      );

      this.director = this.page.director.filter(
        (item) => item.country === subdomain
      )[0];

      this.highlights = this.page.highlights.filter(
        (item) => item.country === subdomain
      )[0];

      this.filialeTeam = this.page.filialeTeam.filter(
        (item) => item.country === subdomain
      )[0];
    },

    // Filter definitions
    limit() {
      let part = this.director.description;

      let maxLength = 1300; // maximum number of characters to extract

      let lastReturn;

      //Trim and re-trim only when necessary (prevent re-trim when string is shorted than maxLength, it causes last word cut)
      if (part.length > maxLength) {
        //trim the string to the maximum length
        let trimmedString = part.substr(0, maxLength);
        let trimmedStringEnd = part.substr(maxLength);

        //re-trim if we are in the middle of a word and

        trimmedStringEnd = part.replace(trimmedString, "");

        if (this.readMoreActivated === true) {
          lastReturn = trimmedString + trimmedStringEnd;
        } else {
          lastReturn = trimmedString + "..." + this.readMore;
        }
      } else {
        lastReturn = part;
      }

      return lastReturn;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";

.is-highlights {
  background-color: #80a9ce;
  height: 49em;
  margin-top: 5em;
  margin-bottom: 5em;
}

.is-highlight-first {
  padding-top: 0em !important;
  margin-top: -2em !important;
}

.content-highlight-title {
  font-size: 1.5em;
}

.content-highlight {
  padding-top: 1.5em;
  color: #282828;
  font-family: jaf-domus, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
}

.is-highlights-parent {
  position: absolute;
  width: 80%;
  margin-left: 10%;
  margin-top: -5.5em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.figure-blue {
  background-color: $blue-studely;
}

.figure-green {
  background-color: $green-studely;
}

.autoheight {
  height: 80em;
}

.is-team {
  position: absolute;
  padding-left: 0px !important;
  padding-top: 0px !important;
}

.is-team-child {
  margin-top: -2ex;
  margin-left: -2ex;
  margin-bottom: 1.5ex;
  margin-right: 1.5ex;
}

.team-row {
  margin-top: 5em;
}

.is-meta {
  line-height: 1em;
}

.is-team-one-meta {
  margin-top: 18em;
}

.fond-avis {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 35em;
}

.guillemet {
  padding-top: 16%;
}
.svg-mirror {
  transform: scaleX(-1);
}

.rm-margin {
  margin-top: -5em !important;
}

.slide-item {
  border-color: $blue-studely !important;
}
.text-justify {
  text-align: justify;
}
section {
  line-height: 0.5em;
}
.mot-cofondateur {
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: justify;
}

.signature {
  color: #172b4d;
  font-family: jaf-domus, sans-serif;
  font-size: 21px;
  font-weight: 600;
  line-height: 34px;
}

.rectangle {
  display: inline-block;
  position: absolute;
  z-index: -2;
  vertical-align: middle;
  overflow: hidden;
}
.svg-content {
  display: inline-block;
  position: relative;
}
.on-left {
  left: 14%;
}

.on-right {
  right: 10%;
}
.flex-rectangle {
  width: 100%;
  border-width: 2em;
  border-color: #ca0164;
}
.flex-rectangle:before {
  content: "";
  display: block;
  padding-top: 25%;
}

.is-100 {
  width: 100%;
}

.is-calendar {
  margin-bottom: 10em;
}

@media only screen and (min-width: 1921px) and (max-width: 2560px) {
  .is-description {
    padding-left: 15em !important;
    padding-right: 15em !important;
  }

  .content-2 {
    font-size: 2em;
  }

  .is-team-one-meta {
    margin-top: 28em !important;
  }

  .team-row {
    margin-left: 0.5em;
    margin-top: 5em;
  }

  .is-meta {
    line-height: 1.2em;
  }

  .autoheight {
    height: 110em;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1920px) {
  .margin-team-title {
    margin-left: 5.2em;
  }

  .is-description {
    padding-left: 15em !important;
    padding-right: 15em !important;
  }
}

@media only screen and (min-width: 425px) and (max-width: 1920px) {
  .fond-avis {
    height: 45em;
  }
}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
  .content-2 {
    font-size: 1.8em;
  }

  .is-team-one-meta {
    margin-top: 15em !important;
  }

  .team-row {
    margin-left: 0.5em;
    margin-top: 1em;
  }

  .is-meta {
    line-height: 1.2em;
  }

  .autoheight {
    height: 70em;
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .content-2 {
    font-size: 1.5em;
  }

  .is-team-one-meta {
    margin-top: 15em !important;
  }

  .team-row {
    margin-left: 0.5em;
    margin-top: 1em;
  }

  .is-meta {
    line-height: 1.5em;
  }

  .autoheight {
    height: 70em;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .content-2 {
    font-size: 1.5em;
  }

  .is-team-one-meta {
    margin-top: 12em !important;
  }

  .team-row {
    margin-left: 0.5em;
    margin-top: 1em;
  }

  .is-meta {
    line-height: 1.5em;
  }

  .autoheight {
    height: 65em;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .is-container {
    padding-left: 10% !important;
    padding-right: 10% !important;
  }

  .content-2 {
    font-size: 1.5em;
  }

  .is-team-one-meta {
    margin-top: 10em !important;
  }

  .team-row {
    margin-left: 0.5em;
    margin-top: 1em;
  }

  .autoheight {
    height: 60em;
  }
}

@media only screen and (max-width: 1200px) {
  .guillemet {
    padding-top: 12%;
  }
}

@media only screen and (max-width: 900px) {
  .guillemet {
    padding-top: 7%;
  }
}

@media only screen and (min-width: 769px) {
  .is-half-desktop {
    width: 80%;
  }
}

@media only screen and (min-width: 415px) and (max-width: 768px) {
  .is-description {
    padding-left: 5em !important;
    padding-right: 5em !important;
  }

  .is-highlight-second {
    margin-top: -8em;
  }

  .is-highlights {
    background-color: #80a9ce;
    height: 70em;
    margin-top: 5em;
    margin-bottom: 5em;
  }

  .is-highlight-first {
    padding-top: 0em !important;
    margin-top: -4em !important;
  }
  .content-highlight-title {
    font-size: 1.2em;
  }

  .content-highlight {
    font-size: 0.8em;
  }

  .is-occupation {
    margin-top: -2em;
  }

  .is-team-child {
    margin-top: -2ex;
    margin-left: -2ex;
    margin-bottom: 1.5ex;
    margin-right: 1.5ex;
  }

  .is-meta {
    line-height: 2em;
  }

  .is-team-one-meta {
    margin-top: 10em;
  }

  .autoheight {
    height: 55em;
  }

  .content-2 {
    font-size: 1em;
  }

  .team-row {
    margin-left: 0.5em;
    margin-top: 1em;
  }

  .team-rows {
    margin-left: 2.5em;
  }

  .guillemet {
    padding-top: unset;
  }

  .is-calendar {
    margin-bottom: 1em;
  }

  .rm-padding {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .rm-margin {
    margin-top: 0.5em !important;
    padding-top: 0.5em !important;
  }
}

@media only screen and (max-width: 700px) {
  .guillemet {
    padding-top: unset;
  }
}

@media only screen and (max-width: 398px) {
  figure {
    margin: 15px;
  }
}

@media only screen and (max-width: 414px) {
  .is-description {
    padding-left: 2em !important;
    padding-right: 2em !important;
  }

  .is-highlight-second {
    margin-top: -8em;
  }

  .is-highlights {
    background-color: #80a9ce;
    height: 60em;
    margin-top: 5em;
    margin-bottom: 5em;
  }

  .is-highlight-first {
    padding-top: 0em !important;
    margin-top: -4em !important;
  }

  .content-highlight-title {
    font-size: 1.2em;
  }

  .content-highlight {
    font-size: 1em;
  }

  .is-occupation {
    margin-top: -2em;
  }

  .is-team-child {
    margin-top: -2ex;
    margin-left: -2ex;
    margin-bottom: 1.5ex;
    margin-right: 1.5ex;
  }

  .is-meta {
    line-height: 1.5em;
  }

  .autoheight {
    height: 40em;
  }

  .content-2 {
    font-size: 0.5em;
  }

  .team-row {
    margin-left: 0.5em;
    margin-top: -1em;
  }

  .team-rows {
    margin-left: 1.5em;
  }

  .is-team-one-meta {
    margin-top: 4em;
  }

  .main-box-title {
    font-size: 1em;
  }

  .rm-padding {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .rm-margin {
    margin-top: 0.5em !important;
    padding-top: 0.5em !important;
  }

  .is-calendar {
    margin-top: 8em;
    margin-bottom: 0em;
  }

  .fond-avis {
    height: auto;
  }
}

.main-box-title {
  font-size: 2em;
}

.content-12 {
  color: white;
}

@media only screen and (min-width: 769px) {
  .full-height {
    height: 100%;
  }
}
</style>