// App.js
import './App.css'; // Importing the CSS file
import ImageCard from './components/ImageCard'; // Importing the reusable component

const App = () => {
  return (
    <div className="app-container">
      <ImageCard
        imageSrc="/images/pic.jpg" // Correct path for local image
        description="A beautiful view of nature with a scenic landscape."
        linkText="Learn More"
        linkUrl="https://example.com"
        buttonText="Click Here"
        onButtonClick={() => alert('Button clicked!')}
      />
    </div>
  );
};

export default App;
