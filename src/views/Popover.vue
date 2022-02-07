<template>
  <div class="about">
    <Logo />
    <h2>This is a popover page</h2>
  </div>
  <div class="text-center my-3">
    <b-button v-b-popover.hover.top="'I am popover directive content!'" title="Popover Title">
      Hover Me
    </b-button>

    <b-button id="popover-target-1">
      Hover Me
    </b-button>
    <b-popover target="popover-target-1" triggers="hover" placement="top">
      <template #title>Popover Title</template>
      I am popover <b>component</b> content!
    </b-popover>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import { BPopover } from 'bootstrap-vue-3';

@Options({
  components: {
    Logo,
    BPopover,
  },
})
export default class Popover extends Vue {}
</script>
