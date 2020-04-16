<template>
    <div class="home">
        <div class="content">
            Content of site
            <MDXDocument></MDXDocument>
            <!-- <p>metaInfo: {{ metaInfo.name }}</p> -->
            <!-- <TableOfContents :sectionList="sections"></TableOfContents> -->
        </div>
    </div>
</template>

<script>
// @ is an alias to /sr
// import component from '@/components/MyComponent/index.vue'
// import MDXDocument, { metaInfo } from './test.mdx'
import MDXDocument from './test.mdx'
// import TableOfContents from './guide/core/contents'
// console.log(sections)
// console.log(metaInfo)

export default {
    name: 'Home',

    components: {
        MDXDocument,
        // TableOfContents,
        // contents,
        // MyComponent,
    },
    computed: {
        // metaInfo() {
        //     return metaInfo
        // },
        // sections() {
        //     return sections
        // },
    },
}
</script>
