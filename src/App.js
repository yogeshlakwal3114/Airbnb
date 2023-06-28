import Navbar from './component/Navbar';
import './App.css';
import Main from './component/Main';
import Card from './component/Card';
import data from './data';


function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
        />
    )
})        

  return (
    <div>
      <Navbar />
      <Main />
      <section className="cards--list">
         {cards}
      </section>  
    </div>
  );
}

export default App;
