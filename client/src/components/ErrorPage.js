import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const ErrorPage = () => {
  const pageStyle = {
    backgroundColor: '#C4A1D4',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const textStyle = {
    color: '#010101',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const buttonStyle = {
    marginTop: '50px',
    backgroundColor: '#ffe9cc',
    color: '#010101',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
  };

  const h1Style = {
    fontSize: "100px",
  }

  return (
    <div style={pageStyle}>
      <h1 style={h1Style}>404</h1>
      <p style={textStyle}>Sorry, your page is not found!</p>
      <Link to="/" style={buttonStyle}>
        Go back
      </Link>
    </div>
  );
};

export default ErrorPage;
