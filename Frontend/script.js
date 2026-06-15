function addTrip() {
  let trip = document.getElementById("tripInput").value;

  if(trip === "") {
    alert("Please enter a trip");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = trip;

  document.getElementById("tripList").appendChild(li);

  document.getElementById("tripInput").value = "";
}
