// creating form for booking with class  name
class BookingForm {
  constructor(givenName, trainNo){
    console.log("Constructor called" + givenName + " " + trainNo);
    this.givenName = givenName;
    this.trainNo = trainNo;
  }
  //Creating subbmission button for bookings
  submitButton() {
    alert(`${this.givenName} your booking form is subbmited with train no: `);
  }

  //Creating cancel button for bookings
  cancelButton() {
    alert(
      `${this.givenName} your booking form is cancelled with train no: ${this.trainNo} `
    );
  }
  //No Need to fill like this
  ///filling the form with details
  // fillForm(givenName, trainNo) {
  //   this.givenName = givenName;
  //   this.trainNo = trainNo;
  // }
}

//creating form for booking
let mustaqimForm = new BookingForm();
let anas = new BookingForm();

//filling the form with details
// mustaqimForm.fillForm("Mustaqim", 23213);
// anas.fillForm("Anas", 38485);

//submitting form
mustaqimForm.submitButton();

//cancelling form
anas.cancelButton();
