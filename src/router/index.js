import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import PanelComponent from '../components/PanelComponent.vue';
import PanelInfoConfiguration from '../components/PanelInfoConfiguration.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginComponent,
  },
  {
    path: '/Panel',
    name: 'Panel',
    component: PanelComponent,
    meta: { requiresAuth: true },
  },
  {
    path: '/PaneConfiguration',
    name: 'PanelConfiguration',
    component: PanelInfoConfiguration,
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Ruta de autenticación simulada (debes reemplazar con tu lógica real)
const isAuthenticated = () => {
  // Aquí puedes agregar la lógica para verificar si el usuario está autenticado
  return localStorage.getItem('authenticated') === 'true';
};

// Configurar guardia de navegación
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: 'LoginComponent' });
  } else {
    next();
  }
});

export default router;