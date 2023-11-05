//creating a new form with class name
class ticketForm {
  //creating method for submissions
  submit() {
    alert(
      `${this.name} Your booking is submitted for train Number : ${this.trainNo}`
    );
  }
  //creating method for cancel submissions
  cancel() {
    alert(
      `${this.name} Your booking is cancelled for train Number : ${this.trainNo}`
    );
  }
  //Fill method to fill the form with user details
  fill(givenName, trainNo) {
    this.name = givenName;
    this.trainNo = trainNo;
  }
}

//create form for user booking
let mustaqimForm = new ticketForm();
let anasForm = new ticketForm();
let shaquibForm = new ticketForm();
let zaidForm = new ticketForm();

//Fillimg fonm with user details
mustaqimForm.fill("Mustaqim", 13973);
anasForm.fill("Anas", 12530);
shaquibForm.fill("Shaqim Imam", 36721);
zaidForm.fill("Mohammad Zaid", 63422);

//Sumbmission of the booking
mustaqimForm.submit();
anasForm.submit();

//cancelation of the booking
shaquibForm.cancel();
zaidForm.cancel();
