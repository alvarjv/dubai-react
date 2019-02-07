import React, { Component } from 'react';
import styled from 'styled-components';
/* import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/
/* import { faStroopwafel, faAngry, faGem, faCheckCircle, faFacebook } from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faLinkedin, faGithub, facebook } from '@fortawesome/fontawesome-free-brands';
*/
export default class Footer extends Component {
  render() {
    return (
        <FooterWrapper>
            <footer>
            <div className="jumbotron banner" id="footers">
            <div className="container">
                <div className="row" align="center">
                    <div className="offset-sm-1 col-sm-10">
                    <ul className="sci">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                    <p className="cpryt">Copyright 2019 Banquetes Dubai | Template by <a href="#">Scitic S.A.S.</a></p> 
                    </div>
                </div>
            </div>
            </div>
            </footer>
        </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.nav`

.jumbotron {
      position:relative;
      top:100px;
      bottom:10px;
      background: #678056;
      background-size: cover;
      padding-top: 1%;
      padding-bottom: 0%;
      justify-content:center;
     
      max-height: 100px;
      
}

.container {
    position:relative;
    justify-content:center;
    align-items:center;
}
.footer {
background:#fff;
pading: 0px 0 0;
}

.sci {
    margin:0;
    padding:1px;
    display:flex;
    justify-content:center;
    align-item:center;
}

.sci li {
    list-style:none;
    marging-top:0px 0px;
    padding:5px;
}

.sci li a{
    color: #fff;
    font-size:1.5rem;
    transition:0.5s;
}

.sci li a:hover {
    color: #aaa;
}

.cpryt {
margin-top: 1px;
text-align: center;
color:#fff;
}

`