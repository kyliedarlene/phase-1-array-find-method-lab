// code your solution here
function superbowlWin(array) {
    const winYear = array.find((element) => element.result === "W");
    if (winYear !== undefined) {
        return winYear.year;
    } 
}
