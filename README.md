# Interiors Website Workspace

This workspace contains a Next.js project for an interior design website.
The actual application lives in the `interiors-site` subdirectory.

## Getting Started

1. Open a terminal in `interiors-site`.
2. Run `npm install` (dependencies were already installed by create-next-app).
3. Start development server with `npm run dev` and visit http://localhost:3000.

The site has the following pages:
- `/` (Home)
- `/projects` (Projects overview)
- `/about` (About Us)
- `/contact` (Contact form placeholder)

Modify the `app` directory to add content or integrate a CMS.

## Integrating Strapi CMS

A Strapi project has been scaffolded under `interiors-site/cms`.

1. Open a terminal and navigate into that folder:
   ```bash
   cd interiors-site/cms
   npm run develop
   ```
   The Strapi admin UI will be available at http://localhost:1337/admin. Create your administrator account.

2. In the Strapi admin create a **Collection Type** named `Project` with fields:
   - Title (text)
   - Slug (UID)
   - Description (rich text)
   - Image (media)

3. Add some project entries and publish them.

4. The Next.js frontend page `/projects` now fetches from the Strapi REST API at
   `http://localhost:1337/api/projects` during build. Refresh the dev server to
   see entries appear.

You can add additional fields and extend the fetch logic in `app/projects/page.tsx`.
