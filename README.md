# AITHOS Privacy Shield — Interactive Experience

A minimal matter claymorphic, interactive educational walkthrough demonstrating why everyday AI agents leak confidential information to third-party clouds, and how **AITHOS Privacy-Preserving AI** solves it in under 3.8 milliseconds using client-side DOM structural inspection and visual perception.

---

## 🚀 Deploying to Render

This application is ready to deploy on **Render** as either a **Static Site** (recommended: free, lightning fast CDN) or a **Web Service**.

### Option A: Automatic Blueprint (Recommended)
1. Push this repository to GitHub or GitLab.
2. In the [Render Dashboard](https://dashboard.render.com/), click **New +** ➔ **Blueprint**.
3. Select this repository. Render will automatically read [`render.yaml`](file:///c:/Users/mohan/Desktop/AITHOS%20Jury%20Experience/render.yaml) and configure:
   - **Type**: Static Site
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `./dist`
   - **SPA Rewrite Route**: `/*` ➔ `/index.html`
4. Click **Apply**. Done!

---

### Option B: Manual Static Site Setup
If creating manually in Render:
1. In the [Render Dashboard](https://dashboard.render.com/), click **New +** ➔ **Static Site**.
2. Connect your Git repository.
3. Configure settings:
   - **Name**: `aithos-jury-experience` (or your choice)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Under **Redirects/Rewrites**:
   - **Type**: `Rewrite`
   - **Source**: `/*`
   - **Destination**: `/index.html`
5. Click **Create Static Site**.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Connected Prototype Engine
The final portal directly connects to our production Cloudflare Worker deployment:  
**[https://aithos-protect.mohansaikrishnab1801.workers.dev/](https://aithos-protect.mohansaikrishnab1801.workers.dev/)**
