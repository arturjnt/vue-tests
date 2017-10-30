<template>
    <div>
        <h3>
            new quote
        </h3>
        <button @click="counter++">c++</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                counter: 0
            };
        },
        deactivated() {
            console.log('deactivated');
        },
        activated() {
            console.log('activated');
        }
    }
</script>

<style scoped>

</style>