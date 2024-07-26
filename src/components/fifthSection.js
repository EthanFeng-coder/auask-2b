import React from 'react';
import './fifthSection.css';

const FifthSection = () => {
  return (
    <section className="fifth-section">
      <h2>How much does keepSimple cost?</h2>
      <p>Free to get started, no credit card required.</p>
      <p>With our paid tiers, your costs are based on how much content you ingest - plus the usage costs of features such as audio transcription, AI model usage or PDF OCR text extraction.</p>
      <p>Usage-based pricing starts at $0.10/credit</p>
      <p>Examples:</p>
      <ul>
        <li>60min podcast, automatically transcribed, and made searchable and conversational via LLMs uses 8 credits ($0.80)</li>
        <li>5 page PDF, using OCR for text extraction, GPT-4o for entity extraction, and made RAG-ready uses 4 credits ($0.40), or without OCR, uses 2.5 credits ($0.25)</li>
      </ul>
      <p>If one of these pricing tiers doesn't fit your needs, let's talk.</p>
      <div className="pricing-container">
        <div className="pricing-card">
          <h3>Free</h3>
          <p>$0 per/month</p>
          <ul>
            <li>Ingest any content type (i.e. PDFs, MP3s, web pages)</li>
            <li>Create content feeds (i.e. RSS, Web, Notion, blob storage)</li>
            <li>Search content by text or vector similarity</li>
            <li>Filter content by metadata</li>
            <li>Create chatbot conversations over your content</li>
            <li>Configure content workflows</li>
            <li>Includes Deepgram audio transcription</li>
            <li>Includes all vector embeddings and prompt completions</li>
            <li>Supports multi-tenant apps</li>
            <li>Includes 1000 credits</li>
            <li>Includes 1GB content storage</li>
            <li>Includes 1000 content items</li>
            <li>Includes 3 feeds</li>
            <li>Includes 100 chatbot conversations</li>
            <li>Community Discord support</li>
          </ul>
          <button className="signup-button">Signup Today</button>
        </div>
        <div className="pricing-card">
          <h3>Hobby</h3>
          <p>$49 per/month + usage</p>
          <ul>
            <li>Everything in Free tier</li>
            <li>$0.10/credit usage</li>
            <li>Includes 10GB content storage</li>
            <li>Includes 10K content items</li>
            <li>Includes 10 feeds</li>
            <li>Unlimited chatbot conversations</li>
            <li>Email and community Discord support</li>
          </ul>
          <button className="signup-button">Signup Today</button>
        </div>
        <div className="pricing-card">
          <h3>Starter</h3>
          <p>$199 per/month + usage</p>
          <ul>
            <li>Everything in Hobby tier</li>
            <li>$0.09/credit usage (10% off)</li>
            <li>Includes 100GB content storage</li>
            <li>Includes 100K content items</li>
            <li>Unlimited feeds</li>
            <li>Unlimited chatbot conversations</li>
            <li>Priority email, private Slack support</li>
          </ul>
          <button className="signup-button">Signup Today</button>
        </div>
        <div className="pricing-card">
          <h3>Growth</h3>
          <p>$999 per/month + usage</p>
          <ul>
            <li>Everything in Starter tier</li>
            <li>$0.08/credit usage (20% off)</li>
            <li>Unlimited content storage</li>
            <li>Unlimited content items</li>
            <li>Unlimited feeds</li>
            <li>Unlimited chatbot conversations</li>
            <li>Priority email, private Slack support</li>
            <li>Dedicated technical contact</li>
            <li>SLA (coming soon)</li>
            <li>SOC 2 (coming soon)</li>
          </ul>
          <button className="signup-button">Signup Today</button>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
