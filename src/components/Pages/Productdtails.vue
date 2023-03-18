<template>
 <div class="productd-wrap">
    
        <div class="productd-items">
          <div class="itemsd">
            <div class="topd">
              <img :src="product.image" alt="product image" />
            </div>
            <div class="downd">
              <h3> <span>Name: </span>{{ product.title }} </h3>
              <p> <span>Price: </span> {{ product.price }} </p>
              <p> <span>Details: </span> {{ product.description }} </p>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Productdtails',
    data(){
      return{
        product: [],
        id : null
      }
    },
    methods:{
     
      getProduct(){
        this.id = this.$route.params.id;
        axios.get(`https://fakestoreapi.com/products/${this.id}`)
        .then(res => {
          this.product = res.data;
        });
      }
    },
    mounted(){
      this.getProduct()
    }

}
</script>

<style>
.productd-wrap{

  background: black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}
.productd-items{
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
.itemsd{
  background-color: white;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
}
.itemsd .topd{
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.itemsd .topd img{
  padding: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.itemsd .downd{
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.itemsd .downd  span{
  font-size: 15px;
  font-weight: 500;
  color: rgb(234, 215, 67);
}

.itemsd .downd h3{
  font-size: 12px;
  font-weight: 500;
  color: #000;
}
.itemsd .downd p{
  font-size: 10px;
  font-weight: 500;
  color: #000;
}


</style>

