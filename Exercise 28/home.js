function fetchDatawithPromise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }   
    }, 2000); 
    });

    async function fetchData() {
        try {
            const result = await fetchDatawithPromise();
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }
    }
}
fetchData();