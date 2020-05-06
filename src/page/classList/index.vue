<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入ID或班级关键字"></el-input>
            </el-col>
            <el-col :span="12">
                <el-button type="primary">搜索</el-button>
            </el-col>
        </el-row>

        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column label="班级ID" width="120" align="center">
                <template slot-scope="scope">
                    100
                </template>
            </el-table-column>
            <el-table-column label="班级名称" align="center">
                <template slot-scope="scope">
                    班级名称
                </template>
            </el-table-column>
            <el-table-column label="所属学校" align="center">
                <template slot-scope="scope">
                    所属学校
                </template>
            </el-table-column>
            <el-table-column label="班主任（创建人）" align="center">
                <template slot-scope="scope">
                    班主任（创建人）
                </template>
            </el-table-column>
            <el-table-column label="创建时间" align="center">
                <template slot-scope="scope">
                    创建时间
                </template>
            </el-table-column>
            <el-table-column label="核验通过时间" align="center">
                <template slot-scope="scope">
                    2020-4-28 15:15
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <span class="ls sz" @click="dialogVisible=true">更改班主任</span>
                </template>
            </el-table-column>

        </el-table>

        <div class="mt40 tr">
            <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper,slot" :total="400">
            </el-pagination>
        </div>

        <el-dialog title="更改班主任" :visible.sync="dialogVisible" width="400px" :modal-append-to-body="false">
            <el-form label-width="80px">
                <el-form-item label="更改为">
                    <el-select v-model="yzhManner" class=" w100" filterable>
                        <el-option label="李大师" value="1"></el-option>
                        <el-option label="李二师" value="2"></el-option>
                         <el-option label="李三师" value="3"></el-option>
                         <el-option label="李四师" value="4"></el-option>
                         <el-option label="李五师" value="5"></el-option>
                    </el-select>
                  
                </el-form-item>
                
                  <div class="mt40 tr">
                        <el-button type="primary" size="small">确定</el-button>
                        <el-button type="primary" @click="dialogVisible=false" size="small">取消</el-button>
                    </div>
            </el-form>
        </el-dialog>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                yzhManner:'',
                tableData: [1, 2, 3, 4, 5, 6, 7, 89, ]
            }
        },
        components: {},
        methods: {},
        mounted() {}
    }

</script>
<style lang='scss' scoped>

</style>
