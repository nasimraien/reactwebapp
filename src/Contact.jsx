import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () =>{

  const [data, setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });

 const InputEvent =(event)=>{
   const {name, value}= event.target;
   setData ((preVal)=>{
     return{
     ...preVal,
     [name]:value,
     };
   });
 };
  const formSubmit =(e)=>{
    e.preventDefault();
    alert(`my name is ${data.fullname} mob no is ${data.phone} and email is ${data.email} and my message is ${data.msg}`);
  };
    return(<>
    <div className="my-5">
        <h1 className="text-center"> Contact US</h1>
    </div>

<div className="mt-md-auto w-auto">
            <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : +9779812179332</div>
        </div>
        <form onSubmit={formSubmit}>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control"
              name="fullname"
              value={data.fullname}
              onChange={InputEvent}
               placeholder="NAME"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control"
              name="email"
              value={data.email}
              onChange={InputEvent}
               placeholder="EMAIL"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control"
              name="phone"
              value={data.phone}
              onChange={InputEvent}
               placeholder="CONTACT NO"/>
            </div>
            <div class="app-form-group message">
              <input type="text" class="app-form-control"
              name="message"
              value={data.msg}
              onChange={InputEvent}
               placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">CANCEL</button>
              <button class="app-form-button">SEND</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
    <div class="credits">
      inspired by
      <NavLink class="credits-link" to="https://dribbble.com/shots/2666271-Contact" target="_blank">
        <svg class="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          </g>
        </svg>
        NasimTech
      </NavLink>
    </div>
  </div>
</div>
        </div>
    </>);
};

export default Contact;