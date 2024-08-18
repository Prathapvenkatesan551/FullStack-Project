import React, { useState } from 'react';
import './ScaleProperty.css';
import { PropertyService } from '../services/SignupService';
import { MyProperty } from './PropertyCard';

const ScaleProperty = () => {
  const [propertyData, setProperty] = useState({
    productId: '',
    place: '',
    area: '',
    noOfRooms: '',
    location: '',
    cost: '',
    sellerName: '',
    sellerEmail: '',
    sellerMobile: '',
    sellerAddress: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setProperty({
      ...propertyData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!propertyData.productId) formErrors.productId = 'Product ID is required.';
    if (!propertyData.place) formErrors.place = 'Place is required.';
    if (!propertyData.area) formErrors.area = 'Area is required.';
    if (!propertyData.noOfRooms) formErrors.noOfRooms = 'Number of Rooms is required.';
    if (!propertyData.location) formErrors.location = 'Nearby Location is required.';
    if (!propertyData.cost) formErrors.cost = 'Cost is required.';
    if (!propertyData.sellerName) formErrors.sellerName = 'Seller Name is required.';
    if (!propertyData.sellerEmail) {
      formErrors.sellerEmail = 'Seller Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(propertyData.sellerEmail)) {
      formErrors.sellerEmail = 'Email address is invalid.';
    }
    if (!propertyData.sellerMobile) {
      formErrors.sellerMobile = 'Seller Mobile Number is required.';
    } else if (!/^\d{10}$/.test(propertyData.sellerMobile)) {
      formErrors.sellerMobile = 'Mobile number must be 10 digits.';
    }
    if (!propertyData.sellerAddress) formErrors.sellerAddress = 'Seller Address is required.';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {

        const productId=propertyData.productId;
        const place=propertyData.place;
        const location=propertyData.location;
        const  area=propertyData.area;
        const numberOfRooms=propertyData.noOfRooms;
        const sellerName=propertyData.sellerName;
        const sellerEmail=propertyData.sellerEmail;
        const sellerMobileNumber=propertyData.sellerMobile;
        const sellerAddress=propertyData.sellerAddress;
        const Cost=propertyData.cost;
        const properties={productId,place,location,area,numberOfRooms,sellerName
            ,sellerEmail,sellerMobileNumber,sellerAddress,Cost
        };
        PropertyService(properties)
        .then((response)=>{
            console.log('property added');
        })
        .catch((error)=>{
            console.log('error in adding');
        });
        // alert("Property posted");

      // Submit the form
      console.log('Form submitted:', propertyData);
      // alert('Form submitted successfully!');
      window.location.reload();
    } else {
        alert("Provide valid details");
      console.log('Form has errors.');
    }
  };

  return (
    <div className='Scont'>
      <form className='Sform'>
        <h1>Property Details</h1>
        <input
          type='text'
          name='productId'
          placeholder='Product ID'
          value={propertyData.productId}
          onChange={handleChange}
        />
        {/* {errors.productId && <span className='error'>{errors.productId}</span>} */}

        <input
          type='text'
          name='place'
          placeholder='Place'
          value={propertyData.place}
          onChange={handleChange}
        />
        {/* {errors.place && <span className='error'>{errors.place}</span>} */}

        <input
          type='text'
          name='area'
          placeholder='Area'
          value={propertyData.area}
          onChange={handleChange}
        />
        {/* {errors.area && <span className='error'>{errors.area}</span>} */}

        <input
          type='text'
          name='noOfRooms'
          placeholder='Number of Rooms'
          value={propertyData.noOfRooms}
          onChange={handleChange}
        />
        {/* {errors.noOfRooms && <span className='error'>{errors.noOfRooms}</span>} */}

        <input
          type='text'
          name='location'
          placeholder='Near By Location'
          value={propertyData.location}
          onChange={handleChange}
        />
        {/* {errors.location && <span className='error'>{errors.location}</span>} */}

        <input
          type='text'
          name='cost'
          placeholder='Cost in RS'
          value={propertyData.cost}
          onChange={handleChange}
        />
        {/* {errors.cost && <span className='error'>{errors.cost}</span>} */}

        <input
          type='text'
          name='sellerName'
          placeholder='Seller Name'
          value={propertyData.sellerName}
          onChange={handleChange}
        />
        {/* {errors.sellerName && <span className='error'>{errors.sellerName}</span>} */}

        <input
          type='email'
          name='sellerEmail'
          placeholder='Seller Email'
          value={propertyData.sellerEmail}
          onChange={handleChange}
        />
        {/* {errors.sellerEmail && <span className='error'>{errors.sellerEmail}</span>} */}

        <input
          type='number'
          name='sellerMobile'
          placeholder='Seller Mobile Number'
          value={propertyData.sellerMobile}
          onChange={handleChange}
        />
        {/* {errors.sellerMobile && <span className='error'>{errors.sellerMobile}</span>} */}

        <textarea
          name='sellerAddress'
          placeholder='Seller Address and other Details'
          value={propertyData.sellerAddress}
          onChange={handleChange}
        />
        {/* {errors.sellerAddress && <span className='error'>{errors.sellerAddress}</span>} */}

        <button type='submit' onClick={handleSubmit}>
          Post
        </button>
      </form>
      <div className='MyProperties'>
        <MyProperty/>
      </div>
    </div>
  );
};

export default ScaleProperty;
