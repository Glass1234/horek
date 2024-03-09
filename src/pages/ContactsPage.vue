<template>
    <div 
      class="row justify-center full-width text-white"
      :class="{
        'q-pt-lg': $q.screen.width > 430,
      }"
      :style="$q.screen.width > 430 ? {'padding-bottom' : '100px'} : {'padding-bottom' : '26px', 'margin-top' : '-50px'}"
    >
    <div
      :class="{
        'col-8': $q.screen.width > 768,
        'col-10': $q.screen.width <= 768 && $q.screen.width > 430, 
        'col-11': $q.screen.width <= 430 
      }"
      :style="$q.screen.width > 430 ? {} : {'padding' : '0 7px'}"
    >
      <q-breadcrumbs
        class="font-15"
        active-color="white"
        gutter="sm"
        :style="$q.screen.width > 430 ? {} : {'display' : 'none'}"
      >
        <q-breadcrumbs-el :label="t('Home')" to="/" />
        <q-breadcrumbs-el :label="t('Contacts')" />
      </q-breadcrumbs>
      <h1 
        class="q-mb-none"
        :class="{
          'font-34': $q.screen.width > 430,
          'font-16': $q.screen.width <= 430
        }"
      >{{ t("Contacts") }}</h1>
      <div class="row"
        style="gap: 64px"
        :style="$q.screen.width > 430 ? {} : {'gap' : '25px 72px'}"
      >
        <div class="column" style="gap: 4px 0">
          <span
            :class="{
              'font-17': $q.screen.width > 430,
              'font-12': $q.screen.width <= 430
            }"
            style="color: rgba(255, 255, 255, 0.5)"
          >
            {{
              t("Mail")
            }}
          </span>
          <div
            :class="{
              'font-16': $q.screen.width > 430,
              'font-12': $q.screen.width <= 430
            }"
          >
            <a href="mailto:horek@horek.com" class="text-white"
              >horek@horek.com
            </a>
          </div>
        </div>
        <div class="column" style="gap: 4px 0">
          <span
            :class="{
              'font-17': $q.screen.width > 430,
              'font-12': $q.screen.width <= 430
            }"
            style="color: rgba(255, 255, 255, 0.5)"
          >
            Telegram
          </span>
          <div
            :class="{
              'font-16': $q.screen.width > 430,
              'font-12': $q.screen.width <= 430
            }"
          >
            <a
              href="https://t.me/horekmanager"
              class="text-white"
              target="_blank"
              >@horekmanager</a
            >
          </div>
        </div>
        <div class="column" style="gap: 4px 0">
          <span
            :class="{
              'font-17': $q.screen.width > 430,
              'font-12': $q.screen.width <= 430
            }"
            style="color: rgba(255, 255, 255, 0.5)"
          >
            {{
              t("Telegram channel")
            }}
          </span>
          <div
            :class="{
              'font-16': $q.screen.width > 430,
              'font-12': $q.screen.width <= 430
            }"
          >
            <a
              href="https://t.me/horekportfolio"
              class="text-white"
              target="_blank"
              >@horekportfolio</a
            >
          </div>
        </div>
        <div class="column" style="gap: 4px 0">
          <span
            :class="{
              'font-17': $q.screen.width > 430,
              'font-12': $q.screen.width <= 430
            }"
            style="color: rgba(255, 255, 255, 0.5)"
          >
            {{
              t("Work time")
            }}
          </span>
          <div
            :class="{
              'font-16': $q.screen.width > 430,
              'font-12': $q.screen.width <= 430
            }"
          >
            9:00 - 23:00 {{ t("Mon-Fri") }}
          </div>
        </div>
      </div>
      <div class="q-mt-lg">
        <span class="font-16">{{ t("Check your contacts.") }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped lang="scss"></style>
