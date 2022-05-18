import logo from './logo.svg';
import './App.css';

function App() {
  return (
  
    <div className="flex justify-center bg-green-400 items-center	h-screen" >
        <div className="bg-slate-800 p-12	rounded-lg">
            <div className="p-4	text-7xl text-white	mb-20"> Wlc to TailwindCSS</div> 
            
            <form className="flex flex-col text-white">
                <input className="bg-slate-200	text-black w-96 m-3	p-4 ml-40 text-lg" type="text" placeholder="Username"/>
                <input className="bg-slate-200	text-black w-96 m-3	p-4	ml-40 text-lg" type="password" placeholder="Password"/>
            </form>
             <button type="button" className="bg-white text-black ml-80 p-4 pl-5 rounded-full	hover:bg-sky-700 text-lg mt-5" >Login!</button>

    
        </div>
    </div>
    

  );
}

export default App;
