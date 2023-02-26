<template>
    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <search-bar @searchEvent="searchEventHandler" class="mt-7"/>
        <div class="px-4 py-5 sm:p-6">
            <div class="flow-root">
                <div class="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table v-if="shows.length > 0" class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th v-for="item in headers" scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">{{ item }}</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white cursor-pointer">
                        <tr v-for="show in shows.slice(0,6)" :key="show.id" @click="clickOnRow(show.arrayIndex)">
                            <td class="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                            <img v-if="show.image" class="h-15 w-10 rounded" :src="show.image.original" alt="" />
                            <img v-else class="h-15 w-10 rounded" src="/default.jpg" alt="" />
                            </td>
                            <td class="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                            <div class="text-gray-500">{{ show.name }}</div>
                            </td>
                            <td class="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                            <div class="text-gray-500">{{ showGenres(show.genres) }}</div>
                            </td>
                            <td class="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                            <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{{ show.rating.average }}</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <h1 v-else class="font-bold tracking-tight sm:text-xl lg:text-2xl text-center">No results for this search</h1>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import SearchBar from '../generic/SearchBar.vue';

    export default {
      name: 'GenericTable',
      components: {
        SearchBar
      },
      props: {
        headers: {
          type: Array,
          required: true
        },
        shows: {
          type: Array,
          required: true
        }
      },
      methods: {
        showGenres: function(genres: String[]) {
          let finalString = "";

          genres.forEach(item => {
            finalString += item + ", ";
          });

          return finalString.slice(0, -2);
        },

        clickOnRow: function(arrayIndex: number) {
          this.$emit('clickOnRowEvent', arrayIndex);
        },

        searchEventHandler: function(searchInput: string) {
          this.$emit('searchEvent', searchInput);
        }
      }
    }
</script>