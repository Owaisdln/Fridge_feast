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
    - Create a `.env` file in the root directory.
    - Add this line: `GOOGLE_GENAI_API_KEY=your_actual_key_here`
3.  **Run the app:**
    ```bash
    npm run dev
    ```

### 2. Deployment - CRITICAL STEPS

If your app is deployed, it **will not work** until you manually add the API key to your provider's dashboard and **Redeploy**.

#### For Vercel (Current Host):
1.  Go to your **Vercel Dashboard**.
2.  Navigate to **Settings** > **Environment Variables**.
3.  Add **Key**: `GOOGLE_GENAI_API_KEY` and **Value**: Your API key.
4.  **IMPORTANT**: You must go to the **Deployments** tab and click "Redeploy" on your latest build for this change to take effect.

#### For Firebase App Hosting:
1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Navigate to **App Hosting** > Your Backend > **Settings** > **Environment Variables**.
3.  Click **Add Variable**.
4.  **Variable path**: `GOOGLE_GENAI_API_KEY`.
5.  **Type**: Select **Secret** (Required for API keys).
6.  Redeploy by pushing a small change to GitHub.

## 🛠️ GitHub Push Troubleshooting

If you get "failed to push some refs":
1.  `git pull origin main --rebase`
2.  `git push -u origin main`

If you get "nothing to commit, working tree clean" but GitHub is empty:
1.  `git remote add origin <YOUR_URL>` (if not already done)
2.  `git push -u origin main --force`

---

Created by Owais.
