# Fridge Feast - Simple Recipe Maker

Turn your leftovers into legendary meals. Enter what you have, and our AI chef will do the rest. Built with Next.js, Genkit, and Firebase.

## 💻 Working in VS Code

To work on this project locally in VS Code:
1. **Download the project**: Use the "Download" or "Export" button in Firebase Studio to get your code as a ZIP file.
2. **Extract and Open**: Extract the ZIP and open the folder in VS Code.
3. **Install Dependencies**: Open the terminal in VS Code and run:
   ```bash
   npm install
   ```
4. **Set up Environment**: Create a `.env` file (see the "Local Development" section below).
5. **Run the App**: Start the development server:
   ```bash
   npm run dev
   ```

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

## 🛠️ Troubleshooting

### GitHub Push Errors
If you get "failed to push some refs":
1.  `git pull origin main --rebase`
2.  `git push -u origin main`

If you get "nothing to commit, working tree clean" but GitHub is empty:
1.  `git push -u origin main --force`

### AI Generation Errors
- **"Chef's Error" in production**: This usually means the `GOOGLE_GENAI_API_KEY` is missing in your deployment dashboard.
- **404 Model Not Found**: We are using `gemini-1.5-flash`. Ensure your API key has access to this model in Google AI Studio.

---

Created by Owais.
