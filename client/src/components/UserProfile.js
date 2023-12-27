import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import profileimg from '../images/profileimg.jpg';
import { CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import boy from '../images/2.boyshopping.png'
import edit from '../images/edit.png'
import del from '../images/delete.png'
import './Userprofile.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from './Loader';


     
const UserProfile = () => {
  const navigate=useNavigate();
  const [details, setDetails] = useState({});
  const [picture, setPicture] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode,seteditMode]=useState(false);
  const [contact,setContact]=useState('');
  const [about,setAbout] = useState('');
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userShops, setUserShops] = useState([]);
  const [search, setSearch] = useState("")
  const {email}=user
  useEffect(() => {
    
    fetch(`http://localhost:4000/getProfile?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setDetails(data);
        setContact(data.contact);
        setAbout(data.about);
        
      });
  }, []);

const handleDelete=async(id)=>{
console.log(id);
  const res = await fetch(`http://localhost:4000/deleteShop?shopId=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    
  });
  const data = await res.json();
  if(data.message=='Deleted Shop')
  {
    navigate('/');
    toast.success('Deleted Successfully')
    
  }
}

  const postDetails = async (picture) => {

    setLoading(true);
    if (picture == undefined) {
      toast.warning("Please Upload a image");
      return;
    } else if (picture.size >= 1048576) {
      toast.warning("The size of image is greater than 1mb");
      setLoading(false);
      return;
    }
    const data = new FormData();
    data.append("file", picture);
    data.append("upload_preset", "tc3augsj");
    try {
      let res = await fetch(
        "",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setPicture(urlData.url.toString());
      setLoading(false);
      setImagePreview(URL.createObjectURL(picture));
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

// console.log(email);
  const handleImage = async (e) => {
    const res = await fetch("http://localhost:4000/updateProfileImg", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email,picture }),
    });
    const data = await res.json();
    if (data.message === "New profileImg created"||data.message === "ProfileImg Updated") {
      setLoading(false);
      // window.location.reload();
      toast.success("Image uploaded successfully");
      navigate('/');
    } else {
      setLoading(false);
      toast.error("Try again!");
    }
  };


  const handleEdit =  () => {
   seteditMode(!editMode);
   }

   const handleProfileSave=async()=>{
    const res= await fetch(`http://localhost:4000/createProfile?email=${email}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({contact:contact,about:about}),
    })
    const data=await res.json();
    if(data.message=="New profile created"||"Profile Updated")
    {
      seteditMode(false);
      toast.success("Updated")
    // window.location.reload();
    navigate('/');
    }

   }

   const handleContact=(e)=>{
    setContact(e.target.value);
   }
   const handleAbout =(e)=>{
    setAbout(e.target.value);
   }

  useEffect(() => {
    const fetchUserShops = async () => {
      try {
        // Make a GET request to fetch user shops from the backend
        const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://sheearns.onrender.com';
        const response = await axios.get(`${baseURL}/shops/user?user=${user.email}`);
        setUserShops(response.data.shops);
      } catch (error) {
        console.error('Error fetching user shops:', error);
      }
    };

   
    fetchUserShops();
  }, [user.email]);

  // Check if authentication is in progress
  if (isLoading||loading) {
    return <Loader/>;
  }
  console.log(userShops[0])

  const searchfilter=userShops.filter((shop)=>{
    return shop.name.toLowerCase().includes(search.toLowerCase());
  })

  // Check if the user is authenticated
  return (
    <>
    <p style={{textAlign:"center","margin":"5vh 0 0 0","color":'gray'}}>Home/Profile</p>
    <div style={{'display':'flex','justifyContent':'center', 'width':'100%'}}>
    <div className='user-box'>
      <div className='profile-box'>
     
        <img className='user-img' src={imagePreview || details.img}
                       />
        <div class="input-group mb-3 mt-3">
      
  <input type="file" class="form-control" id="image-upload"  accept="image/png, image/jpeg"
                        onChange={(e) => postDetails(e.target.files[0])}/>
 
</div>
        {picture && <button className='upload-img-btn' onClick={handleImage}>Save</button> }
      </div>
      <div className='profile-cont-box'>
<img src={edit} w={20} className='icon-profile' onClick={handleEdit} />
<div style={{"display":"flex","alignItems":"center","margin":"2vh 0"}}><p className='input-profile-header' ><b>Name</b></p>
    <p className='input-profile'>{user.nickname}</p></div>
    <div style={{"display":"flex","alignItems":"center","margin":"2vh 0"}}><p className='input-profile-header' ><b>Email</b></p>
    <p className='input-profile'>{user.email}</p></div>
    <div style={{"display":"flex","alignItems":"center","margin":"2vh 0"}}><p className='input-profile-header' ><b>Phone</b></p>
    {editMode?<input className='input-profile' value={contact} onChange={handleContact} />:<p className='input-profile' >{contact}</p>}</div>
    <div style={{"display":"flex","alignItems":"center","margin":"2vh 0"}}><p className='input-profile-header' ><b>Shops:</b> <span style={{"margin":'0 1.5vh'}}>{userShops.length}</span> </p>
  </div>
 
 
 
  
  <div style={{"margin":"4vh 0"}} >
    <p className='input-profile-header' ><b>About</b></p>
    {editMode?<textarea className='textarea-profile' value={about} onChange={handleAbout} rows="8"></textarea>:<p className='
    input-profile' >{about}</p>}
    
  </div>
  {editMode&&<Button size='small' onClick={handleProfileSave}>Save</Button>}
      </div>
    </div>
      {/* {isAuthenticated && (
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
            <div className='row'>
              {userShops.map((shop) => (
                <Card key={shop._id} sx={{ maxWidth: 345,margin:5 }}>
                  <CardHeader title={shop.name} />
                  <CardMedia sx={{ height: 200 }} image={shop.image} />
                  <CardContent>
                    <CardActions>
                      <Button size='small' >
                        <Link to={`/createItems?shopId=${shop._id}`} style={{color:'white'}}>
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
      )} */}
    </div>
    <div className='my-shops'>
      <h1 className='myshops-header'>My Shops</h1>
      {userShops[0]?<div className='myshop-cards-box'>
    
    <input class="form-control mr-md-2 w-25 " onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
    
  {searchfilter[0]&&searchfilter.map((shop)=>(
    <div className='myshop-card' key={shop._id}>
        <img src={del} w={10} className='icon-profile' onClick={()=>handleDelete(shop._id)}/>
        <div className=' myshop-card-second'>
          <img src={shop.image} className='myshop-img'></img>
          <div className='myshop-cont'>
            <h2 style={{"textAlign":"center"}}>{shop.name}</h2>
            <div className='shop-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor urna, consectetur sed arcu consequat, placerat rhoncus purus. Nulla scelerisque turpis vitae lacus consectetur, ut dictum lacus sodales. Donec at.</div>
            <Button size='small' className='shop-add-btn'>
                        <Link to={`/createItems?shopId=${shop._id}`} style={{color:'white'}}>
                          Add Item
                        </Link>
                      </Button>
            <div>

            </div>
          </div>
          </div>
        </div>)
    
  )}
  {!searchfilter[0] && <h2 style={{'textAlign':'center','margin':'5vh'}} >No Shops Found</h2>}      
       
      </div>:<h2 style={{'textAlign':'center','margin':'5vh'}}>Currently, No Shops Present, Try Creating here <Link to='/openstore'>Open Store</Link></h2>}  
    </div>
    </>
  );
};

export default UserProfile;
