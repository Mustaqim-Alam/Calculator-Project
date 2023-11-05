class railwayForm {
  constructor(givenName, trainNo, address) {
    this.name = givenName;
    this.trainNo = trainNo;
    this.address = address;
  }
  preview() {
    alert(
      `preview: ${this.name} your form is for train no: ${this.trainNo} and your address is ${this.address}`
    );
  }
  submit() {
    alert(
      `${this.name} your form is now submitted for train no: ${this.trainNo}`
    );
  }
  cancel() {
    alert(
      `${this.name} your ticket have cancelled for train no: ${this.trainNo}`
    );
    this.trainNo = 0;
  }
}

let mustaqimForm = new railwayForm(
  "Mustaqim",
  478354,
  "167 New millat colony Patna(801505)"
);

let anasform = new railwayForm("Anas Alam", 34642, "Bettih WestChampar");

mustaqimForm.preview();
mustaqimForm.submit();
anasform.preview();
anasform.cancel();
anasform.preview();
