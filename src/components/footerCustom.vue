<template>
  <q-footer
    class="bg-header-black row justify-center"
    :class="isIndexPage ? 'footerBlur' : ''"
    elevated
  >
    <q-separator class="bg-grey-separator full-width" />
    <div class="col-7 column q-py-xl">
      <div class="row items-center justify-between">
        <div class="row" style="gap: 0 80px">
          <router-link class="column justify-center" to="/"
            ><q-img
              class="cursor-pointer"
              src="icons/logo.svg"
              height="auto"
              width="120px"
          /></router-link>
          <div class="column font-16">
            <span class="cursor-pointer" style="text-decoration: underline"
              >Email: horek@horek.com</span
            >
            <span style="color: rgba(255, 255, 255, 0.5)"
              >9:00 - 23:00 Пн-Пт
            </span>
          </div>
          <div class="column font-16">
            <span class="cursor-pointer" style="text-decoration: underline"
              >TG: @horekmanager</span
            >
            <span style="color: rgba(255, 255, 255, 0.5)"
              >9:00 - 23:00 Пн-Пт
            </span>
          </div>
        </div>
        <div>
          <q-img
            class="cursor-pointer"
            :src="require('assets/icons/telegram.svg')"
            width="29px"
          />
        </div>
      </div>
      <div class="q-pt-md">
        <q-separator class="footerSeparator" />
      </div>
      <div class="row items-center justify-between">
        <div
          class="row items-center text-uppercase font-16"
          style="gap: 0 60px"
        >
          <router-link class="linkCustom" to="/"
            ><span>портфолио</span></router-link
          >
          <router-link class="linkCustom" to="/services"
            ><span>услуги</span></router-link
          >
          <router-link class="linkCustom" to="/contacts"
            ><span>контакты</span></router-link
          >
        </div>
        <div class="col-5 font-16">
          <div class="row blockConsultation">
            <div class="q-px-lg q-py-sm">Обсудим ваш проект?</div>
            <q-space />
            <q-separator class="bg-red-7" vertical />
            <div
              class="text-red-7 text-uppercase q-px-lg q-py-sm cursor-pointer"
            >
              Консультация
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isIndexPage = computed(() => route?.path === "/");
</script>

<style scoped lang="scss">
.footerBlur {
  background: linear-gradient(0deg, rgba(4, 6, 10, 0.72), rgba(4, 6, 10, 0.72)),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 0%,
      #dc143b 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
}
.footerSeparator {
  mix-blend-mode: overlay;
  background-color: white;
}

.blockConsultation {
  border: 1px solid $red-7;
  border-radius: 10px;
}
.linkCustom {
  color: white;
  transition: color 0.3s;
  text-decoration: none;
}
.linkCustom:hover {
  color: $red-7;
}
</style>
