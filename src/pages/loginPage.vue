<template>
  <q-page-container class="full-width flex items-center justify-evenly">
    <q-card style="width: 800px" class="q-px-xl flex row justify-center">
      <q-form
        @submit="login"
        style="width: 600px"
        class="flex row justify-center text-center q-px-xl q-py-xl"
      >
        <p class="poster-title col-12">Poster</p>
        <p class="poster-subtitle col-12">Create New Account</p>
        <q-input
          v-model="username"
          color="accent"
          label="Username"
          lazy-rules
          :rules="[(val) => !!val || 'Please enter your username']"
          class="col-12"
        />
        <q-input
          v-model="password"
          color="accent"
          label="Password"
          lazy-rules
          :rules="[(val) => !!val || 'Please enter your password']"
          class="col-12"
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            ></q-icon> </template
        ></q-input>
        <q-input
          v-model="confirmpassword"
          color="accent"
          label="confirm Password"
          lazy-rules
          :rules="[(val) => !!val || 'Please enter your password']"
          class="col-12"
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            ></q-icon> </template
        ></q-input>
        <div class="poster-checkbox col-12">
          <q-checkbox
            size="md"
            v-model="shape"
            val="md"
            color="accent"
          ></q-checkbox>
          <p style="font-size: small">
            I agree to the Terms of Service and the Privacy Policy including the
            Cookie Use statement.
          </p>
        </div>
        <q-btn
          rounded
          type="submit"
          color="accent"
          label="Login"
          style="margin-top: 5%"
          class="col-12"
        />
        <p class="poster-login col-12">
          Already a member? <a href="#">Login</a>
        </p>
      </q-form>
    </q-card>
  </q-page-container>
</template>

<style scoped lang="scss">
.poster-header {
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.poster-title {
  color: #7a00cc;
  font-size: x-large;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.poster-subtitle {
  color: #7a00cc;
  margin: 1.5rem 0 1.5rem 0;
  font-size: x-large;
  font-weight: 600;
}

.poster-checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.poster-checkbox p {
  padding: 21px 0 0 10px;
  text-align: left;
}

.poster-btn {
  margin-top: 1.5rem;
  width: 100%;
  color: black;
  border-radius: 20px;
}

.poster-login {
  margin-top: 1.5rem;
}

.custom-text-field .v-label {
  transform: translateY(-10px) scale(0.75);
  color: #7a00cc;
}
</style>

<script lang="ts">
import { ref } from 'vue';
export default {
  name: 'loginPageComponent',
  setup() {
    const username = ref('');
    const password = ref('');
    const confirmpassword = ref('');

    const login = () => {
      window.location.href = '/#/s';
      console.log('login');
    };

    return {
      username,
      password,
      confirmpassword,
      login,
      shape: ref(false),
      isPwd: ref(true),
    };
  },
};
</script>
