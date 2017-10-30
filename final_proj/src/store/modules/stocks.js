import stocks from '../../data/stocks';

// This is like private info
const state = {
    stocks: []
};

// The real sets that mess the data
const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state){
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
};

// Used for async stuff - but can be used for all the sets, to maintain consistency
const actions = {
    buyStock({commit}, order) {
        // Arguably, this should be in the same store module as the BUY_STOCK mutation, BUT...
        // ...it doesn't have to be
        commit('BUY_STOCK', order);
    },
    initStocks({commit}) {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks({commit}) {
        commit('RND_STOCKS');
    }
};

// These are the public gets
const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
