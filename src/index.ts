import { createApp} from 'vue';
import App from './App.vue';

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css';
import './assets/base.css';

import vuetify from './plugins/vuetify';

createApp(App).use(vuetify).mount('#app');
