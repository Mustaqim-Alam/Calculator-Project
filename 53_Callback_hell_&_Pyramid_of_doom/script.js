function loadscript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded script with SRC: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("SRC got some new error"));
  };
  document.body.appendChild(script);
}

// function hello ( error) {
//     if(error){
//         console.log(error);
//         return;
//     }
//     alert("Hello world!" );
// }
// function goodmorning(){
//     alert("Good Morning!");
// }

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",function hello(error, src) {
    if (error) {
      console.log(error);
      sendEmergencyMessageToCeo();
      return;
    }
    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",function hello(error, src) {
        if (error) {
          console.log(error);
          sendEmergencyMessageToCeo();
          return;
        }
        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",function hello(error, src) {
            if (error) {
              console.log(error);
              sendEmergencyMessageToCeo();
              return;
            }
            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",function hello(error, src) {
                if (error) {
                  console.log(error);
                  sendEmergencyMessageToCeo();
                  return;
                }
                loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",function hello(error, src){function hello(error, src) {
             } })
        })
    });
});

