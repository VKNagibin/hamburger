import Hamburger, { hamburgerInstance as hamburger } from "../services/Hamburger";
import sizes from "../configs/sizes";
import toppings from "../configs/toppings";
import stuffings from "../configs/stuffings";

const configs = {
    sizes,
    toppings,
    stuffings,
}

test('testing hamburger price calculating', () => {
    expect(hamburger
        .calculatePrice(configs))
        .toEqual(110);

    hamburger.addTopping(Hamburger.TOPPING_SPICE);
    expect(hamburger
        .calculatePrice(configs))
        .toEqual(125);

    const otherHamburger = new Hamburger(
        Hamburger.SIZE_SMALL,
        Hamburger.STUFFING_SALAD
    )

    expect(otherHamburger
        .calculatePrice(configs))
        .toEqual(70);

    otherHamburger.addTopping(Hamburger.TOPPING_SPICE);
    otherHamburger.addTopping(Hamburger.TOPPING_MAYO);

    expect(otherHamburger
        .calculatePrice(configs))
        .toEqual(105);
});

