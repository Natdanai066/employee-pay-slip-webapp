"use client"

import React, { useState } from "react";
import { Container, Row, Col, Form, Input, Button } from "tailwindcss";

const SalarySlipForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState(0);
  const [sales, setSales] = useState(0);
  const [commission, setCommission] = useState(0);
  const [otHours, setOtHours] = useState(0);
  const [sickLeaveDays, setSickLeaveDays] = useState(0);
  const [vacationDays, setVacationDays] = useState(0);

  return (
    <Container>
      <h1 class="text-center text-2xl">แบบฟอร์มกรอกข้อมูลสลิปเงินเดือนพนักงาน</h1>
      <Form>
        <Row>
          <Col md="6">
            <Input
              type="text"
              placeholder="ชื่อจริง"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="mb-2"
            />
          </Col>
          <Col md="6">
            <Input
              type="text"
              placeholder="นามสกุล"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              class="mb-2"
            />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Input
              type="number"
              placeholder="เบอร์โทรศัพท์"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              class="mb-2"
            />
          </Col>
          <Col md="6">
            <Input
              type="number"
              placeholder="เงินเดือน"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              class="mb-2"
            />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Input
              type="number"
              placeholder="ยอดขาย"
              value={sales}
              onChange={(e) => setSales(e.target.value)}
              class="mb-2"
            />
          </Col>
          <Col md="6">
            <Input
              type="number"
              placeholder="ค่าคอมมิชชั่น"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
              class="mb-2"
            />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Input
              type="number"
              placeholder="OT (ชั่วโมง)"
              value={otHours}
              onChange={(e) => setOtHours(e.target.value)}
              class="mb-2"
            />
          </Col>
          <Col md="6">
            <Input
              type="number"
              placeholder="จำนวนวันลากิจ ลาหยุด"
              value={vacationDays}
              onChange={(e) => setVacationDays(e.target.value)}
              class="mb-2"
            />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Input
              type="number"
              placeholder="จำนวนวันลาป่วย"
              value={sickLeaveDays}
              onChange={(e) => setSickLeaveDays(e.target.value)}
              class="mb-2"
            />
          </Col>
        </Row>
        <Button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          บันทึกข้อมูล
        </Button>
      </Form>
    </Container>
  );
};

export default SalarySlipForm;