import {
    HamburgerSize,
    HamburgerStuffing,
    HamburgerTopping,
} from "../services/Hamburger";

export default interface Hamburger {
    getSize(): HamburgerSize,
    getStuffing(): HamburgerStuffing,
    getToppings(): HamburgerTopping[],
    addTopping(topping: HamburgerTopping): void,
    removeTopping(topping: HamburgerTopping): void,
};
