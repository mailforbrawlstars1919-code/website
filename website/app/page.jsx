"use client";

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [keys, setKeys] = useState([]);
  const [blacklist, setBlacklist] = useState([]);
  const [version, setVersion] = useState(null);

  useEffect(() => {
    fetch('/api/keys')
      .then(res => res.json())
      .then(setKeys);
    fetch('/api/blacklist')
      .then(res => res.json())
      .then(setBlacklist);
    fetch('/api/version')
      .then(res => res.json())
      .then(setVersion);
  }, []);

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h1>Key List</h1>
        {version && (
          <span style={{ fontSize: 16, color: '#aaa' }}>
            Version: {version.version} ({version.date})
          </span>
        )}
      </div>
      <table border="1" cellPadding="8" style={{ width: '100%', marginBottom: 40 }}>
        <thead>
          <tr>
            <th>Key</th>
            <th>Ending Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((k, i) => (
            <tr key={i}>
              <td>{k.key}</td>
              <td>{new Date(k.endingTime).toLocaleDateString('tr-TR')}</td>
              <td>{k.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Blacklist</h1>
      <table border="1" cellPadding="8" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Username/HWID</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {blacklist.map((b, i) => (
            <tr key={i}>
              <td>{b.username || b.hwid}</td>
              <td>{b.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
