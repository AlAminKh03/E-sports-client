import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://lit-chamber-03250.herokuapp.com/products`
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))


    };
    return (
        <div className='mx-auto w-50'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='price' className='mb-2' type="number" {...register("price")} />
                <input placeholder='dealer' className='mb-2' type="text" {...register("dealer")} />
                <input placeholder='quantity' className='mb-2' type="number" {...register("quantity")} />

                <textarea placeholder='description' className='mb-2' {...register("description")} />
                <input placeholder='photo Url' className='mb-2' type="text" {...register("img")} />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddItems;