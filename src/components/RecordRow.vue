<script setup lang="ts">
  import type { LevelRecord } from '@zeepkist/gtr-api'
  import { RouterLink } from 'vue-router'

  import UserBadge from '@/components/UserBadge.vue'
  import { formatDate, formatRelativeDate, formatResultTime } from '@/utils'

  const {
    record,
    rank,
    showUser = false,
    showBadges = false,
    hideTrackInfo = false
  } = defineProps<{
    record: LevelRecord
    rank?: number
    showUser?: boolean
    showBadges?: boolean
    hideTrackInfo?: boolean
  }>()
</script>

<template>
  <div
    class="record"
    :class="{
      'has-no-track': hideTrackInfo,
      'has-rank': rank
    }">
    <div v-if="rank" class="rank">{{ rank }}</div>
    <img
      v-if="!hideTrackInfo"
      :src="record.level.thumbnailUrl"
      :alt="`Thumbnail of ${record.level.name}`" />
    <div v-if="!hideTrackInfo" class="author">
      <router-link :to="{ name: 'level', params: { id: record.level.id } }">
        {{ record.level.name }}
      </router-link>
      <div class="subtext">
        By <user-badge :username="record.level.author" />
      </div>
    </div>
    <div class="author">
      <router-link
        v-if="showUser"
        :to="{ name: 'user', params: { steamId: record.user.steamId } }">
        <user-badge :username="record.user.steamName" />
      </router-link>
      <div class="subtext" :title="formatDate(record.dateCreated)">
        {{ formatRelativeDate(record.dateCreated) }}
      </div>
    </div>
    <div>
      <div>{{ formatResultTime(record.time) }}</div>
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
    </div>
    <div v-if="false" class="actions">
      <button disabled>View Ghost</button>
      <button disabled>Compare</button>
    </div>
  </div>
</template>

<style scoped lang="less">
  .record {
    display: grid;
    grid-template-columns: 80px 2fr 1fr 100px;
    grid-template-rows: 50px;
    gap: 1rem;
    align-items: center;
    padding-left: 0.25rem;

    &.has-no-track:not(.has-rank) {
      grid-template-columns: 2fr 100px;
    }

    &.has-no-track&.has-rank {
      grid-template-columns: 3ch 2fr 100px;
    }

    &:nth-of-type(even) {
      background: var(--color-background-mute);
    }

    img {
      max-height: 50px;
      overflow: hidden;
    }

    .record-badges {
      display: flex;
      gap: 0.25rem;
      span {
        border: 1px solid var(--color-button-active);
        border-radius: var(--border-radius);
        padding: 0 0.25rem;
        font-size: 0.75rem;

        &.wr {
          font-weight: 600;
          color: var(--color-text-inverted);
          background: var(--color-button-hover);
        }

        &.any {
          border: 1px solid var(--color-disabled);
        }
      }
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
        border-radius: var(--border-radius);
        background: var(--color-button-hover);
        color: var(--color-text-inverted);
        cursor: pointer;

        &:disabled {
          background: var(--color-background-mute);
          color: var(--color-text-mute);
          cursor: not-allowed;
        }

        &:hover:not(:disabled) {
          background: var(--color-hover);
        }
      }
    }

    .rank {
      text-align: right;
    }

    .subtext {
      font-weight: 300;
      font-size: 0.75rem;
    }
  }
</style>
