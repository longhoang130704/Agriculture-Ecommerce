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
// import Input, { TextAreaInput } from './components/Input';
import AddProduct from './components/AddProduct';

const App = () => {

  return (
    <div className='bg-slate-300 flex flex-col items-center justify-center gap-10 p-10 w-screen'>
      <AddProduct/>
    </div>
  )
}

export default App
