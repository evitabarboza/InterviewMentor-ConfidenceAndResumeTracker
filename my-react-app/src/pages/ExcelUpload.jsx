import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
        new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
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
    <div className="container d-flex justify-content-center align-items-center my-4">
      <div className="card shadow-lg border-0 p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="card-body">
          <div className="text-center mb-4">
            <i className="bi bi-upload display-4 text-primary mb-2"></i>
            <h4 className="card-title fw-bold">Upload Excel File</h4>
            <p className="text-muted mb-0">Upload your institution data in .xls or .xlsx format</p>
          </div>

          <div className="mb-4">
            <label htmlFor="excelFile" className="form-label fw-medium">Choose File</label>
            <input
              type="file"
              id="excelFile"
              accept=".xlsx, .xls"
              className="form-control form-control-lg"
              onChange={handleFileUpload}
              disabled={loading}
            />
          </div>

          {loading && (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status" />
              <p className="mt-2 text-primary">Uploading, please wait...</p>
            </div>
          )}

          {status && (
            <div className={`alert mt-3 ${status.toLowerCase().includes('fail') ? 'alert-danger' : 'alert-success'}`} role="alert">
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';

// export default function ExcelUpload() {
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState('');

//   const handleFileUpload = async (e) => {
//     setLoading(true);
//     setStatus('');
//     const file = e.target.files[0];

//     if (!file) {
//       setStatus('No file selected.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const arrayBuffer = await file.arrayBuffer();
//       const base64 = btoa(
//         new Uint8Array(arrayBuffer)
//           .reduce((data, byte) => data + String.fromCharCode(byte), '')
//       );

//       const res = await fetch('http://localhost:3000/uploadExcel', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ fileData: base64 }),
//       });

//       const result = await res.json();
//       setStatus(result.status || result.error);
//     } catch (err) {
//       console.error(err);
//       setStatus('Failed to upload. Check console.');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="p-6 border rounded shadow w-full max-w-lg mx-auto my-8">
//       <h2 className="text-xl font-semibold mb-4">Institution Upload (Excel)</h2>
//       <input
//         type="file"
//         accept=".xlsx, .xls"
//         onChange={handleFileUpload}
//         disabled={loading}
//         className="block mb-4"
//       />
//       {loading && <p className="text-blue-600">Uploading...</p>}
//       {status && <p className="text-green-700">{status}</p>}
//     </div>
//   );
// }
