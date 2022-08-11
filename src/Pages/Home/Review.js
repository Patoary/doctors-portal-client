import React from 'react';

const Review = ({ review }) => {
    const { img, name, location } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ad placeat doloremque?</p>
                <div className="flex items-center mt-9">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
                            <img src={img} />
                        </div>
                    </div>
                    <div className='ml-5 '>
                        <h2 className='text-xl'>{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;