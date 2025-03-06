import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const References = () => (
  <div>
    <header>
      <h1>References</h1>
      <p>Contact Information for Personal and Professional References</p>
    </header>
    <div className="container">
      <Nav />
      <main>
        <h2>References</h2>
        <div className="references-box">
          <table className="references-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Relationship</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Park</td>
                <td>Mother</td>
                <td>(123) 456-7890</td>
              </tr>
              <tr>
                <td>John Park</td>
                <td>Father</td>
                <td>(987) 654-3210</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
    <Footer />
  </div>
);

export default References;