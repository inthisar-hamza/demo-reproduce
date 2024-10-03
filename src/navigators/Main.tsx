import React from "react";
import { Alert, Text, Dimensions, useColorScheme, View } from "react-native";
//
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const HomeScreenWrapper = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
    </View>
  );
};

const CategoriesScreenWrapper = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Category</Text>
    </View>
  );
};

const ExpensesScreenWrapper = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Records</Text>
    </View>
  );
};

const SummaryWrapper = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Summary</Text>
    </View>
  );
};

const AccountWrapper = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Account</Text>
    </View>
  );
};

const MainNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        freezeOnBlur: true,
      }}
      /* backBehavior="history" */
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenWrapper}
        options={{
          headerShown: false,
          freezeOnBlur: true,
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                fontSize: 14,
                color: colorScheme == "dark" ? color : color,
                paddingBottom: 3,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="My Categories"
        component={CategoriesScreenWrapper}
        options={{
          headerShown: false,
          freezeOnBlur: true,
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                fontSize: 14,
                color: colorScheme == "dark" ? color : color,
                paddingBottom: 3,
              }}
            >
              Categories
            </Text>
          ),
          
        }}
      />

      <Tab.Screen
        name="Expenses"
        component={ExpensesScreenWrapper}
        options={{
          headerShown: false,
          freezeOnBlur: true,
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                fontSize: 14,
                color: colorScheme == "dark" ? color : color,
                paddingBottom: 3,
              }}
            >
              Records
            </Text>
          ),
          
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={SummaryWrapper}
        options={{
          headerShown: false,
          freezeOnBlur: true,
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                fontSize: 14,
                color: colorScheme == "dark" ? color : color,
                paddingBottom: 3,
              }}
            >
              Overview
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountWrapper}
        options={{
          headerShown: false,
          lazy: false,
          freezeOnBlur: true,
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                fontSize: 14,
                color: colorScheme == "dark" ? color : color,
                paddingBottom: 3,
              }}
            >
              Account
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
