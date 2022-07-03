  /**
   * Preloader
  */
  const tmpDiv = document.createElement('div');
  const tmpImg = document.createElement('img');
  tmpDiv.classList.add('s-loader')
  tmpImg.src = "/layout/general/img/s-preLoader/load_00.gif";
  tmpDiv.appendChild(tmpImg);
  document.querySelector('body').appendChild(tmpDiv);


  window.addEventListener("load", function () {
      tmpDiv.classList.add("hidden");
  });