let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const runnerAge = 18;

if (runnerAge > 18 && registeredEarly === true) {  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30 am with number ${raceNumber}.`);
} else if (runnerAge >= 18 && registeredEarly === false) {
  console.log(`You will race at 11 am with number ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration)`);
} else {
  console.log(`the runner must see the registration desk.`)
}
