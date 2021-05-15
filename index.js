// Your code here

function saturdayFun(activity = "roller-skate") {
  return `This is Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "got to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(outerPara = "*") {
  return function(adj = "special") {
    return `You are ${outerPara}${adj}${outerPara}`;
  }
}

const encouragingPromptFunction = wrapAdjective("!!!")

const Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
}