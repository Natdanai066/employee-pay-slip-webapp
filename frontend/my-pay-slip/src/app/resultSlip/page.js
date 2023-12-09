"use client"

import React, { useState, useEffect } from "react"
import Axios from 'axios';
import { useSearchParams } from "next/navigation"

export default function ResultSlipPage() {
    const searchParams = useSearchParams()
    const empIdParams = searchParams.get("empId");
    const [employeeData, setEmployeeData] = useState([])

    const getEmployeeById = () => {
        Axios.get(`http://localhost:3001/employees/${empIdParams}`).then((response) => {
            console.log(response.data[0]);
            setEmployeeData(response.data[0])
        })
    }
    useEffect(() => {
        getEmployeeById()
    }, []);
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="relative shadow-lg p-8 w-[595px] h-[842px] text-center bg-white">
                    <div className="flex justify-center">
                        <img
                            src='https://th.bing.com/th/id/R.505aa080c77400c1fc41f7fb05cba20d?rik=Zg7%2bwFCRAbvc9A&pid=ImgRaw&r=0'
                            alt='profile'
                            width={120}
                        />
                    </div>
                    <h1 className="text-2xl">Payslip/สลิปเงินเดือน</h1>
                    <h3>ชื่อ {employeeData.firstname} นามสกุล {employeeData.lastname}</h3>
                    <h3>ตำแหน่ง {employeeData.department}</h3>
                    <h3>เงินเดือน {employeeData.salary} บาท</h3>
                    

                </div>
            </div>
        </>
    )
}