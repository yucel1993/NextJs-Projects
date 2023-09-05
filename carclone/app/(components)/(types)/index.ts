import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }
  


export interface SearchManufacturerProps{

    manufacturer:string;
    setManufacturer:(manufacturer:string)=>void
    btnType:"button" |"submit";
    handleClick:
    MouseEventHandler<HTMLButtonElement>,
}

export interface CarProps{

    city_mpg:number
    class:string
    combination_mpg:number
    cylinders:number
    displacement:number
    drive:string
    fuel_type:string
    highway_mpg:number
    make:string
    model:string
    transmission:string
    year:number
   
}


export interface FilterProps {
    manufacturer:string
    model:number
    fuel:string
    limit:number
    year:string

}

export interface OptionProps {
    title:string
    value:string
}

export  interface CustomFilterProps {

    title:string
    options:OptionProps[]

}

export interface ShowMoreProps {
    pageNumber:number
    isNext:boolean
}