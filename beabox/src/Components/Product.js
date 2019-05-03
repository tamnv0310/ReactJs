import React, { Component } from 'react';

class Product extends Component {
  // constructor(props){
  //   super(props);
  //   this.onAddToCart = this.onAddToCart.bind(this);
  // }
  onAddToCart = () => {
    alert(this.props.name + "-" + this.props.price);
  }
  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img alt={this.props.name} src={this.props.image} />
            <div className="caption">
              <h3>{this.props.name}</h3>
              <p>
                  {this.props.price}
            </p>
              <p>
                <a href="" className="btn btn-primary" onClick={this.onAddToCart}>Buy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Product;
