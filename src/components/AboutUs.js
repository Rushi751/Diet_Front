import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  const buttonStyles = {
    width: "100%",
    textAlign : "center",
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    transition: 'color 0.2s',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  };

  linkStyles[':hover'] = {
    color: '#0056b3',
  };


  return ( 
    <div>
      {isAuthenticated ? ( 
        
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className='about-title'>About Our Diet Suggestion App</h2>
            <p>
              Welcome to our Diet Suggestion App, where we aim to help you achieve your health and fitness goals through personalized diet plans and recommendations. We understand that maintaining a healthy diet can be challenging, and our mission is to make it easier for you.
            </p>
            <p>
              Our team of experienced nutritionists and dietitians work tirelessly to provide you with the best dietary guidance tailored to your unique needs. We're passionate about helping you lead a healthier lifestyle and reach your desired weight and fitness level.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="data:image/jpeg;base64,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" 
              alt="Our Team"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
  
        <div className="mt-5">
          <h3>Our Team</h3>
          <p>
            Meet our dedicated team of nutrition experts who are committed to providing you with the best dietary solutions. With years of experience, they are here to guide you on your journey to better health.
          </p>
          <ul className="list-group">
            <li className="list-group-item">Ved Rushi - Nutritionist</li>
            <li className="list-group-item">Virat Kohli - Dietitian</li>
            <li className="list-group-item">Rushi Patil - Fitness Trainer</li>
          </ul>
        </div>
      </div>
        
       ) : (
        <>
        <h2 style={{ textAlign: 'center', margin: "15px 0px"}} className='about-title'>About Us</h2>
        <h4 style={{ textAlign: 'center', margin: "15px 0px"}}>You need to log in to access this page.</h4>
        <button type="button" className="btn btn-link" style={buttonStyles}>
              <Link to="/login" style={linkStyles}>
                Get Started with us today itself...
              </Link>
            </button>
        </>
       ) }

  </div>   
  );
}

export default AboutUs;
