<template>
  <div class="project relative-position bg-red">
    <div class="absolute" style="top: 42px; left: 42px">
      <div class="textName">{{ project.name }}</div>
      <div class="textDescription">{{ project.desciption }}</div>
    </div>
    <div class="absolute" style="top: 42px; right: 42px">
      <q-btn class="openProject" flat round>
        <q-img
          :src="require('assets/icons/rowProject.svg')"
          height="12px"
          width="12px"
        />
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.project {
  border-radius: 39.125px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: #05070b;
  height: 400px;
  padding: 42px;
}
.textName {
  font-weight: 600;
  font-size: 32px;
  color: white;
}
.textDescription {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.65);
}

.openProject {
  background-color: rgba(0, 0, 0, 0.26);
  border: 1px solid;

  border-image-source: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
