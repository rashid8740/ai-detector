# AI Content Detector

A modern Next.js application for detecting AI-generated content across text, images, and video files.

## Features

- Unified upload interface for multiple file types
- Support for Text (.txt, .pdf, .docx), Images (.jpg, .png, .webp), and Video (.mp4, .mov, .avi)
- Dark mode support
- Responsive design
- Recent scans history

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Material Symbols** - Icons

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Header component
│   ├── UploadArea.tsx  # File upload area
│   └── RecentScans.tsx # Recent scans table
└── public/             # Static assets
```

## Build for Production

```bash
npm run build
npm start
```

