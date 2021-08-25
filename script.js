const quest = document.getElementsByClassName("questions");
const arrow = document.getElementsByClassName("arrow");
const answer = document.getElementsByClassName("answers");
const act = document.getElementsByClassName("active");


for (let index = 0; index < quest.length; index++) {
    quest[index].addEventListener("click", function () {

        for (let j = 0; j < quest.length; j++) {
            if (j == index) {
                quest[j].classList.toggle("active");
                arrow[j].classList.toggle("active-arrow");
                if(answer[j].style.maxHeight){
                answer[j].style.maxHeight = null;
                }
                else
                answer[j].style.maxHeight = answer[j].scrollHeight+"px";
                
            } 
            else {
                quest[j].classList.remove("active");
                arrow[j].classList.remove("active-arrow");
                answer[j].style.maxHeight = null;

                
            }
        }

    });
}