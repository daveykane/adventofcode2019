const getChemicals = reactions =>
    reactions.reduce((chemicals, reaction) => {
        const [input, output] = reaction.trim().split(" => ");
        const [outputQuantity, outputChemical] = output.split(" ");
        const chemical = { quantity: parseInt(outputQuantity, 10), reactives: [] };

        input.match(/(\d+) ([A-Z]+)/g).forEach(material => {
            const [inputQuantity, inputChemical] = material.split(" ");
            chemical.reactives.push({ name: inputChemical, quantity: parseInt(inputQuantity, 10) });
        });

        return Object.assign(chemicals, { [outputChemical]: chemical });
    }, {});

const getOreForFuel = (chemicals, amount) => {
    const inventory = {};
    const reaction = (chemical, quantity) => {
        let ore = 0;
        const needed = Math.ceil(quantity / chemicals[chemical].quantity);

        chemicals[chemical].reactives.forEach(reactive => {
            const newQty = reactive.quantity * needed;
            if (reactive.name === "ORE") {
                ore += newQty;
            } else {
                inventory[reactive.name] = inventory[reactive.name] || 0;

                if (inventory[reactive.name] < newQty) {
                    ore += reaction(reactive.name, newQty - inventory[reactive.name]);
                }

                inventory[reactive.name] -= newQty;
            }
        });

        inventory[chemical] = (inventory[chemical] || 0) + needed * chemicals[chemical].quantity;
        return ore;
    };

    return reaction("FUEL", amount);
};

export const part1 = reactions => {
    const chemicals = getChemicals(reactions);
    return getOreForFuel(chemicals, 1);
};

export const part2 = reactions => {
    const chemicals = getChemicals(reactions);
    const target = 1e12;
    let fuel = 0;

    while (fuel > -1) {
        const ore = getOreForFuel(chemicals, fuel + 1);

        if (ore > target) {
            return fuel;
        }

        fuel = Math.max(fuel + 1, Math.floor(((fuel + 1) * target) / ore));
    }

    return fuel;
};
