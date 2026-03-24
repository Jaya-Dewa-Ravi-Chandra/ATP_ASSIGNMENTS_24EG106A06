/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92 */
const marks = [78, 92, 35, 88, 40, 67];
console.log("Marks>40:",marks.filter(ele=>ele>40))
console.log("5 marks grace to each:",marks.map(ele=>ele+5))
console.log("Highest marks:",marks.reduce((acc,ele)=>acc>ele?acc:ele))
console.log("First mark below 40:",marks.find(ele=>ele<40))
console.log("Index of mark 92:",marks.findIndex(ele=>ele==92))