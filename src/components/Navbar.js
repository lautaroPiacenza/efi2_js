import React from 'react';
import { Menu, Switch } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useAppContext } from '../contexts/AppContext'; // Importa useAppContext con la ruta correcta

function Navbar() {
  const { user, isDarkMode, toggleDarkMode, logout} = useAppContext(); // Utiliza el contexto para acceder al modo oscuro y la función
console.log(user)
const handleOnClick =({ item, key, keyPath, domEvent }) => {
  if (key === "logout" ){
    logout()
  }
  console.log(item, key, keyPath, domEvent);
}
  return (
    <Menu 
      theme={isDarkMode ? 'dark' : 'light'} 
      mode="horizontal"
      defaultSelectedKeys={['home']}
      onClick={handleOnClick}
    >
      {/* Resto del código del Navbar */}
      <Menu.Item key="darkmode">
        <Switch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          checkedChildren={<EyeOutlined />}
          unCheckedChildren={<EyeInvisibleOutlined />}
        />
        {user}

      </Menu.Item>
      {user && (
        <Menu.Item key="logout">
          Logout
        </Menu.Item>
      )}
    </Menu>
  );
}

export default Navbar;



