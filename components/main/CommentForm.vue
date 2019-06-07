<template>
<el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
>
  <el-form-item label="Ваше имя" prop="name">
    <el-input v-model.trim="controls.name" />
  </el-form-item>
  
    <el-form-item label="Текст комментария" prop="text">
        <el-input
        type = "textarea"
            v-model.trim="controls.name"
            resize="none"
            :rows="2"
        />
    </el-form-item>

    <el-form-item>
        <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            round
        >
            Добавить комментарий
        </el-button>
    </el-form-item>
</el-form>
</template>

<script>
export default {
    data () {
        return {
            controls: {
                name: '',
                text: '',
            },
            rules: {
                name: [
                    { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' },
                ],
                text: [
                    { required: true, message: 'Please select Activity zone', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        onSubmit () {
            console.log('onSubmit')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
