import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header';

import currencyFormatter from 'currency-formatter';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const {products} = useSelector(state => state.ProductReducer);
    // console.log(state);
    return (
        // <div>
        //    <Header></Header>
        //   <div className="container mtb-30">
        //     <div className="row row-cols-1 row-cols-md-3  ">
        //         {products.map(product =>(
        //                 <div className="col-3   m-2 key={product.id}">
        //                    <div className="product">
        //                         <div className=" h-100  product-img">
        //                             <img className="image m-5 " src ={`${product.image}` } alt="image-name" />
        //                         </div>
        //                         <div className="product-name">
        //                             {product.name}
        //                         </div>
        //                         <div className="row">
        //                             <div className="col-6">
        //                                 <div className="product-price">
        //                                     {product.price}
        //                                 </div>

        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="product-discount-price">
        //                                 {product.discount.price}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                    </div>
        //                 </div>
        //         ))}
        //     </div>
        //   </div>







        // </div>





        <div>
        <Header />
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <div className="col-3" key={product.id}>
                        <div className="product">
                            <div className="product-img">
                               <Link to={'/details/${product.id}' }> <img className="image" src={`${product.image}`} alt="image name"/></Link>
                            </div>
                            <div className="product-name">
                                {product.name}
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="product-price">
                                                                        
                                   <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'USD' })}</span> <span className="discount">{product.discount}%</span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="product-discount-price">
                                    {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Home;