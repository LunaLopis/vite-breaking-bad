
<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppPokemon from './components/AppPokemon.vue';
import { store } from './store.js';
import AppSearchbar from './components/AppSearchbar.vue';
export default {
  components: {
    AppHeader,
    AppPokemon,
    AppSearchbar,
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    this.getPokemon()
  },
  methods: {
    getPokemon() {
      let myUrl = store.ApiUrl;
      console.log(store.searchText)
      if (store.searchText !== '') {
        myUrl += `&q[name]=${store.searchText}`
      }
      if (store.typeValue !== '') {
        if (store.searchText !== '') {
          myUrl += '&'
        }
        else {
          myUrl += '?'
        }


        myUrl += `&q[type1]=${store.typeValue} `
      }

      axios.get(myUrl).then((response) => {
        store.pokemonList = response.data.docs;
        store.loading = false
      });
    },
    searchPokemon() {
      console.log(store.searchText)
      this.getPokemon();
    }
  },

}
</script>


<template lang="">
  <div>
    <AppSearchbar @search="searchPokemon" />
   <AppHeader />
   <AppPokemon />
  </div>
</template>


<style lang="scss">
@use './styles/generals.scss' as *;
</style>
