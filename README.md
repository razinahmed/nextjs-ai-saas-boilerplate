# 🚀 Next.js 14 AI SaaS Boilerplate

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Outfit&weight=700&size=36&duration=4000&pause=1000&color=00D4AA&center=true&vCenter=true&width=600&lines=Next.js+14+App+Router;OpenAI+GPT-4+Integration;Stripe+Subscriptions;Supabase+Auth+%26+Database;Ship+Your+Startup+in+Days" alt="Typing SVG" />

**The ultimate production-ready starter kit for building your next highly profitable AI Software-as-a-Service.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Billing-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth_%26_DB-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://prisma.io/)

[Live Demo](#) • [Documentation](#) • [Deploy to Vercel](#)

</div>

---

## 🎯 What's Included?

Forget spending weeks setting up authentication, databases, and billing. This boilerplate gives you:

- ⚛️ **Next.js 14** (App Router, React Server Components)
- 🔐 **Authentication** (Magic Links, Social Logins via Supabase)
- 💳 **Billing/Subscriptions** (Stripe Checkouts & Customer Portal)
- 🤖 **AI Integration** (OpenAI streaming API out-of-the-box)
- 🗄️ **Database** (PostgreSQL with Prisma ORM)
- 🎨 **Styling** (Tailwind CSS, Shadcn UI)
- ✉️ **Emails** (Resend & React Email)

---

## 🏗️ Architecture

```mermaid
graph TD
    User([End User]) --> |HTTPS| CDN(Vercel Edge Network)
    CDN --> |Server Components| Next[Next.js 14 App Router]
    
    Next --> |Auth / RLS| Supabase[(Supabase PostgreSQL)]
    Next --> |Payments| Stripe[Stripe API]
    Next --> |Inference| OpenAI[OpenAI API]
    Next --> |Transactional Emails| Resend[Resend API]

    style User fill:#3b82f6,stroke:#1e40af,color:#fff
    style Next fill:#000,stroke:#333,color:#fff
    style Supabase fill:#3ecf8e,stroke:#047857,color:#fff
    style Stripe fill:#635bff,stroke:#4338ca,color:#fff
    style OpenAI fill:#10a37f,stroke:#065f46,color:#fff
```

---

## 🖥️ Dashboard Preview

<div align="center">
  <img src="https://via.placeholder.com/900x500/0a0a0a/00d4aa?text=SaaS+Dashboard+Interface" alt="Dashboard Preview" />
</div>

---

## 🚦 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/razinahmed/nextjs-ai-saas-boilerplate.git
cd nextjs-ai-saas-boilerplate
npm install
```

### 2. Environment Variables

Rename `.env.example` to `.env.local` and fill in your keys:

```env
# NextJS
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."

# Stripe
STRIPE_API_KEY="..."
STRIPE_WEBHOOK_SECRET="..."
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID="..."

# OpenAI
OPENAI_API_KEY="..."
```

### 3. Database Setup

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 💡 AI Features Included

1. **AI Chat Interface**: A beautiful streaming UI similar to ChatGPT.
2. **Text Summarization Endpoint**: Ready-to-use API route for summarizing content.
3. **Image Generation**: DALL-E 3 integration route built-in.
4. **Token Tracking**: Middleware that tracks user token usage and limits access based on their Stripe subscription tier.

---

## 🛡️ License

This boilerplate is completely open-source under the **MIT License**. Build your dream startup without any commercial restrictions.

---

<div align="center">
  <h3>Built by <a href="https://github.com/razinahmed">Abdul Rasak V</a></h3>
  <p>⭐ If this saves you time, please give it a star!</p>
</div>
