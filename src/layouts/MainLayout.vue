<template>
  <q-layout class="bg-main-page position-relative" view="lHh Lpr lff">
    <q-img
      class="absolute"
      src="images/luminescence.png"
      :style="$q.screen.width <= 430 ? { 'max-width': '100%', 'height':  '100vh' } : { 'max-width': '100%', 'max-height':  '100%' }"
    />
    <headerCustom />

    <q-page-container class="sticky" style="z-index: 10" :style="$q.screen.width > 430 ? { 'padding-top': '80px' } : { 'padding-top': '10px' }">
      <router-view />
    </q-page-container>
    <footerCustom />
    <q-img
      v-if="isIndexPage"
      class="absolute"
      src="images/footerglow.png"
      style="max-width: 100%; max-height: 100%; bottom: 0"
    />
  </q-layout>
</template>

<script setup>
import headerCustom from "components/headerCustom.vue";
import footerCustom from "components/footerCustom.vue";

import { useStore } from "vuex";
import { useSSRContext, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const $store = useStore();

// SSR
{
  if (process.env.SERVER) {
    let clientLanguages = useSSRContext().req.headers["accept-language"];
    clientLanguages = clientLanguages.split(",").map((entry) => {
      const [language, weight] = entry.trim().split(";q=");
      return {
        language: language.toLowerCase(),
        weight: weight ? parseFloat(weight) : 1.0,
      };
    });
    const clientLanguage = clientLanguages[0].language.startsWith("ru")
      ? "ru"
      : "eng";
    $store.commit("languageClient/setLangHTTP", clientLanguage);
  }
}

// NO SSR
const { locale } = useI18n();
const route = useRoute();

locale.value =
  $store.getters["languageClient/getLangHTTP"] === "ru" ? "ru-RU" : "en-US";

const isIndexPage = computed(() => route?.path === "/");
</script>

<style scoped lang="scss"></style>
