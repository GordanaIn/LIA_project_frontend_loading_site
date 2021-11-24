import React, {useEffect, useState} from 'react';
import {useStyles} from "./ChangePasswordStyling";
import ChangePasswordButtons from "./ChangePasswordButtons";
import UserService from "../../api/UserService";



const  ChangePasswordInputFields: React.FC<{}>=({}) =>{
    const classes = useStyles();
    const [username, setUserName] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       let updatePassword= {
           username: username,
           currentPassword: currentPassword,
           newPassword: newPassword
         };
       UserService.updatePassword(updatePassword).then(res=>alert("Updated successful")).catch(err=>console.log(err));
       setUserName("");
       setCurrentPassword("");
       setNewPassword("");
       setConfirmNewPassword("");
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <h2 className={classes.h1}>Change Password</h2>
            <div className={classes.gridContainer}>
                <label className={classes.label} htmlFor="username">UserName: </label>
                <div className={classes.textBox}>
                    <input
                        type="text"
                        placeholder="Username..."
                        name="username"
                        value={username}
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>
            </div>

            <div className={classes.gridContainer}>
                <label className={classes.label} htmlFor="currentPassword"> Current Password: </label>
                <div className={classes.textBox}>
                    <input
                        type="password"
                        placeholder="Enter current password..."
                        name="currentPassword"
                        value={currentPassword}
                        onChange={e => setCurrentPassword(e.target.value)}
                    />
                </div>
            </div>

            <div className={classes.gridContainer}>
                <label className={classes.label} htmlFor="NewPassword"> New Password: </label>
                <div className={classes.textBox}>
                    <input
                        type="password"
                        placeholder="Repeat new password..."
                        name="NewPassword"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </div>
            </div>

            <div className={classes.gridContainer}>
                <label className={classes.label} htmlFor="confirmNewPassword"> Confirm New Password: </label>
                <div className={classes.textBox}>
                    <input
                        type="password"
                        placeholder="Repeat new password..."
                        name="confirmNewPassword"
                        value={confirmNewPassword}
                        onChange={e => setConfirmNewPassword(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <ChangePasswordButtons/>
            </div>
        </form>
    );
}
export default ChangePasswordInputFields;
