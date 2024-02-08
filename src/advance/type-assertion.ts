let course: any;
course = "Next Level Web Dev";
(course as string).length;
const courseLen = <string>course.split(" ");
console.log(courseLen);

const kgToGram = (param: string | number): string | number | undefined => {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return value;
  } else if (typeof param === "number") {
    const value = param * 1000;
    return value;
  } else {
    return undefined;
  }
};

const numberValue = kgToGram(1000) as number;
// const numberValue=<number>kgToGram(1000)
const stringValue = <string>kgToGram("1");

let bigNumber: any;
bigNumber = 3666;
(bigNumber as string).split("");
