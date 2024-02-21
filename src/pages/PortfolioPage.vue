<template>
  <div class="row justify-center full-width text-white q-py-lg">
    <div class="col-8">
      <q-breadcrumbs class="font-15" active-color="white" gutter="sm">
        <q-breadcrumbs-el :label="t('Home')" to="/" />
        <q-breadcrumbs-el :label="t('Portfolio')" />
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
      <div class="parent q-mt-lg" style="gap: 26px">
        <div v-for="(item, index) in arr.visibleProjects" :key="index">
          <div class="column">
            <q-img
              class="cursor-pointer"
              style="height: 190px; border-radius: 14px"
              @click="arr.openItem(item.id)"
              :src="item.src_preview"
            />
            <div class="q-px-xs q-mt-md">
              <span class="font-16">{{ item.title }}</span
              ><br />
              <span style="color: #beb6b8">{{ item.type }}</span>
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
      console.log(this.modalItem);
    }
  }
}

const arr = reactive(new ArrProjects());
</script>

<style scoped lang="scss">
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 26px;
  grid-row-gap: 26px;
}
</style>
