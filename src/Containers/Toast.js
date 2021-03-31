import React from 'react';
import "./css/toast.css"

let removeToast;

export default function Toast(string) {
    const toast = document.getElementById("toast");
    return{
        Toast.classList.contains("reveal") ?
        (clearTimeout(removeToast), removeToast = setTimeout(function () {
            document.getElementById("toast").classList.remove("reveal")
        }, 1000)) :
        removeToast = setTimeout(function () {
            document.getElementById("toast").classList.remove("reveal")
        }, 1000)
    Toast.classList.add("reveal"),
        toast.innerText = string

    };
}
