<template>
  <div class="dash-wrap">
    <p>
      Welcome:<span>{{ $store.state.username }}</span>
    </p>
    <div>
      <router-link to="/dashboard/product">Products</router-link>
    </div>
  </div>

  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Dashboard",

  methods: {
    // * fetching product from a fake api
  },
};
</script>

<style>
.dash-wrap{
  width: 100%;
}
.dash-wrap p{
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem;
  }
.dash-wrap p span{
  color: #f5b041;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem;
  }
.dash-wrap div{
  padding: 0.5rem;
  }
.dash-wrap div a{
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
  text-decoration: none;
  width: auto;
  background: #f5b041;
  border-radius: 4px;
  }
.dash-wrap div a:hover{
  color: #e7513d;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
  }

</style>