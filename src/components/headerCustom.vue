<template>
  <q-header class="header">
    <div class="relative-position">
      <div class="header-row relative-position" style="z-index: 100">
        <div class="row items-center justify-between">
          <div class="row items-center" style="gap: 26px">
            <router-link class="column justify-center" to="/"
            >
              <q-img
                class="cursor-pointer"
                src="icons/logo.svg"
                height="auto"
                width="113px"
              />
            </router-link>
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
          <div class="row items-center" style="gap: 19px">
            <q-btn-dropdown
              class="dropMenu"
              unelevated
              :ripple="false"
              transition-duration="0"
              flat
              no-caps
              color="blue-1"
              dropdown-icon="las la-angle-down"
            >
              <template v-slot:label>
                <q-img
                  :src="require(`assets/icons/${lang.userLanguage}_flag.svg`)"
                  width="22px"
                  height="16px"
                />
              </template>

              <div class="relative-position">
                <q-list class="listMenu relative-position" style="z-index: 100">
                  <q-item
                    class="row items-center gap-x-md"
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
                  <q-separator class="bg-white"/>
                  <q-item
                    class="row items-center gap-x-md"
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
                </q-list>
                <div class="blur-background"></div>
              </div>
            </q-btn-dropdown>
            <q-btn
              class="bg-white linkCustom btn-shdow"
              style="border-radius: 8px; font-weight: 500"
              :ripple="{ color: 'black' }"
              unelevated
              no-caps
              @click="modalDis.isOpenModal = true"
              :label="t('Consultation')"
            />
          </div>
        </div>
      </div>
      <div class="blur-background"></div>
    </div>
  </q-header>
  <q-dialog v-model="modalDis.isOpenModal">
    <communicationModal/>
  </q-dialog>
</template>

<script setup>
import communicationModal from "components/communicationModal.vue";
import {reactive, ref} from "vue";
import {useStore} from "vuex";
import {useI18n} from "vue-i18n";
import {useQuasar} from "quasar";

const $q = useQuasar();

const {t, locale} = useI18n();

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

const modalDis = reactive({
  isOpenModal: false,
});

const lang = reactive(new LanguagePage());
</script>

<style scoped lang="scss">
.header {
  background-color: transparent;
  width: 50%;
  margin: 0 auto;
  padding-top: 33px;
}

.header-row {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ffffff;
  background: #ffffff87;
  border-radius: 18px;
}

.blur-background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(50px);
  z-index: 10;
  border-radius: 18px;
}

.listMenu {
  background: #ffffff87;
  border: 1px solid #ffffff;
  border-radius: 18px;
}

</style>
