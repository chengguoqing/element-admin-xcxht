<!--参赛作品-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入参赛这姓名或比赛名称"></el-input>
            </el-col>
            <el-col :span="12">
                <el-button type="primary">搜索</el-button>
                <el-button type="primary" @click="handleDownload" :loading="downloadLoading">导出</el-button>
            </el-col>
        </el-row>



        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column prop="jhhhdfb" label="比赛名称"  align="center"> </el-table-column>
            <el-table-column prop="jhhhdfb" label="字段1" align="center"> </el-table-column>
            <el-table-column prop="jhhhdfb" label="字段2" align="center"> </el-table-column>
            <el-table-column prop="jhhhdfb" label="字段3" align="center"> </el-table-column>
            <el-table-column prop="jhhhdfb" label="字段4" align="center"> </el-table-column>
            <el-table-column prop="" label="字段5" align="center">
                <template slot-scope="scope">
                    <div class="dianer fz12">
                        {{scope.row.jhhhdfc}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="视频" align="center">
                <template slot-scope="scope">
                    <span class="sz" @click="opem(scope.row.jhhhdfd)">{{scope.row.jhhhdfd}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="jhhhdfh" label="创建人" width="80" align="center"> </el-table-column>
            <el-table-column prop="jhhhdfi" label="创建时间" width="120" align="center"> </el-table-column>
            <el-table-column prop="jhhhdfg" label="票数" width="80" align="center"> </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <span class="ls sz">查看</span>
                    <span class="ls ml10 sz">编辑</span>
                    <span class="ls ml10 sz">下架</span>
                    <p>
                        <span class="ls sz">推荐到首页</span>
                    </p>
                </template>
            </el-table-column>
            <el-table-column prop="jhhhdfj" label="最后操作人" align="center"> </el-table-column>
        </el-table>

        <div class="mt20 tr">
            <el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper,slot" :total="400">
            </el-pagination>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                downloadLoading: false,
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ],
                tableData: [{
                    jhhhdfa: 100,
                    jhhhdfb: '植物观察',
                    jhhhdfc: '观察植物生长情况，显示30字，其余省略号，鼠标滑过展示全鼠标滑过展示全鼠标滑过展示全',
                    jhhhdfd: 'https://v.douyin.com/38XxXH/',
                    jhhhdfe: ['http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200'],
                    jhhhdff: '观察  实践',
                    jhhhdfg: 50,
                    jhhhdfh: 'A同学',
                    jhhhdfi: '2020.1.1 12:10:01',
                    jhhhdfj: 'A同学 2020.2.1 13：01：01'

                }, {
                    jhhhdfa: 100,
                    jhhhdfb: '植物观察',
                    jhhhdfc: '观察植物生长情况，显示30字，其余省略号，鼠标滑过展示全鼠标滑过展示全鼠标滑过展示全',
                    jhhhdfd: 'https://v.douyin.com/38XxXH/',
                    jhhhdfe: ['http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200'],
                    jhhhdff: '观察  实践',
                    jhhhdfg: 50,
                    jhhhdfh: 'A同学',
                    jhhhdfi: '2020.1.1 12:10:01',
                    jhhhdfj: 'A同学 2020.2.1 13：01：01'

                }, {
                    jhhhdfa: 100,
                    jhhhdfb: '植物观察',
                    jhhhdfc: '观察植物生长情况，显示30字，其余省略号，鼠标滑过展示全鼠标滑过展示全鼠标滑过展示全',
                    jhhhdfd: 'https://v.douyin.com/38XxXH/',
                    jhhhdfe: ['http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200'],
                    jhhhdff: '观察  实践',
                    jhhhdfg: 50,
                    jhhhdfh: 'A同学',
                    jhhhdfi: '2020.1.1 12:10:01',
                    jhhhdfj: 'A同学 2020.2.1 13：01：01'

                }, {
                    jhhhdfa: 100,
                    jhhhdfb: '植物观察',
                    jhhhdfc: '观察植物生长情况，显示30字，其余省略号，鼠标滑过展示全鼠标滑过展示全鼠标滑过展示全',
                    jhhhdfd: 'https://v.douyin.com/38XxXH/',
                    jhhhdfe: ['http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200'],
                    jhhhdff: '观察  实践',
                    jhhhdfg: 50,
                    jhhhdfh: 'A同学',
                    jhhhdfi: '2020.1.1 12:10:01',
                    jhhhdfj: 'A同学 2020.2.1 13：01：01'

                }, {
                    jhhhdfa: 100,
                    jhhhdfb: '植物观察',
                    jhhhdfc: '观察植物生长情况，显示30字，其余省略号，鼠标滑过展示全鼠标滑过展示全鼠标滑过展示全',
                    jhhhdfd: 'https://v.douyin.com/38XxXH/',
                    jhhhdfe: ['http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200'],
                    jhhhdff: '观察  实践',
                    jhhhdfg: 50,
                    jhhhdfh: 'A同学',
                    jhhhdfi: '2020.1.1 12:10:01',
                    jhhhdfj: 'A同学 2020.2.1 13：01：01'

                }, {
                    jhhhdfa: 100,
                    jhhhdfb: '植物观察',
                    jhhhdfc: '观察植物生长情况，显示30字，其余省略号，鼠标滑过展示全鼠标滑过展示全鼠标滑过展示全',
                    jhhhdfd: 'https://v.douyin.com/38XxXH/',
                    jhhhdfe: ['http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200', 'http://iph.href.lu/200x200'],
                    jhhhdff: '观察  实践',
                    jhhhdfg: 50,
                    jhhhdfh: 'A同学',
                    jhhhdfi: '2020.1.1 12:10:01',
                    jhhhdfj: 'A同学 2020.2.1 13：01：01'

                }]
            }
        },
        components: {},
        methods: {
            opem(e) {
                open(e)
            },
            handleDownload() {
                this.downloadLoading = true
                import('@/vendor/Export2Excel').then(excel => {
                    const tHeader = ['比赛名称', '字段1', '字段2', '字段3', '字段4', '字段5', '视频', '创建人', '票数', '最后操作人']
                    const filterVal = ['jhhhdfb', 'jhhhdfb', 'jhhhdfb', 'jhhhdfb', 'jhhhdfb', 'jhhhdfc','jhhhdfd','jhhhdfh','jhhhdfg','jhhhdfj']
                    const list = this.tableData
                    const data = this.formatJson(filterVal, list)
                    excel.export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: '测试一下',
                        autoWidth: true,
                        bookType: 'xlsx'
                    })
                    this.downloadLoading = false
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => {
                    if (j === 'timestamp') {
                        return parseTime(v[j])
                    } else {
                        return v[j]
                    }
                }))
            }
        },
        mounted() {}
    }

</script>
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
