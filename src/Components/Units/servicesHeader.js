import "./servicesHeader.css";
export const ServicesHeader = ({ children, type }) => {
  return (
    <div className="services-header">
      <h1 className="servicesHeader" type={type}>
        {children}
      </h1>
    </div>
  );
};
