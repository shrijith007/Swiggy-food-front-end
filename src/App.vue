<template>
<body>
<div class="wrapper">
    <div class="sidebar">
        <h2>Selection Menu</h2>
        <div v-for="element in rd" :key="element.id">
        <ul>
            <li><button  @click="togglecommon(element.category)">{{element.category.toUpperCase()}}</button><p>Results found: {{element.restaurantList.length}}</p></li>
        </ul>
        </div>
        <div>
        <ul>
           <li><button  @click="togglecommon('Swiggy Xclusive')">Swiggy Xclusive</button><p>Results found: {{finalonlyswiggy.length}}</p></li>
            <li><button  @click="togglestoallrestaurants('See All Restaurants')">See All Restaurants</button><p>Results found: {{finalallrestaurant.length}}</p></li>
        </ul>
        </div> 
    </div>

<div class="main_content">
<basecard v-if='switchforallrestaurant'>
<section id="See All Restaurants">
<p >
  <AllRestaurants
  :category="seall"
  :restaurants="finalallrestaurant"
  ></AllRestaurants>
</p>
</section>
</basecard>


<basecard v-if='switchforcommon'>
<section id="popular brands"> 
<div  v-for="element in rd" :key=element.id>
<p v-if= " element.category=== 'popular brands' ">
 <AllRestaurants
  :category="element.category"
  :restaurants="element.restaurantList"
  ></AllRestaurants>
</p>
</div>
</section>
</basecard>

<basecard v-if='switchforcommon'>
<section id="offers near you"> 
<div v-for="element in rd" :key=element.id>
<p v-if= " element.category=== 'offers near you' ">
  <Offersnearyou
  :category="element.category"
  :restaurants="element.restaurantList"
  ></Offersnearyou>
</p>
</div>
</section>
</basecard>

<basecard v-if='switchforcommon'>
<section id="Express delivery">
<div  v-for="element in rd" :key=element.id>
<p v-if= " element.category=== 'Express delivery' ">
<ExpressDelivery
  :category="element.category"
  :restaurants="element.restaurantList"
  ></ExpressDelivery>
</p>
</div>
</section>
</basecard>

<basecard v-if='switchforcommon'>
<section id="Gourmet">
<div  v-for="element in rd" :key=element.id>
<p v-if= " element.category=== 'Gourmet' ">
  <Gourmet
  :category="element.category"
  :restaurants="element.restaurantList"
  ></Gourmet>
</p>
</div>
</section>
</basecard>


<basecard v-if='switchforcommon'>
<section id="Swiggy Xclusive">
  <SwiggyExclusive
  :category="so"
  :restaurants="finalonlyswiggy"
  ></SwiggyExclusive>

</section>
</basecard>


</div>
</div>

</body>


</template>

<script>
import ExpressDelivery from './Components/Express_delivery.vue'
import Gourmet from './Components/Gourmet.vue'
import Offersnearyou from './Components/offers_near_you.vue'
import SwiggyExclusive from './Components/Swiggy_Xclusive.vue'
import AllRestaurants from './Components/AllRestaurants.vue'

export default {
  components: {SwiggyExclusive,Offersnearyou,Gourmet,ExpressDelivery,AllRestaurants},

data(){
  return{
  selectedoption:"",
  tempitems:{},
  name:[],
  tempallrestaurant:[],
  allrestaurant:[],
  onlyswiggy:[],
  finalallrestaurant:[],
  finalonlyswiggy:[],
  switchforcommon:true,
  switchforallrestaurant:false,
  seall:"See All Restaurants",
  so:"Swiggy Xclusive"
  }
},

computed:{
  rd(){
  Object.assign(this.tempitems,this.$store.state.data)
  this.fetchallrestaurant(this.tempitems)
  this.fetchonlyswiggy(this.tempitems)
  console.log(this.tempitems)
  return this.tempitems   
  },
  
  currentid(value){
  const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    this.display(section)
    // const sectionTop = section.offsetTop;
    // const sectionHeight = section.clientHeight;
    // if (pageYOffset >= sectionTop - sectionHeight / 3) {
    //   value = section.getAttribute("id");
    // }
  });
  })
 return value
 },
},
methods: {
    
    togglecommon(id) {  
      this.scroll(id)
  this.switchforcommon=true,
  this.switchforallrestaurant=false
    },
    togglestoallrestaurants() {   
  this.switchforcommon=false,
this.switchforallrestaurant=true
    
    },
    createexclusive(){
      this.exclusives.push(this.seeall())
      return this.exclusives
    },
    fetchallrestaurant(element){
      for (const key1 in element){
        for (const key2 in element[key1].restaurantList){
          this.allrestaurant.push(element[key1].restaurantList[key2])
        } 
      }
      this.finalallrestaurant=this.allrestaurant
   },
 
 fetchonlyswiggy(element){
  for (const key1 in element){
        for (const key2 in element[key1].restaurantList){
          if(element[key1].restaurantList[key2].isExlusive==true){
            this.onlyswiggy.push(element[key1].restaurantList[key2])
          }
        }
      }
      this.finalonlyswiggy=this.onlyswiggy
 },
 scroll(id){
   if(this.switchforallrestaurant!=true)
         document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
 },

    
    
    
    }



}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
}

body{
   background-color: #f3f5f9;
}

.wrapper{
  display: flex;
  position: relative;
}

.wrapper .sidebar{
  width: 210px;
  height: 100%;
  background: rgb(223, 242, 245);
  padding: 30px 0px;
  position: fixed;
  border-radius: 20px;
}

.wrapper .sidebar h2{
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li{
  padding: 25px;
  border-bottom: 10px solid black;
  border-bottom: 10px solid rgba(0,0,0,0.05);
  border-top: 0px solid black(255,255,255,0.05);
  border-radius: 20px;
  color: black;
}    

.wrapper .sidebar ul li button{
 color: black;
 display: block;
 width: 10rem;
 height: 2rem ;
 border-radius: 5px;
 font-size:15px ;
 border:none

}
.wrapper .sidebar ul li button:focus{
 color: rgb(123, 222, 235);
}

.wrapper .sidebar ul li button.active{
 color: grey;
}

.wrapper .sidebar ul li button:hover{
 color: rgb(123, 222, 235);
}


 
.wrapper .main_content{
  width: 100%;
  margin-left: 200px;
}

.wrapper .main_content .header{
  padding: 20px;
  background: #fff;
  color: #717171;
  border-bottom: 1px solid #e0e4e8;
}

.wrapper .main_content .info{
  margin: 20px;
  color: #717171;
  line-height: 25px;
   margin: 50px;
}

.wrapper .main_content .info div{
  margin-bottom: 20px;
 
}

h1{
padding: 10px;
}
p{
  padding: 5px;
}
</style>