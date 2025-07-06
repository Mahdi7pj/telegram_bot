const form = document.querySelector('#form');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var text = document.querySelector("#text").value;
  var token = '7668968463:AAGQ7Dzhddnrq5ANx1yff6mgKmH_2WIadm4';
  var chat_id = '7193424458';
  var apiUrl =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      console.log("✅ پیام با موفقیت ارسال شد:", data);
    })
    .catch(err => {
      console.error("❌ خطا در ارسال پیام:", err);
    });
});