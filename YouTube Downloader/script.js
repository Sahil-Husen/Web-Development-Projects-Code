 

const convertBtn = document.querySelector('.btn');
const URLinput = document.querySelector('.input-url');

// Add event listener for the button click
convertBtn.addEventListener('click', () => {
    const URL = URLinput.value.trim();
    if (!URL) {
        alert('Please enter a YouTube URL.');
        return;
    }
    sendURL(URL);
});

function sendURL(URL) {
    
    // Validate URL here if needed
    // Example: Check if it's a valid YouTube URL

    // Open the download link in a new tab
    const downloadLink = `http://localhost:4000/download?URL=${encodeURIComponent(URL)}`;
    window.open(downloadLink, '_blank');

    // Clear the input field after a short delay (adjust as needed)
    setTimeout(() => {
        URLinput.value = ''; // Clear the input field
    }, 1000); // Adjust the delay as needed (in milliseconds)
}
