const brain = require('brain.js');

const network = new brain.NeuralNetwork();

console.log("Machine learning is traning...");
/**
 * Attributes definitions:
 * 
 * Inputs:
 * [0] -> hair
 * [1] -> feathers
 * [2] -> eggs
 * [3] -> milk
 * [4] -> airborne
 * [5] -> aquatic
 * [6] -> predator
 * [7] -> toothed
 * [8] -> backbone
 * [9] -> breathes
 * [10] -> venomous
 * [11] -> fins
 * [12] -> legs
 * [13] -> tail
 * [14] -> domestic
 * [15] -> catsize
 */
network.train([
    { input: [1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 4, 1, 1, 0], output: { bear: 1 } },
    { input: [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 4, 1, 1, 1], output: { cat: 1 } },
    { input: [0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 2, 1, 0, 1], output: { swan: 1 } },
    { input: [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 4, 1, 0, 0], output: { tuatara: 1 } },
    { input: [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0], output: { bass: 1 } },
    { input: [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 4, 1, 0, 0], output: { hare: 1 } },
    { input: [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0], output: { carp: 1 } },
    { input: [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 4, 0, 1, 0], output: { cavy: 1 } },
    { input: [0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 2, 1, 1, 0], output: { chicken: 1 } },
    { input: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: { clam: 1 } },
    { input: [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0], output: { crab: 1 } },
    { input: [0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 2, 1, 0, 0], output: { crow: 1 } },
    { input: [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1], output: { dogfish: 1 } },
    { input: [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1], output: { dolphin: 1 } },
    { input: [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 4, 0, 0, 1], output: { aardvark: 1 } },
    { input: [0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 2, 1, 0, 0], output: { duck: 1 } },
    { input: [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 4, 1, 0, 1], output: { elephant: 1 } },
    { input: [0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 2, 1, 0, 1], output: { flamingo: 1 } },
    { input: [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 6, 0, 0, 0], output: { flea: 1 } },
    { input: [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 4, 0, 0, 0], output: { frog: 1 } },
    { input: [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 2, 1, 0, 0], output: { fruitbat: 1 } },
    { input: [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 6, 0, 0, 0], output: { gnat: 1 } },
    { input: [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 4, 1, 1, 1], output: { goat: 1 } },
    { input: [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 2, 0, 0, 1], output: { gorilla: 1 } },
    { input: [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 2, 1, 0, 0], output: { gull: 1 } },
    { input: [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 4, 1, 1, 0], output: { hamster: 1 } },
    { input: [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 6, 0, 1, 0], output: { honeybee: 1 } },
    { input: [0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 6, 0, 0, 0], output: { ladybird: 1 } },
    { input: [0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 2, 1, 0, 0], output: { lark: 1 } },
    { input: [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 4, 1, 0, 1], output: { lion: 1 } },
    { input: [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 6, 0, 0, 0], output: { lobster: 1 } },
    { input: [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 8, 0, 0, 1], output: { octopus: 1 } },
    { input: [0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 2, 1, 0, 1], output: { penguin: 1 } },
    { input: [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 8, 1, 0, 0], output: { scorpion: 1 } },
    { input: [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], output: { seahorse: 1 } },
    { input: [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1], output: { seal: 1 } },
    { input: [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 2, 1, 0, 0], output: { squirrel: 1 } },
    { input: [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 5, 0, 0, 0], output: { starfish: 1 } },
    { input: [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1], output: { stingray: 1 } },
    { input: [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 0, 1], output: { sealion: 1 } },
    { input: [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 1, 0, 1], output: { tortoise: 1 } },
    { input: [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], output: { worm: 1 } },
    { input: [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 4, 1, 1, 0], output: { dog: 1 } }
]);
console.log("Machine learning is done!");


/**
 * Function to classify a machine learning result.
 * 
 * @param {Array} array 
 * @returns {String} classification result.
 */
const classify = (array) => {
    result = network.run(array);
    console.log(result);
    resultList = Object.entries(result);
    return resultList.reduce((item, result) => item[1] > result[1] ? item : result)[0];
};

module.exports = { classify };