# Better Auth Starter

A modern authentication starter template built with [Better Auth](https://www.better-auth.com/), Next.js, Drizzle ORM, and PostgreSQL.

## Features

- 🔐 **Better Auth** - Modern authentication library with built-in security best practices
- 🗄️ **PostgreSQL** - Robust and scalable database
- 🔄 **Drizzle ORM** - Type-safe database queries with excellent developer experience
- ⚡ **Next.js** - React framework with server-side rendering and API routes
- 🎨 **Modern UI** - Clean and responsive interface
- 🔒 **Secure by Default** - Industry-standard security practices built-in

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+
- PostgreSQL database
- npm or yarn or pnpm

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ochiengmorris/better-auth-starter.git
cd better-auth-starter
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key-here"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth Providers (optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

### 4. Set up better auth

Run the following command:

```bash
npx @better-auth/cli generate
```

### 5. Set up the database

Run database migrations:

```bash
npm run db:push
# or
npm run db:migrate
```

### 6. Start the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

```
better-auth-starter/
├── app/
│   ├── auth/[...all]/     # Better Auth routes
│   ├── dashboard/         # Protected dashboard pages
│   ├── login/             # Authentication pages
│   └── signup/            # Sign up pages (Not implemented yet) - TODO
├── components/            # React components
├── db/                    # Database configuration and schema
├── lib/                   # Utility functions and auth configurations
├── public/                # Static assets
└── server/                # Server-side utilities
```

## Database Schema

The starter includes a basic user schema with Drizzle ORM. You can find and modify the schema in the `db` directory.

## Authentication Features

- Email/Password authentication
- OAuth providers (GitHub, Google, etc.)
- Session management
- Password reset (Not implemented yet)
- Email verification (Only using OAuth. Credentials currently doesn't support email verifications)
- Role-based access control (RBAC) - TODO

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio for database management
- `npm run lint` - Run ESLint

## Customization

### Adding OAuth Providers

1. Add provider credentials to `.env.local`
2. Configure the provider in your Better Auth configuration (Already done for you)
3. Add the provider button to your login page (Already done for you)

### Setting Up Google OAuth

Follow these steps to enable Google authentication:

#### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown and select "New Project"
3. Enter a project name (e.g., "Better Auth App")
4. Click "Create"

#### 2. Create OAuth Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select "Web application" as the application type
4. Configure the OAuth client:
   - **Name**: "Better Auth Web Client"
   - **Authorized JavaScript origins**:
     - Development: `http://localhost:3000`
     - Production: `https://yourdomain.com`
   - **Authorized redirect URIs**:
     - Development: `http://localhost:3000/api/auth/callback/google`
     - Production: `https://yourdomain.com/api/auth/callback/google`
5. Click "Create"
6. Copy the **Client ID** and **Client Secret** - you'll need these for your `.env.local` file

#### 5. Update Environment Variables

Add these to your `.env.local` file:

```env
GOOGLE_CLIENT_ID="your-client-id-here.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-client-secret-here"
```

#### Important Notes

- For production, make sure to add your production domain to authorized origins and redirect URIs
- The redirect URI must exactly match the format: `https://yourdomain.com/api/auth/callback/google`
- Keep your Client Secret secure and never commit it to version control
- You may need to verify your domain for production use

### Modifying User Schema

Update the schema in `db/schema.ts` and run:

```bash
npm run db:push
```

### Styling

This starter uses Tailwind CSS. Customize your design by modifying `app/global.css` and component styles.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Ensure your PostgreSQL database is accessible and environment variables are properly configured.

## Security Considerations

- Always use HTTPS in production
- Keep dependencies updated
- Use strong secrets for `BETTER_AUTH_SECRET`
- Enable rate limiting for auth endpoints
- Implement CSRF protection
- Validate and sanitize user inputs

## Troubleshooting

### Database Connection Issues

- Verify DATABASE_URL is correct
- Ensure PostgreSQL is running
- Check database user permissions

### Authentication Not Working

- Verify BETTER_AUTH_SECRET is set
- Check BETTER_AUTH_URL matches your domain
- Ensure cookies are enabled

## Resources

- [Better Auth Documentation](https://www.better-auth.com/docs) - Authentication library
- [Next.js Documentation](https://nextjs.org/docs) - React framework
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs) - Database toolkit
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - Database

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this template for your projects.

## Support

For issues and questions, please open an issue on GitHub or refer to the Better Auth documentation.

---

Built with ❤️ using Better Auth, Drizzle ORM, and Next.js
