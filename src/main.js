import './style.css';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>CURRENCY CONVERTER</h1>
      <from>
        <div class="card">
          <input type="number" id="fromInput" placeholder="Enter amount">
          |
          <select id="fromSelect">
            <option>SELECT</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="PKR">PKR</option>
          </select>
        </div>
        <button >CONVERT</button>
        <div class="card">
          <input type="number" id="fromOutput" placeholder="Converted amount">
          |
          <select id="fromSelect" >
            <option>SELECT</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="PKR">PKR</option>
          </select>
        </div>
      </from>
  </div>
`;

setupCounter(document.querySelector('#counter'));
