// Write a function in JavaScript that will strip quote characters from a string. An example usage of this function would be ensuring that a string which will be quoted in an article (such as in an editorial sidebar or testimonial block on a page) does not contain quotes in the string itself.


function stripQuotes(str) {
    return str.replace(/['"]+/g, '');
}

let str = 'We have to allow ourselves to be loved by the people "who really love us", the people "who really matter". Too /\'much of the time, we are blinded by our own pursuits of people to love us, people that dont even matter, while all that time we waste and the people who do love us have to stand on the sidewalk and watch us beg in the streets! Its time to put an end to this. Its time for us to let ourselves be loved'
let result = stripQuotes(str)
console.log("result",result)
