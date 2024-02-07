const user: {
  company: "Tarmat Inc";
  //ekhane company hocce literel type, zar value specific. Literal type er value change kora zay na.
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string;
  //ekhane wife property hocce optional. Zodi wife propert assign kora hoy tobe string e hote hobe. user object e zodi wife property assign kora na hoy tobe seti undefined hisabe infar hobe
} = {
  company: "Tarmat Inc",
  name: "MSA",
  age: 25,
  isMarried: false,
  wife: "Gulbahar",
};
