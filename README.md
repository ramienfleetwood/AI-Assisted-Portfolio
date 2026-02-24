# AI Portfolio

A modern, AI-powered portfolio website built with Next.js 16, OpenAI, Sanity CMS, Clerk authentication, and Model Context Protocol (MCP).

## Features

- **Next.js 16 App Router**: Modern React framework with server components
- **OpenAI Integration**: AI-powered chat assistant and content generation
- **Sanity CMS**: Headless CMS for managing portfolio projects
- **Clerk Authentication**: Secure user authentication and management
- **Model Context Protocol (MCP)**: Advanced AI context management
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **TypeScript**: Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Clerk account ([clerk.com](https://clerk.com))
- Sanity account ([sanity.io](https://sanity.io))
- OpenAI API key ([platform.openai.com](https://platform.openai.com))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Copy `.env.example` to `.env.local` and fill in your values:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token

# OpenAI
OPENAI_API_KEY=your_openai_api_key
```

### Setting Up Clerk

1. Create a new application at [clerk.com](https://clerk.com)
2. Copy your publishable key and secret key
3. Add them to your `.env.local` file
4. Configure sign-in and sign-up URLs in the Clerk dashboard

### Setting Up Sanity

1. Create a new project at [sanity.io](https://sanity.io)
2. Initialize Sanity in your project:
```bash
npx sanity init
```
3. Copy your project ID and add it to `.env.local`
4. Create an API token with write access in the Sanity dashboard

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Accessing Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to access the Sanity Studio and manage your projects.

## Project Structure

```
ai-portfolio/
├── app/                      # Next.js App Router pages
│   ├── api/                 # API routes
│   │   ├── ai/             # OpenAI API endpoints
│   │   └── mcp/            # MCP endpoints
│   ├── projects/           # Projects listing and detail pages
│   ├── ai-chat/            # AI chat interface
│   ├── studio/             # Sanity Studio
│   ├── sign-in/            # Clerk sign-in page
│   ├── sign-up/            # Clerk sign-up page
│   └── layout.tsx          # Root layout with Clerk provider
├── components/              # React components
│   ├── layout/             # Layout components
│   ├── ui/                 # UI components
│   ├── AIChat.tsx          # AI chat component
│   └── ProjectCard.tsx     # Project card component
├── lib/                     # Utility libraries
│   ├── openai.ts           # OpenAI configuration
│   ├── sanity.ts           # Sanity client and queries
│   └── mcp.ts              # MCP client
├── sanity/                  # Sanity configuration
│   └── schemas/            # Sanity schema definitions
│       ├── project.ts      # Project schema
│       └── index.ts        # Schema exports
├── middleware.ts            # Clerk middleware
└── sanity.config.ts        # Sanity configuration

```

## Features Breakdown

### 1. AI Chat Assistant
- Interactive chat interface powered by OpenAI GPT-4
- Context-aware conversations
- Protected by Clerk authentication
- Located at `/ai-chat`

### 2. Project Management
- Create and manage portfolio projects via Sanity Studio
- Rich text content with images
- Technology tags
- GitHub and live demo links
- Featured project highlighting

### 3. Authentication
- Secure sign-in/sign-up with Clerk
- Protected routes for admin features
- User management dashboard

### 4. MCP Integration
- Model Context Protocol for advanced AI interactions
- Tool calling capabilities
- Extensible architecture for custom tools

## API Endpoints

### AI Endpoints

- `POST /api/ai/chat` - Send messages to AI assistant
- `POST /api/ai/generate-description` - Generate project descriptions

### MCP Endpoints

Custom MCP endpoints can be added in `/app/api/mcp`

## Customization

### Adding New Project Fields

Edit `sanity/schemas/project.ts` to add new fields to your projects.

### Customizing AI Behavior

Modify the prompts and configuration in `lib/openai.ts` to change AI responses.

### Styling

The project uses Tailwind CSS. Customize colors, fonts, and other styles in `tailwind.config.js` and `app/globals.css`.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables in Production

Make sure to add all environment variables from `.env.local` to your production environment.

## Technologies Used

- **Next.js 16**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **OpenAI API**: AI capabilities
- **Sanity**: Headless CMS
- **Clerk**: Authentication
- **Model Context Protocol**: AI context management

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

MIT License - feel free to use this project for your own portfolio.

## Support

For issues and questions:
- Check the documentation for each technology
- Open an issue in this repository
- Contact the maintainer

## Acknowledgments

- Next.js team for the amazing framework
- OpenAI for AI capabilities
- Sanity for the CMS
- Clerk for authentication
- Anthropic for MCP

---

Built with ❤️ using cutting-edge AI and web technologies
