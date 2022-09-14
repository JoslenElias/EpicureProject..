import React, { useState } from 'react'
import {  Restaurant, SlideColumn, Btn, PagesName } from './styles';
import { Navigate, useNavigate } from 'react-router-dom';
import Restaurants from './Restaurants';


export default function AllRestaurants() {
  const [restaurants, setRestaurants] = useState('All Restaurants');

  return (
    <div>
    <SlideColumn>
    <Btn><PagesName>All</PagesName></Btn>
    <Btn><PagesName>New</PagesName></Btn>
    <Btn><PagesName>Most Popular</PagesName></Btn>
    <Btn><PagesName>Open Now</PagesName></Btn>
  </SlideColumn>

    <Restaurant>
    </Restaurant>
  </div>
  )
}