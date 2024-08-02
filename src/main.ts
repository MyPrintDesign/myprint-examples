import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPrint, MyPrinter} from 'myprint-design';

// 引入样式文件
import 'myprint-design/css/index.css';

// 设置pdf服务器地址(可选)
MyPrinter.initMyPrinter({
    serverUrl: 'http://q-jiang.com:19898', // 服务器地址
    // disabledClient: true // 是否禁用客户端连接
});

// 安装 myprint
createApp(App)
    .use(createPrint)
    .mount('#app')
