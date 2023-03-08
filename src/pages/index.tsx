import Head from 'next/head'
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Head>
        <title>SAI CHARAN BODDA</title>
      </Head>

      <main>
      <h1 >Hey Hi, I am</h1>
      <a href="http://bscharan.com"> <img src="/Logo.png"></img></a>
      <h1> Welcome' to my digital space.</h1>
      <h2 ></h2>
      <h3>
          Well, There are lots of easter eggs hidden in this site for you to find.
          <br />happy Exploring! 
      </h3>
      <h3 >Note:If you are here to professionally help me with my career move to
                Resume/about Sections
                <br />If You here for Fun, There are lot of easter eggs hidden
                <br /> happy Exploring !
                <br /> <b>Example:</b>one of the Quote is an active link,
      </h3>
      <div id="welcome_links">
        <table>
            <tbody>
                <td ><a href="./Sources/blog.html">My Space</a></td>
                  <td ><a href="./Sources/resume.html">Resume</a></td>
                  <td ><a href="./Sources/projects.html">Works</a></td> 
                  <td ><a href="./Sources/about.html">About</a></td> 
                <td ><a href="./Sources/contactme.html">Contact</a></td>
            </tbody>
        </table>
      </div>
      <h3>
          you can report issues if you find any at <a href=""> bscharan1729@gmail.com</a>
          <br />
      </h3>
      <div>
        <img src="/CHQuote.png" ></img>
        <h3>
            There is no enough time to make all the things i want the<a href="https://docs.google.com/document/d/1dmSixLSognXm6lWpv1hTmiAVKb51kGFVK8T-rTPMTKM/edit?usp=sharing"> internet to have</a> .<br />
            hoping one of you will work on them are make our internet little more beautiful <br />
        </h3>
      </div>
      </main>
    </div>
  )
}
