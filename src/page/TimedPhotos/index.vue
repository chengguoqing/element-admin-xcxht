<!--定时照片-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-date-picker v-model="fdsdtty" type="datetimerange" placeholder="选择日期时间" class="w100"> </el-date-picker>
            </el-col>
            <el-col :span="2">
                <el-button type="primary">搜索</el-button>
            </el-col>

            <el-col :span="6">
                <el-input placeholder="输入视频名称"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary">生成延时视频</el-button>
            </el-col>
        </el-row>



        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column label="日期" width="120" align="center">
                <template slot-scope="scope">
                    2020.1.1
                </template>
            </el-table-column>
            <el-table-column label="当日的图片">
                <template slot-scope="scope">
                    <div v-for="sd in 20" class="sdfdfstyt">
                        <img src="http://iph.href.lu/50x50" class="sdfdstty">
                        <p>
                            <el-checkbox label="选中" key="0"></el-checkbox>
                        </p>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div class="tr mt40">
            <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper,slot" :total="400">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                fdsdtty: '',
                tableData: [1, 2, 3, 4, 5, 6, 7]
            }
        },
        components: {},
        methods: {},
        mounted() {}
    }

</script>
<style lang='scss' scoped>
    .sdfdstty {
        width: 50px;
        height: 50px;
    }

    .sdfdfstyt {
        display: inline-block;
        margin-left: 5px;
        margin-right: 5px;
    }

</style>
