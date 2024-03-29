<script setup lang="ts">
  import { IconGhostFilled } from '@tabler/icons-vue'
  import { useQueryClient } from '@tanstack/vue-query'
  import type { LevelRecord } from '@zeepkist/gtr-api'
  import { RouterLink } from 'vue-router'

  import GhostModal from '~/components/modals/GhostModal.vue'
  import UserBadge from '~/components/UserBadge.vue'
  import {
    calculateRecordPoints,
    formatDate,
    formatRelativeDate,
    formatResultTime
  } from '~/utils'

  const {
    record,
    ghosts = [],
    rank,
    showUser = false,
    showBadges = false,
    showPoints = false,
    hideTrackInfo = false
  } = defineProps<{
    record: LevelRecord
    ghosts?: string[]
    rank?: number
    showUser?: boolean
    showBadges?: boolean
    showPoints?: boolean
    hideTrackInfo?: boolean
  }>()

  const queryClient = useQueryClient()

  if (showUser) {
    queryClient.setQueryData(['user', record.user.steamId], record.user)
  }
</script>

<template>
  <div
    class="record"
    :class="{
      'has-no-track': hideTrackInfo,
      'has-rank': rank
    }">
    <div v-if="rank" class="rank">{{ rank }}</div>
    <router-link
      v-if="!hideTrackInfo"
      :to="{ name: 'level', params: { id: record.level.id } }"
      @click.stop>
      <img
        :src="record.level.thumbnailUrl"
        :alt="`Thumbnail of ${record.level.name}`" />
    </router-link>
    <div v-if="!hideTrackInfo" class="author">
      <router-link
        :to="{ name: 'level', params: { id: record.level.id } }"
        @click.stop>
        {{ record.level.name }}
      </router-link>
      <div class="subtext">
        By <user-badge :username="record.level.author" />
      </div>
    </div>
    <div class="author">
      <router-link
        v-if="showUser"
        :to="{ name: 'user', params: { steamId: record.user.steamId } }"
        @click.stop>
        <user-badge :username="record.user.steamName" />
      </router-link>
      <div class="subtext" :title="formatDate(record.dateCreated)">
        {{ formatRelativeDate(record.dateCreated) }}
      </div>
    </div>
    <div>
      <div class="right" :title="`${record.time} seconds`">{{ formatResultTime(record.time) }}</div>
      <div
        v-if="
          showBadges &&
          (record.isBest || record.isWorldRecord || !record.isValid)
        "
        class="record-badges">
        <span v-if="record.isWorldRecord" class="wr" title="World Record"
          >WR</span
        >
        <span v-if="record.isBest" class="pb" title="Personal Best">PB</span>
        <span v-if="!record.isValid" class="any" title="Any Percentage"
          >any%</span
        >
      </div>
      <div v-if="showPoints" class="right subtext">
        {{ calculateRecordPoints(rank ?? 1, record.level.points) }} ➤
      </div>
    </div>
    <div class="actions">
      <ghost-modal :ghost-urls="ghosts">
        <icon-ghost-filled />
      </ghost-modal>
    </div>
  </div>
</template>

<style scoped lang="less">
  .record {
    display: grid;
    grid-template-columns: 80px 2fr 1fr 100px 20px;
    grid-template-rows: 50px;
    gap: 1rem;
    align-items: center;
    padding: 0.25rem 1rem;
    margin: 0 -1rem;

    &.has-no-track:not(.has-rank) {
      grid-template-columns: 2fr 100px 20px;
    }

    &.has-no-track&.has-rank {
      grid-template-columns: 3ch 2fr 100px 20px;
    }

    &:nth-of-type(even) {
      background: var(--color-bg-1);
    }

    img {
      max-height: 45px;
      width: 100%;
      border-radius: 4px;
      object-fit: cover;
      overflow: hidden;
    }

    .record-badges {
      display: flex;
      justify-content: flex-end;
      gap: 0.25rem;
      span {
        color: rgb(var(--success-6));
        border-radius: var(--border-radius-medium);
        padding: 0 0.25rem;
        font-size: 0.75rem;

        &.wr {
          color: rgb(var(--primary-6));
        }

        &.any {
          color: rgb(var(--danger-6));
        }
      }
    }

    .right {
      text-align: right;
    }

    .author {
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      button {
        border: none;
        border-radius: var(--border-radius-medium);
        color: var(--color-bg-1);
        background: rgb(var(--primary-6));
        cursor: pointer;

        &:disabled {
          background: var(--color-bg-2);
          color: var(--color-text-4);
          cursor: not-allowed;
        }

        &:hover:not(:disabled) {
          background: var(--color-hover);
        }
      }
    }

    .rank {
      text-align: center;
    }

    .subtext {
      font-weight: 300;
      font-size: 0.75rem;
    }
  }
</style>
