import {Route, Routes} from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import NavBar from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import PrivateRoute from './route/PrivateRoute';

//1-1. 전체상품, 로그인, 상품상세 페이지 생성.
//1-2. 네비게이션 바 작업.
//2. 전체 상품페이지에서는 전제상품 리스트를 볼 수 있다.
//3-1. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//3-2. 상품상세를 눌렀으나, 로그인이 안되어있을 경우에는 로그인페이지가 먼저 나온다.
//4. 로그인이 되어있을 경우에는 상품상세 페이지를 볼 수 있다.
//5-1. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//5-2. 로그아웃이 되면 상품상세 페이지를 볼 수 없고, 로그인페이지를 보여준다.
//6. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
//7. 상품을 검색할 수 있다.

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log('isLoggedIn?', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/products/:id' element={<PrivateRoute isLoggedIn={isLoggedIn} />} />
      </Routes>
    </>
  );
};

export default App;
