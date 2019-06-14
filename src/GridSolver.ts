import {Grid} from "./Grid";

export class GridSolver {

    private static solveGrid(grid: Grid): Grid {
        if (grid.isFull()) return grid;
        const nextMove = grid.nextPotentialMove();
        if (nextMove !== null) {
            const possibleGrids = nextMove.possibleValues.map
            (pv => grid.clone().setSquare(nextMove.row, nextMove.col, pv));
            return this.findSolution(possibleGrids);
        } else return null;
    }

    private static findSolution(grids: Array<Grid>): Grid {
        while (grids.length > 0) {
            const possibleSolution = this.solveGrid(grids.shift());
            if (possibleSolution !== null) return possibleSolution;
        }
        return null;
    }

    static solve(grid: Grid): Grid {
        return this.findSolution(new Array<Grid>(grid));
    }
}