<template>
  <div class="page">
    <slot name="navigator">
      <div class="navigator" v-if="theme !== 'full'">
        <div class="content" :class="{ show: showNav }" :style="styles">{{ title }}</div>
        <div class="placeholder" v-if="showPlace"></div>
      </div>
    </slot>
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="Page">
  import type { StyleValue } from 'vue';

  export type ThemeType = 'full' | 'fullScroll' | 'default';

  const props = withDefaults(
    defineProps<{
      theme?: ThemeType;
      styles?: StyleValue;
      title?: string;
    }>(),
    {
      theme: 'default',
    },
  );

  const showNav = ref<boolean>(false);
  const showPlace = ref<boolean>(props.theme === 'default');

  const handler = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      showNav.value = true;
    } else {
      showNav.value = false;
    }
  };

  watchEffect(() => {
    showNav.value = props.theme === 'default';
    showPlace.value = props.theme === 'default';
    if (props.theme === 'fullScroll') {
      window.addEventListener('scroll', handler);
    } else {
      window.removeEventListener('scroll', handler);
    }
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handler);
  });
</script>

<style lang="less" scoped>
  &[data-theme='dark'] {
    .page > .navigator > .content {
      background-color: #000;
    }
  }
  .page {
    .navigator {
      position: relative;
      .content {
        width: 100%;
        height: 44px;
        background-color: #fff;
        opacity: 0;
        transition: all 0.3s;
        text-align: center;
        line-height: 44px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        padding-top: 24px;
        box-sizing: content-box;
        &.show {
          opacity: 1;
        }
      }
      .placeholder {
        width: 100%;
        height: 68px;
        position: relative;
      }
    }
  }
</style>
