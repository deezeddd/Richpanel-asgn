import React from 'react'
import '../App.css'

import ChatBox from './ChatBox';
import ContactDetails from './ContactDetails';

const AgentScreen = () => {
    return (
        <div className="d-flex fredoka">
            <div className='d-flex flex-row' style={{ backgroundColor: "#11469c" }}>
                <div className="d-flex flex-column flex-shrink-0" style={{ width: "4.5rem", height: "100vh" }}>
                    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                        <li className="nav-item">
                            <a href="#" className="nav-link py-3" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                                <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/atom-editor.png" alt="atom-editor" />                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link py-3 " title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                <img width="30" height="30" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/inbox.png" alt="inbox" />                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link py-3 " title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                                <img width="35" height="35" src="https://img.icons8.com/sf-regular/48/FFFFFF/group-foreground-selected.png" alt="group-foreground-selected" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="nav-link py-3 " title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/combo-chart--v1.png" alt="combo-chart--v1" />
                            </a>
                        </li>
                    </ul>
                    <div className="dropdown ">
                        <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle"> */}
                            <img style={{ borderRadius: "50px" }} className='mb-2' height="40" width="40" src="https://scontent.fbho1-3.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=810bd0&_nc_ohc=oDMhy7oX2qcAX9nmaSx&_nc_ht=scontent.fbho1-3.fna&edm=AP4hL3IEAAAA&oh=00_AfBJuVCHmCu9SSDSd7_0z_5QZ_Oyk6AXVydNhkDZAo1aMg&oe=65F56399" />

                        </a>
                        <ul className="dropdown-menu shadow" aria-labelledby="dropdownUser3">

                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            {/* <li><hr class="dropdown-divider"></li> */}
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex flex-row'>
                    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{ width: "360px" }}>
                        <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                            <svg className="bi me-2" width="30" height="24"></svg>
                            <h3 className="fs-5 fw-bold">Consversations</h3>
                        </a>
                        <div className="list-group list-group-flush border-bottom scrollarea">
                            <a href="#" className="list-group-item list-group-item-action py-3 lh-tight p-4" aria-current="true">
                                <div className="d-flex flex-row justify-content-between align-items-center mb-3 ">
                                    <div><input style={{ width: "20px", height: "20px" }} type='checkbox' className='form-check-input'></input></div>
                                    <div className='d-flex flex-column w-75 align-items-start'>
                                        <h5 className="mb-1 ">Amit RG</h5>
                                        <p className='mb-1 fw-bold'>Facebook DM</p>
                                    </div>
                                    <small className="ms-2 justify-content-end">10m</small>

                                </div>
                                <div className='d-flex flex-column align-items-start '>
                                    {/* <div className=" mb w-100 d-flex text-black"> */}
                                    <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} className=' w-100 mb-0 d-flex fw-bold'>Subject</p>
                                    <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} className='w-100 mb-0'>Hey There! I probably did one of the best</p>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-3 lh-tight p-4" aria-current="true">
                                <div className="d-flex flex-row justify-content-between align-items-center mb-3 ">
                                    <div><input style={{ width: "20px", height: "20px" }} type='checkbox' className='form-check-input'></input></div>
                                    <div className='d-flex flex-column w-75 align-items-start'>
                                        <h5 className="mb-1 ">Hiten Saxena</h5>
                                        <p className='mb-1 fw-bold'>Facebook Post</p>
                                    </div>
                                    <small className="ms-2 justify-content-end">15m</small>

                                </div>
                                <div className='d-flex flex-column align-items-start '>
                                    {/* <div className=" mb w-100 d-flex text-black"> */}
                                    <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} className=' w-100 mb-0 d-flex fw-bold'>Available in store?</p>
                                    <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} className='w-100 mb-0'>Hey There do you have any T-shirt Available in </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ borderColor: "gray" }} className='d-flex flex-row border border-1 '>
                <div className='' style={{ width: " 45vw", backgroundColor: "whitesmoke", border: "1px gray" }}>
                    <h4 style={{ border: "1px gray" }} className=' bg-white p-3 text-start'>Amit RG</h4>
                    <ChatBox />
                </div>
            </div>
            <div className='d-flex flex-row w-100' style={{ backgroundColor: "#e1e7ed" }}>
                <ContactDetails />
            </div>
        </div>
    )
}
export default AgentScreen;