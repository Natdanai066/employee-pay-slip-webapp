"use client";
import  { useState } from 'react';

const Calculator = () => {
  const [salary, setSalary] = useState('');
  const [socialSecurityRate, setSocialSecurityRate] = useState('');
  const [insuranceValue, setInsuranceValue] = useState('');

  const [sales, setSales] = useState('');
  const [salesRate, setSalesRate] = useState('');
  const [salesValue, setSalesValue] = useState('');

  const [commissionRate, setCommissionRate] = useState('');
  const [commissionValue, setCommissionValue] = useState('');

  const calculateInsuranceValue = () => {
    const parsedSalary = parseFloat(salary);
    const parsedSocialSecurityRate = parseFloat(socialSecurityRate);

    if (!isNaN(parsedSalary) && !isNaN(parsedSocialSecurityRate)) {
      const result = parsedSalary * (parsedSocialSecurityRate / 100);
      setInsuranceValue(result.toFixed(2));
    } else {
      setInsuranceValue('Invalid input');
    }
  };

  const calculateSalesValue = () => {
    const parsedSales = parseFloat(sales);
    const parsedSalesRate = parseFloat(salesRate);

    if (!isNaN(parsedSales) && !isNaN(parsedSalesRate)) {
      const result = parsedSales * (parsedSalesRate / 100);
      setSalesValue(result.toFixed(2));
    } else {
      setSalesValue('Invalid input');
    }
  };

  const calculateCommissionValue = () => {
    const parsedSalesValue = parseFloat(salesValue);
    const parsedCommissionRate = parseFloat(commissionRate);

    if (!isNaN(parsedSalesValue) && !isNaN(parsedCommissionRate)) {
      const result = parsedSalesValue * (parsedCommissionRate / 100);
      setCommissionValue(result.toFixed(2));
    } else {
      setCommissionValue('Invalid input');
    }
  };

  return (
    <div>
      <h8 style={{ fontSize: '14px', margin: '0.5em 0' }}>
        เงินเดือน
        <input
          type="number"
          placeholder="กรอกเงิน"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          style={{ marginLeft: '0.5em', padding: '0.2em' }}
        />
        บาท
      </h8>
      <button onClick={calculateInsuranceValue}>คำนวณประกันสังคม</button>
      <h9 style={{ fontSize: '14px', margin: '0.5em 0' }}>
        ประกันสังคม
        <input
          type="number"
          placeholder="กรอก%"
          value={socialSecurityRate}
          onChange={(e) => setSocialSecurityRate(e.target.value)}
          style={{ marginLeft: '0.2em', padding: '0.2em' }}
        />
        =
        <input
          type="number"
          placeholder=""
          value={insuranceValue}
          readOnly
          style={{ marginLeft: '0.5em', padding: '0.2em' }}
        />
        บาท
      </h9>

      <h10 style={{ fontSize: '14px', margin: '0.5em 0' }}>
        ยอดขาย
        <input
          type="number"
          placeholder="กรอก%"
          value={salesRate}
          onChange={(e) => setSalesRate(e.target.value)}
          style={{ marginLeft: '0.2em', padding: '0.2em' }}
        />
        =
        <input
          type="number"
          placeholder=""
          value={salesValue}
          readOnly
          style={{ marginLeft: '0.5em', padding: '0.2em' }}
        />
        บาท
      </h10>
      <button onClick={calculateSalesValue}>คำนวณยอดขาย</button>

      <h11 style={{ fontSize: '14px', margin: '0.5em 0' }}>
        ค่าคอม
        <input
          type="number"
          placeholder="กรอก%"
          value={commissionRate}
          onChange={(e) => setCommissionRate(e.target.value)}
          style={{ marginLeft: '0.2em', padding: '0.2em' }}
        />
        =
        <input
          type="number"
          placeholder=""
          value={commissionValue}
          readOnly
          style={{ marginLeft: '0.5em', padding: '0.2em' }}
        />
        บาท
      </h11>
      <button onClick={calculateCommissionValue}>คำนวณค่าคอม</button>
    </div>
  );
};