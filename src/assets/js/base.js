/*页面上调用

<el-upload action list-type="picture-card" :http-request="upload" :before-remove="deleece">
                            <i class="el-icon-plus"></i>
                        </el-upload>
 import {upimg} from '@/assets/js/base'
 mixins: [upimg],
                        */
let OSS = require('ali-oss');
import {
    v4 as uuidv4
} from 'uuid';
// 图片上传
export const upimg = {
    data: function () {
        return {
            imgarray: []
        }
    },
    methods: {
        //覆盖默认的上传行为，自定义上传的实现
        upload(file) {
            const that = this;
            var client = new OSS({
                accessKeyId: 'LTAIiqgP9cTzRbwA',
                accessKeySecret: '5D6cDpEfOdyyech4munmPONblAETgY',
                bucket: 'testcheng',
                region: 'oss-cn-shanghai'
            });
            // uuidv4() 生成随机的文件名
            let jjhsd = uuidv4() + '.jpg'
            client.multipartUpload(`${jjhsd}`, file.file, {
                progress: function (p) {
                    //p进度条的值
                    that.showProgress = true;
                    that.progress = Math.floor(p * 100);
                }
            }).then(result => {
                //上传成功返回值，可针对项目需求写其他逻辑
                that.$message({
                    message: '文件上传成功',
                    type: 'success'
                });
                let jjhse = {}
                jjhse.imgUrl = 'https://testcheng.oss-cn-shanghai.aliyuncs.com/' + jjhsd
                that.form.activityImgList.push(jjhse)
            }).catch(err => {
                that.$message.error('上传失败，请重试。');
                console.log("err:", err);
            });
        },
        deleece(file) {
            return this.$confirm(`确定移除 ${ file.name }？`).then(() => {
                this.form.activityImgList.splice(file.percentage, 1);
            })
        }
    }
}

// 获取表格信息
/*<el-pagination background :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]"  layout="total, sizes, prev, pager, next, jumper,slot" :total="total" @current-change="jjncdrt">
            </el-pagination>*/
export const dxtables = {
    data: function () {
        return {
            tableData: [],
            currentPage4: 1,
            pageNum: 1, // 当前页码
            total: 0 // 总共的条数
        }
    },
    methods: {
        jjncdrt(e) {
            this.pageNum = e
            this.getinit()
        }
    },
    filters: {
        timee(t) {
            var date = new Date(t)
            return date.times()
        }
    }
}
