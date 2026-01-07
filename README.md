# AI Component Generator

A modern web application that uses Google's Gemini AI to generate responsive, animated UI components on demand. Simply describe what you want, choose your preferred framework, and get production-ready code instantly.

## Features

✨ **AI-Powered Code Generation** - Leverage Google's Gemini 2.5 Flash model to generate custom UI components  
🎨 **Multiple Framework Support** - Generate components for:
- HTML + CSS
- HTML + Tailwind CSS
- HTML + Bootstrap
- HTML + CSS + JavaScript
- HTML + Tailwind + Bootstrap

📋 **Code Management**
- Copy generated code to clipboard with one click
- Download code as HTML file
- Live code preview in Monaco Editor
- Real-time output rendering

⚡ **Fast & Responsive** - Built with Vite for lightning-fast development and production builds  
💫 **Modern UI** - Beautiful, animated interface with smooth transitions and user feedback  

## Website Preview

![Website Screenshot]()

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor
- **Component Selection**: React Select
- **Icons**: React Icons
- **Loading State**: React Spinners
- **Notifications**: React Toastify
- **AI Model**: Google Gemini 2.5 Flash
- **PostCSS**: For advanced CSS processing

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Google Gemini API Key

## Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Ai-comp-gen
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

To get your Gemini API key:
- Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
- Create a new API key
- Copy and paste it into your `.env` file

## Project Structure

```
Ai-comp-gen/
├── src/
│   ├── components/
│   │   └── Navbar.jsx           # Navigation bar component
│   ├── pages/
│   │   ├── Home.jsx             # Main page with component generator
│   │   └── NoPage.jsx           # 404 page
│   ├── App.jsx                  # Root application component
│   ├── App.css                  # Global styles
│   ├── index.css                # Base styles
│   └── main.jsx                 # Entry point
├── public/                       # Static assets
├── .env                         # Environment variables (not in git)
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── eslint.config.js             # ESLint configuration
└── package.json                 # Project dependencies
```

## Usage

1. **Start the app** and navigate to the Home page
2. **Describe your component** - Write a detailed description of the UI component you want (e.g., "A modern card with hover effect and gradient background")
3. **Select a framework** - Choose your preferred framework from the dropdown
4. **Generate** - Click the generate button and wait for AI to create your code
5. **View & Manage**:
   - View the code in the editor
   - Preview the output in the browser
   - Copy code to clipboard
   - Download as HTML file
   - Refresh to generate different variations

## Tips for Better Results

- Be specific and detailed in your descriptions
- Include design preferences (colors, animations, spacing)
- Mention any interactive features you want
- Specify responsive behavior if important
- Include any brand guidelines or specific styling requirements

## Error Handling

The application includes error handling for:
- Invalid or missing API key
- Network errors during generation
- Empty prompt submission
- Copy/paste failures

Errors are displayed using toast notifications for a better user experience.


**Built with ❤️ using React, Vite, and Google Gemini AI**
