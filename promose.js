let P = new Promise((resolve, reject) => {
    // "Producing Code" (May take some time)    
      resolve("Hey I am sanjeev"); // when successful
      reject();  // when error
    });

    function getData(){
        P.then((res) => console.log(res));
    }
  getData();