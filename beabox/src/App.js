import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "1",
          name: "Apple Iphone Xs Max",
          price: "1000$",
          image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-max-silver-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409264",
          status: true
        },
        {
          id: "2",
          name: "Samsung Galaxy s10 plus",
          price: "1000$",
          image: "https://www.91-img.com/pictures/128392-v7-samsung-galaxy-s10-plus-mobile-phone-large-1.jpg",
          status: true
        },
        {
          id: "3",
          name: "Apple Iphone Xs Max",
          price: "1000$",
          image: "https://cdn.tgdd.vn/Products/Images/42/177768/bphone-3-black-400x460.png",
          status: false
        }
      ],
      isActive: true
    };
  }
  onChangeButton = () =>{
    this.setState({
      isActive : !this.state.isActive
    })
  }
  // onClick() {
  //   console.warn('click');

  // }
  // onAddProduct = () => {
  //   alert(this.refs.name.value)
  // }
  render() {

    let elements = this.state.products.map((product, index) => {
      if (product.status === true) {
        return <tr key={index}>
          <td>{index}</td>
          <td>{product.name}</td>
          <td>
            <span className="label label-success">{product.price}</span>
          </td>
        </tr>
      }
    });

    return (
      <div>
        <div>
          <nav className="navbar navbar-default" role="navigation">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" >Title</a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a >Link</a></li>
                <li><a >Link</a></li>
              </ul>
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><a >Link</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a >Action</a></li>
                    <li><a >Another action</a></li>
                    <li><a >Something else here</a></li>
                    <li><a >Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>{/* /.navbar-collapse */}
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div className="row">
              {/* <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      Thêm sản phẩm
                    </div>
                    <div className="form-group">
                      <label>Tên sản phẩm</label>
                      <input type="text" className="form-control" placeholder="Nhập tên sản phẩm" ref="name" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Lưu</button>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {elements}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <button type="button" className="btn btn-danger" onClick={this.onClick}>Click me!</button>
                </div>
              </div> */}
              <div>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên sản phẩm</th>
                      <th>Gía</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elements}
                  </tbody>
                </table>
                
                <button type="button" className="btn btn-default" onClick={this.onChangeButton}>Value : {this.state.isActive === true ? 'true': 'false'}</button>
                
              </div>
            </div>

          </div>
        </div>
      </div>

    )
  };
}

export default App;
