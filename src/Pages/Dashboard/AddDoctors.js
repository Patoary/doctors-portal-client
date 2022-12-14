import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('https://tranquil-headland-79943.herokuapp.com/service').then(res => res.json()))

    const imageStorageKey = '1361712cc9c48fdeddf6bef112603d3c';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body:formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                console.log(result.data.url);
                const img = result.data.url;
                const doctor = {
                    name : data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img:img
                }
                // send to your database
                fetch('https://tranquil-headland-79943.herokuapp.com/doctor', {
                    method: 'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success('Doctor added successfullyf');
                        reset();
                    }else{
                        toast.error('Failed to add the doctor');
                    }
                } )
            }
        });
    };

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-xl'>Add a new doctors</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })}
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })}
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} class="select w-full max-w-xs select-bordered">
                        {
                            services.map(service => <option
                            key={service._id}
                            value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is Required'
                        }
                    })}
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>
                <input className='btn w-full max-w-xs' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default AddDoctors;