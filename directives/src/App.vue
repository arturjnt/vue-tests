<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                    <p v-highlight:background.delayed="'red'">Text</p>
                    <p v-local-highlight:background.delayed.blink="{mainColor:'blue', secondColor:'green', delay:500}">Text</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    let delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currenColor = mainColor;

                        setTimeout(() => {
                            setInterval(() => {
                                currenColor = (currenColor === secondColor) ? mainColor : secondColor;
                                if (binding.arg === 'background') {
                                    el.style.backgroundColor = currenColor;
                                } else {
                                    el.style.color = currenColor;
                                }
                            }, binding.value.delay);
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg === 'background') {
                                el.style.backgroundColor = binding.value.mainColor;
                            } else {
                                el.style.color = binding.value.mainColor;
                            }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>

</style>