<script setup lang="ts">
  import type { LevelRecord } from '@zeepkist/gtr-api'

  import RecordRow from '~/components/RecordRow.vue'

  const {
    header = 'Records',
    records,
    rankOffset,
    showUser,
    showBadges,
    showPoints,
    hideTrackInfo
  } = defineProps<{
    header: string
    records: LevelRecord[]
    rankOffset?: number
    showUser?: boolean
    showBadges?: boolean
    showPoints?: boolean
    hideTrackInfo?: boolean
  }>()
</script>

<template>
  <div class="records">
    <h2>{{ header }}</h2>
    <record-row
      v-for="(record, index) in records"
      :key="record.screenshotUrl"
      :record="record"
      :ghosts="
        hideTrackInfo
          ? [
              record.ghostUrl,
              ...records
                .map(r => r.ghostUrl)
                .filter(url => url !== record.ghostUrl)
            ]
          : [record.ghostUrl]
      "
      :rank="
        typeof rankOffset === 'number' ? rankOffset + index + 1 : undefined
      "
      :show-user="showUser"
      :show-badges="showBadges"
      :show-points="showPoints"
      :hide-track-info="hideTrackInfo" />
    <p v-if="records.length === 0">
      No records of this type have been recorded yet
    </p>
  </div>
</template>

<style scoped lang="less">
  .records {
    display: flex;
    flex-direction: column;

    h2 {
      margin: 0.5rem 0 1rem;
    }
  }
</style>
