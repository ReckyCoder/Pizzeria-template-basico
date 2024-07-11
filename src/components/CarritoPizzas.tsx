import { ShoppingCartIcon, XCircleIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import { MenuItem, QuantityItem } from '../types'
import { useMemo } from 'react'

type CarritoPizzasProps = {
    pizza: QuantityItem[]
    eliminarItemCarrito: (id: MenuItem['id']) => void
    incrementarItem: (id: MenuItem['id']) => void
    decrementarItem: (id: MenuItem['id']) => void
    vaciarCarrito: () => void
}

export default function CarritoPizzas({ pizza, eliminarItemCarrito, incrementarItem, decrementarItem, vaciarCarrito }: CarritoPizzasProps) {

    const isEmpty = useMemo(() => pizza.length === 0, [pizza])

    return (
        <div className=' bg-green-600 w-full h-24 mt-5'>
            <div className='flex justify-end w-full h-full items-center'>
                <div className=''>
                    <ShoppingCartIcon className='h-8 w-8 text-slate-200 me-20 bg-black bg-opacity-30 rounded carrito relative'/>
                    <div className=' bg-slate-100 absolute right-0 md:right-20 min-w-96  z-10 shadow-md rounded-xl p-3'>
                        {isEmpty ? (<p className='text-center py-2 bg-stone-600 text-white mb-2 rounded font-bold'>El carrito esta vacio</p>) :(

                            <>
                                <p className='text-center py-2 bg-stone-600 text-white mb-2 rounded font-bold'>Productos del Carrito</p>

                                <table className=''>
                                    <thead className=''>
                                        <tr className='bg-green-400 '>
                                            <th className='p-2 font-bold'>Imagen</th>
                                            <th className='p-2 font-bold'>Nombre</th>
                                            <th className='p-2 font-bold'>Precio</th>
                                            <th className='p-2 font-bold'>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        {pizza.map(pizza => (
                                            
                                            <tr className='text-center border-b-2 border-b-gray-300' key={pizza.id}>
                                                <td>
                                                    <img className=' h-16 w-30 p-2 rounded-xl' src={`/img/${pizza.imagen}.jpg`} alt="pizza" />
                                                </td>
                                                <td className='p-2'>{pizza.nombre}</td>
                                                <td className='font-bold p-2'>{pizza.precio}</td>
                                                <td className='grid grid-cols-3 items-center mt-5'>
                                                    <button onClick={() => decrementarItem(pizza.id)} className='mx-auto hover:-translate-y-0.5 duration-75'>
                                                        <MinusCircleIcon className='h-6 w-6 text-gray-600 hover:text-gray-800 rounded'/>
                                                    </button>
                                                    <p>{pizza.quantity}</p>
                                                    <button onClick={() => incrementarItem(pizza.id)} className='mx-auto hover:-translate-y-0.5 duration-75'>
                                                        <PlusCircleIcon className='h-6 w-6 text-gray-600 hover:text-gray-800 rounded'/>
                                                    </button>
                                                </td>
                                                <td className=''>
                                                    <button onClick={() => eliminarItemCarrito(pizza.id)} className='mx-4 mt-2'>
                                                        <XCircleIcon className='h-8 w-8 text-red-500 hover:text-red-600'/>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className='text-end mx-4 my-4 font-bold'>Total: $000</p>

                                <button onClick={() => vaciarCarrito()} className='w-full p-2 bg-green-400 font-bold rounded hover:bg-green-600'>Vaciar Carrito</button>
                            </>
                            
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
            
    )
}
