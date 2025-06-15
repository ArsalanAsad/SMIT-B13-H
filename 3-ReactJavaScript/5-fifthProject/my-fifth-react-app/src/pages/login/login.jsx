import {Form, Input, Button, Row, Col } from "antd";
import "./login.css";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from  "../../lib/firebase";

const login = () => {
    const navigate = useNavigate ();
    const onFininsh = async ({email, password}) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("userId", res.user.uid);
            navigate("/dashboard")
        } catch (err) {
            console.log(err);
        }
    };
}