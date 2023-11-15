import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userShops, setUserShops] = useState([]);

  useEffect(() => {
    const fetchUserShops = async () => {
      try {
        // Make a GET request to fetch user shops from the backend
        const response = await axios.get(`http://localhost:4000/api/v1/shops/user?user=${user.email}`);
        setUserShops(response.data.shops);
      } catch (error) {
        console.error('Error fetching user shops:', error);
      }
    };

    // Fetch user shops when the component mounts
    fetchUserShops();
  }, [user.email]); // Empty dependency array to run the effect only once

  // Check if authentication is in progress
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Check if the user is authenticated
  return (
    <>
      {isAuthenticated && (
        <div>
          <Row className='profileContainer'>
            <Col
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={user.picture} alt='user' className='profilePic' />
            </Col>
            <Col md={6}>
              <Typography variant='h4'>Name: {user.nickname}</Typography>
              <Typography variant='h5'>Mail Id: {user.email}</Typography>
            </Col>
          </Row>

          <div className='Shops'>
            <h1>My Shops</h1>
            <div className='items'>
              {userShops.map((shop) => (
                <Card key={shop._id} sx={{ maxWidth: 345 }}>
                  <CardHeader title={shop.name} />
                  <CardMedia sx={{ height: 200 }} image={shop.image} />
                  <CardContent>
                    <CardActions>
                      <Button size='small' color='white'>
                        <Link to={`/createItems?shopId=${shop._id}`} color='white'>
                          Add Item
                        </Link>
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
