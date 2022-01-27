<template>
  <div class="about">
    <Logo />
    <h2>This is a tabs page</h2>
  </div>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </div>
  <div>
    <b-tabs content-class="mt-3" fill>
      <b-tab title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </div>
  <div>
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
        <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
        <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import { BTabs } from 'bootstrap-vue-3';

@Options({
  components: {
    Logo,
    BTabs,
  },
})
export default class Tabs extends Vue {}
</script>
