import React from 'react'
import Slider from "react-slick";
import { CardImg, Cards, Name, ResDiv } from '../PopularRestaurants/styles';
 import { Title, YossiImg} from './styles';
import { AllRestaurants } from '../../interfaces/restaurants';
import { useSelector } from 'react-redux';


const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.8,
  slidesToScroll: 1
}

export default function ChefOfTheWeek() {

  const chefs = useSelector((state:any) => state.chefs.value);


  return (

    <Cards>
      <br/>
      CHEF OF THE WEEK: <br/><br/>
      <YossiImg/>
      <Title>Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.</Title>
      <br/>
      <Slider {...settings}>
        {AllRestaurants.map((chef)=>(
            <ResDiv>
              <CardImg src={chef.URLImage} alt=''/>
              <Name>{chef.name}</Name>
              <Name>{chef.ChefName}</Name>
            </ResDiv>
        ))}
      </Slider>
      <br/>
    </Cards>
  )
}