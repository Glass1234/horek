<template>
  <div class="row justify-center full-width text-white q-pt-lg">
    <div class="col-8">
      <q-breadcrumbs class="font-15" active-color="white" gutter="sm">
        <q-breadcrumbs-el label="Главная" to="/" />
        <q-breadcrumbs-el label="Портфолио" />
      </q-breadcrumbs>
      <div class="q-mt-md row" style="gap: 8px">
        <q-chip
          v-for="(item, index) in arr.allfilters"
          :key="index"
          @click="arr.addFilter(item)"
          class="cursor-pointer"
          :color="arr.usingFilters.includes(item) ? 'red-7' : 'red-6'"
          text-color="white"
          :clickable="true"
          :label="item"
        />
      </div>
      <div class="row q-mt-lg" style="gap: 26px">
        <div v-for="(item, index) in arr.visibleProjects" :key="index">
          <div class="column">
            <div
              class="bg-red-2"
              style="width: 300px; height: 190px; border-radius: 15px"
            ></div>
            <div class="q-px-xs q-mt-md">
              <span class="font-16">{{ item.title }}</span
              ><br />
              <span class="font-13">{{ item.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import projects from "src/store/projects.js";

class ArrProjects {
  allProjects = [];
  visibleProjects = [];
  allfilters = [];
  usingFilters = [];
  constructor() {
    this.allfilters = [...projects.filter];
    this.allProjects = JSON.parse(JSON.stringify(projects.items));
    this.usingFilters.push("Все");
    this._setItems();
  }
  _setItems() {
    if (this.usingFilters.includes("Все")) {
      this.visibleProjects = JSON.parse(JSON.stringify(this.allProjects));
    } else {
      this.visibleProjects = this.allProjects.filter((item) =>
        this.usingFilters.includes(item.type)
      );
    }
  }
  addFilter(item) {
    if (item === "Все") {
      const index = this.usingFilters.indexOf(item);
      if (index !== -1) {
        this.usingFilters = [];
      } else {
        this.usingFilters = [item];
      }
    } else {
      const index = this.usingFilters.indexOf(item);
      if (index !== -1) {
        this.usingFilters.splice(index, 1);
      } else {
        this.usingFilters.push(item);
      }
    }
    if (this.allfilters.length === this.usingFilters.length) {
      this.usingFilters = ["Все"];
    }
    if (this.usingFilters.includes("Все") && item !== "Все") {
      const index = this.usingFilters.indexOf("Все");
      this.usingFilters.splice(index, 1);
    }
    this._setItems();
  }
}

const arr = reactive(new ArrProjects());
</script>

<style scoped lang="scss"></style>
