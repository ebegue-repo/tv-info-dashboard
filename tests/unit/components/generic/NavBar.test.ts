import { mount } from '@vue/test-utils';
import NavBar from '@/components/generic/NavBar.vue';
import { describe, expect, test, vi } from 'vitest';

describe('NavBar', () => {
    test('It should render the generic navigation bar with title "test label" and match the snapshot', () => {

        const wrapper = mount(NavBar, {
            props: {
                navigation: ["test1", "test2", "test3"]
            }
        });
        
        expect(wrapper.html()).toMatchSnapshot();
    });
});