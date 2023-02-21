<template>
  <v-col cols="12">
    <settings />
  </v-col>
</template>

<script lang="ts">
import Settings from "@/components/settings/Settings.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    Settings,    
  },
});
</script>