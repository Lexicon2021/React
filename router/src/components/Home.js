import React from 'react';


const Home = () => {
    return (
        <div id="homepage">
            <header>
                <h1>Welcome to my site!</h1>
            </header>
            <main className="main-content">
                <img src="https://previews.123rf.com/images/imagerymajestic/imagerymajestic0811/imagerymajestic081100638/3825934-cool-guy-showing-hand-gesture-against-white-background.jpg" alt="cool guy"/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </main>
        </div>
    );
};

export default Home;