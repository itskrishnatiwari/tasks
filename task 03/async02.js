//example of asynchronous js using promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve("Data");
        }, 2000);
    });
}

function processData(data) {
    console.log("Processing:", data);
}

fetchData()
    .then(processData) // 'Data fetched' will be logged after 2 seconds, followed by 'Processing: Data'
    .catch(error => console.error("Error:", error));
