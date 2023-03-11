import {
  auth,
  emailVerification,
  resetUserPassword,
  updateUserInfo,
} from "../firebase/Config";
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import blankProfile from "../images/blankProfile.jpg";
import { BsFillPatchCheckFill, BsFillPatchMinusFill } from "react-icons/bs";
import { login } from "../slices/authSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";
const UserSettings = () => {
  const { user } = useSelector((state) => state.auth);
  const [avatar, setAvatar] = useState(user.photoURL);
  const dispatch = useDispatch();
  const handleVerifiedEmail = async () => {
    await emailVerification();
  };
  const handleResetPassword = async () => {
    if (user.emailVerified) {
      await resetUserPassword();
    } else {
      toast.error("Öncelikle mail adresinizi doğrulamanız gerekiyor!");
    }
  };
  return (
    <>
      {user.emailVerified ? null : (
        <div className="bg-red-100 text-red-600 p-4 rounded-lg flex flex-col justify-center items-center gap-2 mb-3">
          <div>E-posta adresi doğrulanmadı</div>
          <div>
            <button
              onClick={() => handleVerifiedEmail()}
              className="text-blue-500 bg-blue-100 px-4 rounded-lg p-2 hover:bg-blue-400 hover:text-blue-50 ease-in-out duration-500"
            >
              Doğrula
            </button>
          </div>
        </div>
      )}
      <div className="flex gap-4 xl:flex-row lg:flex-row sm:flex-col xs:flex-col">
        <div className="px-2 xl:w-1/2 lg:w-1/3 xs:w-full">
          <img
            className="rounded-lg shadow-lg"
            src={avatar ? avatar : blankProfile}
            alt={avatar ? avatar : blankProfile}
          />
        </div>
        <div className="w-full shadow-lg p-4">
          <Formik
            initialValues={user}
            onSubmit={async (values, { setSubmitting }) => {
              await updateUserInfo(values.displayName, values.photoURL);
              dispatch(
                login({
                  email: auth.currentUser.email,
                  emailVerified: auth.currentUser.emailVerified,
                  photoURL: auth.currentUser.photoURL
                    ? auth.currentUser.photoURL
                    : "",
                  phoneNumber: auth.currentUser.phoneNumber
                    ? auth.currentUser.phoneNumber
                    : "",
                  displayName: auth.currentUser.displayName
                    ? auth.currentUser.displayName
                    : "",
                  uid: auth.currentUser.uid,
                })
              );
              setAvatar(values.photoURL);
              setSubmitting(false);
            }}
          >
            {({ values, isSubmitting, setFieldValue }) => {
              return (
                <Form>
                  <div className="flex gap-2 xs:flex-col">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="mb-3">
                        <p className="text-blue-400">Kullanıcı ID</p>
                        <p className="p-2 border rounded-lg bg-gray-100">
                          {values.uid}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="displayName" className="text-blue-400">
                          Kullanıcı adı
                        </label>
                        <Field
                          type="text"
                          name="displayName"
                          className="p-2 border rounded-lg w-full placeholder:text-gray-400 placeholder:italic placeholder:text-sm"
                          id="displayName"
                          placeholder="Kullanıcı adı"
                          value={values.displayName}
                          onChange={(event) =>
                            setFieldValue("displayName", event.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="text-blue-400">
                          E-Posta adresi
                        </label>
                        <Field
                          type="text"
                          className="p-2 border rounded-lg w-full placeholder:text-gray-400 placeholder:italic placeholder:text-sm"
                          id="email"
                          placeholder="E-posta adresi"
                          value={values.email}
                          onChange={(event) =>
                            setFieldValue("email", event.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="photoURL" className="text-blue-400">
                          Profil Fotoğrafı URL
                        </label>
                        <Field
                          type="text"
                          name="photoURL"
                          className="p-2 border rounded-lg w-full placeholder:text-gray-400 placeholder:italic placeholder:text-sm"
                          id="photoURL"
                          placeholder="http://example.com/example.jpg"
                          value={values.photoURL}
                          onChange={(event) =>
                            setFieldValue("photoURL", event.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="mb-3 p-2 w-1/2 text-gray-400 xs:w-full">
                      <p className="flex items-center gap-2 rounded-lg shadow-md p-4">
                        Kullanıcı adı:
                        {values.displayName ? (
                          <BsFillPatchCheckFill className="text-green-500" />
                        ) : (
                          <BsFillPatchMinusFill className="text-red-500" />
                        )}
                      </p>{" "}
                      <p className="flex items-center gap-2 rounded-lg shadow-md p-4">
                        E-posta:
                        {values.email ? (
                          <BsFillPatchCheckFill className="text-green-500" />
                        ) : (
                          <BsFillPatchMinusFill className="text-red-500" />
                        )}
                      </p>{" "}
                      <p className="flex items-center gap-2 rounded-lg shadow-md p-4">
                        E-posta Doğrulama{" "}
                        {values.emailVerified ? (
                          <BsFillPatchCheckFill className="text-green-500" />
                        ) : (
                          <BsFillPatchMinusFill className="text-red-500" />
                        )}
                      </p>
                      <p className="flex items-center gap-2 rounded-lg shadow-md p-4">
                        Profil Fotoğrafı:{" "}
                        {values.photoURL ? (
                          <BsFillPatchCheckFill className="text-green-500" />
                        ) : (
                          <BsFillPatchMinusFill className="text-red-500" />
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="p-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-400 text-white rounded-lg hover:from-indigo-400 hover:to-blue-400"
                    >
                      Değişiklikleri Kaydet
                    </button>

                    <button
                      type="button"
                      onClick={() => handleResetPassword()}
                      className="p-2 px-4 bg-gradient-to-r from-red-500 to-red-800 text-white rounded-lg hover:from-red-800 hover:to-red-400"
                    >
                      Parola Sıfırlama
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
