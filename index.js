
const returnFirstTwoDrivers = function (arr) {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = function (arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return () => {
        return num * 5
    }
}

const fareDoubler = (num) => {
    return (createFareMultiplier(num)() / 5) * 2
}

const fareTripler = (num) => {
    return (createFareMultiplier(num)() / 5) * 3
}

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers)
}



