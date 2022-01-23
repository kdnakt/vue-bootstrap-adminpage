<template>
  <div class="about">
    <Logo />
    <h1>This is an about page</h1>
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
export default class About extends Vue {}
</script>
