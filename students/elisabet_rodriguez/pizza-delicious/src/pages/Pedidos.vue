<template>
 <div>
   <Showcase/>

   <section class="ftco-menu">
        <div class="container-fluid">
          <div class="row d-md-flex">
            <div class="col-lg-12  p-md-5">
              <div class="row">
                <div class="col-md-12 nav-link-wrap mb-5 d-flex">
                  <div
                    class="nav  nav-pills mx-auto"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      class="nav-link active"
                      id="v-pills-1-tab"
                      data-toggle="pill"
                      href="#v-pills-1"
                      role="tab"
                      aria-controls="v-pills-1"
                      aria-selected="true"
                      >Pizza</a
                    >
    
                    <a
                      class="nav-link"
                      id="v-pills-2-tab"
                      data-toggle="pill"
                      href="#v-pills-2"
                      role="tab"
                      aria-controls="v-pills-2"
                      aria-selected="false"
                      >Drinks</a
                    >
    
                    <a
                      class="nav-link"
                      id="v-pills-3-tab"
                      data-toggle="pill"
                      href="#v-pills-3"
                      role="tab"
                      aria-controls="v-pills-3"
                      aria-selected="false"
                      >Burgers</a
                    >
    
                    <a
                      class="nav-link"
                      id="v-pills-4-tab"
                      data-toggle="pill"
                      href="#v-pills-4"
                      role="tab"
                      aria-controls="v-pills-4"
                      aria-selected="false"
                      >Pasta</a
                    >
                  </div>
                </div>
                <div class="col-md-12 d-flex align-items-center">
                  <div class="tab-content " id="v-pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="v-pills-1"
                      role="tabpanel"
                      aria-labelledby="v-pills-1-tab"
                    >
                      <div class="row">

                        <ProductItem v-for="item in productsFiltered" :key="item.id"
                        :name="item.name"
                        :desc="item.desc"
                        :price="item.price"
                        :img="item.img"
                        />


                      </div>
                    </div>
    
                    <div
                      class="tab-pane fade"
                      id="v-pills-2"
                      role="tabpanel"
                      aria-labelledby="v-pills-2-tab"
                    >
                      <div class="row">
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/drink-1.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Lemonade Juice</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/drink-2.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Pineapple Juice</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/drink-3.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Soda Drinks</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div
                      class="tab-pane fade"
                      id="v-pills-3"
                      role="tabpanel"
                      aria-labelledby="v-pills-3-tab"
                    >
                      <div class="row">
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/burger-1.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Itallian Pizza</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/burger-2.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Itallian Pizza</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/burger-3.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Itallian Pizza</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div
                      class="tab-pane fade"
                      id="v-pills-4"
                      role="tabpanel"
                      aria-labelledby="v-pills-4-tab"
                    >
                      <div class="row">
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/pasta-1.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Itallian Pizza</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/pasta-2.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Itallian Pizza</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/pasta-3.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Itallian Pizza</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</section>

<section class="ftco-intro">
  <div class="container-wrap">
    <div class="wrap d-md-flex">
      <div class="info">
        <div class="row no-gutters">
          <div class="col-md-4 d-flex">
            <div class="text">
              <h3>YOU ORDER</h3>
              <p>Add your delicious order and press "Order" button </p>
            </div>
          </div>
          <div class="col-md-8 d-flex">
            <div class="text">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pizza Hawai</td>
                    <td>1</td>
                    <td>10,5 €</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="social d-md-flex pl-md-5 p-4 align-items-center">
        <div class="text">
          <h2>TOTAL</h2>
          <h4>10,5 €</h4>
        </div>
        <a href="#" class="p-3 px-xl-4 py-xl-3 btn-white btn btn-outline-white">Order Now</a>
      </div>
    </div>
  </div>

</section>
 </div>
</template>

<script>
import Showcase from '@/components/Showcase'
import ProductItem from '@/partials/ProductItem'

export default {
  data(){
    products: [
      {id: 1, name: "Italian Pizza", img:"images/pizza-1.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 10, category: "pizza" },
			{id: 2, name: "Greek Pizza", img:"images/pizza-2.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 20, category: "pizza" },
			{id: 3, name: "Caucasian Pizza", img:"images/pizza-3.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 35, category: "pizza" },
			{id: 4, name: "American Pizza", img:"images/pizza-4.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 60, category: "pizza" },
			{id: 5, name: "Tomatoe Pie", img:"images/pizza-5.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 8, category: "pizza" },
      {id: 6, name: "Margherita", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "pizza" },
      
      {id: 7, name: "Macarrones", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "pasta" },
      {id: 8, name: "Macarrones2", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "pasta" },
      {id: 9, name: "Macarrones3", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "pasta" },
      {id: 10, name: "Macarrones4", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "pasta" },

      {id: 11, name: "Bebida", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "drink" },
      {id: 12, name: "Bebida2", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "drink" },
      {id: 13, name: "Bebida3", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "drink" },
      {id: 14, name: "Bebida4", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "drink" },

      {id: 15, name: "Burger", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "burger" },
      {id: 16, name: "Burger2", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "burger" },
      {id: 17, name: "Burger3", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "burger" },
      {id: 18, name: "Burger4", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5, category: "burger" },
    ]
  },
  computed: {
    productsFiltered(){
      let category= "pasta"
      return this.products.filter( (item) => item.category === category)
    }
  },
  components: {
    Showcase,
    ProductItem
  }
}
</script>