import {Fragment} from 'react'
import './App.css';
import { ProductCard } from './product component/productcard';

function App() {
  const product1 = {
    productPic: "https://tse4.mm.bing.net/th?id=OIP.5DkTfmZhmkb34y6tzbb4fAHaE_&pid=Api&P=0",
    id: "1234",
    productName: " Air Jorden",
    Brand: "Nike",
    productDescription: "This shoe is very much trending.",
    Price: "$65",
    Rating: "4.5"

  }

  const product2 = {
    productPic: "https://tse2.mm.bing.net/th?id=OIP.mxw2u_pbKDBSK7NahnoUVAHaGc&pid=Api&P=0",
    id: "1234",
    productName: " Adidas Shoes",
    Brand: "Nike",
    productDescription: "This shoe is very much trending",
    Price: "$65",
    Rating: "4.5"
  }

  const product3 = {
    productPic: "https://cdnb.lystit.com/photos/mrporter/704452-White-271ed26e-.jpeg",
    id: "1234",
    productName: "Gucchi Shoes",
    Brand: "Nike",
    productDescription: "This shoe is very much trending.",
    Price: "$65",
    Rating: "4.5"
  }

  const product4 = {

    productPic: "https://tse2.mm.bing.net/th?id=OIP.m26yupS4vCSbyhAo32Ni2gHaFN&pid=Api&P=0",
    id: "1234",
    productName: " Air Jorden",
    Brand: "Nike",
    productDescription: "This shoe is very much trending.",
    Price: "$65",
    Rating: "4.5"
  }

  const product5 = {
    productPic: "https://tse2.mm.bing.net/th?id=OIP.m26yupS4vCSbyhAo32Ni2gHaFN&pid=Api&P=0",
    id: "1234",
    productName: " Air Jorden",
    Brand: "Nike",
    productDescription: "This shoe is very much trending.",
    Price: "$65",
    Rating: "4.5"
  }


  function productalert1() {
    alert("product details "+ product1.productName)
  }
  function productalert2() {
    alert("product details "+ product2.productName)
  }
  function productalert3() {
    alert("product details "+ product3.productName)
  }
  function productalert4() {
    alert("product details "+ product4.productName)
  }
  function productalert5() {
    alert("product details "+ product5.productName)
  }

  const card1 = {
    background: 'orange'
  }


  const card2 = {
    background: 'blue'
  }


  const card3 = {
    background: 'green'
  }


  const card4 = {
    background: 'red'
  }

  const card5 = {
    background: 'yellow'
  }

  return (

    <Fragment>
      <div className='child_container'>

        <ProductCard
          productDetails={product1}
          alertfun={productalert1}
          button={card1}

        />
        <ProductCard
          productDetails={product2}
          alertfun={productalert2}
          button={card2}

        />
        <ProductCard
          productDetails={product3}
          alertfun={productalert3}
          button={card3}
        />
        <ProductCard
          productDetails={product4}
          alertfun={productalert4}
          button={card4}
        />
        <ProductCard
          productDetails={product5}
          alertfun={productalert5}
          button={card5}
        />
      </div>
    </Fragment>
  );
}

export default App;
