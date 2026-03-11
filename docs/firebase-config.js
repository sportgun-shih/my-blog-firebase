/**
 * Firebase 設定與初始化 (雲端版本)
 */

const firebaseConfig = {
    apiKey: "AIzaSyDK5u8B-0ehVHix9Whc-b7rM-Q8LmcF5Lo",
    authDomain: "hai-teaching.firebaseapp.com",
    projectId: "hai-teaching",
    storageBucket: "hai-teaching.firebasestorage.app",
    messagingSenderId: "700712390542",
    appId: "1:700712390542:web:0118ccc9cd9497d5121edf",
    measurementId: "G-QKCYGQBKNB"
};

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);

// 取得資料庫實例 (Firestore)
const db = firebase.firestore();
