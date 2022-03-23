import { takeLatest, put } from "redux-saga/effects";
import { signup as signupAction, signin as signinAction } from "./actions";
import { setUserData, setIsLoggedIn } from "./slice";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";

//signup
export function* signup(action) {
  const data = action.payload;
  const { email, password, name } = action.payload;
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
  } catch (error) {
    console.log(error);
  }
}
//signin
export function* signin(action) {
  try {
    const data = action.payload;
    const { email, password } = action.payload;
    const logAuth = getAuth();
    const userCredentials = yield signInWithEmailAndPassword(
      logAuth,
      email,
      password
    );
    if (userCredentials.user) {
      //logs if user exists
      console.log("success");
      yield put(setUserData(data));
      yield put(setIsLoggedIn(true));
    }
  } catch (error) {
    console.log(error);
  }
}
export default function* users() {
  yield takeLatest(signupAction.type, signup);
  yield takeLatest(signinAction.type, signin);
}
