window.onload = async () => {
    document.getElementById('addGrade').addEventListener('click', addGrade);
    document.getElementById('calcGrade').addEventListener('click', calculateGrades);

    let gradesCreated = 0;
    
    addGrade(); // Adds grade input box on startup
    function addGrade() {
        console.log('Add Grade button has been pressed');
        const grades = document.getElementById('grades');
        gradesCreated++;
    
        const gonnaAppend = document.createElement('div');
        gonnaAppend.classList.add('input');
        const gradetext = document.createElement('label');
        const gradeInput = document.createElement('input');
        const weightInput = document.createElement('input');
        gradetext.className = 'gradetext';
    
        gradeInput.type = 'number';
        weightInput.type = 'number';

        gradeInput.addEventListener('keypress', function(e) {if(e.key === 'Enter') addGrade();});
        weightInput.addEventListener('keypress', function(e) {if(e.key === 'Enter') addGrade();});
    
        gradeInput.classList.add('gradeInput');
        weightInput.classList.add('weightInput');
        gradetext.classList.add('gradetext');
    
        gradeInput.id = `grade${gradesCreated}`;
        weightInput.id = `weight${gradesCreated}`;
        gradeInput.placeholder = 'Grade';
        weightInput.placeholder = 'Weight';
        gradetext.innerText = `Grade #${gradesCreated}`;
    
        gonnaAppend.appendChild(gradetext);
        gonnaAppend.appendChild(gradeInput);
        gonnaAppend.appendChild(weightInput);
    
        grades.appendChild(gonnaAppend);
    }

    function calculateGrades() {
        const failtext = document.getElementById('fail');
        console.log('Calculate Average button has been pressed');
        failtext.innerText = 'You haven\'t put any numbers in or something has gone wrong.';
        let average = 0;
        let weight = 0;
        let grade = 0;
    
        for (let i = 1; i < gradesCreated + 1; i++) {
    
            const gradesfromid = parseInt(document.getElementById('grade' + i).value);
            const weightfromid = parseInt(document.getElementById('weight' + i).value);
    
            grade += gradesfromid * weightfromid;
            console.log('grade' + grade);
            weight += weightfromid;
            console.log('weight' + weight);
            average = grade / weight;
    
            if(average.toString() === 'NaN') {
                failtext.innerText('You haven\'t put any numbers in or something has gone wrong.');
            }
            else {
                areYouReallyFailingDoe(average);
            }
        }
    }
    
    function areYouReallyFailingDoe(average) {
        const failtext = document.getElementById('fail');
        const meanperctext = document.getElementById('meanPerc');
        if(average < 40) {
            failtext.innerText = 'You are Failing... 💀 Get it together man.';
        }
        else {
            failtext.innerText = 'You are not Failing, don\'t worry bout a thing 😎';
        }
        meanperctext.innerText = `Mean: ${average.toFixed(2)}%`;
    }
};
