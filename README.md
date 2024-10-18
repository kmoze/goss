# Goss

Goss is a social media platform where users share voice notes instead of written posts. Think of it as Twitter, but for audio content! Users can record, post, listen to, and interact with voice notes, making it a unique way to connect through sound.

## Features

- **Voice note posts**: Users can record and post voice messages instead of written text.
- **Feed**: Listen to the latest voice notes from the people you follow.
- **Likes & Comments**: Engage with voice notes by liking or commenting via voice.
- **Real-time updates**: New voice notes appear in real-time as they’re posted.
- **User Profiles**: Each user has a profile showcasing their posted voice notes.
- **Follow System**: Follow users to keep up with their latest voice notes.

## Tech Stack

- **Frontend**: Next.js – a React framework for building modern web applications.
- **Backend**: Supabase – an open-source Firebase alternative for authentication, database, and storage.
- **Database**: PostgreSQL (via Supabase) – stores user information, posts, and interactions.
- **Storage**: Supabase Storage – stores the audio files for the voice notes.
- **Authentication**: Supabase Auth – handles user registration, login, and security.
- **Styling**: Tailwind CSS – a utility-first CSS framework for fast UI development.

## Installation

### Prerequisites

- Node.js v16 or higher
- Supabase account with a project set up

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/goss.git
   cd goss
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up your environment variables by creating a .env.local - You can find these in your Supabase Dashboard:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

Your app should now be running on http://localhost:3000.
