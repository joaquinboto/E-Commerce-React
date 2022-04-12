export const products = [

    {
        nombre : "Conjunto",
        imagen : "https://images.pexels.com/photos/6900594/pexels-photo-6900594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        precio : "5000",
        id : 1,
        categoria : "Conjuntos",
        stock: 5,
        idCategoria: 5
    },
    {
        nombre : "Zapatillas",
        imagen : "https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        precio : "7700",
        id : 2,
        categoria : "Zapatillas",
        stock: 10,
        idCategoria: 5
    },
    {
        nombre : "Saco",
        imagen : "https://images.pexels.com/photos/7252051/pexels-photo-7252051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        precio : "1200",
        id : 3,
        categoria : "Saco",
        stock: 15,
        idCategoria: 1
    },
    {
        nombre : "Remera",
        imagen : "https://images.pexels.com/photos/10495160/pexels-photo-10495160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        precio : "6050",
        id : 4,
        categoria : "Remeras",
        stock: 2,
        idCategoria: 2
    },
    {
        nombre : "Jean",
        imagen : "https://images.pexels.com/photos/4173695/pexels-photo-4173695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        precio : "300",
        id : 5,
        categoria : "Pantalones",
        stock: 3,
        idCategoria: 10
    },
    {
        nombre : "Campera",
        imagen : "https://images.pexels.com/photos/4922976/pexels-photo-4922976.jpeg?cs=srgb&dl=pexels-ekaterina-belinskaya-4922976.jpg&fm=jpg",
        precio : "3000",
        id : 6,
        categoria : "Camperas",
        stock: 20,
        idCategoria: 20

    },
    {
        nombre : "Gorra",
        imagen : "https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        precio : "500",
        id : 7,
        categoria : "Accesorios",
        stock: 12,
        idCategoria: 50
    },
    {
        nombre : "Tapado",
        imagen : "https://images.pexels.com/photos/10032500/pexels-photo-10032500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        precio : "14000",
        id : 8,
        categoria : "Tapados",
        stock: 2,
        idCategoria: 8
    }

]

const is_ok = true

export const autoFech = (products) => {

    return new Promise ((resolve , rejects) => {

        setTimeout(() => {
            if (is_ok) {
                resolve(products)
            } else {
                rejects('Error')
            }

        }, 1000);

    })

}