<template>
  <div
    class="row justify-center full-width text-white"
    style="padding: 100px 0"
  >
    <div class="column col-8">
      <div class="grid justify-between">
        <div class="column justify-between" style="gap: 30px 0">
          <div style="max-width: 430px">
            <h1 class="q-my-none text-h2">
              {{ t("Turnkey website from 20,000 ₽") }}
            </h1>
            <span
              class="q-mt-lg block text-h5"
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
        <q-img
          fit="none"
          :src="require('assets/images/AD.png')"
          style="height: 438px;"
        />
      </div>
      <div style="margin-top: 125px">
        <h2 class="q-my-none text-h2">{{ t("Why us?") }}</h2>
        <div
          class="row justify-between items-baseline q-mt-xl"
          style="gap: 30px"
        >
          <div style="width: 430px">
            <q-avatar size="70px" style="background-color: #26272b">
              <q-img :src="require('assets/icons/armor.svg')" width="29px" />
            </q-avatar>

            <h3 class="block q-my-none text-h4 q-mt-sm">
              {{ t("High-quality development") }}
            </h3>
            <div
              class="q-mt-sm block text-h5"
              style="color: #ffffffb2; line-height: 36px"
            >
              {{
                t(
                  "We will create a unique and attractive appearance for the site and ensure its optimal performance."
                )
              }}
            </div>
          </div>
          <div style="width: 430px">
            <q-avatar size="70px" style="background-color: #26272b">
              <q-img :src="require('assets/icons/pazle.svg')" width="29px" />
            </q-avatar>

            <h3 class="block q-my-none text-h4 q-mt-sm">
              {{ t("Individual approach") }}
            </h3>
            <div
              class="q-mt-sm block text-h5"
              style="color: #ffffffb2; line-height: 36px"
            >
              {{
                t(
                  "We take into account all your wishes and needs to create a website that perfectly suits your business."
                )
              }}
            </div>
          </div>
          <div style="width: 430px">
            <q-avatar size="70px" style="background-color: #26272b">
              <q-img
                :src="require('assets/icons/armorCircle.svg')"
                width="29px"
              />
            </q-avatar>

            <h3 class="block q-my-none text-h4 q-mt-sm">
              {{ t("Support and update") }}
            </h3>
            <div
              class="q-mt-sm block text-h5"
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
      <div style="margin-top: 125px">
        <h2 class="q-my-none text-h2">{{ t("Additional services") }}</h2>
        <div
          class="row justify-between items-center q-mt-xl"
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
            <h3 class="block q-my-none q-mt-sm" style="font-size: 30px">
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
            <h3 class="block q-my-none q-mt-sm" style="font-size: 30px">
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
            <h3 class="block q-my-none q-mt-sm" style="font-size: 30px">
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
