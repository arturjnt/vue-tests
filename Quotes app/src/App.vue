<template>
    <div class="container">
        <skHeader :quoteCount="quotes.length" :maxQuotes="maxQuotes"></skHeader>
        <NewQuote @quoteAdded="newQuote"></NewQuote>
        <QuoteGrid :quotes="quotes" @deleteQuote="deleteQuote"></QuoteGrid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: click to delete quote</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import skHeader from './components/Header.vue';

    export default {
        data: () => {
            return {
                maxQuotes: 10,
                quotes: [
                    'Just a random quote.'
                ]
            };
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= 10) {
                    // please delete quotes first
                } else {
                    this.quotes.push(quote);
                }
            },
            deleteQuote(i) {
                this.quotes.splice(i, 1);
            }
        },
        components: {
            QuoteGrid,
            NewQuote,
            skHeader
        }
    }
</script>

<style>

</style>