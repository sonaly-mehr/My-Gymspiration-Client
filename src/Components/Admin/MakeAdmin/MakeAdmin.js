import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()

    const onSubmit = data => {
        const postmanData = {
            email: data.email
        };
        const url = `https://salty-caverns-62513.herokuapp.com/postman`;


        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postmanData)
        })
            .then(res => console.log('server side respond'))
            history.push('/admin');
        };
    return (
        <section className="make-admin-container">
            <h2>Make Admin</h2>

            <div className="makeAdmin-form">
            <form action="" onSubmit={handleSubmit(onSubmit)}> 
                        <div className="single-input">
                            <input type="email" name="name" placeholder="example@example.com"  {...register("email")} />
                        </div>
                    <div className="makeAdmin-submit">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;