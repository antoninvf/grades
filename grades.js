/*
TODO: Change how grades are being stored. Currently it is storing them just in HTML and stuff is gotten from the id in html.
TODO: A better solution is to make an array for the grades to be stored in with a class representing the grade array(with grade, weight and ID attributes)
TODO: Then a function that will display data from the array like I did in pokedex or skolaOffline.
*/
window.onload = async () => {
    document.getElementById('addGrade').addEventListener('click', addGrade);
    document.getElementById('calcGrade').addEventListener('click', calculateGrades);

    let gradesCreated = 0;
    let extraText = '';
    
    addGrade(); // Adds grade input box on startup
    function addGrade() {
        const grades = document.getElementById('grades');
        gradesCreated++;
    
        const div = document.createElement('div');
        div.classList.add('input');
        div.id = `input${gradesCreated}`;

        const gradetext = document.createElement('label');
        gradetext.classList.add('gradetext');
        gradetext.innerText = `#${gradesCreated.toFixed().padStart(3, 0)}`;

        const gradeInput = document.createElement('input');
        gradeInput.type = 'number';
        gradeInput.min = 0;
        gradeInput.classList.add('gradeInput');
        gradeInput.id = `grade${gradesCreated}`;
        gradeInput.addEventListener('keypress', function(e) {if(e.key === 'Enter') addGrade();});
        gradeInput.placeholder = 'Grade';

        const weightInput = document.createElement('input');
        weightInput.type = 'number';
        weightInput.min = 0;
        weightInput.classList.add('weightInput');
        weightInput.id = `weight${gradesCreated}`;
        weightInput.addEventListener('keypress', function(e) {if(e.key === 'Enter') addGrade();});
        weightInput.placeholder = 'Weight';

        const delBtn = document.createElement('a');
        delBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        delBtn.classList.add('delBtn');
        delBtn.id = `${gradesCreated}`;
        delBtn.addEventListener('click', function() {
            deleteGrade(delBtn.id);
        });

        div.appendChild(gradetext);
        div.appendChild(gradeInput);
        div.appendChild(weightInput);
        div.appendChild(delBtn);
    
        grades.appendChild(div);
    }

    function deleteGrade(id) {
        const del = document.getElementById(`input${id}`);
        del.remove();
        gradesCreated--;
    }

    function calculateGrades() {
        const failtext = document.getElementById('fail');
        let average = 0;
        let weight = 0;
        let grade = 0;

        for (let i = 1; i < gradesCreated + 1; i++) {
            if(document.getElementById('grade' + i).value < 0) document.getElementById('grade' + i).value = 0;
            if(document.getElementById('weight' + i).value < 0) document.getElementById('weight' + i).value = 0;

            const gradesfromid = parseInt(document.getElementById('grade' + i).value);
            const weightfromid = parseInt(document.getElementById('weight' + i).value);
    
            grade += gradesfromid * weightfromid;
            console.log('grade' + grade);
            weight += weightfromid;
            console.log('weight' + weight);
            average = grade / weight;

            if(weightfromid === 0) {
                extraText = '(Weight can\'t all be set to 0)';
            }
    
            areYouReallyFailingDoe(average);
        }
    }
    
    function areYouReallyFailingDoe(average) {
        const failtext = document.getElementById('fail');
        const meanperctext = document.getElementById('meanPerc');
        meanperctext.innerText = '';

        if(average.toString() === 'NaN') {
            return failtext.innerText = `You haven't put any numbers in or something has gone wrong. ${extraText}`;
        }

        if(average < 40) {
            failtext.innerText = 'You are Failing... 💀';
        }
        else {
            failtext.innerText = 'You are not Failing, don\'t worry bout a thing 😎';
        }
        meanperctext.innerText = `Mean: ${average.toFixed(2)}%`;
        extraText = '';
    }
};
