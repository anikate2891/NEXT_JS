- Flow:
    - JavaScript - ReactJs - NextJs

- Why NextJs:
    - SEO [Search Engine Optimization]
        - Crawling { See all websites and their pages }
        - Indexing { List the websites, seo wise }
        - SSR [Server Side Rendering / Component]
        - SSG [Static Site Generation]
        - CSR [Client Side Rendering]
        - ISR [Incremental Static Regeneration]
        - Keywords and Meta Tags
    - File-based Routing
    - Built-in CSS and Sass support
    - Fast Refresh
    - TypeScript Support

    - SEO DEPEND'S ON:
        - Delivery - Keyword Research - Optimization - Location - Ratings - Reviews.

- Types Of Routing:
    - File Based Routing
    - App Based Routing

**
- Installation:
    - npx create-next-app@latest
        - Project Name: <project-name>
        - Customize Settings: Yes
        - TypeScript: Yes/No
        - Linter - ESLint: Yes/No
        - React Compiler: No[ if useEffect not needed ]
        - Tailwind CSS: Yes
        - Src Directory: Yes
        - App Router: Yes 
        - Import Alias: Yes/No
        - Agent.md: Yes/No [ use for AI understanding ]

    - npm run dev
**

- Understanding AppRouter: { Folder = Routes(Path) }
    - /src 
        - /app: This is the "/" base routes. [localhost:3000]
            - element: page.js
            - product folder is new route call: /product
                - element: page.js
            - addToCart folder is new route call: /addToCart
                - element: page.js
    
    - RootLayout mey {children} = page.js ko render karega.
    - Link tag use karke Navbar mey route ko navigate karenge.

- Dynamic Routing:
    - product folder is new route call: /product
        - element: page.js
        - [id] - (Folder_Name): /product/ <anything>
        - await {params}: iske andar <anything> ka value store raheta he;
        