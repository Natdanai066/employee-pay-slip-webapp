function numberToWords(number) {
  const words = ["", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า", "สิบ"];
  return words[number];
}

const numericValue = 5;
const wordValue = numberToWords(numericValue);
console.log(wordValue); // ผลลัพธ์: ห้า
