function LoadingSpinner() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid #ddd",
          borderTopColor: "#1e40af",
          borderRadius: "50%",
          margin: "auto",
          animation: "spin 1s linear infinite",
        }}
      />
      <p>กำลังโหลด...</p>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default LoadingSpinner;
