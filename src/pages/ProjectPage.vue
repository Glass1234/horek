<template>
  <div class="row justify-center full-width text-white q-pt-lg">
    <div class="col-8" style="padding-bottom: 55px">
      <q-breadcrumbs class="font-15" active-color="white" gutter="sm">
        <q-breadcrumbs-el label="Главная" to="/" />
        <q-breadcrumbs-el label="Портфолио" to="/portfolio" />
        <q-breadcrumbs-el :label="project.title" />
      </q-breadcrumbs>
      <div class="q-mt-xl">
        <h1 class="font-34 q-my-none" style="line-height: 1; font-weight: 600">
          {{ project.title }}
        </h1>
        <h2
          class="font-23 q-mt-md q-my-none"
          style="color: rgba(255, 255, 255, 0.65); line-height: 1"
        >
          {{ project.description }}
        </h2>
      </div>
      <div class="column q-mt-xl" style="gap: 55px">
        <div v-for="(item, index) in project.content" :key="index">
          <div v-if="item.type === 'img'">
            <q-img :src="item.src" height="700px" style="border-radius: 16px" />
          </div>
          <div v-else-if="item.type === 'text'">
            <div class="font-34" style="font-weight: 600">{{ item.title }}</div>
            <div class="font-23" style="color: rgba(255, 255, 255, 0.65)">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import projects from "src/store/projects.js";

const route = useRoute();

const project = projects.items.filter((item) => item.id == route.params.id)[0];
</script>

<style scoped lang="scss"></style>
