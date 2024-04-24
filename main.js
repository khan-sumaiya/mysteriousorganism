// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//factory function
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      //randomly selects a base in the object's dna property & changes the current base to a different base
      const selectRandomBase = Math.floor(Math.random * this.dna.length);
      let newRandBase = selectRandomBase();
      while (this.dna[randIndex] === newRandBase) {
        newRandBase = selectRandomBase();
      }
      this.dna[randIndex] === newRandBase;
      return this.dna;
    },

    //compares another P.aequor organism with the current P.aequor organism and works out the % of similarities in DNA both organisms share
    compareDNA(anotherOrganism) {
      const comparing = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === anotherOrganism.dna[idx]) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const similarityPercent = (comparing / this.dna.length) * 100;
      const limitDecimPlaces = similarityPercent.toFixed(2);
      console.log(
        `${this.specimenNum} and ${anotherOrganism.length} have ${limitDecimPlaces}% DNA in common`
      );
    },

    // P.aequor have higher chance of survival if at least 60% of their DNA comprises of "C" or "G" bases. willLikelySurvive() tells us whether the P.aequor organism is likely to survive (TRUE) or not (FALSE)
    willLikelySurvive() {
      const cOrganism = this.dna.filter((el) => el === "C" || el === "G");
      return cOrganism.length / this.dna.length >= 0.6;
    },
  };
};
//creates 30 instances of P.aequor that can survive and stores them into a new array (survivingOrganism)
const survivingOrganism = [];
let counter = 1;
while (survivingOrganism.length < 30) {
  let newOrganism = pAequorFactory(counter, mockUpStrand());
  if (newOrganism.willLikelySurvive()) {
    survivingOrganism.push(newOrganism);
  }
  counter++;
}

console.log(survivingOrganism);
