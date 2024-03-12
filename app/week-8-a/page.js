// consumer child component

import { AuthContextProvider } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  return (
    <div>
      <p>{user ? "Hihihi" : "abc"}</p>
      <p>{user && user.displayName}</p>
      {user ? (
        <button onClick={firebaseSignOut}>Sign Out</button>
      ) : (
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
}
