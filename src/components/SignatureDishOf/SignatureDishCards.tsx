import React from 'react'
import { CardImg, Cards, Name, ResDiv } from '../PopularRestaurants/styles'
import Slider from "react-slick";
import { CardDishs } from '../../interfaces/dish';
import { IconImg } from './styles';
import Restaurants from '../AllRestaurants/Restaurants';
import { useSelector } from 'react-redux';


const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.8,
    slidesToScroll: 1
  }

export default function SignatureDishCards() {

  const dishes = useSelector((state:any) => state.dishes.value);


    return (
        <Cards>
          <br/>
          SIGNATURE DISH OF: <br/><br/>
          <Slider {...settings}>
            {CardDishs.map((dish)=>(
                <ResDiv>
                  <CardImg src={dish.ImgURL} alt=''/>
                  <Name>{dish.name}</Name>
                  <Name>{dish.DishType}</Name>
                  <IconImg src={dish.signature} />
                  <Name>{dish.price}₪</Name>
                </ResDiv>
            ))}
          </Slider>

          {/* <AllRestaurantsTitle> */}
          <Restaurants/>
          {/* </AllRestaurantsTitle> */}
          
          <br/>

        </Cards>
      )
    }
