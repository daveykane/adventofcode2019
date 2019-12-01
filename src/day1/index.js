const calculateFuel = mass => Math.floor(mass / 3) - 2;
const additionalFuel = fuel => (fuel > 0 ? fuel + additionalFuel(calculateFuel(fuel)) : 0);

export const part1 = masses => masses.reduce((total, mass) => total + calculateFuel(mass), 0);
export const part2 = masses => masses.reduce((total, mass) => total + additionalFuel(calculateFuel(mass)), 0);
