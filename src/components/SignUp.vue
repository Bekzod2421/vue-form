<template>
  <form action="" class="sup" @submit.prevent="submit">
    <label for="">Email</label>
    <input type="email" required v-model="email" />
    <label for="">Password</label>
    <input type="password" required v-model="code" />
    <div class="error" v-if="codeError">{{ codeError }}</div>
    <label for=""> Select course</label>
    <select name="" id="" v-model="kurs">
      <option value="dev">Web Developer</option>
      <option value="des">Web Designer</option>
    </select>
    <div>
      <input type="checkbox" v-model="terms" />
      <label for="">Terms of using</label>
    </div>
    <input type="checkbox" v-model="like" value="ok" />
    <input type="checkbox" v-model="like" value="yes" />
    <input type="checkbox" v-model="like" value="ye" />
    <input type="checkbox" v-model="like" value="no" />
    <label for="">Skils</label>
    <input type="text" @keyup.alt="skil" v-model="skilName" />
    <div class="block">
      <div v-for="skils in skils" :skil="skils">
        <span @click="del(skils)">{{ skils }}</span>
      </div>
    </div>
    <div class="submit"><button>Create an account</button></div>
  </form>
  <p class="text">Email: {{ email }}</p>
  <p class="text">Password: {{ code }}</p>
  <p class="text">Course: {{ kurs }}</p>
  <p class="text">Terms of using {{ terms }}</p>
  <p class="text">Like {{ like }}</p>
</template>


<script>
export default {
  data() {
    return {
      email: "Bek",
      code: "",
      kurs: "des",
      terms: true,
      like: [],
      skilName: "",
      codeError: "",
      skils: [],
    };
  },
  methods: {
    skil(e) {
      if (e.key === ",") {
        if (this.skilName !== "," && !this.skils.includes(this.skilName)) {
          this.skils.push(this.skilName);
        }
        this.skilName = "";
      }
    },
    del(skil) {
      this.skils = this.skils.filter((item) => {
        return skil !== item;
      });
    },
    submit() {
      this.codeError = this.code.length > 5 ? "" : "Password must be at 6";
      console.log("Email:", this.email);
    },
  },
};
</script>

<style>
.sup {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 15px;
  margin-bottom: 30px;
}
.sup label {
  font-size: 24px;
  color: grey;
  text-align-last: left;
}
.sup input {
  border-bottom: 1px solid grey;
  font-size: 24px;
}
.sup select {
  /* align-self: start; */
  border-bottom: 1px solid grey;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 20px;
}
.sup div label {
  margin-left: 10px;
}
.block {
  display: flex;
  column-gap: 10px;
}
.block div {
  background-color: grey;
  border-radius: 20px;
  font-size: 22px;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
}
.submit {
  display: flex;
  justify-content: center;
}
.submit button {
  border-radius: 30px;
  padding: 10px 15px;
  background-color: seagreen;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
}
.error {
  color: #ff0062;
}
.text {
  font-size: 18px;
  text-align: left;
  margin-bottom: 6px;
}
</style>