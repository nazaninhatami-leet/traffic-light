const Light = ({ colors, currentLight }) => {
  return (
    <article className="lights">
      {colors.map((color) => {
        if (currentLight === color) {
          return (
            <div key={color}>
              <button className={`color ${color}`}></button>
            </div>
          );
        } else {
          return (
            <div key={color}>
              <button className={'color'}></button>
            </div>
          );
        }
      })}
    </article>
  );
};
export default Light;
