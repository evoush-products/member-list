const Loading = (props) => {
  return (
    <>
      <center>
        <small className="mt-5">Loading...</small>
      </center>
      <br />
      <img src={props.anim} className="img-fluid" width="100" />
    </>
  );
};

export default Loading;
