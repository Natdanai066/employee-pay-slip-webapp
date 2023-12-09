"use client"
import React, { useState } from "react";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";

function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/employee")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  {employeeList.map((employee, key) => {
  return (
    
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "center", background: "#fff" }}>
        <div style={{ width: "210mm", height: "297mm", overflow: "auto" }}>
          <div style={{ width: "180mm", height: "220mm", margin: "0 auto", border: "1px solid black" }}>
            <div style={{ width: "100%", height: "20%", textAlign: "center" }}>
              <tr key={key}>
            </div>
            <div style={{ width: "100%", height: "60%", padding: "10px" }}>
              <div class="text-center">
                <h2 class="text-2xl font-bold">แก้ไขข้อมูลส่วนบุคคล</h2>
                <td className="border border-slate-300"> {employee.id}</td>
                <p class="text-sm">315 ถ.เสนานิคม 1 ลาดพร้าว ลาดพร้าว กทม 10230 โทร 02-116-0144</p>
              </div>
              <div class="my-4">
                <p class="text-sm">เริ่มงานวันที่ 1 มกราคม 2564 ระยะเวลาการทำงาน 2 ปี 8 เดือน</p>
                <p class="text-sm">ID 001 นางสาว ฐานิดา ทีปต์พิภพ เลขประจำตัว 1101499075593 โทร 086-666-9666</p>
                <p class="text-sm">ตำแหน่ง ผู้จัดการสาขา ธนาคาร SCB สาขาปากน้ำ เลขบัญชี 053-407-3402</p>
              </div>
              <div class="flex justify-between">
                <div class="flex items-center">
                  <p class="text-sm">รายได้รวม</p>
                  <p class="text-sm font-bold">
                    <span class="text-2xl">${data?.salary + data?.sales * data?.commission}</span>
                  </p>
                </div>
                <div class="flex items-center">
                  <p class="text-sm">ยอดขาย</p>
                  <p class="text-sm font-bold">
                    <span class="text-2xl">${data?.sales}</span>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}}}

export default Profile;