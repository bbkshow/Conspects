import pow from "./power";

// describe("Test power function", () => {
//     test("3 ** 3 = 27", () => {
//         console.log("3 to power 3 equal 27");
//         expect(pow(3, 3)).toBe(27);
//     });

//     test("1 ** 1 = 1", () => {
//         console.log("1 to power 1 equal 1");
//         expect(pow(1, 1)).toBe(1);
//     });
// });

describe("Test power 3", () => {
    beforeAll(() => {
        console.log("Тесты стартовали");
    });

    test("3 ** 2 = 9", () => {
        console.log("3 to power 2 equal 9");
        expect(pow(3, 2)).toBe(9);
    });

    afterAll(() => {
        console.log("Тесты закончились ");
    });
});
