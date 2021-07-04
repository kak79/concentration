import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

const CardFront = (props) => {
  
   return (
    
     <Grid item>  
      <Card >
        <CardActionArea>
          <img
            style={{ maxHeight: '150px',  minHeight: '30px', padding: '20px' }}
            alt={props.name}
            src={props.image}
          />
        </CardActionArea>
      </Card>
    </Grid>
    
  
  )


}


export default CardFront;

