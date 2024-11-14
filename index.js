const { readCar, addCar, removeCar } = require('./controllers/autos.controller')

const path = './data/autos.json'
const autos = [
    {
        "marca": "Toyota",
        "modelo": "Corolla",
        "año": 2020,
        "color": "Rojo",
        "precio": 18000
    },
    {
        "marca": "Honda",
        "modelo": "Civic",
        "año": 2021,
        "color": "Azul",
        "precio": 20000
    },
    {
        "marca": "Ford",
        "modelo": "Focus",
        "año": 2019,
        "color": "Negro",
        "precio": 17000
    },
    {
        "marca": "Chevrolet",
        "modelo": "Cruze",
        "año": 2022,
        "color": "Blanco",
        "precio": 22000
    },
    {
        "marca": "BMW",
        "modelo": "Serie 3",
        "año": 2021,
        "color": "Gris",
        "precio": 35000
    },
    {
        "marca": "Audi",
        "modelo": "A4",
        "año": 2020,
        "color": "Negro",
        "precio": 33000
    },
    {
        "marca": "Mercedes-Benz",
        "modelo": "Clase C",
        "año": 2018,
        "color": "Plata",
        "precio": 28000
    },
    {
        "marca": "Nissan",
        "modelo": "Altima",
        "año": 2021,
        "color": "Verde",
        "precio": 25000
    },
    {
        "marca": "Kia",
        "modelo": "Optima",
        "año": 2019,
        "color": "Marrón",
        "precio": 19000
    },
    {
        "marca": "Hyundai",
        "modelo": "Sonata",
        "año": 2020,
        "color": "Rojo",
        "precio": 21000
    }
]

const [func, ...args] = process.argv.slice(2)
const [id, marca, modelo, año, color, precio] = args;


switch (func) {

    case 'readCar':
        console.log('🚔Lista de Carros🚔 \n\n')
        readCar(path).forEach((car) => {
            console.log(`Carro #${car.id}: \n`)
            console.log(car)
            console.log('\n\n')
        })
        break;

    case 'addCar':
        addCar(path, Number(id), marca, modelo, Number(año), color, Number(precio));
        break;

    case 'removeCar':
        removeCar(path, id);
        break;

    default:
        console.log('Lo sentimos esa función no existe 😥')
        break;
}
