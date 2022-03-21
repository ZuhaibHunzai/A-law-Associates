import { ServicesHeader } from "../Units/servicesHeader";
import legal from "../../Assets/Images/company.jpg";
import { Buttons } from "../Units/buttons";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const CorporateMatters = () => {
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }

  const classes = useStyles();
  return (
    <div className={classes.LegalMain}>
      <div>
        <ServicesHeader>Corporate Matters</ServicesHeader>
      </div>

      <div className={classes.servicesBodyMain}>
        <div className={classes.servicesImgDiv}>
          <img
            src={legal}
            alt="legal Case"
            className={classes.servicesBodyImg}
          />
        </div>
        <div
          className={classes.servicesBodyTextDiv}
          style={{ paddingTop: "20px" }}
        >
          <div className={classes.servicesBodyTextH}>
            <Typography variant="h2" className={classes.serviceH}>
              Corporate Matters
            </Typography>
          </div>
          <div className={classes.servicesbodyTextP}>
            <Typography variant="subtitle1" className={classes.serviceP}>
              A Law Associates provides legal assistance in connection with
              legal due diligence, Company Incorporation, Commercial Litigation,
              Arbitration, Intellectual Property Rights, Banking and finance,
              White-Collar Crime, Complex Contracts Drafting Negotiation, and
              Dispute resolution.
              <Typography variant="h6">
                Intellectual Property Rights Management:
              </Typography>
              Intellectual Property Rights Management A Law Associates has the
              expertise in Trademark, Copyright and Patents Registration from
              Intellectual Property Organization (IPO), Consultancy and
              Litigation regarding their infringement. We also provide a
              complete guide for new Start Ups like new company registration and
              consultancy, SECP cases, inquiries and replies of notices.
              <Typography variant="h6">
                Contracts and Agreements Drafting, Negotiation and Dispute
                Resolution:
              </Typography>
              Business success is ultimately about relationships, and many
              business relationships are based on tailored Business Contracts
              and Agreements Drafting. However, that does not mean that all good
              business people know when they need a formal agreement or
              understand all the nuances of contracts that must be considered
              for their own protection. Today’s world is rapidly changing where
              even a simple contract has become increasingly complex and
              time-consuming in terms safeguard and success of your business in
              the long term. We Handle All Aspects of Business Formation And
              Provide A Full Range Of Advanced Contract Drafting, Review,
              Negotiation And Dispute Resolution Services. We Offer Contract And
              Agreement Drafting Services Online Or At Our Office. We help you
              maintain your competitive edge. Our highly seasoned and
              experienced team of Lawyers can manage the entire life-cycle of
              your routine contracts. We offer exclusive tailored contract
              drafting services to meet your specific needs. Our services do not
              include only drafting of your legal documents but also management
              and review of your corporate contracts and legal documents as
              well, e.g.
              <Typography variant="h6">
                General and Commercial Contracts:
              </Typography>
              Consultancy agreement Employment contract Event management
              agreement Non-disclosure agreement Exclusive agreement Memorandum
              of understanding Agency agreement Advisors agreement Will Trust
              deed Non Circumvention and Fee Protection Agreement Purchase
              agreement Letter of intent Commission agreement Staffing agreement
              Management service agreement Operations and maintenance agreement
              Franchise agreement Distribution agreement Power of attorney Event
              merchandising agreement Sponsorship agreement Affiliate Program
              Services Agreement Business Collaboration Agreement Management
              Service Agreement Hire Purchase Agreement
              <Typography variant="h6">Corporate Contracts:</Typography>
              Term Sheet The Limited Liability Partnership agreement Partnership
              agreement Co-founders agreement Memorandum of association Articles
              of Association Share purchase agreement Share subscription
              agreement Shareholders’ agreement Asset purchase agreement
              Business transfer agreement Joint Venture Agreement Advisory
              Agreement
              <Typography variant="h6">
                Intellectual Property and Media-Related Agreements:
              </Typography>
              Book publishing agreement and e-book publishing agreement Work for
              hire agreement Inventions agreement Music license agreement
              Content license agreement IP assignment agreement Artists
              agreement Celebrity endorsement agreement Audio Visual Streaming
              Agreement Research and Development Agreement Trademark Assignment
              Agreement Trademark License Agreement Character Merchandising
              Agreement Original Digital Content Development Agreement
              Commission Agreement Co-production Agreement Music Distribution
              Agreement Music Adaptation Agreement Music Synchronization
              Agreement
              <Typography variant="h6">
                Internet and Technology Contracts:
              </Typography>
              Software development agreement Software license agreement Software
              escrow agreement Software maintenance agreement Web development
              agreement API integration agreement Technology transfer agreement
              SaaS agreement Database and Maintenance Contract Service level
              agreement Master service agreement End User License Agreement
              <Typography variant="h6">E-Commerce Contracts:</Typography>
              Terms of use/Terms of service of E-commerce website Privacy policy
              Cookie Policy for a website Subscription service agreement
              Cancellation, returns and refund policy E-commerce website
              development and services agreement Terms and conditions of sale
              Internet Banking Services Agreement Domain Name Assignment
              Agreement
              <Typography variant="h6">Real Estate Agreements:</Typography>
              Corporate lease agreement Leave and license agreement Joint
              development agreement Sale deed Agreement to sell Venue Hire
              Agreement Power Purchase Agreement
              <Typography variant="h6">Government Contracts:</Typography>
              EPC Contract Public-private partnership agreement Concession
              agreement Joint venture agreement
              <Typography variant="h6">
                Lending and finance related documents:
              </Typography>
              Loan Agreement Loan settlement agreement Syndicate loan agreement
              Comfort Letter Deed of mortgage Share pledge agreement
              Non-disclosure undertaking Corporate Guarantee Promoters Guarantee
              Agreement Notice of the Negotiable Instruments Act The application
              of the Insolvency and Bankruptcy Code Inter Creditor Agreement
              <Typography variant="h6">
                Post Contractual Contracts/ Matters:
              </Typography>
              Variation/Amendment Agreements Deed of Novation Termination
              Agreement Side Letters Interim Agreement Change Order
              Releases/Contract Cancellation Gift Deed Post incorporation
              Contract Adoption Declaration of Nominee Ship /Trust Notice of
              commencement of arbitration Statement of claim Statement of
              defense Identify Applicable Stamp Acts and Calculate Stamp Duty on
              Different Instruments Legal Notice
            </Typography>
          </div>
          <div style={{ marginTop: "12px" }}>
            <Buttons
              className={classes.contactBtn}
              type="button"
              buttonStyle="btn--primary--outlined"
              buttonSize="btn--medium"
              onClick={() => {
                handleRoute("/contact");
              }}
            >
              Contact Us
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CorporateMatters;
