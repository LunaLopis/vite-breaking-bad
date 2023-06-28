
<script>
import { store } from '../store.js'
export default {
    emits: ['search'],
    data() {
        return {
            store
        }
    },
    methods: {
        sendSearch() {
            console.log(store.searchText);
            this.$emit('search');
        }
    },

}
</script>


<template lang="">
    <div class="container">
        <div class="row">
             <div class="col-12">
                 <div class="d-flex">
                    <input type="text" v-model="store.searchText" class="form-control" placeholder="search pokemon" v-on:keyup.enter="sendSearch()">
                 </div>
                 <div>
            <select class="form-select" aria-label="Default select example" v-model="store.typeValue" @change="sendSearch()">
                <option value="">All Types</option>
                <option v-for="(type) in store.allTypes" :value="type"> {{type}}</option>
            </select>
        </div>
             </div>
        </div>
    </div>

    <div>

    </div>
</template>

<style lang="scss" scoped></style>