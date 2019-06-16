<template>
  <el-form
    class="form-comment"
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h1>Добавить коментарий</h1>
    <el-form-item label="Ваше имя" prop="name">
      <el-input v-model="controls.name"/>
    </el-form-item>

    <el-form-item label="Текст комментария" prop="text">
      <el-input type="textarea" v-model="controls.text" resize="none" :rows="2"/>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit" round :loading="loading">Добавить комментарий</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
    props: {
        postId: {
            type: String,
            required: false
        }
    },
  data() {
    return {
      loading: false,
      controls: {
        name: "",
        text: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Имя не должно быть пустым",
            trigger: "blur"
          }
        ],
        text: [
          { required: true, message: "Введите ваш коментарий", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: this.postId
          };
          console.log("form is valid", formData);
          try {
            const newComment = await  this.$store.dispatch('comment/create', formData)
            console.log(newComment)
              this.$message.success("Комментарий добавлен");
              this.$emit("created");
          } catch (e) {
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-comment {
  margin-top: 50px;
}
</style>
