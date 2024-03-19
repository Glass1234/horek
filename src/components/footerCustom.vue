<template>
  <q-footer
    class="bg-header-black row justify-center"
    :class="isIndexPage ? 'footerBlur' : ''"
  >
    <q-separator class="bg-grey-separator full-width" />
    <div
      class="column q-pb-md"
      :class="{
        'q-pt-xl': $q.screen.width > 768,
        'col-8 q-pt-md': $q.screen.width <= 768 && $q.screen.width > 430,
        'q-pt-md': $q.screen.width <= 430 
      }"
    >
      <div class="row items-center justify-between">
        <div
          class="row justify-between"
          :style="$q.screen.width > 768 ? { 'gap': '0 80px' } : { 'gap': '0 30px', 'width': '100%' }"
        >
          <router-link class="column justify-center" to="/"
            ><q-img
              class="cursor-pointer"
              src="icons/logo.svg"
              height="auto"
              :width="$q.screen.width > 768 ? '120px' : '75px'"
          /></router-link>
          <div
            class="column"
            :class="{
              'font-16': $q.screen.width > 768,
              'font-9': $q.screen.width <= 768 
            }"
          >
            <span class="cursor-pointer" style="text-decoration: underline"
              >Email:
              <a href="mailto:manager@horek.design" class="text-white"
                >manager@horek.design</a
              ></span
            >
            <span style="color: rgba(255, 255, 255, 0.5)"
              >9:00 - 23:00 {{ t("Mon-Fri") }}
            </span>
          </div>
          <div
            class="column"
            :class="{
              'font-16': $q.screen.width > 768,
              'font-9': $q.screen.width <= 768 
            }"
          >
            <span class="cursor-pointer" style="text-decoration: underline"
              >TG:
              <a
                href="https://t.me/horekmanager"
                class="text-white"
                target="_blank"
                >@horekmanager</a
              ></span
            >
            <span style="color: rgba(255, 255, 255, 0.5)"
              >9:00 - 23:00 {{ t("Mon-Fri") }}
            </span>
          </div>
        </div>
        <div v-if="$q.screen.width > 768">
          <a href="https://t.me/horekportfolio" target="_blank">
            <q-img
              class="cursor-pointer"
              :src="require('assets/icons/telegram.svg')"
              width="29px"
            />
          </a>
        </div>
      </div>
      <div class="q-py-md" v-if="$q.screen.width > 768">
        <q-separator class="footerSeparator" />
      </div>
      <div class="row items-center justify-between" style="gap: 0 60px" v-if="$q.screen.width > 768">
        <div class="row items-center text-uppercase font-16" style="gap: 0 60px">
          <router-link class="linkCustom" to="/portfolio">
            <span>{{ t("Portfolio") }}</span>
          </router-link>
          <router-link class="linkCustom" to="/services">
            <span>{{ t("services") }}</span>
          </router-link>
          <router-link class="linkCustom" to="/contacts">
            <span>{{ t("contacts") }}</span>
          </router-link>
        </div>
        <div
          :class="{
            hidden: $q.screen.width < 1024,
            'font-16': $q.screen.width >= 1024,
          }"
        >
          <div class="row blockConsultation">
            <div class="q-px-lg q-py-sm">{{ t("shall we discuss your project?") }}</div>
            <q-space />
            <q-separator class="bg-red-7" vertical />
            <div class="text-red-7 text-uppercase q-px-lg q-py-sm cursor-pointer">{{ t("Consultation") }}</div>
          </div>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const route = useRoute();
const isIndexPage = computed(() => route?.path === "/");
</script>

<style scoped lang="scss">
.footerBlur {
  background: linear-gradient(0deg, rgba(4, 6, 10, 0.72), rgba(4, 6, 10, 0.72)),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 0%,
      #dc143b 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
}
.footerSeparator {
  mix-blend-mode: overlay;
  background-color: white;
}

.blockConsultation {
  border: 1px solid $red-7;
  border-radius: 10px;
}
.linkCustom {
  color: white;
  transition: color 0.3s;
  text-decoration: none;
}
.linkCustom:hover {
  color: $red-7;
}
</style>
