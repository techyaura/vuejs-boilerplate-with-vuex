<template>
  <div>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>VUEJS-Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
        bottom
        left
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{user.username}}</v-list-tile-title>
                <!-- <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title> -->
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn flat @click="menu = false">Cancel</v-btn>
            <v-btn color="primary" flat @click="logout">Logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer v-bind:width="200" fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/about">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'appHeader',
  data() {
    return {
      drawer: false,
      fav: true,
      menu: false,
      message: false,
      hints: true
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/destroySession').then(() => {
        this.$router.push('/login');
      });
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'getUser'
    })
  },
  created() {
    this.$store.dispatch('auth/fetchSession');
  }
};
</script>

<style>
</style>
