import Project from "./Components/Projects";
import Banner from "./Components/Banner";

export default function Home(){

  return(
    <main className="background-custom">
      <div className="p-3">
        <Banner
          name="Daniele Moretti"
          description="A graduate game designer with a Bachelor of Design (Games) 
              from RMIT (Royal Melbourne Institute of Technology), 
              where I achieved Distinction and developed expertise in game design, narrative development, 
              and interactive experiences."
          image="/img/MyPic.png" />       
      </div>
      <div className="p-3">
          <Project 
            title="Tower of Steel" 
            type="Personal Solo Project" 
            role="Programmer, UI/UX Designer, Audio Designer, Gameplay Designer, Level Designer, 2D Artist"
            engine="Unity 3D - C#"
            description="Personal project made just before getting into my university project.
            This project was my first ever dive into a bigger project in Unity. With this project I learnt the basics of
            C#, animation  and game design for 2D development. This project showed me that I wanted to make games and
            that I needed to take my knowledge to the next level to be able to create the games I really wanted to make."
            image="/img/pause.png"
            gallery={[
              "/img/Rob1.png",
              "/img/Rob2.png",
              "/img/Rob3.png"
            ]} />

          <Project 
            title="Evil and the Wizard's Tower" 
            type="University Group Project" 
            role="Role: Programmer, UI/UX Designer, Audio Designer, Gameplay Designer"
            engine="Unity 3D - C#"
            description="Group project done in my last year of university."
            image="/img/Evil.png" /> 

          <Project 
            title="Infinite World" 
            type="University Solo Project" 
            role="Role: Game Designer, Game Developer"
            engine="Unity 3D - C#"
            description="Solo project that focuses on procedural generation."
            image="/img/Forest.png" /> 
      </div>
    </main>
  )
}