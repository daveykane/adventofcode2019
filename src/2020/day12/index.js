import { lcm } from "../utils";

const parseMoons = moons => moons.map(moon => moon.match(/(-?\d+)/g).map(Number));
const getVelocities = moons => Array.from({ length: moons.length }, () => [0, 0, 0]);
const getHash = (positions, velocities, i) => positions.map((moon, idx) => `${moon[i]}${velocities[idx][i]}`).join("");
const moveMoons = (positions, velocities) => {
    const [moons, vels] = [[...positions], [...velocities]];

    moons.forEach((moon, index) => {
        moons.forEach((m, idx) => {
            if (index !== idx) {
                for (let i = 0; i < 3; i += 1) {
                    if (moon[i] !== m[i]) {
                        vels[index][i] += moon[i] > m[i] ? -1 : 1;
                    }
                }
            }
        });
    });

    vels.forEach((velocity, index) => {
        for (let i = 0; i < 3; i += 1) {
            moons[index][i] += velocity[i];
        }
    });

    return [moons, vels];
};

export const part1 = (moons, steps) => {
    const positions = parseMoons(moons);
    const velocities = getVelocities(moons);

    for (let i = 0; i < steps; i += 1) {
        moveMoons(positions, velocities);
    }

    return positions.reduce((energy, moon, index) => {
        const pot = moon.reduce((e, m) => e + Math.abs(m), 0);
        const kin = velocities[index].reduce((e, v) => e + Math.abs(v), 0);
        return energy + pot * kin;
    }, 0);
};

export const part2 = moons => {
    const looped = [];
    const positions = parseMoons(moons);
    const velocities = getVelocities(moons);

    for (let i = 0; i < 3; i += 1) {
        let steps = 0;
        const hash = getHash(positions, velocities, i);

        while (steps > -1) {
            steps += 1;
            moveMoons(positions, velocities);
            const newHash = getHash(positions, velocities, i);

            if (hash === newHash) {
                looped[i] = steps;
                break;
            }
        }
    }

    return looped.reduce(lcm);
};
