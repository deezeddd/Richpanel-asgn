import React from 'react'
import '../App.css'

import { LoginSocialFacebook } from 'reactjs-social-login'

const handleResolve = (res) => {
    if (res.error) {
        console.error('Error during login:', res.error);
    } else {
        console.log('User logged in successfully:', res);
    }
}


const FbCard = ({ status }) => {
    const mystyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#11469c",
        height: "100vh"
    }
    return (
        <div style={mystyle} className='fredoka'>
            <div className="card p-4" style={{ width: '26rem', borderRadius: '15px' }}>
                <div className="card-body">
                    <h5 className="card-body text-black text-center mb-1">Facebook Page Integration</h5>
                    {status === 'false' && (<LoginSocialFacebook
                        appId='1876162709501503'
                        autoLoad={true}
                        fields="name,email,picture"
                        onResolve={handleResolve}
                    >
                        {/* <FacebookLoginButton /> */}
                        <button type="button" style={{ backgroundColor: "#11469c" }} className="btn text-white w-100 mb-3 p-2"> Connect Page </button>
                    </LoginSocialFacebook>)}
                    {status === 'true' && (<>
                        <h5 className='card-body text-black-50 p-0 mb-5 text-center' >Integrated Page : <h5 className=' d-inline text-dark font-weight-bold'> Amazon Page </h5></h5>                        <button type="button" style={{ backgroundcolor: "#11469c" }} className="btn btn-danger w-100 mb-3 p-2"> Delete Integration </button>
                        <button type="button" style={{ backgroundColor: "#11469c" }} className="btn text-white w-100 mb-3 p-2"> Reply To Messages </button>
                    </>

                    )}

                </div>
            </div>

        </div>
    )
}

export default FbCard;