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
              <li className={classes.corporatesAgrements}>
                Consultancy agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Employment contract
              </li>
              <li className={classes.corporatesAgrements}>
                Event management agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Non-disclosure agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Exclusive agreement Memorandum of understanding
              </li>
              <li className={classes.corporatesAgrements}>Agency agreement</li>
              <li className={classes.corporatesAgrements}>
                Advisors agreement
              </li>
              <li className={classes.corporatesAgrements}> Will</li>
              <li className={classes.corporatesAgrements}> Trust deed</li>
              <li className={classes.corporatesAgrements}>
                Non Circumvention and Fee Protection Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Purchase agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Letter of intent Commission agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Staffing agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Management service agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Operations and maintenance agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Franchise agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Distribution agreement
              </li>
              <li className={classes.corporatesAgrements}>Power of attorney</li>
              <li className={classes.corporatesAgrements}>
                Event merchandising agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Sponsorship agreement
              </li>
              <li className={classes.corporatesAgrements}>
                {" "}
                Affiliate Program Services Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Business Collaboration Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Management Service Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                HirePurchase Agreement
              </li>
              <Typography variant="h6">Corporate Contracts:</Typography>
              <li className={classes.corporatesAgrements}>Term Sheet</li>
              <li className={classes.corporatesAgrements}>
                The Limited Liability Partnership agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Partnership agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Co-founders agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Memorandum of association
              </li>
              <li className={classes.corporatesAgrements}>
                Articles of Association
              </li>
              <li className={classes.corporatesAgrements}>
                Share purchase agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Share subscription agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Shareholders’ agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Asset purchase agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Business transfer agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Joint Venture Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Advisory Agreement
              </li>
              <Typography variant="h6">
                Intellectual Property and Media-Related Agreements:
              </Typography>
              <li className={classes.corporatesAgrements}>
                Book publishing agreement and e-book publishing agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Work for hire agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Inventions agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Music license agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Content license agreement
              </li>
              <li className={classes.corporatesAgrements}>
                IP assignment agreement
              </li>
              <li className={classes.corporatesAgrements}>Artists agreement</li>
              <li className={classes.corporatesAgrements}>
                Celebrity endorsement agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Audio Visual Streaming Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Research and Development Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                {" "}
                Trademark Assignment Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Trademark License Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Character Merchandising Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Original Digital Content Development Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Commission Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Co-production Agreement Music Distribution Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Music Adaptation Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Music Synchronization Agreement
              </li>
              <Typography variant="h6">
                Internet and Technology Contracts:
              </Typography>
              <li className={classes.corporatesAgrements}>
                Software development agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Software license agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Software escrow agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Software maintenance agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Web development agreement
              </li>
              <li className={classes.corporatesAgrements}>
                API integration agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Technology transfer agreement
              </li>
              <li className={classes.corporatesAgrements}>SaaS agreement</li>
              <li className={classes.corporatesAgrements}>
                Database and Maintenance Contract Service level agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Master service agreement
              </li>
              <li className={classes.corporatesAgrements}>
                End User License Agreement
              </li>
              <Typography variant="h6">E-Commerce Contracts:</Typography>
              <li className={classes.corporatesAgrements}>
                Terms of use/Terms of service of E-commerce website
              </li>
              <li className={classes.corporatesAgrements}>Privacy policy</li>
              <li className={classes.corporatesAgrements}>
                Cookie Policy for a website
              </li>
              <li className={classes.corporatesAgrements}>
                Subscription service agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Cancellation, returns and refund policy
              </li>
              <li className={classes.corporatesAgrements}>
                {" "}
                E-commerce website development and services agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Terms and conditions of sale
              </li>
              <li className={classes.corporatesAgrements}>
                Internet Banking Services Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Domain Name Assignment Agreement
              </li>
              <Typography variant="h6">Real Estate Agreements:</Typography>
              <li className={classes.corporatesAgrements}>
                Corporate lease agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Leave and license agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Joint development agreement
              </li>
              <li className={classes.corporatesAgrements}>Sale deed</li>
              <li className={classes.corporatesAgrements}>Agreement to sell</li>
              <li className={classes.corporatesAgrements}>
                Venue Hire Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                {" "}
                Power Purchase Agreement
              </li>
              <Typography variant="h6">Government Contracts:</Typography>
              <li className={classes.corporatesAgrements}>EPC Contract </li>
              <li className={classes.corporatesAgrements}>
                Public-private partnership agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Concession agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Joint venture agreement
              </li>
              <Typography variant="h6">
                Lending and finance related documents:
              </Typography>
              <li className={classes.corporatesAgrements}>Loan Agreement</li>
              <li className={classes.corporatesAgrements}>
                Loan settlement agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Syndicate loan agreement
              </li>
              <li className={classes.corporatesAgrements}>Comfort Letter</li>
              <li className={classes.corporatesAgrements}> Deed of mortgage</li>
              <li className={classes.corporatesAgrements}>
                Share pledge agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Non-disclosure undertaking
              </li>
              <li className={classes.corporatesAgrements}>
                {" "}
                Corporate Guarantee
              </li>
              <li className={classes.corporatesAgrements}>
                Promoters Guarantee Agreement
              </li>
              <li className={classes.corporatesAgrements}>
                Notice of the Negotiable Instruments Act
              </li>
              <li className={classes.corporatesAgrements}>
                The application of the Insolvency and Bankruptcy Code
              </li>
              <li className={classes.corporatesAgrements}>
                Inter Creditor Agreement
              </li>
              <Typography variant="h6">
                Post Contractual Contracts/ Matters:
              </Typography>
              <li className={classes.corporatesAgrements}>
                Variation/Amendment Agreements
              </li>
              <li className={classes.corporatesAgrements}> Deed of Novation</li>
              <li className={classes.corporatesAgrements}>
                Termination Agreement
              </li>
              <li className={classes.corporatesAgrements}>Side Letters</li>
              <li className={classes.corporatesAgrements}>Interim Agreement</li>
              <li className={classes.corporatesAgrements}>Change Order</li>
              <li className={classes.corporatesAgrements}>
                Releases/Contract Cancellation
              </li>
              <li className={classes.corporatesAgrements}>Gift Deed</li>
              <li className={classes.corporatesAgrements}>
                Post incorporation Contract Adoption
              </li>
              <li className={classes.corporatesAgrements}>
                {" "}
                Declaration of Nominee Ship /Trust
              </li>
              <li className={classes.corporatesAgrements}>
                {" "}
                Notice of commencement of arbitration
              </li>
              <li className={classes.corporatesAgrements}>
                Statement of claim
              </li>
              <li className={classes.corporatesAgrements}>
                Statement of defense
              </li>
              <li className={classes.corporatesAgrements}>
                Identify Applicable Stamp Acts and Calculate Stamp Duty on
                Different Instruments
              </li>
              <li className={classes.corporatesAgrements}>Legal Notice</li>
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
