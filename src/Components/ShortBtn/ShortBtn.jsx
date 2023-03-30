import React from 'react';

const ShortBtn = (props) => {
    return (
        <div className='text-center my-20'>
            <button className="btn btn-secondary">{props.title}</button>
        </div>
    );
};

export default ShortBtn;