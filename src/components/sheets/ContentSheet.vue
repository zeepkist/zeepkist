<template>
  <div :class="$style.content">
    <slot />
  </div>
</template>

<style module lang="less">
  @import '@arco-design/web-vue/es/style/theme/global.less';

  .content {
    background: var(--color-bg-2);
    padding: 1rem;
    border-radius: var(--border-radius-large);
    border: 1px solid var(--color-bg-2);
    box-shadow: @shadow-special;
    height: 100%;
  }
</style>
