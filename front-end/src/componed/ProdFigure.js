import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



const ProdFigure = ({_id,image,nameProdut}) => {

    const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="190"
        alt="green iguana"
        src={`http://localhost:3000/${image[0]}`}
        onClick={()=>navigate(`/detail/${_id}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
         {nameProdut}
        </Typography>
        
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default ProdFigure