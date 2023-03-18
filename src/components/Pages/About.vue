<template>
  <div class="about-wrap">
    <div class="about-container">
      <div class="sec-a">
        <p class="text animate__animated animate__jackInTheBox">
          Welcome to xstore, your ultimate destination for the best deals on
          salable products. Our mission is to provide our customers with access
          to high-quality products at affordable prices, all in one convenient
          location. At xstore, we understand the challenges of finding the
          perfect product that meets your needs and budget. That's why we offer
          a wide range of products, from electronics and gadgets to home
          appliances and fashion items, all carefully curated and vetted to
          ensure they meet our high standards of quality and value. Our team is
          passionate about providing exceptional customer service and creating a
          seamless shopping experience for our customers. We believe that
          shopping should be easy, stress-free, and enjoyable, which is why
          we've designed our website to be user-friendly and intuitive. We're
          also committed to giving back to the community and making a positive
          impact in the world. That's why we donate a portion of our profits to
          charitable organizations that share our values and support causes we
          care about. Thank you for choosing xstore as your go-to destination
          for all your shopping needs. We're excited to serve you and provide
          you with the best possible shopping experience.
        </p>
        </div>
      <div class="sec-b">
        <img src="../../assets/image/xstore1.jpeg" class="animate__animated animate__jackInTheBox animate__delay-1s" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
.about-wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-wrap .about-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0px;
}
.about-wrap .about-container .sec-a{
    width: 50%;
    height: 100%;
    padding: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-wrap .about-container .sec-a p{
    font-size: 15px;
    color: white;
    text-align: center;
    font-weight: 700;
}
.about-wrap .about-container .sec-b{
    width: 50%;
    height: 100%;
    padding: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-wrap .about-container .sec-b img{
    -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0004);
}



</style>