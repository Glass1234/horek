<template>
  <div
    class="row justify-center full-width text-white"
    :class="{
      'q-pt-lg': $q.screen.width > 430,
    }"
    :style="$q.screen.width > 430 ? {'padding-bottom' : '100px'} : {'padding-bottom' : '26px', 'margin-top' : '-30px'}"
  >
    <div 
      :class="{
        'col-8': $q.screen.width > 768,
        'col-10': $q.screen.width <= 768 && $q.screen.width > 430, 
        'col-11': $q.screen.width <= 430 
      }"
      :style="$q.screen.width > 430 ? {} : {'padding' : '0 7px'}"
    >
      <q-breadcrumbs class="font-15" active-color="white" gutter="sm" :style="$q.screen.width > 430 ? {} : {'display' : 'none'}">
        <q-breadcrumbs-el :label="t('Home')" to="/" />
        <q-breadcrumbs-el :label="t('Services')" />
      </q-breadcrumbs>
      <div>
        <h2 
          class=" q-mb-none"
          :class="{
            'font-34': $q.screen.width > 430,
            'font-16': $q.screen.width <= 430 
          }"
        >{{ t("Graphic arts") }}</h2>
        <div
          class="row"
          :class="{
            'q-mt-md': $q.screen.width > 430,
            'q-mt-xs': $q.screen.width <= 430 
          }"
          :style="$q.screen.width > 430 ? {'gap' : '26px'} : {'gap' : '10px'}"
        >
          <div class="column" v-for="(item, index) in graphics" :key="index">
            <div class="blockSkill">
              <q-img
                class="blockSkill-size"
                :src="require(`assets/icons/servicesIcons/${item.icon}.png`)"
              />
            </div>
            <div
              :class="{
                'q-mt-sm': $q.screen.width > 430,
                'q-mt-xs': $q.screen.width <= 430 
              }"
            >
              <span
                :class="{ 
                  'font-16': $q.screen.width > 430, 
                  'font-9': $q.screen.width <= 430 
              }"
            >{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="{
          'q-mb-md': $q.screen.width > 430,
          'q-mb-lg': $q.screen.width <= 430 
        }"
      >
        <h2 
          class="q-mb-none"
          :class="{
            'font-34': $q.screen.width > 430,
            'font-16': $q.screen.width <= 430 
          }"
        >{{ t("Web and") }} UI\UX</h2>
        <div 
          class="row"
          :class="{
            'q-mt-md': $q.screen.width > 430,
            'q-mt-xs': $q.screen.width <= 430 
          }" 
          :style="$q.screen.width > 430 ? {'gap' : '26px'} : {'gap' : '10px'}"
        >
          <div class="column" v-for="(item, index) in UI_UX" :key="index">
            <div class="blockSkill">
              <q-img
                class="blockSkill-size"
                :src="require(`assets/icons/UI_UXIcons/${item.icon}.png`)"                
              />
            </div>
            <div               
              :class="{
                'q-mt-sm': $q.screen.width > 430,
                'q-mt-xs': $q.screen.width <= 430 
              }">
              <span
                :class="{ 
                  'font-16': $q.screen.width > 430, 
                  'font-9': $q.screen.width <= 430 
                }"
            >{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div 
        :class="{ 
          'q-pt-xl': $q.screen.width > 430, 
          'q-pt-md': $q.screen.width <= 430 
        }"
      >
        <h
          :class="{ 
            'font-34': $q.screen.width > 430, 
            'font-16': $q.screen.width <= 430 
          }">
        {{ t("Code") }}</h>
        <div
          class="blockSkill row justify-center"
          :class="{ 
            'q-mt-xl': $q.screen.width > 430, 
            'q-mt-lg': $q.screen.width <= 430 
          }"
        >
          <q-img
            :src="require(`assets/icons/codeIcons.png`)"
            :width="$q.screen.width > 430 ? '207px' : '116px'"
            :height="$q.screen.width > 430 ? '207px' : '116px'"
          />
        </div>
        <div class="q-mt-sm">
          <div 
            class="row items-center no-wrap"
            :class="{ 
              'font-16': $q.screen.width > 430, 
              'font-9': $q.screen.width <= 430 
            }"
          >
            <q-chip
              color="red-7"
              text-color="white"
              :clickable="false"
              label="FRONTED"
              :style="$q.screen.width > 430 ? {'min-width' : '105px', 'max-width' : '105px'} : {'min-width' : '65px', 'max-width' : '65px'}"
              :class="{ 
                'font-16': $q.screen.width > 430, 
                'font-9': $q.screen.width <= 430 
              }"
            />
            <span class="q-ml-sm" style="word-wrap: break-word"
              >SSR, SPA, PWA, vue3, vueRouter, vuex, pinia, axios, quasar,
              tailwind, css, scss, html, js</span
            >
          </div>
          <div 
            class="row no-wrap q-mt-sm"
            :class="{ 
              'font-16': $q.screen.width > 430, 
              'font-9': $q.screen.width <= 430 
            }"
          >
            <q-chip
              color="red-7"
              text-color="white"
              :clickable="false"
              :class="{ 
                'font-16': $q.screen.width > 430, 
                'font-9': $q.screen.width <= 430 
              }"
              label="OTHER"
              :style="$q.screen.width > 430 ? {'min-width' : '105px', 'max-width' : '105px'} : {'min-width' : '65px', 'max-width' : '65px'}"
            />
            <div class="q-ml-sm" style="word-wrap: break-word">
              <span>Non-GUI {{ t("applications in") }} C/C++/Python/Java</span
              ><br />
              <span
                >{{ t("Development of bots for VKontakte and") }} Discord</span
              ><br />
              <span>{{ t("Working with the HTTP protocol") }}</span
              ><br />
              <span>{{
                t("Writing parsers for websites and other resources")
              }}</span
              ><br />
              <span>{{ t("Microcontroller programming") }}</span
              ><br />
              <span>{{ t("Experience with") }} Linux</span><br />
            </div>
          </div>
        </div>
        <h3 
          class="q-mb-none"
          :class="{ 
            'font-34': $q.screen.width > 430, 
            'font-16': $q.screen.width <= 430 
          }"
        > {{ t("Didn't find what you were looking for?") }}
        </h3>
        <div
          :class="{ 
            'q-mt-sm': $q.screen.width > 430, 
            'q-mt-none': $q.screen.width <= 430 
          }"
        >
          <span 
            :class="{ 
              'font-16': $q.screen.width > 430, 
              'font-9': $q.screen.width <= 430 
            }"
          >{{
            t(
              "Write to us for a consultation via Telegram or Email, and the manager will assist in finding the necessary information. We are always ready to help you resolve any questions and provide the necessary support."
            )
          }}</span>
        </div>
        <h3
          class="q-mb-none"
          :class="{ 
            'font-34': $q.screen.width > 430, 
            'font-16': $q.screen.width <= 430 
          }"
        > {{ t("Prices") }}</h3>
        <div
          :class="{ 
            'q-mt-sm': $q.screen.width > 430, 
            'q-mt-none': $q.screen.width <= 430 
          }"
        >
          <span
            :class="{ 
              'font-16': $q.screen.width > 430, 
              'font-9': $q.screen.width <= 430 
            }"
          >{{
            t(
              "Unique price for a unique project. We adapt the cost of our services to your technical requirements. Find out the exact cost of your project by contacting the manager."
            )
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const graphics = ref([
  {
    icon: "1",
    name: t("Logo"),
  },
  {
    icon: "2",
    name: t("Form style"),
  },
  {
    icon: "3",
    name: t("Advertising creative"),
  },
  {
    icon: "4",
    name: t("SMM design (Packaging)"),
  },
  {
    icon: "5",
    name: t("Brandbook"),
  },
]);

const UI_UX = ref([
  {
    icon: "1",
    name: t("Landing"),
  },
  {
    icon: "2",
    name: t("Corporate website"),
  },
  {
    icon: "3",
    name: t("Promo website"),
  },
  {
    icon: "4",
    name: t("Online store"),
  },
  {
    icon: "5",
    name: t("Online service"),
  },
  {
    icon: "6",
    name: t("Mobile app"),
  },
  {
    icon: "7",
    name: t("User interface"),
  },
]);

</script>

<style scoped lang="scss">

.blockSkill {
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.04)
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
}

.blockSkill-size {
  width: 116px;
  height: 116px
}

@media (min-width: 769px) {
  .blockSkill-size {
    width: 207px;
    height: 207px
  }
}

@media (min-width: 431px) {
  .blockSkill-size {
    width: 190px;
    height: 190px
  }
}


:deep(.q-chip__content) {
  justify-content: center;
}
</style>
