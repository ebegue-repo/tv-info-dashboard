<template>
  <div class="grid grid-cols-1 md:grid-cols-3 flex-grow">
    <shows-table @searchEvent="searchEventHandler" @clickOnRowEvent="getShowId" :headers="showsTableHeaders"  :shows="showsStoreInstance.showItems" class="md:block col-span-1 md:col-span-2" />    
    <show-details v-if="showsStoreInstance.showItems" :details=showsStoreInstance.showItems[arrayIndex] class="md:block col-span-1 md:col-span-1 bg-gray-50" />
  </div>
</template>

<script>
  import ShowsTable from '../components/shows/ShowsTable.vue';
  import ShowDetails from '../components/shows/ShowDetails.vue';
  import { showsStore } from '@/stores/showsStore';

  export default {
      name: 'Shows',
      components: {
        ShowsTable,
        ShowDetails
      },
      data: function () {
        return {
          arrayIndex: 0,
          showsStoreInstance: null,
          showsTableHeaders: ["Image", "Name", "Genre", "Rating"]
        }
      },
      beforeMount() {
        this.showsStoreInstance = showsStore();
        this.showsStoreInstance.searchAllShows();
      },
      methods: {
        getShowId: function(arrayIndex){
          this.arrayIndex = arrayIndex;
        },

        searchEventHandler: function(searchInput) {
          if(searchInput.length > 0) {
            this.showsStoreInstance.searchByWord(searchInput);
          }else{
            this.showsStoreInstance.searchAllShows();
          }
        }
      }  
    }
</script>