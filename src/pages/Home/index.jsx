import { MemberList } from "../../components/Home";

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xs-12 col-sm-12">
          <MemberList title="Evoush Opportunity" className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Home;
