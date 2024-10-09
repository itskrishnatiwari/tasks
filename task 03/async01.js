// example of asynchronous js using callback example
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback("Data");
    }, 2000);
}

function processData(data) {
    console.log("Processing:", data);
}

fetchData(processData);// 'Data fetched' will be logged after 2 seconds, followed by 'Processing: Data'
//here maddy will be printed 1st then fetchdata executed
console.log("maddy") 
