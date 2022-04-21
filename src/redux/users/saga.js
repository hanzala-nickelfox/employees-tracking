import { Navigate } from "react-router-dom";
import { takeLatest, put } from "redux-saga/effects";
import { setUserData, setIsLoggedIn, setIsChecking, setIsUser } from "./slice";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  doc,
  setDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { toast } from "react-toastify";
import { signup as signupAction, signin as signinAction } from "./actions";
import { db } from "firebase.config";

//signup
export function* signup(action) {
  const data = action.payload;
  console.log(action.payload);
  const { email, password, name, confirmPassword } = action.payload;
  if (
    email === "" ||
    password === "" ||
    name === "" ||
    confirmPassword === ""
  ) {
    toast.error("Please fill all the fields");
  } else {
    try {
      const auth = getAuth();
      const userData = yield createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userData.user;
      yield updateProfile(auth.currentUser, { displayName: name });
      const newUser = { ...action.payload };
      delete newUser.password;
      delete newUser.confirmPassword;
      newUser.signuedUpAt = serverTimestamp();
      yield setDoc(doc(db, "users", user.uid), newUser);
      yield put(setUserData(data));
      toast.success("Signup Successful");
      Navigate("/login");
    } catch (error) {
      toast.error("Something Went Wrong. Try Again Later!");
    }
  }
}
//signin
export function* signin(action) {
  const data = action.payload;
  if (data.email === "" || data.password === "") {
    toast.error("Please fill all the fields");
  } else {
    yield put(setIsChecking(true));
    try {
      const { email, password } = action.payload;
      const logAuth = getAuth();
      const userCredentials = yield signInWithEmailAndPassword(
        logAuth,
        email,
        password
      );
      const user = userCredentials.user;
      if (!user) {
        yield put(setIsChecking(true));
        toast.error("Please Signup First");
      } else {

        const userRef = yield collection(db, "users");
        const q = yield query(
          userRef,
          where(user.uid, "==", logAuth.currentUser.uid)
        );
        const queriedUser = yield getDocs(q);
        const details = [];
        queriedUser.forEach((doc) => {
          return details.push({
            data: doc.data()
          });
        });
        const x = details.every((doc) => {
          return doc.data.role === "admin";
        });
        if (!x) {
          yield put(setIsUser(true));
        }
        yield put(setIsLoggedIn(true));
        yield put(setIsChecking(false));
        localStorage.setItem("token", user.accessToken);
        yield put(setUserData(data));
        toast.success("Welcome Back!");
      }
    } catch (error) {
      yield put(setIsChecking(true));
      toast.error("Something Went Wrong. Try Again Later!");
      console.log(error);
    }
  }
}
export default function* users() {
  yield takeLatest(signupAction.type, signup);
  yield takeLatest(signinAction.type, signin);
}
