const findIntersections = wires => {
    const directions = { U: [0, -1], R: [1, 0], D: [0, 1], L: [-1, 0] };
    const trace = [{}, {}];

    wires.forEach((wire, index) => {
        let [x, y, steps] = [0, 0, 0];
        wire.forEach(path => {
            const [direction, distance] = [path.charAt(0), path.substr(1)];
            for (let i = 0; i < distance; i += 1) {
                x += directions[direction][0];
                y += directions[direction][1];
                steps += 1;
                trace[index][`${x},${y}`] = { x, y, steps };
            }
        });
    });

    return Object.keys(trace[0])
        .filter(key => trace[1][key])
        .map(key => ({ x: trace[0][key].x, y: trace[0][key].y, steps: trace[0][key].steps + trace[1][key].steps }));
};

export const part1 = wires => Math.min(...findIntersections(wires).map(({ x, y }) => Math.abs(x) + Math.abs(y)));
export const part2 = wires => Math.min(...findIntersections(wires).map(({ steps }) => steps));
