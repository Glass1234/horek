<template>
  <div class="column" style="width: 300px">
    <div
      class="item q-pa-md column justify-center"
      :class="{ 'items-center': isCenter }"
    >
      <div
        class="cube"
        :class="{ 'cube-transperent': isOnlyText }"
        :ref="(element) => (anim.refItem = element)"
      >
        123
      </div>
    </div>
    <div class="row items-center justify-between">
      <span class="text-h6"> Анимация №{{ indexItem }} </span>
      <q-btn v-if="anim.isPlay" flat round color="red-7" @click="anim.stop()">
        <q-icon class="rotate-180" name="pause" size="md" color="red-7" />
      </q-btn>
      <q-btn v-else flat round color="red-7" @click="anim.start()">
        <q-icon name="play_arrow" size="md" color="red-7" />
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref, onMounted } from "vue";
import { gsap } from "gsap";
const props = defineProps({
  indexItem: Number,
  settings: Object,
  isOnlyText: {
    type: Boolean,
    default: false,
  },
  isCenter: {
    type: Boolean,
    default: false,
  },
});

class Animation {
  isPlay = true;
  refItem = ref(null);
  GSAP = null;
  inject(settings) {
    if (typeof settings.to == "object" && !Array.isArray(settings.to)) {
      this.GSAP = gsap.fromTo(this.refItem, settings.from, {
        ...settings.to,
        ease: "power2.inOut",
      });
    } else if (Array.isArray(settings.to)) {
      let tmp = gsap.timeline({ repeat: -1, ease: "power2.inOut" });
      Array.from(settings.to).forEach((element) => {
        tmp.to(this.refItem, Object.fromEntries(Object.entries(element)));
      });
      this.GSAP = tmp;
    }
  }
  stop() {
    this.isPlay = false;
    this.GSAP.pause();
  }
  start() {
    this.isPlay = true;
    this.GSAP.play();
  }
}

const anim = reactive(new Animation());
onMounted(() => {
  anim.inject(props.settings);
});
</script>

<style scoped lang="scss">
.item {
  height: 300px;
  border: 1px solid #ffffff1a;
  background: #ffffff0a;
  border-radius: 20px;
}
.cube-transperent {
  background-color: transparent !important;
}
.cube {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $red-7;
}
</style>
