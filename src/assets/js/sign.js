import MD5 from "js-md5";

function sign(obj) {
  let keyArray = []; //key数组
  let valueArray = []; //value数组

  //抽出key
  for (let i in obj) {
    keyArray.push(i);
  }

  //字典排序key
  keyArray.sort();

  //根据key，整理value
  for (let i in keyArray) {
    for (let j in obj) {
      if (keyArray[i] == j) {
        valueArray.push(obj[j]);
      }
    }
  }

  const salt1 = "D0EV7FZL45A5DVKD";
  const salt2 = "E2Y1YREK2BYDAC5C";
  let step1 = "";
  let step2 = "";
  let step3 = "";
  let step4 = "";
  let timestamp = Date.parse(new Date());

  for (let i in valueArray) {
    step1 += valueArray[i];
  }
  step1 = step1 + timestamp;
  step2 = MD5(step1 + salt1);
  step3 = MD5(step2 + salt2);
  step4 = step3.substring(0, 16);

  return [step4, timestamp];
}

export default sign;
