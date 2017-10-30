<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>

                <button class="btn btn-primary" @click="submit">Submit</button>

                <hr>
                <input type="text" class="form-control" v-model="node">
                <button class="btn btn-primary" @click="fetchData">Get Date</button>
                <ul class="list-group" style="margin-top: 15px;">
                    <li class="list-group-item" v-for="user in users">{{user.username}} - {{user.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: ''
            }
        },
        methods: {
            submit() {
                /*console.log(this.user);
                 this.$http.post('data.json', this.user)
                 .then(response => {
                 console.log(response);
                 }, err => {
                 console.log(err);
                 });*/
                this.resource.saveAlt(this.user);
            },
            fetchData() {
                /*this.$http.get('data.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.users = data;
                    });*/
                this.resource.getData({node: this.node})
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.users = data;
                    });
            }
        },
        created() {
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>

</style>