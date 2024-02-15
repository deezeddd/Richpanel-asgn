import React from 'react'
import '../App.css'


const ContactDetails = () => {
    return (
        <div className='d-flex flex-column fredoka'>
            <div>
                <div className="card p-4 " style={{ borderRadius: '4px', width: "24.5vw" }}>

                    <div className="card-body text-center">
                        <img style={{ borderRadius: "50px" }} className='mb-2' height="50" width="50" src="https://scontent.fbho1-3.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=810bd0&_nc_ohc=oDMhy7oX2qcAX9nmaSx&_nc_ht=scontent.fbho1-3.fna&edm=AP4hL3IEAAAA&oh=00_AfBJuVCHmCu9SSDSd7_0z_5QZ_Oyk6AXVydNhkDZAo1aMg&oe=65F56399" />
                        <div className='mb-4 '>
                            <h5 className='mb-0'>Amit RG</h5>
                            <small>Offline</small>
                        </div>
                        <div className='d-flex flex-row justify-content-evenly'>
                            <button className='btn border border-1 border-secondary'> Call</button>
                            <button className='btn border border-1 border-secondary'> Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-2'>
                <div className='card p-3 text-start' style={{ borderRadius: "10px " }}>
                    <h6 className='text-start mb-3'>Customer Details</h6>
                    <div className='mb-2 d-flex flex-row justify-content-between'>
                        <span className='  fw-normal mb-2 text-secondary'>Email </span> <span className=' text-black fw-bold'> RichPanel@gmail.com</span>
                    </div>
                    <div className='mb-2 d-flex flex-row justify-content-between'>
                        <span className='  fw-normal mb-2 text-secondary'>First Name </span> <span className=' text-black fw-bold'> Amit</span>
                    </div>
                    <div className='mb-3 d-flex flex-row justify-content-between'>
                        <span className='  fw-normal mb-2 text-secondary'>Last Name </span> <span className=' text-black fw-bold'> RG</span>
                    </div>

                    <p className='fw-bold mb-0' style={{ color: "#499ff5" }}>View more details</p>

                </div>
            </div>

        </div>
    )
}

export default ContactDetails
