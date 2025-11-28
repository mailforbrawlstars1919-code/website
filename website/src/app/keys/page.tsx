import React, { useEffect, useState } from 'react';

interface Key {
  key: string;
  endingTime: string;
  description: string;
}

export default function KeysPage() {
  const [keys, setKeys] = useState<Key[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/keys')
      .then(res => res.json())
      .then(data => {
        setKeys(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Key Listesi</h1>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Key</th>
              <th className="border px-2 py-1">Bitiş Tarihi</th>
              <th className="border px-2 py-1">Açıklama</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((k, i) => (
              <tr key={i}>
                <td className="border px-2 py-1 font-mono">{k.key}</td>
                <td className="border px-2 py-1">{new Date(k.endingTime).toLocaleString('tr-TR')}</td>
                <td className="border px-2 py-1">{k.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
