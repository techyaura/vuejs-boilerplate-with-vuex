<template>
  <v-app id="inspire">
    <app-header/>
    <v-content>
      <v-container>
        <router-view :key="$route.fullPath"></router-view>
      </v-container>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import AppHeader from '../components/app/header.vue';
import AppFooter from '../components/app/footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppFooter,
    AppHeader
  }
};
</script>
