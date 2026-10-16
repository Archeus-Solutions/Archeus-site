// P.S: This JavaScript file will (most likely) change in the future. Being cut into smaller pieces
//      like `modules.js` and so on.

function gotoPage(page) {
    if (window.location.href != page) {  // Checks if the current page is the same as the parmeter
        window.location.href = page;     // Sets the URL to the page parameter
    }
}