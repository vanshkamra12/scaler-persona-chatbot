# Scaler Persona AI Chatbot

A persona-based AI chatbot built for the Prompt Engineering assignment at Scaler Academy. It lets users converse with three Scaler/InterviewBit personalities: Anshuman Singh, Abhimanyu Saxena, and Kshitij Mishra.

## Features
- **Persona Switching**: Seamlessly switch between the three personas. The UI updates and conversation resets.
- **Custom System Prompts**: Each persona has a carefully crafted system prompt including background details, few-shot examples, Chain-of-Thought instructions, and constraints.
- **Suggestion Chips**: Quick-start questions tailored to each persona.
- **Typing Indicator**: Visual feedback when the AI is generating a response.
- **Responsive Design**: Clean, dark-mode inspired UI that works across desktop and mobile.
- **Secure**: API keys are handled securely on the backend.

## Tech Stack
- Next.js (App Router)
- React
- Vanilla CSS Modules (for styling)
- Google Gemini API (via `@google/generative-ai`)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/scaler-persona-chatbot.git
   cd scaler-persona-chatbot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   - Copy the example `.env` file:
     ```bash
     cp .env.example .env.local
     ```
   - Open `.env.local` and add your Gemini API key:
     ```env
     GOOGLE_GENERATIVE_AI_API_KEY=your_actual_api_key_here
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment
This project is configured to be easily deployed on Vercel. 
- Ensure you add the `GOOGLE_GENERATIVE_AI_API_KEY` to the environment variables in your Vercel project settings.

## Project Structure
- `/src/app/page.tsx`: Main chat interface.
- `/src/app/api/chat/route.ts`: Backend API route for handling LLM calls.
- `/src/app/globals.css` & `/src/app/page.module.css`: Styling.
- `prompts.md`: Contains the detailed system prompts and rationale.
- `reflection.md`: Reflection on prompt engineering and GIGO.
