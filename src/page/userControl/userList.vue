<!--总的用户列表-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入ID或姓名" v-model='userLabel'></el-input>
            </el-col>
            <el-col :span="3">
                <el-input placeholder="学校名" v-model="schoolName"></el-input>
            </el-col>
            <el-col :span="3">
                <el-input placeholder="班级名" v-model="className"></el-input>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="getinit">搜索</el-button>
            </el-col>
        </el-row>


        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column label="ID" width="120" align="center">
                <template slot-scope="scope">
                    100
                </template>
            </el-table-column>
            <el-table-column label="昵称" align="center">
                <template slot-scope="scope">
                    微信昵称
                </template>
            </el-table-column>
            <el-table-column label="手机号" align="center">
                <template slot-scope="scope">
                    13612345678
                </template>
            </el-table-column>
            <el-table-column label="身份" align="center">
                <template slot-scope="scope">
                    学生/老师/~
                </template>
            </el-table-column>
            <el-table-column label="所属班级" align="center">
                <template slot-scope="scope">
                    <span class="ls">石景山小学1年级1班</span>
                </template>
            </el-table-column>
            <el-table-column label="用户图像" align="center">
                <template slot-scope="scope">
                    <span class="ls sz" @click="dialogVisible=true">查看</span>
                </template>
            </el-table-column>
            <el-table-column label="用户背景图片" align="center">
                <template slot-scope="scope">
                    <span class="ls sz" @click="dialogVisible=true">查看</span>
                </template>
            </el-table-column>
            <el-table-column label="加入时间" align="center">
                <template slot-scope="scope">
                    2020-4-28 15:15
                </template>
            </el-table-column>

            <el-table-column label="加入来源" align="center">
                <template slot-scope="scope">
                    邀请
                </template>
            </el-table-column>

            <el-table-column label="最后登录时间" align="center">
                <template slot-scope="scope">
                    2020-4-28 15:15
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <span class="ls">禁止登录</span> <span class="ls ml10">设为管理员</span>
                </template>
            </el-table-column>

        </el-table>
        <div class="mt40 tr">
            <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper,slot" :total="400">
            </el-pagination>
        </div>
        <el-dialog title="" :visible.sync="dialogVisible" width="860px" :modal-append-to-body="false">
            <p class="cen">
                <img src="http://iph.href.lu/750x400" class="sdfdfsttt">
            </p>
        </el-dialog>
    </div>
</template>
<script>
    import {
        dxtables
    } from '@/assets/js/base'
    export default {
        data() {
            return {
                dialogVisible: false,
                tableData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                userLabel: '',
                schoolName: '',
                className: ''
            }
        },
        mixins: [dxtables],
        components: {},
        methods: {
            async getinit() {
                let sder = {}
                sder.userLabel = this.userLabel
                sder.schoolName = this.schoolName
                sder.className = this.className
                this.tableData = await this.$api.user.getuserList(sder)
            },
        },
        mounted() {
            console.log(this.$api);
            this.getinit()
        }
    }

</script>
<style lang='scss' scoped>

</style>
