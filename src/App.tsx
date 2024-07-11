import Pizzas from './components/Pizzas'
import CarritoPizzas from './components/CarritoPizzas'
import './index.css'
import { usePizza } from './hooks/usePizza'

function App() {
  
  const { pizza, data, agregarItemCarrito, eliminarItemCarrito, incrementarItem, decrementarItem, vaciarCarrito } = usePizza()

  console.log(pizza)

  return (
    <>
      <main className='container-xl mt-5'>
        <h1 className='text-center font-bold text-4xl'>Solicita tu Pizza!</h1>

        <CarritoPizzas
          pizza={pizza}
          eliminarItemCarrito={eliminarItemCarrito}
          incrementarItem={incrementarItem}
          decrementarItem={decrementarItem}
          vaciarCarrito={vaciarCarrito}
        />
        
        <div className='mt-5 grid md:grid-cols-3 md:gap-3 justify-center md:items-center max-w-4xl mx-auto'>
          {data.map(pizza => (
            <Pizzas
              key={pizza.id}
              pizza={pizza}
              agregarItemCarrito={agregarItemCarrito}
            />

          ))}
        </div>
      </main>
      
    </>
  )
}

export default App
