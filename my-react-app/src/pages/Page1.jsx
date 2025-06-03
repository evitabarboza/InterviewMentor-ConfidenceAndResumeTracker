import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const ResumeAnalyzer = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [score, setScore] = useState(null);
  const [positives, setPositives] = useState([]);
  const [negatives, setNegatives] = useState([]);
  const [keywords, setKeywords] = useState([]);

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!resumeFile) return alert("Please select a file.");
    setLoading(true);

    const formData = new FormData();
    formData.append("resume", resumeFile);

    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Backend data:", data);


      setScore(data.score);
      setPositives(data.positives);
      setNegatives(data.negatives);
      setKeywords(data.keywords);
      setResumeText("Resume processed successfully.");
    } catch (error) {
      console.error("Error uploading resume:", error);
      alert("Failed to analyze resume.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6">
      <div className="text-2xl font-semibold mb-2">Resume Analysis</div>
      <p className="text-gray-600 mb-6">
        Upload your resume for AI analysis. Supports PDF, DOC, and DOCX files up to 5MB.
      </p>

      {/* Upload Box */}
      <div className="bg-white border border-dashed border-gray-300 rounded-lg p-6 text-center mb-6 shadow">
        <div className="flex flex-col items-center">
          <FaUpload className="text-4xl text-gray-400 mb-4" />
          <p className="text-gray-500 mb-2">Upload your resume for AI analysis</p>
          <input
            type="file"
            accept=".pdf,.docx,.doc"
            onChange={handleFileChange}
            className="mb-4"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Choose File & Analyze"}
          </button>
        </div>
      </div>

      {/* Analysis Results */}
      {score !== null && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Resume Analysis Results</h3>
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              Score: {score}%
            </span>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-gray-800">Positive Highlights</h4>
            <ul className="list-disc list-inside text-sm text-green-700 mt-1">
              {positives.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-gray-800">Improvement Suggestions</h4>
            <ul className="list-disc list-inside text-sm text-red-600 mt-1">
              {negatives.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-gray-800">Technical Keywords</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Resume Processing Status</h4>
            <div className="bg-gray-100 p-3 mt-2 rounded text-sm">{resumeText}</div>
          </div>

          <div className="text-right mt-6">
            <button
              onClick={handleUpload}
              className="text-sm text-blue-600 hover:underline"
            >
              Re-analyze Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;
