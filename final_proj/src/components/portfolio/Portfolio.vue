<template>
    <div>
        <div v-if="stocks.length > 0">
            <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
        </div>
        <div v-else>
            <h6>No stocks bought!</h6>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>