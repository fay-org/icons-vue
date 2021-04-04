import fectIcon from './fectIcon.vue';

import { App } from 'vue'
const install = (app: App): void => {
  app.component('fectIcon', fectIcon)
};

export default install;

