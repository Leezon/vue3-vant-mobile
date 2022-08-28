<template>
  <Page title="首页" :theme="theme">
    <div class="container">
      <div class="logo"></div>
      <van-cell-group title="Do more difficult things" inset>
        <van-cell center title="🌗 暗黑模式">
          <template #right-icon>
            <van-switch v-model="checked" size="18px" />
          </template>
        </van-cell>

        <van-cell title="💿 mock 指南" to="mock" is-link />

        <van-cell center>
          <template #title>
            <span class="custom-title">🎨 小游戏</span>
            <van-tag type="primary">敬请期待</van-tag>
          </template>
        </van-cell>
      </van-cell-group>

      <van-button @click="changeTheme('full')">full</van-button>
      <van-button @click="changeTheme('fullScroll')">fullScroll</van-button>
      <van-button @click="changeTheme('default')">default</van-button>
      <div class="logo"></div>
      <van-cell-group title="Do more difficult things" inset>
        <van-cell center title="🌗 暗黑模式">
          <template #right-icon>
            <van-switch v-model="checked" size="18px" />
          </template>
        </van-cell>

        <van-cell title="💿 mock 指南" to="mock" is-link />

        <van-cell center>
          <template #title>
            <span class="custom-title">🎨 小游戏</span>
            <van-tag type="primary">敬请期待</van-tag>
          </template>
        </van-cell>
      </van-cell-group>
      <div class="logo"></div>
      <van-cell-group title="Do more difficult things" inset>
        <van-cell center title="🌗 暗黑模式">
          <template #right-icon>
            <van-switch v-model="checked" size="18px" />
          </template>
        </van-cell>

        <van-cell title="💿 mock 指南" to="mock" is-link />

        <van-cell center>
          <template #title>
            <span class="custom-title">🎨 小游戏</span>
            <van-tag type="primary">敬请期待</van-tag>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </Page>
</template>

<script setup lang="ts">
  import { ThemeType } from '@/components/Page/index.vue';
  import { useStore } from '@/stores';
  import { localStorage } from '@/utils/local-storage';
  const store = useStore();
  const themeStore = localStorage.get('theme');
  const checked = ref<boolean>(themeStore === 'dark' ? true : false);
  watch(checked, val => {
    if (val) {
      store.mode = 'dark';
      localStorage.set('theme', 'dark');
    } else {
      store.mode = 'light';
      localStorage.set('theme', 'light');
    }
  });
  const theme = ref<ThemeType>('default');
  const changeTheme = val => {
    console.log('🌈 -- changeTheme -- val', val);
    theme.value = val;
  };
</script>

<style lang="less" scoped>
  .container {
    position: relative;

    .logo {
      width: 150px;
      height: 150px;
      background-image: url('@/assets/logo.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center;
    }

    .custom-title {
      margin-right: 4px;
      vertical-align: middle;
    }
  }
</style>
