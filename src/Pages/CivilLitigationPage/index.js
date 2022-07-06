import ServicesPageDesign from "../../Components/servicesPageDesign/servicesPageDesign";
import { ServicesHeader } from "../../Components/Units/servicesHeader";
import { civilLitigationData } from "../../Assets/Data/cardsData";

const CivilLitigationPage = () => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  return (
    <>
      <div>
        <div>
          <ServicesHeader>Civil Litigation</ServicesHeader>
        </div>
        <div>
          {civilLitigationData.map((item, index) => {
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
export default CivilLitigationPage;
