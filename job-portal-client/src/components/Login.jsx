import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const Login = () => {
    const auth =getAuth();
    const googleProvider= new GoogleAuthProvider();
    const handleLogin=()=>{
        signInWithPopup(auth,googleProvider).then((result) => {
            const user = result.user;
            // Additional logic can go here
        }).catch((error) => {
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // Handle errors here
        });
    }

  return (
    <div className="h-screen w-full flex items-center justify-center"><button className="bg-blue px-8 py-2 text-white" onClick={handleLogin}>Login</button></div>
  )
}
export default Login