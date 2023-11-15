import React from 'react'

export default function Section12({getPageNameFromSection12Btn}) {
    const handleFindOutHowCanIHelpYou = () => {
        getPageNameFromSection12Btn("Contact")
    }
    return (
        <div className='section12-parent'>
            <h1>How it all started</h1><br /><br />
            <p>After studying Commercial Economics, I started in banking. As a sales consultant, I advised small and medium-sized companies on banking products, such as insurance. Through my employer – DPA professionals – I was seconded to Rabobank Nederland in Tilburg. That was quite a drive from the Achterhoek. Because of the travel time, I often stayed overnight in Moergestel.

                I found little challenge in my work as a sales consultant. To get away from it all, I started a dropshipping webshop for exclusive rims. Those who know me know that I have had a great passion for everything motorized from childhood on. I had no experience whatsoever in coding, online marketing, and everything that came with entrepreneurship. However, everything could be found on the Internet and in books, so I taught myself.

            </p><br /><br />
            <h1>Hey, that's fun!</h1><br /><br />
            <p>As a website owner, of course, you want to be found well. You can have such a good and unique offer, but of course, if no one knows how to find you, you have pretty little use for it. Soon I came into contact with SEO and SEA. I discovered that through Google Ads you could buy on intentional terms quite easily and that this also paid off well. At least, if you know what you’re doing.

                I enjoyed working with SEA so much that I decided to quit my job in banking and take an Online Marketing traineeship at a medium-sized agency in the region. This time closer to home. Here I learned the basics of my profession in my first year as an Online Marketer.

                A year later, I moved on to a more mature agency in Arnhem. I was diligently looking for seniority. I was looking for colleagues who were more advanced in Google Ads. At that time, I was like a sponge. I wanted to know everything about Google Ads – all the ins and outs. The webshop? I had already sold it for a good price to an entrepreneur in Brabant.</p><br /><br />
            <h1>I started working for myself</h1><br /><br />
            <p>After 3 years of working at online marketing agencies, I decided to become self-employed. I started freelancing in the evenings. It soon became evening hours as well as weekends. Until I could no longer combine it with my job. I quit my job and became a full-time entrepreneur.

                I now help a select number of ambitious companies get the most out of Google Ads. Currently, about €1,500,000 per month in ad spend passes through my fingers. And I expect this to only increase, given the growth my clients experience year on year.

                Over the years I have had the opportunity to work on more than 100 Google Ads accounts. Often challenging accounts from great names, including Weight Watchers, Louwman, Profile Tyrecenter, Schoonenberg, and more. I was also hired by cool agencies – including Yonego, Brandfirm, and eRocket – to share my knowledge, write out work processes and build out the advertising team.

                In addition to the operational work I do for my clients, I develop Google Ads training for the advanced specialist. I also provide customized 1-on-1 coaching sessions and teach other Google Ads specialists and agencies the intricacies of the business.</p><br /><br />
            <div>
                <button onClick={handleFindOutHowCanIHelpYou}>Find out how can I help you</button>
            </div>
        </div>
    )
}
