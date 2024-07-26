import React from 'react';
import './thirdSection.css';

const ThirdSection = () => {
  return (
    <section className="third-section">
      <h2 className="section-title">What can I ingest?</h2>
      <p className="section-description">
        Ingest from <span className="highlight">any data source</span> such as: Web sites, cloud storage, SharePoint, podcasts, Jira, Notion, YouTube, email or Slack
      </p>
      <p className="section-description">
        Ingest <span className="highlight">any unstructured data format</span> such as: documents, audio, video, or images
      </p>
      <div className="diagram-container">
        <div className="data-source">
          <p>Documents</p>
          <p>Email</p>
          <p>Videos</p>
          <p>Podcasts</p>
          <p>Social Media Posts</p>
          <p>Web Pages</p>
          <p>Channels</p>
          <p>APIs</p>
        </div>
        <div className="data-ingestion">
          <p>Data Ingestion</p>
        </div>
        <div className="semantic-layer">
          <p>Metadata Indexing</p>
          <p>Data Preparation</p>
          <p>Context Sanitization</p>
          <p>Knowledge Extraction</p>
          <p>Data Enrichment</p>
        </div>
        <div className="graphql-api">
          <p>GraphQL API</p>
        </div>
        <div className="applications">
          <p>Knowledge Retrieval Apps</p>
          <p>Smart Alerts</p>
          <p>Chatbots</p>
          <p>Intelligent Agents</p>
          <p>Data Integrations</p>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
