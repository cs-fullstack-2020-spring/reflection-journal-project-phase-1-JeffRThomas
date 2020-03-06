// JS Link Check
// console.log("JS File Linked");


// REFERENCE VARIABLE DECLARATION
// *******************************************************************************************************
let dateField = document.getElementById("creationdate");
console.log(dateField);//Selection Sanity Check
let entryField = document.getElementById("journalentry");
console.log(entryField);//Selection Sanity Check
let confidenceDropDown = document.getElementById("confidencerating");
console.log(confidenceDropDown);//Selection Sanity Check
let postButton = document.getElementById("postButton");
console.log(postButton);//Selection Sanity Check
let journalEntries = [];
let journalEntry = {
    CreationDate: "",
    JournalEntry: "",
    Confidence: "",
};
// *******************************************************************************************************



// FORM ENTRY VALIDATION
// *******************************************************************************************************
// if (dateField==""){
//     alert("You must enter a date.");
// }
// *******************************************************************************************************

// USER INFO STORAGE
// *******************************************************************************************************

// *******************************************************************************************************



// BUTTON ACTIVATION
// *******************************************************************************************************
let postEntry = (userSubmit) => {
    userSubmit.preventDefault();
    console.log("User Recorded A Post");
    journalEntry.CreationDate = dateField.value;
    journalEntry.JournalEntry = entryField.value;
    journalEntry.Confidence = confidenceDropDown.value;
}
postButton.addEventListener("click", postEntry);
console.log(journalEntry);
// *******************************************************************************************************


// POST USER ENTRY TO DOM
// *******************************************************************************************************

// *******************************************************************************************************




