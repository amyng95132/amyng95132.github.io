class Header extends HTMLElement{
	constructor(){
		super();
	}
connectedCallback() {
    this.innerHTML = `
    <style>
    .dropbtn {
  background-color: #2544A0 ;
  color: white;
  padding: 16px;
  font: 16px Arial, sans-serif;
  border: none;
  width: 250px;
}

.demo {
}

.dropdown {
  position: relative;
  display: inline-block;
  float: left;
}

.dropdown-content {
  display: none;
  position: relative;
  background-color: #81B0AF;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  font: 16px Arial, sans-serif;
   text-align: center;
}

.dropdown-content a {
  color: white;
  padding: 16px 16px;
  text-decoration: none;
  display: block;
  position: relative;
}

a {
  color: white;
  text-decoration: none;
  display: block;
}



.dropdown-content a:hover {background-color: #81B0AF;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #81B0AF;}
    </style>
      <div class="dropdown">
	<button class="dropbtn"><a href="index.html">Home</a></button>
</div>	
<div class="dropdown">
  <button class="dropbtn">Literature</button>
  <div class="dropdown-content">
    <a href="romaticLit.html">Romantic</a>
    <a href="victoriaLit.html">Victorian</a>
  </div>
</div>
<div class="dropdown">
<button class="dropbtn">Music</button>
  <div class="dropdown-content">
    <a href="classicalMusic.html">Classical</a>
    <a href="romanticMusic.html">My Music</a>
  </div>
</div>
    `;
  }
}

customElements.define('header-component', Header);
