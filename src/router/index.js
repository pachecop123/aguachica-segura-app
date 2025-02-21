import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserManagement from '../components/UserManagement.vue'; // Importa el componente

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/users', // Nueva ruta para el componente UserManagement
    name: 'UserManagement',
    component: UserManagement, // Asegúrate de que el componente esté correctamente importado
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;