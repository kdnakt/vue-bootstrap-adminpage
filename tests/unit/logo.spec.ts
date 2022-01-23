import { shallowMount } from '@vue/test-utils';
import Logo from '@/components/Logo.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Dummy from '@/views/Dummy.vue';

describe('views renders logo', () => {
  it('Home.vue', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.findComponent(Logo).isVisible()).toBeTruthy();
  });
  it('Dummy.vue', () => {
    const wrapper = shallowMount(Dummy);
    expect(wrapper.findComponent(Logo).isVisible()).toBeTruthy();
  });
  it('About.vue', () => {
    const wrapper = shallowMount(About);
    expect(wrapper.findComponent(Logo).isVisible()).toBeTruthy();
  });
});
