import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import {
  login as loginHandle,
  logout as logoutHandle,
} from "../slices/authSlice";
import store from "../store";

const firebaseConfig = {
  apiKey: "AIzaSyA62Zo6WbAj1NCt1qH__TD77iUrtfBvM8s",
  authDomain: "redux-is-takip.firebaseapp.com",
  projectId: "redux-is-takip",
  storageBucket: "redux-is-takip.appspot.com",
  messagingSenderId: "32657509216",
  appId: "1:32657509216:web:f0924f8c3d2104da9e2c05",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getDatabase(app);

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("Kayıt başarılı. Giriş yapabilirsiniz!");
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};
export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => userCredential.user
    );
  } catch (error) {
    toast.error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Başarıyla çıkış yapıldı");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

// export const updateUser = async () => {
//   try {
//     const { user } = await updateCurrentUser();
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(loginHandle(user.accessToken));
  } else {
    store.dispatch(logoutHandle(user));
  }
});

export const addTask = async (data) => {
  try {
    await addDoc(collection(database, "tasks"), data);
  } catch (error) {
    toast.error(error.message);
  }
};

export default app;
