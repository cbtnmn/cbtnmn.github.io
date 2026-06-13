function donateAlert() {
    alert('Thank you for trying to help, but the transaction failed. Error 404: Credit card processor not found in 2004.');
}

// Make the title scroll like an old 90s/2000s site in the browser tab
var titleText = "Save Nexus AI - Please Donate! - ";
function scrollTitle() {
    titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
    document.title = titleText;
    setTimeout(scrollTitle, 250);
}
scrollTitle();
