<!--活动详情-->
<template>
    <div class="app-container dsfdtery">
        <p class="fz18">
            {{res.activitySubject}}
        </p>
        <div class="btm mt10 pt30">
      <div class="mmmndxertr">
                <el-form label-width="80px" :model="form" :rules="rules" ref="ruleForm"  v-loading="loading">
                    <el-form-item label="活动主题" prop="activitySubject">
                        {{res.activitySubject}}
                    </el-form-item>
                    <el-form-item label="活动介绍" prop="activityDesc">
                         {{res.activityDesc}}
                    </el-form-item>
                    <el-form-item label="视频链接" prop="videoUrl">
                        {{res.videoUrl}}
                    </el-form-item>
                    <el-form-item label="宣传图" prop="activityImgList">
                            <img :src="sd.imgUrl" v-for="sd in res.activityImgList" class="cz mr10 dfdstyer">
                        
                    </el-form-item>
                    <el-form-item label="选择标签" prop="activityLabelList">
                        <el-tag v-for="sd in res.activityLabelList">{{sd.labelName}}</el-tag>
                    </el-form-item>
                    <el-form-item label="截止时间" prop="activityEndTime">
                       {{res.activityEndTime}}
                    </el-form-item>
                </el-form>

            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                res:''
            }
        },
        components: {},
        methods: {
            async getxq() {
                let res = await this.$api.hdgl.activityDetailxq(this.$route.query.id)
                this.res = res.data
            }
        },
        mounted() {
            this.getxq()
        }
    }

</script>
<style lang='scss' scoped>
    .dfdstyer{
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        width: 98px;
        height: 98px;
    }
</style>
