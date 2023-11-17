import { CustomLabel } from "./CustomLabel"


function App() {

      

  return (
    <div className="flex items-center h-screen">
        <div className="m-auto flex flex-col border-2 gap-3 border-black bg-blue-300 p-10 rounded-2xl">
            <CustomLabel label={"Пароль: "} />
            <CustomLabel label={"Логин: "} />
             
            <button onClick={() => console.log("Нажато!")} className="border w-min m-auto px-5 py-1">Auth</button>
        </div>
    </div>
  )
}

export default App
