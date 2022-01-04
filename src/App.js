import React from 'react';
import Img1 from './assets/img/java.jpg';
import Img2 from './assets/img/python.jpg';
import Img3 from './assets/img/cSharp.jpg';
import Img4 from './assets/img/C++.jpg';
import Img5 from './assets/img/sql.jpg';
import Img6 from './assets/img/html.jpg';
import Img7 from './assets/img/image7.jpg';
import Img8 from './assets/img/trr.png';
import Img9 from './assets/img/image9.jpg';
import Marina from './assets/img/Marina.jpg';
import Cristina from './assets/img/Cristina.jpg';
import Ecaterina from './assets/img/Ecaterina.jpg';
import Denis from './assets/img/Denis.jpg';
import Serj from './assets/img/Sergiu.jpg';
import Alexandru from './assets/img/Alexandru.jpg';
import Dima from './assets/img/Dima.jpg';
import DimaT from './assets/img/DTopilin.jpg';

function App() {
   return (
    <div className="App" id='page-top'>
      <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-group" href="#page-top">Group 2024</a>
      <button className="navbar-toggler navbar-toggler-righ" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">The Best IT Services Offered By </div>
        <div className="intro-heading text-uppercase">The Best Programming Team</div>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <img className="services-img" src={Img1}  alt=""/>
          <h4 className="service-heading">Scientific and financial applications</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <img className="services-img" src={Img2}  alt=""/>
          <h4 className="service-heading">Data analysis, machine learning</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <img className="services-img" src={Img3}  alt=""/>
          <h4 className="service-heading">Applications for the Microsoft .NET platform</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <img className="services-img" src={Img4}  alt=""/>
          <h4 className="service-heading">Software development</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <img className="services-img" src={Img5}  alt=""/>
          <h4 className="service-heading">Relational database management</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <img className="services-img" src={Img6}  alt=""/>
          <h4 className="service-heading">Structuring information on web pages</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <img className="services-img" src={Img7}  alt=""/>
          <h4 className="service-heading">Teamwork - the key to success</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <img className="services-img" src={Img8}  alt=""/>
          <h4 className="service-heading">Large projects with a complex structure</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <img className="services-img" src={Img9}  alt=""/>
          <h4 className="service-heading">Web Security</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">The Best Team</h2>
          <h3 className="section-subheading text-muted">Our amazing programmers.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Marina}  alt=""/>
            <h4>Tobultoc Marina</h4>
            <p className="text-muted">Lead C# Developer</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Ecaterina} alt=""/>
            <h4>Bugaevscaia Ecaterina</h4>
            <p className="text-muted">Lead Java Script & HTML Developer</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Cristina} alt=""/>
            <h4>Cristina</h4>
            <p className="text-muted">Lead SQL & Database Developer</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Denis} alt=""/>
            <h4>Briceag Denis</h4>
            <p className="text-muted">Lead React Developer</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Dima} alt=""/>
            <h4>Newman Damon</h4>
            <p className="text-muted">Lead Java Developer</p>
          </div>
        </div>
      
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Alexandru} alt=""/>
            <h4>Foghelizang Alexandr</h4>
            <p className="text-muted">Lead Python Developer</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Serj} alt=""/>
            <h4>Meriacre Sergiu</h4>
            <p className="text-muted">Lead Java Developer</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={DimaT} alt=""/>
            <h4>Topilin Dimitrii</h4>
            <p className="text-muted">Lead Penetration Testing Developer</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Send Us A Message</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Your Website 2021</span>
        </div>
      </div>
    </div>
  </footer>
</div>
  );
}

export default App;
