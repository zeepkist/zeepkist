<script setup lang="ts">
  import { useSeoMeta } from '@unhead/vue'

  import SuperLeagueLayout from '~/components/layouts/SuperLeagueLayout.vue'
  import LoadingIndicator from '~/components/LoadingIndicator.vue'
  import ContentSheet from '~/components/sheets/ContentSheet.vue'

  const title = 'Super League・Zeepkist Records'
  const description = `Check out past Super League tournament results on Zeepkist Records, the ultimate platform for Zeepkist racing fans!`
  const url = window.location.href.split('?')[0]

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    twitterTitle: title,
    twitterDescription: description
  })
</script>

<template>
  <content-sheet>
    <h1>Super League</h1>
    <suspense>
      <super-league-layout />
      <template #fallback>
        <loading-indicator />
      </template>
    </suspense>
  </content-sheet>
</template>
