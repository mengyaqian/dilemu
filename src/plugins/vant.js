import Vue from "vue";
import {
  Button,
  Icon,
  Cell,
  CellGroup,
  Image as VanImage,
  Row,
  Col,
  Popup,
  Field,
  Switch,
  Toast,
  Picker,
  Dialog,
} from "vant";

Vue.use(Button);
Vue.use(Icon);
Vue.use(Cell).use(CellGroup);
Vue.use(VanImage);
Vue.use(Row).use(Col);
Vue.use(Popup);
Vue.use(Field);
Vue.use(Switch);
Vue.use(Toast);
Vue.use(Picker);
Vue.use(Dialog);
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;
