<template>
  <div class="panel-component">
    <h2>Guía para instalar Vue.js</h2>
    <p>Ejecuta los siguientes comandos en tu terminal:</p>
    <pre class="centered"><code><strong>nvm list node 18.18.1</strong></code></pre>
    <pre class="centered"><code><strong>npm install -g @vue/cli</strong></code></pre>
    <pre class="centered"><code><strong>vue create vue-project</strong></code></pre>
    <pre class="centered"><code><strong>cd vue-project</strong></code></pre>
    <pre class="centered"><code><strong>npm run serve</strong></code></pre>
    <h3>Extensiones para instalar en VSCode:</h3>
    <ul>
      <li>Vetur (para que interprete los archivos de Vue)</li>
      <li>Vue VSCode Snippets (Sarah.drasner)</li>
    </ul>
    <h3>Para manejo de rutas:</h3>
    <p>Ejecuta el siguiente comando:</p>
    <pre><code>npm install vue-router@next</code></pre>
    <button class="vue-button" @click="goToPrincipalPanel()">Regresar</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'PanelInfoConfiguration',
  setup() {
      
    const router = useRouter();


    const goToPrincipalPanel = () => {
     router.push({ name: 'Panel' });
    }

    return {
      goToPrincipalPanel
    };
  },
};
</script>

<style scoped>
.panel-component {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
}

pre {
  background-color: #f0f0f0;
  padding: 2px;
  border-radius: 5px;
  overflow-x: auto;
}

code {
  font-family: monospace;
}

.centered {
  display: flex;
  justify-content: center;
}

.vue-button {
  background-color: #4FC08D; 
  padding-top: 4px;
  padding-bottom: 4px;
  margin-left: 2px;
  margin-right: 2px;
  color: white;
}
</style>