import React from 'react';

const Modal = (props) => {
   
    const {description, accuracy, features, image_link, input_output_examples, integrations, pricing, logo, } = props?.singleProduct;

    
    console.log(input_output_examples);
    return (
        <div>
            <input type="checkbox" id="product-details" className="modal-toggle" />
               <div className="modal">
                 <div className="modal-box w-11/12 max-w-5xl relative">
                   <label htmlFor="product-details" className="btn btn-sm btn-circle absolute right-1 top-1">✕</label>
                   <div className='grid grid-1 md:grid-cols-2 gap-4 h-[500px] p-6'>
                       <div className=' bg-[#EB57570D] border border-[#EB5757] rounded-lg p-[20px]'>
                        <div>
                            <h1 className='text-[20px] font-semibold'>{description? description: 'Coming Soon..'}</h1>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3 py-4 gap-3'>
                            {
                               
                            }
                            <div className='h-[100px] w-[132px] rounded-md bg-white flex flex-col justify-center items-center text-[#03A30A]'>
                                price
                            </div>
                            <div className='h-[100px] w-[132px] rounded-md bg-white flex flex-col justify-center items-center text-[#F28927]'>price</div>
                            <div className='h-[100px] w-[132px] rounded-md bg-white flex flex-col justify-center items-center text-[#EB5757]'>price</div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div>
                                <h3 className='text-[20px] font-semibold'>Features</h3>
                                <div>
                                    {
                                        Object.values(features || {}).map(singleFeature => <li>{singleFeature.feature_name? singleFeature.feature_name : 'Coming soon..'}</li>)
                                    }
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[20px] font-semibold'>Integrations</h3>
                                <div>
                                {
                                  integrations &&  
                                  integrations.map(integration => <li>{integration? integration : 'Coming soon'}</li>)
                                }
                                </div>
                            </div>
                        </div>

                       </div>
                       <div className=' bg-white border border-[#E7E7E7] rounded-lg p-4'>

                        <div>
                            <img className='rounded-lg' src={image_link && image_link[0]} alt="" />
                        </div>
                        <div>
                            <div className='relative'>
                                
                                <p className='absolute top-[-230px] right-2 text-center px-4 py-2 text-white rounded-lg bg-red-500 max-w-[180px]'>{
                                    accuracy &&
                                    accuracy.score? accuracy.score * 100 : '0'
                                }% accuracy found</p>
                            </div>
                        </div>
                        <div className='pt-8'>
                           {
                            input_output_examples &&
                            input_output_examples?.slice(0,1).map(inp => <h3 className='text-center text-xl font-medium pt-4'>{inp?.input}</h3>)
                           }
                           {
                            input_output_examples &&
                            input_output_examples?.slice(0,1).map(out => <h3 className='text-center text-lg font-normal py-2'>{out?.output === "function reverseString(str) {\n return str.split('').reverse().join('');\n}" ? ' ' : out.output}</h3>)
                           }
                        </div>

                       </div>
                   </div>
                 </div>
               </div>
        </div>
    );
};

export default Modal;