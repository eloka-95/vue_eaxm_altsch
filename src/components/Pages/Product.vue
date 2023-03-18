<template>
  <div class="product-wrap">
    
    <div v-for="product in products" :key="product.id">
      <router-link :to="`/dashboard/productdtails/${product.id} `">
        <div class="product-items">
          <div class="items">
            <div class="top">
              <img :src="product.image" alt="product image" />
            </div>
            <div class="down">
              <h3> <span>Name: </span>{{ product.title }} </h3>
              <p> <span>Price: </span> {{ product.price }} </p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";

// Set withCredentials option to false
axios.defaults.withCredentials = false;

export default {
  name: "Product",

  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    // * fetching products from given apis using async function 
    async getProducts() {
      const res = await axios.get("https://fakestoreapi.com/products");
      this.products = res.data
    },
  },
};
</script>

<style>
.product-wrap{

  background: black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}
.product-items{
  background-color: black;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.items{
  background-color: white;
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
}
.items .top{
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.items .top img{
  padding: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.items .down{
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.items .down  span{
  font-size: 15px;
  font-weight: 500;
  color: rgb(234, 215, 67);
}

.items .down h3{
  font-size: 12px;
  font-weight: 500;
  color: #000;
}
.items .down p{
  font-size: 10px;
  font-weight: 500;
  color: #000;
}


</style>

