import extraLogo from './ExTra.png';
export const Card=({label,text,link}:any)=>{
    return <div className="flex flex-col items-center bg-stone-800 border border-stone-600 rounded-lg shadow md:flex-row md:max-w-xl transition-all duration-200 hover:bg-stone-900 hover:border-cyan-300 hover:shadow-cyan-400 hover:-translate-y-1 cursor-pointer">
    <img className="object-cover w-fit rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={link? link :extraLogo} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{label}</h5>
        <p className="mb-3 font-normal text-0.5xl text-gray-300">{text}</p>
    </div>
</div>
}

