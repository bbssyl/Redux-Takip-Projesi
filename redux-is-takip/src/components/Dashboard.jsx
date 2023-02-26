import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../slices/employeesSlice";
import Card from "./Card";
import EmployesTopList from "../components/Employees/EmployeesTopList";
import JobsTopList from "./JobsTopList";
import { fetchProducts } from "../slices/productsSlice";

const Dashboard = () => {
  const employees = useSelector((state) => state.employee.employees);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="row g-4 mb-3">
        <Card
          title={"Personel (Toplam)"}
          count={employees && employees.length > 0 ? employees.length : 0}
          icon={""}
        />
        <Card
          title={"Ürünler (Toplam)"}
          count={products?.length > 0 ? products.length : 0}
        />
        <Card title={"Bekleyen İş"} count={""} />
        <Card title={"Bitirilen İş (Toplam)"} count={""} />
      </div>
      <div className="row g-4">
        <div className="col-md-6 rounded">
          <div className="card">
            <div className="card-header p-3 text-center fw-bolder text-primary">
              En iyi 5 Personel
            </div>
            <EmployesTopList />
          </div>
        </div>
        <div className="col-md-6 rounded">
          <div className="card">
            <div className="card-header p-3 text-center fw-bolder text-primary">
              Son 5 Görev
            </div>
            <JobsTopList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
