// 🔥 CONFIG FIREBASE (dán của bạn vào)
const firebaseConfig = {
  apiKey: "AIzaSyCE_IpkrkIGfPf6zN6TEvmONU-S-pLHxh8",
  authDomain: "chiriapp-49cd9.firebaseapp.com",
  projectId: "chiriapp-49cd9",
  storageBucket: "chiriapp-49cd9.firebasestorage.app",
  messagingSenderId: "14767651614",
  appId: "1:14767651614:web:f39709a473bdf998b0e70f",
  measurementId: "G-M17QFMHMZH"
};;

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// đăng ký
function register() {
  auth.createUserWithEmailAndPassword(email.value, password.value)
    .then(() => alert("OK"))
    .catch(e => alert(e.message));
}

// login
function login() {
  auth.signInWithEmailAndPassword(email.value, password.value)
    .then(() => alert("Đăng nhập thành công"))
    .catch(e => alert(e.message));
}

// logout
function logout() {
  auth.signOut();
}

// kiểm tra login
auth.onAuthStateChanged(user => {
  if (user) {
    downloadBtn.style.display = "block";
    userBox.style.display = "block";
    auth.style.display = "none";
    userEmail.innerText = user.email;
  } else {
    downloadBtn.style.display = "none";
  }
});

// check key + tải
async function checkKeyAndDownload() {
  const key = prompt("Nhập key:");

  const res = await fetch("https://YOUR_API/check-key", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({key: key, device: "web"})
  });

  const data = await res.json();

  if (data.status === "ok") {
    window.location.href = "LINK_FILE";
  } else {
    alert("Key sai");
  }
}
