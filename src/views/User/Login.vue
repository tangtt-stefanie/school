<template>
    <div class="login_container">
        <div class="login_box">
            <!-- logo -->
            <div class="avatar_box">
                <img src="@/assets/imgs/loginLogo.jpg" alt="Logo">
            </div>
            <!-- 登录表单 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_info">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-account"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="iconfont icon-password" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
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
            loginForm:{
                username:'admin',
                password:'123456'
            },
            loginFormRules:{
                username:[
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 3, message: '账号长度不小于三个字符', trigger: 'blur' },
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max:18,message: '密码长度在6到18个字符之间', trigger: 'blur' },
                ]
            }
        }
    },
    watch:{},
    computed:{},
    methods:{
        ...mapActions('user',['Login']),
        login(){
            const { Login , $router} = this;
            this.$refs.loginFormRef.validate((valid)=>{
                if(!valid) return
                const formData = new FormData()
                formData.append('username',this.loginForm.username)
                formData.append('password',this.loginForm.password)
                Login(formData).then((data) => {
                    console.log('login--data--',data)
                    $router.push('/user/selectRole')
                });
            })
        },
        reset(){
            this.$refs.loginFormRef.resetFields()
        }
    },
    mounted(){}
}
</script>

<style lang="less" scoped>
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
        position: relative;
        .login_box{
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
            .login_info{
                position: absolute;
                bottom: 0;
                width: 100%;
                padding:0 20px;
                box-sizing: border-box;
            }
            .btns{
                display: flex;
                justify-content: center;
            }
        }
    }
</style>
