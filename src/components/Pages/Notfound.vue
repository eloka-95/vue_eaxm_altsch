<template>
    <div class="not-wrap">
        <div class="gif">
            <div class="button animate__animated animate__bounce">
            <router-link to="/"> Go Back</router-link>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {
name: 'Notfound'
}
</script>

<style>
.not-wrap{
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/image/404.gif');
    object-fit: contain;
    background-repeat: no-repeat;
  background-size: 800px 400px;
  background-position: center;
  display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.button{
    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100px;
    height: 50px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid red;
}
.button:hover{
    background: red;
    border: 1px solid #000;
    color: #fff;
}
.button a{
    text-decoration: none;
    color: #fff;
}


</style>