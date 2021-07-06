<template>
  <Layout>
    <section class="section has-text-centered is-paddingless">
      <div class="columns is-vcentered is-mobile has-text-centered is-centered">
        <div class="column is-12">
          <figure class="image">
            <g-image src="~/assets/blog/banner.jpg" fit="inside" />
          </figure>
        </div>
      </div>
    </section>
    <section class="section is-hidden-tablet">
      <div class="columns">
        <div class="column" style="padding-top: 3em">
          <!--category card -->

          <div class="columns is-centered">
            <br />
            <br />
            <br />
            <br />

            <div class="column is-10">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div class="columns is-variable">
                      <div class="column is-half">
                        <g-link :to="$page.articles.edges[0].node.path">
                          <figure class="image">
                            <img
                              alt="coverImage"
                              :src="
                                $page.articles.edges[0].node.coverImage.file.url
                              "
                            />
                          </figure>
                        </g-link>
                      </div>
                      <div class="column is-half has-text-left">
                        <strong class="content-14">{{
                          format_date($page.articles.edges[0].node.date)
                        }}</strong>
                        <br />
                        <strong class="content-24">{{
                          $page.articles.edges[0].node.title
                        }}</strong>
                        <br />
                        <br />
                        <span class="content excerpt">{{
                          $page.articles.edges[0].node.excerpt
                        }}</span>
                        <br />
                        <br />
                        <g-link :to="$page.articles.edges[0].node.path"
                          >Lire plus</g-link
                        >
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

          <br />
          <br />
          <br />
          <br />
          <div class="columns has-text-centered">
            <div class="column">
              <strong class="title has-text-primary"
                >Studely vous recommande aussi...</strong
              >
            </div>
          </div>
          <br />
          <br />
          <div
            class="columns is-multiline is-5 is-mobile has-text-centered is-centered container"
          >
            <div class="column is-4-desktop is-5-tablet is-10-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/mon-projet-d-etudes-en-france/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/projet.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/mon-projet-d-etudes-en-france/">
                      <strong>Mon projet d'études</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-4-desktop is-5-tablet is-10-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/finance/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/avi.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/finance/">
                      <strong>Mes ressources financières</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4-desktop is-5-tablet is-10-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/mon-logement-etudiant/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/logement.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/mon-logement-etudiant/">
                      <strong>Mon logement étudiant</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-4-desktop is-5-tablet is-10-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/ma-caution-bancaire/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/compte.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/ma-caution-bancaire/">
                      <strong>Mon compte bancaire</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4-desktop is-5-tablet is-10-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/assurance/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/projet.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/assurance/">
                      <strong>Mon assurance</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-4-desktop is-5-tablet is-10-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/vie-etudiante/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/vie.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/vie-etudiante/">
                      <strong>Ma vie étudiante en France</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column" style="padding-top: 3em">
          <!--  recently publied articles  -->

          <div class="columns">
            <div class="column is-12">
              <h2>
                <strong class>Autres articles</strong>
              </h2>
            </div>
            <div
              v-for="(edge, index) in $page.articlesmobile.edges"
              :key="edge.node.id"
              :article="edge.node"
              class="column is-12"
              style="border-bottom: solid"
            >
              <div v-if="index > 0" class="columns is-vcentered">
                <div class="column is-8">
                  <strong class="is-pulled-left has-text-left">
                    <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
                  </strong>
                </div>
                <div class="column is-4">
                  <span class="has-text-right">{{
                    format_date(edge.node.date)
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-text-centered is-paddingless is-hidden-mobile">
      <div class="columns is-multiline has-text-centered is-centered">
        <div
          class="column is-8-desktop is-10-tablet is-10-mobile"
          style="padding-top: 3em"
        >
          <!--category card -->

          <div class="columns is-centered">
            <br />
            <br />
            <br />
            <br />

            <div class="column is-10">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div class="columns is-variable">
                      <div class="column is-half">
                        <g-link :to="$page.articles.edges[0].node.path">
                          <figure class="image">
                            <img
                              alt="coverImage"
                              :src="
                                $page.articles.edges[0].node.coverImage.file.url
                              "
                            />
                          </figure>
                        </g-link>
                      </div>
                      <div class="column is-half has-text-left">
                        <strong class="content-14">{{
                          format_date($page.articles.edges[0].node.date)
                        }}</strong>
                        <br />
                        <strong class="content-24">{{
                          $page.articles.edges[0].node.title
                        }}</strong>
                        <br />
                        <br />
                        <span class="content excerpt">{{
                          $page.articles.edges[0].node.excerpt
                        }}</span>
                        <br />
                        <br />
                        <g-link :to="$page.articles.edges[0].node.path"
                          >Lire plus</g-link
                        >
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

          <br />
          <br />
          <br />
          <br />
          <div class="columns has-text-left">
            <div class="column">
              <strong class="title has-text-primary"
                >Studely vous recommande aussi...</strong
              >
            </div>
          </div>
          <br />
          <br />
          <div
            class="columns is-multiline is-5 is-mobile has-text-centered is-centered container"
          >
            <div class="column is-4-desktop is-5-tablet is-8-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/mon-projet-d-etudes-en-france/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/projet.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/mon-projet-d-etudes-en-france/">
                      <strong>Mon projet d'études</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-4-desktop is-5-tablet is-10-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/finance/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/avi.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/finance/">
                      <strong>Mes ressources financières</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4-desktop is-5-tablet is-10-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/mon-logement-etudiant/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/logement.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/mon-logement-etudiant/">
                      <strong>Mon logement étudiant</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-4-desktop is-5-tablet is-10-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/ma-caution-bancaire/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/compte.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/ma-caution-bancaire/">
                      <strong>Mon compte bancaire</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4-desktop is-5-tablet is-10-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/assurance/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/projet.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/assurance/">
                      <strong>Mon assurance</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-4-desktop is-5-tablet is-10-mobile">
              <div class="card">
                <div class="card-image">
                  <g-link to="/category/vie-etudiante/">
                    <figure class="image is-4by3">
                      <g-image src="~/assets/blog/vie.jpg" fit="cover" />
                    </figure>
                  </g-link>
                </div>
                <div class="card-content">
                  <div class="content">
                    <g-link to="/category/vie-etudiante/">
                      <strong>Ma vie étudiante en France</strong>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="column is-3-desktop is-10-tablet is-10-mobile"
          style="padding-top: 3em"
        >
          <!--  recently publied articles  -->

          <div class="columns is-multiline has-text-pulled-left">
            <div class="column is-12">
              <h2>
                <strong class="is-pulled-left">Autres articles</strong>
              </h2>
            </div>
            <div id="scroll-area" class="smooth-scroll-area-blog-d">
              <smooth-scrollbar>
                <div
                  v-for="(edge, index) in $page.articlesweb.edges"
                  :key="edge.node.id"
                  :article="edge.node"
                  class="column is-12"
                  style="border-bottom: solid"
                >
                  <div v-if="index > 0" class="columns is-vcentered">
                    <div class="column is-8">
                      <strong class="is-pulled-left has-text-left">
                        <g-link :to="edge.node.path">{{
                          edge.node.title
                        }}</g-link>
                      </strong>
                    </div>
                    <div class="column is-4">
                      <span class="has-text-right is-pulled-right">{{
                        format_date(edge.node.date)
                      }}</span>
                    </div>
                  </div>
                </div>
              </smooth-scrollbar>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- before footer section  -->
    <section
      class="section has-text-centered is-paddingless is-hidden-tablet"
      style="margin-top: 3rem"
    >
      <div
        class="columns is-multiline is-vcentered is-mobile has-text-centered is-centered forum"
      >
        <div
          class="column is-8-desktopn is-12-mobile is-marginless is-paddingless"
        >
          <h2 class>Question sur un projet d'études en France ?</h2>
          <br />
          <br />
          <b-button
            tag="a"
            href="https://www.facebook.com/StudelyFrance/"
            type="is-danger"
            class="is-combutton"
          >
            <strong>Je rejoins la communauté Studely</strong>
          </b-button>
        </div>
      </div>
    </section>
    <section
      class="section has-text-centered is-paddingless is-hidden-mobile"
      style="margin-top: 3rem"
    >
      <div
        class="columns is-multiline is-vcentered is-mobile has-text-centered is-centered forum"
      >
        <div
          class="column is-8-desktop is-12-mobile is-marginless is-paddingless"
        >
          <h2>Question sur un projet d'études en France ?</h2>
          <br />
          <br />
          <b-button
            tag="a"
            href="https://www.facebook.com/StudelyFrance/"
            type="is-danger"
            size="is-large"
          >
            <strong>Je rejoins la communauté studely</strong>
          </b-button>
          <br />
          <br />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query TousLesArticles ($page: Int) {
  articles: allContentfulPost(perPage: 10, page: $page, limit: 5) @paginate {
    pageInfo {
        totalPages
        currentPage
      }
    edges {
      node {
        id
        title
        path
        date
        excerpt
        author
        timeToRead
        categories {
          id
          title
        }
        coverImage {
          file {
            url
          }
        }
        tags{title}
      }
    }
  }

  articlesmobile: allContentfulPost(limit:6) {
    edges {
      node {
        id
        title
        path
        date
        excerpt
        author
        timeToRead
        categories {
          id
          title
        }
        coverImage {
          file {
            url
          }
        }
      }
    }
  }

  articlesweb: allContentfulPost {
    edges {
      node {
        id
        title
        path
        date
        excerpt
        author
        timeToRead
        categories {
          id
          title
        }
        coverImage {
          file {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import moment from "moment";

export default {
  metaInfo: {
    title: "Blog Studely",
    meta: [
      {
        name: "description",
        content:
          "Découvrez toutes les astuces et conseils pour réussir votre projet d’études en France",
      },
    ],
  },
  data() {
    return {
      loadedPosts: [],
      currentPage: 1,
    };
  },
  created() {
    this.loadedPosts.push(...this.$page.articles.edges);
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.articles.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(`/blog/${this.currentPage + 1}`);
        if (data.articles.edges.length) {
          this.currentPage = data.articles.pageInfo.currentPage;
          this.loadedPosts.push(...data.articles.edges);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMMM YYYY");
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
a {
  color: $black-studely;
}

a:hover {
  color: $blue-studely;
}

.excerpt {
  min-height: 8em;
}

.hearder-image {
  background-image: url("./../../static/blog/banner.jpg");
  background-size: cover;
  height: 45.6rem;
}

.forum {
  background-image: url("./../../static/blog/rectangle_forum.png");
  background-size: cover;
}

.is-bordered {
  border-color: $blue-studely;
}

.padding {
  padding-bottom: unset !important;
}

.rectangle-mini {
  box-sizing: border-box;
  margin-top: 7px;
  padding-left: 2.25rem;
}

.smooth-scroll-area-blog-d {
  height: 800px;
}

.is-combutton {
  margin-bottom: 2em;
}
</style>

