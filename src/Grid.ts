const GRID_SIZE = 9;
const BLOCK_SIZE = Math.floor(Math.sqrt(GRID_SIZE));

export class Move {
    constructor(public row: number, public col: number, public possibleValues: number[]) {
    }
}

export class Grid {

    private readonly gridNumbers: number[];

    constructor(...values: number[]) {
        if (values.length !== GRID_SIZE * GRID_SIZE) {
            throw new Error(`You must supply ${GRID_SIZE * GRID_SIZE} numbers`)
        }
        this.gridNumbers = values;
    }

    clone(): Grid {
        return new Grid(...this.gridNumbers);
    }

    /**
     * Get all numbers on a row
     * @param row - index of row to get numbers
     */
    row(row: number): number[] {
        return this.gridNumbers.slice(row * GRID_SIZE, (row + 1) * GRID_SIZE);
    }

    /**
     * Get all number on a column
     * @param col - index of column to get numbers
     */
    col(col: number): number[] {
        const colValues = [];
        for (let i = 0; i < GRID_SIZE; i++)
            colValues.push(this.getSquare(i, col));
        return colValues;
    }

    /**
     * Get all number in a square block
     * @param row - index of block row
     * @param col - index of block col
     */
    block(row: number, col: number): number[] {
        row *= BLOCK_SIZE;
        col *= BLOCK_SIZE;
        const blockValues = [];
        for (let i = 0; i < BLOCK_SIZE; i++) {
            const offset = Grid.getOffset(row + i, col);
            const subrow = this.gridNumbers.slice(offset, offset + BLOCK_SIZE);
            blockValues.push(...subrow);
        }
        return blockValues;

    }

    private static getOffset(row: number, col: number): number {
        return (row * GRID_SIZE) + col;
    }

    /**
     * Get the value of given square
     * @param row - index of the square row
     * @param col - index of the square column
     */
    getSquare(row: number, col: number): number {
        return this.gridNumbers[Grid.getOffset(row, col)];
    }

    setSquare(row: number, col:number, value: number): Grid {
        this.gridNumbers[Grid.getOffset(row, col)] = value;
        return this;
    }

    isFull(): boolean {
        return this.gridNumbers.every(n => n != 0);
    }

    /**
     * Get all moves possible for the given cell
     * @param row - row index of the cell
     * @param col - col index of the cell
     */
    potentialMove(row: number, col: number): Move {
        const possibleValues = Array(GRID_SIZE);
        for (let i = 0; i < GRID_SIZE; i++)
            possibleValues[i] = i + 1;
        const rowValues = this.row(row);
        const colValues = this.col(col);
        const blockValues = this.block(Math.floor(row / BLOCK_SIZE), Math.floor(col / BLOCK_SIZE));
        return new Move(row, col, possibleValues.filter(v => rowValues.indexOf(v) === -1 &&
            colValues.indexOf(v) === -1 && blockValues.indexOf(v) === -1));
    }

    nextPotentialMove(): Move {
        const potentialMoves = new Array<Move>();
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                if (this.getSquare(row, col) === 0) {
                    potentialMoves.push(this.potentialMove(row, col));
                }
            }
        }
        return potentialMoves.sort((a,b) => a.possibleValues.length - b.possibleValues.length).shift();
    }
}