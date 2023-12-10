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
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [userShops, setUserShops] = useState([]);

  useEffect(() => {
    const fetchUserShops = async () => {
      try {
        // Make a GET request to fetch user shops from the backend
        const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://sheearns.onrender.com';
        const response = await axios.get(`${baseURL}/shops/user?user=${user?.email}`);
        setUserShops(response.data.shops);
      } catch (error) {
        console.error('Error fetching user shops:', error);
      }
    };


    fetchUserShops();
  }, [user?.email]);

  // Check if authentication is in progress
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Check if the user is authenticated
  return (
    <>
      {isAuthenticated && (
        <div
        >
          <div className='profileContainer'>
            <div className='d-flex align-items-center justfiy-content-center'>
              <img src={user.picture} alt='user' className='profilePic' />
            </div>
            <div>
              <Typography variant='h4'>Name: {user.nickname}</Typography>
              <Typography variant='h5'>Mail Id: {user.email}</Typography>
              <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>
            </div>
          </div>

          <div className='Shops'>
            <h1>My Shops</h1>
            <div className='row'>
              {userShops.map((shop) => (
                <Card key={shop._id} sx={{ maxWidth: 345, margin: 5 }}>
                  <CardHeader title={shop.name} />
                  <CardMedia sx={{ height: 200 }} image={shop.image} />
                  <CardContent>
                    <CardActions>
                      <Button size='small' >
                        <Link to={`/createItems?shopId=${shop._id}`} style={{ color: 'white' }}>
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
