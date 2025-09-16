import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Component Guard
const CheckLogin = ({ children }) => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
   
    if (!isSignedIn) {
         localStorage.removeItem("cart")
       setTimeout(() => navigate("/"), 0);
    }
  }, [isSignedIn, navigate]);

  return children;
};

export default CheckLogin;
