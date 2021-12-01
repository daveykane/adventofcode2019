import Intcode from "../utils/Intcode";

const directions = { 1: [0, -1], 2: [0, 1], 3: [-1, 0], 4: [1, 0] };
const mapMaze = (program, findOxygen = true) => {
    const grid = [];
    const oxygen = { total: 0 };
    const visited = {};
    const queue = [{ x: 0, y: 0, steps: 0, maze: new Intcode(program) }];

    grid[0] = [];
    grid[0][0] = true;

    while (queue.length) {
        const current = queue.shift();
        const key = `${current.x},${current.y}`;

        if (!visited[key]) {
            const { maze, steps } = current;
            visited[key] = true;

            for (let i = 1; i <= 4; i += 1) {
                const [x, y] = directions[i];
                const newX = current.x + x;
                const newY = current.y + y;
                const newMaze = maze.clone();
                const output = newMaze.run([i], true);
                grid[newY] = grid[newY] || [];

                if (output === 0) {
                    visited[`${newX},${newY}`] = true;
                    grid[newY][newX] = false;
                } else {
                    grid[newY][newX] = true;

                    if (output === 2) {
                        oxygen.x = newX;
                        oxygen.y = newY;

                        if (findOxygen) {
                            return steps + 1;
                        }
                    } else {
                        queue.push({ x: newX, y: newY, steps: steps + 1, maze: newMaze });
                    }
                }
            }
        }
    }

    return { grid, oxygen };
};

export const part1 = program => mapMaze(program);
export const part2 = program => {
    const { grid, oxygen } = mapMaze(program, false);
    const queue = [{ x: oxygen.x, y: oxygen.y, minutes: 0 }];
    const visited = {};

    while (queue.length) {
        const current = queue.shift();
        const key = `${current.x},${current.y}`;

        if (!visited[key]) {
            visited[key] = true;

            if (grid[current.y][current.x]) {
                oxygen.total = Math.max(current.minutes, oxygen.total);
                for (let i = 1; i <= 4; i += 1) {
                    const [x, y] = directions[i];
                    queue.push({ x: current.x + x, y: current.y + y, minutes: current.minutes + 1 });
                }
            }
        }
    }

    return oxygen.total;
};
