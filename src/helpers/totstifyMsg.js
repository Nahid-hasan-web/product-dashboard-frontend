import { Bounce, toast } from "react-toastify";

const tostifyMsg = (msgtype , message)=>{
     const toastFunc = toast[msgtype] || toast.info;
    toastFunc(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}


export default tostifyMsg