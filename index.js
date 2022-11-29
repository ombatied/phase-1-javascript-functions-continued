// code your solution here
let activity = "roller-skate";
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
let mondayWork = function(input="go to the office") {
    return `This Monday, I will ${input}.`;
}
function wrapAdjective(star = "*") {
    
    return function(single = "a hard worker"){
        return `You are ${star}${single}${star}!`;
    }
}
