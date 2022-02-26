import './App.css'
import CarouselBootstrap from './components/CarouselBootstrap/CarouselBootstrap'
import Navigation from './components/Navigation/Navigation'
import ResultsTable from './components/ResultsTable/ResultsTable'
import Footer from './components/Footer/Footer'
import Leaderboard from './components/Leaderboard/Leaderboard'
import CarouselSponsors from './components/CarouselSponsors/CarouselSponsors'
import TeamLogos from './components/TeamLogos/TeamLogos'

function App() {

  return (
    <>
      <Navigation />
      <CarouselBootstrap />
      <TeamLogos />
      <ResultsTable />
      <Leaderboard />
      <CarouselSponsors />
      <Footer />
    </>
  )
}

export default App