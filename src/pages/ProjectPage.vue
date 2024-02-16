<template>
  <div class="row justify-center full-width text-white q-py-lg">
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
          {{ project.type }}
        </h2>
      </div>
      <div class="column q-mt-xl" style="gap: 100px">
        <template v-for="(item, index) in project.content" :key="index">
          <template v-if="item.type === 'img'">
            <q-img :src="item.src" style="border-radius: 16px" />
          </template>
          <div v-else-if="item.type === 'text'">
            <div class="font-34" style="font-weight: 600">{{ item.title }}</div>
            <pre
              class="font-23"
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

const route = useRoute();

const project = projects.items.filter((item) => item.id == route.params.id)[0];
</script>

<style scoped lang="scss"></style>
