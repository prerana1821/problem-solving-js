let submissionQueue = [];
let adminOne = [];
let adminTwo = [];
let adminThree = [];
let adminReviewers = [adminOne, adminTwo, adminThree];
let i = 0;

let sampleSubmission = [
  {
    applicationID: 1,
    studentName: "Rahul",
    studentPortfolio: "https://rahul.netlify.app/",
    mark15ready: false,
    needsRevision: false,
    revisionComment: "",
  },
  {
    applicationID: 2,
    studentName: "Kashish",
    studentPortfolio: "https://kashish.netlify.app/",
    mark15ready: false,
    needsRevision: false,
    revisionComment: "",
  },
  {
    applicationID: 3,
    studentName: "Shreyas",
    studentPortfolio: "https://shreyas.netlify.app/",
    mark15ready: false,
    needsRevision: false,
    revisionComment: "",
  },
  {
    applicationID: 4,
    studentName: "Omkar",
    studentPortfolio: "https://omkar.netlify.app/",
    mark15ready: false,
    needsRevision: false,
    revisionComment: "",
  },
  {
    applicationID: 5,
    studentName: "Purva",
    studentPortfolio: "https://purva.netlify.app/",
    mark15ready: false,
    needsRevision: false,
    revisionComment: "",
  },
];

sampleSubmission.map((element) => submissionQueue.push(element));

while (submissionQueue.length != 0) {
  for (i = 0; i < adminReviewers.length; i++) {
    adminReviewers[i].push(submissionQueue.shift());
  }
}

console.log("\n\n Review Queue for adminOne:", adminOne);
console.log("\n\n Review Queue for adminTwo:", adminTwo);
console.log("\n\n Review Queue for adminThree:", adminThree);
