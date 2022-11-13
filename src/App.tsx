import React from 'react';
import { AuthPage } from './pages/auth-pages';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { BookingPage } from './pages/booking/booking-page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
          <Link to={'/auth'}>Auth</Link> 
          <Link to={'/booking'}>Booking</Link> 
        </div>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
