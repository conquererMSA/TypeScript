type NoobDeveloper = {
  name: string;
};
// type JuniorDeveloper={
//     name:string,
//     experience:number,
//     project:number
// }

// const dev1:NoobDeveloper|JuniorDeveloper={
//     name:'MSA',
//     experience:6,
//     project:2
// }

type JuniorDeveloper = NoobDeveloper & {
  experience: number;
  project: number;
};

const dev1: NoobDeveloper | JuniorDeveloper = {
  name: "MSA",
};

// const dev2:JuniorDeveloper={
//     name:'MSA',
//     experience:6,
//     project:2
// }

enum Level {
  low = "Low",
  mid = "Mid",
  senior = "Senoir",
}
type NextDeveloper = JuniorDeveloper & {
  profession: boolean;
  company: string;
  // contribution:Level // enum type
  contribution: "mid" | "low" | "high";
};

const nextDev: NextDeveloper = {
  name: "MSA",
  experience: 17,
  profession: true,
  company: "Tarmat Inc",
  // contribution:Level.low //enum value
  contribution: "high",
  project: 6,
};
