<template>
  <div
    class="row justify-center full-width text-white"
    :style="{ padding: $q.screen.width > 1024 ? '100px 0' : '0 0 30px 0' }"
  >
    <div
      class="column"
      :class="{
        'col-8': $q.screen.width > 1024,
        'col-11': $q.screen.width <= 1024,
      }"
    >
      <div
        :class="{
          'grid justify-between': $q.screen.width > 1024,
          'column reverse justify-end': $q.screen.width <= 1024,
        }"
        :style="{ gap: $q.screen.width <= 1024 ? '30px 0' : '0' }"
      >
        <div class="column justify-between" style="gap: 30px 0">
          <div style="max-width: 430px">
            <h1
              class="q-my-none"
              :class="{
                'text-h2': $q.screen.width > 1024,
                'text-h4': $q.screen.width <= 1024,
              }"
            >
              {{ t("Turnkey website from 20,000 ₽") }}
            </h1>
            <span
              class="q-mt-lg block"
              :class="{
                'text-h5': $q.screen.width > 1024,
                'text-h6': $q.screen.width <= 1024,
              }"
              style="color: #ffffffb2; line-height: 38px"
              >{{
                t(
                  "Our specialization is the comprehensive development of your website for business success in the online sphere"
                )
              }}</span
            >
          </div>
          <div>
            <q-btn
              class="bg-red-button font-18"
              style="padding: 18px 30px; border-radius: 999px"
              unelevated
              no-caps
              to="/portfolio"
              :label="t('View portfolio')"
            />
          </div>
        </div>
        <div v-if="$q.screen.width > 1024">
          <q-img
            fit="contain"
            :src="require('assets/images/AD.png')"
            style="max-width: 100%; height: 438px"
          />
        </div>
        <div v-else>
          <img
            :src="require('assets/images/AD.png')"
            style="max-width: 100%; max-height: 438px"
          />
        </div>
      </div>
      <div :style="{ 'margin-top': $q.screen.width > 1024 ? '125px' : '50px' }">
        <h2
          class="q-my-none"
          :class="{
            'text-h2': $q.screen.width > 1024,
            'text-h4': $q.screen.width <= 1024,
          }"
        >
          {{ t("Why us?") }}
        </h2>
        <div
          class="row justify-between items-baseline q-mt-xl"
          style="gap: 30px"
        >
          <div
            style="max-width: 430px"
            :class="{
              'text-center': $q.screen.width <= 1024,
            }"
          >
            <div
              :class="{
                'text-h2': $q.screen.width > 1024,
                'row justify-center': $q.screen.width <= 1024,
              }"
            >
              <q-avatar size="70px" style="background-color: #26272b">
                <q-img :src="require('assets/icons/armor.svg')" width="29px" />
              </q-avatar>
            </div>

            <h3
              class="block q-my-none q-mt-sm"
              :class="{
                'text-h4': $q.screen.width > 1024,
                'text-h5': $q.screen.width <= 1024,
              }"
            >
              {{ t("High-quality development") }}
            </h3>
            <div
              class="q-mt-sm block"
              :class="{
                'text-h5': $q.screen.width > 1024,
                'text-h6': $q.screen.width <= 1024,
              }"
              style="color: #ffffffb2; line-height: 36px"
            >
              {{
                t(
                  "We will create a unique and attractive appearance for the site and ensure its optimal performance."
                )
              }}
            </div>
          </div>
          <div
            style="max-width: 430px"
            :class="{
              'text-center': $q.screen.width <= 1024,
            }"
          >
            <div
              :class="{
                'text-h2': $q.screen.width > 1024,
                'row justify-center': $q.screen.width <= 1024,
              }"
            >
              <q-avatar size="70px" style="background-color: #26272b">
                <q-img :src="require('assets/icons/pazle.svg')" width="29px" />
              </q-avatar>
            </div>

            <h3
              class="block q-my-none q-mt-sm"
              :class="{
                'text-h4': $q.screen.width > 1024,
                'text-h5': $q.screen.width <= 1024,
              }"
            >
              {{ t("Individual approach") }}
            </h3>
            <div
              class="q-mt-sm block"
              :class="{
                'text-h5': $q.screen.width > 1024,
                'text-h6': $q.screen.width <= 1024,
              }"
              style="color: #ffffffb2; line-height: 36px"
            >
              {{
                t(
                  "We take into account all your wishes and needs to create a website that perfectly suits your business."
                )
              }}
            </div>
          </div>
          <div
            style="max-width: 430px"
            :class="{
              'text-center': $q.screen.width <= 1024,
            }"
          >
            <div
              :class="{
                'text-h2': $q.screen.width > 1024,
                'row justify-center': $q.screen.width <= 1024,
              }"
            >
              <q-avatar size="70px" style="background-color: #26272b">
                <q-img
                  :src="require('assets/icons/armorCircle.svg')"
                  width="29px"
                />
              </q-avatar>
            </div>

            <h3
              class="block q-my-none q-mt-sm"
              :class="{
                'text-h4': $q.screen.width > 1024,
                'text-h5': $q.screen.width <= 1024,
              }"
            >
              {{ t("Support and update") }}
            </h3>
            <div
              class="q-mt-sm block"
              :class="{
                'text-h5': $q.screen.width > 1024,
                'text-h6': $q.screen.width <= 1024,
              }"
              style="color: #ffffffb2; line-height: 36px"
            >
              {{
                t(
                  "We provide reliable technical support and assistance in the further development and updating of your website."
                )
              }}
            </div>
          </div>
        </div>
      </div>
      <div :style="{ 'margin-top': $q.screen.width > 1024 ? '125px' : '50px' }">
        <h2
          class="q-my-none"
          :class="{
            'text-h2': $q.screen.width > 1024,
            'text-h4': $q.screen.width <= 1024,
          }"
        >
          {{ t("Additional services") }}
        </h2>
        <div
          class="row justify-between items-center"
          :class="{
            'q-mt-xl': $q.screen.width > 1024,
            'q-mt-lg': $q.screen.width <= 1024,
          }"
          style="align-items: stretch; gap: 30px"
        >
          <div
            class="full-width"
            style="
              background-color: #26272b;
              padding: 30px;
              border-radius: 24px;
              max-width: 430px;
            "
          >
            <h3 class="block q-my-none" style="font-size: 30px">
              {{ t("Graphic design") }}
            </h3>
            <div
              class="q-mt-xs block text-subtitle2"
              style="color: #ffffffb2; line-height: 22px"
            >
              {{
                t(
                  "Branding, corporate identity, advertising creatives, SMM design, brand book"
                )
              }}
            </div>
          </div>
          <div
            class="full-width"
            style="
              background-color: #26272b;
              padding: 30px;
              border-radius: 24px;
              max-width: 430px;
            "
          >
            <h3 class="block q-my-none" style="font-size: 30px">
              {{ t("Motion design") }}
            </h3>
            <div
              class="q-mt-xs block text-subtitle2"
              style="color: #ffffffb2; line-height: 22px"
            >
              {{
                t(
                  "We will help you professionally revive your project and attract the attention of your audience through the creation of high-quality animations"
                )
              }}
            </div>
          </div>
          <div
            class="full-width"
            style="
              background-color: #26272b;
              padding: 30px;
              border-radius: 24px;
              max-width: 430px;
            "
          >
            <h3 class="block q-my-none" style="font-size: 30px">
              {{ t("Development") }}
            </h3>
            <div
              class="q-mt-xs block text-subtitle2"
              style="color: #ffffffb2; line-height: 22px"
            >
              {{
                t(
                  "Telegram chatbots, various scripts, Back-end and Front-end, everything related to website development, Gui applications"
                )
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
</style>
