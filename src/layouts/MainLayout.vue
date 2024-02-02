<template>
  <q-layout class="bg-main-page position-relative" view="lHh Lpr lFf">
    <q-img class="absolute" src="images/luminescence.png" />
    <headerCustom />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import headerCustom from "components/headerCustom.vue";

import { useStore } from "vuex";
import { useSSRContext, onMounted } from "vue";
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

const tmp =
  $store.getters["languageClient/getLangHTTP"] === "ru" ? "ru-RU" : "en-US";
locale.value = tmp;
</script>

<style scoped lang="scss"></style>
