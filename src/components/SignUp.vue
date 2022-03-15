<template>
  <form action="" class="sup">
    <label for="">Email</label>
    <input type="email" required v-model="email" />
    <label for="">Password</label>
    <input type="password" required v-model="code" />
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
    <div v-for="skils in skils">{{ skils }}</div>
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
      skils: [],
    };
  },
  methods: {
    skil(e) {
      if (e.key === ",") {
        if (this.skilName !== "," && !this.skils.includes(this.skilName)) {
          this.skils.push(this.skilName);
          console.log(this.skils);
        }
        this.skilName = "";
      }
      //   if (condition) {

      //   }
    },
  },
};
</script>

<style>
.sup {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 20px;
  margin-bottom: 30px;
}
.sup label {
  font-size: 24px;
  color: grey;
  text-align-last: left;
}
.sup input {
  border-bottom: 1px solid grey;
  padding: 5px 0;
  font-size: 24px;
}
.sup select {
  align-self: start;
  border: 1px solid grey;
}
.text {
  font-size: 18px;
  text-align: left;
  margin-bottom: 6px;
}
</style>