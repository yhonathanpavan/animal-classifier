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
    { input: [1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 4, 1, 1, 0], output: {bear: 1} },
    { input: [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 4, 1, 1, 1], output: {cat: 1} },
    { input: [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 4, 1, 1, 0], output: {dog: 1} }
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