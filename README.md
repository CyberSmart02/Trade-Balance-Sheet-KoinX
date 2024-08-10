# Trade-Balance-Sheet-KoinX

This is a Node.js application that processes cryptocurrency trade data from a CSV file, stores the data in a MongoDB database, and provides an API to retrieve the asset balance at a specific timestamp.

## Features

- **CSV File Upload**: Upload a CSV file containing trade data, which is then parsed and stored in the database.
- **Balance Calculation**: Retrieve the balance of each asset at a specified timestamp using the stored trade data.

## Prerequisites

- Node.js installed on your machine
- MongoDB Atlas connection string (or a local MongoDB instance)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/Trade-Balance-Sheet-KoinX.git
   cd Trade-Balance-Sheet-KoinX
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up MongoDB:**

   - Replace `your-mongodb-connection-string` in `index.js` with your MongoDB connection string.

## Usage

1. **Start the application:**

   ```bash
   node index.js
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:5000/
   ```

3. **File Upload:**

   - Use the "Upload CSV" form to upload your CSV file.
   - Click "Upload File" to process and store the file data in the database.

4. **Retrieve Balance:**

   - Enter a timestamp in the "Enter Timestamp" field.
   - Click "Get Balance" to see the asset balance at the specified timestamp.

## API Endpoints

- **Upload CSV File:**

  - **Endpoint:** `/api/trades/upload`
  - **Method:** `POST`
  - **Description:** Uploads and stores CSV file data in the database.

- **Get Balance:**

  - **Endpoint:** `/api/trades/balance`
  - **Method:** `POST`
  - **Description:** Retrieves the asset balance at a given timestamp.

## Project Structure

- `index.js` - Main server file, sets up routes and starts the application.
- `public/` - Contains static files (HTML, CSS, JavaScript).
  - `index.html` - Frontend HTML file.
  - `styles.css` - CSS for styling.
  - `script.js` - JavaScript for handling form submissions.

## Notes

- Make sure to replace `your-mongodb-connection-string` in the `index.js` file with your actual MongoDB connection string.
- This project is intended as a production-grade application. Ensure best practices are followed for deployment and usage.


---

This README provides an overview of the application, instructions on how to set it up, and details on how to use it.
