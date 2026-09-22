async function fetchData() {
    console.log("Fetching data...");
      const response =await fetch('data.json');
      const data = await response.json();
         
      
      console.log("Data fetched:", data);
      console.log("data fetched successfully");


}

fetchData();