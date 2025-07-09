import Light from './light';

const TrafficLight = ({count , colors, currentLight}) => {
  return (
    <section className="traffic-light">
      <button className="count">{count}</button>
      <Light colors={colors} currentLight={currentLight} />
    </section>
  );
};
export default TrafficLight;
