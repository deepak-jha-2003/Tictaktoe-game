let URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async() =>{
    console.log("Gatting dada ....")
    let response = await fetch(URL);
    console.log(response); //json format mai data aa raha hai
    let data = await response.json();
    factPara.innerText = data[1].text;

}
btn.addEventListener("click" , getFacts);