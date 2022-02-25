import "./servicesHeader.css";
export const ServicesHeader = ({ children, servicesHeader, type }) => {
  return (
    <h1 className="servicesHeader" type={type}>
      {children}
    </h1>
  );
};
