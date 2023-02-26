import { mount } from '@vue/test-utils';
import Footer from "@/components/generic/Footer.vue";

describe('FooterVue', () => {
    it('It should render a footer that includes the current year, copyright symbol and the TV MAZE name', () => {

        const wrapper = mount(Footer);
        expect(wrapper.text()).toMatch("\u00A9 " + new Date().getFullYear() + " TV MAZE");
        expect(wrapper.html()).toMatchSnapshot();
    });
});