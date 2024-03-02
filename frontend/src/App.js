import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage.js';
import AccountPage from './pages/AccountPage.js';
import SearchPage from './pages/SearchPage.js';
import MyPage from './pages/MyPage.js';



function App() {


  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}></Route>
          </Routes>
          <Routes>
            <Route path="/login" element={<AccountPage/>}></Route>
          </Routes>
          <Routes>
            <Route path="/mypage" element={<MyPage/>}></Route>
          </Routes>
          <Routes>
            <Route path="/search" element={<SearchPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );


}

export default App;
