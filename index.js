// creat a main section for banner 
const section = document.createElement("section")
section.style.background="#FFF8F3"
section.style.height="800px"
section.style.display="flex"
document.body.appendChild(section)

// add log in section
const marry = document.createElement("img")
marry.src="logo.png"
marry.style.position="relative"
marry.style.top="60px"
marry.style.left="100px"
marry.style.width="100px"
marry.style.height="50px"
section.appendChild(marry)

// add menu in banner section
const ul = document.createElement("ul")
ul.style.position="relative"
ul.style.left="700px"
ul.style.top="60px"
ul.style.display="flex"
section.appendChild(ul)

const li1 = document.createElement("li")
li1.innerHTML ="Portfolio"
li1.style.fontFamily = "Open Sans, sans-serif"
li1.style.listStyleType="none"
li1.style.paddingLeft="40px"

const li2 = document.createElement("li")
li2.innerHTML="Blog"
li2.style.fontFamily = "Open Sans, sans-serif"
li2.style.listStyleType="none"
li2.style.paddingLeft="40px"

ul.appendChild(li1)
ul.appendChild(li2)

// add button in banner 
const bnbtn =document.createElement("button")
bnbtn.style.background="#FD6E0A"
bnbtn.style.color="white"
bnbtn.style.height="50px"
bnbtn.style.width="160px"
bnbtn.style.fontSize="16px"
bnbtn.style.paddingLeft="40px"
bnbtn.style.paddingRight="40px"
bnbtn.style.border="none"
bnbtn.style.position="relative"
bnbtn.style.top="50px"
bnbtn.style.left="770px"
bnbtn.innerHTML="Hire Me"
section.appendChild(bnbtn)

// add text n banner section 
const bntxt = document.createElement("div")
bntxt.style.height="300px"
bntxt.style.width="500px"
bntxt.style.position="relative"
bntxt.style.top="200px"
bntxt.style.left="-330px"
section.appendChild(bntxt)

const bnh4 = document.createElement("h4")
bnh4.innerHTML="Hi, I  am"
bnh4.style.color="#474747"
bnh4.style.fontSize="45px"
bnh4.style.position="relative"
bnh4.style.fontFamily = "Open Sans, sans-serif"

const bnh1 = document.createElement("h1")
bnh1.innerHTML="Mary Hardy"
bnh1.style.fontSize="85px"
bnh1.style.position="relative"
bnh1.style.top="-60px"
bnh1.style.left="-5px"
 bnh1.style.fontFamily ="Open Sans, sans-serif"

const bnp = document.createElement("p")
bnp.innerHTML='Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.'
bnp.style.fontFamily ="Open Sans, sans-serif"
bnp.style.position="relative"
bnp.style.top="-100px"
bnp.style.width="500px"

bntxt.appendChild(bnh4)
bntxt.appendChild(bnh1)
bntxt.appendChild(bnp)

//add img in banner section 
const bnimg = document.createElement("img")
bnimg.src="man.png"
bnimg.style.width="500px"
bnimg.style.height="600px"
const bnimgd = document.createElement("div")
bnimgd.style.height="400px"
bnimgd.style.width="500px"
bnimgd.style.position="relative"
bnimgd.style.top="200px"
bnimgd.style.left="-250px"
section.appendChild(bnimgd)
bnimgd.appendChild(bnimg)


// add button in bntxt
const btbtn1 = document.createElement("button")
btbtn1.style.color="white"
btbtn1.style.background="#FD6E0A"
btbtn1.style.height="50px"
btbtn1.innerHTML="Downlode CV"
btbtn1.style.width="160px"
btbtn1.style.fontSize="16px"
btbtn1.style.position="relative"
btbtn1.style.top="-230px"
btbtn1.style.left="110px"
btbtn1.style.borderRadius="5px"
btbtn1.style.border="none"
document.body.appendChild(btbtn1)


const btbtn2 = document.createElement("button")
btbtn2.style.color="#FD6E0A"
btbtn2.innerHTML="Contuct Us"
btbtn2.style.background="Transprarent"
btbtn2.style.height="50px"
btbtn2.style.width="160px"
btbtn2.style.fontSize="16px"
btbtn2.style.position="relative"
btbtn2.style.top="-230px"
btbtn2.style.left="150px"
btbtn2.style.borderRadius="5px"
btbtn2.style.border="1px solid"
btbtn2.style.borderColor="#FD6E0A"
document.body.appendChild(btbtn2)

// add about div in body 
const abdiv = document.createElement("div")
abdiv.style.width="1040px"
abdiv.style.height="400px"
abdiv.style.margin="auto"
abdiv.style.marginBottom="50px"
abdiv.style.textAlign="center"
abdiv.style.background="#FFF8F3"
document.body.appendChild(abdiv)

// add txt in about div
const abh2 = document.createElement("h2")
abh2.innerHTML="About Me"
abh2.style.fontFamily ="Open Sans, sans-serif"
abh2.style.paddingTop="100px"
abdiv.appendChild(abh2)

const abp = document.createElement("p")
abp.innerHTML='I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.'
abp.style.paddingRight="150px"
abp.style.paddingLeft="150px"
abp.style.color="#757575"
abp.style.fontFamily ="Open Sans, sans-serif"
abdiv.appendChild(abp)

// add list in about div 
const ul1 = document.createElement("ul") 
ul1.style.display="flex"
ul1.style.marginLeft="140px"
abdiv.appendChild(ul1)

const al1 = document.createElement("li") 
al1.innerHTML="Nmae:"
al1.style.listStyleType="none"
al1.style.color='#757575'
al1.style.position='relative'
al1.style.left="70px"
al1.style.fontFamily ="Open Sans, sans-serif"
ul1.appendChild(al1)

const al2 = document.createElement("li") 
al2.innerHTML="Email:"
al2.style.listStyleType="none"
al2.style.color='#757575'
al2.style.position='relative'
al2.style.left="180px"
al2.style.fontFamily ="Open Sans, sans-serif"
ul1.appendChild(al2)

const al3 = document.createElement("li") 
al3.innerHTML="Date of Birth:"
al3.style.listStyleType="none"
al3.style.color='#757575'
al3.style.position='relative'
al3.style.left="280px"
al3.style.fontFamily ="Open Sans, sans-serif"
ul1.appendChild(al3)

const al4 = document.createElement("li") 
al4.innerHTML="From:"
al4.style.listStyleType="none"
al4.style.color='#757575'
al4.style.position='relative'
al4.style.left="390px"
al4.style.fontFamily ="Open Sans, sans-serif"
ul1.appendChild(al4)

// add list2 in about div 
const ul2 = document.createElement("ul") 
ul2.style.display="flex"
ul2.style.marginLeft="130px"
abdiv.appendChild(ul2)

const ali1 = document.createElement("li") 
ali1.innerHTML="Mary Hardy"
ali1.style.listStyleType="none"
ali1.style.color='#474747'
ali1.style.fontWeight='bold'
ali1.style.marginLeft='50px'
ali1.style.fontFamily ="Open Sans, sans-serif"
ul2.appendChild(ali1)

const ali2 = document.createElement("li") 
ali2.innerHTML="info@gmail.com"
ali2.style.listStyleType="none"
ali2.style.color='#474747'
ali2.style.fontWeight='bold'
ali2.style.marginLeft='50px'
ali2.style.fontFamily ="Open Sans, sans-serif"
ul2.appendChild(ali2)

const ali3 = document.createElement("li") 
ali3.innerHTML="11 November 1987"
ali3.style.listStyleType="none"
ali3.style.color='#474747'
ali3.style.fontWeight='bold'
ali3.style.marginLeft='50px'
ali3.style.fontFamily ="Open Sans, sans-serif"
ul2.appendChild(ali3)

const ali4 = document.createElement("li") 
ali4.innerHTML="Los Angeles, USA"
ali4.style.listStyleType="none"
ali4.style.color='#474747'
ali4.style.fontWeight='bold'
ali4.style.marginLeft='50px'
ali4.style.fontFamily ="Open Sans, sans-serif"
ul2.appendChild(ali4)

// add a whta i do div in body 
const whadiv = document.createElement("div")
whadiv.style.textAlign="center"
document.body.appendChild(whadiv)

// add text in what i do 
const wh2 = document.createElement("h2")
wh2.innerHTML="What I do ?"
wh2.style.fontFamily ="Open Sans, sans-serif"
whadiv.appendChild(wh2)

const whp = document.createElement("p")
whp.innerHTML="I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online resume and project portfolio."
whp.style.paddingRight="220px"
whp.style.paddingLeft="220px"
whp.style.color="#757575"
whp.style.fontFamily ="Open Sans, sans-serif"
whadiv.appendChild(whp)

// make languege div in body
const landiv = document.createElement("div")
landiv.style.height="400px"
landiv.style.display="flex"
landiv.style.marginTop="50px"
document.body.appendChild(landiv)

const jsdiv = document.createElement("div")
jsdiv.style.width="240px"
jsdiv.style.height="340px"
jsdiv.style.borderRadius="5px"
jsdiv.style.marginLeft="50px"
jsdiv.style.boxShadow = "10px 10px 20px 10px #ddd"
jsdiv.style.background="#FFFFFF"
landiv.appendChild(jsdiv)

const recdiv = document.createElement("div")
recdiv.style.width="240px"
recdiv.style.height="340px"
recdiv.style.borderRadius="5px"
recdiv.style.background="#FFFFFF"
recdiv.style.boxShadow = "10px 10px 20px 10px #ddd"
recdiv.style.marginLeft="50px"
landiv.appendChild(recdiv)

const modiv = document.createElement("div")
modiv.style.width="240px"
modiv.style.height="340px"
modiv.style.borderRadius="5px"
modiv.style.background="#FFFFFF"
modiv.style.boxShadow = "10px 10px 20px 10px #ddd"
modiv.style.marginLeft="50px"
landiv.appendChild(modiv)

const grdiv = document.createElement("div")
grdiv.style.width="240px"
grdiv.style.height="340px"
grdiv.style.borderRadius="5px"
grdiv.style.background="#FFFFFF"
grdiv.style.boxShadow = "10px 10px 20px 10px #ddd"
grdiv.style.marginLeft="50px"
landiv.appendChild(grdiv)

// add logo1 in languge divs
const jsimg = document.createElement("img")
jsimg.src="js.png"
jsimg.style.marginLeft="20px"
jsimg.style.marginTop="20px"
jsdiv.appendChild(jsimg)

const jh2 = document.createElement("h3")
jh2.innerHTML="Vanilla JavaScript"
jh2.style.fontFamily="Open Sans, sans-serif"
jh2.style.marginLeft="20px"
jsdiv.appendChild(jh2)

const jsp = document.createElement("p")
jsp.innerHTML="List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
jsp.style.fontFamily ="Open Sans, sans-serif"
jsp.style.color ="#757575"
jsp.style.fontSize ="14px"
jsp.style.marginLeft ="-7px"
jsp.style.paddingLeft="30px"
jsp.style.paddingRight="30px"
jsdiv.appendChild(jsp)

// add logo2 in languge divs
const recimg = document.createElement("img")
recimg.src="rec.png"
recimg.style.marginLeft="20px"
recimg.style.marginTop="20px"
recdiv.appendChild(recimg)

const rech2 = document.createElement("h3")
rech2.innerHTML="React"
rech2.style.fontFamily="Open Sans, sans-serif"
rech2.style.marginLeft="20px"
recdiv.appendChild(rech2)

const recp = document.createElement("p")
recp.innerHTML="List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
recp.style.fontFamily ="Open Sans, sans-serif"
recp.style.color ="#757575"
recp.style.fontSize ="14px"
recp.style.marginLeft ="-7px"
recp.style.paddingLeft="30px"
recp.style.paddingRight="30px"
recdiv.appendChild(recp)

// add logo3 in languge divs
const njimg = document.createElement("img")
njimg.src="nj.png"
njimg.style.marginLeft="20px"
njimg.style.marginTop="20px"
modiv.appendChild(njimg)

const njh2 = document.createElement("h3")
njh2.innerHTML="Node.js"
njh2.style.fontFamily="Open Sans, sans-serif"
njh2.style.marginLeft="20px"
modiv.appendChild(njh2)

const njsp = document.createElement("p")
njsp.innerHTML="List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
njsp.style.fontFamily ="Open Sans, sans-serif"
njsp.style.color ="#757575"
njsp.style.fontSize ="14px"
njsp.style.marginLeft ="-7px"
njsp.style.paddingLeft="30px"
njsp.style.paddingRight="30px"
modiv.appendChild(njsp)

// add logo4 in languge divs
const moimg = document.createElement("img")
moimg.src="mg.png"
moimg.style.marginLeft="20px"
moimg.style.marginTop="20px"
grdiv.appendChild(moimg)

const moh2 = document.createElement("h3")
moh2.innerHTML="MongoDB"
moh2.style.fontFamily="Open Sans, sans-serif"
moh2.style.marginLeft="20px"
grdiv.appendChild(moh2)

const mop = document.createElement("p")
mop.innerHTML="List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
mop.style.fontFamily ="Open Sans, sans-serif"
mop.style.color ="#757575"
mop.style.fontSize ="14px"
mop.style.marginLeft ="-7px"
mop.style.paddingLeft="30px"
mop.style.paddingRight="30px"
grdiv.appendChild(mop)

//add resume txt in body  
const myresume = document.createElement("h2")
myresume.innerHTML="A Summary of My Resume"
myresume.style.fontFamily ="Open Sans, sans-serif"
myresume.style.textAlign="center"
myresume.style.marginTop="50px"
document.body.appendChild(myresume)

// main resume div 
const remain = document.createElement("div")
remain.style.width="1000px"
remain.style.display="flex"
remain.style.margin="auto"
remain.style.marginTop="100px"
document.body.appendChild(remain)


// resume div $
const retxt1 = document.createElement("div")
retxt1.style.width="500px"
remain.appendChild(retxt1)

// add txt in resume div $
const reh3 = document.createElement("h3")
    reh3.innerHTML="My Education"
    reh3.style.fontFamily ="Open Sans, sans-serif"
    reh3.style.color ="#474747"
    retxt1.appendChild(reh3)

function resum1(){
    const reh4 =document.createElement("h4")
    reh4.innerHTML="Master in Computer Engineering"
    reh4.style.fontFamily ="Open Sans, sans-serif"
    retxt1.appendChild(reh4)
    
    const reh5 = document.createElement("h5")
    reh5.innerHTML='Harvard University / 2015 - 2017'
    reh5.style.color="#757575"
    retxt1.appendChild(reh5)
    
    const rep = document.createElement("p")
    rep.innerHTML="List skill/technologies here. You can change the icon aboveto any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
    rep.style.color="#757575"
    rep.style.fontFamily ="Open Sans, sans-serif"
    rep.style.fontSize ="12px"
    retxt1.appendChild(rep)
    
}

resum1()
resum1()
resum1()


// resuem div @
const retxt2 = document.createElement("div")
retxt2.style.width="500px"
remain.appendChild(retxt2)

// add txt in resume @
const reh32 = document.createElement("h3")
reh32.innerHTML="My Experience"
reh32.style.fontFamily ="Open Sans, sans-serif"
reh32.style.color ="#474747"
retxt2.appendChild(reh32)
function resuem2(experience){
    const reh42 = document.createElement("h4")
    reh42.innerHTML= experience;
    reh42.style.fontFamily ="Open Sans, sans-serif"
    retxt2.appendChild(reh42)
    
    const reh52 = document.createElement("h5")
    reh52.innerHTML='Apple Inc / 2020 - Current'
    reh52.style.color="#757575"
    retxt2.appendChild(reh52)
    
    const rep2 = document.createElement("p")
    rep2.innerHTML="List skill/technologies here. You can change the icon aboveto any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
    rep2.style.color="#757575"
    rep2.style.fontFamily ="Open Sans, sans-serif"
    rep2.style.fontSize ="12px"
    retxt2.appendChild(rep2)
}
resuem2("Sr. Font End Developer")
resuem2("Jr. Font End Developer")
resuem2("HTML Developer")

// add button in resume
const rebtn = document.createElement("button")
rebtn.style.background="#FD6E0A"
rebtn.style.height="50px"
rebtn.innerHTML="Downlode CV"
rebtn.style.width="160px"
rebtn.style.fontSize="16px"
rebtn.style.position="relative"
rebtn.style.top="50px"
rebtn.style.left="510px"
rebtn.style.color="white"
rebtn.style.marginBottom="100px"
rebtn.style.borderRadius="5px"
rebtn.style.border="none"
document.body.appendChild(rebtn)

// create a  footer 
const footer = document.createElement("footer")
footer.style.background="#FFF8F3"
footer.style.height="580px"
document.body.appendChild(footer)

// add a div for divide in footer
const fotdiv = document.createElement("div") 
fotdiv.style.width="1000px"
fotdiv.style.height="500px"
fotdiv.style.margin="auto"
fotdiv.style.display="flex"
footer.appendChild(fotdiv)

// add media in fotdiv 
const meddiv = document.createElement("div")
meddiv.style.width="500px"
meddiv.style.height="500px"
fotdiv.appendChild(meddiv)

// add text in meddiv
const meh1 = document.createElement("h1")
meh1.innerHTML="Lets Connect"
meh1.style.fontFamily ="Open Sans, sans-serif"
meh1.style.marginTop="150px"
meddiv.appendChild(meh1)

// add p in med div
const medp = document.createElement("p")
medp.innerHTML="Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday."
meddiv.appendChild(medp)

// add img in med div
const meimg = document.createElement("img")
meimg.src="med.png"
meimg.style.marginTop="20px"
meddiv.appendChild(meimg)

// add form div in footer
const formdiv = document.createElement("div")
formdiv.style.width="500px"
formdiv.style.height="500px"
fotdiv.appendChild(formdiv)

// add text in fordiv
const forh1 = document.createElement("h1")
forh1.innerHTML="Let’s Message me"
forh1.style.marginTop="150px"
forh1.style.marginLeft="50px"
forh1.style.fontFamily ="Open Sans, sans-serif"
formdiv.appendChild(forh1)

// add form in formdiv
const input = document.createElement("input")
input.placeholder="Your Name"
input.style.border="none"
input.style.width="320px"
input.style.height="40px"
input.style.marginLeft="50px"
formdiv.appendChild(input)

// add form1 in formdiv
const input1 = document.createElement("input")
input1.placeholder="Your Email"
input1.style.border="none"
input1.style.width="320px"
input1.style.height="40px"
input1.style.marginTop="20px"
input1.style.marginLeft="50px"
formdiv.appendChild(input1)

// add form1 in formdiv
const input2 = document.createElement("textarea")
input2.placeholder="Write Massege"
input2.style.border="none"
input2.style.width="320px"
input2.style.height="150px"
input2.style.marginTop="20px"
input2.style.marginLeft="50px"
formdiv.appendChild(input2)