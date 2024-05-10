<template>
  <div class="bg-white" style="padding: 39px 37px; z-index: 10; border-radius: 18px">
    <div class="text-center">
      <div class="text-h5 text-weight-regular" style="color: #1C274C;">
        Запрос на<br>консультацию
      </div>
      <div class="font-16 q-mt-sm" style="color: #475467">
        Укажите контакты для связи<br>(Telegram или Email)
      </div>
    </div>
    <div class="q-mt-lg column" style="gap: 16px; width: 320px;">
      <div class="column" style="gap: 6px">
        <span class="text-subtitle2" style="color: #344054">Имя</span>
        <q-input class="inputCustom" placeholder="Введите имя"
                 v-model="modalDis.userName"
                 color="red-7" bg-color="white" outlined dense/>
      </div>
      <div class="column" style="gap: 6px">
        <span class="text-subtitle2" style="color: #344054">Контакт</span>
        <q-input class="inputCustom" placeholder="Введите контакт"
                 v-model="modalDis.userName"
                 color="red-7" bg-color="white" outlined dense/>
      </div>
      <div class="column" style="gap: 6px">
        <span class="text-subtitle2" style="color: #344054">Бюджет</span>
        <q-input class="inputCustom" placeholder="Введите бюджет"
                 v-model="modalDis.userName"
                 color="red-7" bg-color="white" outlined dense/>
      </div>
      <div class="column" style="gap: 6px">
        <span class="text-subtitle2" style="color: #344054">Описание вашей задачи</span>
        <q-input class="inputCustom" placeholder="Введите описание"
                 v-model="modalDis.userName"
                 color="red-7" bg-color="white" outlined dense type="textarea"/>
      </div>
    </div>
    <div class="q-mt-lg">
      <q-btn class="bg-red-button text-white linkCustom full-width" style="border-radius: 8px; font-weight: 500"
             :ripple="{ color: 'black' }" unelevated no-caps padding="10px 14px"
             label="Отправить"/>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {useStore} from "vuex";
import {useI18n} from "vue-i18n";
import {useQuasar} from "quasar";

const $q = useQuasar();

const {t, locale} = useI18n();

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

<style scoped lang="scss">
.inputCustom:deep(.q-field__control) {
  border-radius: 8px;
}

.inputCustom:deep(.q-field__native) {
  color: #667085;
  resize: none;
}
</style>
