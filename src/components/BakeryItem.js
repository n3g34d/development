import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import "./BakeryItem.css";
import { useState } from 'react';

function BakeryItem(props) {
    

    const onClick = () => {
        {props.setCartTotal((count) => count + props.price)}
        {props.cart.push(props.name)}
        
    }


    const onClickRemove = () => {
        
        var idx = props.cart.indexOf(props.name);
        
        console.log(idx)
        if( idx == 0 && props.cart.length == 1){
            props.setCart([])
            {props.setCartTotal((count) => count - props.price)}
        }
        else if( idx == 0 && props.cart.length > 1){
            const newCart = props.cart.shift()
            props.setCart(props.cart)
            {props.setCartTotal((count) => count - props.price)}
        }
        else if( idx != -1) {
            var removed = props.cart.splice(idx,1); 
            props.setCart(props.cart)
            {props.setCartTotal((count) => count - props.price)}
        }  
        else{
            
        }
    }    
        //return <h1>Hello World</h1>
        return  <div  className="container_item">
            <p>{props.name}</p>
            <p>Price: {props.price} Rating: {props.rating}</p>
            <img className="image_item" src={props.image} style={{ width: '40%' }}></ img>
            <p></p>
            <Button onClick = {onClick} variant="primary">Add to Cart</Button>{' '}
            <Button onClick = {onClickRemove} variant="primary">Remove from Cart</Button>{' '}
            
            </div>
    }


export default BakeryItem;