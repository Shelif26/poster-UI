<template>
  <q-page class="row items-center justify-evenly">
    <div class="container">
      <div class="left-column q-shadow-lg"></div>
      <div class="right-column">
        <q-card class="my-card">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>User</q-item-label>
              <q-item-label caption>example@gmail.com</q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 48rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 960px) {
    flex-direction: column;
    height: auto;
  }
}

.left-column {
  width: 80%;
  height: 48rem;
  margin-right: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.541);

  @media (max-width: 960px) {
    width: 100%;
    margin-right: 0;
    height: auto;
  }
}

.right-column {
  width: 20%;
  height: 48rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.541);

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 20px;
    height: auto;
  }
}
</style>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  // components: { ExampleComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
  },
});
</script>
