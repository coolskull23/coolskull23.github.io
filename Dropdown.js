const stateSelect = document.getElementById("user-state");
const goButton = document.getElementById("goButton");

goButton.addEventListener("click", () => {
    const selectedState = stateSelect.value;
    
    if(selectedState !== "selectState") {
        window.location.href ="/Users/chris/OneDrive/Desktop/tsawebsite-main/StatesHTML/" + selectedState + ".html";
    } else {
        alert("Please pick a state");
    }
});