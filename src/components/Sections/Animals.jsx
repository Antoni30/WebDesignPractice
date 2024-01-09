import AnimalsItems from "../../utils/animals.json";
import Card from "../Card";

function Animals() {

  return (
    <section id="animales">
      <h1 className="h1 text-center text-2xl">
        Animales mas Populares
      </h1>
      <div id="cards" className="flex gap-4 m-3 content_Cards_Animal">
        {
            AnimalsItems.map((item)=>{
                return <Card key={item.id} name={item.name} url={item.url}/>
            })
        }
      </div>
      <div className="fondo">
      <img
        src="https://files.worldwildlife.org/wwfcmsprod/images/peruvian_amazon_sunset_WW1103396_Day_s_Edge_Productions/story_full_width/3e6tuqnnvb_Medium_WW1103396.jpg"
        alt="fondo"
      />
    </div>
    <div className="fondo_Color"></div>
    </section>
  );
}

export default Animals;