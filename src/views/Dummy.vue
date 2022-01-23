<template>
  <div class="about">
    <Logo />
    <h2>This is a dummy page</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';

@Options({
  components: {
    Logo,
  },
})
export default class Dummy extends Vue {}
</script>
