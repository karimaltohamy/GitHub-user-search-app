// vairabils dark mode
let btnMode = document.querySelector(".mode-container");
let body = document.querySelector("body");
// btn click dark mode
btnMode.addEventListener("click", () => {
    btnMode.classList.toggle("active");
    body.classList.toggle("dark-mode")
});

//########################################################## 
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let containerText = document.querySelector(".container-text");
let imgGithub = document.querySelector(".img-box img");
let mainName = document.querySelector(".main-name");
let mininame = document.querySelector(".mini-name");
let joined = document.querySelector(".joined");
let bio = document.querySelector(".bio");
let reposNum = document.querySelector(".repos span");
let followingNum = document.querySelector(".following span");
let followersNum = document.querySelector(".followers span");
let loctionText = document.querySelector(".text-location")
let twitter = document.querySelector(".text-twitter");
let link = document.querySelector(".text-link");
let companyText = document.querySelector(".text-company");


btn.addEventListener("click", (e) => {
    e.preventDefault()

    let userName = input.value;
    let mainUserName = userName.split(" ").join("")
    let linkApi = `https://api.github.com/users/${mainUserName}`
    fetch(linkApi)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        imgGithub.src = data.avatar_url;

        mainName.innerHTML = data.name;

        mininame.innerHTML = data.login;

        joined.innerHTML = `Joines ${data.created_at}`;

        bio.innerHTML = data.bio;

        reposNum.innerHTML = data.public_repos;

        followersNum.innerHTML = data.followers;

        followingNum.innerHTML = data.following;

        if (data.location === null || data.location === "") {
            loctionText.innerHTML = "Not Available"
            loctionText.classList.add("not-available")
            document.querySelector(".icon-location").classList.add("not-available")
        }else {
            loctionText.innerHTML = data.location
        }

        if (data.twitter_username == null || data.location === "") {
            twitter.innerHTML = "Not Available"
            twitter.classList.add("not-available")
            document.querySelector(".icon-twitter").classList.add("not-available")
        }else {
            loctionText.innerHTML = data.location
        }

        if (data.url == null || data.location === "") {
            link.innerHTML = "Not Available"
            link.classList.add("not-available")
            document.querySelector(".icon-link").classList.add("not-available")
        }else {
            link.innerHTML = data.html_url
        }

        if (data.company == null || data.location === "") {
            companyText.innerHTML = "Not Available"
            companyText.classList.add("not-available")
            document.querySelector(".icon-company").classList.add("not-available")
        }else {
            companyText.innerHTML = data.company;
        }
    }).catch((error)=> console.log(error) );
})

