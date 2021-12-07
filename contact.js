const inputs = document.getElementsByClassName("contactInput");
const loadingContainer = document.getElementsByClassName("loading")[0];
const successBox = document.getElementsByClassName("successBox")[0];

function sendMessage(){
    //Check if inputs are not empty
    if(checkInputs()){
        //Set loading screen
        loadingContainer.style.display = "flex";
        setTimeout(function(){
            loadingContainer.style.opacity = 1;
        }, 1);
        //Make a request to the php file
        var request = new XMLHttpRequest();
        request.open('POST', "send.php");
        var formData = new FormData();
        formData.append("name", inputs[0].value);
        formData.append("email", inputs[1].value);
        formData.append("message", inputs[2].value);
        //Handle response
        request.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                successBox.innerHTML = this.responseText;
                successBox.style.display = "block";
                //Hide loading screen
                loadingContainer.style.opacity = 0;
                setTimeout(function(){
                    loadingContainer.style.display = "none";
                }, 500);
            } else if(this.readyState == 4){
                //alert("Oopsie, the server is doing stuff I was not expecting :(");
                loadingContainer.style.opacity = 0;
                setTimeout(function(){
                    loadingContainer.style.display = "none";
                }, 500);
            }
        }
        request.send(formData);
    }
}

function checkInputs(){
    state = true;
    Array.from(inputs).forEach(input => {
        if(input.value == ""){
            input.classList.add('inputWrong');
            state = false;
        } else {
            input.classList.remove('inputWrong');
        }
    });
    return state;
}