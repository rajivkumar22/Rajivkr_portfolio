# Rajiv Kumar - Portfolio Website

A modern, interactive portfolio website built with React, featuring 3D animations, dark/light mode, and a working contact form.

## 🚀 Features

- **Interactive 3D Cards** - Hover effects with realistic depth
- **Dark/Light Mode** - Toggle between themes
- **Responsive Design** - Works on all devices
- **Contact Form** - SendGrid integration for direct emails
- **Project Showcase** - Live demos and GitHub links
- **Certifications** - Interactive carousel with navigation
- **Smooth Animations** - Framer Motion powered

## 🛠️ Technologies Used

- React 18 + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- SendGrid for email delivery
- Express.js backend
- Vercel for deployment

## 🏃‍♂️ Running in VS Code

### Prerequisites
- Node.js 18 or higher
- VS Code with these extensions (recommended):
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer

### Setup Steps

1. **Clone or download this project to your local machine**

2. **Open terminal in VS Code** (Terminal → New Terminal)

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Create environment file:**
   Create a `.env` file in the root directory:
   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

6. **Open in browser:**
   - The app will run on http://localhost:5000
   - Changes will auto-reload as you edit files

### Project Structure
```
portfolio/
├── client/          # Frontend React app
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
├── public/          # Static assets
└── package.json     # Dependencies and scripts
```

## 🌐 Deploying to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Import Project"
   - Select your portfolio repository
   - Configure deployment settings:
     - **Framework Preset:** Vite
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`

3. **Add Environment Variable:**
   - In Vercel dashboard → Settings → Environment Variables
   - Add: `SENDGRID_API_KEY` = your_sendgrid_api_key

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - Future pushes to main branch will auto-deploy

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts and add environment variables when asked**

## 📧 Email Configuration

The contact form requires a SendGrid account:

1. **Create SendGrid account** at [sendgrid.com](https://sendgrid.com)
2. **Verify your sender email** (kumarrajiv12945@gmail.com)
3. **Create API key** in SendGrid dashboard
4. **Add to environment variables**

### Troubleshooting Email Issues

If emails aren't arriving:
- Check spam/junk folders
- Verify sender email in SendGrid
- Ensure API key has mail.send permissions
- Check server logs for error messages

## 🎨 Customization

### Colors
Edit `client/src/index.css` to change the color scheme:
```css
:root {
  --primary: 263 85% 60%;    /* Purple */
  --secondary: 180 65% 55%;  /* Cyan */
}
```

### Content
Update project information in:
- `client/src/components/ProjectsSection.tsx`
- `client/src/components/CertificationsSection.tsx`
- `client/src/components/AboutSection.tsx`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Support

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify environment variables are set correctly
4. Check that SendGrid account is properly configured

## 📞 Contact

- **Email:** kumarrajiv12945@gmail.com
- **LinkedIn:** [linkedin.com/in/rajivkumar12945](https://linkedin.com/in/rajivkumar12945)
- **GitHub:** [github.com/rajivkumar12945](https://github.com/rajivkumar12945)
- **LeetCode:** [leetcode.com/u/kumarrajiv12945](https://leetcode.com/u/kumarrajiv12945)

---

Built with ❤️ by Rajiv Kumar