import {Grid} from "../src/Grid";

describe("Grid", () => {
    const testGrid = new Grid(
        5, 3, 0, 0, 7, 0, 0, 0, 0,
        6, 0, 0, 1, 9, 5, 0, 0, 0,
        0, 9, 8, 0, 0, 0, 0, 6, 0,
        8, 0, 0, 0, 6, 0, 0, 0, 3,
        4, 0, 0, 8, 0, 3, 0, 0, 1,
        7, 0, 0, 0, 2, 0, 0, 0, 6,
        0, 6, 0, 0, 0, 0, 2, 8, 0,
        0, 0, 0, 4, 1, 9, 0, 0, 5,
        0, 0, 0, 0, 8, 0, 0, 7, 9
    );

    it("should need to supply the right number of values", () => {
        const t = () => {
            new Grid(1, 2, 3, 4);
        };
        expect(t).toThrow(Error);
    });

    it("should be able to create grid with right number of values", () => {
        expect(testGrid !== null);
    });

    it("should get all the numbers on row 0 of the test grid", () => {
        const row = testGrid.row(0);
        expect(row).toEqual([5, 3, 0, 0, 7, 0, 0, 0, 0]);
    });

    it("should get all the numbers on row 1 of the test grid", () => {
        const row = testGrid.row(1);
        expect(row).toEqual([6, 0, 0, 1, 9, 5, 0, 0, 0]);
    });

    it("should get all the numbers on row 8 of the test grid", () => {
        const row = testGrid.row(8);
        expect(row).toEqual([0, 0, 0, 0, 8, 0, 0, 7, 9]);
    });

    it("should get all numbers in column 0 of the test grid", () => {
        const col = testGrid.col(0);
        expect(col).toEqual([5, 6, 0, 8, 4, 7, 0, 0, 0]);
    });

    it("should get all numbers in column 1 of the test grid", () => {
        const col = testGrid.col(1);
        expect(col).toEqual([3, 0, 9, 0, 0, 0, 6, 0, 0]);
    });

    it("should get all numbers in column 8 of the test grid", () => {
        const col = testGrid.col(8);
        expect(col).toEqual([0, 0, 0, 3, 1, 6, 0, 5, 9]);
    });

    it("should get all numbers in block 0, 0", () => {
        const block00 = testGrid.block(0, 0);
        expect(block00).toEqual([5, 3, 0, 6, 0, 0, 0, 9, 8]);
    });

    it("should get all numbers in block 1, 0", () => {
        const block10 = testGrid.block(1, 0);
        expect(block10).toEqual([8, 0, 0, 4, 0, 0, 7, 0, 0]);
    });

    it("should get all numbers in block 2, 2", () => {
        const block22 = testGrid.block(2, 2);
        expect(block22).toEqual([2, 8, 0, 0, 0, 5, 0, 7, 9]);
    });

    it("should get square value at 0, 0", () => {
        const squareValue = testGrid.getSquare(0, 0);
        expect(squareValue).toEqual(5);
    });

    it("should get square value at 8, 8", () => {
        const squareValue = testGrid.getSquare(8, 8);
        expect(squareValue).toEqual(9);
    });

    it("should determine correct potential moves for 0, 2", () => {
        const potentialMove = testGrid.potentialMove(0, 2);
        expect(potentialMove.possibleValues).toEqual([1, 2, 4]);
    })
});