export const fruitMixin = {
    data() {
        return {
            text: 'Hello there!',
            fruits: ['apple', 'bananba', 'mango'],
            filterText: ''
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((el) => {
                return el.match(this.filterText);
            });
        }
    }
};