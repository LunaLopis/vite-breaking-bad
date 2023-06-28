import { reactive } from 'vue';
export const store = reactive({
    ApiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?sort[number]=asc',
    pokemonList: [],
    searchText: '',
    loading: true,
    allTypes: [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ],
    typeValue: '',

})