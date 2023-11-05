class employees {
  constructor(name) {
    this.name = name;
    console.log(`${this.name} - Employee's constructor class`); 
  }
  login() {
    console.log("Employee has logged in successfully");
  }
  logout() {
    console.log("Employee has logged out successfully");
  }
  requestedLeaves(leaves) {
    console.log(`Employee requested for ${leaves} leaves - Auto approved`);
  }
}

class programmer extends employees {
    constructor(name) {
        super(name);
        console.log(`Employee's constructor class`);
        console.log(this);
    }
  requestedLeaves(leaves) {
    // console.log(
    //   `Employee requested for ${leaves} leaves (one extra leave guranteed)`
    // );
    super.requestedLeaves(leaves);
    console.log("One extra leave guranteed");
  }
}

let Mustaqim = new programmer("Mustaqim");
Mustaqim.requestedLeaves(4);
