import "./Card.css"
const Card = () => {
    const hallo =()=>{
        console.log("Ik ben kaartje één");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Eerste kaart</h2>
            </header><section>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, magnam! Nihil neque, quis ab nostrum delectus alias perspiciatis soluta mollitia quibusdam repudiandae ipsa sed at earum sapiente necessitatibus, aliquam pariatur.</section></article>
            
    );
}
export default Card;