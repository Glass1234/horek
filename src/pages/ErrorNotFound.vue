<template>
  <div class="fullscreen bg-main-page text-center q-pa-md flex flex-center" style="color: #101828">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Вы как сюда попали ?
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="red-7"
        unelevated
        to="/"
        label="Вернуться на сайт"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
