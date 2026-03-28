function generateKey() {
  return Math.random().toString(36).substring(2,10).toUpperCase();
}

function createKey() {
  const key = generateKey();
  alert("Key: " + key);

  // 👉 sau này lưu lên Firestore
}