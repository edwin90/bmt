/*
  ====================================================================
  KONFIGURASI FIREBASE — KSPPS Amanah Mandiri
  ====================================================================
  File ini dipakai bersama oleh pengajuan.html dan admin.html.

  Ganti nilai-nilai di bawah ini dengan konfigurasi project Firebase
  Anda sendiri (didapat dari Firebase Console). Langkah lengkapnya ada
  di file SETUP.md pada repository ini.

  Catatan: nilai "apiKey" di bawah ini AMAN untuk publik / GitHub.
  Firebase tidak menjadikan apiKey sebagai rahasia — keamanan data
  yang sesungguhnya diatur lewat Firestore Security Rules dan
  Firebase Authentication (lihat SETUP.md, bagian "Keamanan").
  ====================================================================
*/

const firebaseConfig = {
  apiKey: "AIzaSyA2FeoRJDUnl7clYRgGqDpE2vFF5r4u3xs",
  authDomain: "bmt-am.firebaseapp.com",
  projectId: "bmt-am",
  storageBucket: "bmt-am.firebasestorage.app",
  messagingSenderId: "882126737324",
  appId: "1:882126737324:web:3f108ad52fa90cc9657409"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// auth hanya tersedia jika firebase-auth-compat.js ikut dimuat (halaman admin.html)
const auth = typeof firebase.auth === 'function' ? firebase.auth() : null;

// Nama koleksi Firestore tempat seluruh data pengajuan pembiayaan disimpan.
const PENGAJUAN_COLLECTION = "pengajuan_pembiayaan";
