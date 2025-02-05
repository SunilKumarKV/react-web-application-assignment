import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import UserDataForm from '../components/UserDataForm';
import RichTextEditor from '../components/RichTextEditor';
import ChartComponent from '../components/ChartComponent';

const HomePage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark-mode', newMode); // Toggle dark mode class
      return newMode;
    });
  };

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    chartData: [
      { name: 'January', value: 50 },
      { name: 'February', value: 75 },
      { name: 'March', value: 100 },
      { name: 'April', value: 40 },
      { name: 'May', value: 65 },
    ],
  });

  // Function to update user data
  const handleUserDataUpdate = (newUserData: any) => {
    const updatedData = { ...newUserData, chartData: newUserData.chartData || userData.chartData };
    setUserData(updatedData);
    
    // Save updated data to localStorage
    localStorage.setItem('userData', JSON.stringify(updatedData));
  };

  return (
    <div className="container">
      <header className="flex-between">
        <div className="logo">
          <h1 className="animate-fade">React Assignment Project</h1>
        </div>
        <nav>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/dashboard" className="btn">Dashboard</Link>
          <button onClick={toggleDarkMode} className="btn">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>

      <main>
        <div className="main-grid">
          <div className="grid-item">
            <Counter />
          </div>
          <div className="grid-item">
            <RichTextEditor />
          </div>
          <div className="grid-item">
            <UserDataForm onUpdate={handleUserDataUpdate} />
          </div>
          <div className="grid-item">
            <ChartComponent chartData={userData.chartData} />
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 React Assignment Project</p>
      </footer>
    </div>
  );
};

export default HomePage;
