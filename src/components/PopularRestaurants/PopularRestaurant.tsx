import React, { Component, useState} from 'react'
import { Cards, ResDiv, CardImg, Name} from './styles';
import Slider from "react-slick";
// import { AllRestaurants } from '../../interfaces/restaurants';
import { useSelector } from 'react-redux';



export default function PopularRestaurant() {

 const restaurants = useSelector((state:any) => state.restaurants.value);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.8,
    slidesToScroll: 1
  }

  return (

    <Cards>
      <br/>
      POPULAR RESTURANT IN EPICURE: <br/><br/>
        <Slider {...settings}>
        {restaurants.map((restaurants:any, key:number, index:number)=>(
          // (index < 3) &&
            <ResDiv>
              <CardImg src={restaurants.URLImage} alt=''/>
              <Name>{restaurants.name}</Name>
              <Name>{restaurants.chefName}</Name>
            </ResDiv>
        ))}
      </Slider>  
    </Cards>
  )
}



