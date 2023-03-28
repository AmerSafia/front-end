import { createBrowserRouter } from "react-router-dom";
import Blank from "../layout/Blank.tsx";
import Default from "../layout/Default.tsx";
import AccessoriesType from "../pages/Accessories/AccessoriesType";
import AccessoriesStore from "../pages/Accessories/AccessoriesStore";
import Brand from "../pages/Brand";
import CardType from "../pages/Card/CardType";
import CardStore from "../pages/Card/CardStore";
import CardValue from "../pages/Card/CardValue";
import DailySales from "../pages/DailySales";
import Distributors from "../pages/Distributors";
import Employees from "../pages/HR/Employees";
import ExpenseType from "../pages/expense/ExpenseType";
import Home from "../pages/Home";
import MobileModel from "../pages/Mobiles/MobileModel";
import MobileStore from "../pages/Mobiles/MobileStore";
import SignIn from "../pages/SignIn";
import Users from "../pages/Users";
import Expenses from "../pages/expense/Expenses";
import Salary from "../pages/HR/Salary";
import SalaryPayment from "../pages/HR/SalaryPayment";

const routes = [
  {
    path: "/",
    element: <Blank />,

    children: [
      {
        path: "/",
        // Single route in lazy file
        element: <SignIn />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Default />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "mobile",
        children: [
          {
            path: "model",
            element: <MobileModel />,
          },

          {
            path: "store",
            element: <MobileStore />,
          },
        ]
      },
      {
        path: "accessories",
        children: [
          {
            path: "type",
            element: <AccessoriesType />,
          },
          {
            path: "store",
            element: <AccessoriesStore />,
          },
        ]
      },
      {
        path: 'card',
        children: [
          {
            path: "type",
            element: <CardType />,
          },
          {
            path: "store",
            element: <CardStore />,
          },
          {
            path: "value",
            element: <CardValue />,
          },
        ]
      },
      {
        path: "expense",
        children: [
          {
            path: "type",
            element: <ExpenseType />,
          },
          {
            path: "expenses",
            element: <Expenses />,
          },
        ]
      },
      {
        path: "hr",
        children: [
          {
            path: "salary",
            element: <Salary />,
          },
          {
            path: "salary/payment",
            element: <SalaryPayment />,
          },
          {
            path: "employees",
            element: <Employees />,
          },
        ]
      },
      {
        path: "brand",
        element: <Brand />,
      },
      {
        path: "daily-sales",
        element: <DailySales />,
      },

      {
        path: "distributors",
        element: <Distributors />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
