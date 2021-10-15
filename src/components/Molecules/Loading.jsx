const Loading = (props) => {
  return (
    <>
      <span classNameName="badge bg-danger">Loading...</span>
      <img src={props.anim} className="img-fluid" width="100" />
    </>
  );
};

export default Loading;
