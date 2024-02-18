<template>
  <q-img class="project relative-position" :src="project.src_preview">
    <div
      class="absolute"
      style="top: 42px; left: 42px; background-color: transparent"
    >
      <div
        class="textName"
        :class="{
          'font-24': $q.screen.width < 1500,
          'font-32': $q.screen.width >= 1500,
        }"
        style="line-height: 1"
      >
        {{ project.name }}
      </div>
      <div
        class="textDescription"
        :class="{
          'font-16': $q.screen.width < 1500,
          'font-20': $q.screen.width >= 1500,
        }"
      >
        {{ project.desciption }}
      </div>
    </div>
    <div
      class="absolute"
      style="top: 42px; right: 42px; background-color: transparent"
    >
      <q-btn class="openProject" flat round :to="openItem()">
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
  height: 400px;
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
</style>
