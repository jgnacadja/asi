<template>
  <div class="layout hero is-fullheight" :class="typeNavbar">
    <TheMegamenu />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <TheFooter />
  </div>
</template>

 <script>
import TheMegamenu from "~/components/TheMegamenu.vue";
import TheFooter from "~/components/TheFooter.vue";

export default {
  components: {
    TheMegamenu,
    TheFooter,
  },
  data() {
    return {
      typeNavbar: "is-info",
    };
  },
  mounted() {
    var url = location.href; // = location.href
    var parts = url.split("/").slice(2);
    if (parts[1] === "") {
      this.typeNavbar = "is-info";
    } else {
      this.typeNavbar = "is-white";
    }
  },
};
</script>
