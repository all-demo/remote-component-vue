import Vue from 'vue';
import HiButton from './components/HiButton/index.vue';

const components = [HiButton];

const install = () => {
  components.map((component) => Vue.use(component.name, component));
};

export default {
  install,
  HiButton,
};
