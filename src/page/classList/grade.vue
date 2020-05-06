<!--成绩列表-->
<template>
    <div class="app-container">
         <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入发布人"></el-input>
            </el-col>
            <el-col :span="4">
                <el-input placeholder="标题名称"></el-input>
            </el-col>
            <el-col :span="12">
                <el-button type="primary">搜索</el-button>
               <router-link to="/classList/sccj">
                <el-button type="primary">上传成绩</el-button>
            </router-link>
            </el-col>
        </el-row>
       <cjgl></cjgl>
    </div>
</template>
<script>
    import cjgl from './components/cjgl'
    export default {
        data() {
            return {
                activeName: '1'
            }
        },
        components: {
            cjgl
        },
        methods: {},
        mounted() {}
    }

</script>
<style lang='scss' scoped>

</style>
