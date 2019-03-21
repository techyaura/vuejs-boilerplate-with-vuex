import Vue from 'vue';
// import Vuetify from 'vuetify/lib';
// import 'vuetify/src/stylus/app.styl';

// Vue.use(Vuetify, {
//   iconfont: 'md',
// });


import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VFadeTransition
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

// Helpers
// import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VFadeTransition
  },
  // theme: {
  //   primary: colors.red.darken1, // #E53935
  //   secondary: colors.red.lighten4, // #FFCDD2
  //   accent: colors.indigo.base // #3F51B5
  // },
  directives: {
    Ripple
  }
});
