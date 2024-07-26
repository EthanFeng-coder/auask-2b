import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './firstSection.css';


const FirstSection = () => {
  const codeString = `
from keepSimple import KS
from keepSimple_api import *

await keepSimple.client.ingest_uri(
  uri="https://www.keepSimple.com"
)

response = await keepSimple.client.prompt_conversation(
  prompt="How can keepSimple accelerate my Generative AI app development?"
)

message = response.prompt_conversation.message.message

print(message)
`;

  return (
    <section className="main-section">
      <div className="header-container">
        <h1 className="main-title">Bring knowledge to your <span className="highlight-text">AI apps</span></h1>
        <p className="subtitle">Integrate your data with LLMs in minutes, not weeks</p>
      </div>
    <div className='first-section-main-content'>
      <div className="code-container">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="code-block">
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className="description-container">
      <div class="firstSection-tools">
    <div class="firstSection-circle">
      <span class="firstSection-red firstSection-box"></span>
    </div>
    <div class="firstSection-circle">
      <span class="firstSection-yellow firstSection-box"></span>
    </div>
    <div class="firstSection-circle">
      <span class="firstSection-green firstSection-box"></span>
    </div>
  </div>
        <p>
        Keep Simple can accelerate your Generative AI app development by providing an API-first platform that offers intelligent text extraction, vector-based search, and RAG conversations, along with audio and video transcription support. It also automatically builds a knowledge keepSimple from ingested content, and offers entity extraction and enrichment. Additionally, keepSimple offers a free tier with full access to its API features, and usage-based pricing for higher quota limits and additional features.
        </p>
      </div>
      </div>
    </section>
  );
};

export default FirstSection;
