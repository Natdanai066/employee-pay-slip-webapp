import React from "react";
import './use.js'

function Profile() {
  return (
    <div style={{ textAlign: "center" }}>
      <img 
        src='https://th.bing.com/th/id/R.505aa080c77400c1fc41f7fb05cba20d?rik=Zg7%2bwFCRAbvc9A&pid=ImgRaw&r=0'
        alt='profile'
        width={100}
      />
      
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "center", background: "#fff" }}>
      <Profile />
      <div style={{ marginLeft: "10px", textAlign: "left" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "5px" }}>PAYSLIP/สลิปเงินเดือน</h2>
        <h2 style={{ fontSize: "20px", marginBottom: "5px" }}>บริษัทลลิต้าเวริค์ จำกัด Lalitawork Co/ltd.</h2>
        <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>315 ถ.เสนานิคม 1 ลาดพร้าว ลาดพร้าว กทม 10230 โทร 02-116-0144</h3>
        <h4 style={{ fontSize: "14px", marginBottom: "5px" }}>_____________________________________________________________________________________</h4>
        <h5 style={{ fontSize: "14px", marginBottom: "5px" }}>เริ่มงานวันที่ 1 มกราคม 2564 ระยะเวลาการทำงาน 2 ปี 8 เดือน</h5>
        <h6 style={{ fontSize: "12px", marginBottom: "5px" }}>ID 001 นางสาว ฐานิดา ทีปต์พิภพ เลขประจำตัว 1101499075593 โทร 086-666-9666</h6>
        <h7 style={{ fontSize: "12px", marginBottom: "5px" }}>ตำแหน่ง ผู้จัดการสาขา ธนาคาร SCB สาขาปากน้ำ เลขบัญชี 053-407-3402</h7>
        <h4 style={{ fontSize: "14px" }}>_____________________________________________________________________________________</h4>



        <div style={{ fontSize: "14px", margin: "0.5em 0" }}>
  <span>
    เงินเดือน
    <input
      type="number"
      placeholder="กรอกเงิน"
      style={{ marginLeft: "0.5em", padding: "0.2em" }}
    />
    บาท
  </span>
  <span style={{ marginLeft: "2em" }}>
    ประกันสังคม
    <input
      type="number1"
      placeholder="กรอก%"
      style={{ marginLeft: "0.2em", padding: "0.2em" }}
    />
    =
    <input
      type="number3"
      placeholder=""
      style={{ marginLeft: "0.5em", padding: "0.2em" }}
    />
    บาท
  </span>
</div>
<br />
<h10 style={{ fontSize: "14px", margin: "0.5em 0" }}>
  ยอดขาย
  <input
    type="number"
    placeholder="กรอก%"
    style={{ marginLeft: "0.2em", padding: "0.2em" }}
  />
  =
  <input
    type="number"
    placeholder=""
    style={{ marginLeft: "0.5em", padding: "0.2em" }}
  />
  บาท
</h10>
<br />
<h11 style={{ fontSize: "14px", margin: "0.5em 0" }}>
  ค่าคอม
  <input
    type="number"
    placeholder="กรอก%"
    style={{ marginLeft: "0.2em", padding: "0.2em" }}
  />
  % =
  <input
    type="number"
    placeholder=""
    style={{ marginLeft: "0.5em", padding: "0.2em" }}
  />
  บาท
</h11>
<h12 style={{ fontSize: "14px", margin: "0.5em 0" }}>
  <input
    type="number"
    placeholder="กรอก%"
    style={{ marginLeft: "0.2em", padding: "0.2em" }}
  />
  -
  <input
    type="number"
    placeholder=""
    style={{ marginLeft: "0.5em", padding: "0.2em" }}
  />
  บาท
</h12>

      </div>
    </div>
   
  );
}
