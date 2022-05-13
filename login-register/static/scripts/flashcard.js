/* Variables */

const mainContainer = document.getElementsByClassName("main-container")[0];

const questionsContainer = document.getElementsByClassName("question-container")[0];

const saveContainer = document.getElementsByClassName("save-container")[0];


/* Function to display and undisplay questions block*/
function showQuestions()
{
    questionsContainer.style.display ="block";
}

function hideQuestions()
{
    questionsContainer.style.display = "none";
}

/* function to save flashcard */
function saveFlashcard()
{
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;

    var node0 = document.createElement("div");
    var node1 = document.createElement("h2");
    var node2 = document.createElement("h2");

    /* Node 1 holds the save result of question  */
    /* Node 2 holds the save result of answer  */
    node1.innerHTML = question;
    node2.innerHTML = answer;

    node2.style.display = "none";  //color of question text
    node2.style.color = "#009900"; //color of answer text

    node0.appendChild(node1);
    node0.appendChild(node2);


    /* hides the answer block until clicked  once*/
    node0.addEventListener("click", function()
    {
        if(node2.style.display == "none")
        {
            node2.style.display = "block";
        }else
        {
            node2.style.display = "none";
        }
    })

    /* if user double click, remove the flashcard */
    node0.addEventListener("dblclick", function()
    {
        node0.remove();
    })

    node0.setAttribute("style", "background:white; width:30%; padding: 20px; border:1px solid black; margin:10px; overflow:hidden");
    saveContainer.insertAdjacentElement("beforeend", node0);

    /* Starts the next new Flashcard*/
    document.getElementById("question").value = '';
    document.getElementById("answer").value = '';
}