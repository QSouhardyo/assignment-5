const buttons = document.querySelectorAll('.completed-button')
let completedCount = 0;
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        alert('Board Updated Succesfully')
        event.target.disabled = true
        event.target.style.opacity = "0.5"

        completedCount++;
        if (completedCount === 6) {

            alert('Congratulations!!! You have completed all the current task');
        }

        let taskCount = parseInt(document.getElementById('task-count').innerText)
        let subtract = taskCount - 1;
        document.getElementById('task-count').innerText = subtract;

        let navCount = parseInt(document.getElementById('nav-count').innerText)
        let add = navCount + 1;
        document.getElementById('nav-count').innerText = add;


        let title = event.target.parentElement.parentElement.querySelector('h3').innerText;



        let currentTime = new Date().toLocaleTimeString();


        let p = document.createElement('p');
        p.classList.add('bg-[#f4f7ff]', 'p-2', 'mt-2', 'rounded-xl');
        let paragraph = `You have Completed The Task ${title} at ${currentTime}`;
        p.innerText = paragraph;


        document.getElementById('activity-log-para').appendChild(p);


    })
}



