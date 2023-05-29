<template>
  <q-layout view="lHh Lpr lFf" :dark="isDarkMode">
    <q-header style="background-color: #9c27b0">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <!-- <img src="../assets/kelangu-logo.png" style="width: 45px;"/>
         <img src="../assets/kelangu.png" style="width: 15rem;"/> -->
          Poster
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          :icon="isDarkMode ? 'brightness_7' : 'brightness_2'"
          :aria-label="
            isDarkMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'
          "
          @click="toggleDarkMode"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox"></q-icon>
            </q-item-section>

            <q-item-section> Inbox </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star"></q-icon>
            </q-item-section>

            <q-item-section> Star </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send"></q-icon>
            </q-item-section>

            <q-item-section> Send </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts"></q-icon>
            </q-item-section>

            <q-item-section> Drafts </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">M.A.Shelif</div>
          <div>@__shelif__</div>
        </div>
      </q-img>
    </q-drawer>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent"></q-btn>
    </q-page-scroller>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QSpinnerGears, useQuasar } from 'quasar';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);
    const { dark } = useQuasar();

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const toggleDarkMode = () => {
      dark.toggle();
    };
    const $q = useQuasar();

    function showCustom() {
      const dialog = $q.dialog({
        title: 'Uploading...',
        dark: true,
        message: '0%',
        progress: {
          spinner: QSpinnerGears,
          color: 'amber',
        },
        persistent: true,
        ok: false,
      });

      let percentage = 0;
      const interval = setInterval(() => {
        percentage = Math.min(100, percentage + Math.floor(Math.random() * 22));

        dialog.update({ message: `${percentage}%` });

        if (percentage === 100) {
          clearInterval(interval);

          dialog.update({
            title: 'Done!',
            message: 'Upload completed successfully',
            buttons: [{ label: 'OK', color: 'positive' }],
          });
        }
      }, 500);
    }

    return {
      leftDrawerOpen,
      isDarkMode: dark.isActive,
      toggleLeftDrawer,
      toggleDarkMode,
      showCustom,
    };
  },
});
</script>
