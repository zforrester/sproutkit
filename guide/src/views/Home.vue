<template>
    <div class="home">
        <div class="content">
            Content of site
            <MDXDocument></MDXDocument>
        </div>
        <!-- <div class="modal">
            <div class="overlay"></div>
            <div class="dialogue">Window</div>
        </div> -->
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <MyComponent /> -->
    </div>
</template>

<script>
// @ is an alias to /sr
// import component from '@/components/MyComponent/index.vue'
import MDXDocument from './test.mdx'

export default {
    name: 'Home',
    components: {
        MDXDocument,
        // MyComponent,
    },
}
</script>
