<template>
<section class="ftco-section">
		<div class="container">
		  <div class="row justify-content-center mb-5 pb-3">
			<div class="col-md-7 heading-section  text-center">
			  <h2 class="mb-4">Hot Pizza Meals</h2>
			  <p>
				Far far away, behind the word mountains, far from the countries
				Vokalia and Consonantia, there live the blind texts.
			  </p>
			</div>
		  </div>
		</div>
		<div class="container-wrap">
		  <div class="row no-gutters d-flex">

			<FeaturePizzaItem v-for="item in featurePizzas" :key="item.id"
				:name="item.name" 
				:img="item.img" 
				:price="item.price" 
				:desc="item.desc"
			/>
	<!-- 			<div class="col-lg-4 d-flex ">
			  <div class="services-wrap d-flex">
				<a
				  href="#"
				  class="img"
				  style="background-image: url(images/pizza-2.jpg);"
				></a>
				<div class="text p-4">
				  <h3>Greek Pizza</h3>
				  <p>
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia
				  </p>
				  <p class="price">
					<span>$2.90</span>
					<a href="#" class="ml-2 btn btn-white btn-outline-white"
					  >Order</a
					>
				  </p>
				</div>
			  </div>
			</div>
			<div class="col-lg-4 d-flex ">
			  <div class="services-wrap d-flex">
				<a
				  href="#"
				  class="img"
				  style="background-image: url(images/pizza-3.jpg);"
				></a>
				<div class="text p-4">
				  <h3>Caucasian Pizza</h3>
				  <p>
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia
				  </p>
				  <p class="price">
					<span>$2.90</span>
					<a href="#" class="ml-2 btn btn-white btn-outline-white"
					  >Order</a
					>
				  </p>
				</div>
			  </div>
			</div>
	
			<div class="col-lg-4 d-flex ">
			  <div class="services-wrap d-flex">
				<a
				  href="#"
				  class="img order-lg-last"
				  style="background-image: url(images/pizza-4.jpg);"
				></a>
				<div class="text p-4">
				  <h3>American Pizza</h3>
				  <p>
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia
				  </p>
				  <p class="price">
					<span>$2.90</span>
					<a href="#" class="ml-2 btn btn-white btn-outline-white"
					  >Order</a
					>
				  </p>
				</div>
			  </div>
			</div>
			<div class="col-lg-4 d-flex ">
			  <div class="services-wrap d-flex">
				<a
				  href="#"
				  class="img order-lg-last"
				  style="background-image: url(images/pizza-5.jpg);"
				></a>
				<div class="text p-4">
				  <h3>Tomatoe Pie</h3>
				  <p>
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia
				  </p>
				  <p class="price">
					<span>$2.90</span>
					<a href="#" class="ml-2 btn btn-white btn-outline-white"
					  >Order</a
					>
				  </p>
				</div>
			  </div>
			</div>
			<div class="col-lg-4 d-flex ">
			  <div class="services-wrap d-flex">
				<a
				  href="#"
				  class="img order-lg-last"
				  style="background-image: url(images/pizza-6.jpg);"
				></a>
				<div class="text p-4">
				  <h3>Margherita</h3>
				  <p>
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia
				  </p>
				  <p class="price">
					<span>$2.90</span>
					<a href="#" class="ml-2 btn btn-white btn-outline-white"
					  >Order</a
					>
				  </p>
				</div>
			  </div>
			</div> -->

			
		  </div>
		</div>
	</section>
</template>

<script>
import FeaturePizzaItem from '@/partials/FeaturePizzaItem'

export default {
	
	data(){
		return{
			featurePizzas: [
				{id: 1, name: "Italian Pizza", img:"images/pizza-1.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 10 },
				{id: 2, name: "Greek Pizza", img:"images/pizza-2.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 20 },
				{id: 3, name: "Caucasian Pizza", img:"images/pizza-3.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 35 },
				{id: 4, name: "American Pizza", img:"images/pizza-4.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 60 },
				{id: 5, name: "Tomatoe Pie", img:"images/pizza-5.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 8 },
				{id: 6, name: "Margherita", img:"images/pizza-6.jpg", desc:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", price: 5 }
			]
		}
	},
	components: {
		FeaturePizzaItem
	}

}
</script>