let gradescreated = 0

let addGrade = function () {
    console.log('Add Grade button has been pressed')
    let grades = document.getElementById("grades")
    gradescreated++

    let gonnaAppend = document.createElement('div')
    gonnaAppend.classList.add('input')
    let gradetext = document.createElement('label')
    let gradeInput = document.createElement('input')
    let weightInput = document.createElement('input')
    gradetext.className = 'gradetext'

    gradeInput.type = 'number'
    weightInput.type = 'number'

    gradeInput.classList.add('gradeInput')
    weightInput.classList.add('weightInput')
    gradetext.classList.add('gradetext')

    gradeInput.id = `grade${gradescreated}`
    weightInput.id = `weight${gradescreated}`
    gradeInput.placeholder = 'Grade'
    weightInput.placeholder = 'Weight'
    gradetext.innerText = `Grade #${gradescreated}`

    gonnaAppend.appendChild(gradetext)
    gonnaAppend.appendChild(gradeInput)
    gonnaAppend.appendChild(weightInput)

    grades.appendChild(gonnaAppend)
}

let calculateGrades = function () {
    let failtext = document.getElementById("fail")
    console.log('Calculate Average button has been pressed')
    failtext.innerText = "You haven't put any numbers in or something has gone wrong."
    let average = 0
    let weight = 0
    let grade = 0

    for (let i = 1; i < gradescreated+1; i++) {

        let gradesfromid = parseInt(document.getElementById("grade" + i).value)
        let weightfromid = parseInt(document.getElementById("weight" + i).value)

        grade += gradesfromid * weightfromid
        console.log("grade"+grade)
        weight += weightfromid
        console.log("weight"+weight)
        average = grade / weight

        if(average.toString() === 'NaN') {
            failtext.innerText("You haven't put any numbers in or something has gone wrong.")
        } else {
            areYouReallyFailingDoe(average)
        }
    }
}

let areYouReallyFailingDoe = function (average) {
    let failtext = document.getElementById("fail")
    let meanperctext = document.getElementById("meanPerc")
    if(average < 50) {
        failtext.innerText = 'You are Failing... Get it together man.'
    } else {
        failtext.innerText = "You are not Failing, don't worry bout a thing 😎"
    }
    meanperctext.innerText = `Mean: ${average.toFixed(2)}%`
}