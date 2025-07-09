import { useEffect, useState } from 'react';
import './App.css';
import TrafficLight from './components/trafficLight';

function App() {
  const colors = ['red', 'yellow', 'green'];
  let [count, setCount] = useState(20);
  let [currentLight, setCurrentLight] = useState(colors[0]);
  let timeOut = null;
  let tick = null;

  function changeLight(currentLight) {
    switch (currentLight) {
      case colors[0]:
        setCurrentLight(colors[1]);
        tick = 5;
        break;
      case colors[1]:
        setCurrentLight(colors[2]);
        tick = 20;
        break;
      case colors[2]:
        setCurrentLight(colors[0]);
        tick = 20;
        break;
    }
  }

  const ticker = () => {
    const interval = setInterval(() => {
      setCount((currentstate) => currentstate - 1);
    }, 1000);

    if (currentLight === colors[1]) {
      timeOut = 5000;
    } else {
      timeOut = 20000;
    }
    setTimeout(() => {
      clearInterval(interval);
      console.log(`color changed to ${currentLight}`);
      changeLight(currentLight);
      setCount(tick);
    }, timeOut);

    return () => {
      clearInterval(interval);
    };
  };

  useEffect(ticker, [currentLight]);

  return (
    <TrafficLight count={count} colors={colors} currentLight={currentLight} />
  );
}

export default App;
