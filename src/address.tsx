import { React } from "./deps.ts";
import { AddressData } from "./data.ts";

type MyProps = {
  address: AddressData
};


class Address extends React.Component<MyProps, {}> {
  render() {
    const { line1, line2, city, postalCode, region } = this.props.address || {}; 
    const style = {
      padding: "15px",
    };
    return (
      <div style={style} className="address-block">
        Address: {line1}, {line2}, {city}, {region} {postalCode}.
      </div>
    );
  }
}

export default Address;
