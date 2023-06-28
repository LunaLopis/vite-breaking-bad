
<script>
export default {
    props: {
        pokemoncard: Object
    },
    computed: {
        cardStyle() {
            return {
                backgroundColor: this.pokemoncard.color
            }
        }
    }
}
</script>


<template lang="">
    <div>
        <div class="card" :style="cardStyle">
            <img class="img-fluid mb-3" :src="pokemoncard.imageUrl" alt="">
                <div class="card-body text-width">
                    <h5 class="card-title title-width"> {{pokemoncard.name}}</h5>
                    <p class="card-text">                           
                        {{pokemoncard.type1}}
                    </p> 
                    <p>
                        {{pokemoncard.number}}
                    </p>  
                </div>
        </div>  
    </div>
</template>



<style lang="scss" scoped>
img {
    width: 100%;
    max-height: 130px;
    object-fit: contain;
    margin-top: 10px;

}

.text-width {
    font-size: small;
}

.title-width {
    font-size: medium;
}
</style>