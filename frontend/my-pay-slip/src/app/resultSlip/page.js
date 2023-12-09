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
                <p class="text-sm">เริ่มงานวันที่ {employeeData.StartDate}  {employeeData.month} {employeeData.year} ระยะเวลาการทำงาน {employeeData.stage}</p>
                <p class="text-sm">00{employeeData.id} {employeeData.mrms}{employeeData.firstname} {employeeData.lastname} เลขประจำตัว {employeeData.identificationnumber} โทร {employeeData.phonenumber}</p>
                <p class="text-sm">ตำแหน่ง {employeeData.department} {employeeData.detail}</p>
              </div>
              <hr color="black" width="100%" ></hr>
        
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div>
    <h3>เงินเดือน {employeeData.salary} บาท</h3>
    <p>ยอดขาย {employeeData.circulation} บาท</p>
    <p>ค่าคอม {employeeData.Commission} % = {employeeData.CommissionAmount} บาท </p>
    <p>OT {employeeData.OTH} ชั่วโมง = {employeeData.OT} บาท</p>
  </div>

  <div>
    <p>ประกันสังคม {employeeData.SocialSecurity} % = {employeeData.SocialSecurityAmount} บาท </p>
  </div>
</div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'green', padding: '10px' }}>
  <h3 style={{ color: 'white', margin: '0' }}>รายได้รวม บาท</h3>
  <p style={{ color: 'white', margin: '0' }}>ยอดขาย บาท</p>
</div>

  
<div style={{ display: 'flex', backgroundColor: 'white', padding: '10px' }}>
  <div style={{ flex: 1, marginRight: '10px' }}>
    <p style={{ color: 'black', margin: '0' }}>ข้อความช่องที่ 1</p>
  </div>
  <div style={{ flex: 1, marginRight: '10px' }}>
    <p style={{ color: 'black', margin: '0' }}>ข้อความช่องที่ 2</p>
  </div>
  <div style={{ flex: 1 }}>
    <h3 style={{ color: 'black', margin: '0' }}>ข้อความช่องที่ 3</h3>
    <p style={{ color: 'black', margin: '0' }}>บาท/THB</p>
  </div>
</div>
<p>รายได้สะสม{employeeData.stage}   </p>
<p></p>
<p>ประกันสังคม </p>
<p></p>
<p>สะสม </p>
<p></p>
<p>ลากิจ/ลาหยุด </p>
<p></p>
<p>คงเหลือวันลา </p>
<p></p>
<p>ลาป่วย </p>
<p></p>
<p>คงเหลือวันลา</p>
<p></p>

                </div>
            </div>
            
        </>
    )
}