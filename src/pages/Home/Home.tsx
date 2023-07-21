import Login from '../../components/Login/Login';
import './Home.scss';

function Home({token}: any) {
    console.log(token)

    return (
        <div className="home-container">
            {token === undefined ? <Login></Login> : 'logged'}
        </div>
    )
}

export default Home