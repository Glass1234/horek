<template>
  <q-img class="project relative-position" :src="project.src_preview">
    <div
      class="absolute"
      style="top: 20px; left: 20px; background-color: transparent"
      :style="$q.screen.width <= 430 ? { 'top': '10px', 'left': '10px' } : {}"
    >
      <div
        class="textName"
        :class="{
          'font-32': $q.screen.width >= 1500,
          'font-24': $q.screen.width < 1500 && $q.screen.width > 430,
          'font-19': $q.screen.width <= 430,
        }"
        style="line-height: 1"
      >
        {{ project.name }}
      </div>
      <div
        class="textDescription"
        :class="{
          'font-12': $q.screen.width <= 430,
          'font-16': $q.screen.width < 1500 && $q.screen.width > 430,
          'font-20': $q.screen.width >= 1500,
        }"
      >
        {{ project.desciption }}
      </div>
    </div>
    <div
      class="absolute"
      style="top: 30px; right: 34px; background-color: transparent"
      :style="$q.screen.width <= 430 ? { 'top': '0px', 'right': '0px' } : {}"
    >
      <q-btn 
        :class="{
          'openProject': $q.screen.width > 430
        }"
        flat round 
        :to="openItem()"
      >
        <q-img
          :src="require('assets/icons/rowProject.svg')"
          height="12px"
          width="12px"
        />
      </q-btn>
    </div>
  </q-img>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const openItem = () => {
  if (props.project.otherLink) {
    return props.project.otherLink;
  } else {
    return `project/${props.project.id}`;
  }
};
</script>

<style scoped lang="scss">
.project {
  border-radius: 40px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: #05070b;
  height: 240px;
  padding: 42px;
}
.textName {
  font-weight: 600;
  color: white;
}
.textDescription {
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

@media (min-width: 431px) {
  .project {
    border-radius: 40px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    background: #05070b;
    height: 400px;
    padding: 42px;
}
}
</style>
