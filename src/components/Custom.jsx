import React, { useState } from "react";
import { Form } from "react-router-dom";

const Product = (props) => {

    const [count, setCount] = useState(0)

    function handleClick (){
        count < 10 ? setCount(c => c+1) : <p1>you can not add more!</p1>
    }
    function handleClickDec (){
        setCount(c => c-1)
    }

    return (
        <>
            <div className="col-4">
                <h1>{props.main.name}</h1>
                <img src={props.main.path} style ={{width: '50%'}}/>
                <h5>{props.main.price}</h5>
                <h5>{props.main.desc}</h5>
                <button className="btn" onClick={handleClick}>ADD</button>
                <button className="btn" onClick={handleClickDec}>DEC</button>
                <h5>Quantity : {count}</h5>
            </div>
        </>
    )
}

function Custom() {
    const product = [
        {
            'name': 'Bike',
            'path': 'https://5.imimg.com/data5/JV/EK/MY-44176509/ktm-rc-390-power-bike-1000x1000.jpg',
            'price': '$100',
            'desc': 'description'
        },
        {
            'name': 'Bike',
            'path': 'https://5.imimg.com/data5/JV/EK/MY-44176509/ktm-rc-390-power-bike-1000x1000.jpg',
            'price': '$100',
            'desc': 'description'
        },
        {
            'name': 'Bike',
            'path': 'https://5.imimg.com/data5/JV/EK/MY-44176509/ktm-rc-390-power-bike-1000x1000.jpg',
            'price': '$100',
            'desc': 'description'
        },
    
    ]
    return (
        <>
            <div className="container row">
                {product.map((pr) => {
                    return <Product main={pr} />
                })}
            </div>
        </>
    )
}

export default Custom