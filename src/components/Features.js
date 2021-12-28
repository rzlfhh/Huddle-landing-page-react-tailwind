import React from 'react'
import CardFeatures from './CardFeatures'
import growtoght from '../images/illustration-grow-together.svg'
import conv from '../images/illustration-flowing-conversation.svg'
import users from '../images/illustration-your-users.svg'

const Features = () => {
    return (
        <section className='px-4 mt-16 md:px-8 lg:px-16'>
            <CardFeatures
                img={growtoght}
                heading="Grow Together"
                desc="Generate meaningful discussions with your audience and build a strong, loyal community.
                    Think of the insightful conversations you miss out on with a feedback form." />
            <CardFeatures
                img={conv}
                heading="Flowing Conversations" desc="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow." />
            <CardFeatures
                img={users}
                heading="Your Users"
                desc="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately." />
        </section>
    )
}

export default Features
