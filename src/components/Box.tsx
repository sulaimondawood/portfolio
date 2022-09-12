interface Icolor {
  color: string;
}

const Box = (props: Icolor) => {
  const { color } = props;
  return <div className={`box ${color}`}></div>;
};

export default Box;
