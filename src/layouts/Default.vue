<template>
  <div class="layout hero is-fullheight has-background-light">
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
};
</script>
