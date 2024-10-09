//example of asych.js using async await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve("Data");
        }, 2000);
    });
}

async function handleData() {
    try {
        const data = await fetchData(); // Wait until the promise is resolved
        console.log("Processing:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

handleData(); // 'Data fetched' will be logged after 2 seconds, followed by 'Processing: Data'
