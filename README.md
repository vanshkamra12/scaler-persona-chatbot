<div align="center">
  <h1>✨ Scaler Persona-Based AI Chatbot</h1>
  <p><i>A deeply context-aware, highly structured AI mentoring platform.</i></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Groq API](https://img.shields.io/badge/Groq_API-F55036?style=for-the-badge&logo=groq&logoColor=white)](https://groq.com/)
  [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
</div>

<br />

Welcome to **Assignment 01**! This application allows users to experience real, context-driven conversations with three prominent Scaler personalities: **Anshuman Singh**, **Abhimanyu Saxena**, and **Kshitij Mishra**. 

By utilizing rigorous system prompt engineering (including Few-Shot Learning, Chain-of-Thought reasoning, and strict behavioral constraints), the Groq API effortlessly embodies their unique mentoring styles, values, and teaching paradigms.

---

## 📸 Screenshots

<div align="center">
  <table>
    <tr>
      <td><img src="./screenshots/anshuman.png" alt="Anshuman Persona" width="400"/></td>
      <td><img src="./screenshots/abhimanyu.png" alt="Abhimanyu Persona" width="400"/></td>
    </tr>
    <tr>
      <td colspan="2" align="center"><img src="./screenshots/kshitij.png" alt="Kshitij Persona" width="400"/></td>
    </tr>
  </table>
</div>

---

## 🌟 Key Features

* 🎭 **Dynamic Persona Switching**: Seamlessly toggle between three distinct educators. The conversation resets and suggestion chips adapt instantly upon switching.
* 🧠 **Robust Prompt Architecture**: Powered by advanced prompt engineering embedded directly in the API route, preventing prompt-injection and guaranteeing hyper-realistic responses.
* 🎨 **Premium UI/UX**: Built with purely Vanilla CSS modules—featuring glassmorphism, fluid micro-animations, a responsive layout, and an active typing indicator.
* 🔒 **Secure Execution**: API keys are securely stored on the server-side (`/api/chat`), ensuring absolute safety from frontend exposure.
* ⚡ **Zero-Config Deployment**: Engineered using the Next.js App Router to automatically deploy the frontend and backend in one single, frictionless Vercel deployment.

---

## 🛠️ Technology Stack

| Area | Technology | Reason for Choice |
| :--- | :--- | :--- |
| **Frontend** | React (Next.js) | Chosen for its robust App Router architecture and React state management. |
| **Backend** | Next.js API Routes | Serves as a secure, serverless backend to keep the API key completely hidden. |
| **Styling** | Vanilla CSS Modules | Adheres strictly to the requirement for raw CSS, achieving premium aesthetics without Tailwind. |
| **AI Integration** | `groq-sdk` | The official Node SDK for connecting to the incredibly fast Groq `llama-3.1-8b` model. |

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18 or higher)
- A valid Groq API Key

### Installation

1. **Clone the repository** 
   ```bash
   git clone https://github.com/vanshkamra12/scaler-persona-chatbot.git
   cd scaler-persona-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Rename `.env.example` to `.env.local` (or just `.env`) and add your API key:
   ```env
   GROQ_API_KEY=your_actual_api_key_here
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   *Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.*

---

## 🌐 Deployment

This application is optimized for Vercel. 

1. Push your code to a public GitHub repository.
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your newly created repository.
4. Under **Environment Variables**, add `GROQ_API_KEY` with your working Groq key.
5. Click **Deploy**.

> **Live Demo:** [Click Here to View Live Project](https://scaler-persona-chatbot-bice.vercel.app/)

---

## 📂 Documentation Deliverables

As per the assignment requirements, the following documentation files are included in the root directory:
- 📝 `prompts.md`: Contains the thoroughly structured system prompts for all 3 personas, including Few-Shot examples and Constraints.
- 💡 `reflection.md`: A ~350-word reflection dissecting the *Garbage In, Garbage Out* (GIGO) principle in prompt engineering.
- 🔑 `.env.example`: Safe template file demonstrating the necessary environment variables.
