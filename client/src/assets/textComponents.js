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
                        <p><WordInteractive text = "Pokemon Chat" content = "Anonymous messengers are the future:" link = ""/> Anonymous messaging with people close to your geolocation.</p>,
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

                citiBank : {

                    photo : "junction.png",

                    text : [
                        <p>1 year internship in CitiBank as a member of ultra-low latency <WordInteractive text = "equity risk platform" content = "10 billion $ daily workflow with <1ms latency"/></p>,
                        <p>Used Java, Spring , ChronicleQueues, Solace messaging</p>
                    ]
                },

                motionTailor : {

                    photo : "messenger.png",

                    text : [
                        <p>Worked in <WordInteractive text= "MotionTailor" content="Startup in personalised videos generation field" link = "https://www.motiontailor.com"/> (2022). Was working on writing scripts for automatisation company's API jobs. Used Pandas and Python API libraries.</p>
                    ]
                },

                guessai : {
                    photo : "redditLogo3.png",

                    text : [
                        <p> Created <WordInteractive text="guessAI" content = "Try it yourself!" link = "https://guessai-fa8eb0fa69f1.herokuapp.com/"/> app , where users can guess whether reddit's comment is written using AI or not. </p>,
                        <p> Chat online and guess whether they are talking to a bot </p>,
                        <p> Used NextJS with websockets and OpenAI API</p>
                    ]
                }
                
            },
            description : [<div><WordInteractive text = "University of Exeter" content = "UK   Russel group university" link = "https://en.wikipedia.org/wiki/University_of_Exeter" />, Computer Science & Math student.</div>,
                         <div>Currently looking for summer 2024 internships/Junior positions</div>]

            
        }
    }
