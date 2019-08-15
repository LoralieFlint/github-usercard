
axios
	.get("https://api.github.com/users/LoralieFlint")
  .then(resolve =>
		document.querySelector(".cards").appendChild(cardCreator(resolve.data))
	)
  .catch(err => console.log(err)
  );
  
/* <div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>  */

/* creating component */
function cardCreator(data) {
/* creating element */
  const div1 = document.createElement("div");
/* adding classes */
  div1.classList.add("card");

  const newImage = document.createElement("img");
  /* getting data from API */
  newImage.src = data.avatar_url;

  const div2 = document.createElement("div");
  div2.classList.add("card-info");

  const newHeader = document.createElement("h3");
  newHeader.classList.add("name");
  newHeader.textContent = data.name;

  const p1 = document.createElement("p");
  p1.classList.add("username");
  p1.textContent = data.login;

  const p2 = document.createElement("p");
  p2.textContent = `Location: ${data.location}`;

  const p3 = document.createElement("p");
  p3.textContent = `Profile: `;

  const anch = document.createElement("a");
  anch.href = data.html_url;
  anch.textContent = data.html_url;

  const p4 = document.createElement("p");
  p4.textContent = `Followers: ${data.followers}`;

  const p5 = document.createElement("p");
  p5.textContent = `Following: ${data.following}`;

  const p6 = document.createElement("p");
  p6.textContent = `Bio: ${data.bio}`;


/* appending components nested in correct place */
  div1.appendChild(newImage);
  div1.appendChild(div2);   
  div2.appendChild(newHeader);
  div2.appendChild(p1)
  div2.appendChild(p2)
  div2.appendChild(p3)
  p3.appendChild(anch)
  div2.appendChild(p4)
  div2.appendChild(p5)
  div2.appendChild(p6)

/* returning component to the DOM */
return div1;
}

/* array of followers */
const followersArray = [ 
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

/* itterating through the array of followers to make new user cards */
for (let follows of followersArray) {
	axios
		.get(`https://api.github.com/users/${follows}`)
		.then(res => document.querySelector(".cards").append(cardCreator(res.data)))
		.catch(err => console.log(err));
}









