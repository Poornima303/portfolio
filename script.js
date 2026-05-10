const projects = [
    {
        title:"Portfolio Website",
        description:"Created using HTML CSS JavaScript"
    },

    {
        title:"Weather App",
        description:"Weather checking app"
    }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {

    const div = document.createElement("div");

    div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;

    projectList.appendChild(div);

});
function darkMode(){

    document.body.classList.toggle("dark");

}
async function getMessage(){

    const response = await fetch("http://localhost:5000");

    const data = await response.text();

    console.log(data);

}

getMessage();