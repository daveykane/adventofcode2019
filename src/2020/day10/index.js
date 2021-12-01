const getAsteroids = map =>
    map.reduce((acc, row, y) => {
        const locations = row.split("").map((item, x) => ({ x, y, item }));
        return [...acc, ...locations.filter(({ x, y, item }) => item === "#")];
    }, []);

const getBestStation = map => {
    const asteroids = getAsteroids(map);
    return asteroids.reduce((station, { x: x1, y: y1 }) => {
        const others = asteroids.filter(({ x: x2, y: y2 }) => x1 !== x2 || y1 !== y2);
        const visible = new Set(others.map(({ x: x2, y: y2 }) => Math.atan2(y1 - y2, x2 - x1)));
        return !station.visible || visible.size > station.visible.size ? { visible, x: x1, y: y1 } : station;
    });
};

export const part1 = map => getBestStation(map).visible.size;
export const part2 = (map, position) => {
    const station = getBestStation(map);
    const asteroids = getAsteroids(map);
    const q1 = [...station.visible].filter(rad => rad > 0 && rad <= Math.PI / 2).sort();
    const q2 = [...station.visible].filter(rad => rad > Math.PI / 2 && rad <= Math.PI).sort();
    const q3 = [...station.visible].filter(rad => rad > -Math.PI && rad <= -Math.PI / 2).sort();
    const q4 = [...station.visible].filter(rad => rad > -Math.PI / 2 && rad <= 0).sort();
    const quads = q1.reverse().concat(q4.reverse(), q3.reverse(), q2.reverse());
    const destroyed = asteroids.find(ast => Math.atan2(station.y - ast.y, ast.x - station.x) === quads[position]);
    return destroyed.x * 100 + destroyed.y;
};
