import { createApp } from 'vue'
import App from './cascader.vue'

import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import formCreate from '@form-create/element-ui'

import zhCn from 'element-plus/es/locale/lang/zh-cn'


createApp(App)
    .use(ElementUI, {
        locale: zhCn,
    })
    .use(formCreate)
    .mount('#app')
