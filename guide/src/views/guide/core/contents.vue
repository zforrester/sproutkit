<template lang="html">
    <ul>
        <p>{{ sectionList }}</p>
        <li v-for="item in sectionList" :key="item.id">
            <span>{{ item.name }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['sectionList'],
    // computed: {
    //     sections() {
    //         return JSON.stringify(this.sectionList)
    //     },
    // },
}
</script>

<style lang="scss" scoped></style>
