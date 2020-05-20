<!--咨询管理-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入ID或资讯主题" v-model="informationSubject"></el-input>
            </el-col>
            <el-col :span="3">
                <el-input placeholder="创建人姓名" v-model="informationCreator"></el-input>
            </el-col>
            <!--
            <el-col :span="3">
                <el-checkbox label="只搜推荐到首页的" key="0" class="fdgtyxxeer"></el-checkbox>
            </el-col>
-->
            <el-col :span="12">
                <el-button type="primary" @click="getinit">搜索</el-button>
                <router-link to="cxzx" class="ml20">
                    <el-button type="primary">创建咨询</el-button>
                </router-link>

            </el-col>
        </el-row>



        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column type="selection" width="55" align="center"> </el-table-column>
            <el-table-column prop="id" label="资讯ID" width="60" align="center"> </el-table-column>
            <el-table-column prop="informationSubject" label="资讯主题" align="center"> </el-table-column>
            <el-table-column prop="" label="资讯介绍" align="center">
                <template slot-scope="scope">
                    <div class="dianer fz12 sdfdstser" v-html="scope.row.informationDesc">

                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="informationCreator" label="创建人" width="80" align="center"> </el-table-column>
            <el-table-column prop="" label="创建时间" width="120" align="center">
                <template slot-scope="scope">
                    {{scope.row.informationCreationTime | timee}}
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <router-link :to="'zxxq?id='+scope.row.id" class="ls ml10 sz">查看 </router-link>
                    <router-link :to="'cxzx?id='+scope.row.id" class="ls ml10 sz"> 编辑</router-link>
                    <span class="ls ml10 sz" @click="xiazai(scope.row)">
                        <span v-if="scope.row.lowerFlag==0">上架</span>
                        <span v-else-if="scope.row.lowerFlag==1">下架</span>
                    </span>

                    <!--
                    <p>
                        <span class="ls sz">推荐到首页</span>
                    </p>
-->
                </template>
            </el-table-column>
            <el-table-column prop="lastOperaterId" label="最后操作人" align="center"> </el-table-column>
        </el-table>

        <div class="mt20 tr">
            <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper,slot" :total="total" @current-change="jjncdrt">
            </el-pagination>
            </el-pagination>
        </div>

    </div>
</template>
<script>
    import {
        dxtables
    } from '@/assets/js/base'
    export default {
        data() {
            return {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ],
                tableData: [],
                informationSubject: '', // 资讯主题	
                informationCreator: '', // 资讯创建人
                pageNum: 1 // 当前页

            }
        },
        mixins: [dxtables],
        components: {},
        methods: {
            opem(e) {
                open(e)
            },
            async getinit() {
                let sder = {}
                sder.informationSubject = this.informationSubject
                sder.informationCreator = this.informationCreator
                sder.pageNum = this.pageNum
                sder.pageSize = 10
                let res = await this.$api.consultiveManagement.getinformationList(sder)
                this.total = res.total
                this.tableData = res.data
            },
            async xiazai(sd) {
                let jhjhswe = {}
                jhjhswe.id = sd.id
                jhjhswe.lowerFlag = sd.lowerFlag == 0 ? 1 : 0
                let hhhde = await this.$api.consultiveManagement.xgmodInformation(jhjhswe)
                this.$message.success(hhhde.msg)
                this.getinit()
            }
        },
        mounted() {
            this.getinit()
        }
    }

</script>
<style>
    .sdfdstser img{
        display: none
    }
</style>
<style scoped>
    .fdgtyxxeer {
        position: relative;
        top: 8px;
    }

    .fdfgdtyyux {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-left: 5px;
        margin-right: 5px;
        cursor: pointer
    }

    .fdfgdtyyux img {
        width: 100%;
        height: 100%
    }

</style>
