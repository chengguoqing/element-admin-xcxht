<!--管理员列表-->
<!--老师列表-->
<!--总的用户列表-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入ID或姓名"></el-input>
            </el-col>
            <el-col :span="12">
                <el-button type="primary">搜索</el-button>
            </el-col>
        </el-row>


        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column label="用户ID" width="120" align="center">
                <template slot-scope="scope">
                    100
                </template>
            </el-table-column>
            <el-table-column label="姓名" align="center">
                <template slot-scope="scope">
                    独行工匠
                </template>
            </el-table-column>

            <el-table-column label="手机" align="center">
                <template slot-scope="scope">
                    135388190372
                </template>
            </el-table-column>

            <el-table-column label="操作" align="center">

                <template slot-scope="scope">
                    <span class="ls sz" @click="dderrtty=true">设置权限</span>
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

        <el-dialog title="A管理员，身份｛管理员｝，权限如下" :visible.sync="dderrtty" width="500px" :modal-append-to-body="false">
            <el-table :data="tableDatader">
                <el-table-column prop="dhjdfa" label="模块" align="center"> </el-table-column>
                <el-table-column prop="" label="只读权限" align="center">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.dhjdfb"></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column prop="" label="编辑权限" align="center">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.dhjdfc"></el-checkbox>
                    </template>
                </el-table-column>
            </el-table>
            <div class="mt20 tr">
                <el-button type="primary" @click="dderrtty=false">保存</el-button>
                 <el-button type="primary" @click="dderrtty=false">取消</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                dderrtty: false,
                tableData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                tableDatader: [{
                    dhjdfa: '活动管理',
                    dhjdfb: false,
                    dhjdfc: false
                }, {
                    dhjdfa: '资讯管理',
                    dhjdfb: false,
                    dhjdfc: false
                }, {
                    dhjdfa: '投票管理',
                    dhjdfb: false,
                    dhjdfc: false
                }, {
                    dhjdfa: '定时照片',
                    dhjdfb: false,
                    dhjdfc: false
                }, {
                    dhjdfa: '班级列表',
                    dhjdfb: false,
                    dhjdfc: false
                }, {
                    dhjdfa: '用户管理',
                    dhjdfb: false,
                    dhjdfc: false
                }, {
                    dhjdfa: '配置信息',
                    dhjdfb: false,
                    dhjdfc: false
                }]

            }
        },
        components: {},
        methods: {},
        mounted() {}
    }

</script>
