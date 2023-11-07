import React from 'react';
import { Menu, Switch } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useAppContext } from '../contexts/AppContext'; // Importa useAppContext con la ruta correcta

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useAppContext(); // Utiliza el contexto para acceder al modo oscuro y la función
console.log(isDarkMode)
  return (
    <Menu theme={isDarkMode ? 'dark' : 'light'} mode="horizontal" defaultSelectedKeys={['home']}>
      {/* Resto del código del Navbar */}
      <Menu.Item key="darkmode">
        <Switch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          checkedChildren={<EyeOutlined />}
          unCheckedChildren={<EyeInvisibleOutlined />}
        />
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;



