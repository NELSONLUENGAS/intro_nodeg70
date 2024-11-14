const { existsSync, readFileSync, writeFileSync, appendFileSync } = require('fs')


const readCar = (path) => {

    let response

    if (!existsSync(path)) {
        response = JSON.stringify([], null, 2)
        appendFileSync(path, response)
    } else {
        response = readFileSync(path, 'utf-8');
    }

    return JSON.parse(response)
}

const addCar = (path, id, marca, modelo, año, color, precio) => {

    const prevCars = readCar(path)
    const car = {
        id,
        marca,
        modelo,
        año,
        color,
        precio
    }

    const newList = [
        ...prevCars,
        car
    ]

    writeFileSync(path, JSON.stringify(newList, null, 2))

    console.log('🚔 Auto guardado con éxito 😁 \n')
}

const removeCar = (path, id) => {

    const prevCars = readCar(path)
    const exists = prevCars.find((car) => car.id == id);
    if (exists) {

        const newList = prevCars.filter((car) => car.id != id)

        writeFileSync(path, JSON.stringify(newList, null, 2))

        console.log('🚔 Auto eliminado con éxito 😁 \n')
        console.table(exists)
    } else {
        console.log('Lo sentimos ese carro no existe 😥')
    }
}

module.exports = {
    readCar,
    addCar,
    removeCar
}
