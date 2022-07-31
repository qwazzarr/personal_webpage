import WordInteractive from "../components/wordInteractive"


export default {

    screens : {
        
        
            projects : {
                unipays : {
                    photo: "unipays.png",

                    text : [
                        <p> Full-stack developer Internship at <WordInteractive text = "Unipays" content = "Start-up in an employment field" link = "https://unipaysapp.co.uk"></WordInteractive> (2021). Was responsible for
                        creation of single page applications,using ReactJs in frontend and Django
                        in backend. + Design"</p>
                    ] 
                },
                messenger : {
                    photo : "messenger.png",

                    text : [
                        <p>Freelance – <WordInteractive text = "Messenger Bots" content = "Something cool that will be here" link = "https://github.com/qwazzarr/mini_games_bot"/>.(2021)
                        Wrote several bots in telegram for private customers. Used Telegram API with
                        webhooks + Spring Boot/Python.</p>
                    ]
                },

                pokemon : {

                    photo : "pokemon.png",

                    text : [
                        <p><WordInteractive text = "Pokemon Chat" content = "Anonymous messenger are future:" link = ""/> Anonymous messenging with people close to your
                         geolocation.</p>,
                        <p> Client : swiftUI , Backend: SpringBoot .</p>,
                        <p>*Under construction* </p>
                    ]

                },

                junction : {
                    
                    photo : "junction.png",

                    text : [
                        <p>Top-10 in <WordInteractive text = "Junction" content = "150+ projects multi-national hackathon" link="https://www.junction2021.com"/> hackathon. An unique interactive <WordInteractive text = "map" content = "Thanks to Figma!" link ="https://github.com/konstantikkov/jucntion2021"/> filled with collected data.</p>
                    ]
                }
                
            },
            description : [<p>Current <WordInteractive text = "University of Exeter" content = "Uk Russel group university" link = "https://en.wikipedia.org/wiki/University_of_Exeter" />, Computer Science & Math student.  Had first programming projects in 2018 , never stopped since then. Web services are my passion and i am ready to apply my knowledge to your projects.</p>,
                         <p>Looking for projects , internships , part-time jobs.</p>]

            
        }
    }
