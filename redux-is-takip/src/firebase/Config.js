import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
  collection,
  addDoc,
  getFirestore,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import {
  login as loginHandle,
  logout as logoutHandle,
} from "../slices/authSlice";
import { setEmployees, setEmployeeStatus } from "../slices/employeesSlice";
import { setProducts } from "../slices/productsSlice";
import { setTasks } from "../slices/tasksSlice";
import store from "../store";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getDatabase(app);
const db = getFirestore();

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success(
      "Kayıt başarılı. Kullanıcı ayarlar sayfasına yönlendiriliyorsunuz!"
    );
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

export const addEmployeeToFirebase = async (data) => {
  try {
    await addDoc(collection(db, "employees"), data);
    toast.success("Personel başarıyla eklendi.");
  } catch (error) {
    toast.error("Personel ekleme işlemi başarısız");
  }
};
export const updateEmployeeFromFirebase = async (data) => {
  try {
    await updateDoc(doc(db, "employees", data.id), data);
    toast.success("Güncelleme işlemei başarılı");
  } catch (error) {
    toast.error("Güncelleme işlemi başarısız");
  }
};

export const deleteEmployeeFromFirebase = async (id) => {
  try {
    await deleteDoc(doc(db, "employees", id));
    toast.success("Silme işlemi başarılı");
  } catch (error) {
    toast.error("Silme işlemi başarısız");
  }
};

export const addProductToFirebase = async (data) => {
  try {
    await addDoc(collection(db, "products"), data);
    toast.success("Ürün ekleme başarılı");
  } catch (error) {
    toast.error("Ekleme işlemi başarısız");
  }
};

export const updateProductFromFirebase = async (data) => {
  try {
    await updateDoc(doc(db, "products", data.id), data);
    toast.success("Güncelleme işlemi başarılı");
  } catch (error) {
    toast.error("Güncelleme işlemi başarısız");
  }
};

export const deleteProductsFromFirebase = async (id) => {
  try {
    await deleteDoc(doc(db, "products", id));
    toast.success("Silme işlemi başarılı");
  } catch (error) {
    toast.error("Silme işlemi başarısız");
  }
};

export const addTaskToFirebase = async (data) => {
  try {
    await addDoc(collection(db, "tasks"), data);
  } catch (error) {
    toast.error(error.message);
  }
};

export const updateTaskFromFirebase = async (data) => {
  try {
    await updateDoc(doc(db, "tasks", data.id), data);
    toast.success("Güncelleme işlemi başarılı");
  } catch (error) {
    toast.error("Güncelleme işlemi başarısız oldu.");
  }
};

export const deleteTaskFromFirebase = async (id) => {
  try {
    await deleteDoc(doc(db, "tasks", id));
    toast.success("Silme işlemi başarılı");
  } catch (error) {
    toast.error(error.message);
  }
};

export const emailVerification = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    toast.success(
      `Doğrulama maili ${auth.currentUser.email} adresine gönderildi.`
    );
  } catch (error) {
    toast.error("Doğrulama maili gönderilemedi");
  }
};

export const updateUserInfo = async (displayName, photoURL) => {
  try {
    await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
    toast.success("Kullanıcı bilgileri güncellendi");
  } catch (error) {
    toast.error(
      "Güncelleme sırasında hata ile karşılaşıldı. Lütfen daha sonra tekrar deneyin."
    );
  }
};

export const resetUserPassword = async () => {
  try {
    await sendPasswordResetEmail(auth, auth.currentUser.email);
    toast.success(
      `${auth.currentUser.email} e-posta adresine sıfırlama linki gönderildi.`
    );
  } catch (error) {
    toast.error("Kullanıcı parola resetleme gönderilemedi");
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    const userData = {
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL ? user.photoURL : "",
      phoneNumber: user.phoneNumber ? user.phoneNumber : "",
      displayName: user.displayName ? user.displayName : "",
      uid: user.uid,
    };
    store.dispatch(loginHandle(userData));

    onSnapshot(collection(db, "tasks"), (doc) => {
      // doc.docs.map((d) => {
      //   return console.log(d.data().employeeId);
      // });
      store.dispatch(
        setTasks(
          doc.docs.reduce(
            (tasks, task) => [...tasks, { ...task.data(), id: task.id }],
            []
          )
        )
      );
    });
    onSnapshot(collection(db, "employees"), (doc) => {
      store.dispatch(
        setEmployees(
          doc.docs.reduce(
            (employees, employee) => [
              ...employees,
              { ...employee.data(), id: employee.id },
            ],
            []
          )
        )
      );
    });

    onSnapshot(collection(db, "products"), (doc) => {
      store.dispatch(
        setProducts(
          doc.docs.reduce(
            (products, product) => [
              ...products,
              { ...product.data(), id: product.id },
            ],
            []
          )
        )
      );
    });
    onSnapshot(collection(db, "status"), (doc) => {
      store.dispatch(
        setEmployeeStatus(
          doc.docs.reduce(
            (employeeStatus, s) => [
              ...employeeStatus,
              { ...s.data(), id: s.id },
            ],
            []
          )
        )
      );
    });
  } else {
    store.dispatch(logoutHandle(user));
  }
});

export default app;
