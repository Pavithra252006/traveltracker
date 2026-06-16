// USERS

function register() {

    let username =
        document.getElementById("newUsername").value.trim();

    let password =
        document.getElementById("newPassword").value.trim();

    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    let exists =
        users.find(user => user.username === username);

    if(exists){
        alert("User already exists");
        return;
    }

    users.push({
        username,
        password
    });

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Registration Successful");

    window.location.href = "login.html";
}

function login() {

    let username =
        document.getElementById("username").value.trim();

    let password =
        document.getElementById("password").value.trim();

    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    let validUser =
        users.find(
            user =>
            user.username === username &&
            user.password === password
        );

    if(validUser){

        localStorage.setItem(
            "currentUser",
            username
        );

        window.location.href =
            "dashboard.html";

    }else{

        alert("Invalid Username or Password");
    }
}

// TRIPS

let currentUser =
    localStorage.getItem("currentUser");

let trips =
    JSON.parse(
        localStorage.getItem(
            currentUser + "_trips"
        )
    ) || [];

window.onload = function(){

    if(document.getElementById("tripTable")){
        displayTrips();
    }
};

function addTrip(){

    let trip =
        document.getElementById("tripInput")
        .value.trim();

    if(trip === ""){
        return;
    }

    trips.push(trip);

    localStorage.setItem(
        currentUser + "_trips",
        JSON.stringify(trips)
    );

    document.getElementById("tripInput").value = "";

    displayTrips();
}

function displayTrips(data = trips){

    let table =
        document.getElementById("tripTable");

    if(!table) return;

    table.innerHTML = "";

    data.forEach((trip,index)=>{

        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${trip}</td>
            <td>
                <button onclick="editTrip(${index})">
                    Edit
                </button>

                <button onclick="deleteTrip(${index})">
                    Delete
                </button>
            </td>
        </tr>`;
    });
}

function editTrip(index){

    let newTrip =
        prompt("Edit Trip", trips[index]);

    if(newTrip){

        trips[index] = newTrip;

        localStorage.setItem(
            currentUser + "_trips",
            JSON.stringify(trips)
        );

        displayTrips();
    }
}

function deleteTrip(index){

    trips.splice(index,1);

    localStorage.setItem(
        currentUser + "_trips",
        JSON.stringify(trips)
    );

    displayTrips();
}

function searchTrip(){

    let search =
        document.getElementById("searchInput")
        .value.toLowerCase();

    if(search === ""){
        displayTrips();
        return;
    }

    let filtered =
        trips.filter(trip =>
            trip.toLowerCase().includes(search)
        );

    displayTrips(filtered);
}

function logout(){

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";
}
