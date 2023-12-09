"use client"
import React, { useEffect } from "react";
import Axios from 'axios';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link'

export default function Page() {
  const [employeeList, setEmployeeList] = useState([])
  const router = useRouter()

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data)
    })
  }

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id
        })
      )
    })
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-lg p-8 w-1/2 bg-white">
        <div className="flex justify-end">
          <button type="button" className="bg-sky-300 px-4 py-2 rounded-md" onClick={() => router.push('/formSlip')}>
            เพิ่มข้อมูล
          </button>
        </div>
        <table className="border-collapse border border-slate-400 table-auto w-full">
          <thead>
            <tr>
              <th className="border border-slate-300">#</th>
              <th className="border border-slate-300">ชื่อ</th>
              <th className="border border-slate-300">นามสกุล</th>
              <th className="border border-slate-300">ตำแหน่ง</th>
              <th className="border border-slate-300">เบอร์โทร</th>
              <th className="border border-slate-300">เงินเดือน</th>
              <th className="border border-slate-300">ดำเนินการ</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee, key) => {
              return (
                <tr key={key}>
                  <td className="border border-slate-300">{employee.id}</td>
                  <td className="border border-slate-300">{employee.firstname}</td>
                  <td className="border border-slate-300">{employee.lastname}</td>
                  <td className="border border-slate-300">{employee.department}</td>
                  <td className="border border-slate-300">{employee.phonenumber}</td>
                  <td className="border border-slate-300">{employee.salary}</td>
                  <td className="border border-slate-300">
                    <Link className="bg-green-300 px-4 py-2 rounded-md ml-4" href={{ pathname: '/resultSlip', query: { empId: employee.id } }} >ดูสลิป</Link>
                    
                    <button className="bg-red-300 px-4 py-2 rounded-md ml-4" onClick={() => deleteEmployee(employee.id)}>ลบ</button>
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
