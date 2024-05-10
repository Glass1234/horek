<template>
  <div class="row justify-center full-width"
       style="padding-bottom: 75px">
    <div class="col-8 column items-center">
      <h1 class="no-margin">Контакты</h1>
      <div class="q-mt-md row justify-center full-width" style="gap:26px">
        <div class="container containerP row items-center cursor-pointer col-3" style="gap:20px"
             @click="openItem('https://t.me/horekmanager')">
          <div class="row items-start">
            <div style="padding: 11px; border: 1px solid #EAEAEB; border-radius: 14px;">
              <q-img :src="require('assets/icons/telegramBlue.svg')" width="31px"/>
            </div>
          </div>
          <div class="column">
            <span class="text-h6 text-weight-regular" style="color: #101828">Telegram</span>
            <span class="text-subtitle1" style="color: #475467">@horekmanager</span>
          </div>
        </div>
        <div class="container containerP row items-center cursor-pointer col-3" style="gap:20px"
             @click="openItem('https://t.me/horekportfolio')">
          <div class="row items-start">
            <div style="padding: 11px; border: 1px solid #EAEAEB; border-radius: 14px;">
              <q-img :src="require('assets/icons/telegramBlue.svg')" width="31px"/>
            </div>
          </div>
          <div class="column">
            <span class="text-h6 text-weight-regular" style="color: #101828">Telegram-канал</span>
            <span class="text-subtitle1" style="color: #475467">@horekportfolio</span>
          </div>
        </div>
        <div class="container containerP row items-center cursor-pointer col-3" style="gap:20px"
             @click="openItem('mailto:manager@horek.design')">
          <div class="row items-start">
            <div style="padding: 8px; border: 1px solid #EAEAEB; border-radius: 14px;">
              <q-img :src="require('assets/icons/email.svg')" width="31px"/>
            </div>
          </div>
          <div class="column">
            <span class="text-h6 text-weight-regular" style="color: #101828">Email</span>
            <span class="text-subtitle1" style="color: #475467">manager@horek.design</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";

const {t} = useI18n();

const openItem = (url) => {
  window.open(url, '_blank');
}
</script>

<style scoped lang="scss">
.containerP {
  padding: 29px 32px;
}

h1 {
  color: #101828;
  font-weight: 600;
  font-size: 36px;
}
</style>
