<template>
    <div class="user_background">
        <router-view></router-view>
    </div>
</template>

<script>
import { get,post } from '../../../http/request'
    export default {
        name:'',
        components:{},
        props:{},
        data(){
            return {
            }
        },
        watch:{},
        computed:{},
        methods:{},
        created(){},
        async mounted(){
            
        }
    }
</script>

<style lang="less" scoped>
    .user_background{
        width:100%;
        height:100%;
        background-color: #2b4b6b;
        /* background: url('@/assets/imgs/userBackImage.jpg') center top repeat-x ;
        background-size:cover; */
    }
</style>
