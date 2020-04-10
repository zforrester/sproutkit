<template>
    <button type="button" name="button">My Button</button>
</template>
<script>
module.exports = {
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
