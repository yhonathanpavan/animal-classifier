const classifier = require("./../model/Classifier");

const animalsEnum = require("../enuns/animalsEnum")

const classifyAndGetAnimalInformation = (animalData) => {
    console.log("ANIMALDARA:");
    console.log(animalData);

    animalName = classifier.classify(animalData);
    console.log("Animal name: " + animalName);
    console.log("Animal data result: ");
    console.log(animalsEnum[animalName]);
    return animalsEnum[animalName];
}


module.exports = { classifyAndGetAnimalInformation };