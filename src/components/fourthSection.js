import React from 'react';
import './fourthSection.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FourthSection = () => {
  const codeString =`from graphlit import Graphlit
from graphlit_api import *

input = FeedInput(
  name="f{account-name}: {container-name}",
  type=FeedTypes.SITE,
  site=SiteFeedPropertiesInput(
    type=FeedServiceTypes.AZURE_BLOB,
    isRecursive=True,
    azureBlob=AzureBlobFeedPropertiesInput(
      accountName="{account-name}",
      containerName="{container-name}",
      storageAccessKey="{storage-key}",
      prefix="{prefix}"
    )
  ),
  workflow=EntityReferenceInput(
    id="{workflow-id}"
  )
)

response = await graphlit.client.create_feed(input)`
  return (
    <section className="fourth-section">
      <div className="button-container">
        <button className="action-button">Have Questions?</button>
        <button className="action-button">See Pricing</button>
        <button className="action-button">Read Graphlit Blog</button>
      </div>
      <div className="content-container">
        <div className="text-content">
          <h3 className="small-title">AUTOMATED ETL FOR LLMS</h3>
          <h1 className="main-title">Unstructured data ingestion</h1>
          <ul className="features-list">
            <li>Data feeds for continual ingestion</li>
            <li>Extract text and tables from documents and images with OCR and LLMs</li>
            <li>Configure automated content workflows</li>
            <li>Extract metadata, named entities and structured data from your content</li>
            <li>Web scraping and screenshots</li>
            <li>Enrich data with external APIs, such as Wikipedia and Crunchbase</li>
          </ul>
        </div>
        <div className="code-container">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="code-block">
          {codeString}
        </SyntaxHighlighter>
      </div>
      </div>
    </section>
  );
};

export default FourthSection;
