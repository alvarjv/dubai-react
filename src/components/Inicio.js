import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Inicio extends Component {
  render() {
    return (
      <Sec1wrapper>
        <div className="jumbotron jumbotron-fluid banner" id="slide">
          <div className="container" align="center">
            <div className="contentBox h100">
              <div> 
                <h1>Salones de Fiestas</h1>
                <p> <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </b></p>
                <button className="button button4"><b>Nosotros ...</b></button>
              </div>
            </div>
          </div>
        </div>

        <section className="sec1" align="center" id="Nosotros">
          <div className="container">
            <div className="row" align="center">
              <div className="col-md-auto">
                <div className="headerText text-center">
                  <h1>NUESTRA PROPUESTA DE VALOR</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="placeBox">
                  <div className="imgBx">
                    <img src="img/imgq02.jpg" className="img-fluid"></img>
                  </div>
                  <div className="content" align="center">
                    <h5>Quinceañeras</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="placeBox">
                  <div className="imgBx">
                    <img src="img/imgm02.jpg" className="img-fluid"></img>
                  </div>
                  <div className="content" align="center">
                    <h5>Matrimonios</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="placeBox">
                  <div className="imgBx">
                    <img src="img/imgs02.jpg" className="img-fluid"></img>
                  </div>
                  <div className="content" align="center">
                    <h5>Eventos</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" align="center">
              <div className="offset-sm-2 col-sm-8">
                <button className="button button5"><b>Portafolio ...</b></button>
                </div>
              </div>
          </div>
        </section>

        <section className="sec2" align="center" id="Presupuesto">
          <div className="container">
            <div className="row" align="center">
              <div className="offset-md-auto">
                <div className="headerText text-center">
                  <h1>PRESUPUESTA TU FIESTA </h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="placeBox">
                  <div className="imgBx">
                    <img src="img/product-1.png" className="img-fluid"></img>
                  </div>
                  <div className="content" align="center">
                    <h5>Quinceañeras</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="placeBox">
                  <div className="imgBx">
                    <img src="img/product-2.png" className="img-fluid"></img>
                  </div>
                  <div className="content" align="center">
                    <h5>Matrimonios</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="placeBox">
                  <div className="imgBx">
                    <img src="img/product-3.png" className="img-fluid"></img>
                  </div>
                  <div className="content" align="center">
                    <h5>Eventos</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="placeBox">
                  <div className="imgBx">
                    <img src="img/product-4.png" className="img-fluid"></img>
                  </div>
                  <div className="content" align="center">
                    <h5>Reuniones</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" align="center">
              <div className="offset-sm-2 col-sm-8">
                <button className="button button5"><b>Presupuestar ...</b></button>
                </div>
              </div>
          </div>
        </section>
      </Sec1wrapper>

    )
  }
}

const Sec1wrapper = styled.div `

* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.banner{
  background: url('img/ban003.jpg') no-repeat center center;
      background-size: cover;
      padding-top: 20%;
      padding-bottom: 15%;
}

.content-Box {
position:relative;
display:flex;
justify-content:center;
align-items:center;

}

.contentBox h1 {
  color:#fff;
  font-size:4.5rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px #000000;
}

.contentBox p {
  color:#fff;
  font-size:1.4rem;
  text-shadow: 1px 1px 1px #000000;
}

.button-position {
  color:#fff;
}

.button {
  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px;
}

.button4 {
  background-color: transparent;
  color: #000;
  border: 1px solid #555555;
  text-shadow: 1px 1px 1px #000000;
}

.button5 {
  background-color: transparent;
  color: black;
  border: 1px solid #555555;
}

.button4:hover, 
.button5:hover {
color:#333;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.sec1, sec2{
  padding: 100px 0;
  background:#white;
}

.headerText h1{
  color:#555;
  text-shadow: 2px 2px 4px #000000;
}

.headerText p{
  color:gray;
  font-size:1.4rem;
}


`
