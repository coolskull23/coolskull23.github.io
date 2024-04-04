const stateSelect = document.getElementById("user-state");
const goButton = document.getElementById("goButton");

goButton.addEventListener("click", () => {
    const selectedState = stateSelect.value;

    if(selectedState !== "selectState") {
        window.open("/tsawebsite/StatesHTML/" + selectedState + ".html", '_blank');
    } else {
        alert("Please pick a state");
    }
});
