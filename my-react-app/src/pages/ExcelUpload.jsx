import React, { useState } from 'react';

export default function ExcelUpload() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleFileUpload = async (e) => {
    setLoading(true);
    setStatus('');
    const file = e.target.files[0];

    if (!file) {
      setStatus('No file selected.');
      setLoading(false);
      return;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const base64 = btoa(
        new Uint8Array(arrayBuffer)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );

      const res = await fetch('http://localhost:3000/uploadExcel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileData: base64 }),
      });

      const result = await res.json();
      setStatus(result.status || result.error);
    } catch (err) {
      console.error(err);
      setStatus('Failed to upload. Check console.');
    }

    setLoading(false);
  };

  return (
    <div className="p-6 border rounded shadow w-full max-w-lg mx-auto my-8">
      <h2 className="text-xl font-semibold mb-4">Institution Upload (Excel)</h2>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        disabled={loading}
        className="block mb-4"
      />
      {loading && <p className="text-blue-600">Uploading...</p>}
      {status && <p className="text-green-700">{status}</p>}
    </div>
  );
}
