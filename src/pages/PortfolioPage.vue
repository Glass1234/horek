<template>
  <div
    class="row justify-center full-width text-white"
    :class="{
      'q-pt-lg': $q.screen.width > 430,
    }"
    :style="
      $q.screen.width > 430
        ? { 'padding-bottom': '100px' }
        : { 'padding-bottom': '26px', 'margin-top': '-20px' }
    "
  >
    <div
      :class="{
        'col-8': $q.screen.width > 768,
        'col-10': $q.screen.width <= 768 && $q.screen.width > 430,
        'col-11': $q.screen.width <= 430,
      }"
      :style="$q.screen.width > 430 ? {} : { padding: '0 7px' }"
    >
      <q-breadcrumbs
        class="font-15"
        active-color="white"
        gutter="sm"
        :style="$q.screen.width > 430 ? {} : { display: 'none' }"
      >
        <q-breadcrumbs-el :label="t('Home')" to="/" />
        <q-breadcrumbs-el :label="t('Portfolio')" />
      </q-breadcrumbs>
      <div class="q-mt-md row" style="gap: 8px">
        <q-chip
          v-for="(item, index) in arr.allfilters"
          :key="index"
          @click="arr.addFilter(item)"
          class="cursor-pointer"
          :class="{
            'font-16': $q.screen.width > 430,
            'font-13': $q.screen.width <= 430,
          }"
          :color="arr.usingFilters.includes(item) ? 'red-7' : 'red-6'"
          text-color="white"
          :clickable="true"
          :label="item"
        />
      </div>
      <div
        class="parent"
        :class="{
          'q-mt-lg': $q.screen.width > 430,
          'q-mt-md': $q.screen.width <= 430,
        }"
        style="gap: 14px"
      >
        <div v-for="(item, index) in arr.visibleProjects" :key="index">
          <div class="column">
            <q-img
              class="cursor-pointer"
              style="height: 190px; border-radius: 14px"
              :style="
                $q.screen.width > 430
                  ? { height: '190px' }
                  : { height: '115px' }
              "
              @click="arr.openItem(item.id)"
              :src="item.src_preview"
            />
            <div class="q-px-xs q-mt-sm">
              <span
                class="row"
                :class="{
                  'font-16': $q.screen.width > 430,
                  'font-12': $q.screen.width <= 430,
                }"
                >{{ item.title }}</span
              >
              <span style="color: #beb6b8" class="row font-10">{{
                item.type
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <q-dialog v-model="arr.modalItem.flag">
    <q-img :src="arr.modalItem.src" />
  </q-dialog>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import projects from "src/store/projects.js";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const router = useRouter();

const flag = reactive({ flag: true });

class ArrProjects {
  allProjects = [];
  visibleProjects = [];
  allfilters = [];
  usingFilters = [];
  modalItem = {
    src: "",
    flag: false,
  };
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
        this.usingFilters.includes(item.sort_type)
      );
    }
  }
  addFilter(item) {
    this.usingFilters = [item];
    this._setItems();
  }
  openItem(id) {
    const item = this.allProjects.filter((item) => item.id === id)[0];
    if (item.content.length) {
      router.push({ name: "project", params: { id } });
    } else {
      this.modalItem.flag = true;
      this.modalItem.src = item.src_preview;
    }
  }
}

const arr = reactive(new ArrProjects());
</script>

<style scoped lang="scss">
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 26px;
  grid-row-gap: 26px;
}

@media (min-width: 1025px) {
  .parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 26px;
    grid-row-gap: 26px;
  }
}

@media (min-width: 431px) {
  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 26px;
    grid-row-gap: 26px;
  }
}
</style>
