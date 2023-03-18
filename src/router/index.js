import { createWebHistory, createRouter } from "vue-router";
import About from "@/components/Pages/About.vue";
import Login from "@/components/Pages/Login.vue";
import Signup from "@/components/Pages/Signup.vue";
import Product from "@/components/Pages/Product.vue";
import Productdtails from "@/components/Pages/Productdtails.vue";
import Notfound from "@/components/Pages/Notfound.vue";
import Dashboard from "@/components/Pages/Dashboard.vue";
import Home from "@/components/Pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          Auth: true
        },
        redirect: "/dashboard/product",

        children:[
          {
            path: "product",
            name: "Product",
            component: Product,
          },
          {
            path: "productdtails/:id",
            name: "Productdtails",
            component: Productdtails,
          }
        ]
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/signup",
        name: "Signup",
        component: Signup,
      },
  
  {
    path: "/:catchAll(.*)",
    name: "Notfound",
    component: Notfound,
  },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



// ****i noticed on first run the function do direct to login page cus the cuz the localStorage is empty but if try to sign up the second time it works****
router.beforeEach((to, from, next) => {
  const getLocalInfo = localStorage.getItem('token');// geting the userInfo from loacalstorage
const parseToken = JSON.parse(getLocalInfo); //* parsing the userInfo from localStorage
  if(to.meta.Auth){
    if(parseToken){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
   
})

export default router;