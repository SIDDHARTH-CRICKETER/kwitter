function adduser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("USER_NAME",user_name);
    window.location = "kwitter_room.html";
}