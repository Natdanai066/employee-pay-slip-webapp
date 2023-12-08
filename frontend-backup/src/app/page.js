"use client"
import './use.js'
import React, { useEffect } from "react";
import Axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [employeeList, setEmployeeList] = useState([])
  const router = useRouter();

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data)
    })
  }


  useEffect(() => {
    getEmployees()
  }, [])

  const viewPaySlip = (empId) => {
    router.push(`/resultSlip/${empId}`)
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-lg p-8 w-1/2">
        <div className="flex justify-end">
          <button type="button" className="bg-sky-300 px-4 py-2 rounded-md" onClick={() => router.push('/formSlip')}>
            เพิ่มข้อมูลพนักงาน
          </button>
        </div>
        <table className="border-collapse border border-slate-400 table-auto w-full">
          <thead>
            <tr>
              <th class="border border-slate-300">ตำแหน่ง</th>
              <th class="border border-slate-300">ชื่อ-นามสกุล</th>
              <th class="border border-slate-300">รหัสประจำตัว</th>
              <th class="border border-slate-300">เบอร์โทร</th>
              <th class="border border-slate-300">ดำเนินการ</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee, key) => {
              return (
                <tr key={key}>
                  <td class="border border-slate-300">{employee.id}</td>
                  <td class="border border-slate-300">{employee.firstname}</td>
                  <td class="border border-slate-300">{employee.lastname}</td>
                  <td class="border border-slate-300">{employee.department}</td>
                  <td class="border border-slate-300">{employee.phonenumber}</td>
                  <td class="border border-slate-300">
                    <button className="bg-green-300 px-4 py-2 rounded-md ml-4" onClick={viewPaySlip(employee.id)} >ดูสลิป</button>
                    <button className="bg-yellow-300 px-4 py-2 rounded-md ml-4" onClick={() => router.push('/editSlip')}>แก้ไข</button>
                    <button className="bg-red-300 px-4 py-2 rounded-md ml-4">ลบ</button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  );
}