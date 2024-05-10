<template>
  <div class="row justify-center full-width"
       style="padding-bottom: 75px">
    <div class="col-8 column items-center" style="color: #101828; gap:75px">
      <div>
        <h2 class="text-center">Графический дизайн</h2>
        <div class="row justify-center" style="gap:27px; margin-top: 50px">
          <div class="bg-main-page container column justify-between"
               v-for="(item,index) in graphicsItems" :key="index">
            <div class="row justify-center">
              <q-img :src="require(`assets/icons/graphDesign/${item.icon}.svg`)" alt="item.name" height="114px"
                     fit="none"/>
            </div>
            <div class="column justify-center col">
              <span class="text-weight-regular text-center no-margin text-h6">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-center">Веб и UI\UX</h2>
        <div class="row justify-center" style="gap:27px; margin-top: 50px">
          <div class="bg-main-page container column justify-between"
               v-for="(item,index) in UI_UX" :key="index">
            <div class="row justify-center">
              <q-img :src="require(`assets/icons/UI_UXIcons/${item.icon}.svg`)" alt="item.name" height="114px"
                     fit="none"/>
            </div>
            <div class="column justify-center col">
              <span class="text-weight-regular text-center no-margin text-h6">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-center">Моушен дизайн</h2>
        <div class="row justify-center" style="gap:27px; margin-top: 50px">
          <div class="bg-main-page container column justify-between"
               v-for="(item,index) in animaitedItems" :key="index">
            <div class="row justify-center">
              <q-img :src="require(`assets/icons/animaited/${item.icon}.svg`)" alt="item.name" height="114px"
                     fit="none"/>
            </div>
            <div class="column justify-center col">
              <span class="text-weight-regular text-center no-margin text-h6">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-center">Разработка</h2>
        <div class="row justify-center" style="gap:27px; margin-top: 50px">
          <div class="bg-main-page container column justify-between"
               v-for="(item,index) in develop" :key="index">
            <div class="row justify-center">
              <q-img :src="require(`assets/icons/develop/${item.icon}.svg`)" alt="item.name" height="114px"
                     fit="none"/>
            </div>
            <div class="column justify-center col">
              <span class="text-weight-regular text-center no-margin text-h6">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center column" style="gap:50px">
        <h2 class="block">Форматы работы</h2>
        <div class="row full-width justify-center">
          <div class="col-7">
            <div class="row justify-center no-wrap" style="gap:27px;">
              <div class="container column" style="padding: 25px 17px; width: auto; height: auto">
                <div class="row justify-center">
                  <div style="padding: 16px; border: 1px solid #EAEAEB; border-radius: 14px;">
                    <q-img :src="require('assets/icons/location.svg')" width="23px"/>
                  </div>
                </div>
                <span class="text-h5 text-weight-regular q-mt-md">Фиксированная цена</span>
                <h5 style="font-size: 16px; line-height: 25px; margin-top: 8px">В этом формате устанавливается
                  фиксированная стоимость за весь проект. Это идеальный вариант для
                  небольших проектов, когда объем работ и сроки четко определены. Но менее гибок для дополнительных
                  изменений, что часто случается на больших проектах.
                </h5>
              </div>
              <div class="container column" style="padding: 25px 17px; width: auto; height: auto">
                <div class="row justify-center">
                  <div style="padding: 16px; border: 1px solid #EAEAEB; border-radius: 14px;">
                    <q-img :src="require('assets/icons/time.svg')" width="23px"/>
                  </div>
                </div>
                <span class="text-h5 text-weight-regular q-mt-md">Оплата за часы</span>
                <h5 style="font-size: 16px; line-height: 25px; margin-top: 8px">Оплата производится за фактически
                  отработанное время. Этот формат подходит для более сложных проектов с нечетким объемом работ или
                  гибкими требованиями. При этом выборе формата работы мы будем использовать специальный софт.
                </h5>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="text-center column">
        <h2 class="block">Не нашли что искали?</h2>
        <div class="row justify-center">
          <h5 class="block col-8">Напишите нам для консультации через Telegram или Email, и менеджер окажет помощь в
            поиске нужной информации. Мы всегда готовы помочь вам решить любые вопросы и предоставить необходимую
            поддержку.</h5>
        </div>
      </div>
      <div class="text-center column">
        <h2 class="block">Цены</h2>
        <div class="row justify-center">
          <h5 class="block col-8">Цена уникальна для важдого проекта. Мы адаптируем стоимость наших услуг под ваши
            технические требования, бюджет и сроки. Узнайте точную стоимость вашего проекта, связавшись с
            менеджером.</h5>
        </div>
      </div>
      <div class="column text-center full-width">
        <div class="row justify-center">
          <div class="column justify-start col-8 container full-width" style="height: fit-content; padding: 46px 0">
            <h2 class="block">Узнать цену проекта</h2>
            <h5 class="block">Получите бесплатный расчет стоимости ваших идей</h5>
            <div class="row justify-center" style="margin-top: 35px; gap:16px;">
              <q-btn class="bg-red-button text-white linkCustom" style="border-radius: 8px; font-weight: 500"
                     :ripple="{ color: 'black' }" unelevated no-caps padding="16px 30px"
                     label="Консультация"
              />
              <q-btn class="bg-white linkCustom btn-shdow" style="border-radius: 8px; font-weight: 500"
                     :ripple="{ color: 'black' }" unelevated no-caps padding="16px 30px"
                     label="Написать нам по контактам"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n();
const graphicsItems = ref([
  {
    icon: "1",
    name: "Логотип",
  },
  {
    icon: "2",
    name: "Фирменный стиль",
  },
  {
    icon: "3",
    name: "Рекламный креатив",
  },
  {
    icon: "4",
    name: "SMM-дизайн",
  },
  {
    icon: "5",
    name: "Брендбук",
  },
]);

const UI_UX = ref([
  {
    icon: "1",
    name: "Лендинг",
  },
  {
    icon: "2",
    name: "Корпоративный сайт",
  },
  {
    icon: "3",
    name: "Промо-сайт",
  },
  {
    icon: "4",
    name: "Интернет-магазин",
  },
  {
    icon: "5",
    name: "Онлайн-сервис",
  },
  {
    icon: "6",
    name: "Пользовательский интерфейс",
  },
  {
    icon: "7",
    name: "Мобильное приложение",
  },
]);

const animaitedItems = ref([
  {
    icon: "1",
    name: "Анимированный логотип",
  },
  {
    icon: "2",
    name: "Анимированный ролик",
  },
  {
    icon: "3",
    name: "Анимированный рекламный креатив",
  },
  {
    icon: "4",
    name: "Анимации для сайта",
  },
]);

const develop = ref([
  {
    icon: "1",
    name: "Чат-бот",
  },
  {
    icon: "2",
    name: "Front-end",
  },
  {
    icon: "3",
    name: "Back-end",
  },
  {
    icon: "4",
    name: "Desktop приложение",
  },
]);
</script>

<style scoped lang="scss">
.container {
  box-shadow: 0 1px 2px 0 #1018280F, 0 1px 3px 0 #1018281A;
  border: 1px solid #D0D5DD;
  border-radius: 14px;
  width: 263px;
  height: 263px;
  padding: 40px 0 0;
}

.container span {
  padding: 0 16px;
}

h2 {
  font-size: 36px;
  color: #101828;
  font-weight: 600;
  line-height: 44px;
  margin: 12px 0 0 0;
}

h5 {
  color: #475467;
  line-height: 30px;
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0 0 0;
}
</style>
