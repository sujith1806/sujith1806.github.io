var submitbtn = document.getElementById("subtn");

submitbtn.addEventListener('click', function (e) {
    e.preventDefault();
    var form = e.target.parentElement;
    var fform = document.getElementById("form-result");
    var memberdiv = form.getElementsByTagName("div")[0];
    var nofmembs = memberdiv.getElementsByTagName("input")[0].value;
    var fnofmembs = nofmembs-1;
    fform.innerHTML=` <h1 class="confo">Voila ! You got Your Table Reserved</h1>
                        <h1 class="confo">Get Your ${fnofmembs} Friends On Board For a Delicious Ride<h1>`;
});