<template>
  <div class="home-wrapper">
    <div class="container">
      <div class="sec-a">
        <div class="line">
          <span class="sp1"></span>
          <span class="sp2"></span>
          <span class="sp3"></span>
        </div>
        <div class="text animate__animated animate__jackInTheBox">
          <h1>
            Welcome To X-store<br />
            check out our best products.
          </h1>
          <router-link to="/login">View Our Products</router-link>
        </div>
      </div>
      <div class="sec-b">
        <img src="../../assets/image/wat3.png" class="animate__animated animate__jackInTheBox animate__delay-1s" />
      </div>
      <div class="s-icon animate__animated animate__lightSpeedInLeft animate__delay-2s">
        <img src="../../assets/image/icon1.png" />
        <img src="../../assets/image/icon2.png" />
        <img src="../../assets/image/icon3.png" />
        <img src="../../assets/image/icon4.png" />
      </div>
    </div>
  </div>

  <div>
    <router-view />
  </div>
</template>
  
  <script>
export default {
  name: "Home",

  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
  
  <style>
.home-wrapper {
  width: 100%;
  height: 100vh;
}
.line {
  position: absolute;
  top: 22%;
  left: 8%;
}
.line sp1 {
  width: 10px;
  height: 10px;
  background: #fff;
}
.line sp2 {
  width: 60px;
  height: 2 px;
  background: #fff;
}
.home-wrapper .container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container .sec-a {
  flex-basis: 40%;
}
.container .sec-b {
  flex-basis: 40%;
}
.container .sec-b img {
  width: 100%;
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, transparent, #0004);
}
.container .sec-a h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3.5rem;
  color: #fff;
}
.container .sec-a h1 br {
  display: block;
}
.container .sec-a a {
  background: #e74c3c;
  color: #fff;
  padding: 10px 20px;
  margin-top: 30px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.2rem;
  outline: none;
  border: none;
}
.container .sec-b img {
  width: 100%;
  height: 100%;
}
.s-icon {
  position: absolute;
  bottom: 10%;
  left: 5;
}
.s-icon img {
  width: 80px;
}
</style>
  
  <!-- <router-link to="/signup">Signup</router-link>
  <router-link to="/login">Login</router-link>
  <button type="button" @click="handleLogout">logout</button> -->