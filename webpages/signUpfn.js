// CSV file converter using Javascript to minimally store this into a csv file and possibly exporting this into a database.

// Firstly, Retrieve all the form data from the inputs
const nameEntered = document.getElementById("name").value;
const emailEntered = document.getElementById("email").value;
const birthEntered = document.getElementById("birth").value;
const jobEntered = document.getElementById("job").value;
const intEntered = document.getElementById("int").value;
const commitEntered = document.getElementById("commit").value;

// Basic function to validate the input for sign up form for volunteering users
function validateForm() {
    var hasError = false;
  
    if (nameEntered===""){ hasError = true; }
    if (emailEntered===""){ hasError = true; }
    if (birthEntered===""){ hasError = true; }
    if (jobEntered===""){ hasError = true; }
    if (intEntered===""){ hasError = true; }
    if (commitEntered===""){ hasError = true; }
    
    // Checks for form results if valid or not.
    if (hasError===false) { return true;}
    else {return false;}

}

// Function to export to csv from the inputs field
function getInfo(){

    // Define the needed headers for our csv
    const headers = ['Full name', 'Email', 'birth', 'int', 'commit', 'job'];

    //Combines the headers and data into a csv string
    const rows = [
        headers.join(','),
        [nameEntered, emailEntered, birthEntered, jobEntered, intEntered, commitEntered].join(',')
    ];

    // Create a blob from the CSV string
    const csvContent = rows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    //Create a link element to facilitate the download
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'form_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
}
