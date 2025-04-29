import React, { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function AuthModalContainer() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Function to open the login modal
  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  // Function to open the register modal
  const openRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  // Function to close both modals
  const closeModals = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <>
      {/* Login Modal */}
      <LoginModal
        isOpen={showLogin}
        onClose={closeModals}
        onSwitchToRegister={openRegister} // Passing the openRegister function to the modal
      />

      {/* Register Modal */}
      <RegisterModal
        isOpen={showRegister}
        onClose={closeModals}
        onSwitchToLogin={openLogin} // Passing the openLogin function to the modal
      />
    </>
  );
}

export default AuthModalContainer;
