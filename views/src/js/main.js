/**
 *  Loader container element 
 */
const containerLoad = document.querySelector(".loader");

/**
 * collectors modal element when "Collectors" button is clicked
 */
const modal = document.querySelector(".collectors-modal");

/**
 * csv modal class
 */
const csv_modal = document.querySelector(".edit-cert-section");

const share_wrapper = document.querySelector(".share-container");
/**
 * Hides Loader
 */
function HideLoader() {
    containerLoad.classList.toggle("zero-opacity");
    setTimeout(() => {
        containerLoad.classList.toggle("hide");
    }, 350);
}

/**
 * Shows loader
 */
function ShowLoader() {
    containerLoad.classList.toggle("zero-opacity");
    containerLoad.classList.toggle("hide");
}

/**
 * Copy text to clipboard. 
 */
function CopyToClipBoard() {
    let copyText = document.querySelector("#link");

    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");

    alert("Copied Successfully!");
}

/**
 * Hides loader when page has finished rendering.
 * @type {Window}
 */
window.onload = function(){
    HideLoader();
}

/**
 * Toggles collectors modal to display/hide.
 */
function ToggleModal(){
    modal.classList.toggle("hide");
}

function ToggleCSVModal(){
    csv_modal.classList.toggle("hide");
    document.getElementById("error").innerHTML = ""
}

function collectedStatusColor(){
    let statusEles = document.querySelectorAll(".collected-status");

    statusEles.forEach(ele => {
        if(ele.textContent.localeCompare("Collected") === 0){
            ele.classList.add("color-green");
        }
        else{
            ele.classList.add("color-red");
        }        
    });
}

function OpenWrapper(){
    share_wrapper.classList.toggle("increase-height");
}