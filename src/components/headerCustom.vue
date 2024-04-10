<template>
  <q-header
    class="bg-header-black headerBlur"
    style="z-index: 7000"
    :style="$q.screen.width > 768 ? {} : { position: 'relative !important' }"
    v-if="modalDis.isOpenModal == false"
  >
    <div class="row justify-center" style="height: 80px">
      <div
        class="row justify-between col col-8"
        :class="{
          'col-8': $q.screen.width > 1024,
          'col-10': $q.screen.width <= 1024,
        }"
        :style="$q.screen.width > 768 ? {} : { display: 'none' }"
      >
        <div
          class="row items-center text-uppercase font-16"
          style="gap: 0 60px"
        >
          <router-link to="/" class="q-pb-sm"
            ><q-img
              class="cursor-pointer"
              src="icons/logo.svg"
              height="auto"
              width="82px"
          /></router-link>
          <router-link class="linkCustom" to="/portfolio"
            ><span>{{ t("Portfolio") }}</span></router-link
          >
          <router-link class="linkCustom" to="/services"
            ><span>{{ t("services") }}</span></router-link
          >
          <router-link class="linkCustom" to="/contacts"
            ><span>{{ t("contacts") }}</span></router-link
          >
        </div>
        <div class="row items-center gap-x-lg">
          <div class="relative-position">
            <div
              class="row items-center gap-x-md cursor-pointer q-pa-xs"
              @click="lang.isOpenModal = !lang.isOpenModal"
            >
              <q-img
                :src="require(`assets/icons/${lang.userLanguage}_flag.svg`)"
                width="22px"
                height="16px"
              />
              <q-icon
                :class="lang.isOpenModal ? 'rotate-180' : ''"
                name="las la-angle-down"
              />
            </div>
            <div
              v-if="lang.isOpenModal"
              class="absolute"
              style="top: 30px; right: 0"
            >
              <div class="dropMenu">
                <q-item
                  class="row items-center gap-x-md"
                  style="border-radius: 16px 16px 0 0"
                  clickable
                  @click="lang.setLanguages('ru')"
                >
                  <q-img
                    :src="require('assets/icons/ru_flag.svg')"
                    width="22px"
                    height="16px"
                  />
                  <q-item-section>Русский</q-item-section>
                </q-item>
                <q-separator
                  class="bg-grey-separator"
                  :style="$q.screen.width > 768 ? {} : { display: 'none' }"
                />
                <q-item
                  class="row items-center gap-x-md"
                  style="border-radius: 0 0 16px 16px"
                  clickable
                  @click="lang.setLanguages('eng')"
                >
                  <q-img
                    :src="require('assets/icons/eng_flag.svg')"
                    width="22px"
                    height="16px"
                  />
                  <q-item-section>English</q-item-section>
                </q-item>
              </div>
            </div>
          </div>
          <q-btn
            class="bg-red-button font-16"
            rounded
            unelevated
            no-caps
            @click="modalDis.isOpenModal = true"
            :label="t('Consultation')"
          />
        </div>
      </div>
      <div
        class="row justify-between col col-10"
        :style="$q.screen.width > 768 ? { display: 'none' } : {}"
      >
        <div
          class="row items-center text-uppercase font-16"
          style="gap: 0 60px"
        >
          <router-link to="/" class="q-pb-sm"
            ><q-img
              class="cursor-pointer"
              src="icons/logo.svg"
              height="auto"
              :width="$q.screen.width > 430 ? '83px' : '59px'"
          /></router-link>
        </div>
        <div class="row items-center">
          <q-btn
            flat
            round
            icon="menu"
            style="width: 24px; height: 24px"
            @click="toggleMenu"
          />
        </div>
      </div>
    </div>
    <q-separator
      class="bg-grey-separator"
      :style="$q.screen.width > 768 ? {} : { display: 'none' }"
    />
  </q-header>
  <q-dialog
    v-model="modalMenu"
    style="background-color: rgba(0, 0, 0, 0.3); backdrop-filter: blur(32px)"
  >
    <div
      style="text-transform: uppercase; gap: 120px 0; width: 100vh"
      class="font-24"
    >
      <div class="column" style="gap: 12px 0">
        <router-link class="linkCustom" to="/portfolio"
          ><span>{{ t("Portfolio") }}</span></router-link
        >
        <router-link class="linkCustom" to="/services"
          ><span>{{ t("services") }}</span></router-link
        >
        <router-link class="linkCustom" to="/contacts"
          ><span>{{ t("contacts") }}</span></router-link
        >
        <div class="row items-center" style="color: white">
          <q-img
            :src="require(`assets/icons/${lang.userLanguage}_flag.svg`)"
            width="22px"
            height="16px"
            style="margin-right: 14px"
          />
          <div
            v-if="lang.userLanguage == 'ru'"
            @click="lang.setLanguages('eng')"
          >
            Русский
          </div>
          <div v-else @click="lang.setLanguages('ru')">English</div>
        </div>
      </div>
      <div
        class="row justify-between col col-10 items-center text-center q-pt-xl"
        style="width: 100%"
      >
        <div
          class="font-24 col-2 text-red-button"
          style="cursor: pointer"
          @click="modalDis.isOpenModal = true"
        >
          {{ t("Consultation") }}
        </div>
        <div class="col-2">
          <q-img
            class="cursor-pointer"
            :src="require('assets/icons/telegram.svg')"
            width="29px"
          />
        </div>
      </div>
    </div>
  </q-dialog>
  <q-dialog v-model="modalDis.isOpenModal">
    <communicationModal />
  </q-dialog>
</template>

<script setup>
import communicationModal from "components/communicationModal.vue";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";

const $q = useQuasar();

const { t, locale } = useI18n();

const $store = useStore();

class LanguagePage {
  userLanguage = "ru";
  isOpenModal = false;
  constructor() {
    this.userLanguage = $store.getters["languageClient/getLangHTTP"];
  }
  setLanguages(type) {
    if (type !== this.userLanguage) {
      this.isOpenModal = false;
      this.userLanguage = type;
      $store.commit("languageClient/setLangLocal", type);
      locale.value = type === "ru" ? "ru-RU" : "en-US";
    }
  }
}

const lang = reactive(new LanguagePage());

const modalDis = reactive({
  isOpenModal: false,
});

const modalMenu = ref(false);

const toggleMenu = () => {
  modalMenu.value = !modalMenu.value;
};
</script>

<style scoped lang="scss">
.linkCustom {
  color: white;
  transition: color 0.3s;
  text-decoration: none;
}

.linkCustom:hover {
  color: $red-7;
}

.dropMenu {
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(32px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}

.headerBlur {
  background-color: rgba(0, 0, 0, 0);
}

.inputCustom :deep(.q-field__control) {
  border-radius: 8px;
}

@media (min-width: 431px) {
  .headerBlur {
    backdrop-filter: blur(20.5px);
  }
}
</style>
