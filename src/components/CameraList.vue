<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import CameraNotification from '../components/CameraNotification.vue';

const cameras = ref([
  { id: 1, name: 'Cámara Entrada', image: 'https://via.placeholder.com/150', stream: '#' },
  { id: 2, name: 'Cámara Patio', image: 'https://via.placeholder.com/150', stream: '#' },
  { id: 3, name: 'Cámara Garaje', image: 'https://via.placeholder.com/150', stream: '#' }
]);

const selectedCamera = ref(null);

const showNotification = (camera) => {
  selectedCamera.value = camera;
  toast.info(`🔴 Alerta de ${camera.name}`, {
    autoClose: 5000,
    position: "top-right",
    onClick: () => openCamera(camera) // Abre la cámara si se hace clic en la notificación
  });
};

const openCamera = (camera) => {
  selectedCamera.value = camera;
};
</script>

<template>
  <div class="container">
    <h2 class="mt-3">Cámaras de Vigilancia</h2>
    
    <!-- Botón para disparar notificaciones manualmente -->
    <button class="btn btn-danger mb-3" @click="showNotification(cameras[Math.floor(Math.random() * cameras.length)])">
      🔔 Enviar Notificación Manual
    </button>

    <div class="row">
      <div class="col-md-4" v-for="camera in cameras" :key="camera.id">
        <div class="card" @click="openCamera(camera)">
          <img :src="camera.image" class="card-img-top" alt="camera.name">
          <div class="card-body">
            <h5 class="card-title">{{ camera.name }}</h5>
          </div>
        </div>
      </div>
    </div>

    <CameraNotification :camera="selectedCamera" />
  </div>
</template>
