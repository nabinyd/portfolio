import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'
import './skillwidget.css'


type SkillwidgetProps = {
    skillIcon: StaticImageData;
    skillName: string;
}




export default function Skillwidget({ skillIcon, skillName }: SkillwidgetProps) {

    
    return (
        <div className='w-fit mx-auto border-b-2 sm:border-b-0 sm:border-r-2 border-gray-300 flex flex-col justify-between items-center p-2'>
            <Image src={skillIcon} alt='react logo' width={100} height={100}/>
            <h1 className= 'font-bold text-2xl relative underline-animation'>{skillName}</h1>
        </div>
    )
}
