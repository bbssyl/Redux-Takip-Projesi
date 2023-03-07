import { useSelector } from "react-redux";
import { AiFillWarning } from "react-icons/ai";

const EmployeesTopList = () => {
  const employees = useSelector((state) => state.employee.employees);

  return (
    <div className="shadow-sm shadow-gray-400 rounded-lg p-2">
      <div className="text-blue-500 p-4 ">En iyi 5 Personel</div>
      {employees?.length > 0 ? (
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row">
              <div className="table-cell font-bold">Personel</div>
              <div className="table-cell font-bold text-center">Puan</div>
              <div className="table-cell font-bold text-center">Telefon</div>
            </div>
          </div>
          <div className="table-row-group">
            {employees?.map((employee) => (
              <div className="table-row" key={employee.id}>
                <div className="table-cell">
                  {employee.employeeFirstName} {employee.employeeLastName}
                </div>
                <div className="table-cell text-center">0</div>
                <div className="table-cell text-center">
                  {employee.employeePhone}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-yellow-700 bg-yellow-200 p-4 rounded-lg flex flex-row items-center gap-2">
          <AiFillWarning size={"2rem"} />
          <span>
            Şirkette çalışan personel bulunmamaktadır. Lütfen personel sekmesine
            giderek yeni personel ekleyin
          </span>
        </div>
      )}
    </div>
  );
};

export default EmployeesTopList;
