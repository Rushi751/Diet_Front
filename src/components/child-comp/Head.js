import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Head = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  const buttonStyles = {
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
    <Container>
      <Row className="flex-md-row">
        <Col xs={12} md={6} className="text-center">
          <div className='m-5'>
            <h3 className='site-title my-5'>Your Personal Diet Suggestor 👨‍⚕️👩‍⚕️</h3>
            <p>Get to know your BMI & we will suggest you the diet accordingly.</p>
            {isAuthenticated ? (
              <h4 style={{fontFamily: "font-family: 'Montserrat', sans-serif"}}>Wel-Come🎉</h4>
            ) : (
              <button type="button" className="btn " style={buttonStyles}>
                <Link to="/login" style={{ color: '#007bff', fontWeight: 'bold' }}>
                  Get Start with us today itself 🏃...
                </Link>
              </button>
            )}
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <div className='m-5' style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8SBdeTw8GuTfSjEKnB8u6fVenIerMUpLTw&usqp=CAU"
              alt="Diet Planning"
              style={{ maxWidth: '40%', height: 'auto', margin: '10px 0px' }}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmihK5TeTuicFUipQzTYNB9tgFV0ab3arSg&usqp=CAU"
              alt="Healthy Food"
              style={{ maxWidth: '70%', height: 'auto', marginLeft: "30px" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Head;
