import { useState, useEffect } from "react"
import { MenuItem, QuantityItem } from "../types"
import { pizzas } from '../data/db'

export const usePizza = () => {

    const initialPizza = () : QuantityItem[] => {
        const localStoragePizza = localStorage.getItem('pizza')
        return localStoragePizza ? JSON.parse(localStoragePizza) : []
    }
    
    const [data] = useState(pizzas)
    const [pizza, setPizza] = useState(initialPizza)
    
    useEffect(() => {
        localStorage.setItem('pizza', JSON.stringify(pizza))
    }, [pizza])
    
    function agregarItemCarrito(pizzaItem: MenuItem){
       
        const pizzaExist = pizza.findIndex(pizzaFind => pizzaFind.id === pizzaItem.id)
        console.log(pizzaExist)

        if(pizzaExist >= 0){

            const updatedPizza = [...pizza]
            updatedPizza[pizzaExist].quantity++
            setPizza(updatedPizza)

        } else {
            
            const newItem : QuantityItem = {...pizzaItem, quantity: 1}
            setPizza([...pizza, newItem])
        }

    }

    function eliminarItemCarrito(id: MenuItem['id']){

        setPizza(prevPizza => prevPizza.filter(pizza => pizza.id !== id))

    }

    function incrementarItem(id: MenuItem['id']){
        const incrementarItem = pizza.map(pizza => {

            if(pizza.id === id){
                return {
                    ...pizza,
                    quantity: pizza.quantity + 1
                }
            }

            return pizza
        })

        setPizza(incrementarItem)

        // const incrementarItem = pizza.findIndex(pizzaItem => pizzaItem.id === id)

        // console.log(incrementarItem)
        
        // if(incrementarItem >= 0){
        //     const updatedPizza = [...pizza]
        //     updatedPizza[incrementarItem].quantity++
        //     setPizza(updatedPizza)
        // } else {
        //     return pizza
        // }
    }

    function decrementarItem(id: MenuItem['id']){
        const decrementarItem = pizza.map(pizza => {
            if(pizza.id === id && pizza.quantity > 0){
                return{
                    ...pizza,
                    quantity: pizza.quantity - 1
                }
            } 

            return pizza
        }).filter(pizza => pizza.quantity !== 0)

        setPizza(decrementarItem)
    }

    function vaciarCarrito(){
        setPizza([])
    }

    return{
        pizza,
        data,
        agregarItemCarrito,
        eliminarItemCarrito,
        incrementarItem,
        decrementarItem,
        vaciarCarrito
    }

}