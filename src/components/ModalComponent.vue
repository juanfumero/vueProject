<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <span class="close-button" @click="closeModal">&times;</span>
      <div class="modal-header">
        <img src="@/assets/logo.png" alt="Icon" class="icon" />
        <h2>{{ title }}</h2>
      </div>
      <p>{{ description }}</p>
      <button class="close-modal-button" @click="closeModal">Cerrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  emits: ['close'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
}

.modal-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.icon {
  margin-right: 10px;
  width: 40px; 
  height: 40px; 
}
</style>