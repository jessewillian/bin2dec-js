import './css/style.css';

document.querySelector('#app').insertAdjacentHTML('beforeend',/*html*/`
  <h1>Binary to Decimal</h1>
  <div class="box-content">

    <div class="box-input">
      <label for="bin">Binary input:</label>
      <div class="wrapper">
        <!-- input binary-->
        <input type="text" class="bin" id="bin" maxlength="8" placeholder="Binary here">
        <!--button-->
        <input type="button" class="btn" id="btn" value="Converter">
      </div>
    </div>

    <div class="box-input">
      <label for="">Decimal output:</label>
      <!-- input result-->
      <input type="text" class="result" value="" disabled>
    </div>

  </div>
`);