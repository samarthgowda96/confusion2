import React, { Component } from 'react'

import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, CardFooter} from 'reactstrap';
 
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    render() {
      console.log(this.props)
        const menu = this.props.dishes.map((dish) => {
          
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    <CardFooter>{dish.description}</CardFooter>
                    <CardFooter><h2>Price</h2> {dish.price}</CardFooter>
                </Card>
                  
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              
                  {menu}
               
            </div>
          </div>
        );
    }
}

export default Menu;