import '../App.css'
import React from 'react';

const AuthCard = ({ title, emailLabel, passwordLabel, rememberMeLabel, actionButtonText, additionalText, textUrl }) => {
    const mystyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#11469c",
        height: "100vh"
    }
    return (
        <div style={mystyle} className='fredoka'>
            <div className="card p-4" style={{ width: '25rem', borderRadius: '15px' }}>
                <div className="card-body">
                    <h5 className="card-body text-black text-center mb-3">{title}</h5>

                    <div className="mb-3">
                        <p htmlFor="email" className="text-sm-start mb-1 ">{emailLabel}</p>
                        <input type="email" className="form-control form-control-sm" id="email" />
                    </div>

                    <div className="mb-3">
                        <p htmlFor="password" className="text-sm-start mb-1">{passwordLabel}</p>
                        <input type="password" className="form-control form-control-sm" id="password" />
                    </div>

                    {/* Additional fields for sign up */}
                    {title === 'Create Account' && (
                        <div className="mb-3">
                            <p htmlFor="confirmPassword" className=" text-sm-start mb-1 ">Confirm Password</p>
                            <input type="password" className="form-control form-control-sm" id="confirmPassword" />
                        </div>
                    )}

                    <div className="form-check mb-2">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <p className="text-sm-start" htmlFor="rememberMe">{rememberMeLabel}</p>
                    </div>

                    <button type="button" style={{ backgroundColor: "#11469c" }} className="btn text-white w-100 mb-3">{actionButtonText}</button>

                    <p className="card-text small mt-2">
                        {additionalText} <span className='text-info'> <a>{textUrl}</a></span>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default AuthCard;
