import Hamburger from "../services/Hamburger";

test('getting hamburger size and stuffing', () => {
    const hamburgerOne = new Hamburger(
        Hamburger.SIZE_LARGE,
        Hamburger.STUFFING_CHEESE,
    )

    expect(hamburgerOne.getSize()).toBe('large');
    expect(hamburgerOne.getStuffing()).toBe('cheese');

    const hamburgerTwo = new Hamburger(
        Hamburger.SIZE_SMALL,
        Hamburger.STUFFING_POTATO,
    )

    expect(hamburgerTwo.getSize()).toBe('small');
    expect(hamburgerTwo.getStuffing()).toBe('potato');
});