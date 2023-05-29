<template>
  <q-page class="row items-center justify-evenly">
    <div class="container">
      <div
        class="left-column q-shadow-lg q-col-xs-12 q-col-sm-12 q-col-md-8 q-col-lg-8 q-col-xl-8"
      >
        <q-card class="my-card" style="padding: 5px">
          <img
            src="https://mymodernmet.com/wp/wp-content/uploads/archive/GpxYOJrdz3MaazXRWWBv_1082076391.jpeg"
          />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section
            class="q-pt-none"
            style="display: flex; flex-direction: row"
          >
            {{ lorem }}
            <q-card-actions class="q-ml-auto">
              <q-btn
                flat
                dense
                round
                icon="get_app"
                aria-label="Download"
                class="q-mr-sm"
                @click="showCustom"
              ></q-btn>
              <q-btn
                flat
                dense
                round
                icon="fullscreen"
                aria-label="Full Screen"
                class="q-mr-sm"
              ></q-btn>
              <q-btn flat dense round icon="save" aria-label="Save"></q-btn>
            </q-card-actions>
          </q-card-section>
        </q-card>
        <q-card class="my-card" style="padding: 5px">
          <img
            src="https://i.pinimg.com/originals/fd/8a/68/fd8a68c13c2b1e7c5552ca1af9182cfe.jpg"
          />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section
            class="q-pt-none"
            style="display: flex; flex-direction: row"
          >
            {{ lorem }}
            <q-card-actions class="q-ml-auto">
              <q-btn
                flat
                dense
                round
                icon="get_app"
                aria-label="Download"
                class="q-mr-sm"
              ></q-btn>
              <q-btn
                flat
                dense
                round
                icon="fullscreen"
                aria-label="Full Screen"
                class="q-mr-sm"
              ></q-btn>
              <q-btn flat dense round icon="save" aria-label="Save"></q-btn>
            </q-card-actions>
          </q-card-section>
        </q-card>
      </div>

      <div
        class="right-column q-col-xs-12 q-col-sm-12 q-col-md-4 q-col-lg-4 q-col-xl-4"
        style="margin-top: 5px"
      >
        <q-btn
          label="Application Info"
          icon-right="info"
          @click="dialog = true"
          style="width: 100%"
        ></q-btn>
        <q-dialog
          v-model="dialog"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-card class="bg-primary text-white">
            <q-bar>
              <q-space></q-space>

              <q-btn
                dense
                flat
                label="minimize"
                @click="maximizedToggle = false"
                :disable="!maximizedToggle"
              >
                <q-tooltip v-if="maximizedToggle" class="bg-white text-primary"
                  >Minimize</q-tooltip
                >
              </q-btn>
              <q-btn
                dense
                flat
                icon="crop_square"
                @click="maximizedToggle = true"
                :disable="maximizedToggle"
              >
                <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary"
                  >Maximize</q-tooltip
                >
              </q-btn>
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section>
              <div class="text-h6">Alert</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
              perferendis totam, ea at omnis vel numquam exercitationem aut,
              natus minima, porro labore.
            </q-card-section>
          </q-card>
        </q-dialog>
        <div
          class="q-pa-md q-gutter-sm"
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          "
        >
          <q-btn-dropdown
            color="accent"
            label="Dropdown Button"
            style="width: 100%"
          >
            <q-list>
              <q-btn
                label="Upload"
                @click="prompt = true"
                style="width: 100%; margin-top: 5px"
              ></q-btn>

              <q-btn
                label="Upload"
                @click="prompt = true"
                style="width: 100%; margin-top: 5px"
              ></q-btn>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>close</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-dialog v-model="prompt" persistent>
            <q-card style="min-width: 350px">
              <q-card-section>
                <div class="text-h6">Upload Image</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-form @submit="uploadImage">
                  <q-input dense type="file" v-model="image"></q-input>
                  <q-input
                    dense
                    v-model="caption"
                    placeholder="Caption"
                  ></q-input>

                  <div class="q-mt-md">
                    <img
                      :src="imagePreview"
                      alt="Preview"
                      style="max-width: 100%"
                    />
                  </div>

                  <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Cancel" v-close-popup></q-btn>
                    <q-btn
                      type="submit"
                      flat
                      label="Upload"
                      color="primary"
                    ></q-btn>
                  </q-card-actions>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>

        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="accent"
          navigation
          height="250px"
          class="shadow-3"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-top">
            <q-icon name="style" size="56px"></q-icon>
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-top">
            <q-icon name="live_tv" size="56px"></q-icon>
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-top">
            <q-icon name="layers" size="56px"></q-icon>
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap flex-top">
            <q-icon name="terrain" size="56px"></q-icon>
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 60rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 960px) {
    flex-direction: column;
    height: auto;
  }
}

.left-column {
  width: 80%;
  height: 80rem;
  margin-right: 5px;
  margin-left: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.24);

  @media (max-width: 960px) {
    width: 100%;
    margin-right: 0;
    height: auto;
  }
}

.right-column {
  width: 20%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.541);

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 20px;
    height: auto;
  }
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
    height: auto;
  }
  .left-column,
  .right-column {
    width: 100%;
    margin-right: 0;
    height: auto;
  }
}
</style>

<script lang="ts">
import { Meta } from '../components/models';
import { defineComponent, ref } from 'vue';
import { QSpinnerGears, useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const $q = useQuasar();
    function autoClose() {
      let seconds = 3;

      const dialogs = $q
        .dialog({
          title: 'Alert',
          message: `Autoclosing in ${seconds} seconds.`,
        })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          clearTimeout(timer);
        });

      const timer = setInterval(() => {
        seconds--;

        if (seconds > 0) {
          dialogs.update({
            message: `Autoclosing in ${seconds} second${
              seconds > 1 ? 's' : ''
            }.`,
          });
        } else {
          clearInterval(timer);
          dialogs.hide();
        }
      }, 1000);
    }

    const meta = ref<Meta>({
      totalCount: 1200,
    });

    function showCustom() {
      const dialog = $q.dialog({
        title: 'Uploading...',
        dark: true,
        message: '0%',
        progress: {
          spinner: QSpinnerGears,
          color: 'amber',
        },
        persistent: true, // we want the user to not be able to close it
        ok: false, // we want the user to not be able to close it
      });

      // we simulate some progress here...
      let percentage = 0;
      const interval = setInterval(() => {
        percentage = Math.min(100, percentage + Math.floor(Math.random() * 22));

        // we update the dialog
        dialog.update({
          message: `${percentage}%`,
        });

        // if we are done...
        if (percentage === 100) {
          clearInterval(interval);

          dialog.update({
            title: 'Done!',
            message: 'Upload completed successfully',
            progress: false,
            ok: true,
          });
        }
      }, 500);
    }

    const dialogs = ref(false);
    const position = ref('top');

    const prompt = ref(false);
    const image = ref(null);
    const caption = ref('');
    const imagePreview = ref<string | ArrayBuffer | null>(null);

    function uploadImage() {
      // Perform your image upload logic here
      // Access the selected image file using 'image.value'
      // Access the caption using 'caption.value'

      // After the upload is complete, close the dialog
      prompt.value = false;
    }

    function previewImage(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        const file = inputElement.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          imagePreview.value = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        imagePreview.value = null;
      }
    }

    return {
      autoClose,
      meta,
      dialogs,
      position,
      onItemClick() {
        // console.log('Clicked on an Item')
      },

      open(bottom: string) {
        position.value = bottom;
        dialogs.value = true;
      },
      slide: ref('style'),
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      showCustom,
      alert: ref(false),
      confirm: ref(false),
      prompt,
      image,
      caption,
      uploadImage,
      imagePreview,
      previewImage,
      dialog: ref(false),
      maximizedToggle: ref(true),
    };
  },
});
</script>
