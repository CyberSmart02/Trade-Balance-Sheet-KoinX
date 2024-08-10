// Event listener for the file upload form
document.getElementById('uploadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('file');
    const resultDiv = document.getElementById('result');

    if (!fileInput.files[0]) {
        alert('Please upload a CSV file.');
        return;
    }

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const uploadResponse = await fetch('http://localhost:5000/api/trades/upload', {
            method: 'POST',
            body: formData
        });

        const uploadResult = await uploadResponse.json();

        if (uploadResponse.status === 200) {
            resultDiv.innerHTML = `<p>${uploadResult.message}</p>`;
        } else {
            resultDiv.innerHTML = `<p>Error: ${uploadResult.message}</p>`;
        }

    } catch (error) {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});

// Event listener for the balance retrieval form
document.getElementById('balanceForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const timestampInput = document.getElementById('timestamp');
    const resultDiv = document.getElementById('result');

    if (!timestampInput.value) {
        alert('Please enter a timestamp.');
        return;
    }

    try {
        const balanceResponse = await fetch('http://localhost:5000/api/trades/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ timestamp: timestampInput.value })
        });

        const balanceResult = await balanceResponse.json();

        if (balanceResponse.status === 200) {
            let resultHTML = '<h2>Account Balance at ' + timestampInput.value + ':</h2>';
            resultHTML += '<ul>';

            for (const [coin, balance] of Object.entries(balanceResult)) {
                resultHTML += `<li><strong>${coin}:</strong> ${balance}</li>`;
            }

            resultHTML += '</ul>';
            resultDiv.innerHTML = resultHTML;

        } else {
            console.log("error",balanceResult.message)
            resultDiv.innerHTML = `<p>Error: ${balanceResult.message}</p>`;
        }

    } catch (error) {
        console.log("error",error.message)
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
