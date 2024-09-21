import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'
import './skillwidget.css'


type SkillwidgetProps = {
    skillIcon: StaticImageData;
    skillName: string;
}




export default function Skillwidget({ skillIcon, skillName }: SkillwidgetProps) {

    
    return (
        <div className='w-52 border-r-2 border-gray-300 flex flex-col justify-center items-center'>
            <Image src={skillIcon} alt='react logo' width={100} height={100}/>
            <h1 className= 'font-bold text-2xl relative underline-animation'>{skillName}</h1>
        </div>
    )
}
