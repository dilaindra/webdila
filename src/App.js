import Header from "./components/header"
import Footer from "./components/footer"
import Banner from "./components/banner"
import Product from "./components/product"
import Productdetail from "./components/productdetail"
import Productdetailramen from "./components/productdetailramen"
import Productdetailsushi from "./components/productdetailsushi"
import Productsdetailkatsu from "./components/productsdetailkatsu"
import Bannerr from "./components/bannerr"
import Photo from './components/photo'
import Photomokaku from "./components/photomokaku"
import Galleryphoto from "./components/galleryphoto"
import Main from "./components/main"
import Showparam from "./components/showparam"
import About from "./components/about"
import Form from "./components/form"
import {BrowserRouter as Router,Routes, Route, From} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          
          <Route path='/' element={<Main/>}/>
          <Route path='/product/' element={<Product/>}/>
          <Route path='/productdetail/:id' element={<Productdetail/>}/>
          <Route path='/productdetailramen/:id' element={<Productdetailramen/>}/>
          <Route path='/productsdetailkatsu/:id' element={<Productsdetailkatsu/>}/>
          <Route path='/productdetailsushi/:id' element={<Productdetailsushi/>}/>
          <Route path='/rekomendasimakanan/' element={<Product/>}/>
          <Route path='/galerifoto/' element={<Galleryphoto/>}/>
          <Route path='/tentang/' element={<Bannerr/>}/>
          <Route path='/showparam/:id' element={<Showparam/>}/>
          <Route path='/about/' element={<About/>}/>
          <Route path='/form/' element={<Form/>}/>

        </Routes>
      <Footer/>
      </Router>
    </div>
  )
}