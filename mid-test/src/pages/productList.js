import { useEffect, useState} from 'react'
import axios from 'axios'

import NavBar from '../component/navbar'
import List from '../component/listProduct'

import './css/listDetail.css'
import './css/helper.css'

function Product(){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res => {
        //   console.log(res.data.products)
          setProducts(res.data.products)
        })
        .catch(err => console.log(err))
    },[])

    const arr = products.map(((data, index) =>{ //harusnya mahasiswa2
        return (
          <div className="p-1">
              <List
                  product = {data}
              />
          </div>
        )
      }))

    // console.log(products)
    return(
        <div className=''>
            <NavBar />
            <div class="container mt-5 mb-5 p-5">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10">
                        {arr}
                        {/* <div class="row p-2 bg-white border rounded mt-2">
                            <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/JvPeqEF.jpg" /></div>
                            <div class="col-md-6 mt-1">
                                <h5>Quant trident shirts</h5>
                                <div class="d-flex flex-row">
                                    <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                                </div>
                                <div class="mt-1 mb-1 spec-1"><span>100% cotton</span><span class="dot"></span><span>Light weight</span><span class="dot"></span><span>Best finish<br/></span></div>
                                <div class="mt-1 mb-1 spec-1"><span>Unique design</span><span class="dot"></span><span>For men</span><span class="dot"></span><span>Casual<br/></span></div>
                                <p class="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br/><br/></p>
                            </div>
                            <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div class="d-flex flex-row align-items-center">
                                    <h4 class="mr-1">$14.99</h4><span class="strike-text">$20.99</span>
                                </div>
                                <h6 class="text-success">Free shipping</h6>
                                <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">Details</button><button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product