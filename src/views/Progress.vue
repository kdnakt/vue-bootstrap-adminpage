<template>
  <div class="about">
    <Logo />
    <h2>This is a progress page</h2>
  </div>

  <div>
    <h5>No label</h5>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>

    <h5>Value label</h5>
    <b-progress :value="value" :max="max" show-value class="mb-3" :striped="true"></b-progress>

    <h5>Progress label</h5>
    <b-progress :value="value" :max="max" show-progress class="mb-3"
      :striped="true" :animated="true"></b-progress>

    <h5>Value label with precision</h5>
    <b-progress :value="value" :max="max" :precision="2" show-value class="mb-3"></b-progress>

    <h5>Progress label with precision</h5>
    <b-progress :value="value" :max="max" :precision="2" show-progress class="mb-3"></b-progress>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import { BProgress } from 'bootstrap-vue-3';

@Options({
  components: {
    Logo,
    BProgress,
  },
})
export default class Progress extends Vue {
  value = 33.333333;

  max = 50;
}
</script>
