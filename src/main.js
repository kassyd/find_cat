import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      'pages/index/main',
      '^pages/personal/main',
      'pages/personal/setting/main',
      'pages/personal/notify/main',
      'pages/personal/mytimeline/main',
      'pages/personal/mustknown/main'
    ],
    tabBar: {
      backgroundColor: '#fff',
      list: [{
        pagePath: 'pages/test/main',
        iconPath: '/static/img/find-cat.png',
        text: '寻找猫'
      }, {
        pagePath: 'pages/index/main',
        iconPath: '/static/img/community.png',
        text: '铲屎官社区'
      }, {
        pagePath: 'pages/personal/main',
        iconPath: '/static/img/self-center.png',
        text: '个人中心'
      }]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#cd9057',
      navigationBarTitleText: '喵与猫寻',
      navigationBarTextStyle: 'white'
    }
  }
}
