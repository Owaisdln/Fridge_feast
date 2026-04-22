# Fridge Feast - Simple Recipe Maker

Turn your leftovers into legendary meals. Enter what you have, and our AI chef will do the rest. Built with Next.js, Genkit, and Firebase.

## 🚀 Getting Started

### 1. Local Development
1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Set up your API Key:**
    - Get an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    - Create a `.env` file in the root directory (if it doesn't exist).
    - Add this line: `GOOGLE_GENAI_API_KEY=your_actual_key_here`
3.  **Run the app:**
    ```bash
    npm run dev
    ```

### 2. Pushing to GitHub
1.  `git init`
2.  `git add .`
3.  `git commit -m "Initial commit"`
4.  `git remote add origin <YOUR_GITHUB_REPO_URL>`
5.  `git branch -M main`
6.  `git push -u origin main`

---

## 🛠️ CRITICAL: Making it work after Deployment

If your app is deployed (e.g., to Vercel or Firebase App Hosting), it **will not work** until you manually add the API key to your provider's dashboard.

### For Vercel (your current link):
1.  Go to your **Vercel Dashboard**.
2.  Click on your project: **Fridge_feast**.
3.  Go to **Settings** > **Environment Variables**.
4.  **Key**: `GOOGLE_GENAI_API_KEY`
5.  **Value**: Paste your Gemini API Key.
6.  Click **Save**.
7.  **IMPORTANT**: Go to the **Deployments** tab and click "Redeploy" on your latest build for the changes to take effect.

### For Firebase App Hosting:
1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Navigate to **App Hosting** > Your Backend > **Settings** > **Environment Variables**.
3.  Click **Add Variable**.
4.  **Variable path**: `GOOGLE_GENAI_API_KEY`
5.  **Value**: Your Gemini API Key.
6.  **Type**: Select **Secret** (Required for API keys).
7.  Trigger a new build by pushing a small change to GitHub.

---

Created by Owais.
