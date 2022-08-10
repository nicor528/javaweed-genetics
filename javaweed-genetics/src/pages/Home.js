import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import NavBar from '../components/NavBar/NavBar';
import CarouselFadeExample from '../components/Carousel/Carousel'

//
//         
function Home(){
    return(
        <div>
            <NavBar></NavBar>
            <CarouselFadeExample pading="10px" />
            <ItemListContainer></ItemListContainer>
        </div>
    )
}

export default Home;