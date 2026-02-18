import { Container } from "@/shared/components/container";

export function HomeHero() {
    return(
        <Container className="w-full flex flex-col md:flex-row! justify-between">
            
            {/* Text Container */}
            <div className="flex flex-col gap-5 justify-center">
                <div className="flex flex-row gap-5 text-sm">
                    <p>Miami University '27</p>
                    <p>•</p>
                    <p>Front-End Developer</p>
                </div>
                <h1 className="text-7xl font-bold">Xander Reyes</h1>
                <p className="text-lg mt-2">Working on a documentation platform for 4,500+ associates Currently interning at Kroger Technology & Digital.</p>
            </div>



            {/* Image Container*/}
            <div className="h-full">
                <img className="max-w-72 rounded-full" src="/me.webp" alt="A Picture of Xander Reyes " />
            </div>
            

        </Container>
    );
}