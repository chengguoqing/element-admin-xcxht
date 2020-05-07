<template>
    <div class="app-container">
        <el-table :data="tableData" class="mt20 fz12" border>
            <el-table-column prop="id" label="评论ID" align="center"> </el-table-column>
            <el-table-column prop="commentContent" label="评论内容" align="center"> </el-table-column>
            <el-table-column prop="dsfdsgc" label="所属活动" align="center"> </el-table-column>
            <el-table-column prop="commentPeople" label="发布人" align="center"> </el-table-column>
            <el-table-column  label="发布时间" align="center"> 
    
       <template slot-scope="scope">
                    {{scope.row.commentTime | timee}}
                </template>
    </el-table-column>
            <el-table-column prop="dsfdsgf" label="操作" align="center">
                <template slot-scope="scope" align="center">
                    <span class="ls sz" @click="shnhase(scope.row)">删除</span>
                </template>
            </el-table-column>
        </el-table>

        <div class="mt40 tr">
            <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper,slot" :total="400">
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

            }
        },
        mixins: [dxtables],
        components: {},
        methods: {
            shnhase(ids) {
                this.$confirm('确定删除吗？', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.delpinglun(ids.id)
                })
            },
            async getinit() {
                this.tableData = await this.$api.hdgl.getpinglun(3)
            },
            async delpinglun(id) {
                const djjhhe = await this.$api.hdgl.delpinglun(id)
                this.$message.success(djjhhe.msg)
                this.getinit()
            }
        },
        mounted() {
            this.getinit()
        }
    }

</script>
<style scoped>

</style>
