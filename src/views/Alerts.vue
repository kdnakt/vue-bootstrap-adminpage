<template>
  <div class="about">
    <Logo />
    <h2>This is a alerts page</h2>
  </div>

  <div class="alerts">
    <b-alert show>Default Alert</b-alert>
    <b-alert variant="success" show>Success Alert</b-alert>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import { BAlert } from 'bootstrap-vue-3';

@Options({
  components: {
    Logo,
    BAlert,
  },
})
export default class Alerts extends Vue {}
</script>

<style scoped>
.alerts {
  padding: 20%;
}
</style>
