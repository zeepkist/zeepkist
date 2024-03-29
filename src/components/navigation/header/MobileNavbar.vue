<script setup lang="ts">
  import { IconMenu2, IconX } from '@tabler/icons-vue'
  import { ref, watch } from 'vue'
  import {
    type RouteLocationNamedRaw,
    RouterLink,
    useRoute,
    useRouter
  } from 'vue-router'

  import ZeepkistIcon from '~/assets/zeepkist-icon.webp?inline'
  import SteamOpenIdLogin from '~/components/SteamOpenIdLogin.vue'
  import type { MenuItem } from '~/models/ui/navbar'
  import { useAuthenticationStore } from '~/stores/authentication'

  const { menuItems } = defineProps<{
    menuItems: MenuItem[]
  }>()

  const route = useRoute()
  const router = useRouter()
  const authStore = useAuthenticationStore()

  const showMenu = ref(false)
  const defaultSelectedKey = ref(
    menuItems.find(item => item.to.name === route.name)?.key || '1'
  )
  const selectedKey = ref<[string | undefined]>([defaultSelectedKey.value])

  const handleToggleMenu = () => {
    showMenu.value = !showMenu.value
  }

  const handleClick = (to: RouteLocationNamedRaw) => {
    showMenu.value = false
    router.push(to)
  }

  watch(
    () => route.name,
    () => {
      console.log('route.name', route.name)
      selectedKey.value = [
        menuItems.find(item => item.to.name === route.name)?.key || undefined
      ]
    }
  )
</script>

<template>
  <div :class="$style.header">
    <img :src="ZeepkistIcon" alt="" :class="[$style.logo]" />
    Zeepkist
  </div>

  <button :class="$style.toggleMenu" @click="handleToggleMenu">
    <icon-x v-if="showMenu" />
    <icon-menu-2 v-else />
  </button>

  <a-menu
    v-show="showMenu"
    v-model:selected-keys="selectedKey"
    :class="$style.menu"
    mode="vertical">
    <a-menu-item
      v-for="item in menuItems.slice(0, -2)"
      :key="item.key"
      :style="
        item.key === '1' && {
          marginTop: '4rem'
        }
      "
      @click="handleClick(item.to)">
      <router-link :to="item.to">
        {{ item.label }}
      </router-link>
    </a-menu-item>
    <a-menu-item key="6">
      <a
        href="https://toolkist.zeepki.st"
        target="_blank"
        rel="noopener noreferrer">
        toolkist
      </a>
    </a-menu-item>
    <a-menu-item v-if="!authStore.SteamId" key="7" :class="$style.steamLogin">
      <steam-open-id-login />
    </a-menu-item>
    <div v-if="authStore.SteamId">
      <a-menu-item
        v-for="item in menuItems.slice(-2)"
        :key="item.key"
        @click="handleClick(item.to)">
        <router-link :to="item.to">
          {{ item.label }}
        </router-link>
      </a-menu-item>
      <a-menu-item v-if="authStore.SteamId" @click="authStore.logout()"
        >logout</a-menu-item
      >
    </div>
  </a-menu>
</template>

<style module lang="less">
  .steamLogin {
    &:global(.arco-menu-item) {
      cursor: initial;

      &:hover {
        background: none;
      }
    }

    form {
      margin: 0 auto;
      padding: 1rem 0;
    }
  }

  .header,
  .toggleMenu,
  .menu {
    position: absolute;
  }

  .header {
    padding: 0.5rem 0 0.5rem 1rem;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.25rem;
    color: var(--color-text-1);
    font-weight: 700;
    z-index: 999;
    background: var(--color-bg-2);
  }

  .logo {
    max-height: 50px;
  }

  :global(.arco-menu-item) {
    display: flex;
    a {
      flex: 1;
    }
  }

  .toggleMenu {
    background: none;
    border: none;
    color: var(--color-text-1);
    top: 1.375rem;
    right: 1rem;
    z-index: 999;
    cursor: pointer;
  }

  .menu {
    :global(.arco-menu-item) {
      color: var(--color-text-1);

      &:not(:global(.arco-menu-selected)):hover {
        color: rgb(var(--primary-6));
      }

      &:global(.arco-menu-selected) {
        color: rgb(var(--primary-6));
      }

      a {
        color: inherit;
      }
    }
  }
</style>
