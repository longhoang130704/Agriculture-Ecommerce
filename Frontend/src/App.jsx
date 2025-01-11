import './App.css'
import Item from './components/Item'
import CartItem from './components/CartItem'
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {

  return (
    <div className='bg-slate-300 flex flex-col items-center justify-center gap-10 p-10 w-screen'>
      <Item/>
      <CartItem/>
      <Login/>
      <Signup/>
    </div>
  )
}

export default App
