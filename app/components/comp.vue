<template>
    <h1>Comps</h1>
    <mybutton></mybutton>
</template>
<script>
import mybutton from './button'
module.exports = {
    components: [mybutton],
    data: function() {
        return {
            greeting: 'Hello',
        }
    },
}
</script>
<style scoped>
button {
    font-size: 2em;
    text-align: center;
}
</style>
