
import { headers } from "../../constants"
import { IGET, IPOST } from "./http.types";

const api_address = process.env.REACT_APP_API_ADDRESS_DEV;
// const api_address = "https://surret-admin.herokuapp.com";

export const GET: IGET = async (endpoint, signal) => {
    try {
        const res = await fetch(api_address + endpoint, {
            method: "GET",
            signal,
            headers: headers.GET,
        })
        return res.json();
    } catch (err: any) {
        return Promise.reject({
            message: err.message,
            success: false,
            data: null,
        })
    }
};

// post
export const POST: IPOST = async (endpoint, data, signal) => {
    try {
        const res = await fetch(api_address + endpoint, {
            method: "POST",
            signal,
            headers: headers.POST,
            body: JSON.stringify(data),
        })
        return res.json();
    } catch (err: any) {
        return Promise.reject({
            message: err.message,
            success: false,
            data: null,
        })
    }
};


// get
export const PROTECTED_GET: IGET = async (endpoint, signal) => {
    try {
        const res = await fetch(api_address + endpoint, {
            method: "GET",
            signal,
            headers: headers.PROTECTED.GET,
        })
        return res.json();
    } catch (err: any) {
        return Promise.reject({
            message: err.message,
            success: false,
            data: null,
        })
    }
};
// post
export const PROTECTED_POST: IPOST = async (endpoint, data, signal) => {
    try {
        const res = await fetch(api_address + endpoint, {
            method: "POST",
            signal,
            headers: headers.PROTECTED.POST,
            body: JSON.stringify(data),
        })
        return res.json();
    } catch (err: any) {
        return Promise.reject({
            message: err.message,
            success: false,
            data: null,
        })
    }
};

export const PROTECTED_POST_FORMDATA: IPOST = async (endpoint, data, signal) => {
    try {
        const res = await fetch(api_address + endpoint, {
            method: "POST",
            signal,
            headers: headers.PROTECTED.POST_FORMDATA,
            body: data as any,
        })
        return res.json();
    } catch (err: any) {
        return Promise.reject({
            message: err.message,
            success: false,
            data: null,
        })
    }
};
