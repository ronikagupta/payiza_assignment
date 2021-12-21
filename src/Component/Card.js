import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useState } from 'react';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function GameCard(props) {
    const data = [{
        id:0,
        title: 'Avangers',
    img:'https://upload.wikimedia.org/wikipedia/en/c/c0/Avengers_2020_cover_art.png'
    },
    {
        id:1,
        title: 'Prince of Persia',
    img:'https://upload.wikimedia.org/wikipedia/en/6/6f/Prince_of_Persia_-_Warrior_Within_Coverart.png'
        },
        {
            id:2,
            title: 'Counter strike',
        img:'https://upload.wikimedia.org/wikipedia/en/4/43/Counter-Strike_Source_%28box_art%29.jpg'
        },
        {
            id:3,
            title: 'GTA 5',
        img:'https://m.media-amazon.com/images/I/81PR8qtHJJL._SL1500_.jpg'
        },
        {
            id:4,
            title: 'The Witcher',
        img:'https://www.lifewire.com/thmb/vwr6AG-TckO-7YUUkJWRUxlAG9g=/fit-in/1076x1500/filters:no_upscale():max_bytes(150000):strip_icc()/TheWitcher3-WildHunt-5c0fc7754cedfd00012de2d4.jpg'
        }]
    const [db, setdb] = useState(data)
    
    console.log(props.srch,"data........")
    const styles = {
        media: {
           height: 0,
            paddingTop: '100%' // 16:9
           
        },
        card: {
            position: 'relative',
            overflow: 'hidden'
            
        },
        overlay: {
           position: 'absolute',
           top: '50%',
           left: '35%',
            color: 'black',
            backgroundColor: '',
           color:'white'
        }
    }
  


    useEffect(() => {
        if (props.srch) {
            const result = db.filter(word => word.title.toLocaleLowerCase() == props.srch.toLocaleLowerCase());
        setdb(result)
 
        }
        else {
            setdb(data)
        }
        // console.log(data,"dfdfd");
       
    }, [props.srch])
   
    return (
        <Grid style={{marginTop:'4%'}}  container spacing={1}>
        
            {db.map((c) => <Grid item ><div className="gamecard"><Card  style={styles.card} sx={{ maxWidth: 193, maxHeight: 250 }}>
            <div class="layer">
            </div>
          <img src={c.img} style={{    objectFit: 'cover',
            height: '100%',
            width: '100%'}}></img>
    <div style={styles.overlay}>
      <b>{c.title}</b> 
    </div>
    </Card></div> </Grid>)}
                    </Grid>

     
      
  );
}
