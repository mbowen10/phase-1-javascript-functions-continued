// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function(toDo = "go to the office"){
    return `This Monday, I will ${toDo}.`
}
function wrapAdjective(flair = "*"){
    const nice = function(nice = "a hard worker"){
        return `You are ${flair}${nice}${flair}!` 
    }
    return nice
    
}