# EmailJS Setup Guide

The contact form is now fully functional! Follow these steps to enable email notifications:

## Step 1: Create an EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign up for free"
3. Create your account (you can use Google, GitHub, or email)

## Step 2: Set Up Your Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail**: Select "Gmail" and follow OAuth setup
   - **Outlook**: Select "Outlook" and follow OAuth setup
   - **Custom SMTP**: If using another provider
4. Name it (e.g., "Gmail Service") and save
5. Copy the **Service ID** for later

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Configure it with these variables (the form sends these):
   - `from_name` - sender's name
   - `from_email` - sender's email
   - `subject` - message subject
   - `message` - message body
   - `to_email` - your email (renzmartinrebogio@gmail.com)

4. Example template content:

```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

5. Save and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys** in the dashboard
2. Copy your **Public Key**

## Step 5: Update Environment Variables

1. Open `.env.local` in your project root
2. Fill in the three values:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

## Step 6: Restart Your Dev Server

```bash
npm run dev
```

## Testing

1. Go to the "Get In Touch" section on your portfolio
2. Fill out the contact form
3. Click "Send Message"
4. You should see a success toast notification
5. Check your email for the message!

## What Happens Now

- When someone fills out and submits the form, they'll see a success message
- You'll receive an email notification with their message
- Failed submissions show an error toast with helpful messages
- The form resets after successful submission

## Troubleshooting

**"Failed to send message"**

- Check that all three environment variables are correct
- Make sure your email provider (Gmail/Outlook) is properly authenticated in EmailJS
- Verify the template ID exists and has the correct variable names

**Not receiving emails**

- Check spam/junk folder
- Verify the "to_email" in ContactSection.tsx matches your email
- Test in EmailJS dashboard first to ensure service is working

**Environment variables not loading**

- Make sure file is named `.env.local` (not `.env` or other variations)
- Restart the dev server after changes
- Check vite.config.ts includes env variables

Need help? EmailJS has great documentation: https://www.emailjs.com/docs/
