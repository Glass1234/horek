<template>
  <div
    class="row justify-center full-width text-white"
    :class="{
      'q-pt-lg': $q.screen.width > 430,
    }"
    :style="
      $q.screen.width > 430
        ? { 'padding-bottom': '100px' }
        : { 'padding-bottom': '26px', 'margin-top': '-50px' }
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
      <div class="q-mb-none">
        <div class="row" style="gap: 30px">
          <div v-for="(item, index) in items" :key="index">
            <animation
              :indexItem="index + 1"
              :isCenter="item.isCenter"
              :settings="item.settings"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import animation from "components/AnimItem.vue";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
const { t } = useI18n();
const items = ref([
  {
    isCenter: true,
    settings: {
      from: {},
      to: { rotate: 360, repeat: -1, ease: "none", duration: 3, yoyo: true },
    },
  },
  {
    settings: {
      from: {},
      to: { x: 200, repeat: -1, ease: "none", duration: 3, yoyo: true },
    },
  },
  {
    settings: {
      from: {},
      to: {
        rotate: 360,
        x: 200,
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    settings: {
      from: { scale: 0 },
      to: {
        rotate: 360,
        x: 185,
        scale: 2,
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { scale: 0 },
      to: {
        rotate: 360,
        scale: 3,
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { opacity: 0 },
      to: {
        opacity: 1,
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { background: "#ffffff" },
      to: {
        background: "#dc143b",
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { "border-radius": 0 },
      to: {
        "border-radius": "40px",
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { "border-radius": 0, scale: 0.5 },
      to: {
        "border-radius": "100%",
        scale: 3,
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { rotateX: 0 },
      to: {
        rotateX: 360,
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { rotateY: 0 },
      to: {
        rotateY: 360,
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { rotateY: 0, rotateX: 0 },
      to: {
        rotateY: 360,
        rotateX: 360,
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { width: "50px" },
      to: {
        width: "100%",
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { height: "50px" },
      to: {
        height: "100%",
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { height: "50px", width: "50px" },
      to: {
        height: "100%",
        width: "100%",
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { color: "white" },
      to: {
        color: "#dc143b",
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { "font-weight": 100 },
      to: {
        "font-weight": 900,
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      to: {
        "font-size": "5rem",
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: {
        "font-size": "1rem",
        color: "blue",
        "font-weight": 100,
      },
      to: {
        "font-size": "5rem",
        "font-weight": 900,
        color: "yellow",
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
  {
    isCenter: true,
    settings: {
      from: { "letter-spacing": "-10px", color: "#00000000" },
      to: {
        "letter-spacing": "70px",
        color: "#FFFFFFFF",
        repeat: -1,
        ease: "none",
        duration: 3,
        yoyo: true,
      },
    },
  },
]);
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 28px;
}
</style>
