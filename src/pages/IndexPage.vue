<template>
  <q-page class="relative-position">
    <q-img
      class="absolute"
      :style="$q.screen.width > 430 ? { 'top': '35px' } : { 'top': '-30px' }"
      src="images/line.png" />
    <div
      class="text-white column items-center sticky"
      :style="$q.screen.width <= 430 ? { 'padding-top': '0px', 'z-index': '10' } : {'padding-top': '100px', 'z-index': '10' }"
    >
      <div>
        <div style="line-height: 1">
          <div
            class="row items-baseline relative-position justify-center" 
            :class="{ 
              'font-82': $q.screen.width > 1024, 
              'font-64': $q.screen.width <= 1024 && $q.screen.width > 768, 
              'font-50': $q.screen.width <= 768 && $q.screen.width > 430, 
              'font-30': $q.screen.width <= 430 
            }"
          >
            <div class="text-red-button">{{ t("Quality") }}</div>
            <q-img
              class="q-ml-sm q-mr-md"
              :style="dynamicStars"
              :src="require(`assets/icons/stars.svg`)"
            />
            <div>{{ t("solutions") }}</div>
            <div class="absolute" :style="$q.screen.width > 768 ? { 'right': '10px', 'top': '-30px' } : { 'display': 'none' }">
              <div class="row row-btn items-center gap-x-xs">
                <q-btn color="white" to="/services" round>
                  <q-img
                    :src="require(`assets/icons/palitre.svg`)"
                    width="25px"
                    height="25px"
                  />
                </q-btn>
                <q-btn color="white" to="/services" round>
                  <q-img
                    :src="require(`assets/icons/code.svg`)"
                    width="25px"
                    height="25px"
                  />
                </q-btn>
              </div>
            </div>
          </div>
          <div
            class="row items-center justify-center"
            :class="{ 
              'font-82': $q.screen.width > 1024, 
              'font-64': $q.screen.width <= 1024 && $q.screen.width > 768, 
              'font-50': $q.screen.width <= 768 && $q.screen.width > 430, 
              'font-30': $q.screen.width <= 430 
            }"
          >
            <div>{{ t("for") }}</div>
            <q-img
              class="q-mx-sm"
              :src="require(`assets/icons/rows.svg`)"
              :style="dynamicArrow"
            />
            <div>{{ t("your product") }}</div>
          </div>
        </div>
        <div
          class="text-center"
          :class="{ 
            'font-25': $q.screen.width > 1024, 
            'font-20': $q.screen.width <= 1024 && $q.screen.width > 768, 
            'font-18': $q.screen.width <= 768 && $q.screen.width > 430, 
            'font-9': $q.screen.width <= 430 
          }"
          style="line-height: 38px; color: #beb6b8"
          :style="$q.screen.width > 430 ? { 'padding-top': '30px' } : { 'padding-top': '9px' }"
        >
          {{ t("Develop digital sales projects") }}
        </div>
      </div>
      <div 
        class="row justify-center full-width"
        :style="$q.screen.width > 430 ? { 'padding-top': '130px' } : { 'padding-top': '30px' }"
      >
        <div 
          :class="{
            'col-8': $q.screen.width > 1024,
            'col-11': $q.screen.width <= 1024 }"
          :style="$q.screen.width > 430 ? {} : {'padding' : '0 7px'}"
        >
          <div 
            class="text-left"
            :class="{ 
              'font-34': $q.screen.width > 1024, 
              'font-30': $q.screen.width <= 1024 && $q.screen.width > 768, 
              'font-24': $q.screen.width <= 768 && $q.screen.width > 430, 
              'font-16': $q.screen.width <= 430 
            }"
          >{{ t("Some of our projects") }}</div>
          <div 
            :class="{
              'q-mt-xl': $q.screen.width > 430,
              'q-mt-lg': $q.screen.width <= 430 
            }"
          >
            <div
              :class="{
                'gridProject': $q.screen.width > 430,
                'row': $q.screen.width <= 430 
              }"
              :style="$q.screen.width <= 430 ? { 'grid-row-gap': '26px' } : {}"
            >
              <div v-for="(item, index) in projects" :key="index" :class="{ 'col-6': $q.screen.width > 430, 'col-12': $q.screen.width <= 430 }">
                <cardProject :project="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row justify-center full-width"
        :style="$q.screen.width <= 430 ? { 'padding-top': '26px' } : {'padding-top': '67px'}"
      >
        <q-btn
          class="bg-red-button font-16"
          rounded
          unelevated
          no-caps
          :style="$q.screen.width <= 430 ? { 'width': '150px' } : {'width': '195px' }"
          to="/portfolio"
          :label="t('View All')"
        >
          <q-icon
          class="q-ml-sm"
          name="bi-arrow-right"
          size="16px"
          :style="$q.screen.width <= 430 ? { 'display': 'none' } : {}"
          ></q-icon>
        </q-btn>
      </div>
      <div
        class="row justify-center full-width"
        :style="$q.screen.width <= 430 ? { 'padding-top': '26px', 'padding-bottom': '40px' } : {'padding-top': '114px', 'padding-bottom': '140px' }"
      >
        <div
          :class="{
            'col-8': $q.screen.width > 430,
            'col-10': $q.screen.width <= 1024 && $q.screen.width > 430, 
            'col-11': $q.screen.width <= 430 
          }"
          :style="$q.screen.width > 430 ? {} : {'padding' : '0 7px'}"
        >
          <div
          :class="{ 
              'font-34': $q.screen.width > 1024, 
              'font-30': $q.screen.width <= 1024 && $q.screen.width > 768, 
              'font-24': $q.screen.width <= 768 && $q.screen.width > 430, 
              'font-16': $q.screen.width <= 430 
            }"
          >{{ t("About Us") }}</div>
          <div 
            class="row justify-center"
            :class="{
              'q-mt-xl': $q.screen.width > 430,
              'q-mt-lg': $q.screen.width <= 430 
            }"
            style="gap: 26px"
          >
            <div 
              class="aboutCard"
              :class="{
                'col': $q.screen.width > 430,
                'col-7': $q.screen.width <= 768 && $q.screen.width > 430, 
                'col-12': $q.screen.width <= 430
              }"
            >
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
                        :label="t('Modernity')"
                        color="red-7"
                        text-color="red-7"
                      />
                    </div>
                    <div class="text-center q-mt-sm">
                      <span
                      :class="{
                        'font-24': $q.screen.width <= 430,
                        'font-16': $q.screen.width < 1600 && $q.screen.width > 430,
                        'font-27': $q.screen.width >= 1600
                      }"
                      style="line-height: 1.2;"
                        >{{
                          t(
                            "Follow trends and use the latest technologies in work"
                          )
                        }}
                      </span>
                    </div>
                  </div>
                </q-img>
              </div>
            </div>
            <div 
              class="aboutCard"
              :class="{
                'col': $q.screen.width > 430,
                'col-7': $q.screen.width <= 768 && $q.screen.width > 430, 
                'col-12': $q.screen.width <= 430 
              }"
            >
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
                        :label="t('Transparency')"
                        color="red-7"
                        text-color="red-7"
                      />
                    </div>
                    <div class="text-center q-mt-sm">
                      <span
                        :class="{
                          'font-24': $q.screen.width <= 430,
                          'font-16': $q.screen.width < 1600 && $q.screen.width > 430,
                          'font-27': $q.screen.width >= 1600
                        }"
                        style="line-height: 1.2;"
                        >{{ t("Continuously recording workflow") }}</span
                      >
                    </div>
                  </div>
                </q-img>
              </div>
            </div>
            <div 
              class="aboutCard"
              :class="{
                'col': $q.screen.width > 430,
                'col-7': $q.screen.width <= 768 && $q.screen.width > 430, 
                'col-12': $q.screen.width <= 430 
              }"
            >
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
                        :label="t('Support')"
                        color="red-7"
                        text-color="red-7"
                      />
                    </div>
                    <div class="text-center q-mt-sm">
                      <span
                        :class="{
                          'font-23': $q.screen.width <= 430,
                          'font-16': $q.screen.width < 1600 && $q.screen.width > 430,
                          'font-27': $q.screen.width >= 1600
                        }"
                        style="line-height: 1.2;"
                        >{{
                          t("After continuing to support project development")
                        }}</span
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
import { ref, computed, onMounted, onUnmounted } from 'vue'

import cardProject from "components/cardProject.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

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
    id: 12,
    name: "ExtraMedia",
    desciption: "Студия перевода и озвучки",
    src_preview: require("assets/projects/mainPreview/4.png"),
  },
]);

const screen = ref({ width: window.innerWidth, height: window.innerHeight })

const handleResize = () => {
  screen.value.width = window.innerWidth
  screen.value.height = window.innerHeight
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const dynamicStars = computed(() => {
  if (screen.value.width > 768) {
    return { 
      width: '52px',
      height: '52px' 
    }
  } else if ((screen.value.width <= 768) && (screen.value.width > 430)) {
    return { 
      width: '32px',
      height: '32px' 
     }
  } else {
    return { 
      width: '18px',
      height: '18px' 
     }
  }
})

const dynamicArrow = computed(() => {
  if (screen.value.width > 768) {

    return { 
      transform: 'rotate(-2deg)',
      'margin-bottom': '-20px',
      width: '120px',
    }
  } else if ((screen.value.width <= 768) && (screen.value.width > 430)) {
    return { 
      transform: 'rotate(-2deg)',
      'margin-bottom': '-10px',
      width: '80px',
     }
  } else {
    return { 
      transform: 'rotate(-2deg)',
      'margin-bottom': '-5px',
      width: '40px',
     }
  }
})

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
