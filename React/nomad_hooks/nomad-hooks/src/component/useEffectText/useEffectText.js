import React, { useState, useEffect } from "react";

const useEffectText = () => {
  const sayHello = () => console.log('hello');
  
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  //number가 바뀔때마다 sayHello 함수 실행
  //제일 처음 render에서만 실행을 하고 싶다면 [] 빈 배열 넘기기
  useEffect(sayHello, [number]);
  return (
    <>
      <div>Hi</div>
      <button onClick={() => setNumber(number+1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber+1)}>{aNumber}</button>
    </>
  );
};

export default useEffectText;
