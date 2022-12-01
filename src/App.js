
import './App.css';
import BakeryItem from './components/BakeryItem.js';
import Menu from './components/Menu.js';
//import bakeryData from "./assets/bakery-data.json";
import cc from './images/cc.jpeg'
import candc from './images/cookiescream.jpeg'
import smores from './images/smores.jpeg'
import pb from './images/pbcook.jpeg'
import ccake from './images/ccake.jpeg'
import strawberry from './images/strawberry.jpeg'
import vanilla from './images/vanilla.jpeg'
import carrot from './images/carrot.jpeg'
import apple from './images/apple.jpeg'
import coconut from './images/coconut.jpeg'
import banana from './images/banana.jpeg'
import rhubarb from './images/rhubarb.jpeg'
import { useState } from 'react';


export default function App() {
    const bakeryData =  [
      {
              name: "Chocolate Chip Cookie",
              price: 3,
              image: cc,
              rating: "4.8",
              category: "Cookie",
              id: "1",
              flavor: "chocolate"
            },
            {
              name: "Cookies and Cream Cookie",
              price: 3.50,
              image: candc,
              rating: "5",
              category: "Cookie",
              id: "2",
              flavor: "chocolate"
            },
            {
              name: "S'mores Cookie",
              price: 3,
              image: smores,
              rating: "4.7",
              category: "Cookie",
              id: "3",
              flavor: "chocolate"
            },
            {
              name: "Peanut Butter Chocolate Cookie",
              price: 3.50,
              image: pb,
              rating: "4.2",
              category: "Cookie",
              id: "4",
              flavor: "chocolate"
            },
            {
              name: "Chocolate Cake Slice",
              price: 6,
              image: ccake,
              rating: "4.4",
              category: "Cake",
              id: "5",
              flavor: "chocolate"
            },
            {
              name: "Strawberries and Cream Cake Slice",
              price: 6,
              image: strawberry,
              rating: "4.8",
              category: "Cake",
              id: "6",
              flavor: "non-chocolate"
            },
            {
              name: "Vanilla Rasberry Cake Slice",
              price: 5.50,
              image: vanilla,
              rating: "4.2",
              category: "Cake",
              id: "7",
              flavor: "non-chocolate"
            },
            {
              name: "Carrot Cake Slice",
              price: 5,
              image: carrot,
              rating: "3.2",
              category: "Cake",
              id: "8",
              flavor: "non-chocolate"
            },
            {
              name: "Apple Pie Slice",
              price: 7,
              image: apple,
              rating: "4.9",
              category: "Pie",
              id: "9",
              flavor: "non-chocolate"
            },
            {
              name: "Coconut Cream Pie Slice",
              price: 6.50,
              image: coconut,
              rating: "4.7",
              category: "Pie",
              id: "10",
              flavor: "non-chocolate"
            },
            {
              name: "Banana Cream Pie Slice",
              price: 6.50,
              image: banana,
              rating: "4",
              category: "Pie",
              id: "11",
              flavor: "non-chocolate"
            },
            {
              name: "Strawberry Rhubarb Pie Slice",
              price: 7,
              image: rhubarb,
              rating: "4.6",
              category: "Pie",
              id: "12",
              flavor: "non-chocolate"
            }
    ]
    const [type, setType] = useState("None"); //filtering
    const [count, setCount] = useState(0); //filteting
    const [flavor, setFlavor] = useState("Neither"); //filtering
    const [flavorCount, setFlavorCount] = useState(0); //filtering
    const [sorted, setSorted] = useState(bakeryData); //sorting
    const [cart, setCart] = useState([]); //bakeryitem
    const [cartTotal, setCartTotal] = useState(0); //bakeryitem
    const [checked, setIsChecked] = useState([false, false, false, false, false]); //menu
    const [radioCheck, setRadioCheck] = useState([false, false]) //menu
    
    
  
   
  const handleTypeChange = event => {
    if(count == 3 && event.target.checked == false) { //if everything is selected and one is unselected
      if(event.target.value == "Cookie"){
        setType("Cake and Pie")
        checked[0] = false
      }
      else if(event.target.value == "Cake") {
        setType("Cookie and Pie")
        checked[1] = false
      }
      else if(event.target.value == "Pie") {
        console.log("expected remove pie")
        setType("Cake and Cookie")
        checked[2] = false
      }
      setCount(2)
    }
    else if (count == 2 && event.target.checked == false) {
      if(event.target.value == "Cookie" && type == "Cookie and Pie"){
        setType("Pie")
        checked[0] = false
      }
      else if(event.target.value == "Cookie" && type == "Cake and Cookie") {
        setType("Cake")
        checked[0] = false
      }
      else if(event.target.value == "Cake" && type == "Cake and Cookie") {
        setType("Cookie")
        checked[1] = false
      }
      else if(event.target.value == "Cake" && type == "Cake and Pie") {
        setType("Pie")
        checked[1] = false
      }
      else if(event.target.value == "Pie" && type == "Cake and Pie") {
        setType("Cake")
        checked[2] = false
      }
      else if(event.target.value == "Pie" && type == "Cookie and Pie") {
        setType("Cookie")
        checked[2] = false
      }
      setCount(1)
    }
    else if (count == 1 && event.target.checked == false) {
      setType("None") //should be empty
      setCount(0)
      checked[0] = false
      checked[1] = false
      checked[2] = false
    }
    else if (count == 2 && event.target.checked == true) {
      setType("All")
      setCount(3)
      checked[0] = true
      checked[1] = true
      checked[2] = true
    }
    else if( count == 1 && event.target.checked == true) {
      if(event.target.value == "Cookie" && type == "Cake"){
        setType("Cake and Cookie")
        checked[0] = true
      }
      else if(event.target.value == "Cookie" && type == "Pie") {
        setType("Cookie and Pie")
        checked[0] = true
      }
      else if(event.target.value == "Cake" && type == "Cookie") {
        console.log("expected")
        setType("Cake and Cookie")
        checked[1] = true
      }
      else if(event.target.value == "Cake" && type == "Pie") {
        setType("Cake and Pie")
        checked[1] = true
      }
      else if(event.target.value == "Pie" && type == "Cookie") {
        setType("Cookie and Pie")
        checked[2] = true
      }
      else if(event.target.value == "Pie" && type == "Cake") {
        setType("Cake and Pie")
        checked[2] = true
      }
      setCount(2)
    }
    else if( count == 0 && event.target.checked == true) {
      if(event.target.value == "Cookie"){
        setType("Cookie")
        checked[0] = true
      }
      else if(event.target.value == "Pie"){
        setType("Pie")
        checked[2] = true
      }
      else if(event.target.value == "Cake"){
        setType("Cake")
        checked[1] = true
      }
      
      setCount(1)
    }
    
    else {
    }
    };

    
    const handleFlavorChange = event => {
      if(flavorCount == 2 && event.target.checked == false) {
        if(event.target.value == "chocolate") {
          setFlavor("non-chocolate")
          setFlavorCount(1)
          checked[3] = false
        }
        else if(event.target.value == "non-chocolate") {
          setFlavor("chocolate")
          setFlavorCount(1)
          checked[4] = false
        }
      }
      else if(flavorCount == 1 && event.target.checked == false) {
        setFlavor("none")
        setFlavorCount(0)
        checked[3] = false
        checked[4] = false
      }
      else if(flavorCount == 0 && event.target.checked == true) {
        if(event.target.value == "chocolate"){
          setFlavor("chocolate")
          checked[3] = true
        }
        else if(event.target.value == "non-chocolate"){
          setFlavor("non-chocolate")
          checked[4] = true
        }
        setFlavorCount(1)
      }
      else if(flavorCount == 1 && event.target.checked == true) {
        setFlavor("both")
        setFlavorCount(2)
        checked[3] = true
        checked[4] = true
      }
    };

    const matchesFilterType = item => {
      if(count == 3) { //they're all checked
        return false
      } 
      else if (count == 2) { //two are checked
        return false
      } 
      else if(count == 0){ //everything is shown
        return true
      }
      else if(count == 1){
        if(type == item.category) {
          return true
        }
        else {
          return false
        }
      }
      else {
        return false
      }
    }    

    const matchesFlavorType = item => {
      if(flavorCount == 2) { 
        return false
      } else if (flavorCount == 0) {
        return true
      } else if (flavorCount == 1){
        if(flavor == item.flavor){
        return true
        }
      }
      else {
        return false
      }
    }    
 
    const sortedArray = sorted //sorted is updated on state
    const filteredData = sorted.filter(matchesFilterType)
    const filteredDataTwo = filteredData.filter(matchesFlavorType)
    
    const handleSort = event => {
      console.log("handled")
      if(event.target.value == "rating"){
        const updateSort = filteredDataTwo.sort(function(a, b){return b.rating - a.rating});
        setSorted(updateSort)
        setRadioCheck([false, true])
      }
      else if(event.target.value = "price") {
        const updateSort = filteredDataTwo.sort(function(a, b){return a.price - b.price});
        setSorted(updateSort)
        setRadioCheck([true, false])
      }
      else{
      }
      
    }
    
    
    
    return ( <div>
      <h1>Yummy Bakery</h1>
      <Menu setType={setType} radioCheck={radioCheck} setRadioCheck={setRadioCheck} bakeryData={bakeryData} setCount={setCount} setFlavor={setFlavor} setFlavorCount= {setFlavorCount} setSorted={setSorted} setCart={setCart} setCartTotal= {setCartTotal} setIsChecked = {setIsChecked} checked = {checked} handleSort={handleSort} handleTypeChange={handleTypeChange} handleFlavorChange={handleFlavorChange}/>
      {filteredDataTwo.map(item => ( 
    <BakeryItem id = {item.id} rating={item.rating} cartTotal = {cartTotal} setCart = {setCart} cart = {cart} setCartTotal = {setCartTotal} image={item.image} name={item.name} price={item.price}/>
  ))}
  <div>
        <h2>Cart</h2>
        <ul>
        {cart.map(i => (<p>{i}</p>))}
        <p>Total: ${cartTotal}</p>
        </ul>
        

      </div>
  </div> );
  
}





