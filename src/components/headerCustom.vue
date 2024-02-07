<template>
  <q-header class="bg-header-black headerBlur">
    <div class="row justify-center" style="height: 80px">
      <div class="row justify-between col col-8">
        <div
          class="row items-center text-uppercase font-16"
          style="gap: 0 60px"
        >
          <router-link to="/"
            ><q-img
              class="cursor-pointer"
              src="icons/logo.svg"
              height="auto"
              width="82px"
          /></router-link>
          <router-link class="linkCustom" to="/"
            ><span>портфолио</span></router-link
          >
          <router-link class="linkCustom" to="/services"
            ><span>услуги</span></router-link
          >
          <router-link class="linkCustom" to="/contacts"
            ><span>контакты</span></router-link
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
                <q-separator class="bg-grey-separator" />
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
            :label="t('consultation')"
          />
        </div>
      </div>
    </div>
    <q-separator class="bg-grey-separator" />
  </q-header>
  <q-dialog v-model="modalDis.isOpenModal">
    <div
      class="relative-position bg-red-7"
      style="width: 430px; border-radius: 30px"
    >
      <div class="sticky" style="padding: 30px; z-index: 10">
        <div class="text-center text-white">
          <div class="font-28">Обсудить ваш проект</div>
          <div class="font-16" style="color: rgba(255, 255, 255, 0.75)">
            Укажите контакты для связи<br />
            (Telegram или Email)
          </div>
        </div>
        <div class="q-mt-xl column" style="gap: 8px">
          <q-input
            v-model="modalDis.userName"
            placeholder="Имя"
            color="green-2"
            bg-color="white"
            outlined
            dense
            class="inputCustom"
          />
          <q-input
            v-model="modalDis.userContact"
            placeholder="Контакт"
            color="green-2"
            bg-color="white"
            outlined
            dense
            class="inputCustom"
          />
          <q-btn
            @click="modalDis.sendData()"
            :disable="
              !(modalDis.userName.length > 0 && modalDis.userContact.length > 0)
            "
            :loading="modalDis.isSendRequest"
            label="Отправить"
            color="black"
            no-caps
            style="border-radius: 8px"
          />
        </div>
      </div>
      <div class="absolute" style="bottom: 0; left: 0">
        <q-img src="images/modalLogoLeft.png" height="286px" width="299px" />
      </div>
    </div>
  </q-dialog>
</template>

<script setup>
import { reactive } from "vue";
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

class modalDiscuss {
  isOpenModal = false;
  isSendRequest = false;
  userName = "";
  userContact = "";
  async sendData() {
    this.isSendRequest = true;
    $store.commit("discussionSend/postTG", {
      name: this.userName,
      contact: this.userContact,
    });
    $q.notify({
      position: "bottom-right",
      message: "Информация переданна, ожидайте связи с вами",
      icon: "tag_faces",
    });
    this.isSendRequest = false;
    this.isOpenModal = false;
  }
}

const modalDis = reactive(new modalDiscuss());
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
  backdrop-filter: blur(20.5px);
}

.inputCustom :deep(.q-field__control) {
  border-radius: 8px;
}
</style>
