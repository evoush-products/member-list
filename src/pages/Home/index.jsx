import { MemberList, Management } from "../../components/Home";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Evoush Opportunity</title>
        <link rel="canonical" href="https://evoush-opportunity.netlify.app" />
        <meta name="description" content="{{description}}" />
        <meta name="keywords" content="Evoush Bisnis" />
        <meta name="author" content="evoush" />
        <meta property="og:title" content="Evoush Business Opportunity" />
        <meta property="og:description" content="Your Eternal Future" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/evoush-products/bahan_evoush/master/assets/img/LOGO231.png"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta
          property="og:url"
          content="https://evoush-opportunity.netlify.app"
        />
      </Helmet>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xs-12 col-sm-12">
            <MemberList title="Evoush Opportunity" className="mt-5" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            {/* <Management title="Management Evoush" className="mt-5" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
