import React from 'react';

const InfoCard = ({img,cartTitle,cardDetail,bgClass}) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgClass}`}>
            <figure className='lg:pl-5 md:mt-6 sm:mt-6 xsm:mt-6'>
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cartTitle}</h2>
                <p>{cardDetail}</p>
               
            </div>
        </div>
    );
};

export default InfoCard;