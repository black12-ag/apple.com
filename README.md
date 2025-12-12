
# Apple.com High-Fidelity Clone

This project is a high-fidelity clone of Apple.com, featuring pixel-perfect components, responsive design, and over 60 dedicated pages mirroring the official structure.

## 👨‍💻 Developed By

**[black12-ag](https://github.com/black12-ag)**

> This project is open-source and available for educational purposes. If you find it useful, please consider [sponsoring](https://github.com/sponsors/black12-ag).

## 🏗️ Architecture

```mermaid
graph TD
    User[User] --> Router[App Router]
    
    subgraph "Core Layout"
        Router --> GlobalNav[Global Navigation]
        Router --> GlobalFooter[Global Footer]
        GlobalNav --> AppleLogo[Apple Logo]
        GlobalNav --> NavLinks[Nav Links]
        GlobalFooter --> FooterLinks[Footer Links]
    end

    subgraph "Pages"
        Router --> Home[Home Page]
        Router --> Mac[Mac Page]
        Router --> iPhone[iPhone Page]
        Router --> Store[Store Page]
        Router --> Other[60+ Footer Pages]
    end

    subgraph "Home Page Components"
        Home --> Hero1[Hero: iPhone 16 Pro]
        Home --> Hero2[Hero: iPhone 16]
        Home --> Grid[Promo Grid]
        Grid --> Tiles[Product Tiles]
    end

    subgraph "Assets"
        Hero1 --> LocalAssets[Local Assets /src/assets]
        Hero2 --> LocalAssets
        Tiles --> LocalAssets
    end
```

## 🚀 Deployment Instructions (Cloudflare Pages)

1.  **Connect Git:** Connect your GitHub repository (`black12-ag/apple.com`) to Cloudflare Pages.
2.  **Build Settings:** Cloudflare should automatically detect the framework as **Vite**.
    *   **Build Command:** `npm run build`
        *   *Note:* The build script runs `tsc -b && vite build`.
    *   **Output Directory:** `dist`
3.  **Environment Variables:** None required for this static build.
4.  **Node Version:** Recommended `20` or later.

## 🛠️ Tech Stack

-   **Framework:** React + Vite
-   **Routing:** React Router DOM
-   **Styling:** Styled Components + Framer Motion
-   **Language:** TypeScript

## 📜 License

Copyright © 2025 Apple Inc. Clone developed by black12-ag.
