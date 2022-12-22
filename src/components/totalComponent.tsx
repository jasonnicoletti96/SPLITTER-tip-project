import image from '../images/icon-dollar.svg';

interface TotalComponentProps {
    total: number;
    typeTip: string;
}
const TotalComponent = ({total, typeTip}:TotalComponentProps) => {
    return<div className="w-full flex justify-between items-center mb-4">
        <div>
            <div className="">{typeTip}</div>
            <div>/ person</div>
        </div>
        <div className="text-[hsl(172,67%,45%)] text-[40px]">${total.toFixed(2)}</div>
    </div>
    
}


export default TotalComponent;