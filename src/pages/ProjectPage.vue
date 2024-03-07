<template>
  <div 
    class="row justify-center full-width text-white"
    :class="{
      'q-py-lg': $q.screen.width > 430
    }" 
  >
    <div
      :class="{
        'col-8': $q.screen.width > 430,
        'col-11': $q.screen.width <= 430 
      }"
      style="padding-bottom: 55px"
    >
      <q-breadcrumbs
        class="font-15"
        active-color="white"
        gutter="sm"
        :style="$q.screen.width > 430 ? {} : {'display' : 'none'}"
      >
        <q-breadcrumbs-el :label="t('Home')" to="/" />
        <q-breadcrumbs-el :label="t('Portfolio')" to="/portfolio" />
        <q-breadcrumbs-el :label="project.title" />
      </q-breadcrumbs>
      <div
        :class="{
          'q-mt-xl': $q.screen.width > 430,
          'q-mt-none': $q.screen.width <= 430 
        }" 
      >
        <h1 class="q-my-none"
          :class="{
            'font-34': $q.screen.width > 430,
            'font-10': $q.screen.width <= 430 
          }" 
          style="line-height: 1; font-weight: 600">
          {{ project.title }}
        </h1>
        <h2
          class="q-my-none"
          :class="{
            'font-23': $q.screen.width > 430,
            'font-7': $q.screen.width <= 430,
            'q-mt-xs': $q.screen.width <= 430
          }" 
          style="color: rgba(255, 255, 255, 0.65); line-height: 1"
        >
          {{ project.type }}
        </h2>
      </div>
      <div class="column"
        :class="{
          'q-mt-xl': $q.screen.width > 430,
          'q-mt-lg': $q.screen.width <= 430 
        }" 
        :style="$q.screen.width > 430 ? {'gap' : '100px'} : {'gap' : '26px'}"
      >
        <template v-for="(item, index) in project.content" :key="index">
          <template v-if="item.type === 'img'">
            <q-img :src="item.src" style="border-radius: 16px" />
          </template>
          <div v-else-if="item.type === 'text'">
            <div
              :class="{
                'font-34': $q.screen.width > 430,
                'font-10': $q.screen.width <= 430 
              }" 
              style="font-weight: 600"
            >{{ item.title }}</div>
            <pre
            :class="{
                'font-23': $q.screen.width > 430,
                'font-7': $q.screen.width <= 430 
              }" 
              style="
                color: rgba(255, 255, 255, 0.65);
                white-space: pre-line;
                font-family: 'Nunito Sans';
              "
            >
              {{ item.description }}
            </pre>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import projects from "src/store/projects.js";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const route = useRoute();

const project = projects.items.filter((item) => item.id == route.params.id)[0];
</script>

<style scoped lang="scss"></style>
