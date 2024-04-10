<template>
  <div
    class="relative-position bg-red-7"
    style="width: 430px; border-radius: 30px"
  >
    <div class="sticky" style="padding: 30px; z-index: 10">
      <div class="text-center text-white">
        <div class="font-28">{{ t("Discuss your project") }}</div>
        <div class="font-16" style="color: rgba(255, 255, 255, 0.75)">
          {{ t("Specify the contact person to contact") }}<br />
          {{ t("(Telegram or Email)") }}
        </div>
      </div>
      <div class="q-mt-lg column" style="gap: 8px">
        <q-input
          v-model="modalDis.userName"
          :placeholder="t('Name')"
          color="green-2"
          bg-color="white"
          outlined
          dense
          class="inputCustom"
        />
        <q-input
          v-model="modalDis.userContact"
          :placeholder="t('Contact')"
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
          :label="t('Send')"
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
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";

const $q = useQuasar();

const { t, locale } = useI18n();

const $store = useStore();

class modalDiscuss {
  isSendRequest = false;
  userName = "";
  userContact = "";
  lastSendTime = 0;

  async sendData() {
    if (new Date().getTime() - this.lastSendTime < 20000) {
      $q.notify({
        position: "bottom-right",
        message: "Слишком часто",
        icon: "error_outline",
      });
      return;
    }

    this.lastSendTime = new Date().getTime();
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
    this.userName = "";
    this.userContact = "";
  }
}

const modalDis = reactive(new modalDiscuss());
</script>
