<template>
    <div class="row">
        <form>
            <div>
                <label>Quote</label>
                <textarea class="form-control" rows="3" v-model="quote" @keydown.enter.prevent="createNew"></textarea>
            </div>
            <div>
                <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                quote: ''
            };
        },
        methods: {
            createNew() {
                if (this.quote != undefined && this.quote.trim() != '') {
                    this.$emit('quoteAdded', this.quote);
                    this.quote = '';
                }
            }
        }
    }
</script>

<style>

</style>