const path = (direct, object, orbit) => (!direct[object] ? orbit : path(direct, direct[object], [...orbit, object]));
const directOrbits = (orbits, orbit) => {
    const [orbitting, orbitter] = orbit.split(")");
    return { ...orbits, [orbitter]: orbitting };
};

export const part1 = orbits => {
    const direct = orbits.reduce(directOrbits, {});
    return Object.keys(direct).reduce((acc, key) => acc + path(direct, direct[key], [key]).length, 0);
};

export const part2 = orbits => {
    const direct = orbits.reduce(directOrbits, {});
    const you = path(direct, "YOU", []);
    const san = path(direct, "SAN", []);
    const firstSharedParent = you.find(object => san.includes(object));
    return you.indexOf(firstSharedParent) - 1 + (san.indexOf(firstSharedParent) - 1);
};
