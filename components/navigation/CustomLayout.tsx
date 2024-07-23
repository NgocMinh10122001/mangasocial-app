// CustomLayout.tsx
import React, { ReactNode } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  return (
    <Tab.Navigator>
      {React.Children.map(children, (child) => {
        // Here you can add any custom handling for children if needed
        return child;
      })}
    </Tab.Navigator>
  );
};

export default CustomLayout;
