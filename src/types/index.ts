export type MenuItem = {
    id: number
    nombre: string
    descripcion: string
    imagen: string
    precio: number
}

export type QuantityItem = MenuItem & {
    quantity: number
}