<template>
  <div class="panel-container">
    <h2>Puntos a Mejorar</h2>
    <ul>
      <li v-for="item in items" :key="item.id" @click="showModal(item)">
        {{ item.title }}
      </li>
    </ul>

    <ModalComponent
      v-if="isModalVisible"
      :title="selectedItem.title"
      :description="selectedItem.description"
      @close="isModalVisible = false"
    />
    
    <button class="vue-button" @click="showOtherInfo()">Información Instalación Vue.js</button>
  </div>
</template>

<script>

import { ref } from 'vue';
import ModalComponent from './ModalComponent.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'PanelComponent',
  components: {
    ModalComponent,
  },
    setup() {
      
    const router = useRouter();
    const items = ref([
      { id: 1, title: 'Mentoría y apoyo a colegas menos experimentados', description: 'Detalles sobre cómo guiar y apoyar a colegas menos experimentados para ayudarles a mejorar sus habilidades.' },
      { id: 2, title: 'Promover las mejores prácticas de desarrollo', description: 'Detalles sobre cómo fomentar el uso de mejores prácticas de desarrollo entre el equipo.' },
      { id: 3, title: 'Facilitar la comprensión del código y la arquitectura', description: 'Detalles sobre cómo explicar y documentar el código y la arquitectura para que sea más accesible a todos los miembros del equipo.' },
      { id: 4, title: 'Realizar revisiones de código constructivas', description: 'Detalles sobre cómo llevar a cabo revisiones de código que sean constructivas y educativas.' },
      { id: 5, title: 'Fomentar un entorno de aprendizaje continuo', description: 'Detalles sobre cómo crear y mantener un entorno que promueva el aprendizaje y el desarrollo profesional continuo.' },
    ]);

    const isModalVisible = ref(false);
    const selectedItem = ref({});

    const showModal = (item) => {
      selectedItem.value = item;
      isModalVisible.value = true;
    };

    const showOtherInfo = () => {
     router.push({ name: 'PanelConfiguration' });
    }

    return {
      items,
      isModalVisible,
      selectedItem,
      showModal,
      showOtherInfo
    };
  },
};
</script>



<style scoped>
.panel-container {
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #e3e3e3;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
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