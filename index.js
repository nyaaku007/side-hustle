
if (valid) {
    setTimeout(() => {
        successMessage.style.display = "none";
    },2000);
    successMessage.classList.remove("hidden");
    console.log("Name: ", Name);
    console.log("Email: ", emailid);
    console.log("Phone: ", phone);
    console.log("Gender: ", genderMF);
    console.log("Password: ", pass);
}