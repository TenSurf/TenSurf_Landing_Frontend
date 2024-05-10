import { useState } from 'react';

interface IProps {
  isHover12?: boolean;
}
export const TensurfLiveClock = ({ isHover12 = false }: IProps) => {
  let time = new Date().toLocaleTimeString();

  const [liveTime, setLiveTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLiveTime(time);
  };
  setInterval(UpdateTime);
  return <div>{liveTime}</div>;
};

export default TensurfLiveClock;
