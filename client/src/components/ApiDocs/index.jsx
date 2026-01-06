import React, { useContext, useState } from "react";
import '../HeroSelection/style.css';

import { RequestContext } from "../../contexts/RequestContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ApiDocs() {
  const { apiUrl } = useContext(RequestContext);
  const { theme } = useContext(ThemeContext);
  const [selectedExample, setSelectedExample] = useState('fetch');

  const examples = {
    fetch: {
      label: 'Fetch',
      code: `fetch('${apiUrl}/heroes')
  .then(r => r.json())
  .then(data => console.log(data))`
    },
    axios: {
      label: 'Axios',
      code: `import axios from 'axios';

axios.get('${apiUrl}/heroes')
  .then(res => console.log(res.data));`
    },
    python: {
      label: 'Python',
      code: `import requests

r = requests.get('${apiUrl}/heroes')
print(r.json())`
    },
    curl: {
      label: 'cURL',
      code: `curl -X GET ${apiUrl}/heroes`
    }
  };

  return (
    <div style={{
      padding: '25px',
    }
    }>
      <h2 className={`section-heading ${theme}__title`}>Resources</h2>
      
      <p style={{textAlign: '', fontSize: '1.2em', padding: '25px 0 0 0'}}>
        <strong>Base URL: </strong>{apiUrl}
      </p>
      
        <div className="resources__section api-base-usage" style={{marginBottom: 12}}>
          <h3 className="resources__route-style">Using the Base URL</h3>
          <p className="resources__list">Use the base URL as the root for all endpoints. Replace placeholders shown below with the specific route or parameter.</p>
          
          <div style={{marginTop: 15}}>
            <p style={{margin: '0 0 12px 0', fontWeight: 600}}>Quick Examples:</p>
            <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: 12}}>
              {Object.entries(examples).map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => setSelectedExample(key)}
                  style={{
                    padding: '8px 16px',
                    border: '2px solid',
                    borderColor: selectedExample === key ? 'rgba(1, 183, 228, 0.9)' : 'rgba(255, 255, 255, .8)',
                    background: selectedExample === key ? 'rgb(1, 182, 228, .6)' : 'transparent',
                    color: selectedExample === key ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255, .8)',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            
            <pre style={{background: '#0b0b0b', color: '#f5f5f5', padding: '12px', borderRadius: 4, overflowX: 'auto'}}>
  {examples[selectedExample].code}
            </pre>
          </div>
        </div>
      
      <section className="resources__section">
        <h3 className="resources__route-style">/heroes</h3>
        <h3 className="resources__route-style">/heroes/:heroName</h3>
        <ul className="resources__list">
          <li><strong>Description:</strong> Retrieves information for all available heroes in JSON. The "heroName" tag retrieves details for only the specified hero.</li>
          <li className='api-url'><strong>URL:</strong> {apiUrl}/heroes</li>
          <li><strong>Method:</strong> GET</li>
        </ul>
      </section>
      
      <section className="resources__section">
        <h3 className="resources__route-style">/type/:type</h3>
        <ul className="resources__list">
          <li><strong>Description:</strong> Retrieves information for all heroes of the selected type.</li>
          <li><span><strong>Options:</strong> tank, damage, support</span></li>
          <li className='api-url'><strong>URL:</strong> {apiUrl}/type/:type</li>
          <li><strong>Method:</strong> GET</li>
        </ul>
      </section>

      <section className="resources__section">
        <h3 className="resources__route-style">/archetype</h3>
        <h3 className="resources__route-style">/archetype/:archetypeName</h3>
        <ul className="resources__list">
          <li>
            <span><strong>Description:</strong> The "/archetype" route lists all available hero archetypes. The "archetypeName" tag retrieves all heroes of the selected archetype.</span>
            <br/>
          </li>

          <li><span><strong>Options:</strong></span>
            <ul>
              <li><strong>Tank:</strong> Anchor, Initiator, First Responder, Damage Heavy</li>
              <li><strong>Damage: </strong> Anchor, Flanker, Sniper, Scrapper, Specialist</li>
              <li><strong>Suppport: </strong>Main Healer, Pocket Healer, Utility</li>
            </ul>
          </li>
          
          <li className='api-url'>
            <strong>URL:</strong> {apiUrl}/archetype/:archetypeName
          </li>
          <li><strong>Method:</strong> GET</li>
        </ul>
      </section>
    </div>
  );
}
