import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M HOME',
    'Sale',
    '지속가능성'
  ];

  const navigate = useNavigate();

  const search = (event) => {
    if(event.key === 'Enter') {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      {isLoggedIn
        ? <div className='login-button' onClick={() => {
          navigate('/login');
          setIsLoggedIn(false);
        }}>
          <FontAwesomeIcon icon={faUser} />
          <span>로그아웃</span>
        </div>
        : <div className='login-button' onClick={() => navigate('/login')}>
          <FontAwesomeIcon icon={faUser} />
          <span>로그인</span>
        </div>
      }
      <div className='logo' onClick={() => navigate('/')}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' alt='Logo' />
      </div>
      <div className='menuArea'>
        <div className='menu'>
          <ul className='menuList'>
            {
              menuList.map((menu, idx) => <li key={idx}>{menu}</li>)
            }
          </ul>
        </div>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyDown={event => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
