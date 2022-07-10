import tools from '../../../assets/team/tools.jpg';

const NewArival = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{backgroundImage: `url(${tools})`, height:'auto', width:'100%'}} >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Hello, Good news!! Good news!!</h1>
            <h1 className="mb-5 text-2xl font-bold">New Arival</h1>
            <p className="mb-5">Check out our new arrivals, these are either on the way to us or have just landed in store. Sort by popularity, Sort by latest ...
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArival;
