import carModel from "./models/cars.js";

export default class CarsDao {
    getById = (id) => {
        return carModel.findById(id);
    }
    saveCar = (car) => {
        return carModel.create(car);
    }
    updateCar = (id, car) => {
        return carModel.findByIdAndUpdate(id, car)
    }
    removeCar = (id) => {
        return carModel.findByIdAndDelete(id)
    }
}