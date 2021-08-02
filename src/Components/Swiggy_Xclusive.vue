<template>

<div class="main-container">
  <div>
  <div class="heading">
    <h1 class="heading__title">{{category.toUpperCase()}}</h1>
  </div>
  
  <div class="cards" v-if="preview">
    <div v-for="restaurant in previewRestaurants" :key='restaurant.id'>
    <div v-if='checkid(restaurant.id)' class="card">
    <img class="restaurant" :src="restaurant.image">
        <div v-if="restaurant.ratings!=''">
         <h2 class="card__title">{{restaurant.name}} <p class="features"> {{restaurant.ratings}}<img class="star" src="https://img.icons8.com/material-rounded/24/000000/star--v1.png"/>
           {{restaurant.delivery_time}} <img class='clock' src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png"/> </p>
         </h2>
        </div>
        <div v-if="restaurant.ratings ===''">
         <h2 class="card__title">{{restaurant.name}} <p class="features">`` <img class="star" src="https://img.icons8.com/material-rounded/24/000000/star--v1.png"/>  {{restaurant.delivery_time}} <img class='clock' src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png"/></p></h2>
        </div>     
    <p class="price">₹ {{restaurant.price_for_two}} (for two)</p>
    <div v-for="foodtypes in restaurant.food_types" :key=foodtypes.id>
    <ul>
        <li><p class="foodtype">{{foodtypes}}</p> </li>
        </ul>
    </div>
      <p  class="card__apply">
        <a class="card__link" href="#">Check out</a>
      </p>
    </div>


    <div v-if='!checkid(restaurant.id)' class="card">
      <img class="restaurantseemore" :src="restaurant.image">
      <h2 class="card__title">See {{Restaurants.length - previewRestaurants.length}} more results </h2>
      <p class="card__apply">
        <button class="card__link" type="button" @click="changeview" >Show more<i class="fas fa-arrow-right"></i></button >
      </p>
    </div>
    </div>
    </div>

  <div class="cards" v-if="showmore">
    <div v-for="restaurant in Restaurants" :key='restaurant.id'>
    <div class="card">
        <p>{{restaurant.id}}</p>
      <img class="restaurant" :src="restaurant.image">
        <div v-if="restaurant.ratings!=''">
         <h2 class="card__title">{{restaurant.name}} <p class="features"> {{restaurant.ratings}}<img class="star" src="https://img.icons8.com/material-rounded/24/000000/star--v1.png"/>
           {{restaurant.delivery_time}} <img class='clock' src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png"/> </p>
         </h2>
        </div>
        <div v-if="restaurant.ratings ===''">
         <h2 class="card__title">{{restaurant.name}} <p class="features">`` <img class="star" src="https://img.icons8.com/material-rounded/24/000000/star--v1.png"/>  {{restaurant.delivery_time}} <img class='clock' src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png"/></p></h2>
        </div>
    <p class="price">₹ {{restaurant.price_for_two}} (for two)</p>
    <div v-for="foodtypes in restaurant.food_types" :key=foodtypes.id>
    <ul>
        <li><p class="foodtype">{{foodtypes}}</p> </li>
        </ul>
    </div>
      <p  class="card__apply">
        <a class="card__link" href="#">Check out</a>
      </p>
    </div>
    </div>
  </div> 
  
</div>
</div>
</template>

<script>
export default{
    props:["restaurants","category"],
    data(){
      return{
        Restaurants:this.restaurants,
        PreviewRestaurants:[],
        preview:true,
        showmore:false,
        images:["https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60"]


      }
    },
    computed:{
      
    previewRestaurants(){
      return  this.creatingpreviewRestaurant()
    }
    },
    methods:{
      creatingpreviewRestaurant(){
        for (let i=0;i<this.Restaurants.length;i++){
        var randomNum = Math.floor(Math.random() * this.images.length);
          this.Restaurants[i]["ids"]=i
          this.Restaurants[i]["image"]=this.images[randomNum]
        }
        for(let i=0;i<6;i++ ){
           this.PreviewRestaurants.push(this.Restaurants[i])
        }
        console.log
       return  this.PreviewRestaurants
      },
      checkid(id){
        if(id===5){
          return false
        }
        else{
          return true
        }
      },
      changeview(){
        this.preview=false,
        this.showmore=true
      }
      
    }

}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.main-container {
  padding: 30px;
}


.heading {
  text-align: center;
}

.heading__title {
  font-weight: 600;
}

.heading__credits {
  margin: 10px 0px;
  color: #888888;
  font-size: 25px;
  transition: all 0.5s;
}

.heading__link {
  text-decoration: none;
}

.heading__credits .heading__link {
  color: inherit;
}

/* CARDS */

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
img.star{
  width: 15px;
  padding: 2px;
}

.card {
  margin: 10px;
  padding: 10px;
  width: 400px;
  min-height: 220px;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

a{
    border:black;
    border-style: solid;
    border-radius: 5px;
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}
p .price{
  padding-bottom:5px ;
  margin-top:4px ;
}
.card__link {
  position: relative;
  text-decoration: none;
  color: black;
}

img.restaurant{
  border-radius:20px ;
  width: 150px;
  height: 150px;
  margin-left: 14.5rem;
  margin-top:3.5rem ;
}

.card__link::after {
  position: absolute;
  top: 25px;
  left: 0;
  content: "";
  width: 0%;
  height: 3px;
  background-color:black;
  transition: all 0.5s;
  
}

.card__link:hover::after {
  width: 100%;
}
.card__title {
  grid-row: 2/4;
  font-weight: 400;
  color: black;
  font-size: 20px;
}

.card__apply {
  grid-row: 4/5;
  align-self: center;
  
  color: rgb(166, 247, 243);
}

img.clock{
  width: 12px;
  padding: 2px;

}
img.restaurantseemore{
   border-radius:20px ;
  width: 200px;
  height: 200px;
  margin-left: 11.5rem;
}
button{
  background: rgb(204, 229, 238);
  border: black;
  border-style:solid;
  border-radius: 5px;
  font-size: 18px;
}
.card {
  background: radial-gradient (white);
}

li{
  list-style:none;
  display: inline;
  
}
p.features{
 font-size:17px ;
 padding-left: 2%; 
 margin: 4px;
}
p.foodtype{
  background: rgb(156, 228, 238);
  width: 83px;
  border-radius:5px ;
  padding: 2px;
  margin: 2px;
  
  display: inline-block;
}
/* RESPONSIVE */

@media (max-width: 1600px) {
  .cards {
    justify-content: center;
  }
}

</style>