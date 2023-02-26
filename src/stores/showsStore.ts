import { defineStore } from 'pinia'
import getShows from '@/api/getShows'
import getShowsByWord from '@/api/getShowsByWord'
import { ShowDetailsType } from '@/utils/types'

export const showsStore = defineStore({
  id: 'shows',
  state: () => ({
    showItems: [] as ShowDetailsType[]
  }),
  getters: {
    object: (state) => state.showItems,
  },
  actions: {
    async searchAllShows() {
      this.showItems = await getShows();
      this.setArrayIndexes();
    },

    async searchByWord(queryWord: string) {
      const searchResult = await getShowsByWord(queryWord);
      let processedArray = [] as ShowDetailsType[];

      searchResult.forEach((item) => {
        processedArray.push(item.show);
      });

      this.showItems = processedArray;
      this.setArrayIndexes();
    },
    
    async setArrayIndexes(){
      this.showItems.forEach((item, index) => {
        item.arrayIndex = index;
      });
    }
  }
})