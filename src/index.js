import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthCard from './components/AuthCard';
import AgentScreen from './components/AgentScreen';
import FbCard from './components/FbCard';
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="login" element={<AuthCard
          title="Login to Your Account"
          emailLabel="Email"
          passwordLabel="Password"
          rememberMeLabel="Remember Me"
          actionButtonText="Log In"
          additionalText="Don't have an account?"
          textUrl="Create one here."
        />} />
        <Route path="register" element={<AuthCard
          title="Create Account"
          emailLabel="Email"
          passwordLabel="Password"
          rememberMeLabel="Remember Me"
          actionButtonText="Sign Up"
          additionalText="Already have an account?"
          textUrl="Log in here."
        />} />
        <Route path="fb-login" element={<FbCard status="false" />} />
        <Route path="fb-signout" element={<FbCard status="true" />} />
        <Route path="agent" element={<AgentScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>


  </React.StrictMode>
);

reportWebVitals();
