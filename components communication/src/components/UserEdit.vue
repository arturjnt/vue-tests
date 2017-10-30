<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editAge">Edit age</button>
        <p>Age: {{age}}</p>
    </div>
</template>

<script>
    import {
        eventBus
    } from '../main';

    export default {
        props: ['age'],
        methods: {
            editAge() {
                this.age = 30;
                // this.$emit('ageChanged', this.age);
                // eventBus.$emit('ageChanged', this.age);
                eventBus.changeAge(this.age);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>