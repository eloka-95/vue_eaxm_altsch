<template>
  <div class="nav-wrapper">
    <nav class="navbar navbar-expand-lg">
      <div class="logo">
        <router-link to="/" class="nav-link">X-store</router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse nav-container" id="navbarNav">
        <div class="section-a"></div>

        <div class="section-b">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            </li>

            <li class="nav-item login">
              <router-link to="/login"  class="nav-link"
                >Login</router-link
              >
            </li>

            <li class="nav-item login">
              <router-link to="#" @click="handleLogout" class="nav-link"
                >Logout</router-link
              >
            </li>
            {{ isLoggedIn }}
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    password: "",
  }),
  name: "Navbar",
  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
    },

    
  },
};
</script>
<style>
.nav-wrapper {
  background: transparent;
  color: white;
}
nav {
  padding: 0px 100px;
}
.logo {
  width: 20%;
  padding-left: 4rem;
}
nav .nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 0px 100px;
}
nav .nav-container .section-b {
  display: flex;
  justify-content: space-between;
  padding-left: 6rem;
  width: 60%;
}

nav .nav-container .section-b a {
  display: flex;
  margin-left: 35px;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: auto;
  border-radius: 4px;
  font-size: 20px;
  color: white;
}
nav .section-b ul .login a {
  background: #e74c3c;
}
nav .nav-container .section-b a:hover {
  background: #e74c3c;
  color: black;
  transition: 0.4s linear;
  color: whitesmoke;
}
</style>