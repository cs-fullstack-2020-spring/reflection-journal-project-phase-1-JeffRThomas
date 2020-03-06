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
let pastPosts = document.getElementById("displayAll");
console.log(pastPosts);
let journalEntries = [];
// *******************************************************************************************************

// FORM ENTRY VALIDATION
// *******************************************************************************************************
// if (dateField==""){
//     alert("You must enter a date.");
// }
// *******************************************************************************************************

// BUTTON ACTIVATION
// *******************************************************************************************************
let postEntry = (userSubmit) => {
    userSubmit.preventDefault();
    console.log("User Recorded A Post");
    let journalEntry = {
        CreationDate: dateField.value,
        JournalEntry: entryField.value,
        Confidence: confidenceDropDown.value,
    };
    console.log(`Creation Date:${journalEntry.CreationDate}\nJournal Entry:${journalEntry.JournalEntry}\nConfidence:${journalEntry.Confidence}`);
    journalEntries.push(journalEntry);
}
postButton.addEventListener("click", postEntry);
// *******************************************************************************************************

// POST USER ENTRY TO DOM
// *******************************************************************************************************
// let printEntries = (entry) => {
//     console.log(entry);
// }
// pastPosts.innerText = journalEntries.forEach(printEntries)
// *******************************************************************************************************




