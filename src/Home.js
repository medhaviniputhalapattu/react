import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from './Image/1.jpg';
import Img2 from './Image/2.jpg';
import Img3 from './Image/3.jpg';
import Img5 from './Image/5.jpg';
import './App.css'; 
import './index.css';


import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-3 col-xs-2 col-lg-3">
              <Card className={"root"}>
                    <CardActionArea>
                       <img src= {Img} alt="pic"  width={500} height={300} mode='fit'  />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                              Alovera         
                         </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                       Aloe vera is a stemless or very short-stemmed plant growing to 60–100 centimetres (24–39 inches) tall, spreading by offsets.
                       </Typography>
                   </CardContent>
                    </CardActionArea>
                <CardActions>
                  <Button  className="button">
                     Share
                    </Button>
                  <Button  className="button">
                    Add To Cart
                   </Button>
                </CardActions>
            </Card>
            </div>

            <div className="card col-md-3 col-xs-2 col-lg-3">
              <Card className={"root"}>
                    <CardActionArea>
                       <img src= {Img2} alt="pic"  width={500} height={300} mode='fit'  />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                              Money Plant        
                         </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                       Money plant is an evergreen vine growing to 400 m (1,312 ft) tall, with stems up to 4 cm (2 in) in diameter, climbing by means of aerial roots which adhere to surfaces.
                       </Typography>
                   </CardContent>
                    </CardActionArea>
                <CardActions>
                  <Button className="button">
                     Share
                    </Button>
                  <Button  className="button">
                    Add To Cart
                   </Button>
                </CardActions>
            </Card>
            </div>
            <div className=" card col-md-3 col-xs-2 col-lg-3">
              <Card className={"root"}>
                    <CardActionArea>
                       <img src= {Img3} alt="pic"  width={500} height={300} mode='fit'  />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                              Bamboo Palm        
                         </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                                         A great air-purifying plant for indoor spaces and offices. Growing conditions: Moist well drained soil.
                       </Typography>
                   </CardContent>
                    </CardActionArea>
                <CardActions>
                  <Button  className="button">
                     Share
                    </Button>
                  <Button  className="button">
                    Add To Cart
                   </Button>
                </CardActions>
            </Card>
            </div>
            <div className=" card col-md-3 col-xs-2 col-lg-3">
              <Card className={"root"}>
                    <CardActionArea>
                       <img src= {Img5} alt="pic"  width={500} height={300} mode='fit'  />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Dracaena corn plant         
                         </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                       The dracaena corn plant is easy to maintain, and with its yellow and green leaves, it can brighten up your living space.
                       </Typography>
                   </CardContent>
                    </CardActionArea>
                <CardActions>
                  <Button className="button" >
                     Share
                    </Button>
                  <Button  className="button" >
                    Add To Cart
                   </Button>
                </CardActions>
            </Card>
            </div>
            </div>
            </div>
    );
  }
}
 
export default Home;
