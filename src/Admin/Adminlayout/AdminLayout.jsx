import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

// import './public/assets/css/style.css'

const AdminLayout = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="nav-header position-fixed">
                <a className="brand-logo" >
                    <div>
                        <img className="logo-abbr" src='data:image/png;base64,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' alt="Abbreviation" />

                        <img className="brand-title" src='data:image/png;base64,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' alt="Title" />
                    </div>
                </a>
            </div>

            <header className="header">
                <div className="header-content">
                    <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                            <div className="header-left">
                                <div className="dashboard_bar">
                                    Dashboard </div>
                            </div>
                            <ul className="navbar-nav header-right">

                                <li className="nav-item dropdown header-profile">
                                    <a className="nav-link" c role="button" data-bs-toggle="dropdown">
                                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wgARCAA8ADwDAREAAhEBAxEB/8QAGwAAAAcBAAAAAAAAAAAAAAAAAAECAwQGBwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADYAwAAEAIcAVkw0uZsYAh0BiBqRRy7HeCHAygE8rJfTrCRYorJRjoGmBCBY0Uw4hLJZayaVQyYikUeHxs3kyA4QYoSLOaX8//EADYQAAEDAwICBwYEBwAAAAAAAAIBAwQABREGEiExBxATI0FRYRQiJDJScTN1kcIgU3SBorHR/9oACAEBAAE/AESsfwr1InVrPXETSNuU8JJkkuwGvIqueu79cZ5SXrlJ3+QLgQGtD9LrqSmYN8wbBr+P4h14rFIlSWk1v0tzIt1faNiGB94xjZtDlxq02K0wrc23BhxVZVOBgIlv/vXSno6zpYJtyYYYhzYne5awO/0JK0Jc1vOh7VM5krGwvuPCsVikpKd0nardrySEVhqMlxgGhCHLO8V5LVj0jF08zOGI8+ayEVSLdjb9qvGiYto0vdsSzfWazsFHEye4zHGFrSunmNLaeZt0YVBAyR5NTyS8+tOrXQzIttYvVtje1ybURuEx/MaIcH/2nJ9vfssCfcb3cZC3TLTOx38Fd3JUGtPS5l/1WdmeeS4sWmUL8mfyTAcQax576zWerNSZbMRhXpLzbDI8zcJBT9Vqf0rWYLszAa3rDfDvbjyab3fLV36MrHdZntsSYsdp5d6hGfHss+aeVLfbL0a2n2K0usSJZ/JDA+0N9xeSmqVZ+lqBNZYS6RXoLxgaqod637nP1q2X623lrfbZzEoVHfhsuOPPC8azWvdZuaYiMx4AA7cZW5Q7X5GQTmZVPvM+9/FXKY7JcOC985cEVC8E5JUzCxZmfFqKtTLdFAp6NsC3tkCAoPDCLupIzESRI7BkGhG4NoKD4YUqDi+HpImB+o5qFOcgS2XYb6sTkiR/ZS+tU95RVfWtO3gdR2CJcouMPt5MfpLxSukd9ydru4tPlkANiMPo2RplKD3IuE5CxLFPshVLX4Wf6NRqncXbh/Vt/up9e+e/Mg/dUbjMT8zdT/BadNdjSfRBacT7g5hP91oW7S4dolssPKDYzncJX//EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQIBAT8AAf/EABQRAQAAAAAAAAAAAAAAAAAAAGD/2gAIAQMBAT8AAf/Z" width={20} alt />
                                        <div className="header-info">
                                            <span className="text-black"><strong>Peter Parkur</strong></span>
                                            <p className="fs-12 mb-0">Super Admin</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item ai-icon">
                                            <i class="bi bi-box-arrow-in-right text-danger"></i>
                                            <span className="ms-2 text-danger">Logout </span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <div className='row justify-content-between'>
                <div className='' >
                    <div className="deznav position-fixed col-3 " style={{ boxShadow: '5px 5px 10px #a4a4a4' }}>

                        <ul className="metismenu" id="menu">
                            <li>
                                <NavLink to={`/admin/dashborad`}>
                                    <i className="bi bi-speedometer" />
                                    <span className="nav-text">Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/admin/Users_detail`}>
                                    <i className="flaticon-381-user" />
                                    <span className="nav-text">Users_detail</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/admin/AdminProductshow`}>
                                    <i className="flaticon-381-internet" />
                                    <span className="nav-text">All Product</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/admin/Category`}>
                                    <i className="flaticon-381-notepad" />
                                    <span className="nav-text">Category</span>
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to={`/AdminProductshow`}>
                                    <i className="flaticon-381-notepad" />
                                    <span className="nav-text">Login</span>
                                </NavLink>
                            </li> */}
                        </ul>

                    </div>
                </div>

                <div className='col-lg-9'>
                    <Outlet />
                </div>
            </div>
        </>

    )
}

export default AdminLayout