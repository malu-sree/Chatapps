// import React from 'react';
// import { Form } from 'react-bootstrap';

// const GenderCheckbox = () => {
//   return (
//     <div className="mb-4">
//       <Form.Label className="text-base font-medium text-gray-600">Gender</Form.Label>
//       <div className="d-flex gap-4">
//         <Form.Check
//           inline
//           label="Male"
//           name="gender"
//           type="radio"
//           id="genderMale"
//           className="mr-2"
//         />
//         <Form.Check
//           inline
//           label="Female"
//           name="gender"
//           type="radio"
//           id="genderFemale"
//         />
//       </div>
//     </div>
//   );
// };

// export default GenderCheckbox;

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
      <div className="d-flex">
        {/* Male Option */}
        <div className="form-check me-3">
          <input
            type="radio"
            id="male"
            name="gender"
            className="form-check-input"
            value="male"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
          <label htmlFor="male" className="form-check-label">
            Male
          </label>
        </div>
  
        {/* Female Option */}
        <div className="form-check">
          <input
            type="radio"
            id="female"
            name="gender"
            className="form-check-input"
            value="female"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
          <label htmlFor="female" className="form-check-label">
            Female
          </label>
        </div>
      </div>
    );
  };
  
  export default GenderCheckbox;
  