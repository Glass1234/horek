<template>
  <div
    class="row justify-center full-width text-white q-pt-lg"
    style="padding-bottom: 100px"
  >
    <div class="col-8">
      <q-breadcrumbs class="font-15" active-color="white" gutter="sm">
        <q-breadcrumbs-el label="Главная" to="/" />
        <q-breadcrumbs-el label="Услуги" />
      </q-breadcrumbs>
      <div>
        <h2 class="font-34 q-mb-none">Графика</h2>
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
        <h2 class="font-34 q-mb-none">Веб и UI\UX</h2>
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
        <h2 class="font-34 q-mb-none">Код</h2>
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
          <div class="row font-16 no-wrap">
            <q-chip
              color="red-7"
              text-color="white"
              :clickable="false"
              label="OTHER"
              style="min-width: 92px; max-width: 92px"
            />
            <div class="q-ml-sm" style="word-wrap: break-word">
              <span>Non-GUI приложения на C/C++/Python/Java</span><br />
              <span>Разработка ботов для ВКонтакте и Discord</span><br />
              <span>Работа с HTTP протоколом</span><br />
              <span>Написание парсеров для сайтов и других ресурсов</span><br />
              <span>Програмирование микроконтроллеров</span><br />
              <span>Работа с Linux</span><br />
            </div>
          </div>
        </div>
        <h3 class="font-34 q-mb-none">Не нашли чего искали?</h3>
        <div class="q-mt-sm">
          <span
            >Напишите нам для консультации через Telegram или Email, и менеджер
            окажет помощь в поиске нужной информации. Мы всегда готовы помочь
            вам решить любые вопросы и предоставить необходимую поддержку.</span
          >
        </div>
        <h3 class="font-34 q-mb-none">Цены</h3>
        <div class="q-mt-sm">
          <span
            >Уникальная цена для уникального проекта. Мы адаптируем стоимость
            наших услуг под ваши технические требования. Узнайте точную
            стоимость вашего проекта, связавшись с менеджером.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const graphics = ref([
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
    name: "SMM-дизайн (Упаковка)",
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
    name: "Интернет магазин",
  },
  {
    icon: "5",
    name: "Онлайн-сервис",
  },
  {
    icon: "6",
    name: "Мобильное приложение",
  },
  {
    icon: "7",
    name: "Юзер интерфейс",
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
