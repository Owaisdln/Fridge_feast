# Fridge Feast - Simple Recipe Maker

Turn your leftovers into legendary meals. Enter what you have, and our AI chef will do the rest. Built with Next.js, Genkit, and Firebase.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your key:
    ```
    GOOGLE_GENAI_API_KEY=your_api_key_here
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Pushing to GitHub

1.  **Initialize git:** `git init`
2.  **Add files:** `git add .`
3.  **Commit:** `git commit -m "Initial commit"`
4.  **Create Repo:** Go to [github.com/new](https://github.com/new) and create a repository. **Do not** initialize with README, License, or gitignore if you want to avoid sync issues.
5.  **Link and Push:**
    ```bash
    git remote add origin <YOUR_GITHUB_REPO_URL>
    git branch -M main
    git push -u origin main
    ```

### Fixing "failed to push some refs" Error
If you get an error when pushing, it's usually because the remote repo has files you don't have locally. Fix it with:
```bash
git pull origin main --rebase
git push -u origin main
```

## Deployment with Firebase App Hosting

To make the AI work after deployment, you **must** configure your API key as a secret:

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Select your project and navigate to **App Hosting**.
3.  Click on your Backend, go to **Settings** > **Environment Variables**.
4.  Add a new variable:
    - **Variable path**: `GOOGLE_GENAI_API_KEY`
    - **Value**: Your Gemini API Key
    - **Type**: Select **Secret** (this ensures it's stored securely in Cloud Secret Manager).
5.  **Critical:** After adding the secret, you must trigger a new build (by pushing a small change to GitHub) for the secret to be available to the app.

Created by Owais.