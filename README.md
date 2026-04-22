# Fridge Feast - Simple Recipe Maker

Turn your leftovers into legendary meals. Enter what you have, and our AI chef will do the rest. Built with Next.js, Genkit, and Firebase.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your keys:
    ```
    GOOGLE_GENAI_API_KEY=your_api_key_here
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Pushing to GitHub

1.  Initialize git:
    ```bash
    git init
    ```
2.  Add files:
    ```bash
    git add .
    ```
3.  Commit:
    ```bash
    git commit -m "Initial commit from Fridge Feast"
    ```
4.  Add your remote:
    ```bash
    git remote add origin <YOUR_GITHUB_REPO_URL>
    ```
5.  Push:
    ```bash
    git branch -M main
    git push -u origin main
    ```

## Deployment

This project is configured for **Firebase App Hosting**. 

1.  Ensure your code is pushed to a GitHub repository.
2.  Go to the [Firebase Console](https://console.firebase.google.com/).
3.  Select your project and navigate to **App Hosting**.
4.  Connect your GitHub repository and follow the setup wizard.
5.  Set your `GOOGLE_GENAI_API_KEY` in the Firebase Console under the App Hosting backend secrets/environment variables.

Created by Owais.
