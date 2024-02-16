<template>
  <div class="row justify-center full-width text-white q-pt-lg">
    <div class="col-8">
      <q-breadcrumbs class="font-15" active-color="white" gutter="sm">
        <q-breadcrumbs-el label="Главная" to="/" />
        <q-breadcrumbs-el label="Контакты" />
      </q-breadcrumbs>
      <h1 class="font-34 q-mb-none">Контакты</h1>
      <div class="row" style="gap: 64px">
        <div class="column" style="gap: 4px 0">
          <span class="font-17" style="color: rgba(255, 255, 255, 0.5)"
            >Почта</span
          >
          <div class="font-16">
            <a href="mailto:horek@horek.com" class="text-white"
              >horek@horek.com</a
            >
          </div>
        </div>
        <div class="column" style="gap: 4px 0">
          <span class="font-17" style="color: rgba(255, 255, 255, 0.5)"
            >Telegram</span
          >
          <div class="font-16">
            <a
              href="https://t.me/horekmanager"
              class="text-white"
              target="_blank"
              >@horekmanager</a
            >
          </div>
        </div>
        <div class="column" style="gap: 4px 0">
          <span class="font-17" style="color: rgba(255, 255, 255, 0.5)"
            >Telegram-канал</span
          >
          <div class="font-16">
            <a
              href="https://t.me/horekportfolio"
              class="text-white"
              target="_blank"
              >@horekportfolio</a
            >
          </div>
        </div>
        <div class="column" style="gap: 4px 0">
          <span class="font-17" style="color: rgba(255, 255, 255, 0.5)"
            >Рабочее время</span
          >
          <div class="font-16">9:00 - 23:00 Пн-Пт</div>
        </div>
      </div>
      <div class="q-mt-lg">
        <span class="font-16">Сверяйте контакты.</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
