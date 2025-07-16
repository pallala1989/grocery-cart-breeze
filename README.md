# SV Provisions - Fresh Groceries Store

A modern, bilingual (English/Telugu) grocery store web application built with React, TypeScript, and Tailwind CSS.

## Features

✅ **Bilingual Support** - Full English and Telugu language support  
✅ **Product Management** - Admin panel to add, edit, and delete products  
✅ **Multiple Variants** - Products available in different sizes (250g, 500g, 1kg, etc.)  
✅ **Shopping Cart** - Add items, adjust quantities, and checkout  
✅ **PDF Orders** - Generate beautiful PDF receipts  
✅ **Email Notifications** - Send order details via EmailJS  
✅ **Mobile Responsive** - Works perfectly on all devices  
✅ **Modern UI** - Beautiful gradients, animations, and hover effects  

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: shadcn/ui
- **PDF Generation**: jsPDF
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **Build Tool**: Vite

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd sv-provisions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

## Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Repository hosted on GitHub

### Step-by-Step Deployment

1. **Update Vite Configuration**
   
   Edit `vite.config.ts` to include your repository name:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react-swc'
   import path from "path"

   export default defineConfig({
     plugins: [react()],
     base: '/your-repository-name/', // Replace with your actual repo name
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
   })
   ```

2. **Install GitHub Pages Deployment Package**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add Deployment Scripts**
   
   Add these scripts to your `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Build and Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "Deploy from a branch" as source
   - Choose `gh-pages` branch
   - Click Save

6. **Access Your Live Site**
   - Your site will be available at: `https://yourusername.github.io/your-repository-name/`

### Alternative: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      if: github.ref == 'refs/heads/main'
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Email Configuration (EmailJS)

To enable email notifications:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Setup Email Service**
   - Add a new email service (Gmail, Outlook, etc.)
   - Note down your Service ID

3. **Create Email Template**
   - Create a new template with these variables:
     - `{{customer_name}}`
     - `{{customer_mobile}}`
     - `{{order_id}}`
     - `{{order_date}}`
     - `{{order_time}}`
     - `{{total_amount}}`
     - `{{items_list}}`
     - `{{total_items}}`

4. **Update Configuration**
   
   Edit `src/utils/emailService.ts`:
   ```typescript
   const SERVICE_ID = 'your_service_id_here';
   const TEMPLATE_ID = 'your_template_id_here';
   const PUBLIC_KEY = 'your_public_key_here';
   ```

## Admin Panel

Access the admin panel at `/admin` to:
- Add new products
- Edit existing products
- Delete products
- Manage product variants (different sizes and prices)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── ProductCard.tsx # Product display card
│   ├── Cart.tsx        # Shopping cart
│   ├── CheckoutForm.tsx# Checkout form
│   └── AdminPanel.tsx  # Admin management panel
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── Admin.tsx       # Admin page
├── utils/              # Utility functions
│   ├── pdfGenerator.ts # PDF generation
│   └── emailService.ts # Email functionality
├── data/               # Static data
│   └── products.ts     # Product catalog
├── types/              # TypeScript definitions
│   └── index.ts        # Type definitions
└── assets/             # Static assets
    └── *.jpg           # Product images
```

## Customization

### Adding New Products
1. Use the admin panel at `/admin`
2. Click "Add Product"
3. Fill in English and Telugu names
4. Add multiple variants with different sizes and prices
5. Save the product

### Changing Colors/Theme
Edit `src/index.css` and `tailwind.config.ts` to customize:
- Brand colors
- Gradients
- Font styles
- Component themes

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version (requires 16+)

### Deployment Issues
- Verify `base` path in `vite.config.ts` matches repository name
- Ensure GitHub Pages is enabled in repository settings
- Check build output in `dist/` folder

### Email Not Working
- Verify EmailJS configuration
- Check browser console for errors
- Ensure template variables match exactly
- Test with EmailJS dashboard first

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, please create an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ for local grocery stores**