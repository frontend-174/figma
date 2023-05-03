import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const options = ["Option 1", "Option 2", "Option 3"];

const MyDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(undefined);

  return (
    <DropdownButton  style={{ background: "green" }}
      title={selectedOption || "Catalog"}
      onSelect={(eventKey) => setSelectedOption(eventKey)}
    >
      {options.map((option) => (
        <Dropdown.Item
          key={option}
          eventKey={option}
         
        >
          {option} <br />
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default MyDropdown;
