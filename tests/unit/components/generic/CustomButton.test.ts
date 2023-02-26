import { mount } from '@vue/test-utils';
import CustomButton from '@/components/generic/CustomButton.vue';

describe('CustomButton', () => {
    test('It should render a button with title "test label"', () => {
        const wrapper = mount(CustomButton, {
            props: {
                title: "test label",
                positiveButton: false
            }
        });
        
        expect(wrapper.text()).toBe("test label");
        expect(wrapper.html()).toMatchSnapshot();
    });

    test("It should use the bg-tvm-green class and match the snapshot", () => {
        const wrapper = mount(CustomButton, {
          props: {
            title: "test label",
            positiveButton: true
          },
        });
        const button = wrapper.find("button");
        
        expect(button.classes("bg-tvm-green")).toBe(true);
        expect(button.classes("text-white")).toBe(true);
        expect(wrapper.html()).toMatchSnapshot();
    });

    test("It should use the bg-stone-900 class and match the snaphshot", () => {
        const wrapper = mount(CustomButton, {
          props: {
            title: "test label",
            positiveButton: false
          },
        });
        const button = wrapper.find("button");
        expect(button.classes("bg-stone-900")).toBe(true);
        expect(button.classes("text-white")).toBe(true);
        expect(wrapper.html()).toMatchSnapshot();
    });
});