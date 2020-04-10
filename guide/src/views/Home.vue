<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <MyButton somethingelse="also" iconName="this" buttonLabel=" cool" />
    </div>
</template>

<script>
// @ is an alias to /sr
import MyButton from '@/components/button/index.vue'

export default {
    name: 'Home',
    components: {
        MyButton,
    },
}
</script>
