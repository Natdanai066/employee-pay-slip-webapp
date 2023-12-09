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
                    <p>บริษัท ลลิต้าเวิร์คจำกัด LaLitawork Co.Ltd,</p>
                    <p>315 ถ.เสนานิคม 1 ลาดพร้าว ลาดพร้าว กทม 10230 โทร 02-116-0144</p>
                    <hr color="black" width="100%" ></hr>
                    <div class="my-4">
                <p class="text-sm">เริ่มงานวันที่ {employeeData.StartDate}  {employeeData.month} {employeeData.year} ระยะเวลาการทำงาน 2 ปี 8 เดือน</p>
                <p class="text-sm">00{employeeData.id} {employeeData.mrms}{employeeData.firstname} {employeeData.lastname} เลขประจำตัว {employeeData.identificationnumber} โทร {employeeData.phonenumber}</p>
                <p class="text-sm">ตำแหน่ง {employeeData.department} {employeeData.detail}</p>
              </div>
              <hr color="black" width="100%" ></hr>
        
                    <h3>เงินเดือน {employeeData.salary} บาท</h3>
                    <p>ยอดขาย {employeeData.circulation}บาท</p>
                    <p>ค่าคอม {employeeData.Commission} % = บาท </p>
                    <p>OT {employeeData.OTH}  ชั่วโมง = {employeeData.OT}  บาท</p>
                    
                    <p> ประกันสังคม {employeeData.SocialSecurity} % =          บาท </p>

                    

                </div>
            </div>
            
        </>
    )
}