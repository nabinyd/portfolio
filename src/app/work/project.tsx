import Projectcard from "./projectcard"
import blackbook from '@/assets/blackbook-image.png'
import guesstheboximage from '@/assets/Guess-the-box.png'
import foodvisionmini from '@/assets/foodvision-mini.png'
import foodvisionbig from '@/assets/foodvision-big.png'
import storemanagement from '@/assets/store-management-system.png'

export default function Project() {
    return (
        <div className="w-5/6 mx-auto grid grid-cols-2">
            <Projectcard
                title="Blackbook: A project collection platform"
                description="Blackbook is a comprehensive archive showcasing final-year bachelor projects, hackathon creations, and standout works from academic and professional events. It serves as a hub where these projects can be shared, discovered, and appreciated by a global community. Every project, no matter the scale, holds immense value and the potential to inspire others."
                image={blackbook}
                technologies={['React', 'Tailwind CSS', 'Node.js', 'Firebase']}
                github="https://github.com/nabinyd/blackbook-web"
                link="https://blackbook-eight.vercel.app"
            />
            <Projectcard
                title="Guess the box"
                description="Guess the box is a simple game where you have to guess the correct box containing the prize. The game is built using flutter, dart, firebase"
                image={guesstheboximage}
                technologies={['Flutter', 'Dart', 'Firebase']}
                github=""
                link="https://play.google.com/store/apps/details?id=com.guessthebox.app&pcampaignid=web_share"
            />
            <Projectcard
                title="FoodVision Mini Model"
                description="FoodVision Mini model is likely a smaller-scale version of a deep learning model aimed at classifying images of food, similar to models used for computer vision tasks. Typically built using a convolutional neural network (CNN),  FoodVision Mini model is trained on a dataset containing various food categories, allowing it to identify and classify different food items based on images."
                image={foodvisionmini}
                technologies={[ 'Python', 'Pytorch', 'Huggingface Spaces']}
                github="https://github.com/nabinyd/60-Days-of-learning"
                link="https://huggingface.co/spaces/nabinyd/foodvision_mini"
            />
            <Projectcard
                title="FoodVision Big Model"
                description="FoodVision Big model is likely a larger-scale version of a deep learning model aimed at classifying images of food trained on Food 101 dataset containing various food categoris. Typically built using a convolutional neural network (CNN),  allowing it to identify and classify different food items based on images."
                image={foodvisionbig}
                technologies={['Python', 'Pytorch', 'Huggingface Spaces']}
                github="https://github.com/nabinyd/60-Days-of-learning"
                link="https://huggingface.co/spaces/nabinyd/foodvision_big"
            />
            <Projectcard
                title="Store Management System"
                description="Store Management System is a simple web application that helps store owners to manage their store. The application is built using PHP, MySQL, HTML, CSS, and JavaScript."
                image={storemanagement}
                technologies={['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']}
                github="https://github.com/nabinyd/store_management_system"
                link="https://github.com/nabinyd/store_management_system"
            />


        </div>
    )
}
