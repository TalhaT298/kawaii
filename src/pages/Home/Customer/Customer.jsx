/* eslint-disable no-unused-vars */
import React from 'react';
import "./Customer.css"; 
import Cata from "../../../assets/cate.webp";
const Customer = () => {
    return (
        <div>
            <div className="mx-auto  flex justify-center items-center ">
        <h3 className="text-3xl text-gray-50 uppercase bg-pink-300 w-full h-24 flex justify-center items-center text-center  font-bold font-serif">
        Client Feedback
        </h3>
      </div>
      <h1> CSS3 Testimonials Slider</h1>
<div className="container">
  <input type="radio" name="nav" id="first" checked/>
  <input type="radio" name="nav" id="second" />
  <input type="radio" name="nav" id="third" />
  
  <label for="first"  className="first"></label>
<label for="second"   className="second"></label>
<label for="third"  className="third"></label>
 
  <div className="one slide">
    <blockquote>
      <span  className="leftq quotes">&ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span  className="rightq quotes">&bdquo; </span>
    </blockquote>
    <img src={Cata} className='w-20 h-32' />
    <h2>Steve Kruger</h2>
    <h6>UI/UX Designer at Woof Design Studio</h6>
  </div>
  
  <div  className="two slide">
    <blockquote>
      <span  className="leftq quotes">&ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I recommend him to anyone who wants their work done professionally. The project ... <a href="#"> read more</a><span  className="rightq quotes">&bdquo; </span>
    </blockquote>
    <img src={Cata} className='w-20 h-32' />
    <h2>John Doe</h2>
    <h6>Developer Relations at Woof Studios</h6>
  </div>
  
  <div  className="three slide">
    <blockquote>
      <span className="quotes leftq"> &ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span  className="rightq quotes">&bdquo; </span>
    </blockquote>
    <img src={Cata} className='w-20 h-32' />
    <h2>Steve Stevenson</h2>
    <h6>CEO Woof Web Design Studios</h6>
  </div>
  
  
</div>
      
        </div>
    );
};

export default Customer;