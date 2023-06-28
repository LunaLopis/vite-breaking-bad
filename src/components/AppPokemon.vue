
<script>
import { store } from '../store.js'
import AppCards from './AppCards.vue';
import AppLoader from './AppLoader.vue'
export default {
    components: {
        AppCards,
        AppLoader
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col">                
                <div v-if="store.loading===false" class="card-container d-flex flex-wrap justify-content-center" >                
                    <div v-for="(pokemon, index) in store.pokemonList" :key=index class="col-12 col-md-6 col-lg-4 col-xl-2">
                       <AppCards :pokemoncard="pokemon" />   
                    </div>                   
                </div>
                <AppLoader v-else/>
            </div>
        </div>        
    </div>
</template>


<style lang="scss" scoped> .container {
     display: flex;
     justify-content: center;
 }

 .card-container {
     display: grid;
     grid-template-columns: repeat(5, 1fr);
     grid-gap: 1rem;
     background-color: rgb(237, 181, 30);
     padding: 50px 10px;
     text-align: center;
 }

 .card-item {
     width: 100%;
 }
</style>