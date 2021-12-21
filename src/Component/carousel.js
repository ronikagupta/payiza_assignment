import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Carousels(props)
{
    const data = [{
        id:0,
        title: 'Avangers',
        description: "Probably the most random thing you have ever seen!",
    img:'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id:1,
        title: 'Prince of Persia',
        description: "Probably the most random thing you have ever seen!",
    img:'https://upload.wikimedia.org/wikipedia/en/6/6f/Prince_of_Persia_-_Warrior_Within_Coverart.png'
        },
        {
            id:2,
            title: 'Counter strike',
            description: "Probably the most random thing you have ever seen!",
        img:'https://upload.wikimedia.org/wikipedia/en/4/43/Counter-Strike_Source_%28box_art%29.jpg'
        },
        {
            id:3,
            title: 'GTA 5',
            description: "Probably the most random thing you have ever seen!",
        img:'https://m.media-amazon.com/images/I/81PR8qtHJJL._SL1500_.jpg'
        },
        {
            id:4,
            title: 'The Witcher',
            description: "Probably the most random thing you have ever seen!",
        img:'https://www.lifewire.com/thmb/vwr6AG-TckO-7YUUkJWRUxlAG9g=/fit-in/1076x1500/filters:no_upscale():max_bytes(150000):strip_icc()/TheWitcher3-WildHunt-5c0fc7754cedfd00012de2d4.jpg'
    }]
  

    return (
        <div style={{width:'100%',marginTop:"-3%"}}>
        <Carousel >
            {
                data.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            </div>
    )
}

function Item(props)

{console.log(props,"data...")
    return (
      
        <div class="image">
        <div class="layer">
        </div>
        <img  src={props.item.img} alt="" style={{    objectFit: 'cover',
        height: '100%',
        width: '100%'}} />
        <div className='carouselData'>
            <h2><span>{props.item.title}</span></h2><br></br>
            <p>{props.item.description}</p>
            <button className='button'>Create Account</button></div>
  
  </div>
     
    )
}
export default Carousels