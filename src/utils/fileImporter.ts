// Example utility for different types of file imports

// 1. Import a React component
import MyComponent from './components/MyComponent';

// 2. Import a utility function
import { formatDate, calculateAge } from './utils/helpers';

// 3. Import JSON data
import portfolioData from './data/portfolio.json';

// 4. Import CSS/SCSS files
import './styles/custom.css';

// 5. Import images (with Vite)
import profileImage from './assets/profile.jpg';

// 6. Import external libraries
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Example of how to use imported files
export const FileImportExample = () => {
  // Using imported JSON data
  const { name, skills } = portfolioData;
  
  // Using imported utility functions
  const formattedDate = formatDate(new Date());
  
  return (
    <div>
      <img src={profileImage} alt="Profile" />
      <h1>{name}</h1>
      <p>Today: {formattedDate}</p>
    </div>
  );
};

// If you want to import a file from your computer, you can:
// 1. Drag and drop it into the file explorer
// 2. Create a new file and paste the content
// 3. Use the file upload feature if available