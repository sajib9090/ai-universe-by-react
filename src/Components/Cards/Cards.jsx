import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import ShortBtn from '../ShortBtn/ShortBtn';
import Card from './Card.jsx/Card';

const Cards = () => {
    const [products, setProducts] = useState([]);

    const [seeMore, setSeeMore] = useState(false);

    const [uniqueId, setUniqueId] = useState(null);

    const [singleProduct, setSingleProduct] = useState({});

    // console.log(singleProduct);
    const handleSeeMoreBtn = () => {
        setSeeMore(true);
    }

    const sortByOldDate = () => {
        const sortedProduct = products.sort((a,b) => {
            return new Date(a.published_in) - new Date(b.published_in);
        });
        setProducts([...products, sortedProduct]);
    };
    const sortByNewDate = () => {
        const sortedProduct = products.sort((a,b) => {
            return new Date(b.published_in) - new Date(a.published_in);
        });
        setProducts([...products, sortedProduct]);
    };

    useEffect( ()=> {
        fetch(`https://openapi.programming-hero.com/api/ai/tools`)
         .then(res => res.json())
         .then(data => setProducts(data.data.tools))
    }, []);
    // console.log(products);

    useEffect(()=> {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
          .then(res => res.json())
          .then(data => setSingleProduct(data.data))
    } ,[uniqueId])

    

    return (
        <>
        <div className='flex justify-center space-x-4'>
        <span onClick={sortByOldDate}>
        <ShortBtn title='sort by old date'/>
        </span>
        <span onClick={sortByNewDate}>
        <ShortBtn title='sort by new date'/>
        </span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-12 my-8'>
            {
                products.slice(0, seeMore? 12: 6).map(product => <Card 
                    key = {product.id}
                    product = {product}
                    setUniqueId = {setUniqueId}
                />)
            }
        </div>
           {!seeMore &&
            (<div onClick={handleSeeMoreBtn}>
                <ShortBtn title='see more'/>
                </div>)
           }
        <div>
            <Modal singleProduct = {singleProduct}/>
        </div>   
        </>   
    );
};

export default Cards;