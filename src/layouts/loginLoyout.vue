<template>
  <q-layout class="flex justify-center" >
    <router-view />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'loginLayout',

  setup() {
    return {};
  },
});
</script>
