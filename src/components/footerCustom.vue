<template>
  <q-footer class="row justify-center bg-main-page" style="padding: 30px 0">
    <div class="row justify-between col-8">
      <div class="row items-center" style="gap: 30px">
        <router-link class="column justify-center" to="/"
        >
          <q-img class="cursor-pointer"
                 src="icons/logo.svg"
                 height="auto" width="90px"/>
        </router-link>
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
      <div class="row items-center" style="gap: 50px">
        <q-btn class="font-16 linkCustom no-padding"
               unelevated no-caps href="https://t.me/horekportfolio" target="_blank">
          <div class="row items-center" style="gap: 10px">
            <q-img class="cursor-pointer" width="29px"
                   :src="require('assets/icons/telegram.svg')"/>
            <span class="underline">Telegram канал</span>
          </div>
        </q-btn>
        <q-btn
          class="bg-red-button text-white linkCustom" style="border-radius: 8px; font-weight: 500"
          :ripple="{ color: 'black' }" unelevated no-caps
          @click="modalDis.isOpenModal = true"
          :label="t('Consultation')"
        />
      </div>
    </div>
  </q-footer>
</template>

<script setup>
import communicationModal from "components/communicationModal.vue";
import {reactive, computed} from "vue";
import {useRoute} from "vue-router";

import {useI18n} from "vue-i18n";

const {t} = useI18n();

const modalDis = reactive({
  isOpenModal: false,
});

const route = useRoute();
</script>

<style scoped lang="scss">
.linkCustom {
  color: #344054;
  font-weight: 500;
  font-size: 18px;
}

.linkCustom:hover {
  color: #161b23;
}
</style>
