import Intcode from "../utils/Intcode";

const move = { 0: [0, 1], 1: [1, 0], 2: [0, -1], 3: [-1, 0] };
const paint = (program, initial = 0) => {
    const robot = new Intcode(program);
    const panel = { x: 0, y: 0, direction: 0 };
    const painted = { "0,0": initial };

    while (!robot.halted) {
        const location = `${panel.x},${panel.y}`;
        const colour = robot.run([painted[location] || 0], true);
        const direction = robot.run([], true);
        if (!robot.halted) {
            painted[location] = colour;
            panel.direction = (((panel.direction + (direction === 0 ? -1 : 1)) % 4) + 4) % 4;
            panel.x += move[panel.direction][0];
            panel.y += move[panel.direction][1];
        }
    }

    return painted;
};

export const part1 = program => Object.keys(paint(program)).length;
export const part2 = program => {
    const painted = paint(program, 1);
    const panels = Object.keys(painted);
    const xPanels = panels.map(panel => parseInt(panel.split(",")[0], 10));
    const yPanels = panels.map(panel => parseInt(panel.split(",")[1], 10));
    const [minY, maxY] = [Math.min(...yPanels.sort()), Math.max(...yPanels.sort())];
    const [minX, maxX] = [Math.min(...xPanels.sort()), Math.max(...xPanels.sort())];
    const grid = Array.from({ length: maxY - minY + 1 }, () => " ".repeat(maxX - minX + 1).split(""));

    panels.forEach(panel => {
        const [x, y] = panel.split(",");
        grid[Math.abs(y)][x] = painted[panel] ? "#" : " ";
    });

    return grid.map(row => row.join(""));
};
