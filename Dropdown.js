const stateSelect = document.getElementById("user-state");
const goButton = document.getElementById("goButton");

goButton.addEventListener("click", () => {
    const selectedState = stateSelect.value;
    
    if(selectedState !== "selectState") {
        window.location.href ="https://coolskull23.github.io/tsawebsite/StatesHTML/" + selectedState + ".html";
    } else {
        alert("Please pick a state");
    }
});