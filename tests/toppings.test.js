import Hamburger, {hamburgerInstance as hamburger} from "../services/Hamburger";

test('testing topping get/add/remove logic', () => {
    expect(hamburger.getToppings()).toEqual([]);
    hamburger.addTopping(Hamburger.TOPPING_SPICE);
    expect(hamburger.getToppings()).toEqual(['spice']);
    hamburger.addTopping(Hamburger.TOPPING_SPICE);
    expect(hamburger.getToppings()).toEqual(['spice']);
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
    expect(hamburger.getToppings()).toEqual(['spice', 'mayo']);
    hamburger.removeTopping(Hamburger.TOPPING_MAYO);
    expect(hamburger.getToppings()).toEqual(['spice']);
    hamburger.removeTopping(Hamburger.TOPPING_SPICE);
    expect(hamburger.getToppings()).toEqual([]);
});