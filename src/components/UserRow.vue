<script setup lang="ts">
  import type { User } from '@zeepkist/gtr-api'
  import { RouterLink } from 'vue-router'

  import UserBadge from '~/components/UserBadge.vue'
  import { useAuthenticationStore } from '~/stores/authentication'

  const { user, rank, score, worldRecords } = defineProps<{
    user: User
    rank: number
    score: number
    worldRecords: number
  }>()

  const authenticationStore = useAuthenticationStore()
</script>

<template>
  <div
    :class="[
      $style.user,
      { [$style.isCurrentUser]: user.steamId === authenticationStore.SteamId }
    ]">
    <div v-if="rank" :class="$style.rank">{{ rank }}</div>
    <div>
      <router-link :to="{ name: 'user', params: { steamId: user.steamId } }">
        <user-badge :username="user.steamName" />
      </router-link>
    </div>
    <div :class="$style.records">
      <strong>{{ worldRecords }}</strong>
      <small>WRs</small>
    </div>
    <div :class="$style.score">
      <strong>{{ Math.floor(score) }}</strong>
      <small>➤</small>
    </div>
  </div>
</template>

<style module lang="less">
  .user {
    display: grid;
    grid-template-columns: 3ch repeat(3, 1fr);
    grid-auto-rows: 50px;
    gap: 1rem;
    align-items: center;
    padding: 0.25rem 1.25rem 0.25rem 0;

    &:nth-of-type(even) {
      background: var(--color-bg-1);
    }

    &.isCurrentUser {
      border: 1px solid rgb(var(--link-6));
      border-radius: var(--border-radius-large);
    }

    .rank {
      text-align: right;
      font-family: monospace;
    }

    strong {
      font-weight: 600;
    }

    .records,
    .score {
      text-align: right;

      small {
        padding-left: 0.5ch;
      }
    }
  }
</style>
