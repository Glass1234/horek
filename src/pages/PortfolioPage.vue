<template>
  <div class="row justify-center full-width"
       style="padding-bottom: 75px">
    <div class="col-8 column items-center" style="color: #101828; gap:50px">
      <div class="row"
           style="border-radius: 8px; outline: 1px solid #D0D5DD; overflow: hidden; box-shadow: 0 10px 24px 0 #00000014;">
        <div class="item-filter" v-for="(item,index) in filters" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="parent full-width">
        <div class="column" v-for="(item,index) in arr.allProjects" :key="index">
          <q-img class="cursor-pointer" style="border-radius: 20px;"
                 @click="arr.openItem(item.id)"
                 :src="item.src_preview"/>
          <div class="q-mt-md text-h6 text-weight-regular" style="color: #101828">{{ item.title }}</div>
          <div class="q-mt-xs" style="color: #475467">{{ item.type }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import projects from "src/store/projects.js";
import {useI18n} from "vue-i18n";

const {t} = useI18n();

const router = useRouter();

const flag = reactive({flag: true});

const filters = ref(['Все', 'Графический дизайн', 'Моушен дизайн', 'Веб и UI\\UX']);

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
    router.push({name: "project", params: {id}});
  }
}

const arr = reactive(new ArrProjects());
</script>

<style scoped lang="scss">
.item-filter {
  padding: 10px 16px;
  color: #344054;
  font-weight: 600;
  font-size: 14px;
  background: white;
  outline: 1px solid #D0D5DD;
  cursor: pointer;
  transition: all .2s;
}

.item-filter:hover {
  background: rgb(230, 230, 230);
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 28px;
  grid-row-gap: 28px;
}
</style>
