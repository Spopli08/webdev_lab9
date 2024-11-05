function init(){
    var alertButton = document.getElementById('entrybutton');

    function displayMessage() {
        var userInput = document.getElementById('entryinput');
        document.getElementById('textoutput').textContent = userInput.value;
        alert("Sanchit Popli: " + userInput.value);
    }

    alertButton.addEventListener('click', displayMessage);
}
    window.addEventListener('load', init);