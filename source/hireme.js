document.addEventListener("DOMContentLoaded", () => {
  const hireMeBtn = document.querySelector(".btn-home1");
  if (hireMeBtn) {
    hireMeBtn.addEventListener("click", () => {
      window.location.href =
        "mailto:gkm2302@gmail.com?subject=Inquiry%20About%20Hiring%20You%20for%20a%20Job%20Position&body=Dear%20Baramdeen%20Mishra%2C%0A%0AI%20am%20interested%20in%20hiring%20you%20for%20a%20job%20position%20after%20reviewing%20your%20portfolio.%20Could%20you%20please%20share%20your%20availability%20for%20a%20quick%20call%20or%20meeting%3F%0A%0AThank%20you%20for%20your%20consideration.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D";
    });
  }
});
