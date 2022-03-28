import React from "react";

function Profile() {
  return (
    /*basic layout
            -header
            -sidebar
            */
    <div>
      {/* 
        <Header/>
        <Sidebar/> */}
      <div>
        {/*Image container*/}
        <div>
          <img
            src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-5.jpg"
            alt=""
          />
          <button>Edit Photo</button>
        </div>
        <div>
          <table>
            <tr>
              <th>Name</th>
              <td>Employee Name</td>
            </tr>
            <tr>
              <th>Employee Id</th>
              <td>AN2021322</td>
            </tr>
            <tr>
              <th>Current Status</th>
              <td>AN2021322</td>
            </tr>
            <tr>
              <th>Current Project</th>
              <td>project-name</td>
            </tr>
            <tr>
              <th>Reporting Manager</th>
              <td>Manager Name</td>
            </tr>
          </table>
        </div>
      </div>

      <div>
        {/*personal info: dob, address, registered kin, local contact, emergency contact*/}
        <button>Edit</button>
        <table>
          <tr>
            <th>Date of Birth</th>
            <td>19/02/1995</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>Employees Address as provided by employee</td>
          </tr>
          <tr>
            <th>Mobile Number</th>
            <td>99999_999999</td>
          </tr>
          <tr>
            <th>Emergency Contact</th>
            <td>88787_76856</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Profile;
