# Waterlily Take-Home Assignment

Welcome to Waterlily's take-home assignment for software engineer candidates.

## Time Commitment

This exercise is designed to take no more than two hours. It’s okay if you don't finish everything within that time, especially if you're unfamiliar with the tech stack.

## System Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**
- **npm** (automatically installed with Node.js)
- **TypeScript** (version `^5.5.4`)

## Assignment Steps

### 1. Fork the Repository
- Fork the `waterlily-take-home` repository to your own GitHub account.
- **Important:** Only fork the repo when you are ready to start the assignment. The timestamp of your fork will be used as your start time.

### 2. Clone Your Fork Locally
- Clone the forked repository to your local machine.

### 3. Set Up the Project
- Follow the steps in the "Project Setup" section below.

### 4. Complete the Assignment
- You’ll primarily be working in `src/App.tsx` for the front-end and `server/index.js` for the back-end.
- See the "Assignment Overview" section for specific tasks.

### 5. Push Your Changes and Create a Pull Request
- Commit your changes and push to your fork.
- Create a pull request from your branch to the original `waterlily-take-home` repository.
- Once we receive your PR, we'll make make sure the timestamps are ~2 hours apart and review your code. Please give us a few days to review and reach out to you.

## Project Setup

1. Navigate to your cloned repository:
   ```bash
   cd waterlily-take-home
   ```

2. Install the project dependencies:
   ```bash
   npm install
   npm install -D @types/node
   ```

3. Start the development server (client):
   ```bash
   npm run dev
   ```

4. Start the back-end server:
   ```bash
   npm run serve
   ```

## Assignment Overview

### Step 1: Table UI
- Create a table to display all rows in the `FundingSources` table.
- Funding sources represent investments or insurance products used to fund long-term care. You don’t need an in-depth understanding of these products—just focus on displaying the data.
- Exclude the `id` field from the table and feel free to be creative with the UI.

### Step 2: Add, Edit, Delete
- Build UI components for adding, editing, and deleting rows from the table.
- Implement the corresponding backend endpoints to handle these operations.