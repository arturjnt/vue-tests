<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'Quote'">Quote</button>
                <button @click="selectedComponent = 'Author'">Author</button>
                <button @click="selectedComponent = 'New'">New</button>
                <hr>
                <keep-alive>
                    <components :is="selectedComponent">
                        <p>DefaultContent</p>
                    </components>
                </keep-alive>
                <!--<Quote>
                    <h1 slot="title">{{title}}</h1>
                    <p>what a wonderful quote!</p>
                </Quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: () => {
            return {
                title: 'the title',
                selectedComponent: 'Quote'
            };
        },
        components: {
            Quote,
            Author,
            New
        }
    }
</script>

<style>
    h1 {
        color: blue;
    }
</style>