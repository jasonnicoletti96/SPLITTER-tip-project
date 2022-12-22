import React, { useEffect } from "react";
interface InputComponentProps{
    label: string;
    img: string;
    name: string;
    type: string;
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const InputComponent = (props: InputComponentProps) => {
    
    const { label, name, type, value, onChange, img } = props;
    useEffect(() => {
        if(isNaN(value) &&label==="people"){
            document.querySelector("."+label)?.classList.add("border-[red]");
        }else{
            document.querySelector("."+label)?.classList.remove("border-[red]");
        }
    }, [value])
            
            
    return (
        <div className={"input-component "+ label}>
            <label htmlFor={name} className="">{label}</label>
            <div className="input relative flex items-center">
                <img src={img} alt="logo" className="absolute left-4" />
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full mt-1 bg-[hsl(180,22%,90%)] text-[24px] text-right rounded-lg outline-none border-2 border-transparent focus:border-[hsl(172,67%,45%)] pr-5 pl-12 appearance-none	 "
                />
            </div>
        </div>
    );
};

export default InputComponent;