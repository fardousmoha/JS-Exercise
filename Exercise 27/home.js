function fetchDatawithPromise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }   
    }, 2000); 
    });
}
   fetchDatawithPromise()
   .then(message => console.log(message))
    .catch(error => console.error(error));
