<template>
  <div class="form-wrap">
    <div class="contain animate__animated animate__bounce">
      <div class="circle"></div>
      <div class="item-container">
        <div class="content">
          <form @submit.prevent="handleSubmit">
            <h1>Sign up</h1>
            <div>
              <label for="username">User Name:</label>
              <input type="text" v-model="username" placeholder="User Name" />
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" v-model="password" placeholder="Password"/>
            </div>
            <div>
              <div class="btn">
                <button type="submit">sign up</button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <p>
            Do not have an Account :
            <router-link to="/login">login</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Signup',
     
    data: () =>({
      username: '',
      password :''
    }),

    methods:{
        handleSubmit(){
          if ( this.username && this.password) {
            this.$store.dispatch('signup', {
                username: this.username,
                password: this.password,
                auth: true
            });
          }else{
            alert('Please fill in all fields')
          }
            
        }
    }
    
   
}
</script>

<style>
.form-wrap {
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contain {
  width: 330px;
  height: 450px;
  background: #000;
  box-shadow: 0px 0px 30px rgba(0 0 0/0.3) inset 0px 0px 10px rgb(255, 255, 255);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem 1.5rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.contain::before {
  content: "";
  position: absolute;
  left: -6rem;
  bottom: -6rem;
  width: 400px;
  height: 400px;
  background-color: rgba(221, 85, 67, 0.8);
  border-radius: 50%;
  z-index: -1;
}
.circle {
  width: 250px;
  height: 250px;
  background: rgb(215, 88, 49);
  border-radius: 50%;
  align-self: flex-end;
  position: absolute;
  top: -3rem;
  right: -3rem;
  box-shadow: -10px 10px 25px rgba(218, 165, 32, 0.4), inset 0 0 15px;
  border-radius: 50%;
  z-index: -1;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.02rem;
  padding: 1.5rem 2rem;
}
.content form {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
}

.content form h1 {
  color: rgb(239, 235, 235);
  font-family: sans-serif;
  font-size: 1.6rem;
  margin-bottom: 0.2rem;
}
.content form div:not(.btn) {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}
.content form div label {
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 0.7rem;
  margin-left: 7px;
  font-weight: 500;
}
.content form div input {
  width: 100%;
  height: 40px;
  outline: none;
  padding: 0 1rem;
  border: 0.07px solid gray;
  border-radius: 5px;
  font-size: normal;
  transition: all 300ms;
}
.content form div input:focus {
  border: 0.07px solid goldenrod;
  box-shadow: 4px 4px 0px rgba(0 0 0/0.4);
  border-width: 0.2rem;
}
.content form div input:focus + i {
  color: goldenrod;
}
.content form div input::placeholder {
  color: #000;
  font-size: 0.8rem;
  font-weight: 500;
}
.content form div.btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.content form div.btn button {
  padding: 9px 18px;
  border: none;
  border-radius: 20px;
  outline: none;
  display: inline-flex;
  outline: none;
  align-items: center;
  gap: 0.2rem;
  background: linear-gradient(to right, gold, goldenrod);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 500ms;
  margin-top: 0.5rem;
  color: #000;
}
.content form div.btn button:hover {
  background: linear-gradient(to right, goldenrod, gold);
  box-shadow: 4px 4px 0px rgba(0 0 0/0.4);
}
.content p {
  font-family: sans-serif;
  color: #222;
  font-size: 0.85rem;
}
.content p a {
  text-decoration: none;
  color: goldenrod;
}
.content p a:hover {
  text-decoration: underline;
}

</style>