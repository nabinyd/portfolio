import Image from "next/image";
import reactlogo from "@/app/skilllogo/react-logo.png";
import nodelogo from "@/app/skilllogo/nodejs-logo.png";
import clogo from "@/app/skilllogo/c-logo.png";
import cpplogo from "@/app/skilllogo/c++-logo.png";
import htmllogo from "@/app/skilllogo/html-logo.png";
import csslogo from "@/app/skilllogo/css-logo.png";
import tailwindlogo from "@/app/skilllogo/tailwind-logo.png";
import jslogo from "@/app/skilllogo/javascript.png";
import dartlogo from "@/app/skilllogo/dart-logo.png";
import flutterlogo from "@/app/skilllogo/flutter-logo.png";
import pylogo from "@/app/skilllogo/python-logo.png";
import figmalogo from "@/app/skilllogo/figma-logo.png";
import pslogo from "@/app/skilllogo/photoshop-logo.png";
import pytorchlogo from "@/app/skilllogo/pytorch-logo.png";
import gitlogo from "@/app/skilllogo/git.png";
import githublogo from "@/app/skilllogo/github-logo.png";
import mysqllogo from "@/app/skilllogo/mysql-logo.png";

const logos = [
    reactlogo, nodelogo, clogo, cpplogo, htmllogo, csslogo, tailwindlogo, jslogo, dartlogo, flutterlogo, pylogo, figmalogo, pslogo, pytorchlogo, gitlogo, githublogo,  mysqllogo
];


export default function LogoSlider() {
    return (
        <div className="overflow-hidden w-full bg-gray-100">
            <div className="flex animate-scroll whitespace-nowrap">
                {logos.concat(logos).map((logo, index) => (
                    <div key={index} className="inline-block flex-shrink-0 w-40 h-40 p-4">
                        <Image
                            src={logo}
                            alt={`Logo ${index}`}
                            width={100}
                            height={100}
                            className="object-contain w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}