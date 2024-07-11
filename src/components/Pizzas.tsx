import { MenuItem, QuantityItem } from "../types"

type PizzaProps = {
    pizza: MenuItem
    agregarItemCarrito: (pizza: MenuItem) => void
}

export default function Pizzas({pizza, agregarItemCarrito} : PizzaProps) {

    const { nombre, descripcion, imagen, precio } = pizza
    
    
    return (
        <div className="flex flex-col max-w-96 drop-shadow-md shadow-md rounded-md p-3 hover:-translate-y-1 duration-75">
            <div>
                <img className="rounded-xl md:h-40 md:w-72 object-cover" src={`/img/${imagen}.jpg`} alt="imagen pizza" />
            </div>
            <div className="flex justify-between mt-5 p-2">
                <h2 className=" text-2xl">{nombre}</h2>
                <p className=" text-2xl font-bold">$ {precio}</p>
            </div>
            <div className="p-2 bg-slate-100 rounded">
                <p>{descripcion}</p>
            </div>
            <button 
                className=" bg-green-600 py-1 rounded-md mt-4 font-bold text-white hover:bg-green-800"
                onClick={() => agregarItemCarrito(pizza)}
            >
                Agregar
            </button>
        </div>
    )
}
