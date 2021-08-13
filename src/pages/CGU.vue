<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">{{ $page.page.title }}</h1>
      </div>
      <div class="container">
        <vue-markdown class="content">{{ $page.page.content }}</vue-markdown>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  page: staticPage(path: "/content/pages/cgu/") {
    id
    path
    title
    content
    date
  }
}
</page-query>

<script>
import VueMarkdown from "vue-markdown";

export default {
  components: {
    VueMarkdown,
  },
  metaInfo: {
    title: "CGU",
    meta: [
      {
        name: "Les conditions génerales d'utilisation",
        content: "CGU",
      },
    ],
  },
};
</script>