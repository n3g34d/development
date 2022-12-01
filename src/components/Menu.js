//import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function Menu(props){
    //list group or list of buttons representing sort or filter or favorites, app handles the click functionality 
    
    const unCheckFunction = () => {
        props.setIsChecked([false, false, false, false, false]) 
        props.setType("None") 
        props.setCount(0)
        props.setFlavor("Neither")
        props.setFlavorCount(0)
        props.setSorted(props.bakeryData)
        props.setCart([])
        props.setCartTotal( 0 )
        props.setRadioCheck([false, false])
     }

        return (
        

        <div>
        <p>Sort By:</p>
        <input checked = {props.radioCheck[0]} type="radio" value="price" name="sort" onChange={props.handleSort}/> Price (Ascending)
        <input checked = {props.radioCheck[1]} type="radio" value="rating" name="sort" onChange={props.handleSort}/> Rating (Descending)
        <p>Filter By Type:</p>
        <input checked = {props.checked[0]} type="checkbox" value="Cookie" name="type" onChange={props.handleTypeChange}/> Cookies
        <input checked = {props.checked[1]} type="checkbox" value="Cake" name="type" onChange={props.handleTypeChange} /> Cake
        <input checked = {props.checked[2]} type="checkbox" value="Pie" name="type" onChange={props.handleTypeChange}/> Pie
        <p></p>
        <p>Filter By Flavor:</p>
        <input checked = {props.checked[3]} type="checkbox" value="chocolate" name="flavor" onChange={props.handleFlavorChange}/> Chocolate
        <input checked = {props.checked[4]} type="checkbox" value="non-chocolate" name="flavor" onChange={props.handleFlavorChange}/> Non-Chocolate
        <p></p>
        <Button onClick = {unCheckFunction} variant="secondary">Reset</Button>{' '}
        </div>
          );
    }


export default Menu;