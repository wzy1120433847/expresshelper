<template>
  <div id="app">
    <h1>Etake快递代取平台</h1>
    <nav>
      <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item>
          <span>包裹</span>
          <template #icon="props">
            <img
              :src="
                props.active
                  ? require('./assets/pkgctivate.png')
                  : require('./assets/pkginactivate.png')
              "
            />
          </template>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>广场</span>
          <template #icon="props">
            <img
              :src="
                props.active
                  ? require('./assets/squareactivate.png')
                  : require('./assets/squareinactivate.png')
              "
            />
          </template>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>订单</span>
          <template #icon="props">
            <img
              :src="
                props.active
                  ? require('./assets/orderactivate.png')
                  : require('./assets/orderinactivate.png')
              "
            />
          </template>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>我的</span>
          <template #icon="props">
            <img
              :src="
                props.active
                  ? require('./assets/meactivate.png')
                  : require('./assets/meinactivate.png')
              "
            />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </nav>
  </div>

  <router-view />
</template>
<script>
import { ref } from "vue";
import { Toast } from "vant";
export default {
  name:'App',
  setup() {
    const active = ref(0);
    const icon = {
      active: "https://img.yzcdn.cn/vant/user-active.png",
      inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
    };
    const onChange = (index) => Toast(`标签 ${index}`);
    return {
      icon,
      active,
      onChange,
    };
  },
};
</script>
<style lang = "less"></style>
