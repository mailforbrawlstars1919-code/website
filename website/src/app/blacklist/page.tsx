import React, { useEffect, useState } from 'react';

interface BlacklistItem {
  user: string;
  reason: string;
  hwid: string;
}

export default function BlacklistPage() {
  const [blacklist, setBlacklist] = useState<BlacklistItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blacklist')
      .then(res => res.json())
      .then(data => {
        setBlacklist(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blacklist</h1>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Kullanıcı Adı</th>
              <th className="border px-2 py-1">HWID</th>
              <th className="border px-2 py-1">Sebep</th>
            </tr>
          </thead>
          <tbody>
            {blacklist.map((item, i) => (
              <tr key={i}>
                <td className="border px-2 py-1">{item.user}</td>
                <td className="border px-2 py-1 font-mono">{item.hwid}</td>
                <td className="border px-2 py-1">{item.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
