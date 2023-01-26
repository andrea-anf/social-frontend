import Header from "../components/Header"
import PostList from "../components/Post/post-list"

function Home(params) {
    return (
        <div>
            <Header/>
            <div className="home-body">
                <div className="categories">
                    categories
                </div>
                <PostList></PostList>
                <div className="ads">
                    ads
                </div>
            </div>
        </div>
    )
}

export default Home