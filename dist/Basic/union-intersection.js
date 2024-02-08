"use strict";
const dev1 = {
    name: "MSA",
};
// const dev2:JuniorDeveloper={
//     name:'MSA',
//     experience:6,
//     project:2
// }
var Level;
(function (Level) {
    Level["low"] = "Low";
    Level["mid"] = "Mid";
    Level["senior"] = "Senoir";
})(Level || (Level = {}));
const nextDev = {
    name: "MSA",
    experience: 17,
    profession: true,
    company: "Tarmat Inc",
    // contribution:Level.low //enum value
    contribution: "high",
    project: 6,
};
