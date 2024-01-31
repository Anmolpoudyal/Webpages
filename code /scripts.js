//for the redirecting the buy now button page to form //
function redirectToForm() {
    window.location.href = "./forms.html"
}
//declaring varianble for multiple form submission //
let currentStep = 1;
const totalSteps = 5;
//now for going to next page we use loop and edit css through this function
function nextStep() {
    event.preventDefault();   //this is used for not letting the page refresh //
    if (validateStep(currentStep)) {
        document.getElementById("step-" + currentStep).style.display = "none"
        if (currentStep < totalSteps) {
            currentStep++;
            document.getElementById("step-" + currentStep).style.display = "block";
        }
    }

}
//same as next step it also works on loop and takes us to next page
function previousStep() {
    event.preventDefault();
    if (validateStep(currentStep)) {
        document.getElementById("step-" + currentStep).style.display = "none"
        if (currentStep >1) {
            currentStep--;
            document.getElementById("step-" + currentStep).style.display = "block";
        }
    }

}
// validation of the form //
function validateStep(step){
    const currentStepElement = document.getElementById("step-" + step);
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var printerModel = document.getElementById("printer-model").value;

    var quantity = document.getElementById("quantity").value;
    var delivery = document.getElementsByName("delivery");
    var payment = document.getElementsByName("payment");
    var installation = document.getElementById("installation");
    var warranty = document.getElementById("warranty");
    var terms = document.getElementById("terms");
    var privacy = document.getElementById("privacy");    
    if (step === 1) {
      if (name == "") {
        alert("Please enter your name");
        return false;
      }
      if (address == "") {
        alert("Please enter your address");
        return false;
      }
    } else if (step === 2) {
      if (printerModel == "") {
        alert("Please select your printer model");
        return false;
      }
      if (quantity == "") {
        alert("Please enter quantity");
        return false;
      }
    } else if (step === 3) {
      if (delivery[0].checked == false && delivery[1].checked == false) {
        alert("Please select your delivery option");
        return false;
      }
      if (payment[0].checked == false && payment[1].checked == false) {
        alert("Please select your payment option");
        return false;
      }
    } else if (step === 4) {
      if (installation.checked == false && warranty.checked == false) {
        alert("Please select installation or warranty");
        return false;
      }
    } else if (step === 5) {
      if (terms.checked == false || privacy.checked == false) {
        alert("Please accept our terms and conditions");
        return false;
      }
    }
    return true;
}
// this is for the order summary in the last part o the form after clicking summarize order //
function orders()
{
document.getElementById("summary-name").innerHTML =
    document.getElementById("name").value;
  document.getElementById("summary-address").innerHTML =
    document.getElementById("address").value;
  document.getElementById("summary-printer-model").innerHTML =
    document.getElementById("printer-model").value;
  document.getElementById("summary-quantity").innerHTML =
    document.getElementById("quantity").value;
    document.getElementById("purchase-button").style.display="";
}
//this is for the purchase button in the last part of the form //
function purchase(){
  alert("your order has been placed successfully");
}
