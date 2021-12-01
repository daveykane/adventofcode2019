import Intcode from "../utils/Intcode";

export const part1 = program => {
    const grid = [];
    const ascii = new Intcode(program, true);
    let total = 0;
    let curX = 0;
    let curY = 0;

    while (!ascii.halted) {
        const output = ascii.run([], true);
        grid[curY] = grid[curY] || [];

        if (output === 10) {
            curX = 0;
            curY += 1;
        } else {
            grid[curY][curX] = output === 35;
            curX += 1;
        }
    }

    for (let y = 0; y < grid.length; y += 1) {
        for (let x = 0; x < grid[y].length; x += 1) {
            if (
                grid[y][x] &&
                grid[y - 1] &&
                grid[y + 1] &&
                grid[y - 1][x] &&
                grid[y + 1][x] &&
                grid[y][x - 1] &&
                grid[y][x + 1]
            ) {
                total += x * y;
            }
        }
    }

    return total;
};

export const part2 = () => {};
