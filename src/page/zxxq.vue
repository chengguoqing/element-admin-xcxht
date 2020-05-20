<!--咨询详情-->
<template>
    <div class="app-container dsfdtery">
        <p class="fz18">
            {{informationSubject}}
        </p>
        <div class="btm mt10 pt30 fz14 z3 dsfdsrfds" v-html="informationDesc">
           
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
               informationSubject:'',
               informationDesc:''
            }
        },
        components: {},
        methods: {
            async getxq() {
                let res = await this.$api.consultiveManagement.informationDetail(this.$route.query.id)
                res = res.data
                this.informationSubject = res.informationSubject
                this.informationDesc = res.informationDesc
            }
        },
        mounted() {
            this.getxq()
        }
    }

</script>
<style scoped>
    .dsfdsrfds {
        line-height: 1.85
    }

</style>
