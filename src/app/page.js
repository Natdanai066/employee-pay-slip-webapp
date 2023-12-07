import React from "react";
import './use.js'

function Profile() {
  return (
    <div>
    <div style={{ textAlign: "center" }}> 
    {/* ทำให้อยู่ตรงกลาง */}
      <img style= {{ position : "fixed",top :'-18px',left : '50px'}}
        src='https://th.bing.com/th/id/R.505aa080c77400c1fc41f7fb05cba20d?rik=Zg7%2bwFCRAbvc9A&pid=ImgRaw&r=0'
        alt='profile'
        width={150}
      />
      
      <p style={{ fontSize: "26px", marginBottom: "5px" }}>PAYSLIP/สลิปเงินเดือน</p>
        <p style={{ fontSize: "20px", marginBottom: "5px" }}>บริษัทลลิต้าเวริค์ จำกัด Lalitawork Co/ltd.
        315 ถ.เสนานิคม 1 ลาดพร้าว ลาดพร้าว กทม 10230 โทร 02-116-0144</p>
        <p style ={{ border : "solid 1px "}}></p>
        <p style={{ fontSize: "14px", marginBottom: "5px" }}>เริ่มงานวันที่ 1 มกราคม 2564 ระยะเวลาการทำงาน 2 ปี 8 เดือน</p>
        <p style={{ fontSize: "12px", marginBottom: "5px" }}>ID 001 นางสาว ฐานิดา ทีปต์พิภพ เลขประจำตัว 1101499075593 โทร 086-666-9666</p>
        <p style={{ fontSize: "12px", marginBottom: "5px" }}>ตำแหน่ง ผู้จัดการสาขา ธนาคาร SCB สาขาปากน้ำ เลขบัญชี 053-407-3402</p>
        <hr style ={{ border : "solid 1px "}}></hr>
        </div>
        <div>
          {/* ทำให้อยู้ด้านซ้ายหรือปกติ */}
        <p style= {{ fontSize: "12px", marginBottom: "5px" }}>เงินเดือน</p> 
        <p style= {{ fontSize: "12px", marginBottom: "5px" }}>ยอดขาย</p>
        <p style= {{ fontSize: "12px", marginBottom: "5px" }}>ค่าคอม ...%</p>
        <p style= {{ fontSize: "12px", marginBottom: "5px" }}>OT ...ชั่วโมง</p>

      <div style={{backgroundColor : "lightgreen"}}>
      <p style= {{ fontSize: "12px", marginBottom: "5px" }}>รายได้รวม...บาท    <p> <p style= {{ fontSize: "12px", marginBottom: "5px" }}>ยอด</p></p> </p>


      </div>
       <div>
       <p style= {{ fontSize: "12px", marginBottom: "5px" }}>หนึ่งหมื่นสองพีนห้าร้อยบาทถ้วน</p>
      
       </div>

      
    </div> 
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "center", background: "#fff" }}>
      <Profile />
      <div style={{ marginLeft: "10px", textAlign: "left" }}>
        {/* <h2 style={{ fontSize: "24px", marginBottom: "5px" }}>PAYSLIP/สลิปเงินเดือน</h2>
        <h2 style={{ fontSize: "20px", marginBottom: "5px" }}>บริษัทลลิต้าเวริค์ จำกัด Lalitawork Co/ltd.</h2>
        <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>315 ถ.เสนานิคม 1 ลาดพร้าว ลาดพร้าว กทม 10230 โทร 02-116-0144</h3>
        <h4 style={{ fontSize: "14px", marginBottom: "5px" }}>_____________________________________________________________________________________</h4>
        <h5 style={{ fontSize: "14px", marginBottom: "5px" }}>เริ่มงานวันที่ 1 มกราคม 2564 ระยะเวลาการทำงาน 2 ปี 8 เดือน</h5>
        <h6 style={{ fontSize: "12px", marginBottom: "5px" }}>ID 001 นางสาว ฐานิดา ทีปต์พิภพ เลขประจำตัว 1101499075593 โทร 086-666-9666</h6>
        <h7 style={{ fontSize: "12px", marginBottom: "5px" }}>ตำแหน่ง ผู้จัดการสาขา ธนาคาร SCB สาขาปากน้ำ เลขบัญชี 053-407-3402</h7>
        <h4 style={{ fontSize: "14px" }}>_____________________________________________________________________________________</h4> */}

</div>
</div>

      
   
  );
}
