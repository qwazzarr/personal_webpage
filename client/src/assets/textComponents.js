import WordInteractive from "../components/wordInteractive"


export default {

    screens : {
        
        
            projects : {
                unipays : {
                    photo: "unipays.png",

                    text : [
                        <p> Full-stack developer Internship at <WordInteractive text = "Unipays" content = "Start-up in an employment field" link = ""></WordInteractive> (2021). Was responsible for
                        creation of single page applications,using ReactJs in frontend and Django
                        in backend. + Design</p>
                    ] 
                },
                messenger : {
                    photo : "messenger.png",

                    text : [
                        <p>Freelance – <WordInteractive text = "Messenger Bots" content = "Tic Tac Toe and Minesbot in a messenger!" link = "https://github.com/qwazzarr/mini_games_bot"/>.(2021)
                        Wrote several bots in telegram for private customers. Used Telegram API with
                        webhooks + Spring Boot/Python.</p>
                    ]
                },

                pokemon : {

                    photo : "pokemon.png",

                    text : [
                        <p><WordInteractive text = "Pokemon Chat" content = "Anonymous messengers are the future:" link = ""/> Anonymous essaging with people close to your geolocation.</p>,  
                        <p>Client : swiftUI , Backend: SpringBoot. <br/>*Under construction*</p>   
                    ]

                },

                junction : {
                    
                    photo : "junction.png",

                    text : [
                        <p>Top-10 in <WordInteractive text = "Junction" content = "150+ projects multi-national hackathon" link="https://www.junction2021.com"/> hackathon.
                        An unique interactive <WordInteractive text = "map" content = "Thanks to Figma!" link ="https://github.com/konstantikkov/jucntion2021"/> filled with collected data.</p>
                    ]
                },

                motionTailor : {

                    photo : "messenger.png",

                    text : [
                        <p>Worked in <WordInteractive text= "MotionTailor" content="Startup in personalised videos generation field" link = "https://www.motiontailor.com"/> (2022). Was working on writing scripts for automatisation company's API jobs. Used Pandas and Python API libraries.</p>
                    ]
                }
                
            },
            description : [<div>Current <WordInteractive text = "University of Exeter" content = "UK   Russel group university" link = "https://en.wikipedia.org/wiki/University_of_Exeter" />, Computer Science & Math student. 
                        Since 2018 I’ve been creating projects using various technologies. Ready to apply all my skills to your projects!</div>,
                         <div>Currently looking for one year internships starting 2023 or summer 2023 internships</div>]

            
        }
    }
