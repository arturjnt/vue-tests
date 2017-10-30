new Vue({
    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },

    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },

        attack() {
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits monster for ${damage}`
            });

            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
            this.checkWin();
        },

        specialAttack() {
            let damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits monster hard for ${damage}`
            });

            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
            this.checkWin();
        },

        heal() {
            this.playerHealth += 10;
            if (this.playerHealth >= 90) {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: `Player heals`
            });

            this.monsterAttacks();
        },

        giveUp() {
            this.gameIsRunning = false;
        },

        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        checkWin() {
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                this.gameIsRunning = false;
                return true;
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                this.gameIsRunning = false;
                return true;
            }
            return false;
        },
        monsterAttacks() {
            let damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits player for ${damage}`
            });
        }
    }
});