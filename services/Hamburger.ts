import IHamburger from "../interfaces/Hamburger";
import ConfiguratedProperties from "../interfaces/CalculateProperties";
import HamburgerProperty from "../interfaces/HamburgerProperty";

import { HamburgerSize } from "../enums/HamburgerSize";
import { HamburgerStuffing } from "../enums/HamburgerStuffing";
import { HamburgerTopping } from "../enums/HamburgerTopping";

class Hamburger implements IHamburger{
    static SIZE_SMALL = HamburgerSize.SMALL;
    static SIZE_LARGE = HamburgerSize.LARGE;

    #toppings = [];

    static STUFFING_CHEESE = HamburgerStuffing.CHEESE;
    static STUFFING_SALAD = HamburgerStuffing.SALAD;
    static STUFFING_POTATO = HamburgerStuffing.POTATO;

    static TOPPING_SPICE = HamburgerTopping.SPICE;
    static TOPPING_MAYO = HamburgerTopping.MAYO;

    constructor(
        private size: HamburgerSize,
        private stuffing: HamburgerStuffing
    ) {}

    getSize(): HamburgerSize {
        return this.size;
    }

    getStuffing(): HamburgerStuffing {
        return this.stuffing;
    }

    getToppings(): HamburgerTopping[] {
        return this.#toppings;
    }

    #alreadyHaveTopping(topping): boolean {
        return !!this.#toppings.find(item => item === topping);
    }

    addTopping(topping: HamburgerTopping): void {
        if (this.#alreadyHaveTopping(topping)) return

        this.#toppings.push(topping);
    }

    #toppingsAfterRemove(topping: HamburgerTopping): HamburgerTopping[] {
        return this.#toppings.filter(item => item !== topping);
    }

    removeTopping(topping: HamburgerTopping): void {
        if (!this.#alreadyHaveTopping(topping)) return

        this.#toppings = this.#toppingsAfterRemove(topping);
    }

    #haveNoTopping(): boolean {
        return !this.#toppings.length;
    }

    #getToppingsPrices(toppings) {
        return this.#toppings.map(topping => toppings[topping].price)
    }

    #getToppingPricesSum(prices: number[]) {
        return prices
            .reduce((item, accumulator) => (
                accumulator + item ), 0
            )
    }

    #calculatedToppingsPrice(toppings: HamburgerProperty) {
        if ( this.#haveNoTopping() ) return 0;

        return this.#getToppingPricesSum(
            this.#getToppingsPrices(toppings)
        )
    }

    #calculatedStuffingPrice(stuffings: HamburgerProperty) {
        return stuffings[this.stuffing].price;
    }

    #calculateSizePrice(sizes: HamburgerProperty) {
        return sizes[this.size].price;
    }

    calculatePrice(configs: ConfiguratedProperties): number {
        const { sizes, stuffings, toppings } = configs
        return (
            this.#calculateSizePrice(sizes) +
            this.#calculatedStuffingPrice(stuffings) +
            this.#calculatedToppingsPrice(toppings)
        )
    }

    #getToppingsCalories(toppings: HamburgerProperty): number[] {
        return this.#toppings.map(topping => toppings[topping].calories)
    }

    #getToppingCaloriesSum(calories: number[]): number {
        return calories
            .reduce((item, accumulator) => (
                accumulator + item ), 0
            )
    }

    #calculatedToppingsCalories(toppings: HamburgerProperty) {
        if ( this.#haveNoTopping() ) return 0;

        return this.#getToppingCaloriesSum(
            this.#getToppingsCalories(toppings)
        )
    }

    #calculatedStuffingCalories(stuffings: HamburgerProperty) {
        return stuffings[this.stuffing].calories;
    }

    #calculateSizeCalories(sizes: HamburgerProperty) {
        return sizes[this.size].calories;
    }

    calculateCalories(configs: ConfiguratedProperties): number {
        const { sizes, stuffings, toppings } = configs
        return (
            this.#calculateSizeCalories(sizes) +
            this.#calculatedStuffingCalories(stuffings) +
            this.#calculatedToppingsCalories(toppings)
        )
    }
}

export const hamburgerInstance = new Hamburger(
    Hamburger.SIZE_LARGE,
    Hamburger.STUFFING_CHEESE
);

export default Hamburger;

