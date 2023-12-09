"use client"
import React, { useState } from "react";
import Axios from "axios";

function SignUp() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    department: '',
    salary: 0,
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value]});
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(values);

    // เพิ่มโค้ด Axios.post เพื่อส่งข้อมูลไปยัง API
    Axios.post('http://localhost:3001/insert', values)
      .then((res) => console.log("Registered Successfully!!"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="h-screen flex justify-center items-center">
                <div className="relative shadow-lg p-8 w-[595px] h-[842px] text-center bg-white">
                    <div className="flex justify-center"></div>
    <div className="d-flex justify-con
    tent-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25 text-center mx-auto">
        <h2 className="text-2xl">กรอกข้อมูล</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="mrms"><strong>คำนำหน้า</strong></label>
            <input type="text" placeholder="ใส่คำนำหน้า" name="mrms" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="firstname"><strong>ชื่อ</strong></label>
            <input type="text" placeholder="ใส่ชื่อ" name="firstname" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname"><strong>นามสกุล</strong></label>
            <input type="text" placeholder="ใส่นามสกุล" name="lastname" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="department"><strong>ตำแหน่ง</strong></label>
            <input type="text" placeholder="ใส่ตำแหน่ง" name="department" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="phonenumber"><strong>เบอร์โทร</strong></label>
            <input type="text" placeholder="ใส่เบอร์" name="phonenumber" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="salary"><strong>เงินเดือน</strong></label>
            <input type="text" placeholder="ใส่เงินเดือน" name="salary" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="StartDate"><strong>วันที่เริ่มทำงาน</strong></label>
            <input type="text" placeholder="วันที่เริ่มทำงาน" name="StartDate" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="month"><strong>เดือน</strong></label>
            <input type="text" placeholder="ใส่เดือน" name="month" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="year"><strong>ปี</strong></label>
            <input type="text" placeholder="ใส่ปี" name="year" className="form-control rounded-0" onChange={handleChange} />
          </div>
          
          <div className="mb-3">
            <label htmlFor="identificationnumber"><strong>รหัสประจำตัว</strong></label>
            <input type="text" placeholder="ใส่รหัสประจำตัว" name="identificationnumber" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="stage"><strong>ระยะเวลาการทำงาน</strong></label>
            <input type="text" placeholder="ใส่ระยะเวลาการทำงาน" name="stage" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <button className="bg-green-300 px-4 py-2 rounded-md ml-4" type="submit"btn btn-success w-100 rounded-e>บันทึก</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default SignUp;
