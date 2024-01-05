import React, { useState } from "react";
import axios from "axios";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../components/Loader";
const CreateStore = () => {

  //used to disable button when clicked once in createstore form
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: null, 
  });
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    setFormData((prevData) => {
      const newData = { ...prevData };
  
      if (name === "image" && files && files.length > 0) {

        newData[name] = files[0];
      } else {
        newData[name] = value;
      }
  
      console.log("Updated FormData:", newData);
      return newData;
    });
  };
  
  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      loginWithRedirect();
      return;
    }

    setIsButtonDisabled(true);

    console.log("Form submitted");
 
    const formDataForBackend = new FormData();
    formDataForBackend.append("name", formData.name);
    formDataForBackend.append("category", formData.category);
    formDataForBackend.append("image", formData.image);
    formDataForBackend.append("user", user.email);

    console.log("Form Data:", formDataForBackend);
    try {

      const response = await axios.post("https://sheearns.onrender.com/createShop", formDataForBackend);

      setIsButtonDisabled(false);

      console.log("Store created:", response.data);
      window.location.href = '/';
    } catch (error) {

      setIsButtonDisabled(false);

      console.error("Error creating store:", error);
    }
    console.log("After Axios request");
  };

  return (
    <>
      {isButtonDisabled && <Loader />}
      <Meta title={"Create Store"} />
      <BreadCrumb title="Create Store" />

      <Container class1="login-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className=" d-flex text-align-center justify-content-center">Create store!</h3>
            <div className="auth-card">
              
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Shop Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <CustomInput
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                />
                <CustomInput
                  type="file"
                  name="image"
                  label="image"
                  
                  onChange={handleChange}
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button border-0" disabled={isButtonDisabled}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CreateStore;