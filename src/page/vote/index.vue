<!--投票后台-->
<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input placeholder="输入ID或主题关键字"></el-input>
            </el-col>
            <el-col :span="3">
                <el-input placeholder="创建人姓名"></el-input>
            </el-col>
            <el-col :span="3">
                <el-checkbox label="只搜推荐到首页的" key="0" class="fdgtyxxeer"></el-checkbox>
            </el-col>
            <el-col :span="12">
                <el-button type="primary">搜索</el-button>
                <router-link to="/vote/cjvote">

                    <el-button type="primary">创建活动</el-button>
                </router-link>
            </el-col>
        </el-row>



        <el-table :data="tableData" class="mt20 fz12 cen" border>
            <el-table-column type="selection" width="55" align="center"> </el-table-column>
            <el-table-column prop="jhhhdfa" label="比赛ID" width="60" align="center"> </el-table-column>
            <el-table-column prop="jhhhdfb" label="比赛主题" align="center"> </el-table-column>
            <el-table-column prop="" label="比赛介绍" align="center">
                <template slot-scope="scope">
                    <div class="dianer fz12">
                        {{scope.row.jhhhdfc}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column  label="视频" align="center">
                <template slot-scope="scope">
                        <span class="sz" @click="opem(scope.row.jhhhdfd)">{{scope.row.jhhhdfd}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="jhhhdfe" label="图片" width="130" align="center">
                <template slot-scope="scope" align="center">
 <span class="ls sz" @click="dialogVisible=true">查看</span>
<!--
                    <div v-for="sd in scope.row.jhhhdfe" class="f_b fdfgdtyyux">
                        <el-image style="width: 40px; height: 40px" :src="sd" :preview-src-list="scope.row.jhhhdfe"></el-image>
                    </div>
-->
                </template>
            </el-table-column>
     <el-table-column prop="jhhhdfe" label="头图" width="130" align="center">
                <template slot-scope="scope" align="center">
<span class="ls sz" @click="dialogVisibleer=true">查看</span>
                </template>
            </el-table-column>
            <el-table-column prop="jhhhdfg" label="参赛人数" width="80" align="center"> </el-table-column>
            <el-table-column prop="jhhhdfh" label="创建人" width="80" align="center"> </el-table-column>
            <el-table-column prop="jhhhdfi" label="创建时间" width="120" align="center"> </el-table-column>
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

       <el-dialog title="可将某张设置为本活动宣传图" :visible.sync="dialogVisible" width="600px" :modal-append-to-body="false">
            <div >
                
                 <el-image  src="http://iph.href.lu/80x80" :preview-src-list="srcList"  class="kjxeeert" v-for="(sd,idx) in 6" :class="idx == idsd?'act':''" @click="idsd=idx"></el-image>
                <p class="mt20">
                <el-button type="primary" @click="jjssd">设为本活动宣传图</el-button>
                </p>
            </div>
        </el-dialog>

      <el-dialog title="" :visible.sync="dialogVisibleer" width="860px" :modal-append-to-body="false">
            <p class="cen">
            <img src="http://iph.href.lu/750x400" class="sdfdfsttt">
            </p>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible:false,
                dialogVisibleer:false,
                idsd:0,
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                     'http://iph.href.lu/80x80',
                    'http://iph.href.lu/80x80'
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
