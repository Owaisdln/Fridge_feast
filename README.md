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
4.  **Create Repo:** Go to [github.com/new](https://github.com/new) and create a repository. **Do not** initialize with README, License, or gitignore to avoid conflicts.
5.  **Link and Push:**
    - `git remote add origin <YOUR_GITHUB_REPO_URL>`
    - `git branch -M main`
    - `git push -u origin main`

### Troubleshooting "Failed to push"
If you get an error during push, your GitHub repo might have files you don't have locally. Fix with:
```bash
git pull origin main --rebase
git push -u origin main
```

## Deployment Setup (CRITICAL)

The AI will **not work** until you add your API key to your hosting provider's settings.

### For Firebase App Hosting:
1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Navigate to **App Hosting** > Your Backend > **Settings** > **Environment Variables**.
3.  Click **Add Variable**.
4.  **Variable path**: `GOOGLE_GENAI_API_KEY`
5.  **Value**: Your Gemini API Key.
6.  **Type**: Select **Secret** (Important!).
7.  Trigger a new build by pushing a small change to GitHub.

### For Vercel:
1.  Go to your Project Dashboard on Vercel.
2.  Go to **Settings** > **Environment Variables**.
3.  Add `GOOGLE_GENAI_API_KEY` with your API Key value.
4.  Redeploy your project.

Created by Owais.
