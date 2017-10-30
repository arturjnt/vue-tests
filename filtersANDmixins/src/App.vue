<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <p>{{ text | toUppercase }}</p>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <hr>
                <List></List>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import {
        fruitMixin
    } from './fruitMixin.js';

    export default {
        data() {
            return {
                text: 'Hello there!'
            };
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        mixins: [fruitMixin],
        components: {
            List
        }
    }
</script>

<style>

</style>