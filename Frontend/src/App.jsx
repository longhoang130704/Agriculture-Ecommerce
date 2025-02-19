import './App.css'
import Item from './components/Item'
import ItemSupplier from './components/ItemSupplier'
import ItemSupplierGray from './components/ItemSupplierGray'
import DiscountPopup from './components/DiscountPopup'
import BonusPopup from './components/BonusPopup'
import ExpiredPopup from './components/ExpiredPopup'
import CartItem from './components/CartItem'
import Login from './components/Login'
import Signup from './components/Signup'
import ChartItem, { ShortChartItem } from './components/ChartItem'
import Input, { TextAreaInput } from './components/Input';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct'
import ProposeItem from './components/ProposeItem'
import ProposePage from './pages/ProposePage';
import Category from './components/Category';
import AddProductButton from './components/AddProductButton'
import FilterCell from './components/FilterCell'
import StockPage from './pages/StockPage'
const App = () => {
  
  return (

    // <div className='bg-slate-300 flex flex-col items-center justify-center gap-10 p-10  w-screen'>
      <StockPage/>
    // </div>
  )
}

export default App
