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

// [SECURITY] reCAPTCHA Site Key (Please replace 'RECAPTCHA_SITE_KEY' with your actual key from Google Admin Console)
const RECAPTCHA_SITE_KEY = 'RECAPTCHA_SITE_KEY';

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);

// 取得資料庫實例 (Firestore)
const db = firebase.firestore();

// 取得認證管理實例 (Authentication)
const auth = firebase.auth();

// 取得雲端儲存實例 (Storage)
const storage = firebase.storage();

// [SECURITY] 初始化 Firebase App Check
// 注意：這需要引入 firebase-app-check.js SDK
if (typeof firebase.appCheck !== 'undefined' && RECAPTCHA_SITE_KEY !== 'RECAPTCHA_SITE_KEY') {
    const appCheck = firebase.appCheck();
    appCheck.activate(
        new firebase.appCheck.ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
        true // 是否自動刷新 token
    );
    console.log('Firebase App Check activated.');
}
