<template>
  <q-page class="relative-position">
    <!--    <q-img class="absolute"-->
    <!--           :style="{ top: '-30px' }"-->
    <!--           src="images/line.png"-->
    <!--    />-->
    <div class="column items-center"
         style="z-index: 10; gap: 206px 0">
      <div class="text-center">
        <h1 class="no-margin">Качественные решения<br>для вашего проекта</h1>
        <h3>Специализируемся на разработке продающих digital-проектов, занимаясь<br> всем спектром услуг от идеи до
          реализации</h3>
        <div class="row justify-center" style="margin-top: 64px; gap:16px;">
          <q-btn class="bg-red-button text-white linkCustom" style="border-radius: 8px; font-weight: 500"
                 :ripple="{ color: 'black' }" unelevated no-caps padding="16px 30px"
                 label="Смотреть портфолио" to="/portfolio"/>
          <q-btn class="bg-white linkCustom btn-shdow" style="border-radius: 8px; font-weight: 500"
                 :ripple="{ color: 'black' }" unelevated no-caps padding="16px 30px"
                 :label="t('Consultation')" @click="modalDis.isOpenModal = true"/>
        </div>
      </div>
      <div class="column text-center full-width">
        <div>
          <h4>Наши преимущества</h4>
          <h2>Почему выбирают нас</h2>
          <h5>Имеем широкий опыт в сфере дизайна и разработки. Ниже перечислены<br>причины, почему выбирают именно нас.
          </h5>
        </div>
        <div class="row justify-center">
          <div class="row justify-center col-8" style="margin-top: 50px; gap: 27px;">
            <div class="container containerP col column justify-between">
              <div class="row justify-center">
                <div class="q-pa-sm relative-position"
                     style="border: 1px solid #D0D5DD; border-radius: 24px; overflow: hidden;">
                  <div class="bg-white row items-center no-wrap q-py-lg q-px-xl"
                       style="gap: 15px; border: 1px solid #D0D5DD; border-radius: 18px">
                    <q-icon name="trending_up" color="red-7" size="35px"/>
                    <span class="text-red-7 text-h6" style="font-weight: 600">Trends</span>
                  </div>
                  <div class="rotating-line"/>
                </div>
              </div>
              <div class="text-left q-mt-xl">
                <span class="containerTitle">Современность</span>
                <span class="q-mt-sm containerDescription">Создаем современные решения, следуем актуальным трендам и технологиям</span>
              </div>
            </div>
            <div class="container containerP col column justify-between">
              <div class="row justify-center">
                <div class="shield-animation">
                  <q-img :src="require('assets/indexPage/armor.png')" width="103px"/>
                </div>
              </div>
              <div class="text-left q-mt-xl">
                <span class="containerTitle">Конфиденциальность</span>
                <span class="q-mt-sm containerDescription">Обеспечиваем 100% анонимность и не выкладываем проект в портфолио по запросу</span>
              </div>
            </div>
            <div class="container containerP col column justify-between">
              <div class="row justify-center">
                <div class="shield-animation">
                  <q-img :src="require('assets/indexPage/armor.png')" width="103px"/>
                </div>
              </div>
              <div class="text-left q-mt-xl">
                <span class="containerTitle">Индивидуальный подход</span>
                <span class="q-mt-sm containerDescription">Разрабатываем решения, соответствующие вашим задачам и целевой аудитории</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column text-center full-width">
        <div>
          <h4>Услуги</h4>
          <h2>Эффективность и результат</h2>
          <h5>Мы возьмем на себя задачи разработки уникальных решений, что<br>обеспечит развитие вашего бизнеса.
          </h5>
        </div>
        <div class="row justify-center">
          <div class="row justify-center col-8" style="margin-top: 50px; gap: 27px;">
            <div class="container containerP col column justify-start">
              <div class="row items-start">
                <div style="padding: 16px; border: 1px solid #EAEAEB; border-radius: 14px;">
                  <q-img :src="require('assets/indexPage/disign.svg')" width="23px"/>
                </div>
              </div>
              <div class="text-left q-mt-lg">
                <span class="containerTitle">Графический дизайн</span>
                <span class="q-mt-sm containerDescription">Брендинг, фирменный стиль, рекламные креативы, SMM-дизайн, брендбук</span>
              </div>
            </div>
            <div class="container containerP col column justify-start">
              <div class="row items-start">
                <div style="padding: 16px; border: 1px solid #EAEAEB; border-radius: 14px;">
                  <q-img :src="require('assets/indexPage/paymedCard.svg')" width="23px"/>
                </div>
              </div>
              <div class="text-left q-mt-lg">
                <span class="containerTitle">Веб и UI/UX дизайн</span>
                <span class="q-mt-sm containerDescription">Дизайн сайтов, мобильных приложений, пользовательских интерфейсов</span>
              </div>
            </div>
            <div class="container containerP col column justify-start">
              <div class="row items-start">
                <div style="padding: 16px; border: 1px solid #EAEAEB; border-radius: 14px;">
                  <q-img :src="require('assets/indexPage/circle.svg')" width="23px"/>
                </div>
              </div>
              <div class="text-left q-mt-lg">
                <span class="containerTitle">Motion-дизайн</span>
                <span class="q-mt-sm containerDescription">Поможем оживить ваш проект и привлечь внимание аудитории с помощью анимаций</span>
              </div>
            </div>
            <div class="container containerP col column justify-start">
              <div class="row items-start">
                <div style="padding: 16px; border: 1px solid #EAEAEB; border-radius: 14px;">
                  <q-img :src="require('assets/indexPage/code.svg')" width="23px"/>
                </div>
              </div>
              <div class="text-left q-mt-lg">
                <span class="containerTitle">Разработка</span>
                <span class="q-mt-sm containerDescription">Чат-боты, Back-end и Front-end, все что связано с разработкой сайтов, Desktop приложения</span>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 36px;">
          <q-btn class="bg-red-button text-subtitle1 text-white linkCustom"
                 style="border-radius: 8px; font-weight: 500;"
                 :ripple="{ color: 'black' }" unelevated no-caps padding="16px 30px"
                 label="Посмотреть все" to="/services"/>
        </div>
      </div>
      <div class="column text-center full-width">
        <div>
          <h4>Этапы</h4>
          <h2>Как мы работаем</h2>
          <h5>Проводим вас по всем этапам проекта и оказываем поддержку<br>даже после его завершения.
          </h5>
        </div>
        <div class="row justify-center relative-position" style="margin-top: 50px">
          <div class="row justify-center col-8" style="gap: 27px;">
            <div class="container containerP col column justify-start bg-main-page">
              <div class="stageLevel column justify-center">
                01
              </div>
              <div class="text-left q-mt-lg">
                <span class="containerTitle">Брифинг</span>
                <span class="q-mt-sm containerDescription">Обсуждаем проект, его целей и задачи, собираем общую информацию, определяем бюджет и сроки проекта</span>
              </div>
            </div>
            <div class="container containerP col column justify-start bg-main-page">
              <div class="stageLevel column justify-center">
                02
              </div>
              <div class="text-left q-mt-lg">
                <span class="containerTitle">Планирование</span>
                <span class="q-mt-sm containerDescription">Разрабатываем идеи, анализируем решения, создаем концепции и выбираем наиболее подходящие</span>
              </div>
            </div>
            <div class="container containerP col column justify-start bg-main-page">
              <div class="stageLevel column justify-center">
                03
              </div>
              <div class="text-left q-mt-lg">
                <span class="containerTitle">Реализация</span>
                <span class="q-mt-sm containerDescription">Распределяем роли, приступаем к выполнению задач согласно техническому заданию и плану</span>
              </div>
            </div>
            <div class="container containerP col column justify-start bg-main-page">
              <div class="stageLevel column justify-center">
                04
              </div>
              <div class="text-left q-mt-lg">
                <span class="containerTitle">Завершение</span>
                <span class="q-mt-sm containerDescription">Тестируем и оцениваем работу, вносим правки, подготавливаем к сдачи проекта клиенту</span>
              </div>
            </div>
          </div>
          <div class="absolute col-8"
               style="height: 13px; background-color: #DC143B; top: 50%; transform: translateY(-50%); z-index: -1"/>
        </div>
      </div>
      <div class="column text-center full-width">
        <div>
          <h4>Портфолио</h4>
          <h2>Некоторые наши проекты</h2>
          <h5>Не выставляем работу в портфолио по запросу клиента. Собрали<br>некоторые наши завершенные кейсы.
          </h5>
        </div>
        <div class="row justify-center" style="margin-top: 50px;">
          <div class="row justify-center col-8" style="gap: 27px;">
            <div class="container containerP no-padding col column justify-start cursor-pointer">
              <q-img class="" style="border-radius: 14px 14px 0 0; top:0"
                     :src="require('assets/projects/preview/23.png')">
                <div class="full-width full-height"
                     style="background: linear-gradient(180deg, rgba(252, 252, 252, 0) 34.66%, #FCFCFC 90.89%); padding: 33px 38px 0">
                  <div class="full-height column justify-between items-start">
                    <div class="q-py-sm q-px-md" style="background: #00000080; border-radius: 40px">
                      Брендинг
                    </div>
                    <div class="text-h6 underline" style="color:#101828">CupFul</div>
                  </div>
                </div>
              </q-img>
              <span class="q-mt-xs containerDescription text-left" style="padding: 0 38px 33px">Интернет-магазин китайского чая и чайной посуды</span>
            </div>
            <div class="container containerP no-padding col column justify-start cursor-pointer">
              <q-img class="" style="border-radius: 14px 14px 0 0; top:0"
                     :src="require('assets/projects/preview/23.png')">
                <div class="full-width full-height"
                     style="background: linear-gradient(180deg, rgba(252, 252, 252, 0) 34.66%, #FCFCFC 90.89%); padding: 33px 38px 0">
                  <div class="full-height column justify-between items-start">
                    <div class="q-py-sm q-px-md" style="background: #00000080; border-radius: 40px">
                      Брендинг
                    </div>
                    <div class="text-h6 underline" style="color:#101828">CupFul</div>
                  </div>
                </div>
              </q-img>
              <span class="q-mt-xs containerDescription text-left" style="padding: 0 38px 33px">Интернет-магазин китайского чая и чайной посуды</span>
            </div>
            <div class="container containerP no-padding col column justify-start cursor-pointer">
              <q-img class="" style="border-radius: 14px 14px 0 0; top:0"
                     :src="require('assets/projects/preview/23.png')">
                <div class="full-width full-height"
                     style="background: linear-gradient(180deg, rgba(252, 252, 252, 0) 34.66%, #FCFCFC 90.89%); padding: 33px 38px 0">
                  <div class="full-height column justify-between items-start">
                    <div class="q-py-sm q-px-md" style="background: #00000080; border-radius: 40px">
                      Брендинг
                    </div>
                    <div class="text-h6 underline" style="color:#101828">CupFul</div>
                  </div>
                </div>
              </q-img>
              <span class="q-mt-xs containerDescription text-left" style="padding: 0 38px 33px">Интернет-магазин китайского чая и чайной посуды</span>
            </div>
          </div>
          <div class="row justify-center col-8" style="gap: 27px; margin-top: 27px">
            <div class="container containerP no-padding col column justify-start cursor-pointer">
              <q-img class="" style="border-radius: 14px 14px 0 0; top:0"
                     :src="require('assets/projects/preview/23.png')">
                <div class="full-width full-height"
                     style="background: linear-gradient(180deg, rgba(252, 252, 252, 0) 34.66%, #FCFCFC 90.89%); padding: 33px 38px 0">
                  <div class="full-height column justify-between items-start">
                    <div class="q-py-sm q-px-md" style="background: #00000080; border-radius: 40px">
                      Брендинг
                    </div>
                    <div class="text-h6 underline" style="color:#101828">CupFul</div>
                  </div>
                </div>
              </q-img>
              <span class="q-mt-xs containerDescription text-left" style="padding: 0 38px 33px">Интернет-магазин китайского чая и чайной посуды</span>
            </div>
            <div class="container containerP no-padding col column justify-start cursor-pointer">
              <q-img class="" style="border-radius: 14px 14px 0 0; top:0"
                     :src="require('assets/projects/preview/23.png')">
                <div class="full-width full-height"
                     style="background: linear-gradient(180deg, rgba(252, 252, 252, 0) 34.66%, #FCFCFC 90.89%); padding: 33px 38px 0">
                  <div class="full-height column justify-between items-start">
                    <div class="q-py-sm q-px-md" style="background: #00000080; border-radius: 40px">
                      Брендинг
                    </div>
                    <div class="text-h6 underline" style="color:#101828">CupFul</div>
                  </div>
                </div>
              </q-img>
              <span class="q-mt-xs containerDescription text-left" style="padding: 0 38px 33px">Интернет-магазин китайского чая и чайной посуды</span>
            </div>
            <div class="container containerP no-padding col column justify-start cursor-pointer">
              <q-img class="" style="border-radius: 14px 14px 0 0; top:0"
                     :src="require('assets/projects/preview/23.png')">
                <div class="full-width full-height"
                     style="background: linear-gradient(180deg, rgba(252, 252, 252, 0) 34.66%, #FCFCFC 90.89%); padding: 33px 38px 0">
                  <div class="full-height column justify-between items-start">
                    <div class="q-py-sm q-px-md" style="background: #00000080; border-radius: 40px">
                      Брендинг
                    </div>
                    <div class="text-h6 underline" style="color:#101828">CupFul</div>
                  </div>
                </div>
              </q-img>
              <span class="q-mt-xs containerDescription text-left" style="padding: 0 38px 33px">Интернет-магазин китайского чая и чайной посуды</span>
            </div>
          </div>
        </div>
        <div style="margin-top: 36px;">
          <q-btn class="bg-red-button text-subtitle1 text-white linkCustom"
                 style="border-radius: 8px; font-weight: 500;"
                 :ripple="{ color: 'black' }" unelevated no-caps padding="16px 30px"
                 label="Посмотреть все" to="/portfolio"/>
        </div>
      </div>
      <div class="column text-center full-width">
        <div class="row justify-center">
          <div class="column justify-start col-8 container containerP" style="height: fit-content">
            <h2 class="block no-margin">Узнать цену проекта</h2>
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
    <q-dialog v-model="modalDis.isOpenModal">
      <communicationModal/>
    </q-dialog>
  </q-page>
</template>

<script setup>
import {reactive, ref} from "vue";
import communicationModal from "components/communicationModal.vue";
import cardProject from "components/cardProject.vue";

import {useI18n} from "vue-i18n";

const {t} = useI18n();

const modalDis = reactive({
  isOpenModal: false,
});

const projects = ref([
  {
    id: 19,
    name: "Ani-me",
    desciption: "новый взгляд на аниме платформы",
    src_preview: require("assets/projects/mainPreview/1.png"),
  },
  {
    otherLink: "portfolio",
    name: "Форумная графика",
    desciption: "Увеличьте свою конверсию",
    src_preview: require("assets/projects/mainPreview/2.png"),
  },
  {
    id: 10,
    name: "Horek",
    desciption: "Немного о нашем лого",
    src_preview: require("assets/projects/mainPreview/3.png"),
  },
  {
    id: 21,
    name: "LayerBit",
    desciption: "Удобный мир криптовалют",
    src_preview: require("assets/projects/mainPreview/21.png"),
  },
]);
</script>

<style scoped lang="scss">
h1 {
  background-image: linear-gradient(180deg, #101828 -129%, #DC143B 190%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  font-weight: 500;
  font-size: 72px;
  line-height: 85px;
}

h2 {
  font-size: 36px;
  color: #101828;
  font-weight: 600;
  line-height: 44px;
  margin: 12px 0 0 0;
}

h3 {
  color: #661424;
  font-size: 24px;
  line-height: 36px;
  margin: 36px 0 0 0;
}

h4 {
  color: #DC143B;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  line-height: 24px;
}

h5 {
  color: #475467;
  line-height: 30px;
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0 0 0;
}

.containerP {
  padding: 33px 38px;
}

.containerTitle {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  display: block;
  color: #101828;
}

.containerDescription {
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  display: block;
  color: #475467;
}

.rotating-line {
  position: absolute;
  width: 300px;
  height: 30px;
  border-radius: 100%;
  background-color: #DC143B;
  top: 30%;
  left: 50%;
  transform-origin: left;
  animation: rotateLine 10s linear infinite;
  z-index: -1;
}

.stageLevel {
  color: #DC143B;
  background: #FFAFBF;
  width: 54px;
  height: 54px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 100%;
}

@keyframes rotateLine {
  to {
    transform: rotate(360deg);
  }
}

.shield-animation {
  animation: shield-move 5s linear infinite;
}

@keyframes shield-move {
  0% {
    transform: translateX(-100%);
    opacity: 0;
    scale: 0.8;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
    scale: 1.2;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
    scale: 0.8;
  }
}
</style>
