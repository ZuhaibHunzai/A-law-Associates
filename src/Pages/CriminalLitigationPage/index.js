import { criminalLitigationData } from "../../Assets/Data/cardsData";
import ServicesPageDesign from "../../Components/servicesPageDesign/servicesPageDesign";
import { ServicesHeader } from "../../Components/Units/servicesHeader";

const CriminalLitigationPage = () => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  return (
    <>
      <div>
        <div>
          <ServicesHeader>Criminal Litigation</ServicesHeader>
        </div>
        <div>
          {criminalLitigationData.map((item, index) => {
            return (
              <div>
                <ServicesPageDesign
                  key={index}
                  image={item.serviceImg}
                  name={item.serviceName}
                  description={item.description}
                  btnText="Contact Us"
                  path={item.path}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CriminalLitigationPage;
