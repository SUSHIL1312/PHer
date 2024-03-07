var i = 0;

var message = `<Hi Monika....!! << Apologies, as this text is going to be little long but it contains my deepest feelings & What could be better day  
other than Maha Shivratri, the day Bhagwaan Shiva got his Parvati,  <to express my genuine Feeling to you ... << so please please please do read it completely 
with your beautiful smile.<<


It's been three months since we first met & ever since I knew you, day by day I have liked you more & <have fallen for you and believe me this feeling is very 
very special as you are the <first and only girl of my life  whom< I can call my Princess... <<Your presence brightens my days, and you're 
always on my mind ,thinking how are you doing... << "Abb mujhe raat dinn tmhara hi khayal hai, kya karu pyaar me diwaano jaisa haal hai." << I know that things are 
little hard for you as you have your upcoming exams.<< I genuinely pray to God that you succeed and achieve your dreams.
< I want to be with you in every moment of life ... <<

The time we spend together, are the  most beautiful memory to me, <I remember how cute you were looking.<<

I know ki main Thora Jyada emotional ho raha hoon but main kya karo...<I have feelings for you...<I started to care and love you 
wo v bahut jada.... << I was really Sad when you told me you are going home for a long  time , thinking When will I meet you again... <<



I really miss you princess....< I will never become the reason for your sadness or tear for that I promise...<<

Be my second mother and I will bring the whole world for you that will be in my possession...<<

I understand that telling things virtually seems superficial sometimes, but believe me< I wanted to say it in person looking
into your beautiful eyes. <<
Either time didn't allow it or I didn't gather the courage to say it not because I am shy but rather I respect your modesty.....<<

I have heard “Falling in love is the most beautiful experience of life ” and I want to be that person who loves you the most througout my life.<<

I am thankful to god for letting u come in my life. <I love my family most and I want you to be in that family. <
After my mom you are the only girl whom I love most and by Gods grace the next girl whom <I will love is the 
one who will call you mom.<<

The only thing which I want between us is unconditional love and support for each other.<I want a relationship which last forever....<< I want the bond and love between us grow deeper by the passing days.
<I know the thing which makes any Relation strong is Communication, Mutual Trust, Understanding & Support for each other.<<
I waited for someone special to come in my life & that’s you Sweety !! <<
You are a most special Girl to me, jisse mai Bhagwaan se mangta hu!!  <
<<
    
In the end,I simply wish to convey my feelings.<< " I love you a lot." <<
I'm not seeking an immediate response, but I'll patiently wait it for eternity...<<

I will love to hear that from you..<< Beautiful Girl !! <<


(Please,Scroll up for next page..)

|  `;




var typingSpeed = 10; // Decreased typing speed
typeWriter();

function typeWriter() {
    if (i < message.length) {
        if (message.charAt(i) == "<")
            document.getElementById("text1").innerHTML += "</br>";
        else if (message.charAt(i) == ">")
            document.getElementById("text1").innerHTML = "";
        else if (message.charAt(i) == "|") {
            $(".bg_heart").css("background-image", "url('https://i.postimg.cc/w3Kj72ZJ/rose-3407234-1280.jpg')");
            document.getElementById("thisWayButton").style.display = "block";
        } else document.getElementById("text1").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}

function redirectToYesPlease() {
    window.location.href = "p2.html";
}

// Check if the content height exceeds viewport height
function checkScroll() {
    var contentHeight = document.body.scrollHeight;
    var viewportHeight = window.innerHeight;
    if (contentHeight > viewportHeight) {
        document.getElementById("thisWayButton").style.display = "block";
    } else {
        document.getElementById("thisWayButton").style.display = "none";
    }
}

// Call the checkScroll function when the page loads and when it's resized
window.onload = checkScroll;
window.onresize = checkScroll;
