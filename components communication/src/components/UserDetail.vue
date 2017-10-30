<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{switchName()}}</p>
        <p>Age: {{age}}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    import {
        eventBus
    } from '../main';

    export default {
        props: {
            name: {
                type: String,
                default: 'Max'
            },
            resetFn: Function,
            age: Number
        },
        methods: {
            switchName() {
                return this.name.split('').reverse().join('');
            },
            resetName() {
                this.resetFn();
            }
        },
        created() {
            eventBus.$on('ageChanged', (age) => {
                this.age = age
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>