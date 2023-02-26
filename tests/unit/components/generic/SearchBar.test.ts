import { mount } from '@vue/test-utils';
import SearchBar from '@/components/generic/SearchBar.vue';
import { describe, expect, test, vi } from 'vitest';

describe('SearchBar', () => {
    test('It should render the generic search bar and match the snapshot', () => {
        const wrapper = mount(SearchBar);
        expect(wrapper.html()).toMatchSnapshot();
    });
});