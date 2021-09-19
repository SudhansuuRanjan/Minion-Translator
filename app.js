const button = document.querySelector("button");
let input = document.querySelector("#input1");
let output = document.querySelector("#input2");

const baseURL = "https://api.funtranslations.com/translate/minion.json";

function apiURL(){
    return baseURL +"?"+"text=" + input.value;
}

button.addEventListener("click",()=> {
     if(input.value != ''){
        
         fetch(apiURL(input.value))
         .then(response => response.json())
         .then(
             json=>{
                 output.value = json.contents.translated;
             })

            .catch(tryCatch)
     }
     else{
         output.innerText = "Please enter some text to translate it !!";
         setTimeout(()=>{
             output.innerText= '';
         },2500)
     }
})

function tryCatch (){
    output.innerText="Something is wrong with server! Please try again after some time.";
    setTimeout(()=>{
        input.value='';
        output.innerText='';
    },2500);
}
