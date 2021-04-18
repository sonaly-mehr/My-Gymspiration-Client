import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './Review.css';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history= useHistory();
    const onSubmit = data => {
        const reviewData={
            name: data.name,
            designation: data.designation,
            description: data.description
        };
        const url= `http://localhost:5000/user`;


        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res=> console.log('server side respond'))
        history.push('/user');
        console.log(data);
    };
    return (
        <div className="review-container">
            <h2>Review</h2>

            <div className="review-form">
            <form action="" onSubmit={handleSubmit(onSubmit)}> 
                        <div className="single-input">
                            <input type="text" name="name" placeholder="Enter Name"  {...register("name")} />
                        </div>
                        <div className="single-input">
                            <input type="text" name="designation" placeholder="Designation"  {...register("designation")} />
                        </div>
                        <div className="single-input">
                            <textarea name="description" placeholder="Description"  {...register("description")} />
                        </div>

                    <div className="review-submit">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;