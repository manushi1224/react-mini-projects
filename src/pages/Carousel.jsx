import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const images = [
    "https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1278646/pexels-photo-1278646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1162521/pexels-photo-1162521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

function Carousel() {
    const [count, setCount] = useState(0)
    const [image, setImage] = useState(images[0])

    let c = count;

    const prevSlide = () =>{
        c<1 ? c = 2 : c--;
        setCount(c)
        setImage(images[c])
    }

    const nextSlide = () => {
        c > 1 ? c = 0 : c++;
        setCount(c)
        setImage(images[c]);
    }

    return (
        <>
            <div className="container d-flex justify-content" style={{display:"grid",justifyContent:"center",alignItems: "center",height:"80vh"}}>
                <div onClick={prevSlide} className="me-5">
                    <FaArrowLeft />
                </div>
                <img src={image} alt="not found" style={{
                    height : 300,
                }}/>
                <div onClick={nextSlide} className="ms-5">
                    <FaArrowRight />
                </div>
            </div>
        </>
    )
}

export default Carousel
