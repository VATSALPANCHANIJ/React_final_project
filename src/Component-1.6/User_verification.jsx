import React from 'react'

function User_verification() {
    let checkUserLogin = JSON.parse(localStorage.getItem('checkUserLogin'))
    console.log("done");
    return checkUserLogin;
}

export default User_verification;