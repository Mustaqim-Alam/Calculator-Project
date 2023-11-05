class employees {
  login() {
    console.log(`Employee has logged in successfully`);
  }
  logout() {
    console.log(`Employee has loggedOut `);
  }
  requestedleaves(leaves) {
    console.log(
      `Employee requested for ${leaves} leave (one extra leave gurranted to employee)`
    );
  }
}

class programmer extends employees {
  requestedForCoffee() {
    console.log(`Employee requested for coffee`);
  }

  requestedleaves(leaves) {
    // console.log(`Employee requested for ${leaves} leave (one extra leave guranted)`);
    super.requestedleaves(leaves);
    console.log(`One extra leave gurranted to employee`);
  }
}

let programmer1 = new programmer();
programmer1.login();
programmer1.requestedleaves(1);
