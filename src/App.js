
import React, { useRef } from "react";
import './App.css';
import './css/default.css'
import CEO from './img/ceo.jpg';
import ASS from './img/assit.jpg'
function App() {
  const ServicesRef = useRef(null);
  const Home= useRef(null)
  const About= useRef(null)
  const gotoServices = () =>
    window.scrollTo({
      top: ServicesRef.current.offsetTop,
      behavior: "smooth",
      // You can also assign value "auto"
      // to the behavior parameter.
    });
    const gotoHome = () =>
    window.scrollTo({
      top: Home.current.offsetTop,
      behavior: "smooth",
      // You can also assign value "auto"
      // to the behavior parameter.
    }); 
    const gotoAbout = () =>
    window.scrollTo({
      top: About.current.offsetTop,
      behavior: "smooth",
      // You can also assign value "auto"
      // to the behavior parameter.
    });

  return (
    <div className="container-fluid">
    <section className="smart-scroll">
  <div className="container-fluid" ref={Home}>
    <nav className="navbar navbar-expand-md navbar-dark">
      <a className="navbar-brand heading-black" href='/'>
        NMA
      </a>
      <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span data-feather="grid" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <div className="nav-link page-scroll a"  onClick={gotoHome}>
             Home
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link page-scroll a" onClick={gotoAbout} >
           About Us
            </div>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link page-scroll" href="#faq/">
              FAQ
            </a>
          </li> */}
          <li className="nav-item" onClick={gotoServices}>
            <div className="nav-link page-scroll a">
            Contact Us
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>
<section className=" py-md-0 bg-hero" ref={About}>
  <div className="container">
    <div className="row vh-md-100">
      <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
        <h1 className="heading-black text-capitalize">NMA Ventures Partner Consulting Services.</h1>
        <p className="lead py-3">NVPCS was spurm out of the founder's need to bridge the gap in Venture Consulting between founders of start-ups and Venture Capital and Angel Networks in the Emerging Market region, especially in sub-Saharan African.</p>
        
      </div>
    </div>
  </div>
</section>

<section className="" >
  <div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto text-center">
        <h2 className="heading-black">What We offer?.</h2>
      
      </div>
    </div>
    <div className="row ">
      <div className="col-md-10 mx-auto">
        <div className="row feature-boxes">
          <div className="col-md-6 box">
            <div className="icon-box box-primary">
              <div className="icon-box-inner">
                <span data-feather="edit-3" width={35} height={35} />
              </div>
            </div>
            <h5>Provide Seamless Financial Raising Activities For Start-ups.</h5>
            {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
              nisi commodo, tempus odio a, vestibulum nibh.</p> */}
          </div>
          <div className="col-md-6 box">
            <div className="icon-box box-success">
              <div className="icon-box-inner">
                <span data-feather="monitor" width={35} height={35} />
              </div>
            </div>
            <h5>Financial Modelling  &amp; Financial Projections For Start-ups</h5>
            {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
              nisi commodo, tempus odio a, vestibulum nibh.</p> */}
          </div>
          <div className="col-md-6 box">
            <div className="icon-box box-danger">
              <div className="icon-box-inner">
                <span data-feather="layout" width={35} height={35} />
              </div>
            </div>
            <h5>Market Analysis &amp; Customer Behaviour</h5>
            {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
              nisi commodo, tempus odio a, vestibulum nibh.</p> */}
          </div>
          <div className="col-md-6 box">
            <div className="icon-box box-info">
              <div className="icon-box-inner">
                <span data-feather="globe" width={35} height={35} />
              </div>
            </div>
            <h5>Start-Up Preparation</h5>
            {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
              nisi commodo, tempus odio a, vestibulum nibh.</p> */}
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
<section className="py-2" >
  <div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto text-center">
        <h2>Our Goals  &amp; Objectives</h2>
       
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-md-12 mx-auto justify" >
      <div className="col-md-8 mb-5 text-center">
            {/* <h6>Can I try it for free?</h6> */}
            <p className="text-muted">To bridge the gap between founders of the start-ups and Venture capital and Angel Networks,
            Funding raising process for start-up founders is onerous for founders, and many founders complain that it is time consuming, hence, the objective of NMA is to provide a holding-hand for start-up founders to focus on buiding their products while we take care of the administrative process of their fund-raising activities.
            
            </p>
          </div>
      </div>
    </div>
   
  </div>
</section>

<div className="container">
    <div className="row ">
      <div className="col-md-6 mx-auto text-center">
        <h2 className="heading-black">NMA Members</h2>
   
      </div>
    </div>
    <div className="row mt-5 jus">
    <div className="col-md-4">
        <div className="card">
          <a href="/" >
            <img className="card-img-top img-raised object" src={CEO} alt="Blog 1" />
          </a>
          <div className="card-body">
        <div className='text-center h6'>CEO AND Founder</div>
         <div className='text-center h3'>Samuel Anyanwutaku</div>
         <p className='text-center'>Mc Master University, BA in Social and Philosophy</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <a href="/" >
            <img className="card-img-top img-raised object" src={ASS} alt="Blog 2" />
          </a>
          <div className="card-body">
          <div className='text-center h6'>CFO  And Venture Panter</div>
         <div className='text-center h3'>Chideraa Nwabasili</div>
         <p className='text-center'>BSc. In Economics and Finance & Member of the Association of the Certified Chartered Accountants</p>
            
          </div>
        </div>
      </div>

    </div>
  
  </div>
<div className="row mt-4" ref={ServicesRef}>
      <div className="col-md-6 mx-auto text-center">
        <h5 className="mb-4">Have questions?</h5>
        <a href="/" className="btn btn-primary">Contact us</a>
      </div>
    </div>
    <div className='justify mt-4'>
      <div className='h5'>Telephone: <span className='text-muted'> +1 (437) 423 440</span></div>
      <div className='h5'>Address: <span className='text-muted'>Toronto, Oranto, Canada</span></div>
    </div>
    <footer className="py-6">
  
  <div className="container">
    <div className="row">
  
      <div className="col-sm-2">
        <h5>Legal</h5>
        <ul className="list-unstyled">
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Terms</a></li>
        </ul>
      </div>
    
    </div>
    <div className="row mt-5">
      <div className="col-12 text-muted text-center small-xl">
        © 2022 NVPCS - All Rights Reserved
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
