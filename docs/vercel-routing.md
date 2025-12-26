# Vercel Routing Configuration

## The Issue: 404 on Refresh
By default, Vercel attempts to match the URL path directly to a file on the disk.
- **Example**: Browsing to `/accounts` makes Vercel look for an `accounts.html` file.
- **Reality**: In a Single Page App (SPA) like this, `accounts.html` does not exist. The only HTML file is `index.html`.
- **Result**: Vercel returns a 404: NOT_FOUND error.

## The Fix: `vercel.json` Rewrite
We configure Vercel to transparently rewrite all requests to `index.html`. This allows the React Router running inside `index.html` to see the URL `/accounts` and render the correct page component.

### `vercel.json`
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
*Note: This configuration works for purely static SPAs. If you have API functions in `/api`, Vercel usually handles them automatically, but if you have custom server routing, you might need specific `api` rewrites.*

## Required Vercel Settings
For this configuration to work, ensure your Vercel Project Settings are:
- **Framework Preset**: `Vite` (or `Other`)
- **Build Command**: `vite build` (or `npm run build`)
- **Output Directory**: `dist`
