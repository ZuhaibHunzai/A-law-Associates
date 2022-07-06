import { familyMattersData } from "../../Assets/Data/cardsData";
import ServicesPageDesign from "../../Components/servicesPageDesign/servicesPageDesign";
import { ServicesHeader } from "../../Components/Units/servicesHeader";

const FamilyMattersPage = () => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  return (
    <>
      <div>
        <div>
          <ServicesHeader>Family Matters</ServicesHeader>
        </div>
        <div>
          {familyMattersData.map((item, index) => {
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
export default FamilyMattersPage;
