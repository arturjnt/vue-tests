const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(el => el.id === stockId);

        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }

        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(el => el.id === stockId);

        if (record.quantity > quantity) {
            record.quantity -= quantity;
            state.funds += stockPrice * quantity;
        } else {
            state.funds += stockPrice * record.quantity;
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};


const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            // TODO: How the hell is he gonna send the "getters" here
            // TODO: - or is it just a global thing inside the store?
            const record = getters.stocks.find(el => el.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
        });
    },
    funds(state) {
        return state.funds;
    }
};

export default {state, mutations, actions, getters};
