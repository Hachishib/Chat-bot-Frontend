import type { ChatResponse } from '../types';

// Vite requires 'VITE_' prefix for environment variables
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const chatService = {
  /**
   * Sends a user message to the backend and returns the AI's RAG-based response.
   */
  async sendMessage(message: string): Promise<ChatResponse> {
    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Chat Service Error:', error);
      throw error;
    }
  },
};