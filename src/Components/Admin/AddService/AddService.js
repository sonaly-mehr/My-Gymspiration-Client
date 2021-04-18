import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null);
    const history = useHistory()

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            description: data.description,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://salty-caverns-62513.herokuapp.com/admin`;


        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side respond'))
        history.push('/admin');
        console.log(data);
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '81f0073390f9a7da4cf6d09bdcc462fa');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="add-service-container">

            <div className="add-product-form">
                <h2>Add Service</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="single-input">
                        <input type="text" name="name" placeholder="Service Name"  {...register("name")} />
                    </div>
                    <div className="single-input">
                        <input type="text" name="description" placeholder="Description"  {...register("description")} />
                    </div>

                    <div className="single-input">
                        <input type="text" name="price" placeholder="Enter price"  {...register("price")} />
                    </div>
                    <div className="img-input">
                        <label htmlFor=""> Add Photo</label><br />
                        <input type="file" id="img" name="img" accept="image/*" onChange={handleImageUpload} />
                    </div>

                    <div className="submit">
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddService;