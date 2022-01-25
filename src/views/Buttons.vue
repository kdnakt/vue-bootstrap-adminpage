<template>
  <div class="about">
    <Logo />
    <h2>This is a buttons page</h2>
    <div>
      <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
        <b-button-group class="mx-1">
          <b-button v-on:click="inc">New</b-button>
          <b-button>Edit</b-button>
          <b-button>Undo</b-button>
        </b-button-group>
        <b-dropdown class="mx-1" right text="menu">
          <b-dropdown-item>Item 1</b-dropdown-item>
          <b-dropdown-item>Item 2</b-dropdown-item>
          <b-dropdown-item>Item 3</b-dropdown-item>
        </b-dropdown>
        <b-button-group class="mx-1">
          <b-button>Save</b-button>
          <b-button>Cancel</b-button>
        </b-button-group>
      </b-button-toolbar>
    </div>
  </div>
  <hr />
  <div><span>You clicked `New` {{clickCount}} times.</span></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import { BButtonToolbar } from 'bootstrap-vue-3';

@Options({
  components: {
    Logo,
    BButtonToolbar,
  },
})
export default class Buttons extends Vue {
  clickCount = 0;

  inc() {
    this.clickCount += 1;
  }
}
</script>
