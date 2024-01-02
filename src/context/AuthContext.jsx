import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load users from local storage
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    // Load authenticated user from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setAuthenticatedUser(JSON.parse(storedUser));
    }

    setIsLoading(false);
  }, []);

  const AddUser = (userData) => {
    // Search for an existing user with the same email
    const existingUser = users.find((user) => user.email === userData.email);

    if (existingUser) {
      toast.error("Email already registered");
    } else {
      // Create a new user object
      const newUser = {
        id: users.length + 1,
        ...userData,
      };
      // Update the users state with the new user
      setUsers((prevUsers) => {
        const updatedUsers = [...prevUsers, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return updatedUsers;
      });
        toast.success("Signup successful");
      return newUser;
    }
  };

  const Login = (email, password) => {
    // Check if a user with the given email exists
    const user = users.find((u) => u.email === email);

    // If no user with the given email is found
    if (!user) {
      toast.error("User does not exist");
      return false;
    }

    // Check if the password matches
    if (user.password !== password) {
      toast.error("Invalid credentials");
      return false;
    }

    setAuthenticatedUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    return true;
    };
    
     const Logout = () => {
       setAuthenticatedUser(null);
       localStorage.removeItem("user");
     };

  const getUser = () => {
    return authenticatedUser;
  };

  return (
    <AuthContext.Provider
      value={{
        authenticatedUser,
        getUser,
        AddUser,
        Login,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
