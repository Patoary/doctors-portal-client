import React from 'react';

const Service = ({service}) => {
    const {img, description, name} = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img style={{width:'116px', height:'115px'}} src={img} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description.slice(0,80)}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;