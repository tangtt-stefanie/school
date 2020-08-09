<template>
    <div class="select_container">
        <div class="select_box">
            <!-- logo -->
            <div class="avatar_box">
                <img src="@/assets/imgs/loginLogo.jpg" alt="Logo">
            </div>
            <!-- 选择角色 -->
            <el-select change="" style="width:100%" v-model="selectedId" placeholder="请选择" class="select_info">
                <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.roleName"
                :value="item.id">
                </el-option>
            </el-select>
            <el-button type="primary" @click="selectUserRole" class='btn'>确认选择</el-button>
            
        </div>
    </div>
</template>

<script>
import { mapActions , mapGetters} from 'vuex'
export default {
    name:'',
    components:{},
    props:{},
    data(){
        return {
            options: [],
            selectedId: ''
        }
    },
    watch:{},
    computed:{},
    methods:{
        ...mapActions('user',['Login','FetchUserRoles','SelectUserRole']),
        selectUserRole(){
                const { SelectUserRole , $router} = this;
                SelectUserRole({id:this.selectedId}).then((data)=> {
                    console.log('SelectUserRole---')
                    
                    // $router.push('/layout')
                });
            }
    },
    mounted(){
        this.FetchUserRoles(undefined).then((data)=>{
            this.options = data;
        });
    }
}
</script>
    
<style lang="less" scoped>
.select_container{
        background-color: #2b4b6b;
        height: 100%;
        position: relative;
        .select_box{
            width:450px;
            height:300px;
            background-color: #fff;
            border-radius: 5px;
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%,-50%);
            .avatar_box{
                width:130px;
                height:130px;
                border-radius: 50%;
                border:1px solid #eee;
                padding: 10px;
                box-shadow: 0 0 3px #ddd;
                position: absolute;
                left:50%;
                transform: translate(-50%,-50%);
                background-color: rgba(243, 235, 235, 0.904);
                img{
                    width: 100%;
                    height:100%;
                    border-radius: 50%;
                    background-color: #eee;
                }
            }
            .select_info{
                position: absolute;
                bottom: 45%;
                width: 100%;
                padding:0 20px;
                box-sizing: border-box;
            }
            .btn{
                position: absolute;
                bottom: 20%;
                width:90%;
                left:5%;
                // transform: translate(-50%,0);
            }
        }
    }
</style>