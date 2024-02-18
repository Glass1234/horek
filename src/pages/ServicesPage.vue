<template>
  <div
    class="row justify-center full-width text-white q-pt-lg"
    style="padding-bottom: 100px"
  >
    <div class="col-8">
      <q-breadcrumbs class="font-15" active-color="white" gutter="sm">
        <q-breadcrumbs-el :label="t('Home')" to="/" />
        <q-breadcrumbs-el :label="t('Services')" />
      </q-breadcrumbs>
      <div>
        <h2 class="font-34 q-mb-none">{{ t("Graphic arts") }}</h2>
        <div class="row q-mt-md" style="gap: 26px">
          <div class="column" v-for="(item, index) in graphics" :key="index">
            <div class="blockSkill">
              <q-img
                :src="require(`assets/icons/servicesIcons/${item.icon}.png`)"
                width="207px"
                height="207px"
              />
            </div>
            <div class="q-mt-sm">
              <span class="font-16">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="font-34 q-mb-none">{{ t("Web and") }} UI\UX</h2>
        <div class="row q-mt-md" style="gap: 26px">
          <div class="column" v-for="(item, index) in UI_UX" :key="index">
            <div class="blockSkill">
              <q-img
                :src="require(`assets/icons/UI_UXIcons/${item.icon}.png`)"
                width="207px"
                height="207px"
              />
            </div>
            <div class="q-mt-sm">
              <span class="font-16">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="font-34 q-mb-none">{{ t("Code") }}</h2>
        <div class="blockSkill row justify-center">
          <q-img
            :src="require(`assets/icons/codeIcons.png`)"
            width="207px"
            height="207px"
          />
        </div>
        <div class="q-mt-sm">
          <div class="row items-center font-16 no-wrap">
            <q-chip
              color="red-7"
              text-color="white"
              :clickable="false"
              label="FRONTED"
              style="width: 92px"
            />
            <span class="q-ml-sm" style="word-wrap: break-word"
              >SSR, SPA, PWA, vue3, vueRouter, vuex, pinia, axios, quasar,
              tailwind, css, scss, html, js</span
            >
          </div>
          <div class="row font-16 no-wrap q-mt-sm">
            <q-chip
              color="red-7"
              text-color="white"
              :clickable="false"
              label="OTHER"
              style="min-width: 92px; max-width: 92px"
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
        <h3 class="font-34 q-mb-none">
          {{ t("Didn't find what you were looking for?") }}
        </h3>
        <div class="q-mt-sm">
          <span class="font-16">{{
            t(
              "Write to us for a consultation via Telegram or Email, and the manager will assist in finding the necessary information. We are always ready to help you resolve any questions and provide the necessary support."
            )
          }}</span>
        </div>
        <h3 class="font-34 q-mb-none">{{ t("Prices") }}</h3>
        <div class="q-mt-sm">
          <span class="font-16">{{
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
import { ref } from "vue";
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
:deep(.q-chip__content) {
  justify-content: center;
}
</style>
