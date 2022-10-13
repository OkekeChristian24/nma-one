
import './App.css';
import './css/default.css'
function App() {
  return (
    <div className="container-fluid">
    <section className="smart-scroll">
  <div className="container-fluid" >
    <nav className="navbar navbar-expand-md navbar-dark">
      <a className="navbar-brand heading-black" href='/'>
        NVPCS
      </a>
      <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span data-feather="grid" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="/">
             Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll"  href="/">
           About Us
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link page-scroll" href="#faq/">
              FAQ
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link page-scroll" href="/">
            Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>
<section className=" py-md-0 bg-hero" >
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
        <p className="text-muted lead">Answers to most common questions.</p>
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-md-10 mx-auto">
        <div className="row">
          <div className="col-md-6 mb-5">
            <h6>Can I try it for free?</h6>
            <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
          </div>
          <div className="col-md-6 mb-5">
            <h6>Do you have hidden fees?</h6>
            <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
          </div>
          <div className="col-md-6 mb-5">
            <h6>What are the payment methods you accept?</h6>
            <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
          </div>
          <div className="col-md-6 mb-5">
            <h6>How often do you release updates?</h6>
            <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
          </div>
          <div className="col-md-6 mb-5">
            <h6>What is your refund policy?</h6>
            <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
          </div>
          <div className="col-md-6 mb-5">
            <h6>How can I contact you?</h6>
            <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</section>

<div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto text-center">
        <h2 className="heading-black">NVM</h2>
   
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-4">
        <div className="card">
          <a href="/">
            <img className="card-img-top img-raised" src="img/blog-1.jpg" alt="Blog 1" />
          </a>
          <div className="card-body">
            <a href="/" className="card-title mb-2"><h5>We launch new iOS &amp; Android mobile apps</h5></a>
            <p className="text-muted small-xl mb-2">Sep 27, 2018</p>
            <p className="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
              consectetur adipiscing elit. <a href="/">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <a href="/">
            <img className="card-img-top img-raised" src="img/blog-2.jpg" alt="Blog 2" />
          </a>
          <div className="card-body">
            <a href="/" className="card-title mb-2"><h5>New update is available for the editor</h5></a>
            <p className="text-muted small-xl mb-2">August 16, 2018</p>
            <p className="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
              consectetur adipiscing elit. <a href="/">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <a href="/">
            <img className="card-img-top img-raised" src="img/blog-3.jpg" alt="Blog 3" />
          </a>
          <div className="card-body">
            <a href="/" className="card-title mb-2"><h5>The story of building #1 page builder</h5></a>
            <p className="text-muted small-xl mb-2">December 2nd, 2017</p>
            <p className="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
              consectetur adipiscing elit. <a href="/">Learn more</a></p>
          </div>
        </div>
      </div>
    </div>
  
  </div>
<div className="row mt-4">
      <div className="col-md-6 mx-auto text-center">
        <h5 className="mb-4">Have questions?</h5>
        <a href="/" className="btn btn-primary">Contact us</a>
      </div>
    </div>
    <footer className="py-6">
  
  <div className="container">
    <div className="row">
  
      <div className="col-sm-2">
        <h5>Legal</h5>
        <ul className="list-unstyled">
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Terms</a></li>
          <li><a href="/">Refund policy</a></li>
        </ul>
      </div>
      <div className="col-sm-2">
        <h5>Partner</h5>
        <ul className="list-unstyled">
          <li><a href="/">Refer a friend</a></li>
          <li><a href="/">Affiliates</a></li>
        </ul>
      </div>
      <div className="col-sm-2">
        <h5>Help</h5>
        <ul className="list-unstyled">
          <li><a href="/">Support</a></li>
          <li><a href="/">Log in</a></li>
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
