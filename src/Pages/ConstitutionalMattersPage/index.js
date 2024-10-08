import { constitutionalMattersData } from "../../Assets/Data/cardsData";
import ServicesPageDesign from "../../Components/servicesPageDesign/servicesPageDesign";
import { ServicesHeader } from "../../Components/Units/servicesHeader";

const ConstitutionalMattersPage = () => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });

  return (
    <>
      <div>
        <div>
          <ServicesHeader>Constitutional Matters</ServicesHeader>
        </div>
        <div>
          {constitutionalMattersData.map((item, index) => {
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

export default ConstitutionalMattersPage;
