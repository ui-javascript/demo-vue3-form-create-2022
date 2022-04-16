import { createApp } from 'vue'
import App from './formCreate.vue'

import ElementUI from 'element-plus/es/index'
import 'element-plus/dist/index.css'
import formCreate from '@form-create/element-ui'


createApp(App)
    .use(ElementUI)
    .use(formCreate)
    .mount('#app')
