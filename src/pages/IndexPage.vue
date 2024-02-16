<template>
  <q-page class="relative-position">
    <q-img class="absolute" style="top: 35px" src="images/line.png" />
    <div
      class="text-white column items-center sticky"
      style="padding-top: 100px; z-index: 10"
    >
      <div>
        <div style="line-height: 1">
          <div class="row items-baseline font-82 relative-position">
            <div class="text-red-button">Качественные</div>
            <q-img
              class="q-ml-sm q-mr-md"
              :src="require(`assets/icons/stars.svg`)"
              width="52px"
              height="52px"
            />
            <div>решения</div>
            <div class="absolute" style="right: -30px; top: -5px">
              <div class="row row-btn items-center gap-x-xs">
                <q-btn color="white" to="/services" round>
                  <q-img
                    :src="require(`assets/icons/palitre.svg`)"
                    width="25px"
                    heugth="25px"
                  />
                </q-btn>
                <q-btn color="white" to="/services" round>
                  <q-img
                    :src="require(`assets/icons/code.svg`)"
                    width="25px"
                    heugth="25px"
                  />
                </q-btn>
              </div>
            </div>
          </div>
          <div class="row items-center justify-center font-82">
            <div>для</div>
            <q-img
              class="q-mx-sm"
              style="rotate: -2deg; margin-bottom: -20px"
              :src="require(`assets/icons/rows.svg`)"
              width="120px"
            />
            <div>вашего продукта</div>
          </div>
        </div>
        <div
          class="text-center font-25"
          style="line-height: 38px; color: #beb6b8; padding-top: 30px"
        >
          занимаемся разработкой продающих digital-проектов
        </div>
      </div>
      <div class="row justify-center full-width" style="padding-top: 130px">
        <div class="col-8">
          <div class="text-left font-34">Некоторые наши проекты</div>
          <div class="q-mt-xl gridProject">
            <div v-for="(item, index) in projects" :key="index">
              <cardProject :project="item" />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center full-width" style="padding-top: 67px">
        <q-btn
          class="bg-red-button font-16"
          rounded
          unelevated
          no-caps
          to="/portfolio"
          label="Смотреть все"
        >
          <q-icon class="q-ml-sm" name="bi-arrow-right" size="16px"></q-icon>
        </q-btn>
      </div>
      <div
        class="row justify-center full-width"
        style="padding-top: 114px; padding-bottom: 140px"
      >
        <div class="col-8">
          <div class="font-34">О нас</div>
          <div class="q-mt-xl row justify-center" style="gap: 26px">
            <div class="aboutCard col">
              <div>
                <q-img
                  style="border-radius: 50px"
                  :src="require('assets/images/modernityCard.png')"
                >
                  <div
                    class="column justify-center full-width transparent"
                    style="padding: 40px !important"
                  >
                    <div class="row justify-center">
                      <q-chip
                        outline
                        label="Современность"
                        color="red-7"
                        text-color="red-7"
                      />
                    </div>
                    <div class="text-center q-mt-sm">
                      <span class="font-27"
                        >Следуем трендам и используем актуальные технологии в
                        работе</span
                      >
                    </div>
                  </div>
                </q-img>
              </div>
            </div>
            <div class="aboutCard col">
              <div>
                <q-img
                  style="border-radius: 50px"
                  :src="require('assets/images/transparencyCard.png')"
                >
                  <div
                    class="column justify-center full-width transparent"
                    style="padding: 40px !important"
                  >
                    <div class="row justify-center">
                      <q-chip
                        outline
                        label="Прозрачность"
                        color="red-7"
                        text-color="red-7"
                      />
                    </div>
                    <div class="text-center q-mt-sm">
                      <span class="font-27"
                        >Делаем постоянные отчеты о процессе работы</span
                      >
                    </div>
                  </div>
                </q-img>
              </div>
            </div>
            <div class="aboutCard col">
              <div>
                <q-img
                  style="border-radius: 50px"
                  :src="require('assets/images/supportCard.png')"
                >
                  <div
                    class="column justify-center full-width transparent"
                    style="padding: 40px !important"
                  >
                    <div class="row justify-center">
                      <q-chip
                        outline
                        label="Поддержка"
                        color="red-7"
                        text-color="red-7"
                      />
                    </div>
                    <div class="text-center q-mt-sm">
                      <span class="font-27"
                        >Оказываем дальнейшую поддержку проекта после
                        разработки</span
                      >
                    </div>
                  </div></q-img
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

import cardProject from "components/cardProject.vue";

const projects = ref([
  {
    id: 19,
    name: "Ani-me",
    desciption: "новый взгляд на аниме платформы",
    src_preview: require("assets/projects/mainPreview/1.png"),
  },
  {
    name: "Форумная графика",
    desciption: "Увеличьте свою конверсию",
  },
  {
    name: "Horek",
    desciption: "Немного о нашем лого",
  },
  {
    id: 12,
    name: "ExtraMedia",
    desciption: "Студия перевода и озвучки",
    src_preview: require("assets/projects/mainPreview/4.png"),
  },
]);
</script>

<style scoped lang="scss">
.row-btn {
  border-radius: 63.989px;
  border: 0.877px solid rgba(77, 77, 77, 0.64);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(7.757615566253662px);
  padding: 4px;
}

.gridProject {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 28px;
  grid-row-gap: 28px;
}
.aboutCard {
  border-radius: 50px;
  border: 1px solid #dc143b26;
}
</style>
