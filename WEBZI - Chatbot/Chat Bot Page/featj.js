function ai(){
	var y = document.getElementById("chat").value;
	let x = y.toLocaleLowerCase();
    document.getElementById('cr').style.display= 'none';
if (x == "hello"){
		document.getElementById("rep").innerHTML="Hi do you want any help.";
}
else if(x=="hi"){
		document.getElementById("rep").innerHTML=" Hello how have you been.";
}
else if(x == "got any creative ideas for a 10 year old's birthday"){
		document.getElementById("rep").innerHTML="Yes, here are some ideas for a 10-year-old's birthday celebration:<br><br>Outdoor Adventure: Have an outdoor adventure, such as a picnic, camping trip, or hike.<br><br></br>Crafts and DIY: Plan a craft or DIY day where the birthday child and guests can create something special to take home as a memory of the celebration.<br><br>Gaming Party: If the child is into video games, you could have a gaming party where everyone brings their favorite games to play together.<br><br>Movie and Popcorn Party: Have a movie and popcorn party, where the birthday child gets to choose their favorite movie to watch with friends.<br><br></br>Science Experiment Party: Plan a science experiment party, where the kids can participate in fun and interactive experiments.<br><br></br>Cooking or Baking Party: Plan a cooking or baking party, where the kids can make their own pizza or baked goods.<br><br></br>Sports and Active Play: If the birthday child loves sports, plan a day of sports and active play, such as a game of capture the flag or a scavenger hunt.<br><br></br>Board Game or Puzzle Party: Have a board game or puzzle party, where the birthday child and guests can enjoy playing together.<br><br></br>Remember to involve the birthday child in the planning process, and adjust the activities to their interests and abilities.";
}
else if(x == "how to impress my crush"){
		document.getElementById("rep").innerHTML=" Its not my bussiness i am just an AI and i am in development.";
}
else if(x == "tell me a pickup line"){
		document.getElementById("rep").innerHTML="Do you have a name or can i just call you 'mine'";
}
else  if(x == "pickup lines please"){
		document.getElementById("rep").innerHTML="1.Are you a bankloan because you have my interest. <br><br>2.Every class has a teacher, you're my one and only future. <br><br> 3.Are you a tower? Cause Eiffel for you. ";
}
else  if(x == ""){
		document.getElementById("rep").innerHTML="Please enter something.";
        document.getElementById('cr').style.display= 'block';
}
else if(x == "write a basic html code having css and js"){
	document.getElementById("rep").innerHTML="&lt;!DOCTYPE html&gt;<br>"+
    "&lt;html&gt;<br>"+
      "&lt;head&gt;<br>"+
        "&lt;style&gt;<br>"+
         " /* CSS styles go here */<br>"+
          ".header {<br>"+
            "background-color: lightblue;<br>"+
            "padding: 20px;<br>"+
            "text-align: center;<br>"+
          "}<br>"+
          ".content {<br>"+
           " background-color: white;<br>"+
            "padding: 20px;<br>"+
          "}<br>"+
        "&lt;/style&gt;<br>"+
      "&lt;/head&gt;<br>"+
      "&lt;body&gt;<br>"+
        "&lt;div class='header'&gt;<br>"+
          "&lt;h1&gt;<br>My Web Page&lt;/h1&gt;<br>"+
        "&lt;/div&gt;<br>"+
        "&lt;div class='content'&gt;<br>"+
          "&lt;p&gt;<br>Welcome to my web page!&lt;/p&gt;<br>"+
          "&lt;button id='button'&gt;<br>Click Me!&lt;/button&gt;<br>"+
        "&lt;/div&gt;<br>"+
        "&lt;script&gt;<br>"+
          "// JavaScript code goes here<br>"+
          "document.getElementById('button').addEventListener('click', function() {<br>"+
            "alert('Button was clicked!');<br>"+
          "});<br>"+
        "&lt;/script&gt;<br>"+
      "&lt;/body&gt;<br>"+
    "&lt;/html&gt;<br>";
}
else if(x == "what do you think humans are"){
	document.getElementById("rep").innerHTML="As a AI model, I do not have personal opinions or beliefs. However, I can provide information based on scientific and philosophical perspectives. <br><br>From a scientific perspective, humans are a species of primates known as Homo sapiens. We belong to the animal kingdom and share a common ancestry with other primates, such as chimpanzees and gorillas. Humans are characterized by advanced cognitive abilities, such as language, abstract thinking, and problem-solving skills.<br><br>From a philosophical perspective, the nature of humanity is a complex and multifaceted question that has been debated for centuries. Some believe that humans are inherently selfish, while others argue that we have a capacity for compassion and altruism. Some see us as simply biological creatures, while others view us as having a spiritual dimension.<br><br>Regardless of one's perspective, it's clear that humans are a remarkable and complex species with the ability to shape our environment, create cultures, and explore the mysteries of the universe.";
}
else if(x == "where can i go and eat"){
	document.getElementById("rep").innerHTML=" According to reviews Lee Meridean is one of the best hotels in Coimbatore.";
}
else if(x == "which movie can i see"){
	document.getElementById("rep").innerHTML=" SitaRamam is one of best love movies to watch. It is available on Netflix.";
}
else if(x == "where can i go for a trip"){
	document.getElementById("rep").innerHTML=" Ooty is a good place to chill and it is only 100kms from here.";
}
else if(x == "i love you"){
	document.getElementById("rep").innerHTML=" I Love You too ❤️❤️";
}
else if(x == "ily"){
	document.getElementById("rep").innerHTML=" I Love You too ❤️❤️";
}
else if(x == "i love u"){
	document.getElementById("rep").innerHTML=" I Love You too ❤️❤️";
}
else if(x == "i luv u"){
	document.getElementById("rep").innerHTML=" I Love You too ❤️❤️";
}
else if(x == "who is god"){
	document.getElementById("rep").innerHTML="The concept of 'God' varies greatly depending on one's religious and philosophical beliefs<br><br>But according to me who gave birth to you,that is your'Mother' and 'Father', they are the actual gods on earth.";
}
else if(x == "summarise" || x=="summarise this"){
	document.getElementById("rep").innerHTML="1.Teachers provide education and instruction to students.<br><br>"+
  "2.They play a crucial role in helping students develop knowledge, skills, and values.<br><br>"+
  "3.Teachers work in various settings such as schools, colleges, and other educational institutions.<br><br>"+
  "4.They can teach a wide range of subjects, including mathematics, science, history, language arts, etc.<br><br>"+
  "5.Teachers help students develop critical thinking skills, problem-solving abilities, and the ability to work well with others.<br><br>"+
  "6.They deliver lessons and lead discussions, evaluate students' performance, provide feedback and support, and help students set and reach their educational goals.";
  document.getElementById("chat").setAttribute("value", "");
}
else if(x == "who are teachers"){
	document.getElementById("rep").innerHTML="Teachers are individuals who provide education and instruction to students. They play a crucial role in helping students develop knowledge, skills, and values that they can use throughout their lives. Teachers can work in a variety of settings, including public and private schools, colleges and universities, and other educational institutions. They can teach a wide range of subjects, including mathematics, science, history, language arts, and many others. Teachers also help students develop critical thinking skills, problem-solving abilities, and the ability to work well with others. In addition to delivering lessons and leading discussions, teachers also evaluate students' performance, provide feedback and support, and help students set and reach their educational goals.";
}
else if(x == "what is current date and time"){
  var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

	document.getElementById("rep").innerHTML="Today's date and time: " + dateTime;
}
else if (x=="which industry will be the future"){
	document.getElementById("rep").innerHTML="Predicting which industry will be the future is difficult, as it depends on a variety of factors including technological advancements, market trends, and economic conditions. However, some industries that are likely to experience significant growth in the coming years include:"+"<br><br>"+"1.Technology: The technology industry is constantly evolving and is likely to continue to shape the future in significant ways. This includes areas such as artificial intelligence, big data, the Internet of Things (IoT), and 5G technology."+"<br><br>"+"2.Healthcare: With an aging population and advancements in medical technology, the healthcare industry is expected to continue to grow in the coming years. This includes areas such as telemedicine, personalized medicine, and medical devices."+"<br><br>"+"3.Renewable Energy: As concern over the environment and climate change continues to grow, the renewable energy industry is expected to become increasingly important. This includes areas such as solar, wind, and hydropower."+"<br><br>"+"4.E-commerce: The growth of online shopping and the increasing use of mobile devices is expected to drive continued growth in the e-commerce industry."+"<br><br>"+"5.Virtual and Augmented Reality: The increasing use of virtual and augmented reality technology is expected to drive growth in a variety of industries, including gaming, retail, and education.";
}
else if (x=="write an essay on quantum computing"){
	document.getElementById("rep").innerHTML="Quantum computing is a new and rapidly evolving field that holds the promise of revolutionizing the way we perform computational tasks. It is based on the principles of quantum mechanics, which is the study of the behavior of matter and energy at the smallest scales. Unlike classical computers, which use bits that can only be in one of two states (0 or 1), quantum computers use quantum bits, or qubits, which can be in a superposition of states. This allows quantum computers to perform many calculations in parallel, making them much faster and more powerful than classical computers.<br><br>The potential applications of quantum computing are vast and far-reaching, with the potential to solve problems in fields such as cryptography, chemistry, finance, and more. For example, quantum computers can solve problems related to factorizing large numbers, which is a crucial step in cracking encryption codes. This has important implications for cybersecurity, as it means that quantum computers could potentially break the encryption codes that protect sensitive information.<br><br>Quantum computing also has the potential to revolutionize the field of chemistry. By simulating the behavior of molecules and chemical reactions, quantum computers could help us understand complex chemical processes, such as photosynthesis, and design new drugs and materials. In finance, quantum computers could be used to solve optimization problems, such as portfolio optimization, and perform risk assessments.<br><br>Despite its potential, quantum computing is still in its early stages of development, and there are many technical challenges that must be overcome before quantum computers can become a practical reality. One of the main challenges is the fragility of qubits, which are extremely sensitive to their environment and can easily be disturbed by noise or interference. Another challenge is the difficulty of controlling and manipulating qubits, as well as the lack of scalability in current quantum computing systems.<br><br>Despite these challenges, there has been significant progress in the field of quantum computing in recent years, with new breakthroughs in hardware and software. Major tech companies, such as Google, IBM, and Microsoft, have invested heavily in the development of quantum computing, and are working to develop practical and scalable quantum computing systems.<br><br>In conclusion, quantum computing is a field with vast potential, with the potential to revolutionize the way we perform computational tasks. While there are still many technical challenges to be overcome, the progress made in recent years gives us reason to be optimistic about the future of quantum computing. With continued investment and development, we can expect to see quantum computers becoming a practical reality in the near future, with the potential to solve problems that are currently beyond the reach of classical computers.";
}

else{
	document.getElementById("rep").innerHTML="According to google "+ x +" is:" ;

	setTimeout(timed,1500);
	function timed(){
		window.open('http://google.com/search?q='+x);
	}  
}
document.getElementById("chat").setAttribute("value", "");
}
function pick(){
	document.getElementById("chat").setAttribute("value", "write an essay on quantum computing");
	document.getElementById('cr').style.display= 'none';
	document.getElementById("rep").innerHTML="";
}
function joke(){
	document.getElementById("chat").setAttribute("value", "which industry will be the future");
	document.getElementById('cr').style.display= 'none';
	document.getElementById("rep").innerHTML="";
}
function sir(){
	document.getElementById("chat").setAttribute("value", "what do you think humans are");
	document.getElementById('cr').style.display= 'none';
	document.getElementById("rep").innerHTML="";
}
function got(){
	document.getElementById("chat").setAttribute("value", "got any creative ideas for a 10 year old's birthday");
	document.getElementById('cr').style.display= 'none';
	document.getElementById("rep").innerHTML="";
}
function code(){
	document.getElementById("chat").setAttribute("value", "write a basic html code having css and js");
	document.getElementById('cr').style.display= 'none';
	document.getElementById("rep").innerHTML="";
}
function trip(){
	document.getElementById("chat").setAttribute("value", "where can i go for a trip");
	document.getElementById('cr').style.display= 'none';
	document.getElementById("rep").innerHTML="";
}
function time(){
	document.getElementById("chat").setAttribute("value", "what is current date and time");
	document.getElementById('cr').style.display= 'none';
	document.getElementById("rep").innerHTML="";
}
function teach(){
	document.getElementById("chat").setAttribute("value", "who are teachers");
	document.getElementById('cr').style.display= 'none';
	document.getElementById("rep").innerHTML="";
}
function god(){
	document.getElementById("chat").setAttribute("value", "who is god");
	document.getElementById('cr').style.display= 'none';
	document.getElementById("rep").innerHTML="";
}