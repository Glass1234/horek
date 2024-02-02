<template>
  <q-page class="relative-position">
    <q-img class="absolute" style="top: 35px" src="images/line.png" />
    <div
      class="text-white column items-center sticky"
      style="padding-top: 100px; z-index: 10"
    >
      <div>
        <div>
          <div class="row items-baseline font-82 relative-position">
            <div class="text-red-button">Качественные</div>
            <q-img
              class="q-ml-sm q-mr-md"
              :src="require(`assets/icons/stars.svg`)"
              width="52px"
              height="52px"
            />
            <div>решения</div>
            <div class="absolute" style="right: -40px; top: 10px">
              <div class="row row-btn items-center gap-x-xs">
                <q-btn color="white" round>
                  <q-img
                    :src="require(`assets/icons/palitre.svg`)"
                    width="25px"
                    heugth="25px"
                  />
                </q-btn>
                <q-btn color="white" round>
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
            <div class="text-red-button">для</div>
            <q-img
              class="q-mx-sm"
              style="rotate: -2deg; margin-bottom: -20px"
              :src="require(`assets/icons/rows.svg`)"
              width="120px"
            />
            <div>вашего продукта</div>
          </div>
        </div>
        <div class="q-mt-xl text-center font-24" style="line-height: 38px">
          занимаемся разработкой digital-проектов
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
          label="Смотреть все"
        >
          <q-icon class="q-ml-sm" name="bi-arrow-right" size="16px"></q-icon>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

import cardProject from "components/cardProject.vue";

const projects = ref([
  {
    name: "Horektrade",
    desciption: "automatic crypto exchanger",
  },
  {
    name: "Ani-me",
    desciption: "a new look at anime platforms",
  },
  {
    name: "Case",
    desciption: "Random case",
  },
  {
    name: "Case",
    desciption: "Random case",
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
</style>
