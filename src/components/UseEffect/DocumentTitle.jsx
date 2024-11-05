import React, { useEffect, useState } from "react";

export const DocumentTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador ${count}`;
  }, [count]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Document Title Updater</h2>
      <p className="text-lg mb-4">Contador: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Incrementar
      </button>
    </div>
  );
};

export default DocumentTitle;
