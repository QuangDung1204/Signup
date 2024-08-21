module.exports = {
    // ... các cấu hình khác
    resolve: {
      fallback: {
        "http": require.resolve("stream-http")
      }
    }
  };