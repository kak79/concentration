import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';



 
const CardFront = (props) => {
  const theme = useTheme();
  

  return (
    <div>
      <Grid container>
        <Grid item container direct='row' justify='space-evenly'>
          <Grid item>
            <Card>
              <CardActionArea>
                <img
                  style={{ height: "" ? "300px" : "50px"}}
                  src='https://i.pinimg.com/736x/d6/0c/7e/d60c7e8983fdbd7c7a27fd42fb3d61ba.jpg'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardActionArea>
                <img
                  style={{ height: "" ? "300px" : "50px"}}
                  src='https://static.india.com/wp-content/uploads/2015/11/089-414x246.jpg'
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )


}


export default CardFront;

