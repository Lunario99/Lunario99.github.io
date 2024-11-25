import Project from "./Components/Projects";
import Intro from "./Components/Intro";

export default function Home() {
  return (
    <main className="background-custom">
      <div className="container">
        <div className="p-2">
          <Intro
            name="Dan"
            description="A graduate game designer with a Bachelor of Design (Games) 
              from RMIT (Royal Melbourne Institute of Technology), 
              where I achieved Distinction and developed expertise in game design, narrative development, 
              and interactive experiences."
            image="./img/MyPic.png"
          />
        </div>
        <div className="p-2">
          <h1 className="text-center mb-2 text-6xl pb-3">
            <span>Highligts</span>
          </h1>
          <Project
            title="Tower of Steel"
            type="Personal Solo Project"
            role="Programmer, UI/UX Designer, Audio Designer, Gameplay Designer, Level Designer, 2D Artist"
            engine="Unity 3D - C#"
            description="Personal project made just before getting into my university project.
            This project was my first ever dive into a bigger project in Unity. With this project I learnt the basics of
            C#, animation  and game design for 2D development. This project showed me that I wanted to make games and
            that I needed to take my knowledge to the next level to be able to create the games I really wanted to make."
            gallery={[
              "./img/TOS/Rob1.png",
              "./img/TOS/Rob2.png",
              "./img/TOS/Rob3.png",
              "./img/TOS/Pause.png",
            ]}
          />

          <Project
            title="Evil and the Wizard's Tower"
            type="University Group Project"
            role="Programmer, UI/UX Designer, Audio Designer, Gameplay Designer"
            engine="Unity 3D - C#"
            description="Group project done in my last year of university. This project thought me
            what it means to work as a team and to share a goal. I am a meticulus person and I
            tend to do everything myself but, with this project, considering the deadlines and
            the ammount of work to do I had to take my cooperation skills to the next level to be 
            able achieve the final goal for the whole group."
            gallery={[
              "./img/Evil/Evil.png",
              "./img/Evil/EvilMenu.png",
              "./img/Evil/Evil2.png",
            ]}
          />

          <Project
            title="Infinite World"
            type="University Solo Project"
            role="Game Designer, Game Developer"
            engine="Unity 3D - C#"
            description="Solo project that focuses on procedural generation. With this project I tried
            to push my programming skills at the time by making a completely precedural and auto generated
            level using unity prefabs and also generating meshes."
            gallery={["./img/Forest.png"]}
          />
          <Project
            title="Game a Week Compilation"
            type="University Weekly Solo Projects"
            role="Game Designer, Game Developer"
            engine="Unity 3D - C#"
            description="Weekly solo projects for university class."
            gallery={[
              "./img/Compilation/CompMainMenu.png",
              "./img/Compilation/Elevator.png",
              "./img/Compilation/GetItThere.png",
              "./img/Compilation/SeeThrough.png",
              "./img/Compilation/SleepFall.png",
              "./img/Compilation/TheRainGame.png",
            ]}
          />
        </div>
      </div>
    </main>
  );
}
