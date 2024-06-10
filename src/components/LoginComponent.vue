<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit">
      <h2>Login</h2>
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginComponent',
  props: {
    msg: String
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const handleSubmit = () => {
      // Aquí puedes agregar la lógica para enviar los datos de login al servidor      
      if (username.value === 'admin' && password.value === 'admin') {
        localStorage.setItem('authenticated', 'true');
        router.push({ name: 'Panel' });
      } else {
        alert('Credenciales incorrectas');
      }
    };

    return {
      username,
      password,
      handleSubmit,
    };
  },
}
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>