# Setup Guide

This guide will walk you through setting up all the services required for the AI Portfolio.

## 1. Clerk Setup

### Create a Clerk Account
1. Go to [https://clerk.com](https://clerk.com)
2. Sign up for a free account
3. Create a new application

### Configure Clerk
1. In your Clerk dashboard, go to **API Keys**
2. Copy the following keys:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
3. Add them to your `.env.local` file

### Configure Authentication Settings
1. In Clerk dashboard, go to **User & Authentication** > **Email, Phone, Username**
2. Enable the authentication methods you want (Email recommended)
3. Go to **Paths** and verify:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in URL: `/`
   - After sign-up URL: `/`

## 2. Sanity Setup

### Create a Sanity Project
1. Go to [https://sanity.io](https://sanity.io)
2. Sign up for a free account
3. Create a new project
4. Choose a project name
5. Select "Production" dataset

### Get Your Project ID
1. In Sanity dashboard, go to your project settings
2. Copy your `Project ID`
3. Add it to `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID`

### Create an API Token
1. In Sanity dashboard, go to **API** > **Tokens**
2. Click **Add API Token**
3. Give it a name (e.g., "AI Portfolio Token")
4. Select **Editor** permissions
5. Copy the token and add it to `.env.local` as `SANITY_API_TOKEN`

### Initialize Sanity in Your Project
```bash
cd ai-portfolio
npx sanity init --project <your-project-id> --dataset production
```

## 3. OpenAI Setup

### Get an OpenAI API Key
1. Go to [https://platform.openai.com](https://platform.openai.com)
2. Sign up or log in to your account
3. Navigate to **API Keys** section
4. Click **Create new secret key**
5. Copy the key (you won't be able to see it again!)
6. Add it to `.env.local` as `OPENAI_API_KEY`

### Set Up Billing
1. Go to **Billing** in OpenAI dashboard
2. Add payment method
3. Set usage limits to control costs
4. For testing, GPT-4 Turbo is recommended (cheaper than GPT-4)

### Important Notes
- OpenAI API usage is pay-as-you-go
- Monitor your usage in the OpenAI dashboard
- Set spending limits to avoid unexpected charges
- For development, consider using GPT-3.5-turbo (cheaper) by changing the model in `lib/openai.ts`

## 4. Environment Variables

Your `.env.local` file should look like this:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxxxxxxxxxxxx
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# OpenAI
OPENAI_API_KEY=sk-xxxxxxxxxxxxx

# MCP Configuration
MCP_SERVER_URL=http://localhost:3001
```

## 5. Running the Application

### Install Dependencies
```bash
npm install
```

### Start the Development Server
```bash
npm run dev
```

The application will be available at:
- Main site: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 6. Adding Your First Project

1. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)
2. Sign in with your Clerk account (you'll need to sign up first)
3. Click on **Project** in the sidebar
4. Click **Create new document**
5. Fill in the project details:
   - Title
   - Slug (click "Generate")
   - Description
   - Upload an image
   - Add technologies (press Enter after each one)
   - Add GitHub and Live URLs (optional)
   - Toggle "Featured" if you want it on the homepage
6. Click **Publish**

## 7. Testing AI Features

### AI Chat
1. Navigate to [http://localhost:3000/ai-chat](http://localhost:3000/ai-chat)
2. Sign in if not already authenticated
3. Start chatting with the AI assistant
4. The AI will use your OpenAI API key to generate responses

### Generate Project Descriptions
You can add a feature to generate project descriptions using the API endpoint:
```bash
curl -X POST http://localhost:3000/api/ai/generate-description \
  -H "Content-Type: application/json" \
  -d '{"title":"My Project","technologies":["Next.js","TypeScript"]}'
```

## 8. MCP (Model Context Protocol)

MCP is set up but requires additional configuration based on your needs.

### Basic MCP Usage
The MCP client is available in `lib/mcp.ts` and can be used to:
- Connect to MCP servers
- List available tools
- Call tools with arguments

### Example MCP Integration
```typescript
import { mcpClient } from '@/lib/mcp'

// Connect to an MCP server
await mcpClient.connect('your-mcp-server-command', ['args'])

// List available tools
const tools = await mcpClient.listTools()

// Call a tool
const result = await mcpClient.callTool('toolName', { arg: 'value' })
```

## 9. Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Import your repository
4. Add all environment variables from `.env.local`
5. Deploy

### Important Deployment Notes
- Make sure all environment variables are set in Vercel
- Sanity Studio will be available at `your-domain.com/studio`
- CORS settings in Sanity may need to be updated to allow your production domain

## 10. Troubleshooting

### Common Issues

**Clerk Authentication Not Working**
- Verify your API keys are correct
- Check that the Clerk URLs match in your `.env.local` and Clerk dashboard

**Sanity Studio Not Loading**
- Verify your project ID is correct
- Check that your API token has the correct permissions
- Make sure you've initialized Sanity in the project

**OpenAI API Errors**
- Verify your API key is valid
- Check your OpenAI account has billing set up
- Ensure you haven't exceeded usage limits

**MCP Connection Issues**
- Verify the MCP server command is correct
- Check that the MCP server is running
- Ensure you have the correct MCP SDK version

## 11. Next Steps

- Customize the design to match your personal brand
- Add more project schemas in Sanity
- Extend AI capabilities with custom prompts
- Add analytics and SEO optimization
- Create custom MCP tools for your specific needs

## Support

If you encounter issues:
1. Check the documentation for each service
2. Review the error messages carefully
3. Search for similar issues on GitHub
4. Open an issue in the repository

Happy building!
