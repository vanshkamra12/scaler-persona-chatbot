'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Sparkles, MessageSquare } from 'lucide-react';
import styles from './page.module.css';

type Persona = 'anshuman' | 'abhimanyu' | 'kshitij';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const PERSONAS = {
  anshuman: {
    id: 'anshuman',
    name: 'Anshuman Singh',
    role: 'Co-founder, Scaler',
    initials: 'AS',
    description: 'Technical, first-principles thinking, DSA focus. Expect Socratic questions.',
    suggestions: [
      'How do I optimize a recursive Fibonacci function?',
      "I'm struggling to understand pointers in C++.",
      'Why is system design important for freshers?'
    ]
  },
  abhimanyu: {
    id: 'abhimanyu',
    name: 'Abhimanyu Saxena',
    role: 'Co-founder, Scaler',
    initials: 'AB',
    description: 'Pragmatic, backend engineering, product architecture & scaling.',
    suggestions: [
      'Should I learn microservices or stick to monoliths?',
      'How do I get better at backend development?',
      'Is it worth learning Docker?'
    ]
  },
  kshitij: {
    id: 'kshitij',
    name: 'Kshitij Mishra',
    role: 'Engineering Leader',
    initials: 'KM',
    description: 'Energetic, supportive, Java & backend mentor.',
    suggestions: [
      "I keep getting a NullPointerException and I'm frustrated.",
      'How do I stay motivated when learning complex system design?',
      "What's the best way to learn Java Streams?"
    ]
  }
};

export default function ChatPage() {
  const [activePersona, setActivePersona] = useState<Persona>('anshuman');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handlePersonaSwitch = (persona: Persona) => {
    if (activePersona !== persona) {
      setActivePersona(persona);
      setMessages([]);
      setError(null);
      inputRef.current?.focus();
    }
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          persona: activePersona
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.result
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching the response.');
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  const currentPersona = PERSONAS[activePersona];

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.header}>
          <h1>Scaler AI Mentors</h1>
        </div>
        
        <div className={styles.personaList}>
          {(Object.keys(PERSONAS) as Persona[]).map((key) => {
            const persona = PERSONAS[key];
            return (
              <button
                key={key}
                onClick={() => handlePersonaSwitch(key)}
                className={`${styles.personaButton} ${activePersona === key ? styles.active : ''}`}
              >
                <div className={styles.avatar}>{persona.initials}</div>
                <div className={styles.personaDetails}>
                  <span className={styles.personaName}>{persona.name}</span>
                  <span className={styles.personaRole}>{persona.role}</span>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.chatHeader}>
          <div className={styles.chatHeaderTitle}>
            <div className={styles.statusDot}></div>
            Chatting with {currentPersona.name}
          </div>
        </div>

        <div className={styles.chatArea}>
          {messages.length === 0 ? (
            <div className={`${styles.welcomeScreen} ${styles['animate-fade-in']}`}>
              <div className={styles.welcomeIcon}>
                <Sparkles size={32} />
              </div>
              <h2>Hi, I'm {currentPersona.name}</h2>
              <p>{currentPersona.description}</p>
              
              <div className={styles.suggestionChips}>
                {currentPersona.suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    className={styles.chip}
                    onClick={() => handleSend(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className={`${styles.message} ${styles[msg.role]} ${styles['animate-fade-in']}`}>
                <div className={styles.messageAvatar}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={styles.messageContent}>
                  {msg.content}
                </div>
              </div>
            ))
          )}

          {isLoading && (
            <div className={`${styles.message} ${styles.ai}`}>
              <div className={styles.messageAvatar}>
                <Bot size={20} />
              </div>
              <div className={styles.messageContent}>
                <div className={styles.typingIndicator}>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.inputArea}>
          <div className={styles.inputContainer}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Message ${currentPersona.name}...`}
              className={styles.input}
              disabled={isLoading}
            />
            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim() || isLoading}
              className={styles.sendButton}
            >
              <Send size={18} />
            </button>
          </div>
          {error && <div className={styles.error}>{error}</div>}
        </div>
      </main>
    </div>
  );
}
