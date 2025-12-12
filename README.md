
# Apple.com High-Fidelity Clone

This project is a high-fidelity clone of Apple.com properly structured for deployment on Cloudflare Pages.

## Deployment Instructions (Cloudflare Pages)

1.  **Connect Git:** Connect your GitHub repository (`black12-ag/apple.com`) to Cloudflare Pages.
2.  **Build Settings:** Cloudflare should automatically detect the framework as **Vite**.
    *   **Build Command:** `npm run build`
        *   *Note:* The build script runs `tsc -b && vite build`.
    *   **Output Directory:** `dist`
3.  **Environment Variables:** None required for this static build.
4.  **Node Version:** Recommended `20` or later (Cloudflare defaults are usually fine, but you can set `NODE_VERSION: 20` if needed).

## Project Structure

-   `src/pages`: Individual route components (following "One Page, One Folder").
-   `src/components`: Shared components (GlobalNav, GlobalFooter, etc.).
-   `src/assets`: Localized high-resolution images (scraped from official source).

## Scripts

-   `npm run dev`: Start local development server.
-   `npm run build`: Type-check and build for production.
-   `npm run download-assets`: Re-run the scraper to fetch fresh assets from apple.com.

