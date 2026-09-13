# Friendly Education Portal Split & Hosting Guide (৪ টি সাব-ডোমেন ও ব্যাকএন্ড হোস্টিং)

আপনার অ্যাপটিতে **Express Node.js Backend + React Frontend** রয়েছে। 

---

### 🟢 ১. AI Studio Cloud Run (বর্তমানে যেখানে অ্যাপটি হোস্ট করা আছে)

AI Studio আপনার জন্য সম্পূর্ণ **Express Backend সহ Cloud Run** কনটেইনারে ফ্রিতে অ্যাপটি হোস্ট করে দিয়েছে।

এখানে ৪টি আলাদা পোর্টাল ব্যবহার করার সরাসরি লিঙ্ক:
1. **Students Portal:** `https://<YOUR-AI-STUDIO-URL>/student`
2. **Admin Portal:** `https://<YOUR-AI-STUDIO-URL>/admin`
3. **Grievance Box:** `https://<YOUR-AI-STUDIO-URL>/grievance`
4. **Track Status:** `https://<YOUR-AI-STUDIO-URL>/status`

*(লিঙ্কগুলোতে সরাসরি ক্লিক করলে অ্যাপের অটোমেটিক ডিটেকশন সিস্টেম সঠিক ইন্টারফেসটি খুলে দেবে)*

---

### 🔴 ২. Vercel / Netlify-তে কেন ব্যাকএন্ড কাজ করে না?

- **কারণ:** Vercel এবং Netlify বাই-ডিফল্ট শুধু ফ্রন্টএন্ড (Static HTML/JS) হোস্ট করে। আপনার `server.ts` ফাইলটি (যেটি Nodemailer, PDF Generation, Firestore REST proxy ইত্যাদি নিয়ন্ত্রণ করে) সেখানে চালু হয় না।

---

### 🚀 ৩. সম্পূর্ণ ফ্রিতে Backend + Frontend + 4টি Subdomain কিভাবে হোস্ট করবেন?

যদি আপনার নিজের একটি কাস্টম ডোমেন (যেমন: `myedu.com`) থাকে, তবে সম্পূর্ণ **Express Backend** সহ ৪ টি সাব-ডোমেন ফ্রিতে চালু করার সবচেয়ে সহজ ২টি পদ্ধতি:

#### 🔹 অপশন এ: Render.com (Free Web Service) - সবচেয়ে সহজ ও সেরা
1. **Render.com**-এ ফ্রি অ্যাকাউন্ট খুলুন।
2. **New Web Service** বেছে নিয়ে GitHub রিভিশন সিলেক্ট করুন।
3. Build Command: `npm run build`
4. Start Command: `npm start` (বা `node dist/server.cjs`)
5. Render-এর Settings থেকে Custom Domain যোগ করুন:
   - `student.myedu.com`
   - `admin.myedu.com`
   - `grievance.myedu.com`
   - `status.myedu.com`
6. আপনার Cloudflare / Namecheap DNS-এ CNAME রেকর্ডগুলো Render-এর অনলিন লিঙ্কে পয়েন্ট করুন। 
   *(ফলাফল: ৪টি সাব-ডোমেনই একই সাথে ব্যাকএন্ড সহ চালু হয়ে যাবে!)*

#### 🔹 অপশন বি: Vercel-এ Serverless Function হিসেবে চালু করা
Vercel-এ ব্যাকএন্ড চালাতে চাইলে প্রজেক্ট মূলে একটি `api/index.js` সার্ভারলেস অ্যাডাপ্টার যোগ করে Vercel-এ ডিপ্লয় করা যায়।

#### 🔹 অপশন সি: Cloudflare Pages / Koyeb / Google Cloud Run
Google Cloud Run বা Koyeb-এ সম্পূর্ণ Docker container ফ্রিতে হোস্ট করে কাস্টম সাব-ডোমেন যুক্ত করা যায়।
