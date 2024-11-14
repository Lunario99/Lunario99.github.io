import Project from "./Components/Projects";

export default function Home(){
  return(
    <main className="background-custom">
      <h2>Daniele Moretti</h2>   
        <p>A graduate game designer with a Bachelor of Design (Games) 
            from RMIT (Royal Melbourne Institute of Technology), 
            where I achieved Distinction and developed expertise in game design, narrative development, 
            and interactive experiences.
        </p>
      <div className="p-3">
          <Project 
          title="Tower of Steel" 
          type="Personal Solo Project" 
          role="Programmer, UI/UX Designer, Audio Designer, Gameplay Designer, Level Designer, 2D Artist"
          engine="Unity 3D - C#"
          description="Personal project made just before getting into my university project."
          image="/img/pause.png" /> 

          <Project 
          title="Evil and the Wizard's Tower" 
          type="University Group Project" 
          role="Role: Programmer, UI/UX Designer, Audio Designer, Gameplay Designer"
          engine="Unity 3D - C#"
          description="Group project done in my last year of university."
          image="/img/Evil.png" /> 
      </div>
    </main>
  )
}