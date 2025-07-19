# 🚀 Deployment Guide for Shell Consultancy Website

This guide explains how to deploy your **Next.js** project to **GitHub Pages**, connect it to your **GoDaddy domain**, and secure it with **HTTPS via Cloudflare** — all for free.

---

## ✅ Prerequisites

- A GitHub account with a repository for your project
- A domain name purchased from GoDaddy
- A free Cloudflare account

---

## 1. 📦 Prepare Next.js for Static Export

> Used github action to deploy refer the file `.github\workflows\publishNextjs.yml`

### 1.1 Install required packages

```bash
npm install --save-dev gh-pages
````

### 1.2 Update `next.config.mjs`

> Create one if not already present.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/shellConsultancy',
  assetPrefix: '/shellConsultancy',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
};

export default nextConfig;
```

### 1.3 Update `package.json` Scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
  }
```

---

## 2. 🚀 Deploy to GitHub Pages

```bash
npm run build
```


### 2.1 Configure GitHub Pages

* Go to your repo → **Settings → Pages**
* Set **Build and deployment → Source** to `GitHub Actions`
* Add your custom domain (e.g. `shellconsultancy.in`)
* Check **Enforce HTTPS**

---

## 3. 🌐 Connect Domain from GoDaddy

### 3.1 Create a Free Cloudflare Account

* Go to [https://cloudflare.in](https://cloudflare.in)
* Click **Add Site**, and enter your domain
* Choose **Free Plan**

### 3.2 Update GoDaddy Nameservers

* Cloudflare will give you two nameservers
* Go to **GoDaddy → My Products → DNS**
* Replace default GoDaddy nameservers with Cloudflare’s

DNS change may take 10 mins to 24 hours.

---

## 4. 🔧 Configure DNS in Cloudflare

### 4.1 Add DNS Records

Go to **Cloudflare → DNS → Records**:

| Type  | Name | Value                               |
| ----- | ---- | ----------------------------------- |
| CNAME | www  | `<your-github-username>.github.io`  |
| A     | @    | `185.199.108.153` (GitHub Pages IP) |

⚠️ Ensure both have **Proxy Status = Proxied (orange cloud)**

---

## 5. 🔒 Enable HTTPS in Cloudflare

### 5.1 Set SSL Settings

Go to **SSL/TLS → Overview** and set:

* **SSL Mode**: `Flexible` (or `Full` if you use a reverse proxy)

### 5.2 Redirect HTTP to HTTPS

Go to **Rules → Page Rules** or **SSL/TLS → Edge Certificates**:

* Enable **Always Use HTTPS**
* Enable **Automatic HTTPS Rewrites**

---

## 6. 🔁 Final Checks

* GitHub Pages shows status ✅
* Cloudflare DNS is active (green check)
* Your domain (`https://www.shellconsultancy.in`) loads the site securely

---

## ✅ Optional: Non-www to www Redirect

Go to **Cloudflare → Rules → Page Rules**:

* **If URL matches**: `shellconsultancy.in/*`
* **Setting**: Forwarding URL → `301`
* **Destination**: `https://www.shellconsultancy.in/$1`

---

## 🎉 Done!

You now have a secure, production-ready Next.js site on your own domain, with HTTPS, CDN, and DNS management — all for free using GitHub Pages and Cloudflare.

---

## 📌 Notes

* This setup is best for **static Next.js sites** (no server-side rendering or API routes).
* For dynamic apps, consider **Vercel**, **Netlify**, or **Render**.

---


