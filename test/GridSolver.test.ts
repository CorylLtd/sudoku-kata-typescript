import {Grid} from "../src/Grid";
import {GridSolver} from "../src/GridSolver";

describe("GridSolver", () => {


    const easyGrid = new Grid(
        5, 3, 0, 0, 7, 0, 0, 0, 0,
        6, 0, 0, 1, 9, 5, 0, 0, 0,
        0, 9, 8, 0, 0, 0, 0, 6, 0,
        8, 0, 0, 0, 6, 0, 0, 0, 3,
        4, 0, 0, 8, 0, 3, 0, 0, 1,
        7, 0, 0, 0, 2, 0, 0, 0, 6,
        0, 6, 0, 0, 0, 0, 2, 8, 0,
        0, 0, 0, 4, 1, 9, 0, 0, 5,
        0, 0, 0, 0, 8, 0, 0, 7, 9
    )

    const mediumGrid = new Grid(
        0, 4, 2, 7, 9, 0, 0, 0, 0,
        0, 3, 0, 0, 8, 0, 0, 6, 0,
        8, 0, 5, 1, 0, 0, 0, 0, 0,
        0, 0, 4, 0, 7, 0, 0, 0, 0,
        3, 0, 8, 0, 4, 0, 2, 0, 9,
        0, 0, 0, 0, 3, 0, 8, 0, 0,
        0, 0, 0, 0, 0, 4, 9, 0, 7,
        0, 2, 0, 0, 5, 0, 0, 4, 0,
        0, 0, 0, 0, 6, 7, 3, 2, 0
    )

    const hardGrid = new Grid(
        0, 0, 0, 0, 0, 8, 0, 9, 0,
        1, 9, 0, 3, 0, 0, 4, 0, 0,
        0, 0, 0, 0, 0, 7, 0, 5, 6,
        0, 0, 9, 0, 0, 0, 5, 0, 4,
        2, 6, 0, 0, 0, 0, 0, 1, 9,
        4, 0, 3, 0, 0, 0, 6, 0, 0,
        5, 3, 0, 2, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 3, 0, 2, 7,
        0, 8, 0, 1, 0, 0, 0, 0, 0
    )

    const evilGrid = new Grid(
        0, 1, 0, 0, 0, 0, 0, 0, 8,
        6, 0, 4, 0, 1, 0, 0, 0, 0,
        0, 0, 0, 8, 0, 2, 6, 0, 0,
        4, 0, 2, 0, 0, 5, 0, 0, 9,
        0, 0, 0, 0, 4, 0, 0, 0, 0,
        3, 0, 0, 9, 0, 0, 5, 0, 4,
        0, 0, 1, 7, 0, 8, 0, 0, 0,
        0, 0, 0, 0, 3, 0, 1, 0, 2,
        9, 0, 0, 0, 0, 0, 0, 5, 0
    )

    function assertSolved(name: string, solution: Grid) {
        expect(solution).not.toBeNull();
        expect(solution.isFull()).toBeTruthy();
        console.log(name, solution);
    }

    it("should solve 'easy' puzzle", () => {
        assertSolved('easy puzzle', GridSolver.solve(easyGrid))
    });

    it("should solve 'medium' puzzle", () => {
        assertSolved('medium puzzle', GridSolver.solve(mediumGrid))
    });

    it("should solve 'hard' puzzle", () => {
        assertSolved('hard puzzle', GridSolver.solve(hardGrid))
    });

    it("should solve 'evil' puzzle", () => {
        assertSolved('evil puzzle', GridSolver.solve(evilGrid))
    });
});