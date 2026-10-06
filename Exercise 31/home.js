async function fetchuser() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Fetched user data:", data);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}
fetchuser();