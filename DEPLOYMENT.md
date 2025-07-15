# 🚀 Deployment Guide for Shell Consultancy Website

This guide explains how to deploy your **Next.js** project to **GitHub Pages**, connect it to your **GoDaddy domain**, and secure it with **HTTPS via Cloudflare** — all for free.

---

## ✅ Prerequisites

- A GitHub account with a repository for your project
- A domain name purchased from GoDaddy
- A free Cloudflare account

---

## 1. 📦 Prepare Next.js for Static Export

> GitHub Pages supports only static sites, so we’ll use `next export`.

### 1.1 Install required packages

```bash
npm install --save-dev gh-pages
````

### 1.2 Update `next.config.js`

> Create one if not already present.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // Important if using <Image />
  trailingSlash: true,
  basePath: '', // set this if deploying to a sub-path
};

module.exports = nextConfig;
```

### 1.3 Update `package.json` Scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "deploy": "next build && gh-pages -d out"
}
```

---

## 2. 🚀 Deploy to GitHub Pages

```bash
npm run build
npm run deploy
```

This pushes the content of the `out/` folder to the `gh-pages` branch on your GitHub repo.

### 2.1 Configure GitHub Pages

* Go to your repo → **Settings → Pages**
* Set **Source** to `gh-pages` branch → `/root`
* Add your custom domain (e.g. `www.shellconsultancy.in`)
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


