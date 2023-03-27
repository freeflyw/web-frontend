import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import logo from "../../assets/hasset/bsvg.svg"
import logo1 from "../../assets/hasset/bsvg1.svg"
import Nav from '../nav'
import "./Resource.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from "./data.js"
function Resources() {
    const [isWing, setisWing] = useState(true)
    setTimeout(() => setisWing(!isWing), 3000)
    const navigate = useNavigate()
    return (
        <main className='market-home w-full h-full'>
            <header className='w-full flex  justify-center'>
                <div class="header-center ">
                    <a class="logo " href='/'>
                        {
                            isWing ? <img src={logo} id="wings" alt="logo" /> :
                                <img src={logo1} id="wings" alt="logo" />
                        }
                        <div class="logo-text">
                            <h2><span className='cyan' >FREEFLY</span> WINGS</h2>
                            <p>WE GIVE WINGS TO YOUR BUISNESS</p>
                        </div>
                    </a>
                    <div class="header2 flex gap-25">

                        <button class="cyan-br-btn" onClick={() => navigate("/signup")}>
                            Let's talk
                        </button>

                    </div>
                </div>
            </header>

            <div class="main-container2 flex justify-left gap-7">
                <Nav />
                <div class="s-hero" >
                    <div class="m-hero-container " style={{ overflow: "initial" }}>
                        <div class="m-hero-header">
                            <h2 className='text-white '> <span style={{ border: "none" }}><span id='m'>R</span >esources</span></h2>
                        </div>
                        <article class="resource-container" style={{ whiteSpace: "" }}>

                         <h2>Free Fly Wings</h2>

<h3>1) Market Wing:</h3>

Advertise, analyze, and optimize! We do it all for you

We effectively harness the power of social media to make use of the best platforms, connect with the proper audience, and start and foster constructive dialogues with them.
We also make sure that your customers may interact with, contribute to, rate, and promote your information, services, and products. We also conduct targeted, strategic advertising campaigns across a variety of media.

<h4>SMM:</h4>

For greater audience engagement and reach, social media content preparation and great social content are essential. We identify the next best course of action and provide an instant  plan by evaluating your existing business situation and your short-term objectives. While all of this is going on, our strategy team develops a seamless step of actions that will scale your social media efforts.
Social media management aids in converting viewers into fans and followers which then leads to becoming a customer of your products/services.
Extend the reach of your brand on the most popular social networks online. The two constant elements needed to succeed online are creative content and smooth implementation. 


<h4>SEO</h4>
Before making any purchase, Customers often perform a Google search for information about your products. Customers trust the results if they can find the necessary details on the first page.
When done properly, SEO ensures that you consistently receive new organic leads and traffic.

We Improve your search ranking. Better SEO results in greater visibility. We help in bringing customers to your websites which increases leads naturally without spending money on advertising. After all, for a healthy traffic ratio, SEO should account for 60% of the traffic.
We make Your website rank towards the top of various search engines' organic search results for relevant keywords once it has been optimised with quality content and SEO services.


<h4>PPC</h4>
One of  the form of paid advertising that helps your website rank better and show up in the top search results is PPC, or pay-per-click marketing. You can use it to bid on keywords to target particular platforms or audiences, producing replies that are more targeted and significant.
All search and shopping engines use pay-per-click advertising as their main form of marketing. PPC is occasionally an optional payment type in affiliate, display, and social media marketing.

<h3>How it works? </h3>
PPC is a cutting-edge form of marketing and advertising. 
Pay-per-click advertising prioritises leads and sales. After exploring all of your options for organic lead generation, the next obvious move is to launch an effective PPC marketing campaign.
Benefits:
Excellent visibility and ongoing website traffic are produced by PPC marketing.
The appropriate keywords are used in the formulation of PPC marketing campaigns. They are extremely effective because of their well-organized network.
PPC is very concentrated and action-driven. An organic presence takes time to develop. PPC marketing produces results more quickly than organic traffic generation.


<h4>Content  marketing:</h4>
Our team understands that in order to reach the intended audiences, excellent material needs to be published and distributed strategically.
By regularly posting blogs, articles, case studies, we publish and distribute content.

In order to expand the reach of the target audience, generate more leads, increase conversion,It is important for every brand to produce valuable content using the relevant, systematic, and goal-oriented strategy of content marketing.  We help you in focusing on frequent publication, distribution, and analysis of marketing content.
In general, content marketing helps every firm in connecting with their target market, grabbing their attention, increasing visibility, building presence, doing brand recall, and generating sales. We help you in building specific market niches for your brand and boost total ROI with the help of strategic content development and marketing support.


<h4>Influencer Marketing:</h4>
It can be challenging to identify the correct influencer, and managing such relationships can be even more complex. With the use of our solutions  equip yourself with the tools you need to manage the entire process, from influencer research to  campaign management.

Although you may be aware that influencer marketing can help your business, you may not be sure how to take advantage of it. You've come to the correct place since we can assist your company in developing successful influencer marketing campaigns.
We design the most genuine, scalable, and ROI-focused social media influencer campaigns for outstanding businesses like yours. 

Our work on influencer marketing campaigns begins with an understanding of the KPIs, followed by the identification of the appropriate influencers, work on the campaign's narrative, management of the execution, and completion with tracking and in-depth reporting.

<h4>Email marketing:</h4>
Email marketing for your products or services can be a quick, adaptable, and affordable approach to attract new clients and keep grasp of existing customers by promoting frequent website visits.

You can develop targeted and customized communications with Our Email marketing services. This could facilitate the development of deep connections with your customers. Your direct marketing efforts' response rates may also increase as a result.

<h4>Email newsletters:</h4>
Email newsletters are among the most frequent and well-liked email marketing practices. A small business might utilise an email newsletter to share useful information and resources with its readers. 
We help in creating interesting material, incorporating thought leadership, how-tos, and news about new services and products enrich the content your subscribers receive in their inboxes.

<h4>Acquisition mails:</h4>
Acquisition emails can help your small business in acquiring subscribers who have chosen to receive your emails but haven't yet become clients. You may demonstrate the benefits of becoming an active customer to individuals on your email list by generating compelling offers and educational content. Acquisition emails are a terrific method to target customers who have shown some interest in what your organisation has to offer, develop your business and drive additional revenue, and move leads through the conversion funnel more quickly.

<h4>Promotional mails:</h4>
Promotional emails are a fantastic approach for your small business to increase sales, signups, and new product offerings. Promotional emails contain discounts and other incentives to persuade your target audience to purchase a new product or service. We use promotional emails to drive new products or services to subscribers, reward engaged subscribers with special offers, and cross-sell products to your customers.
Retention mails
We consider Retention Emails for businesses which have some experience with email marketing campaigns. It helps businesses to keep in touch with subscribers who haven't interacted with your brand or email campaigns recently by sending them a note asking for feedback or making an offer. Retention Emails are a very important email advertising tactic that can help you keep your hard-won consumers.

<h4>Lead generation:</h4>
Lead generation is given a lot of attention because it is the initial step in getting customers to the business. The team aids in the creation of leads for the business to attract additional clients, and our CRM team will turn those leads into clients.
Our team develops the lead generation programmes, which are then put into action to generate leads that have been verified.

Lead generation is crucial to enhance your company's revenue.
Because of this, we create and apply the best techniques for your company in order to increase interest. We can start generating quality-driven leads with the highest conversion rates from this heightened level of interest.
Our lead generation services are focused on supplying warm leads that are eager to hear from you and interested in your company's fantastic initiatives.

With our lead generating services, we customize a marketing approach to get the best return on investment.
In order to increase the quality, quantity, and conversion of sales, we give you a personalized touch while generating the leads you require within the budget you set.


<h3>2)Recruit Wing:</h3>

Finding The Right Employee For The Right Employer

We are experts at filling trainees to middle management positions with permanent, temporary, and contract employees.

We will assist you in creating a comprehensive recruitment framework that gives you the freedom to make your own decisions while attracting and keeping the greatest talent since we recognise how vital it is for businesses to find, hire, and nurture the right people.

We are enthusiastically committed to conducting recruitment differently. We take a consultative approach, that is proactive, and relationship-driven.

In order to provide an ethical service, we put a strong emphasis on ensuring diversity and equal opportunity in the recruitment and selection process. We also make sure our clients' hiring procedures are ethical.

Contract Staffing<br/>
Permanent staffing<br/>
Freelancing<br/>
Headings<br/>
i. React native developer<br/>
ii. React JS Developer<br/>
iii. Business Development    Executive<br/>
iv.DevOps Engineer<br/>
 v. fullstack Developer<br/>
vi. Azure. Net developer<br/>
vii. Data scientist<br/>
vii. Marketing Manager<br/>
viii. Project Manager<br/>
ix. Android Developer<br/>
x. AI Engineer<br/>


<h3>3)Develop Wing:</h3>
Where Imagination meets technology to scale up your business

<h4>Web Development:</h4>
FreeFlyWings help you in creating a user-friendly, dynamic, visually appealing, and user-friendly  Ecommerce website for your business.
 
The most crucial marketing tool you will ever have could be a well-designed website. It serves as the focal point for all of your marketing initiatives, as well as the first and most accurate representation of your brand. a user interface that is well-built to communicate with, inspire, and engage your audience as well as your client base. In addition, we design experiences rather than just websites. experiences that raise brand value and draw interest in order to produce some immediate effects.

We'll make sure that your audience to be captivated as soon as they arrive at your homepage with our demonstrated ability in creating high-quality websites. We optimize your website's design and content to meet your goals, whether they be lead generation or brand exposure. If you run an eCommerce business,  we help in adding the required e-commerce elements, such as shopping cart and payment gateways, to your existing website to help in monetising it.

Furthermore, whenever needed, we are skilled at creating Brand-new e-commerce websites from scratch. After all, we'll grab every chance to use our imaginations and produce something absolutely spectacular! 
Our eCommerce website design team are skilled in the most up-to-date tools and technologies , which not only enables them to provide the finest user experience but also protects your website from hacker assaults and harmful software. We can help you get your business online and attract new customers. We can design a stunning and useful website that your customers will admire.
<br/>
-Website for start-up<br/>
-Corporate website<br/>
-E Commerce Website<br/>
-WordPress website<br/>
-Landing and promo sites<br/>
-CMS website<br/>
-

<h4>App Development:</h4>

With the help of our in-depth knowledge of all key technologies, amaze your audience with interactional and feature-rich native iOS / Android, cross-platform, or Progressive Web Apps.

Our developers are skilled in delivering solutions that satisfy market demands, strengthen corporate identities, and promote company growth and expansion.
We help companies develop their presence on any contemporary device and platform by utilizing the most recent technologies.
<br/>
<p>i.Hybrid Mobile App Development</p>
 A special fusion of native and web app technologies which allows cross-platform applications to function in different environments.
 <br/>
<p>ii. Native Mobile App Development</p>
Our team can help you create high-quality native apps for iOS and Android platforms that are in line with your business needs and security.
<br/>
<p>iii. Progressive Web App Development</p>
By using Progressive Web Apps, your business can reach everyone, everywhere, on any device, and provide installability and functionality similar to those of native applications.
<br/>
<p>iv. React native Mobile application</p>
Get specialized solutions for your company by utilizing the expertise of our React Native developers. We can create anything from a straightforward app with minimal capabilities to a sophisticated enterprise solution.
<br/>
<p>v. IOS Development</p>
Our iPhone application developers have experience developing extensible, cutting-edge iOS solutions. We specialise in providing unique iOS software to both established businesses and startups around the world.


                        </article>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </main >
    )
}

export default Resources