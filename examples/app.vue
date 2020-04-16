<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class App extends Vue {

}
</script>

<style lang="less">
@import url("./styles/index.less");
</style>
